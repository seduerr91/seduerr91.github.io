---
title: AI Breakthroughs - Unleashing Power in Language Models
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 01-15"
---
Across these blog posts, the key trends and announcements center on significant advancements in large language models, especially in coding and agentic tasks. Major updates include the release of OpenAI’s GPT-5.1 and `gpt-5.2-codex` models, both delivering improved performance, greater token efficiency, and enhanced task autonomy. New reasoning modes and steerability features allow developers to optimize for speed, control output style, and manage prompt complexity. The posts provide actionable best practices for prompt engineering, model migration, and tool integration, ensuring developers can fully utilize new capabilities. Additionally, there is growing support for open-source deployment, highlighting how gpt-oss models can be run efficiently with vLLM, making advanced AI accessible on both dedicated and consumer-grade hardware through standardized APIs and direct integration with existing agent frameworks.

## New Cookbook Recipes

### [codex_prompting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/cad62ca31285f7891584f6ea89b62dc16f62af4a/examples/gpt-5/codex_prompting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines enhancements to the Codex coding model, specifically the `gpt-5.2-codex`, which offers improved performance, token efficiency, and greater autonomy in task completion. Key features include faster processing, better long-running capabilities, and first-class support for compaction, enabling extensive reasoning without hitting context limits. The guide emphasizes updating prompts and tools for optimal functionality, recommending a “medium” reasoning effort for balance and higher efforts for complex tasks. Additionally, it provides best practices for utilizing Codex in various coding environments, including specific guidelines for prompt structure, code implementation, and task management. Overall, the post serves as a comprehensive resource for developers aiming to leverage the advanced capabilities of Codex effectively.

---

### [gpt-5-1_prompting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/cad62ca31285f7891584f6ea89b62dc16f62af4a/examples/gpt-5/gpt-5-1_prompting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces GPT-5.1, OpenAI's latest model designed for enhanced intelligence and speed in agentic and coding tasks. A notable feature is the new `none` reasoning mode, enabling low-latency interactions and efficient token consumption. Key improvements include better calibration for prompt difficulty, enhanced steerability in personality, tone, output formatting, and guidance for developers migrating from previous models.

Developers are advised on effective prompting techniques to optimize performance, emphasizing persistence, instruction adherence, and user updates during task execution. The model's adaptability allows for shaping personality traits and communication styles, essential for customer-facing agents. Additionally, GPT-5.1 enhances tool usage and parallelism, improving efficiency in executing tasks. Overall, this guide serves as a foundation for maximizing GPT-5.1’s capabilities in real-world applications.

---

### [run-vllm.md](https://github.com/openai/openai-cookbook/blob/0fb6f1d49e8cdb9f6e1e9f1c400203b85b5ad9e4/articles/gpt-oss/run-vllm.md)
**Source:** openai/openai-cookbook

This blog post provides a comprehensive guide on how to run **gpt-oss** with **vLLM**, an open-source inference engine optimized for large language models. It introduces two models: **gpt-oss-20b**, requiring approximately 16GB VRAM, and **gpt-oss-120b**, which needs at least 60GB VRAM. The setup process includes instructions for installing vLLM, starting a server, and downloading the models. Users can access APIs compatible with OpenAI's interfaces for both chat and response interactions. Additionally, the post covers how to enable function calling, browse capabilities, and integration with OpenAI’s **Agents SDK**. Direct sampling using the vLLM library is also discussed, emphasizing proper input formatting for successful model functionality. This guide is tailored for dedicated GPU servers while offering alternatives for local inference on consumer GPUs.