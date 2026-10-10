---
title: Agent Advancements and Plugin Power – Key Highlights Revealed
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 10-10"
---
**Meta-summary:**

Recent blog posts highlight significant advancements in agent and plugin development through enhanced evaluation frameworks and expanded data integrations. Key trends include the introduction of Claude Managed Agents (CMA), which support stateful, tool-using agents with persistent session management and sandboxed environments. Multiple applied examples, such as a comprehensive fraud review agent and new integration with MongoDB Atlas, demonstrate versatile retrieval patterns (vector, full-text, graph) and emphasize secure, human-in-the-loop workflows.

On the evaluation front, several posts focus on rigorous, harness-aware plugin testing, stressing that plugins must be assessed in realistic, end-to-end environments to ensure reliable real-world performance. The release of the BLS Plugin and a framework for integrating Codex with evaluation systems show a commitment to making evaluation more accessible and actionable.

Infrastructure updates include the reorganization of self-hosted sandboxes as runnable apps, clearer environment key management, modularization of support code, and SDK version upgrades. Across all posts, there is a strong emphasis on security, modularity, and hands-on, cookbook-driven tutorials—enabling users to rapidly deploy, test, and iterate on agent- and plugin-based workflows.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/5bd6cb40b6b84b69b2032d810610aa85064102df/examples/partners/harness_aware_plugin_evals/.codex-home/marketplaces/cookbook-plugins/plugins/bls/README.md)
**Source:** openai/openai-cookbook

The blog post announces the release of the BLS Plugin, which serves as a connection between Codex and the cookbook's BLS evaluation MCP server. This integration is facilitated through the `.mcp.json` file. The BLS Plugin aims to enhance the functionality and accessibility of BLS evaluations for users working within the Codex environment.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/5bd6cb40b6b84b69b2032d810610aa85064102df/examples/partners/harness_aware_plugin_evals/README.md)
**Source:** openai/openai-cookbook

The blog post serves as a guide for running the "Harness-aware Evaluation of Plugins" example, detailing the necessary steps for setup and execution. Key announcements include the requirement of an OpenAI API key for certain functions, the installation of Python and Node.js dependencies, and the use of a local MCP server to facilitate evaluations. The post outlines commands for different evaluation levels, starting with direct tool tests (level 1) and advancing to more complex standalone loops (level 2) and Codex interactions (level 3). Notably, the evaluation results highlight discrepancies between the standalone loop and Codex when fetching series IDs. The post also suggests modifications to improve Codex's performance through guidance embedded in the MCP server. A comprehensive list of environment variables and a layout of project files are provided for clarity.

---

### [harness_aware_plugin_evals.ipynb](https://github.com/openai/openai-cookbook/blob/5bd6cb40b6b84b69b2032d810610aa85064102df/examples/partners/harness_aware_plugin_evals/harness_aware_plugin_evals.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the importance of harness-aware evaluations for plugins, highlighting that a plugin's success in isolated tests may not translate to real-world performance. It showcases a testing approach using a Codex plugin integrated with Bureau of Labor Statistics (BLS) data, detailing three evaluation methods: direct tool tests, a standalone function-calling loop, and product harness tests. Each method assesses different aspects, like debugging tool logic and evaluating natural-language processing. The article uses a simplified example to demonstrate evaluation mechanics, emphasizing the need for thorough assessments across various levels to improve model accuracy and performance in real situations. An example dataset is provided, along with setup instructions for implementing these evaluations. Overall, the findings underscore that model performance can vary significantly depending on the evaluation environment.

---

### [CMA_with_mongodb_atlas.ipynb](https://github.com/anthropics/claude-cookbooks/blob/9c1e493ddd2b82df399d2a61b9c806c539e18be6/managed_agents/CMA_with_mongodb_atlas.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the integration of **MongoDB Atlas** with **Claude Managed Agents** (CMA) for creating a human-in-the-loop fraud review agent using standard CMA patterns. Key announcements include the use of MongoDB as a unified engine for search and storage, allowing documents to be queried through vector searches, full-text searches, hybrid searches, and graph traversals, all with a single connection. 

The integration emphasizes maintaining security by ensuring the database credentials are not exposed within the agent's sandbox. The guide outlines four primary capabilities: connecting MongoDB to a managed agent, utilizing diverse retrieval patterns, implementing a human-in-the-loop review process, and establishing MongoDB Atlas as a reliable system of record. The post culminates in a practical example of a fraud-review agent, showcasing the versatility of this architecture across various applications.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9c1e493ddd2b82df399d2a61b9c806c539e18be6/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has introduced Claude Managed Agents, a hosted runtime that enables the creation of stateful, tool-using agents. The framework allows users to define agents and sandbox environments, facilitating persistent sessions that maintain files, tool states, and conversations. Highlighted features include a cookbook for integrating MongoDB with CMA agents, showcasing various connection methods and retrieval patterns, alongside a human-in-the-loop fraud review agent.

Several applied cookbooks are also available, delivering practical examples like data analysis reports, Slack integration for reporting, and incident response automation. The post outlines guided tutorials that serve as hands-on resources for learning the Managed Agents API through realistic workflows. Noteworthy topics include managing agent budgets, memory storage for user preferences, and collaborative agent configurations. Users can quickly get started by setting API keys and accessing Jupyter notebooks to run defined workflows.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9c1e493ddd2b82df399d2a61b9c806c539e18be6/managed_agents/mongodb_on_cma/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Fraud Review Agent** designed for integration with **MongoDB Atlas** and **Claude Managed Agents**. It highlights a detailed setup guide included in a notebook that contains teaching code for essential components such as retrieval pipeline builders, custom-tool handlers, and a `requires_action` gate loop. Key modules discussed include:

- **config.py**: Contains tunables and MongoDB server version checks.
- **embeddings.py**: Adapts MongoDB Atlas AI endpoint to a generic interface.
- **tools.py**: Sets up MongoDB Atlas, creates indexes, and manages dictionary shaping.
- **ap2_mandates.py**: Handles AP2 mandate signing and verification.
- **seed.py**: Loads transactions from a specified fixture.
- **self_hosted_sandbox/**: Offers a Docker image for a self-hosted environment to interact with MongoDB.

The post emphasizes secure handling of MongoDB credentials, which remain on the user's side, enhancing security during the fraud review process.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9c1e493ddd2b82df399d2a61b9c806c539e18be6/managed_agents/self_hosted_sandboxes/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the relocation of self-hosted sandboxes to the Claude Quickstarts repository, now presented as runnable applications instead of notebooks. Key changes include renaming two directories, the consolidation of agent and environment files, and the removal of the usage and upgrade guides in favor of provider-specific README files. The environment key management has been revised, with work items being rejected if not initiated with a session secret. Additionally, the SDK version requirement has been updated from 0.97 to 0.124, and the Docker image for the sandbox has been adjusted to exclude `pymongo`, housed instead in a specific MongoDB Atlas support code repository. The final version of the previous code base is still accessible via a provided link.