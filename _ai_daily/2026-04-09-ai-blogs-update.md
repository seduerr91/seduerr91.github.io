---
title: Revolutionizing AI Agents for Real-World Workflows
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 04-09"
---
**Meta-Summary of Key Trends and Announcements:**

The collection of blog posts documents the launch and practical applications of Anthropic’s new Claude Managed Agents, a hosted platform that enables users to build advanced, stateful AI agents with persistent environments, custom tooling, and human-in-the-loop (HITL) workflows. Major trends and announcements include:

- **Real-World Workflows & Applied Patterns:** Posts demonstrate robust end-to-end workflows—such as support ticket triage, code exploration, bug fixing, expense approval, SRE incident response, and GitHub project maintenance—all illustrated through example agents, realistic scenarios, and mock environments.

- **Flexible, Iterative Debugging & Integration:** The Managed Agents API supports iterative problem-solving, live debugging, and dynamic resource updates (e.g., adding files mid-session), streamlining testing and development. Streaming event connections and versioned prompts facilitate transparent experimentation, rollback, and observability.

- **Tooling & Extensibility:** Key features include versioned prompts, agent-managed vaults for secure credentials, direct SaaS API access (MCP toolsets), and custom tools (decide/escalate) for nuanced decision-making. Integration with external systems is made seamless via webhook support, enabling scalable HITL interventions without persistent connections.

- **Human-in-the-Loop & Calibration:** Many workflows emphasize HITL processes, balancing automation efficiency with safety and auditability—crucial for sensitive tasks like code changes and expense approvals. Custom approval policies and escalation paths are designed for real-world complexity.

- **Cookbook & Directory Ecosystem:** A suite of notebook-based cookbooks and an accompanying input directory enable end-to-end testing, challenge scenarios, and rapid prototyping without external dependencies, maximizing accessibility and reproducibility.

- **Production Readiness & Best Practices:** Guidance is provided on production deployment—including resource lifecycle management, secure credential handling, environment pinning, and audit trails—ensuring that managed agents are safe, maintainable, and suitable for enterprise use.

- **Ecosystem Integrations:** Examples include a Slack bot for data analysis and incident response triggers via PagerDuty, highlighting the platform's extensibility for integration with existing tooling and team workflows.

Overall, the posts collectively announce and exemplify a powerful, configurable platform for building intelligent agents that automate, coordinate, and adapt across a range of practical domains—enabling both autonomous operation and careful human oversight.

## New Cookbook Recipes

### [CMA_prompt_versioning_and_rollback.ipynb](https://github.com/anthropics/claude-cookbooks/blob/b96dc048794747788e5479079c3116a976e9cece/managed_agents/CMA_prompt_versioning_and_rollback.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of prompt versioning and rollback within a support ticket triage system using an LLM. Key features include the ability to update prompts server-side without requiring code changes or deployments, as each update generates a new immutable version. This allows for easy evaluation and rollback by simply referencing the version number. The post details a practical example where a support-ticket agent is created, evaluated, and updated to include new routing logic. The authors demonstrate how to score different versions, revealing regressions in performance, and highlight how reverting to an earlier version is straightforward. They emphasize best practices, including pinning to explicit version numbers for production callers to manage changes effectively, treat prompt versions as configurable resources, and apply incremental traffic routing for higher-stakes updates.

---

### [CMA_explore_unfamiliar_codebase.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/CMA_explore_unfamiliar_codebase.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines an experiment where an agent explores an unfamiliar codebase in a repository to grasp its architecture without relying solely on documentation. The agent navigates the filesystem using commands like `ls`, `grep`, and `read`, and is deliberately misled by an outdated `ARCHITECTURE.md` file. The key takeaway emphasizes the principle of "exploration before action," urging the agent to verify information against the actual code structure.

Additionally, the post discusses the capability of adding resources to a running session through the API, allowing dynamic updates without needing to restart the session. This feature is demonstrated by attaching a file containing deployment history to reassess the agent's previous findings. The experience illustrates the importance of critical analysis and adaptability in understanding complex codebases.

---

### [CMA_gate_human_in_the_loop.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/CMA_gate_human_in_the_loop.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a "human-in-the-loop" approach to expense approval workflows, featuring custom tools called `decide()` for clear cases and `escalate()` for ambiguous ones. These tools allow for human intervention when necessary while streamlining the decision-making process. Custom tools operate outside the sandbox environment, enabling flexibility in managing data and human reviews.

The post is divided into two parts: Part A focuses on local streaming for development, allowing real-time monitoring and processing of decisions, while Part B discusses the production setup using webhooks for scalability, which facilitates handling escalations without maintaining open connections. A sample application is provided, demonstrating the use of custom tools with an integrated environment for testing and deployment. The post emphasizes a balanced calibration in automated decision-making to ensure efficiency and safety.

---

### [CMA_iterate_fix_failing_tests.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/CMA_iterate_fix_failing_tests.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a comprehensive guide to utilizing the Managed Agents API through an iterative debugging process in a Jupyter notebook format. Users learn to create an agent, environment, and session, encouraging self-sufficient debugging where an agent fixes failing tests by observing errors and refining code until all assertions pass. Key concepts include defining an **Agent** (config and tools), **Environment** (container template), and **Session** (links agent to environment). The process involves uploading test files, monitoring the agent's live actions through a streaming event connection, and verifying results by re-running assertions at the end. Additional resources for advanced workflows with agents are also outlined, providing paths for multi-turn interactions and human-in-the-loop integration, and highlighting the advantages of streaming versus polling for task execution.

---

### [CMA_operate_in_production.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/CMA_operate_in_production.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses essential components for operating Managed Agents in production environments. Key features introduced include:

1. **MCP Toolsets**: Allow agents to connect directly to SaaS APIs without routing through the application, enhancing efficiency.
2. **Vaults**: Enable storage of individual user credentials securely, ensuring proper isolation and clean audit trails.
3. **Webhooks**: Facilitate human-in-the-loop (HITL) interactions effectively by eliminating the need for long-lived HTTP connections.
4. **Resource Lifecycle Management**: Offers standardized verbs (list, retrieve, update, archive, delete) for managing workspace resources over time.

An end-to-end flow is highlighted, covering the creation of a vault, attaching credentials, session management, webhook implementation for HITL tasks, and resource cleanup. This structured approach ensures that Managed Agents can seamlessly integrate into real-world use cases while maintaining security and audit capabilities.

---

### [CMA_orchestrate_issue_to_pr.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/CMA_orchestrate_issue_to_pr.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of an end-to-end workflow for an AI agent, centered around the GitHub maintainer process. It outlines a realistic scenario where the agent reads a bug report, diagnoses the issue, implements a fix, and navigates steps such as opening a pull request (PR), passing continuous integration (CI), addressing review feedback, and merging the changes. Key features include the ability for the agent to maintain context across operations, and to recover from setbacks like CI failures and review requests. The mock environment enables simulation without needing network access. Furthermore, it highlights the importance of adapting to feedback rather than simply retrying actions, enhancing the agent’s capability to manage complex workflows effectively. The process, along with tooling like the `gh-mock` CLI, is designed to mimic real-life scenarios while providing insights into maintaining GitHub projects efficiently.

---

### [data_analyst_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/data_analyst_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a walkthrough for building a data analyst agent using Claude Managed Agents from Anthropic. The agent processes CSV files and generates an interactive HTML report containing charts and narratives. Key components include:

- **Agent**: A model that utilizes tools for data analysis.
- **Environment**: A predefined setup for the agent's tasks, including necessary packages like pandas and plotly.
- **Session**: An instance of the agent in the environment that executes specific tasks.
- **Events**: Communication between the user application and the agent.

Users learn to establish a reusable environment and agent, upload datasets, and receive a contextual report. Prerequisites include Python 3.11+ and an Anthropic API key. The article concludes with instructions to view the generated report and monitor session activity, alongside tips for future integration with Slack.

---

### [slack_data_bot.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/slack_data_bot.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a Slack bot that utilizes the `data_analyst_agent.ipynb` to analyze data from CSV files. Built with Bolt for Python, this bot initiates a session upon being mentioned, allowing users to receive narrative reports based on uploaded data. Key features include the ability to show analysis progress as thread updates, continue conversations through follow-up replies, and post the completed report in the thread. 

To set up, users must create a Slack app and configure it to handle Socket Mode and necessary scopes. The bot operates by creating sessions for each thread, relaying progress and results as the analysis runs. Future enhancements suggested include changing the agent's prompts and persisting session data for continuity after restarts. The article concludes with instructions for running the bot in a Slack workspace.

---

### [sre_incident_responder.ipynb](https://github.com/anthropics/claude-cookbooks/blob/8f6e61acf266c1f036ca7691a32b226ddef1a0f7/managed_agents/sre_incident_responder.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a tutorial on creating an SRE (Site Reliability Engineering) Incident Response Agent utilizing Claude Managed Agents. The following key features are highlighted:

1. **Triggered Alerts**: Using a PagerDuty webhook, the agent automatically initiates incident response via a single API call.
2. **Skill Integration**: The agent is equipped with a custom Skill that adheres to team runbook conventions for incident triage.
3. **Sandboxed Investigation**: Built-in tools (e.g., `bash`, `read`, `edit`) enable the agent to investigate logs and infrastructure code securely.
4. **Human Approval Process**: The agent can open pull requests and request human approval before merging any code changes, ensuring safety and accountability.
5. **Observability**: The Anthropic Console records every action taken during the incident response for audit purposes.

The post concludes by specifying the tutorial's prerequisites and guiding readers through setup and execution steps.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has unveiled its new Claude Managed Agents, a hosted runtime for creating stateful, tool-using agents. The platform allows users to define agents and environments which persist across sessions. Key announcements include several applied cookbooks that demonstrate real-world applications, such as generating HTML reports from CSV files, integrating a Slack bot for data reporting, and automating incident responses with a human approval step.

Additionally, guided tutorials cover the Managed Agents API through realistic workflows, including problem-solving loops for failing tests, transitioning issues to pull requests, exploring unfamiliar codebases, human-in-the-loop processes, and operating in production settings. Users can start by setting their API key and running example notebooks, with all necessary fixture data available in a dedicated directory.

---

### [OVERVIEW.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/example_data/OVERVIEW.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a directory designed for use with cookbook notebooks, containing small, self-contained inputs to facilitate end-to-end testing without requiring external databases or APIs. Each subdirectory corresponds to a specific notebook and is structured to encourage meaningful agent interactions with planted challenges, such as bugs and discrepancies in documentation. Key features of the directory include:

- **`iterate/`**: Focuses on fixing failing tests, containing a small package with bugs that require thoughtful resolution.
- **`orchestrate/`**: Guides users through managing an issue to a merged PR while addressing a mock Unicode bug and handling CI failures.
- **`gate/`**: Implements human-in-the-loop approval processes, including various approval scenarios with custom policy rules.
- Additionally, **`CMA_explore_unfamiliar_codebase.py`** operates on dynamically generated data to help explore code architecture.

All operations run offline, emphasizing accessibility and control.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/example_data/gate/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a new expense approval agent, `CMA_gate_human_in_the_loop.py`, which utilizes a `policy.yaml` and a set of twelve receipts stored in `inbox/receipts.jsonl`. This agent classifies receipts based on a defined policy using two tools: `decide()`, which handles clear approvals and rejections, and `escalate()`, designated for ambiguous cases. The receipts are strategically designed to test all aspects of the policy, including scenarios for automatic approvals, mandatory receipt requirements, manager approvals, exceeding thresholds, a travel charge that is always escalated, and a deliberately ambiguous category. The expected outcome is a varied decision mix of approvals, rejections, and escalations, ensuring that not all decisions fall into one category.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/example_data/iterate/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses a `calc.py` file containing three intentional bugs, alongside a corresponding `test_calc.py` that includes three assertions to identify these issues. The primary focus is on the bug within the `test_mean` function, which is notable because the `mean()` function relies on the `add` and `divide` functions under the hood. Once these two functions are fixed, the `mean()` function passes the test automatically, highlighting that an agent modifying `mean()` directly may inadvertently apply unnecessary fixes. This scenario emphasizes the importance of targeted debugging and understanding function dependencies in code.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/example_data/orchestrate/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a self-contained mock workflow for maintainers, demonstrated through a script (`CMA_orchestrate_issue_to_pr.py`). It features a bash script (`gh-mock`) that simulates relevant GitHub commands, maintaining state in a directory. The process revolves around a Unicode bug report, requiring the agent to analyze code for resolution. Key components include a buggy `slugify()` function and corresponding failing tests. Two critical recovery points are established: an initial incomplete fix that triggers a CI failure and a mock reviewer-bot that prevents merging if documentation is missing. The successful execution culminates in a merged pull request with passing tests and an approved review, showcasing an effective approach to issue resolution in software development.

---

### [oom.md](https://github.com/anthropics/claude-cookbooks/blob/fa27d432a1899b26648a10244ff90ba2445d463b/managed_agents/example_data/sre/runbooks/oom.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a detailed troubleshooting guide for handling `OOMKilled` errors in Kubernetes pods, which occur when containers are terminated due to exceeding memory limits. Key steps in the triage process include confirming that the kill is caused by the kubelet's OOM killer (indicated by exit code 137) rather than an application-level restriction. Users are advised to review the deployment manifest for memory limits and ensure they are set appropriately, particularly noting that the checkout service requires approximately 400Mi of memory after cache warming. The post recommends raising the limit to 512Mi and adjusting `requests.memory` accordingly. Lastly, it stresses the importance of submitting a pull request to update the infrastructure repository instead of making live deployment changes.