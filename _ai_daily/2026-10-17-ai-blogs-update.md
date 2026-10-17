---
title: Secure Your Automation with Anthropic’s CMA Innovations
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-17"
---
Anthropic has introduced and significantly expanded Claude Managed Agents (CMA), providing a robust hosted runtime for building stateful, tool-using agents that support session persistence and seamless integration with databases such as MongoDB. Key trends and announcements include a strong focus on agent security, marked by the rollout of new auditing tools and enhanced workflows for reviewing agent sessions to detect security vulnerabilities—such as unauthorized access and data transmission. These reviews are supported by ranked evidence-based findings and systematic compliance checking against defined rules and sandbox descriptions.

Complementing these capabilities, the release features a collection of practical notebook cookbooks and a standardized directory of small, self-contained data inputs, enabling reproducible, end-to-end testing without external dependencies. Notebooks cover diverse applied scenarios, including debugging test suites, automating approval processes, and orchestrating workflows from issue to pull request.

Additionally, CMA provides guided templates and instructions for drafting thorough sandbox and agent descriptions, which are critical for effective security reviews and maintaining accurate audit trails. Recent updates further improve the agent review process by refining rule sets, timeout mechanisms, and review logic, emphasizing logging and transparency across workflows. Overall, the announcements reflect Anthropic’s commitment to secure, auditable, and production-ready agent automation with accessible tools and clear best practices.

## New Cookbook Recipes

### [CMA_agent_security_review.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a162e0184e71b60290808a43961a6cbc8060123c/managed_agents/CMA_agent_security_review.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new capability for reviewing sessions of Claude Agents to identify security vulnerabilities. It outlines a process that audits finished sessions, flagging actions that exceed defined permissions, such as accessing unallowed hosts, using unauthorized credentials, and attempting unauthorized data transmission. 

The tool generates a ranked list of concerning sessions, providing evidence for each finding. Four highlighted example sessions demonstrate actual incidents that triggered security alerts. The review process operates within a Managed Agents dynamic workflow, and users are guided in creating a session audit description. The article emphasizes prerequisites for setup, including Python requirements and Claude API credentials, while also detailing costs associated with reviewing session logs. Overall, this feature aims to enhance security oversight in automated agent operations.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/a162e0184e71b60290808a43961a6cbc8060123c/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has released Claude Managed Agents (CMA), a hosted runtime for developing stateful tool-using agents that maintain session persistence. A key feature is the integration of MongoDB for data retrieval, graph traversal, and record-keeping, illustrated through the `CMA_with_mongodb_atlas.ipynb` cookbook. Additional applied cookbooks are available, such as the `data_analyst_agent.ipynb`, which generates HTML reports, and a Slack bot version (`slack_data_bot.ipynb`). Guided tutorials, including `CMA_iterate_fix_failing_tests.ipynb`, introduce the Managed Agents API through practical workflows. Notebooks cover various functionalities like human-in-the-loop processes, production setups, and agent security reviews. The implementation requires setting environment variables for authentication and dependency management. The complete source code and further applications can be accessed through the linked GitHub repository.

---

### [OVERVIEW.md](https://github.com/anthropics/claude-cookbooks/blob/a162e0184e71b60290808a43961a6cbc8060123c/managed_agents/example_data/OVERVIEW.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a directory containing small, self-contained data inputs for cookbook notebooks, designed to enable end-to-end execution without requiring external databases or APIs, except for an `ANTHROPIC_API_KEY`. Each subdirectory corresponds to a specific notebook and contains deliberately small yet meaningful data sets, challenging agents with realistic scenarios such as bugs, CI failures, and approval complexities. 

Key notebooks include:
- `CMA_iterate_fix_failing_tests.py`: Focuses on debugging a failing test suite.
- `CMA_orchestrate_issue_to_pr.py`: Simulates driving an issue to a merged PR.
- `CMA_gate_human_in_the_loop.py`: Implements human approval processes with custom tools.
- `CMA_with_mongodb_atlas.ipynb`: Grounds a fraud-review agent in MongoDB retrieval.
- `CMA_agent_security_review.ipynb`: Reviews agent session logs for compliance.

Notably, the setup runs offline with the exception of one model call during review processes.

---

### [DRAFT_PROMPT.md](https://github.com/anthropics/claude-cookbooks/blob/a162e0184e71b60290808a43961a6cbc8060123c/managed_agents/example_data/agent_log_review/DRAFT_PROMPT.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a step-by-step guide for creating a sandbox description for an agent in the Claude Code environment. Users are instructed to open the necessary repository, copy a template file, and utilize an example from the `AGENTS` dictionary. The prompt outlines the required specifications for drafting the agent’s description—including aspects such as job roles, data flows, network settings, and memory stores—each to be derived from specified paths and following the format of the provided template. Users are advised to focus on factual entries without extrapolating from unclear data, and they must acknowledge any uncertainties by listing questions. The post emphasizes the importance of a thorough and accurate description for the security review process. Plus, it includes a GUID to prevent data contamination in training datasets.

---

### [REFERENCE.md](https://github.com/anthropics/claude-cookbooks/blob/a162e0184e71b60290808a43961a6cbc8060123c/managed_agents/example_data/agent_log_review/REFERENCE.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines significant updates to the agent-log review process, specifically focusing on the `CMA_agent_security_review.ipynb` notebook. Key changes include the removal of helper regex timeouts and the restructuring of various sections to align with the updated review logic. The document emphasizes the importance of rules that dictate what actions are flagged or permitted during reviews, including specific considerations for flagged exploits and misconfigurations. Additionally, it details how the review checks each workflow step systematically, ensuring compliance with established prompts and sandbox descriptions. The session timeout mechanisms and structural rules for monitoring various inputs such as credentials and URLs are also elaborated. The post concludes by highlighting the necessity of thorough logging to ensure effective monitoring and review of agent activities.