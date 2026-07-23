---
title: Advancements in Anthropic’s Managed Agents Platform Unveiled
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 07-23"
---
Recent announcements highlight significant advancements in Anthropic’s Managed Agents platform, emphasizing enhanced real-time monitoring, greater flexibility in agent management, and practical tools for building applied multiagent systems. Notable features include per-thread delta streaming for reduced latency, session initialization with predefined events, adjustable agent effort parameters for optimized resource usage, and optional versioning during updates. Comprehensive tutorials and cookbooks demonstrate the practical deployment of stateful, tool-using agents across a variety of tasks—such as automated reporting, Slack integration, and incident response—showcasing robust guides for real-world API integration and environment setup. Overall, these updates streamline agent development and monitoring while empowering users to implement complex workflows more efficiently.

## New Cookbook Recipes

### [CMA_watch_subagents_live.ipynb](https://github.com/anthropics/claude-cookbooks/blob/995c3c880a6e0cf7a2e137ac6a373d53c87a9c8a/managed_agents/CMA_watch_subagents_live.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces enhanced capabilities for real-time monitoring of multiagent systems through the Managed Agents API. Key features include:

1. **Per-thread Delta Streaming**: Live text previews for subagents are now visible on their own streams, reducing delay in viewing outputs.
2. **Initial Events on Session Creation**: Sessions can now initiate with defined initial events in a single API call.
3. **Effort Control for Agents**: The `model.effort` parameter allows for customized effort levels for each agent, optimizing cost management based on roles.
4. **Optional Versioning on Agent Updates**: This feature allows smoother updates to agents without mandatory version constraints.

Additionally, the blog outlines the setup process for building a curriculum development team, comprising a standards researcher and a lesson writer, and demonstrates live monitoring of all agent interactions during session execution.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/995c3c880a6e0cf7a2e137ac6a373d53c87a9c8a/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has introduced Claude Managed Agents, a hosted runtime for creating stateful, tool-using agents. Users can define agents and environments once and utilize them across sessions, maintaining files, tool states, and conversations. The blog outlines various applied cookbooks, including tutorials for building an analyst agent that generates HTML reports from CSV files, a Slack integration for reporting, and a system for incident response. Additional guided tutorials provide comprehensive API training through realistic tasks, such as fixing failing tests, human-in-the-loop approval processes, and resource versioning. Users are advised to set up their environment with the necessary API keys and can access supporting data in the provided directory.