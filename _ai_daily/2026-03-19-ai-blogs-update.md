---
title: Claude Cookbooks and SDK Transform Developer Experience
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 03-19"
---
The blog posts collectively announce significant advancements in the Claude developer ecosystem, most notably the launch of "Claude Cookbooks"—practical Jupyter notebooks and Python examples for rapid onboarding with the Claude API—and the introduction of the Claude Agent SDK, which streamlines the development of advanced agentic systems. Key trends include a focus on structured development workflows, detailed coding and contribution standards, and improved project organization for extensibility. The migration guide from OpenAI Agents to Claude Agents highlights new SDK features such as built-in tools, layered permissions, prompt caching, and real-time event streaming, making for more capable and efficient applications. Comprehensive tutorials and documentation further empower developers to build versatile agents for a wide range of use cases, emphasizing ease of integration, collaboration, and automation within the Claude platform.

## New Cookbook Recipes

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/6d8146dffb7223b913f144046ee2b8ff8df15790/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Claude Cookbooks," a collection of Jupyter notebooks and Python examples designed to facilitate building with the Claude API. It outlines a quick start guide, including dependency installation, setting up API keys, and essential development commands for code formatting, linting, and testing. Key coding standards are provided, emphasizing line length and quotes usage, while noting relaxed rules for notebook imports and variable naming.

It also details a structured Git workflow, including branch naming conventions and commit formatting guidelines. Key rules for API key management, dependency handling, and model usage are highlighted. Additionally, the post specifies commands available in Claude Code and CI for notebook and model validation. Finally, a project structure is outlined for organizing various capabilities and contributions, with instructions for adding new cookbooks effectively.

---

### [04_migrating_from_openai_agents_sdk.ipynb](https://github.com/anthropics/claude-cookbooks/blob/6d8146dffb7223b913f144046ee2b8ff8df15790/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the migration process from the OpenAI Agents SDK to the new Claude Agent SDK, using an example of an expense approval agent. Key features of the Claude SDK include tools like `Read`, `Edit`, `Bash`, and `Grep`, a layered permission system, automatic prompt caching, and access to event streams. The transition involves replacing several SDK components with Claude equivalents while retaining business logic. Specific adjustments include using `ClaudeSDKClient` for running processes, managing sessions with disk-backed storage options, and implementing explicit tool definitions. The migration requires a working knowledge of Python's async/await and familiarity with OpenAI SDK primitives. Overall, the migration facilitates enhanced capabilities and potentially more efficient applications in the Claude ecosystem.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/6d8146dffb7223b913f144046ee2b8ff8df15790/claude_agent_sdk/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Claude Agent SDK tutorial series, designed to help developers build advanced agentic systems. Users are guided through a step-by-step process, starting with foundational installation and project setup, including acquiring API and GitHub tokens. The series showcases various applications, from simple research agents to complex multi-agent systems that integrate with external tools. Key features include core SDK fundamentals, multi-agent orchestration, and enterprise compliance capabilities. Each tutorial builds upon previous concepts, culminating in powerful agents capable of autonomous information synthesis, DevOps workflows, and incident response. The Claude Agent SDK serves as a versatile framework for creating agents beyond coding, addressing diverse use cases such as research, data analysis, and workflow automation.