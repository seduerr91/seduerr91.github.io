---
title: Automated Code Review Boosts Quality and Security in Codex
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 12-04"
---
The recent announcements highlight Codex Cloud’s introduction of an automated Code Review feature, designed for integration with GitHub and adaptable to on-premises setups using the Codex SDK and CLI. This emphasizes improvements in code correctness, security, and streamlined collaboration through structured review prompts and JSON-based feedback. Complementing this, updated repository guidelines for OpenAI API projects stress standardized project structure, robust documentation, and rigorous testing and review protocols—including PEP 8 compliance and detailed metadata management—to ensure code quality, maintainability, and security across collaborative development workflows.

## New Cookbook Recipes

### [build_code_review_with_codex_sdk.md](https://github.com/openai/openai-cookbook/blob/991eae37be6ea0b0f68a9cca8a97287bbb31b39f/examples/codex/build_code_review_with_codex_sdk.md)
**Source:** openai/openai-cookbook

The blog post introduces the new Code Review feature in Codex Cloud, which allows teams to integrate automated code reviews with cloud-hosted GitHub repositories. It details a guide for replicating this functionality in on-premises environments or different source control management systems using the Codex SDK and CLI.

Key steps include installing the Codex CLI, configuring prompts for automated reviews, and parsing output in a structured JSON format to leave inline comments on pull requests. The post emphasizes the use of a specific review prompt for GPT-5-Codex, aimed at highlighting actionable issues regarding correctness and security, along with generating overall correctness verdicts.

Additionally, examples for implementing this feature in GitHub Actions and GitLab CI/CD are provided, showcasing a structured output schema to ensure accurate comment generation while prioritizing security concerns when handling API keys.

---

### [AGENTS.md](https://github.com/openai/openai-cookbook/blob/337575d412c8dc89d6cc024010d9a9619f6f9110/AGENTS.md)
**Source:** openai/openai-cookbook

The blog post outlines the repository guidelines for organizing and developing projects using OpenAI APIs. It specifies the project structure, emphasizing the separation of runnable examples, reference articles, and assets within designated folders. Developers are advised to maintain a virtual environment for dependency management and follow coding standards in line with PEP 8, including descriptive naming and documentation practices. Testing protocols are outlined, requiring notebooks to run from top to bottom and include self-checks. Commit and pull request procedures are also detailed to ensure clarity and consistency, with a focus on accurate metadata management in `registry.yaml` and `authors.yaml`. Additionally, review guidelines stress the importance of proper naming conventions, error-checking in markdown, and documentation of environment variables.