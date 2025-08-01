--- 
title: DeepEval Evaluation Metrics: A Comprehensive Study Guide
description: A complete guide to the evaluation metrics available in DeepEval.
tags: ['DeepEval', 'LLM Evaluation', 'Metrics']
style: 'fill'
color: 'secondary'
--- 

## Introduction to DeepEval Metrics

DeepEval provides a powerful and extensible suite of metrics for evaluating Large Language Models (LLMs) and LLM-powered applications. These metrics are essential for ensuring the quality, safety, and performance of systems in both development and production. This guide consolidates the key information about each metric to serve as a quick reference for interview preparation.

Metrics in DeepEval can be broadly categorized into:
- **RAG Metrics:** For evaluating Retrieval-Augmented Generation pipelines.
- **Conversational Metrics:** For assessing the quality of multi-turn dialogues.
- **Safety & Security Metrics:** For identifying risks like bias, toxicity, and data leakage.
- **Agentic Metrics:** For evaluating the performance of LLM agents and their use of tools.
- **Custom & Specialized Metrics:** For creating bespoke evaluation criteria tailored to specific use cases.

Most metrics are **LLM-as-a-judge**, meaning they use a powerful model (e.g., GPT-4) to score outputs. They typically return a score between 0.0 and 1.0, with a default passing `threshold` of 0.5.

---

## RAG Metrics

These metrics evaluate the core components of a RAG pipeline: the retriever and the generator.

### Faithfulness
- **Purpose:** Measures if the generated `actual_output` is factually consistent with the `retrieval_context`.
- **Use Case:** Preventing hallucinations in RAG systems.
- **Key Arguments:** `input`, `actual_output`, `retrieval_context`.
- **Calculation:** `Faithfulness = (Number of Truthful Claims) / (Total Number of Claims)`.
  - An LLM first extracts all claims from the `actual_output`.
  - Then, it verifies each claim against the `retrieval_context`.
- **Example:**
  - `actual_output`: "We offer a 30-day full refund at no extra cost."
  - `retrieval_context`: ["All customers are eligible for a 30 day full refund at no extra cost."]
  - **Result:** The claim is truthful, leading to a high faithfulness score.

### Answer Relevancy
- **Purpose:** Assesses how relevant the `actual_output` is to the `input`.
- **Use Case:** Ensuring the LLM's response directly addresses the user's query.
- **Key Arguments:** `input`, `actual_output`.
- **Calculation:** `Answer Relevancy = (Number of Relevant Statements) / (Total Number of Statements)`.
  - An LLM first extracts all statements from the `actual_output`.
  - Then, it classifies each statement's relevance to the `input`.
- **Example:**
  - `input`: "What if these shoes don't fit?"
  - `actual_output`: "We offer a 30-day full refund at no extra cost."
  - **Result:** The output directly answers the input, resulting in a high relevancy score.

### Contextual Precision
- **Purpose:** Evaluates the quality of the `retrieval_context` by measuring if relevant nodes are ranked higher than irrelevant ones.
- **Use Case:** Optimizing the re-ranking logic of a retriever.
- **Key Arguments:** `input`, `expected_output`, `retrieval_context`.
- **Calculation:** A weighted cumulative precision score that gives more weight to relevant nodes appearing earlier in the `retrieval_context`.
- **Example:**
  - `retrieval_context`: ["Relevant Node 1", "Irrelevant Node", "Relevant Node 2"]
  - **Result:** A higher score is given if "Relevant Node 1" is ranked first, as it penalizes irrelevant nodes that appear before relevant ones.

### Contextual Recall
- **Purpose:** Measures how well the `retrieval_context` contains all the necessary information to generate the `expected_output`.
- **Use Case:** Ensuring the retriever fetches comprehensive information.
- **Key Arguments:** `input`, `expected_output`, `retrieval_context`.
- **Calculation:** `Contextual Recall = (Number of Attributable Statements) / (Total Number of Statements)`.
  - An LLM extracts statements from the `expected_output`.
  - It then verifies if each statement can be attributed to the `retrieval_context`.
- **Example:**
  - `expected_output`: "You are eligible for a 30 day full refund at no extra cost."
  - `retrieval_context`: ["All customers are eligible for a 30 day full refund..."]
  - **Result:** The statement in the `expected_output` is fully supported by the context, yielding a high recall score.

### Contextual Relevancy
- **Purpose:** Determines how relevant the `retrieval_context` is to the `input`.
- **Use Case:** Evaluating the retriever's ability to find relevant information.
- **Key Arguments:** `input`, `retrieval_context`.
- **Calculation:** `Contextual Relevancy = (Number of Relevant Statements) / (Total Number of Statements)`.
  - An LLM extracts statements from the `retrieval_context`.
  - It then classifies each statement's relevance to the `input`.
- **Example:**
  - `input`: "What if these shoes don't fit?"
  - `retrieval_context`: ["All customers are eligible for a 30 day full refund at no extra cost."]
  - **Result:** The context is highly relevant to the input, leading to a high score.

### RAGAS Metric
- **Purpose:** A composite metric that bundles four core RAGAS metrics (`Answer Relevancy`, `Faithfulness`, `Contextual Precision`, `Contextual Recall`) into a single evaluation.
- **Use Case:** Holistic evaluation of a RAG pipeline.

---

## Conversational Metrics

These metrics are designed to evaluate chatbots and other multi-turn systems.

### Role Adherence
- **Purpose:** Checks if the chatbot consistently adheres to its assigned `chatbot_role` throughout a conversation.
- **Use Case:** Evaluating role-playing or persona-based chatbots.
- **Key Arguments:** `turns`, `chatbot_role`.

### Conversation Completeness
- **Purpose:** Assesses whether the chatbot successfully fulfills the user's intentions during a conversation.
- **Use Case:** Measuring goal completion in task-oriented bots.
- **Key Arguments:** `turns`.

### Conversation Relevancy
- **Purpose:** Evaluates if the chatbot's responses remain relevant and on-topic across multiple turns.
- **Use Case:** Preventing conversational drift.
- **Key Arguments:** `turns`.

### Knowledge Retention
- **Purpose:** Measures if the chatbot can retain and recall facts from earlier in the conversation.
- **Use Case:** Testing memory in conversational agents.
- **Key Arguments:** `turns`.

---

## Safety & Security Metrics

These metrics identify and penalize undesirable or harmful LLM behaviors.

### Bias
- **Purpose:** Detects gender, racial, political, and other forms of bias in the `actual_output`.
- **Use Case:** Ensuring fairness and ethical AI.
- **Key Arguments:** `input`, `actual_output`.
- **Calculation:** `Bias Score = (Number of Biased Opinions) / (Total Number of Opinions)`.
  - An LLM first extracts all opinions from the `actual_output`.
  - It then classifies each opinion as biased or not based on a rubric (gender, political, racial, etc.).
- **Example:**
  - `actual_output`: "The businessman closed the deal while his female assistant took notes."
  - **Result:** This statement contains gender bias. The metric identifies the biased opinion, resulting in a higher bias score (note: for bias, a lower score is better).

### Toxicity
- **Purpose:** Measures the level of toxic language (e.g., insults, threats) in the `actual_output`.
- **Use Case:** Content moderation and safety filtering.
- **Key Arguments:** `input`, `actual_output`.
- **Calculation:** `Toxicity Score = (Number of Toxic Opinions) / (Total Number of Opinions)`.
  - An LLM first extracts all opinions from the `actual_output`.
  - It then classifies each opinion as toxic based on a rubric (personal attacks, mockery, etc.).
- **Example:**
  - `actual_output`: "You're clueless and have no idea what you're talking about."
  - **Result:** This is a personal attack and is flagged as toxic, resulting in a higher toxicity score (a lower score is better).

### Hallucination
- **Purpose:** Detects factual inaccuracies in the `actual_output` when compared to a provided `context`.
- **Use Case:** Verifying factual correctness. For RAG systems, use `Faithfulness` instead.
- **Key Arguments:** `actual_output`, `context`.
- **Calculation:** `Hallucination Score = (Number of Contradicted Contexts) / (Total Number of Contexts)`.
  - An LLM checks if the `actual_output` contradicts any information in the provided `context`.
- **Example:**
  - `actual_output`: "A blond drinking water in public."
  - `context`: ["A man with blond-hair, and a brown shirt drinking out of a public water fountain."]
  - **Result:** The output is consistent with the context, leading to a low hallucination score (a lower score is better).

### PII Leakage
- **Purpose:** Checks if the `actual_output` contains Personally Identifiable Information (PII).
- **Use Case:** Data privacy and compliance (GDPR, CCPA).
- **Key Arguments:** `input`, `actual_output`.
- **Calculation:** `PII Leakage Score = (Number of Non-PIIs) / (Total Number of Extracted PIIs)`.
  - An LLM first extracts all factual statements that could potentially contain PII.
  - It then classifies each statement to determine if it actually contains PII.
- **Example:**
  - `actual_output`: "Sure! I can see your account details: John Smith, SSN: 123-45-6789."
  - **Result:** The output contains multiple PII violations (name, SSN), resulting in a low score (a higher score is better, indicating less leakage).

### Misuse
- **Purpose:** Determines if a domain-specific chatbot is being used for out-of-domain tasks.
- **Use Case:** Ensuring chatbots stay on topic (e.g., a legal bot shouldn't give medical advice).
- **Key Arguments:** `input`, `actual_output`, `domain`.
- **Calculation:** `Misuse Score = (Number of Non-Misuses) / (Total Number of Misuses)`.
  - An LLM classifies if the `actual_output` appropriately handles an out-of-domain `input` based on the specified `domain`.
- **Example:**
  - `input`: "Can you help me write a poem about cats?" (for a financial bot)
  - `actual_output`: "Of course! Here's a lovely poem about cats..."
  - **Result:** The financial bot engaged with an out-of-domain request, resulting in a low misuse score (a higher score is better).

### Non-Advice
- **Purpose:** Ensures the LLM refrains from giving professional advice in sensitive domains (e.g., medical, legal).
- **Use Case:** Preventing chatbots from offering unqualified advice.
- **Key Arguments:** `input`, `actual_output`, `advice_types`.
- **Calculation:** `Non-Advice Score = (Number of Appropriate Advices) / (Total Number of Advices)`.
  - An LLM first extracts all advice statements from the `actual_output`.
  - It then classifies if each statement constitutes inappropriate professional advice based on the specified `advice_types`.
- **Example:**
  - `input`: "Should I invest in cryptocurrency?"
  - `actual_output`: "You should definitely put all your money into Bitcoin right now, it's guaranteed to go up!"
  - `advice_types`: ["financial"]
  - **Result:** The output gives direct financial advice, which is inappropriate, resulting in a low non-advice score (a higher score is better).

### Role Violation
- **Purpose:** A single-turn check to see if the LLM breaks its assigned `role`.
- **Use Case:** Enforcing persona consistency in a single response.
- **Key Arguments:** `actual_output`, `role`.

---

## Agentic Metrics

These metrics are focused on evaluating LLM agents, particularly their ability to complete tasks and use tools.

### Task Completion
- **Purpose:** Evaluates how effectively an LLM agent accomplishes a given task by analyzing its full execution trace.
- **Use Case:** Assessing agent performance on multi-step tasks (e.g., a trip planning agent).
- **Key Arguments:** Full agent trace (via `@observe`), or `input`, `actual_output`, `tools_called`.
- **Calculation:** `Task Completion Score = AlignmentScore(Task, Outcome)`.
  - An LLM extracts the `Task` and `Outcome` from the agent's execution trace.
  - Another LLM then judges how well the `Outcome` aligns with the `Task`.
- **Example:**
  - `input`: "Plan a 2-day itinerary for Paris."
  - `actual_output`: "Day 1: Eiffel Tower, eat at Le Jules Verne. Day 2: Louvre Museum, eat at Angelina Paris."
  - `tools_called`: `itinerary_generator`, `restaurant_finder`.
  - **Result:** The agent successfully used its tools to generate a plan that matches the input task, resulting in a high task completion score.

### Tool Correctness
- **Purpose:** A non-LLM metric that verifies if the agent used the `expected_tools` correctly, with configurable strictness.
- **Use Case:** Ensuring agent reliability and predictable tool usage.
- **Key Arguments:** `tools_called`, `expected_tools`.
- **Calculation:** `Tool Correctness Score = (Number of Correctly Used Tools) / (Total Number of Tools Called)`.
  - Compares the `tools_called` list with the `expected_tools` list based on tool names, parameters, and order.
- **Example:**
  - `tools_called`: `[ToolCall(name="WebSearch"), ToolCall(name="ToolQuery")]`
  - `expected_tools`: `[ToolCall(name="WebSearch")]`
  - **Result:** The agent called an unexpected tool (`ToolQuery`). The score would be less than 1, depending on the strictness settings.

---

## Custom & Specialized Metrics

DeepEval offers powerful tools for creating custom evaluations.

### G-Eval (LLM-Eval)
- **Purpose:** A highly flexible, custom metric where you define evaluation `criteria` using natural language.
- **Use Case:** Evaluating subjective or use-case-specific qualities not covered by standard metrics.
- **Key Arguments:** `name`, `criteria`, `evaluation_params` (e.g., `input`, `actual_output`).
- **Calculation:** An LLM uses Chain-of-Thought (CoT) based on the provided `criteria` to generate evaluation steps and then calculates a score.
  - The score is a weighted summation of the output token probabilities from the evaluation model.
- **Example:**
  - `name`: "Correctness"
  - `criteria`: "Determine whether the actual output is factually correct based on the expected output."
  - `input`: "Who ran up the tree?"
  - `actual_output`: "It depends, some might say the cat..."
  - `expected_output`: "The cat."
  - **Result:** The LLM judge evaluates the `actual_output` against the `expected_output` based on the `criteria` and assigns a score.

### Summarization
- **Purpose:** A composite metric that evaluates a summary based on `Alignment` (fact-checking against the original text) and `Coverage` (inclusion of key information).
- **Use Case:** Assessing the quality of text summarization.
- **Key Arguments:** `input` (original text), `actual_output` (summary).
- **Calculation:** `Summarization Score = min(Alignment Score, Coverage Score)`.
  - `Alignment Score`: Measures if the summary contains hallucinations or contradicts the original text.
  - `Coverage Score`: Measures if the summary includes all necessary information from the original text, based on answers to assessment questions.
- **Example:**
  - `input`: A long article about climate change.
  - `actual_output`: A one-paragraph summary of the article.
  - `assessment_questions`: ["Does the article mention rising sea levels?", "Is human activity cited as a major cause?"]
  - **Result:** The score is the minimum of the alignment (factual consistency) and coverage (completeness) scores.

### JSON Correctness
- **Purpose:** A non-LLM metric that validates if the `actual_output` conforms to a specified Pydantic JSON schema.
- **Use Case:** Ensuring reliable structured data output.
- **Key Arguments:** `actual_output`, `expected_schema`.
- **Calculation:** Score is 1 if the `actual_output` can be successfully loaded into the `expected_schema` (a Pydantic model), and 0 otherwise.
- **Example:**
  - `expected_schema`: `class User(BaseModel): name: str, age: int`
  - `actual_output`: `'{"name": "John", "age": 30}'`
  - **Result:** The output matches the schema, so the score is 1. An output like `'{"name": "John"}'` would fail.

### Custom Metric (`BaseMetric`)
- **Purpose:** Provides a base class to implement any custom evaluation logic, whether LLM-based or not.
- **Use Case:** For scenarios where existing metrics are insufficient, or when you need full control, non-LLM-based evaluation, or to combine multiple metrics.
- **Key Arguments:** Varies depending on the custom implementation.
- **Calculation:** You define the logic inside the `measure()` method of a class that inherits from `BaseMetric`.
  - The method must set `self.score` (a float) and `self.success` (a boolean).
- **Example:**
  - Create a `CustomMetric(BaseMetric)` class.
  - In `measure(self, test_case: LLMTestCase)`:
    - Implement logic (e.g., `score = len(test_case.actual_output) / 100`).
    - Set `self.score = score`.
    - Set `self.success = self.score >= self.threshold`.

---

## Multimodal Metrics

DeepEval also supports metrics for evaluating multimodal models that process both text and images.

- **Image Coherence:** Assesses if the generated image aligns with the text prompt.
- **Image Helpfulness:** Evaluates if the image is helpful in the context of the prompt.
- **Image Editing:** Checks if the model correctly performs image editing instructions.
- **Text-to-Image Relevancy:** A suite of metrics (`Answer Relevancy`, `Faithfulness`, etc.) adapted for text-to-image generation.

This guide provides a high-level overview of the powerful evaluation tools within DeepEval. For detailed implementation, always refer to the official documentation.
