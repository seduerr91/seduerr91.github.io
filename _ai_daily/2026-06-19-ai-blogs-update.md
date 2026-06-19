---
title: Transforming Workflows - ChatGPT's New API Agents Unleashed
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 06-19"
---
The recent blog posts highlight the introduction of API-triggered Workspace Agents for ChatGPT, enabling teams to automate workflows by initiating agents programmatically. Key trends include increased emphasis on asynchronous workflow automation, robust configuration through agent instructions and app permissions, and a structured setup process that ensures secure and effective task execution. The announcements underscore a growing focus on extensibility, allowing organizations to seamlessly integrate and manage automated processes within their operations using API channels and approval controls.

## New Cookbook Recipes

### [workspace-agents-api-trigger.ipynb](https://github.com/openai/openai-cookbook/blob/432e0030de8952a4e2e37d81d3ec16ed23d78079/examples/chatgpt/workspace_agents/workspace-agents-api-trigger.ipynb)
**Source:** openai/openai-cookbook

The blog post details the functionality of triggering a Workspace Agent via an API, allowing teams to initiate automated workflows stored within ChatGPT. Key highlights include the use of asynchronous API calls to initiate these workflows, with the agent acting on predefined instructions, app permissions, and approval settings. The article outlines the necessary prerequisites for setting up, including enabling Workspace Agents and creating an API channel with a trigger ID.

Readers are guided through steps to build their setup, including crafting agent instructions, connecting output destinations, and configuring the live API call. The process involves crafting source events, sending them to the agent, and managing responses. The ability to manage outputs effectively through proper app authentication and agent settings is emphasized, which ensures successful execution of the automated tasks.