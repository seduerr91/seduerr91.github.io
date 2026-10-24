---
title: OpenAI Agents Now Securely Integrated with Databricks
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-24"
---
The blog posts collectively highlight significant advancements in integrating OpenAI's cloud-based Agents API with flexible, secure sandbox environments—particularly through Databricks. Key trends include the introduction of both application-managed and webhook-managed deployment modes, enabling developers to choose how they orchestrate compute resources for AI agent execution. The collaboration with Databricks allows for secure, serverless agent code execution with easy provisioning, session management, and robust lifecycle controls, all managed via the Databricks SDK. Security considerations, such as outbound-only network access and IP allowlisting, are emphasized. Comprehensive documentation and setup guides are provided, though users should be aware that zero data retention is not yet supported. Overall, these updates streamline the deployment of OpenAI Agents in isolated environments, offering developers flexible provisioning options and enhanced operational security.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/8495326b6f1b7cec94e7f5e393a4045e328a268e/examples/agents_api/sandboxes/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the self-hosted sandbox examples for application deployment using OpenAI's cloud through `codex exec-server`. Users can choose between two provisioning modes for sessions: Application-managed, where the application directly controls the compute, and Webhook-managed, which involves a separate handler that connects upon receiving webhooks from OpenAI. The post provides a comparison of various providers (including Blaxel, Cloudflare, Databricks, DigitalOcean, and AWS Lambda MicroVMs), indicating whether they support application-managed or webhook-managed modes. Each provider's folder contains unique examples and setup instructions, with specific running commands referenced in the Cookbook repository.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/8495326b6f1b7cec94e7f5e393a4045e328a268e/examples/agents_api/sandboxes/databricks/README.md)
**Source:** openai/openai-cookbook

The blog post announces the integration of the OpenAI Agents API with the Databricks Sandbox, allowing developers to run AI agent code in a secure, serverless environment. This collaboration enables OpenAI to manage agent orchestration while Databricks provides on-demand computing resources. Key features include seamless agent session management, sandbox lifecycle control through the Databricks SDK, and isolated execution, which ensures that all network connections are outbound.

The guide details the lifecycle process for creating and tearing down agent sessions, including provisioning sandboxes and executing commands in them. Prerequisites for use include OpenAI application and executor keys, and attention to IP allowlisting for security. The sandbox offers flexibility in stopping and restarting between turns and includes log monitoring for troubleshooting. Comprehensive documentation is provided for further exploration.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/8495326b6f1b7cec94e7f5e393a4045e328a268e/examples/agents_api/sandboxes/databricks/application_managed/README.md)
**Source:** openai/openai-cookbook

The blog post introduces an application-managed Databricks Sandbox for utilizing the OpenAI Agents API. It outlines the necessary prerequisites, including a Databricks workspace with the sandbox feature enabled, specific SDK version, and required OpenAI keys. The application lifecycle is driven entirely by outbound calls without any inbound endpoints. Key steps include creating a self-hosted OpenAI session, provisioning the sandbox, and executing a greeting file creation and verification process within the sandbox. Additionally, it emphasizes that the Agents API currently does not support Zero Data Retention, which must be considered in customer use cases. For execution, it details configuration, environment setup, and running a sample script using `uv`. Comprehensive references to Databricks documentation and the Agents API are also provided.