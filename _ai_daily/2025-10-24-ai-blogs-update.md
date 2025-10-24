---
title: Revolutionizing Code Development - AI and Structured Planning
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-24"
---
Across the two blog posts, key trends and announcements include expanded automation and structure in code development workflows using Codex. The first post highlights the introduction of Codex SDK’s automated code review feature for both cloud-hosted and on-premise repositories, enabling AI-driven, inline and summary code assessments via integration with CI/CD pipelines. The second post focuses on structured planning and documentation with the `PLANS.md` and `AGENTS.md` frameworks, empowering both novice and experienced users to manage complex projects through detailed, executable specifications and iterative planning. Together, these updates underscore a shift toward enhanced code quality, transparency, and reproducibility in software development by leveraging AI-assisted reviews and systematic project planning.

## New Cookbook Recipes

### [build_code_review_with_codex_sdk.md](https://github.com/openai/openai-cookbook/blob/c86c30ab164484d50ec4ea60b308152f8a0929b5/examples/codex/build_code_review_with_codex_sdk.md)
**Source:** openai/openai-cookbook

The blog post introduces the Codex SDK's Code Review feature, allowing automated reviews for code changes committed to cloud-hosted GitHub repositories. For users with on-premise SCM or non-GitHub setups, the post details how to implement a similar automated review process using Codex CLI in CI/CD pipelines, specifically with GitHub Actions and Jenkins. 

The guide outlines step-by-step instructions, including installing the Codex CLI, setting structured output, generating review prompts, and making API calls to register review comments. Examples for GitHub Actions and Jenkins demonstrate how to set up the actions to automate code reviews, publish inline comments, and generate overall summary comments. This approach aims to enhance the code review process using AI, promoting improved code quality within development teams.

---

### [codex_exec_plans.md](https://github.com/openai/openai-cookbook/blob/5e1f6c4171b1802a4f37732a1d8ff68a21aecd66/articles/codex_exec_plans.md)
**Source:** openai/openai-cookbook

The blog post discusses the use of structured planning documents, specifically `PLANS.md`, to guide the `gpt-5-codex` model in executing complex software tasks efficiently over extended periods. The `AGENTS.md` file is introduced, defining when to utilize these planning documents in the coding process. The `PLANS.md` framework emphasizes the creation of thorough, self-contained executable specifications (ExecPlans) that allow novice users to implement features from scratch, documenting decisions, progress, and outcomes meticulously. Key principles include ensuring each plan is a living document, enabling iterative updates and refinements, and fostering clarity and comprehensiveness in instructions. The post highlights the importance of maintaining well-defined milestones and providing detailed validation steps to ensure the successful implementation of software changes. Overall, it serves as a guide for harnessing Codex effectively in software development through structured planning.