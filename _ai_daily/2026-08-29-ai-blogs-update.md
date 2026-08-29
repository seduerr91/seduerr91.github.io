---
title: Game-Changing Updates for ChatGPT Admins and AI Efficiency
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 08-29"
---
A number of important advancements were announced across the recent blog posts. For ChatGPT administrators, a new feature enables streamlined SharePoint site access management via the Admin API, with a Python script offering granular allowlist controls, preview, and offline testing capabilities. On the AI workload side, the introduction of the "coordinator pattern" separates planning from execution in agent architectures, allowing a cost-efficient, multi-model setup in tasks such as web research. This pattern leverages a high-level coordinator model that delegates reading and verification to cheaper worker models, reducing expenses on token-intensive operations while maintaining rigorous standards. Overall, these updates focus on empowering administrators with enhanced control and boosting operational efficiency through optimized AI agent workflow design.

## New Cookbook Recipes

### [sharepoint_site_access.md](https://github.com/openai/openai-cookbook/blob/86af94f494ee4680f883252d65fa256132d77c27/examples/chatgpt/sharepoint_site_access/sharepoint_site_access.md)
**Source:** openai/openai-cookbook

The blog post introduces a new feature for ChatGPT workspace administrators, allowing them to manage SharePoint site access through the ChatGPT Admin API. Administrators can restrict access to approved SharePoint site collections by resolving URLs into Microsoft Graph identifiers and managing an allowlist via a provided Python script. 

The script supports various functionalities, including adding and removing site collections, previewing changes, and managing allowlist entries while preserving existing ones. It also offers a dry-run option and requires explicit confirmation before clearing policies. 

Key prerequisites include Python 3.10+, a ChatGPT workspace ID, and specific permissions. The blog details command-line syntax for various operations, troubleshooting tips, and the process for running offline tests, ensuring administrators can efficiently manage SharePoint site access.

---

### [CMA_plan_big_execute_small.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bbfab1bbbe5d4c353241a6df4e7d9a112a1ba356/managed_agents/CMA_plan_big_execute_small.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "coordinator pattern," which separates planning and execution in AI agent workloads, particularly in web research tasks. It describes an architecture where a frontier model (the coordinator) plans and synthesizes answers without accessing raw web pages. In contrast, inexpensive worker models perform the reading and fact-verification in parallel. 

Key features include configuring a two-model team using the `multiagent` coordinator field, monitoring delegation events, and running a control trial with a solo frontier agent. The notebook guides users through setup, execution, and cost analysis, demonstrating significant savings by utilizing cheaper workers for token-heavy tasks like document review and web searches. It concludes with a comparative metric analysis of costs between using the coordinator pattern and a single frontier agent under the same rigorous verification standards.