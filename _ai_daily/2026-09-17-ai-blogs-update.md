---
title: Anthropic Unveils Next-Gen AI Agents for Enterprise Automation
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 09-17"
---
**Meta-Summary of Blog Announcements and Trends**

Across recent posts, several major trends and product announcements emerge around Anthropic’s agent ecosystem:

- **Agents API & Managed Agents Launch**: Anthropic introduced the Agents API and Claude Managed Agents, enabling developers to build stateful, tool-using AI agents that automate tasks within business, engineering, and operational workflows. These frameworks provide persistent session management, integration with popular tools (e.g., Slack, GitHub, databases), and support both self-hosted and hosted runtimes.

- **Domain-Specific Automations**: The showcased applications illustrate a broadening of agent use cases, including business data analysis, bulk invoice and contract review, automated GitHub issue investigation, and SRE incident response. Human-in-the-loop approval and policy customization are recurring features, ensuring practical oversight and reliability.

- **Ecosystem & Integration Enhancements**: The ecosystem supports seamless integration with key infrastructure components (PostgreSQL, MongoDB, AWS, Slack, PagerDuty, Notion), employing secure credential management (vaults) and extensible skill libraries. Example scripts and cookbooks demonstrate rapid adoption across different platforms and languages.

- **Workflow & Configuration Improvements**: Recent updates migrated reference implementations (e.g., Sentry and Slack agents) from Jupyter notebooks to runnable apps within the Claude Quickstarts GitHub repository. Configuration is now managed with YAML and `.env` files, simplifying deployment and maintenance. Documentation and modular cookbooks facilitate reuse for similar agent-powered workflows.

- **Focus on Security & Flexibility**: Throughout, secure environment management, credential handling, and sandboxed execution are emphasized. Agents are designed to adopt both application-managed and webhook-managed sandboxing approaches to suit different integration requirements.

**Overall**, the announcements highlight Anthropic’s rapid progress in enabling flexible, secure, multi-tool AI agents for enterprise automation, with an expanding suite of templates and integrations to accelerate agent-powered solution development.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/4592334c2390827853ded44cb620fa22a35302d4/examples/agents_api/apps/data_analyst/README.md)
**Source:** openai/openai-cookbook

The blog post announces the release of the Agents API, designed to facilitate data analysis within business applications. It allows users to interact with their business data by asking questions, retrieving relevant database tables, and running read-only SQL queries all within the same session. Key features include the ability to save corrections for future inquiries, ensuring continuity in data analysis. The setup requires Python 3.14+, an OpenAI API key, and PostgreSQL access, enabling seamless integration with an application’s existing tools. The agent utilizes four core tools: searching tables, retrieving context, querying the warehouse, and saving corrections. Detailed examples guide users in connecting their database, running the agent, and managing investigation workflows. This API aims to enhance the workflow of data analysts by combining contextual business knowledge with automated queries, ultimately streamlining data-driven insights.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/4592334c2390827853ded44cb620fa22a35302d4/examples/agents_api/apps/document_review/README.md)
**Source:** openai/openai-cookbook

The blog post details a new feature for bulk invoice and contract review using the Agents API with a `gpt-5.6-luna` agent. This process involves mounting a folder of documents alongside a reusable accounts payable policy skill. The agent delegates document reviews to specialist subagents, generates individual reports and a consolidated summary, with final approvals remaining with humans.

It outlines prerequisites, including Python 3.14+, Docker, and OpenAI API keys. The setup steps are provided, demonstrating how to create a multi-agent review session and validate reports. Each specialist applies a designated expense-review policy, ensuring consistent evaluations. The implementation encourages customization of review policies and emphasizes that human oversight is essential for approvals. The accompanying files in the OpenAI repository support this batch processing workflow, allowing users to adapt the functionality to their specific needs.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/4592334c2390827853ded44cb620fa22a35302d4/examples/agents_api/apps/github_issues/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new feature using the Agents API to automate the investigation of GitHub issues. When an issue is opened, the API allows an agent to clone the repository, replicate the problem in a sandboxed environment, and generate a report outlining the findings—all without requiring developer intervention. The setup requires Python 3.14+, a sandbox environment (self-hosted or third-party), and appropriate API keys for OpenAI and GitHub.

The process begins with the agent receiving an issue webhook, which triggers the investigation. It conducts tests, determines the problem's cause, and documents the findings in a markdown file, posting the results back to the GitHub issue comment section. The system prioritizes security by verifying GitHub signatures and ensures that investigations can be retried on failure. The post also includes code snippets to facilitate implementation.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/4592334c2390827853ded44cb620fa22a35302d4/examples/agents_api/apps/sev_bot/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the creation of an SRE agent designed to streamline incident response through automation. When an incident alert triggers, a Slack thread opens in `#oncall`, and the agent investigates telemetry, commits, and infrastructure data. The agent uses the Agents API for maintaining persistent sessions, integrating operational tools, and facilitating application-specific decision-making.

Key requirements for implementation include Python 3.14+, a self-hosted Docker environment, OpenAI and Slack API keys, and access to relevant GitHub and AWS resources. The agent organizes evidence gathering, posts findings to Slack, and requests rollback approvals from responders without executing deployments. 

Detailed instructions are provided for configuring the Slack bot, connecting to various monitoring systems like PagerDuty and incident.io, and utilizing AWS skills. Overall, the solution aims to enhance collaboration and efficiency during incident resolution processes.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/4592334c2390827853ded44cb620fa22a35302d4/examples/agents_api/apps/slack_bot/README.md)
**Source:** openai/openai-cookbook

The blog post outlines how to build a Slack bot using the Agents API, allowing users to interact with designated tools and conduct tasks directly within Slack conversations. Key features include tagging the bot to initiate tasks like searching conversations, analyzing data, or preparing GitHub pull requests, with each Slack thread beginning its own Agents API session. 

Essential prerequisites for implementation include Python 3.14+, a Docker sandbox, and an OpenAI API key. The article details a step-by-step guide to create the bot, set up the environment, and handle conversations through various functions. The bot can reuse sessions for follow-up tasks, maintain workspace context, and integrate with services like Notion and GitHub through secure vault credentials. Additionally, it explains how to manage conversation resources and access tokens efficiently.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9a8e9f07dd8b90e67e6ea11d9c90f8e7dc4bfa35/examples/agents_api/README.md)
**Source:** openai/openai-cookbook

The blog post introduces various applications and sandbox integrations for the Agents API, each accompanied by detailed README documentation for implementation guidance. Key applications include an SRE bot for alert management, a Slack bot for conversational assistance, a data analyst for querying warehouse data, a GitHub issue investigator for bug reproduction, and a document reviewer for contract audits. There are two sandbox integration modes: application-managed, where the application controls the sandbox, and webhook-managed, which includes a deployed handler for sandbox provisioning. Developers can access example scripts requiring Python 3.14 and must handle specific dependencies and credentials. Key links for further documentation and API management are also provided.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c245d39f91e5bbc0bf88f6a66a9af5e15f5c3462/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has announced the release of Claude Managed Agents (CMA), a hosted runtime designed for building stateful, tool-using agents. Key features include the ability to define an environment once and maintain persistent sessions for various applications. Notable cookbooks include integration with MongoDB, providing connection patterns and retrieval methods for a fraud-review agent. Additional applied cookbooks cover creating data analysis reports, Slack bot integration, and incident response for site reliability engineering, allowing agents to work alongside human approval processes. The blog also presents guided tutorials to explore the Managed Agents API, highlighting workflows such as fixing failing tests, orchestrating GitHub PRs, and utilizing human-in-the-loop mechanisms. For hands-on operation, users are instructed to set environment variables and can access example data. Full applications using Managed Agents, including a Slack bot, are available on GitHub.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c245d39f91e5bbc0bf88f6a66a9af5e15f5c3462/managed_agents/sentry/README.md)
**Source:** anthropics/claude-cookbooks

The Sentry × Claude Managed Agents example has been relocated to the Claude Quickstarts repository, now functioning as a runnable app instead of a notebook format. The new location for this example is available at [claude-quickstarts/managed-agents/sentry](https://github.com/anthropics/claude-quickstarts/tree/main/managed-agents/sentry). 

Users who previously set up the old version should note that while the scheduled triage runs similarly, two significant changes have been implemented: the definition of the vault, environment, and agent is now managed via YAML files, and the `COOKBOOK_MODEL` override has been removed. To modify the agent, users must edit the YAML file and execute the setup script. The last version of the prior code is documented at [`a97b9a2`](https://github.com/anthropics/claude-cookbooks/tree/a97b9a2dc300635f0c26b5e05d0b54bbe0279ee5/managed_agents/sentry).

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c245d39f91e5bbc0bf88f6a66a9af5e15f5c3462/managed_agents/slack/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the relocation of the Slack × Claude Managed Agents example to the Claude Quickstarts repository, specifically found at `claude-quickstarts/managed-agents/slack`. This new implementation is a runnable app rather than a notebook, aligning with the structure of the Quickstarts repository. Key updates following the move include: 

1. Agent and environment configurations are now in `agents/slack-assistant/*.yaml`, created via `./agents/setup.sh` and the `ant` CLI, with the previous `bun run setup` command discontinued.
2. The Anthropic webhook route has changed to `/managed-agents/webhook`; users must update this URL in the Claude Console.
3. Configuration settings are now loaded from `.env` instead of `.env.local`.

The latest version before the move is available at a specified GitHub commit link.