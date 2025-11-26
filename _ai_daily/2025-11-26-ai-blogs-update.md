---
title: Boosting AI Power - New Features in Chat Completions API
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 11-26"
---
The latest advancements in the Chat Completions API focus on expanding GPT models' utility by integrating external function calling capabilities. Key trends include enhanced control over function invocation through new parameters (`tools` and `tool_choice`), support for parallel function calls in advanced models like GPT-5, and streamlined methods for database interactions—enabling models to generate and execute queries dynamically. Practical examples illustrate how these features empower developers to build more functional and responsive AI applications.

## New Cookbook Recipes

### [How_to_call_functions_with_chat_models.ipynb](https://github.com/openai/openai-cookbook/blob/c2d225dd720d2d3ae39ae2122b35b740c2b6f83b/examples/How_to_call_functions_with_chat_models.ipynb)
**Source:** openai/openai-cookbook

The blog post explains how to utilize the Chat Completions API alongside external functions to enhance the functionality of GPT models, particularly focusing on generating and executing function arguments. Key features include:

1. **Tools Parameter**: Developers can define functions within a `tools` parameter, which the model uses to generate function arguments but does not execute.

2. **Function Invocation**: The model can be instructed to use a specific function or to refrain from making any function calls by manipulating the `tool_choice` parameter.

3. **Parallel Function Calling**: Recent models, such as GPT-5, can handle multiple function calls simultaneously.

4. **Database Interaction**: The blog demonstrates how to specify utility functions for querying a SQLite database, extracting information via model-generated SQL queries, thus allowing the chatbot to interact effectively with databases.

Overall, the guide provides practical examples to show how these features can be implemented.