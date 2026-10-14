---
title: Revolutionizing Automation - Unleashing the Power of Agents
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-14"
---
The blog posts highlight significant advancements in agent-based automation, focusing on both architectural efficiency and enhanced developer functionality. Key trends include the adoption of multi-agent, orchestrator-worker patterns to optimize costs and performance for data-intensive tasks by separating complex planning from mechanical execution. These approaches demonstrate measurable cost-savings and improved parallelism in applications such as document review and factual validation.

Additionally, Anthropic’s rollout of Claude Managed Agents introduces persistent, tool-using agent runtimes with features like MongoDB integration for flexible data retrieval and real-world workflow support. Practical resources—including cookbooks and guided tutorials—empower users to deploy and customize agents for use cases ranging from fraud review to site reliability incident response, marking a shift towards more accessible and robust agent integrations within enterprise environments.

## New Cookbook Recipes

### [CMA_plan_big_execute_small.ipynb](https://github.com/anthropics/claude-cookbooks/blob/39cd5a7a3a29a73e7391e17b7644c51f34a6aaa1/managed_agents/CMA_plan_big_execute_small.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the orchestrator pattern used in agent workloads, particularly in web research, where workloads are divided into planning and mechanical execution. The orchestrator model utilizes a high-cost frontier model for planning, while inexpensive worker models handle the reading of web content. This approach aims to reduce operational costs significantly by leveraging a cost-effective structure for data-heavy tasks such as document review and log analysis.

Key features include the configuration of a two-model team using the `multiagent` block, methods to track delegations, and performance metrics to compare the costs of orchestrated operations versus solo approaches. The piecemeal capability allows for efficient and parallel handling of queries, maintaining high verification standards as evidenced in trials involving factual validation against authoritative sources. The architecture emphasizes that while workers interact with raw data, the orchestrator focuses solely on synthesis, leading to potential cost savings across various applications.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/39cd5a7a3a29a73e7391e17b7644c51f34a6aaa1/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has announced enhancements to its Claude Managed Agents (CMA), a hosted runtime for tool-using agents that allows for persistent state and interactions. Key features include the integration of MongoDB, which facilitates various retrieval patterns and aids in creating a human-in-the-loop fraud-review agent. 

Technical cookbooks provide practical examples, including the creation of a data analyst agent, a Slack bot, and a site reliability engineer incident responder. Guided tutorials introduce users to the CMA API through realistic scenarios, showing how to manage workflows such as issue resolution and codebase exploration.

To get started, users must set specific environment variables and configure their Jupyter notebooks accordingly. All necessary data and examples are available in the project's repository.