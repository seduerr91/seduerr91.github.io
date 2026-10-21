---
title: Sandbox Trends - Unlocking OpenAI Compute Management
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-21"
---
**Meta-Summary:**

Recent blog posts highlight two major trends in sandbox compute management for applications using OpenAI’s cloud: the introduction and detailed explanation of both application-managed and webhook-managed provisioning modes. Providers such as Blaxel, Cloudflare, Daytona, Modal, and Vercel now offer comprehensive support for these modes, with step-by-step setup instructions and examples tailored to each. Webhook-managed sandboxes, in particular, enable robust integration with the Agents API, allowing for dynamic connection management and automated agent session handling via webhook handlers. Key developments include standardization of setup workflows (with handler deployment and credential configuration), best practices for session lifecycle management (to avoid duplicate provisioning), and considerations for ensuring smooth agent operation, such as API key consistency and mitigating worker timeouts. Overall, these updates signal a move toward more modular, provider-agnostic, and operationally resilient agent compute environments.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/293fc83ebf64cba8952da5e8083c7753a58e6a62/examples/agents_api/sandboxes/README.md)
**Source:** openai/openai-cookbook

The blog post outlines two provisioning modes for sandbox compute in applications utilizing OpenAI's cloud via the `codex exec-server`: Application-managed and Webhook-managed. 

1. **Application-managed Mode**: The application directly handles compute provisioning without a webhook, using a provided script (`application_managed/main.py`).
   
2. **Webhook-managed Mode**: A deployed webhook handler is responsible for starting or reconnecting compute based on incoming webhooks from OpenAI.

The post further details various providers, including Blaxel, Cloudflare, Daytona, and others, offering both modes with specific instructions for execution. Each provider comes with comprehensive examples and a shared sandbox setup, catering to developers' needs depending on their chosen provisioning mode.

---

### [webhook_managed.md](https://github.com/openai/openai-cookbook/blob/293fc83ebf64cba8952da5e8083c7753a58e6a62/examples/agents_api/sandboxes/webhook_managed.md)
**Source:** openai/openai-cookbook

The blog post discusses the introduction of webhook-managed sandboxes that facilitate the operation of agents via the Agents API. Each provider's implementation, such as Modal and Vercel, allows seamless connection and reconnection of sandboxes through webhook handlers upon receiving OpenAI webhooks. The setup process involves deploying a specific handler, configuring credentials, and creating an agent using the provided client script. Users can manage sessions, input commands, and handle state changes related to session failures or actions required during operation. It emphasizes the importance of preventing multiple handlers from provisioning the same session and provides guidance on lifecycle management and cleanup processes. Key points include the need for API key alignment across services and the potential impact of worker timeouts on long-running tasks.