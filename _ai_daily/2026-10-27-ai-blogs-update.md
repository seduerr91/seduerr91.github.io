---
title: OpenAI Meets Amazon Bedrock - Simplifying AI Integration
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-27"
---
The blog post announces the integration of OpenAI models with Amazon Bedrock, enabling seamless use of advanced text generation and structured output capabilities within production cloud workflows. Key trends highlighted include enhanced compatibility through a flexible Responses API, practical guidance for cloud deployment (including model configuration, output management, and production tooling), and support for customizable model and region settings. This integration simplifies deploying AI-powered solutions—demonstrated via a customer support assistant example—while setting clear technical prerequisites for implementation.

## New Cookbook Recipes

### [openai_models_with_amazon_bedrock.ipynb](https://github.com/openai/openai-cookbook/blob/a8132ca2f7a5de3a6cf15d9e79d172787b42b697/examples/partners/AWS/openai_models_with_amazon_bedrock.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the integration of OpenAI models with Amazon Bedrock, providing a compatible Responses API for production workflows that require text generation and structured outputs. It features a practical guide, built around a fictional retailer, BrightCart, showcasing a support-assistant workflow for handling order issues. Key learnings include configuring models, verifying response endpoints, managing JSON outputs, and implementing various tools such as background processing and prompt caching. Prerequisites are outlined, including a bearer token and Python 3.9 or newer. The guide defaults to using the `openai.gpt-5.4` model in the `us-west-2` region but allows for customization of region and model settings. Overall, it serves as a comprehensive resource for deploying OpenAI models in cloud environments effectively.