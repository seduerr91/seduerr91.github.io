---
title: New Tools for Evaluating Multi-Agent Systems Today
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 05-21"
---
**Meta-Summary:**

Recent blog posts emphasize new tools and frameworks for macro-level evaluation of multi-agent systems—particularly in domains like electric vehicle order processing. The main trends include the introduction of a self-contained, offline OpenAI Cookbook notebook using synthetic data, and a structured macro-evaluation workflow that pairs lower-level agent assessments with systemic, pattern-based analysis. These tools enable comprehensive diagnosis of recurring agent behaviors and failures, equip users—both technical and business stakeholders—with actionable insights, and streamline evaluation with practical guides and sample code. Together, these advancements make it easier to analyze, diagnose, and optimize complex agentic workflows through reproducible, standalone resources.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/0075904c509819f8d746794001a7a27066258956/examples/partners/macro_evals_for_agentic_systems/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a self-contained OpenAI Cookbook notebook designed for macro-level evaluation of a traced multi-agent system, requiring no OpenAI API key and operating entirely offline with synthetic data. It details the step-by-step process to analyze multi-agent system runs, revealing recurring behavior patterns and enabling in-depth diagnosis of specific patterns. Key components of the provided dataset include metadata for 1,000 simulated orders and lower-level evaluation labels. The notebook is located in the designated repository path and requires the execution of a script to run. Users are guided on which files to upload and are advised on best practices for managing generated artifacts. The post emphasizes that the notebook serves as a standalone tool, referencing OpenAI’s official documentation for further development and orchestration guidance.

---

### [macro_evals_for_agentic_systems.ipynb](https://github.com/openai/openai-cookbook/blob/0075904c509819f8d746794001a7a27066258956/examples/partners/macro_evals_for_agentic_systems/macro_evals_for_agentic_systems.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a macro-evaluation (macro-eval) workflow for multi-agent systems, particularly in scenarios like electric vehicle order processing. It highlights how failures in agentic systems can be intricate and require a comprehensive analysis of multiple trace behaviors. The workflow includes generating agent run traces, conducting lower-level evaluations, and identifying recurring patterns to enhance decision-making processes. 

Key features include:

1. **Two-Level Evaluation Framework**: Lower-level evaluations assess individual agent performance, while macro evaluations identify systemic issues.
2. **Simplicity in Complexity**: A focus on distilling thousands of agent events into understandable patterns for both technical and business stakeholders.
3. **Tool Summary**: The blog provides practical examples and code snippets for setting up the evaluation environment, analyzing a simulated automotive order workflow, and addressing potential pitfalls.

This process aims to optimize performances and responses within agentic systems by collaborating effectively across specialized agent roles.