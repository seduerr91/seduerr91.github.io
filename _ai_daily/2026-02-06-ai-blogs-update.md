---
title: Boost Your Workflow with Automatic Context Compaction
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 02-06"
---
The latest update to the Claude Agent Python SDK introduces "Automatic Context Compaction," a significant enhancement that streamlines long-running tasks by efficiently managing token limits. This feature automatically summarizes and condenses conversation histories when token quotas are exceeded, retaining only essential information for ongoing workflows. Aimed at scenarios such as customer service ticket processing, automatic compaction improves efficiency, prevents context overload, and reduces token consumption, enabling more sustainable and resource-effective agent interactions. Basic familiarity with agent patterns, Python, and the Anthropic API is required for implementation.

## New Cookbook Recipes

### [automatic-context-compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/7cb72a9c879e3b95f58d30a3d7483906e9ad548e/tool_use/automatic-context-compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the introduction of "Automatic Context Compaction" in the Claude Agent Python SDK, designed to manage context limits during long-running tasks efficiently. This feature addresses the challenge where extensive workflows lead to token overconsumption, particularly in scenarios such as customer service ticket processing. 

Key functionalities of context compaction include monitoring token usage, summarizing conversation history when token limits are exceeded, and retaining only essential summaries for continued task execution. The post illustrates this through a customer service workflow scenario, comparing outcomes with and without compaction. Enabling this feature significantly reduces token usage, avoids context overload, and enhances workflow efficiency while preserving critical information. The implementation requires basic knowledge of agent patterns, Python, and the Anthropic API.