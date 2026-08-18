---
title: Master Your API Budget with New Spending Controls
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 08-18"
---
The latest blog posts highlight the introduction of a per-run spending controller for the Responses API, enabling precise, task-level budget management rather than relying solely on global limits. Key trends include more granular control over individual request costs, integration of automated cost estimation and budget tracking, and sample Python code to facilitate implementation. Developers are encouraged to utilize these new tools to ensure responsible API usage and prevent budget overruns, with clear guidance provided for setup and integration into practical workflows.

## New Cookbook Recipes

### [per_run_spending_controller_responses_api.md](https://github.com/openai/openai-cookbook/blob/9a9d99e936c18e95ed5559cb0afa861710fa007b/articles/per_run_spending_controller_responses_api.md)
**Source:** openai/openai-cookbook

The blog post introduces a per-run spending controller for using the Responses API, enabling granular budget management for individual tasks. Unlike global spending limits, this system allows each model request to have its own budget, ensuring that tasks remain financially feasible. Before each request, the expected cost is calculated based on input tokens, and any unused budget is returned after the response. 

Sample pricing is provided for various token types, and the blog includes Python code for implementing budget tracking, including classes for RateCard and RunBudget. It also emphasizes the necessity of ensuring requests stay within defined limits and outlines how to handle potential overages. The post concludes with a practical example of managing budget for a support ticket, demonstrating how to setup and execute the controller code efficiently. 

For full implementation details, developers are encouraged to refer to the provided code snippets and follow the instructions for installation.