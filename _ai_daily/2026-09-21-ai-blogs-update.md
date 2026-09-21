---
title: Claude Managed Agents Upgrade - Streamlined, Secure, and User-Friendly
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 09-21"
---
Across these blog posts, the most important trends and announcements are:

- **Transition to Runnable Apps**: Anthropic has migrated several Managed Agents examples—including the MCP server, Linear integration, and Road Trip Planner—from standalone notebooks to runnable applications within the Claude Quickstarts repository. This shift offers a more production-ready experience and simplifies deployment for users.

- **Standardized Configuration and Setup**: All projects now use consistent environment and agent configuration based on YAML files and `.env`, with setup processes standardized through new scripts (like `./agents/setup.sh`) and the `ant` CLI, retiring older commands such as `bun run setup` and inline flags.

- **Improved Access Control and Security**: Updates include refined access controls (e.g., restricting Linear bridge ownership, the introduction of `ALLOWED_AGENT_IDS`), use of secure environment variables, and HTTP server binding defaults that enhance security.

- **Enhanced Tutorials and Integrations**: A suite of applied cookbooks and guided tutorials supports users in quickly leveraging the Managed Agents API across real-world scenarios—including MongoDB integration, analytic workflows, Slack bots, and more—with comprehensive resources for onboarding.

- **Backward Compatibility**: For each migration, references to the last version of previous codebases are provided, supporting users in transitioning smoothly.

These updates collectively make the Claude Managed Agents ecosystem more robust, extensible, and user-friendly for developing modern, stateful AI agent applications.

## New Cookbook Recipes

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/daac2acb91544767804e42cf720df07c232fd5b6/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has released the Claude Managed Agents (CMA), a hosted runtime designed for stateful, tool-using agents. Users can create agents and sandboxed environments that persist across sessions, facilitating various tutorials. Key features include:

1. **MongoDB Integration**: The cookbook `CMA_with_mongodb_atlas.ipynb` provides methods to connect MongoDB to CMA, covering different retrieval patterns and a fraud-review agent.
2. **Applied Cookbooks**: Tutorials like `data_analyst_agent.ipynb`, which generates reports from CSVs, and `slack_data_bot.ipynb`, which integrates this functionality into Slack.
3. **Guided Tutorials**: A series of notebooks designed to teach the Managed Agents API, covering tasks like issue tracking, code exploration, and expense approvals.

Moreover, comprehensive setup instructions and example data are provided to help users get started with their own projects.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/daac2acb91544767804e42cf720df07c232fd5b6/managed_agents/cma-mcp/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the relocation of the Managed Agents MCP server to the Claude Quickstarts repository. The new implementation is a runnable app, now found in the `mcp-server-typescript` directory. Key changes include:

1. Updated directory path.
2. The bearer token variable has been renamed to `MANAGED_AGENTS_MCP_TOKEN`.
3. The default HTTP server now binds to `127.0.0.1`, rather than all interfaces, requiring configuration for other addresses.
4. Introduction of the `ALLOWED_AGENT_IDS` variable for agent access limitation.
5. The environment configuration has shifted to `environment.yaml` with setup via the `ant` CLI, eliminating the inline `--config` command.

The last version of the previous code can be accessed at a specified commit link.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/daac2acb91544767804e42cf720df07c232fd5b6/managed_agents/linear/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the relocation of the Linear × Claude Managed Agents example to the Claude Quickstarts repository, where it is now presented as a runnable app rather than a notebook. Key updates include changes to agent and environment configuration files, with setup now handled through the `./agents/setup.sh` script and the `ant` CLI, eliminating the previous `bun run setup` command. The webhook route has been updated to `/managed-agents/webhook`, necessitating modifications in the Claude Console settings. Additionally, configuration is now sourced from a `.env` file instead of `.env.local`. The ownership of the bridge is restricted to the first Linear workspace that installs the agent, in contrast to the old version that allowed installations from any workspace. The last version of the previous code is also referenced for users who may need it.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/daac2acb91544767804e42cf720df07c232fd5b6/managed_agents/roadtrip_planner/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the relocation of the Road Trip Planner application to the Claude Quickstarts repository, now available as a runnable app rather than a notebook. The new location can be found at [claude-quickstarts/managed-agents/roadtrip-planner](https://github.com/anthropics/claude-quickstarts/tree/main/managed-agents/roadtrip-planner). This version retains the original functionality and features while implementing several notable changes: 

1. Agents, environment, and vault configurations are now defined in YAML and set up using `./agents/setup.sh`.
2. Configuration files are read from `.env` instead of `.env.local`, with resource IDs prefixed by `CLAUDE_*`.
3. The app's directory name has changed to `roadtrip-planner`, adopting a hyphen.

The last version from the previous location is referenced as `a97b9a2`.