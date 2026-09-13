---
title: Building Secure AI Agents with OpenAI and Amazon Bedrock
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-13"
---
**Meta-Summary:**

Across the blog posts, significant advancements and best practices are introduced for integrating OpenAI Agents SDK with Amazon Bedrock AgentCore to build secure, private assistants (such as a flight assistant for Eliza Airlines) and ChatGPT plugins. A strong focus is placed on enabling developers to interact with deployed AgentCore Runtimes using read-only tools, rigorous security and privacy controls, and efficient resource utilization—often without needing to manage or provision additional AWS infrastructure. Observability is emphasized through detailed tracing and evaluation frameworks, including optional dual-tracing and the use of OpenTelemetry for reconstructing prompt/response flows while maintaining strict data management policies. Critical configuration guidelines are provided for IAM permissions, local setup, and role separation to support secure development and testing workflows. Public release pathways are explicitly differentiated from private testing, ensuring that compliance and security reviews are standard for production distribution. Altogether, these posts establish a robust toolkit and governance model for building, evaluating, and deploying AI-driven agents within private and production-ready environments.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/README.md)
**Source:** openai/openai-cookbook

The blog post outlines a detailed tutorial on building a private flight assistant using the OpenAI Agents SDK and Amazon Bedrock AgentCore. It demonstrates how to connect ChatGPT to workflows that utilize tools for querying flight status (using the fictional Eliza Airlines) while ensuring the tools are validated as read-only, prohibiting flight changes or cancellations. Key features include using a Secure MCP Tunnel for communication, structured input/output with the Model Context Protocol (MCP), and presenting results through an interactive widget. The post highlights the necessary prerequisites like AWS account settings, OpenAI organization membership, and appropriate software installations. It also details the configuration required for running the project, including local and deployment paths, along with observability settings for tracing operations. The tutorial emphasizes maintaining security and privacy standards throughout the development process.

---

### [aws-evaluation.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/docs/aws-evaluation.md)
**Source:** openai/openai-cookbook

The blog post details the optional Amazon Bedrock AgentCore Evaluations aimed at testing deterministic flight cases using a dedicated non-production Amazon Bedrock AgentCore Runtime. The evaluations include several commands for validating configurations and invoking tests, with clear separation from production traffic to ensure data integrity. 

Key features include the ability to reconstruct prompt and response data utilizing OpenTelemetry spans while maintaining strict controls on data access and retention. The evaluation process can operate without a ChatGPT plugin and requires a pre-deployed Runtime emitting session spans to CloudWatch. The post outlines necessary AWS administrator permissions, CLI configuration, and troubleshooting guidelines for running these evaluations while ensuring no live data calls are made inadvertently. 

This structured evaluation allows for rigorous testing of AgentCore functionalities while maintaining compliance with data management policies.

---

### [aws-iam.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/docs/aws-iam.md)
**Source:** openai/openai-cookbook

The blog post details critical configurations and best practices for using the Amazon Bedrock AgentCore, particularly concerning IAM permissions and developer access. Key announcements include the option for developers to gain invoke-only access to an existing AgentCore Runtime without needing to manage the underlying AWS infrastructure. It emphasizes that the permissions outlined should be treated as implementation guidance rather than production-ready policies. 

The post also highlights the necessary local tools required for setup, such as Python and Node.js, and provides detailed IAM policy configurations for telemetry publishing, preflight observability checks, and optional evaluations. Administrators are advised to establish distinct roles for various tasks, ensuring security and adherence to resource access principles. Finally, the post notes the absence of Runtime provisioning stacks in the repository, indicating that deployment should be handled by the Runtime-owning team.

---

### [existing-agentcore-runtime.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/docs/existing-agentcore-runtime.md)
**Source:** openai/openai-cookbook

The blog post discusses a non-CDK consumer path for utilizing an existing Amazon Bedrock AgentCore Runtime without requiring additional deployments or infrastructure setup. This option allows teams to invoke a deployed AgentCore Runtime using a specified ARN without needing S3 access, permission for infrastructure creation, or CDK bootstrap.

Key features include the ability to set tracing configurations and manage Region selections effectively. The post outlines required and optional configuration settings for the MCP host environment, emphasizing careful permission management and the need for explicit credentials.

Additionally, the document explains how to build and start the application locally, validate the connection to the Runtime, and perform cleanup after execution. The overall focus is on enabling teams to leverage existing resources efficiently while maintaining strict observability and security measures.

---

### [openai-agentkit-cookbook.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/docs/openai-agentkit-cookbook.md)
**Source:** openai/openai-cookbook

The blog post provides a detailed guide for building a ChatGPT plugin using the OpenAI Agents SDK in combination with Amazon Bedrock AgentCore. Key features include the implementation of a Python agent that operates through a secure MCP Tunnel, allowing interaction with Amazon Bedrock models and observability via AgentCore. The architecture supports two modes: a default local mode and an optional deployed mode for existing AgentCore Runtimes.

The setup involves defining workflows, local invocation processes, and a set of read-only tools (like flight searching and status checking) that communicate through a private MCP adapter. Evaluation and tracing processes are outlined, demonstrating how to validate outputs against predetermined expectations. The post emphasizes maintaining security and control over the deployment environment while enabling testing through private infrastructure.

---

### [tracing-and-publication.md](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/docs/tracing-and-publication.md)
**Source:** openai/openai-cookbook

The blog post outlines critical guidelines for tracing, verification, and publication boundaries in the implementation of an observability framework. Key features include the default tracing mode using AWS without needing the `OPENAI_TRACE_API_KEY`, while opting for a dual mode necessitates additional configurations. The preflight check is essential for ensuring credentials and permissions are in place before any execution; it verifies AWS account capabilities without modifying configurations. The tracing verification process involves executing specific commands to confirm the integrity of trace data against AWS logs. Furthermore, it distinguishes private testing from public distribution, emphasizing that a public release requires proper service endpoints and owner responsibilities, including security and compliance reviews before being eligible for public access. For comprehensive observability, users are directed to consult further guides provided in the documentation.

---

### [chatgpt_agents_sdk_aws_agentcore_cookbook.ipynb](https://github.com/openai/openai-cookbook/blob/9aad95f0aa4f8e12991ef9b9201df28747860bfc/examples/partners/AWS/chatgpt_agents_sdk_aws_agentcore_cookbook/notebooks/chatgpt_agents_sdk_aws_agentcore_cookbook.ipynb)
**Source:** openai/openai-cookbook

In the blog post, a detailed guide on building a private flight assistant using the OpenAI Agents SDK and Amazon Bedrock is presented. The example focuses on a fictional airline, Eliza Airlines, showcasing how to integrate ChatGPT with a workflow utilizing read-only tools. Key features include exposing these tools to ChatGPT, running an Agents SDK workflow with Bedrock models, and validating responses through a structured framework.

The process involves setting up a local agent capable of interacting with ChatGPT, utilizing the Model Context Protocol (MCP) for communication. Optional enhancements allow hosting on an existing Amazon Bedrock AgentCore Runtime or engaging in dual-tracing modes for improved observability. The post emphasizes prerequisites like Python and command-line proficiency while detailing the evaluation and tracing of responses via tools such as Promptfoo.