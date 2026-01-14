---
title: AI Advances - Making Automation Smarter and Friendlier
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 01-14"
---
The blog posts highlight notable advancements in AI automation and usability. The first post details a practical, scalable approach to automated fact-checking using large language models and integrated APIs, enabling claim extraction, web evidence gathering, and dynamic accuracy assessment through a user-friendly interface. The second post focuses on improving AI-assisted programming by introducing structured execution plans (`PLANS.md` and ExecPlan) with Codex, empowering models to autonomously manage and document complex, long-running coding tasks. Collectively, the trends emphasize the development of robust frameworks and best practices to expand AI’s reliability, autonomy, and accessibility for end-users across both content verification and software engineering domains.

## New Cookbook Recipes

### [build-your-own-fact-checker-cerebras.ipynb](https://github.com/openai/openai-cookbook/blob/9aae1a07b293a90b01dfe0ba454ea28794d0a71c/articles/gpt-oss/build-your-own-fact-checker-cerebras.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a comprehensive guide for creating an automated content fact-checker using OpenAI's gpt-oss-120B model, Cerebras infrastructure, and the Parallel API. It outlines a step-by-step setup, starting with environment configuration using API keys from Cerebras and Parallel. Users are guided through setting up the system to extract claims from texts or URLs, searching for evidence online, and evaluating factual accuracy with the Cerebras model.

Key features include:
1. Extraction of factual claims from text.
2. Automated web searches to find supporting evidence.
3. Evaluation of claims, returning verdicts of "True," "False," or "Uncertain" based on the evidence gathered.
4. A user-friendly interface for fact-checking both specified texts and URLs.

The guide provides practical code snippets for implementation, creating a robust framework for scalable fact-checking.

---

### [codex_exec_plans.md](https://github.com/openai/openai-cookbook/blob/595cd906bc0cb433f59721acca127f9643dc1ffc/articles/codex_exec_plans.md)
**Source:** openai/openai-cookbook

The blog post discusses the use of `PLANS.md` in conjunction with the Codex model, specifically `gpt-5.2-codex`, for tackling complex, multi-hour programming tasks effectively. It introduces `AGENTS.md`, a guide for Codex that includes a shorthand termed "ExecPlan" which directs when to utilize `PLANS.md`. The post emphasizes the importance of crafting thorough execution plans that are self-contained and accessible to novices, outlining requirements for these plans, such as being living documents that adapt as developments occur. The article also details the structure and necessary components of a well-formulated ExecPlan, including sections for progress tracking, unexpected findings, decision logs, and outcomes. By following these guidelines, users can enhance Codex’s performance on intricate projects, allowing it to work autonomously over extended periods.