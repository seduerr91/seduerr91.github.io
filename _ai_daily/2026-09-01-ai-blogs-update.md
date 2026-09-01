---
title: AI-Driven Security Tools Transform Code Review Workflows
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-01"
---
**Meta-Summary:**  
Recent blog posts emphasize the growing trend of integrating advanced AI tools, such as the OpenAI Agents SDK and Codex CLI, into security and code quality review workflows. Key announcements include the introduction of intelligent manager agents to dynamically coordinate specialist agents for targeted security concerns, and the deployment of Codex CLI to enhance context-aware code analysis within CI/CD pipelines like GitLab. These solutions automate static analysis findings, facilitate actionable and prioritized remediation guidance, and enable the generation of structured reports (e.g., CodeClimate JSON) for better visibility. Both workflows stress the importance of combining automated insights with human oversight—ensuring accurate, evidence-driven findings, approvals for critical actions, and continuous improvement in code security and quality. Extensions like runtime checks and automated code fixes are highlighted as future enhancements.

## New Cookbook Recipes

### [security_scanners_with_agents_sdk.ipynb](https://github.com/openai/openai-cookbook/blob/41ce358173066d1eb15aa5106327133d5f13517e/examples/agents_sdk/security_scanners_with_agents_sdk.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the development of a security review workflow utilizing the OpenAI Agents SDK, integrated with static analysis tools Semgrep and Bandit. Key announcements include the introduction of a manager agent responsible for dynamically selecting specialist agents to address specific security concerns identified by the scanners. 

The workflow consists of several steps: setting up requirements like Python and API keys, reviewing the architecture of the review process, executing static scans, managing tasks through the manager agent, validating findings, and preparing a prompt for Codex to facilitate potential code fixes. It emphasizes the necessity of approvals for running scans and highlights the importance of capturing evidence and using it to guide assessments in a structured manner.

Potential extensions to the workflow are also suggested, such as incorporating runtime checks and applying automated code fixes with human oversight.

---

### [secure_quality_gitlab.md](https://github.com/openai/openai-cookbook/blob/351cf5f53c7bf2721aacfcaed8995f5514f8962d/examples/codex/secure_quality_gitlab.md)
**Source:** openai/openai-cookbook

The blog post outlines the integration of OpenAI’s Codex CLI into GitLab CI/CD pipelines to enhance code quality and security analysis. Key announcements include the ability to generate CodeClimate JSON reports for code quality and to consolidate SAST results into actionable remediation guidance. 

The Codex CLI acts as an intelligent layer that interprets and ranks findings, moving beyond traditional, static analysis. The article provides detailed examples of configuring GitLab CI jobs for code quality reporting and security remediation, emphasizing the importance of context-aware findings.

Overall, utilizing Codex CLI ensures consistent reviews, highlights subtle issues overlooked by rule-based checks, and empowers developers with immediate, human-readable feedback, thereby strengthening production code quality and security.