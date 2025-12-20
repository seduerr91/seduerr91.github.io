---
title: GPT-5.2-Codex Optimizes Software Engineering Workflows
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 12-20"
---
**Meta-Summary:**

Across these posts, the major trend is the adoption and optimization of the `GPT-5.2-Codex` model for advanced software engineering workflows, especially long-duration tasks and automated code reviews. Key announcements include new documentation best practices (`AGENTS.md` for agent guidance and `PLANS.md` for structured, evolving project plans) to facilitate transparency, risk reduction, and novice accessibility. Technical integrations are detailed for incorporating Codex-powered automated reviews into CI/CD pipelines (e.g., GitHub Actions, GitLab), with an emphasis on secure, actionable outputs. A strong focus emerges on leveraging model-specific prompting techniques—favoring minimal, precise prompts—to optimize performance and maintain safe engineering workflows. Collectively, these posts highlight a shift toward more intelligent, adaptable, and secure AI-assisted coding environments using the latest Codex capabilities.

## New Cookbook Recipes

### [codex_exec_plans.md](https://github.com/openai/openai-cookbook/blob/862df62e6a772093697f9b2b36368ea4fb779467/articles/codex_exec_plans.md)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of long-duration tasks using the `gpt-5.2-codex` model and outlines two essential documents: `AGENTS.md` and `PLANS.md`. `AGENTS.md` provides guidance for coding agents, introducing the concept of "ExecPlans" to streamline planning for complex features and refactoring. `PLANS.md` serves as a comprehensive design document, detailing the requirements for developing an ExecPlan, emphasizing self-containment, plain language, and clear milestones. Key elements include documenting decisions, logging progress, and ensuring that the ExecPlan allows novices to understand and execute tasks without prior knowledge. The post advocates for treating ExecPlans as living documents that evolve during the project lifecycle and encourages prototyping to reduce risks in larger changes.

---

### [build_code_review_with_codex_sdk.md](https://github.com/openai/openai-cookbook/blob/862df62e6a772093697f9b2b36368ea4fb779467/examples/codex/build_code_review_with_codex_sdk.md)
**Source:** openai/openai-cookbook

The blog post outlines the implementation of automated code reviews using the Codex SDK, specifically via the Codex CLI in CI/CD environments like GitHub Actions and Jenkins, catering to teams with on-prem code repositories. Key features include integrating the advanced `gpt-5.2-codex` model for enhanced code review accuracy. The process involves several steps: installing the Codex CLI, utilizing a structured JSON output schema, and creating prompts that guide Codex to identify actionable code issues. The post provides a thorough GitHub Actions workflow example, demonstrating how to publish inline comments and overall summary comments from Codex's feedback. Additionally, there is a GitLab CI/CD example emphasizing the importance of securing sensitive information, particularly API keys, during the automated review process.

---

### [gpt-5-codex_prompting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/862df62e6a772093697f9b2b36368ea4fb779467/examples/gpt-5-codex_prompting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the `GPT-5-Codex`, a new version of the GPT-5 model optimized for software engineering and agentic coding tasks. Users are encouraged to upgrade to `GPT-5.2-Codex`, its most advanced version, while adhering to specific prompting techniques due to the model's unique requirements. Key features include improved steerability, adaptive reasoning based on task complexity, and advanced code review capabilities. The core prompting principle emphasizes "less is more," advocating for minimal guidance to enhance output quality. The model is designed for various coding environments and applications, allowing effective tool use and succinct interactions. It streamlines code editing and incorporates safety and approval mechanisms to manage command execution and sandboxing. Essential guidelines for prompt crafting are outlined to capitalize on the model's capabilities effectively.