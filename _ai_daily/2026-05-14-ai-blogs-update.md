---
title: Revolutionizing Integration – Claude Managed Agents Unleashed
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 05-14"
---
**Meta-Summary:**

Across all blog posts, the primary trend is the rapid advancement and diversification of Claude Managed Agents integrations, particularly with Linear and via Managed Control Program (MCP) servers. Notable announcements include the release of specialized bridges and thin MCP servers that streamline the connection between AI-managed agents and existing tools like Linear, enhancing issue management through automated AI-driven replies and seamless session handling.

A strong emphasis is placed on structured setup, debugging best practices, and careful environment configuration, including detailed instructions for both local and remote deployments. Key functionalities introduced or improved include webhook-based event handling, session management primitives, multi-agent coordination, memory persistence, and robust authentication workflows. Technical enhancements require minimum SDK versions and reference to comprehensive API documentation.

Best practices highlighted span stateless architecture, fast and accurate webhook responses, secure API usage, and troubleshooting guidance. Collectively, these developments target improved user experience, reliability, and extensibility when embedding Claude Managed Agents into diverse workflows and platforms.

## New Cookbook Recipes

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/b5b727b70a6e2f89b741ee075cca67917d2b3488/managed_agents/linear/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Linear × Claude Managed Agents bridge, designed to facilitate seamless integration and session management. Key steps for setup include invoking the `/claude-api` for reference, meticulously following the `./skill.md` guide, and ensuring debugging practices are in place. Once the basic bridge functionality is confirmed, users are encouraged to explore various extensions, such as integrating a GitHub repository, utilizing Multiagent coordination, implementing grading outcomes, and establishing memory persistence across sessions. Each feature requires specific modifications to code files, emphasizing the importance of consulting the API documentation for accuracy. The server can be launched using `bun run dev`, with a one-time agent provisioning command provided. This structured approach enhances the user experience in managing agent interactions.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/b5b727b70a6e2f89b741ee075cca67917d2b3488/managed_agents/linear/README.md)
**Source:** anthropics/claude-cookbooks

The blog post highlights the integration of Claude Managed Agents with Linear, enabling users to enhance their Linear issue tracking by `@mentioning` a Claude Managed Agent for automated replies as comments. The integration utilizes a structured workflow involving webhooks and session management to facilitate tasks, with Claude running on Anthropic infrastructure. 

A quickstart guide is provided to set up the integration, involving commands to create the necessary OAuth app and configure the environment. Key files included in the integration are outlined, detailing the functionalities such as agent creation, OAuth management, and webhook processing. The setup requires a minimum version of the `@anthropic-ai/sdk`. Overall, this integration aims to streamline issue management within Linear through AI-driven assistance.

---

### [skill.md](https://github.com/anthropics/claude-cookbooks/blob/b5b727b70a6e2f89b741ee075cca67917d2b3488/managed_agents/linear/skill.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses essential setup tips for integrating Linear with Anthropic using a webhook bridge. It explains that a webhook is an HTTP POST request signaling specific events without the need for polling. The integration requires a bridge to translate messages between Linear and Anthropic due to mismatched formats and credentials. Key features include two webhooks—one for Linear mentions and another for Anthropic session idle notifications. It also highlights several important considerations, such as ensuring the correct workspace is registered for webhooks, understanding the workspace-scope of notifications, and adhering to Linear's 10-second acknowledgment rule. Development tips with ngrok, common debugging checks, and production recommendations for transitioning to a more robust environment are also provided. The emphasis is on maintaining a stateless architecture and handling event responses efficiently to avoid delivery issues.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/e7b800d472527085494e3846d25e4dfc555b2857/managed_agents/cma-mcp/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a Managed Control Program (MCP) server that exposes Managed Agents session primitives as tools. Two entrypoints are provided: `src/server.ts` for Claude Desktop via standard input and `src/server-http.ts` for the claude.ai web connector using streamable HTTP. 

To set up or debug the system, users are instructed to invoke the `/claude-api` to access the full Managed Agents API reference. They should consult `./skill.md` for detailed setup instructions based on their target client. For adding new tools, users must map the CMA endpoint in `src/cma.ts` and register it in `src/server.ts` with a Zod schema. Commands for running the server and type checking are also provided. 

Overall, the post emphasizes structured setup and debugging processes while highlighting certain operations that are not exposed for safety reasons.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/e7b800d472527085494e3846d25e4dfc555b2857/managed_agents/cma-mcp/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new thin MCP server that integrates with Claude's Managed Agents Sessions API, enabling users to interact with hosted agents via Claude Desktop or the claude.ai web platform. The server supports nine tools, aligned with CMA endpoints, facilitating communication and session management. Key functionalities include sending messages, creating and archiving sessions, and retrieving agent details.

The setup process is simplified with a quickstart guide, and users can choose between local process or HTTP transport methods. The post details the necessary files for implementation, emphasizing the use of the Anthropic SDK version 0.95.1 or higher. This MCP server allows seamless interaction with agents, enhancing user capabilities in managing conversations and sessions efficiently.

---

### [skill.md](https://github.com/anthropics/claude-cookbooks/blob/e7b800d472527085494e3846d25e4dfc555b2857/managed_agents/cma-mcp/skill.md)
**Source:** anthropics/claude-cookbooks

The blog post delineates setup tips for using the Claude Managed Control Plane (CMA) as a server in both local and remote modes. Key points include the structural distinction between Claude Desktop (frontend) and CMA (backend), underlining that all primary operations occur within the CMA framework. The instructions detail the creation and configuration of environments and agents, alongside necessary environmental variable settings.

For local setup using Claude Desktop, it emphasizes registering the CMA server within the application’s config file and testing functionalities through specified commands. For remote access, it describes generating an authentication token, deploying the service to a public URL, and setting up a custom connector on the claude.ai web interface. Additional attention is given to optimal relay mode instructions for effective interaction and troubleshooting common issues experienced during setup. The post concludes with warnings regarding API security and usage billing.