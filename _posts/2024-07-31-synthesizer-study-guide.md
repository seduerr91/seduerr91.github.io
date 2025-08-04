---
title: Synthesizer Study Guide
tags: [DeepEval, LLM Evaluation, Synthesizer]
style: fill
color: secondary
description: A complete guide to synthesizer concepts and vulnerabilities.
--- 

# Synthesizer Study Guide

This guide provides a summary of how to use the DeepEval Synthesizer to generate high-quality synthetic data for evaluating LLM systems.

## Introduction to the Synthesizer

- **Purpose:** The `Synthesizer` generates high-quality "goldens" (inputs, expected outputs, and contexts) to create evaluation datasets, especially when you don't have one.
- **Method:** It uses a data evolution method inspired by `Evol-Instruct` to generate realistic and complex synthetic data.
- **Core Object:** You start by creating a `Synthesizer` object, which can be configured with parameters like `model`, `async_mode`, and configurations for filtering, evolution, and styling.
- **Generation Methods:** There are four main ways to generate goldens:
    - `generate_goldens_from_docs()`: From documents in a knowledge base.
    - `generate_goldens_from_contexts()`: From a list of prepared contexts.
    - `generate_goldens_from_scratch()`: Without any context.
    - `generate_goldens_from_goldens()`: By augmenting existing goldens.

## Generation Methods

### Generate From Documents

- **Purpose:** Ideal for RAG systems where you have a knowledge base of documents. The synthesizer automatically extracts contexts and generates goldens from them.
- **Usage:** Call the `generate_goldens_from_docs()` method with a list of document paths.
- **Key Dependency:** Requires `chromadb` to be installed (`pip install chromadb`).
- **Example:**
  ```python
  synthesizer.generate_goldens_from_docs(
      document_paths=['example.txt', 'example.docx', 'example.pdf']
  )
  ```
- **Context Construction:** This method has a unique 3-step context construction pipeline:
    1.  **Document Parsing:** Splits documents into smaller, manageable chunks.
    2.  **Context Selection:** Selects random chunks and filters them for quality based on clarity, depth, and relevance.
    3.  **Context Grouping:** Groups semantically similar chunks to form coherent contexts for generation.
- **Customization:** The context construction process can be customized using the `ContextConstructionConfig` object.

### Generate From Contexts

- **Purpose:** Use this method when you have already prepared a list of contexts and want to generate goldens directly from them, skipping the document parsing step.
- **Usage:** Call the `generate_goldens_from_contexts()` method with a list of contexts.
- **Example:**
  ```python
  synthesizer.generate_goldens_from_contexts(
      contexts=[
          ["The Earth revolves around the Sun.", "Planets are celestial bodies."],
          ["Water freezes at 0 degrees Celsius.", "The chemical formula for water is H2O."],
      ]
  )
  ```
- **Note:** This method is called under the hood by `generate_goldens_from_docs()`.

### Generate From Scratch

- **Purpose:** Use this method to generate goldens without any documents or contexts. This is useful for testing LLMs on queries that go beyond an existing knowledge base.
- **Usage:** Call the `generate_goldens_from_scratch()` method with the desired number of goldens.
- **Key Requirement:** Requires a `StylingConfig` to be passed to the `Synthesizer` to define the format, task, and scenario for generation.
- **Example:**
  ```python
  from deepeval.synthesizer.config import StylingConfig

  styling_config = StylingConfig(
    input_format="Questions in English that asks for data in database.",
    expected_output_format="SQL query based on the given input",
    task="Answering text-to-SQL-related queries by querying a database and returning the results to users",
    scenario="Non-technical users trying to query a database using plain English.",
  )

  synthesizer = Synthesizer(styling_config=styling_config)
  synthesizer.generate_goldens_from_scratch(num_goldens=25)
  ```

### Generate From Goldens

- **Purpose:** Use this method to expand an existing set of goldens, adding complexity and variety to your evaluation dataset.
- **Usage:** Call the `generate_goldens_from_goldens()` method with a list of existing `Golden` objects.
- **Example:**
  ```python
  synthesizer.generate_goldens_from_goldens(
    goldens=existing_goldens,
    max_goldens_per_golden=2
  )
  ```
- **Note:** If the existing goldens contain contexts, the synthesizer will use them to generate new goldens. Otherwise, it will generate new inputs from scratch based on the existing inputs.
