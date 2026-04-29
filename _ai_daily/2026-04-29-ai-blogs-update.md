---
title: AI Code Review Expansion - Secure and Versatile Solutions
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 04-29"
---
Recent updates focus on expanding automated code review capabilities using the Codex SDK beyond GitHub, targeting on-premise and non-GitHub source control environments. The recommended approach leverages the `gpt-5.5` model for enhanced accuracy, with detailed guidance provided for integrating Codex into popular CI/CD systems like GitHub Actions, GitLab CI/CD, Azure DevOps, and Jenkins. Core implementation steps include installing the Codex CLI, structuring output schemas, and enabling actionable, citation-rich feedback on code changes. Emphasis is placed on secure API key management, especially when operating in public or collaborative environments. These advancements highlight a trend towards more flexible, platform-agnostic, and secure AI-powered code review solutions.

## New Cookbook Recipes

### [build_code_review_with_codex_sdk.md](https://github.com/openai/openai-cookbook/blob/69cda9e1e75157ec5bf33cacde67b76b9619732d/examples/codex/build_code_review_with_codex_sdk.md)
**Source:** openai/openai-cookbook

The blog post introduces the capability to implement automated code reviews using the Codex SDK for on-premise or non-GitHub SCM environments. It details a step-by-step guide to set up a Code Review action within CI/CD runners employing tools like GitHub Actions, GitLab CI/CD, Azure DevOps, and Jenkins. The recommended model for optimal accuracy is `gpt-5.5`. Key steps outlined include installing the Codex CLI, creating a structured output schema for Codex, and executing prompts that guide Codex in providing actionable feedback on code, with clear citations to file paths and line ranges. Furthermore, the post discusses both GitHub and GitLab implementations, emphasizing safety strategies to protect sensitive API keys, particularly in public repositories.