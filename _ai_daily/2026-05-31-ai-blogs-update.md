---
title: Amazon Bedrock Elevates AI Integration with OpenAI Models
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 05-31"
---
Amazon Bedrock has launched comprehensive integration with OpenAI models, notably via a new Responses API tailored for production-grade tasks such as text generation, structured (schema-constrained) outputs, and robust state management. Major trends highlighted include enhanced workflow automation through detailed examples (e.g., customer support assistants), support for flexible API consumption methods (using both SDKs and direct HTTP requests), and expanded capabilities like direct file input, tool integration, and prompt management. The announcement also underscores a focus on developer accessibility, requiring standard Python environments and OpenAI credentials, and showcases the operational deployment of advanced models such as `openai.gpt-5.4` within AWS infrastructure.

## New Cookbook Recipes

### [openai_models_with_amazon_bedrock.ipynb](https://github.com/openai/openai-cookbook/blob/026f7e66c258750a053047eee129978714da4712/examples/partners/AWS/openai_models_with_amazon_bedrock.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the integration of OpenAI models into Amazon Bedrock, featuring a Responses API designed for production workflows that include text generation, structured outputs, and state management. It provides a detailed cookbook for creating a support assistant workflow for a fictional retailer, BrightCart, addressing delayed and damaged-order requests. Key features include configuration of the Bedrock-hosted OpenAI model, verification of the Responses endpoint, and capabilities for sending requests using both the OpenAI SDK and raw HTTPS requests. The guide covers generating schema-constrained JSON, using application-managed tools, sending direct file inputs, and implementing prompt caching and cleanup routines. Prerequisites include Python 3.9 or newer and an OpenAI bearer token for authentication. The default model used in examples is `openai.gpt-5.4`, hosted in the `us-west-2` region.