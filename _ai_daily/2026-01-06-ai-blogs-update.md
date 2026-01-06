---
title: Smart Tool Discovery - Maximize Efficiency with Claude
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 01-06"
---
The blog posts highlight new, efficient approaches for tool discovery when using Claude. Key trends include leveraging system prompts and the `describe_tool` command for dynamic tool discovery, rather than relying solely on predefined tool searches. The posts also introduce techniques like deferring tool loading (`defer_loading=True`) and only including tools when needed, leading to more efficient context management, smaller request sizes, and improved scaling for workflows utilizing numerous tools.

## New Cookbook Recipes

### [tool_search_alternate_approaches.ipynb](https://github.com/anthropics/claude-cookbooks/blob/7dc310a7231a6b0e3db5534c930156f2bd54f4c8/tool_use/tool_search_alternate_approaches.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces alternate strategies for utilizing tool search or "tool discovery" with Claude, focusing on two main techniques. Firstly, it emphasizes that tools can be discovered without needing a traditional search by including tool names in Claude's system prompt and using the `describe_tool` command to load tools into context. Secondly, the guide highlights that tools do not need to be listed in the request's `tools` list until they are actually required, which allows for more compact requests while managing numerous tools.

The article details a practical implementation with sample tools such as weather, stock price, and currency conversion tools. A crucial feature discussed is the `defer_loading=True` method, which helps preserve prompt caching while scaling tool usage efficiently. Overall, it demonstrates a more focused approach to tool discovery that maintains context and optimizes request sizes.