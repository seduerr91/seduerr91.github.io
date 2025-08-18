---
title: Eval Driven Design
tags: [Evaluation, AI]
style: fill
color: secondary
description: An Article on Eval Driven Design not written by AI
---

This article is based on the cookbook by OpenAI on [eval driven system design](https://github.com/openai/openai-cookbook/blob/main/examples/partners/eval_driven_system_design/receipt_inspection.ipynb). It is written mainly without AI since I want to get back into proper writing.

## My Key Takeaways

My most insightful points in this document were:

- Connecting evals to business metrics back to evals
- Using Graders
- The flywheel setup 

## Connecting Evals to Business

We need to imbue our measurements with raison d'être - meaning a reason to exist. Besides the evaluation, we need a set of business metrics. Always connect the performance (eval) of the model to US dollars else you cannot measure your impact (money saved to the company, money made for the company) but write it as a simple parametrized Python function that takes the tn and tp of your eval results as parameters.

Therefore, use the classic McKinsey style calculations:

- our company processes 1 million receipts a year, at a baseline cost of $0.20 / receipt = $200,000
- auditing a receipt costs about $2
- failing to audit a receipt we should have audited costs an average of $30 
- 5% of receipts need to be audited = 50,000 receipts
- the existing process identifies receipts that need to be audited 97% of the time misidentifies receipts that don't need to be audited 2% of the time

This gives us two baseline comparisons:

- if we identified every receipt correctly, we would spend $100,000 on audits
- our current process spends 
- 45,000 to un-audited expenses
- On top of that, the human-driven process costs an additional $200,000.

We're expecting our service to save money by costing less to run (≈1¢/receipt if we use the prompts from above with o4-mini), but whether we save or lose money on audits and missed audits depends on how well our system performs. It might be worth writing this as a simple function — written below is a version that includes the above factors but neglects nuance and ignores development, maintenance, and serving costs.

```python
def calculate_costs(fp_rate: float, fn_rate: float, per_receipt_cost: float):
    audit_cost = 2
    missed_audit_cost = 30
    receipt_count = 1e6
    audit_fraction = 0.05

    needs_audit_count = receipt_count * audit_fraction
    no_needs_audit_count = receipt_count - needs_audit_count

    missed_audits = needs_audit_count * fn_rate
    total_audits = needs_audit_count * (1 - fn_rate) + no_needs_audit_count * fp_rate

    audit_cost = total_audits * audit_cost
    missed_audit_cost = missed_audits * missed_audit_cost
    processing_cost = receipt_count * per_receipt_cost

    return audit_cost + missed_audit_cost + processing_cost


perfect_system_cost = calculate_costs(0, 0, 0)
current_system_cost = calculate_costs(0.02, 0.03, 0.20)

print(f"Current system cost: ${current_system_cost:,.0f}")
```

Then ALWAYS connect these numbers back to the model / eval metrics to inform your model development efforts. Their example is:

_The point of the above model is it lets us apply meaning to an eval that would otherwise just be a number. For instance, when we ran the system above we were wrong 85% of the time for merchant names. But digging in, it seems like most instances are capitalization issues or "Shell Gasoline" vs. "Shell Oil #2144" — problems that when we follow through, do not appear to affect our audit decision or change our fundamental costs.

On the other hand, it seems like we fail to catch handwritten "X"s on receipts about half the time, and about half of the time when there's an "X" on a receipt that gets missed, it results in a receipt not getting audited when it should. Those are overrepresented in our dataset, but if that makes up even 1% of receipts, that 50% failure would cost us $75,000 a year.

Similarly, it seems like we have OCR errors that cause us to audit receipts quite often on account of the math not working out, up to 20% of the time. This could cost us almost $400,000!_


## Using Graders

OpenAI uses [graders](https://platform.openai.com/docs/guides/graders) to score evaluations.
The provide narrow checks for specific fields / some portion of the predicted output.

## The Flywheel Setup

Importantly, you want a flywheel even if you go from 20 examples to more. 

![flywheel](https://raw.githubusercontent.com/openai/openai-cookbook/25b5b02355992146495f7f8b5bec03a156492c3f/images/partner_development_flywheel.png)

## The Improvement Process

Furthermore, they describe an improvement process for increasing the eval performance of the model as follows:

![improvement](https://raw.githubusercontent.com/openai/openai-cookbook/25b5b02355992146495f7f8b5bec03a156492c3f/images/partner_model_improvement_waterfall.png)



## General Functions

The team of Fractional (a consultancy and OpenAI) introduce a fictional receipt processing and audit classification system. Therefore, they use two functions:

- extract_receipt_details: extracting the Pydantic defined structured output
- evaluate_receipt_for_audit: 

### The extraction function

The pydantic schema simply looks for a location, and the receipt details with its lineitems:

```python
from pydantic import BaseModel


class Location(BaseModel):
    city: str | None
    state: str | None
    zipcode: str | None


class LineItem(BaseModel):
    description: str | None
    product_code: str | None
    category: str | None
    item_price: str | None
    sale_price: str | None
    quantity: str | None
    total: str | None


class ReceiptDetails(BaseModel):
    merchant: str | None
    location: Location
    time: str | None
    items: list[LineItem]
    subtotal: str | None
    tax: str | None
    total: str | None
    handwritten_notes: list[str]
```

The basic v0 prompt asks to identify all these elements from the receipt image::

```python
BASIC_PROMPT = """
Given an image of a retail receipt, extract all relevant information and format it as a structured response.

# Task Description

Carefully examine the receipt image and identify the following key information:

1. Merchant name and any relevant store identification
2. Location information (city, state, ZIP code)
3. Date and time of purchase
4. All purchased items with their:
   * Item description/name
   * Item code/SKU (if present)
   * Category (infer from context if not explicit)
   * Regular price per item (if available)
   * Sale price per item (if discounted)
   * Quantity purchased
   * Total price for the line item
5. Financial summary:
   * Subtotal before tax
   * Tax amount
   * Final total
6. Any handwritten notes or annotations on the receipt (list each separately)

## Important Guidelines

* If information is unclear or missing, return null for that field
* Format dates as ISO format (YYYY-MM-DDTHH:MM:SS)
* Format all monetary values as decimal numbers
* Distinguish between printed text and handwritten notes
* Be precise with amounts and totals
* For ambiguous items, use your best judgment based on context

Your response should be structured and complete, capturing all available information
from the receipt.
"""
```

And the actual extraction function just puts these together inferring the mime_type. 

```python
import base64
import mimetypes # for image procesing
from pathlib import Path

from openai import AsyncOpenAI

client = AsyncOpenAI()


async def extract_receipt_details(
    image_path: str, model: str = "o4-mini"
) -> ReceiptDetails:
    """Extract structured details from a receipt image."""
    # Determine image type for data URI.
    mime_type, _ = mimetypes.guess_type(image_path)

    # Read and base64 encode the image.
    b64_image = base64.b64encode(Path(image_path).read_bytes()).decode("utf-8")
    image_data_url = f"data:{mime_type};base64,{b64_image}"

    response = await client.responses.parse(
        model=model,
        input=[
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": BASIC_PROMPT},
                    {"type": "input_image", "image_url": image_data_url},
                ],
            }
        ],
        text_format=ReceiptDetails,
    )

    return response.output_parsed
```

### Audit Portion

The audit prompt defines a rubric of 4 elements to evaluate the receipt: 

```python
from pydantic import BaseModel, Field

audit_prompt = """
Evaluate this receipt data to determine if it need to be audited based on the following
criteria:

1. NOT_TRAVEL_RELATED:
   - IMPORTANT: For this criterion, travel-related expenses include but are not limited
   to: gas, hotel, airfare, or car rental.
   - If the receipt IS for a travel-related expense, set this to FALSE.
   - If the receipt is NOT for a travel-related expense (like office supplies), set this
   to TRUE.
   - In other words, if the receipt shows FUEL/GAS, this would be FALSE because gas IS
   travel-related.

2. AMOUNT_OVER_LIMIT: The total amount exceeds $50

3. MATH_ERROR: The math for computing the total doesn't add up (line items don't sum to
   total)

4. HANDWRITTEN_X: There is an "X" in the handwritten notes

For each criterion, determine if it is violated (true) or not (false). Provide your
reasoning for each decision, and make a final determination on whether the receipt needs
auditing. A receipt needs auditing if ANY of the criteria are violated.

Return a structured response with your evaluation.
"""
```

Then the Pydantic schema takes the fields that shall all be false to not audit them, and also requests a reasoning, and a final decision based on the rubric.

```python
class AuditDecision(BaseModel):
    not_travel_related: bool = Field(
        description="True if the receipt is not travel-related"
    )
    amount_over_limit: bool = Field(description="True if the total amount exceeds $50")
    math_error: bool = Field(description="True if there are math errors in the receipt")
    handwritten_x: bool = Field(
        description="True if there is an 'X' in the handwritten notes"
    )
    reasoning: str = Field(description="Explanation for the audit decision")
    needs_audit: bool = Field(
        description="Final determination if receipt needs auditing"
    )
```

Finaly, the evaluate receipt for audit function is pretty standard. It just puts the receipt details into a JSON and sends it to the model.

```python
async def evaluate_receipt_for_audit(
    receipt_details: ReceiptDetails, model: str = "o4-mini"
) -> AuditDecision:
    """Determine if a receipt needs to be audited based on defined criteria."""
    # Convert receipt details to JSON for the prompt
    receipt_json = receipt_details.model_dump_json(indent=2)

    response = await client.responses.parse(
        model=model,
        input=[
            {
                "role": "user",
                "content": [
                    {"type": "input_text", "text": audit_prompt},
                    {"type": "input_text", "text": f"Receipt details:\n{receipt_json}"},
                ],
            }
        ],
        text_format=AuditDecision,
    )

    return response.output_parsed
```
