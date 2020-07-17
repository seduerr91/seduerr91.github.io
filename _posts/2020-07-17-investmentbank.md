---
title: Introduction to Investment Banking
tags: [Management & Banking]
style: fill
color: dark
description: Notes on Comparable Company Analysis, Preceding Transaction Analysis, LBO, M&A, etc.
---

## Introduction to Investment Banking

This article briefly introduces the field of investment banking. It is structured into three domains: valuation, leveraged buyouts, and mergers & acquisitions.

![Cash](https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)
Photo by Alexander Mils on Unsplash

### Domain 1: Valuation

The valuation of focus assets, i.e. targets, usually is done by deploying the analysis of (1) comparable companies, (2) preceding transaction, and (3) discounted cash flow.

1. Comparable Companies Analysis

With the comparable companies analysis (CCA), a private or a public company is benchmarked against the 'market', i.e. other similar companies via financial indicators.
The application fields are mergers & acquisitions (M&A), initial public offerings (IPOs), restructuring, or making investment decisions. Built on the premise that similar companies to the target provide a highly relevant reference point of valuing it, a universe of comparable companies is selected.
[Inspect an Exemplary Comparable Company Analysis.](https://i.imgur.com/b7KC34l.png)

Main financial indicators are:

Data Type| Financial Information | Source
---|---|---
Income Statement Data|Sales, Gross Profit, EBITDA, EBIT, Net Income, EPS, Research Estimates| 10-K, 10-Q, 8-K
Balance Sheet Data|Cash Balance, Debt Balance, Shareholder's Equity  | 10-K, 10-Q, 8-K
Cash flow Statement Data|Depreciation and Amortization, Capital Expenditure | 10-K, 10-Q, 8-K
Share Data| Basic Shares Outstanding, Options and Warrants Data| 10-K, 10-Q, 8-K
Market Data | Share Price Data, Credit Ratings | Bloomberg, Rating Agencies

2. Preceding Transaction Analysis

The preceding transaction analysis (PTA) builds on the premise of multiples paid for prior transactions of comparable firms. To determine the potential sales price range in a merger, acquisition, or restructuring transaction the best comparisons involve companies similar to the target. Usually, most recent transactions are the most relevant ones. Considerations that influence the price range settings can be found hereafter.

Environmental Aspect | Definition
---|---
Market Conditions | state of the capital market at time, context of sector or cycle
Deal Dynamics | strategic buyer or financial sponsor
Sales Process & Deal Nature | auctions, hostile situation, merger of equals
Purchase Considerations | use of stock as a meaning full portion, use of cash

[Inspect an Exemplary Preceding Transaction Analysis.](https://i.imgur.com/WUkHxBz.png)

3. Discounted Cashflow Analysis

The discount cash flow analysis (DCF) rests on the assumption that a target's value can be derived from the present value of its projected free cash flow (FCF). The projected FCF is derived from a variety of assumptions about future financial performance (sales growth, profit margins, capital expenditure, and net working capital requirements). The valuation implied for a target by DCF is the intrinsic value (versus the market value).
Starting from the Earnings before Interest and Taxes (EBIT), you arrive at the FCF after some financial modeling:

```python
EBIT - Taxes = EBIAT
Free Cash Flow = EBIAT + Depreciation and Amortization - Capital Expenditure + Δ Net Working Capital
```
The terms of above's are defined hereafter.

Terms | Definition
---|---
Depreciation| Non-cash expense that approximates the reduction of the book value of a companies' long-term fixed assets over useful life.
Amortization | Non-cash expense that reduces the value of a company's definite life intangible assets.
Capital Expenditure | Funds a company uses to purchase, improve, expand or replace physical assets.
Change in Net Working Capital| Non-cash current assets less non-interest-bearing current liabilities.

The change in networking capital is calculated as presented in the following formulas:

```python
Net Working Capital = Current Assets - Current Liabilities
Current Assets = Accounts Receivable + Inventory + Prepaid Expense and other Current Assets
Current Liabilities = Accounts Payable + Accrued Liabilities + Other Current Liabilities
```

The terms' defintions that are composing these formulas are explained in below's table.

Terms | Definition
---|---
Accounts Receivable | Amounts owned to a company for its products and services sold on credit.
Inventory | Value of a company's raw materials, work in progress, and finished goods.
Prepaid Expense and Other | Payments made by a company before a product has been delivered.
Accounts Payable | Amounts owed by a company for products & services already purchased.
Accrued Liabilities and other current Liabilities | Expenses such as salaries, rents, interest and taxes incurred but not yet paid.

[Inspect an Exemplary Discounted Cashflow Analysis.](https://i.imgur.com/amoBeK8.png)

### Leveraged Buyouts

After having identified a target, and conducting thorough financial due diligence, the financing structure of the investments has to be defined. In a private equity endeavour this is done via leveraged buyouts.

Leveraged buyouts (LBOs) is the acquisition of a target using debt to finance a large portion of the purchase price, while the residual portion is funded with an equity contribution by a sponsor. LBOs are used by sponsors to acquire a broad range of businesses.

Companies with stable and predictable cash flows or substantial asset bases represent attractive LBO candidates. In an LBO, the disproportionately high level of debt incurred by the target is supported by its projected FCF and asset base, which enables the sponsor to contribute a small equity investment relative to the purchase price. This enables the sponsor to realize an acceptable return on its equity investment upon exit.

The corresponding LBO analysis is the core analytical tool to assess financing structure, investment returns, and valuation for LBO. It is also used to assess refinancing opportunities and restructuring alternatives for corporate issuers.
At its center, there is the financial model constructed with flexibility to analyze a given target under multiple financing structures, and operating scenarios.
The premise is to craft a viable financing structure for the target based on its cash flow, debt repayment, credit statistics, and investment returns.
The sponsors work with investment banks to determine the preferred financing structure.

[Please find an Exemplary LBO here.](https://i.imgur.com/8mTKuT4.png)

M&A advisory context provides the basis for determining an implied valuation range.

### Mergers & Acquisitions

M&A involves the two sides which are the sell and the buy-side.

In sell-side M&A, the investment bank is the sell-side advisor with an optimal mix of value maximization, speed of execution, and certainty of completion.
Prospective buyers often hire an investment bank to perform the valuation work, interface with the seller and to conduct the negotiations.

Sell-side advisors are responsible for identifying the seller's priorities from the onset and craft a tailored sale process accordingly. The sell-side assignment requires a comprehensive valuation of the target with the most basic being to run either broad or targeted auction or to pursue a negotiation sale.

On the buy-side, the discussion of M&A strategies and motivations, including the deal rationale and synergies, form of financing, and the deal structure is handled. A comprehensive analysis for a target is based on CCA, PTA, DCF, and LBO analysis is conducted and displayed on the ['football field'](https://i.imgur.com/D4dGjmO.png).

Afterwards, the analysis at various prices (AVP) and contribution analysis are conducted.
- AVP displays the implied multiples paid at a range of transaction values and offer prices.
- The contribution analysis determines the financial 'contributions' made by the acquirers and target to the pro forma entity before any transaction adjustment.

[Find an example for an AVP here.](https://i.imgur.com/BNDhy3E.png)

Finally, the detailed merger consequences to fine-tune the ultimate purchase price, deal structure & financing mix are executed. This examines ...
- the pro forma impact of the transaction on the acquirer,
- the impact on earnings (via accretion/dilution analysis), and
- the balance sheet effects which impact credit statistics.

Overall, these steps are usually conducted only by a small team of people and can lead to significant transaction volumes, and personal gains for the investment bankers involved.
