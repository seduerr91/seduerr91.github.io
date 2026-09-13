---
title: AI Agent Innovations - Trends Shaping the Future
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-11"
---
### Meta-Summary: Key Trends and Announcements

**1. Expansion of the Agents API Ecosystem**
Across the posts, there is rapid growth in application scenarios leveraging the Agents API, including advanced document review, automated GitHub issue analysis, incident response, project management assistants in Slack, and specialized business data analytics. These solutions consistently emphasize multi-agent orchestration, session management, customization of operational policies, integration with external platforms (Slack, GitHub, Notion, Google Drive, AWS), and robust audit trails to support enterprise workflows.

**2. Diverse and Modular Sandbox Integration**
A major trend is the comprehensive support for both application-managed and webhook-managed sandbox environments, enabling secure, isolated code execution across various infrastructure providers (Docker, DigitalOcean, Cloudflare, Modal, Vercel, E2B, Daytona, Blaxel, Runloop, OCI). Application-managed sandboxes cater to direct integration needs, while webhook-managed sandboxes standardize remote provisioning and lifecycle management. Detailed runbooks, provisioning guidelines, and reference implementations are provided for each provider, with a strong emphasis on security, resource cleanup, and credential management.

**3. Advanced Evaluation Infrastructure for Voice Agents (GPT Live)**
There is a notable investment in robust evaluation harnesses (CRAWL, WALK, RUN) for the GPT Live full-duplex voice assistant. These frameworks systematically assess semantic quality, interaction timing, and task completion using configurable synthetic and recorded audio. The evaluation ecosystem stresses data integrity, role separation, and advanced metrics (including semantic scoring and precise response deadlines). Infrastructure improvements include shared components for consistent evaluation, detailed configuration, and reproducibility.

**4. Flexible Backend Delegation and Client Integration**
GPT Live and agent-powered applications now support flexible backend architectures, with both OpenAI-managed and application-managed delegation. This enables seamless integration into customer environments, supporting custom prompts, backend memory, secure transcript handling, tool execution control, and thorough logging and evaluation. The systems are designed to be provider-neutral, supporting custom model implementations and secure connections.

**5. Emphasis on Security, Credential Hygiene, and Auditing**
All solutions reinforce stringent credential management, secure sandboxing (with audit logs and explicit approval protocols), and artifact safety. The guidance consistently covers API key segregation, environment-specific configuration, lifecycle event management, and best practices for persistent and ephemeral resource handling.

**6. Documentation, Customization, and Developer Enablement**
Comprehensive documentation, cookbook examples, and modular code references are provided to support adoption, customization, and integration. Developers are encouraged to adapt baseline policies, connect the solutions to their own tools and infrastructure, and leverage isolated evaluation to benchmark and enhance agent behavior according to enterprise needs.

---

**In summary:** The blog series highlights a cohesive push toward secure, modular, and customizable AI agent solutions—spanning workflow automation, code and document review, real-time collaboration, and natural language evaluation—underpinned by robust sandbox management, advanced evaluation tools, and secure lifecycle practices tailored for modern enterprise applications.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/ec3512cdd21a824052982400a34bcbc542d4989d/examples/agents_api/apps/document_review/README.md)
**Source:** openai/openai-cookbook

The blog post outlines a new feature for bulk invoice and contract review using an advanced agent powered by `gpt-5.6-luna`. This agent organizes documents into a multi-agent session, delegating tasks to specialist subagents who apply a reusable expense-review policy, generate individual reports, and create a consolidated summary for human approval. 

Key requirements include Python 3.14+, a sandbox setup via Docker or a third-party provider, and OpenAI API keys. The review process involves submitting a folder of documents, where specialists analyze and generate reports on issues like contract terms and billing discrepancies. Users can customize the included policies and maintain responsibility for final approval decisions. Additionally, the application logs session activities and retains command histories for audit purposes. 

For deploying the application, users can modify and incorporate their specific review policies.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/ec3512cdd21a824052982400a34bcbc542d4989d/examples/agents_api/apps/github_issues/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new GitHub integration that automates the investigation of newly opened issues. When a user opens an issue, an agent checks out the repository, reproduces the problem in a sandbox environment, and posts an investigation back to GitHub. To set this up, users need Python 3.14+, a self-hosted Docker or third-party sandbox, an OpenAI API key, and a GitHub token. The blog outlines the setup process, including configuring environment variables, investigating sample issues, and connecting to real repositories. The agent identifies the root cause of issues and suggests fixes without modifying the codebase, only posting comments. It also includes deployment recommendations for verifying signatures, managing delivery IDs, and ensuring robust error handling.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/ec3512cdd21a824052982400a34bcbc542d4989d/examples/agents_api/apps/sev_bot/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new SRE agent designed for incident response, which automates the investigation of production incidents. When an alert is triggered, a Slack thread is initiated in the `#oncall` channel, and the agent analyzes telemetry data, GitHub activity, and AWS infrastructure before presenting findings and seeking rollback approval. 

Key features include the integration of a self-hosted sandbox environment for running AWS skills and a need for specific tools like Python and Slack configurations. The agent can connect to monitoring systems such as PagerDuty and GitHub, and it retains incident memory for future reference. Its functionalities enable automatic evidence gathering, maintain session-specific information, and facilitate human intervention during the rollback decision-making process. 

The setup requires proper credential management and configuration to effectively process alerts and track incident history.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/ec3512cdd21a824052982400a34bcbc542d4989d/examples/agents_api/apps/slack_bot/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the development of an AI assistant integrated into Slack, enabling users to streamline project management, data analysis, and collaboration tasks through the "Agents API." Users can tag the bot to initiate sessions that handle conversations and workflows specific to Slack threads.

Key features include:
- A personalized AI session for each Slack thread.
- Ability to analyze data and prepare GitHub pull requests.
- Integration with external tools such as Notion, Google Drive, and GitHub.
- Requirements for setup include Python, Docker, an OpenAI API key, and Slack app credentials.

The process involves creating a Docker sandbox, configuring a Slack app, and utilizing the bot’s capabilities to summarize threads and interact with shared resources. The application provides tools for real-time updates within ongoing conversations, enhancing team productivity.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/82cb1f5e0ebe243489b15de6471ce9e55cb8367d/examples/agents_api/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the Agents API, featuring various application examples and sandbox integration options. Key applications include an incident response tool for alert investigation, a Slack bot for conversational queries, a data analyst to perform warehouse queries, a GitHub issue investigator for bug reproduction, and a document reviewer for invoice and contract assessments. Two types of sandbox integrations are introduced: application-managed and webhook-managed, each providing different provisioning modes. The post also outlines prerequisites for running these examples, such as using Python 3.14 and OpenAI's SDK. Additionally, it emphasizes the importance of securely managing credentials and provides links to relevant documentation for further reference.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/apps/data_analyst/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new Data Agent tool designed for business data analysis. The agent allows users to inquire about their data, discover relevant warehouse tables, check metric definitions, and run read-only SQL queries, while also remembering useful corrections for future analyses. Key features include:

- **Four core functions**: `search_tables`, `search_context`, `query_warehouse`, and `save_memory`, enabling efficient metadata retrieval and data querying.
- **No execution sandbox required**: The agent operates within an API session controlled by the application, ensuring a streamlined setup.
- **Installation prerequisites**: Requires Python 3.14+, an OpenAI API key, and read-only access to a PostgreSQL-compatible warehouse.
- **User interface**: A straightforward web interface allows users to ask complex questions about business data easily.

The tool is particularly suited for fostering data-driven decision-making while maintaining data integrity.

---

### [SKILL.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/apps/document_review/skills/expense-review-policy/SKILL.md)
**Source:** openai/openai-cookbook

The blog post outlines the expense review policy designated as Policy ID `AP-104`, which mandates thorough evaluations of invoices, expense receipts, and service contracts against accounts-payable guidelines before human approval. Key features include verifying invoice accuracy through automated mathematical checks, flagging discrepancies such as missing receipts or unsupported charges, and ensuring prior documented approvals are in place. For contracts, the policy emphasizes reviewing clauses for risks, automatic renewals, and missing terms related to liability and confidentiality. The review process culminates in three classifications for each document: `needs_info`, `escalated`, and `ready_for_approval`, providing clear directions for further action. The policy stresses that no payments or contracts should be finalized without explicit human review.

---

### [checkout-api.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/apps/sev_bot/runbooks/checkout-api.md)
**Source:** openai/openai-cookbook

The blog post outlines a runbook for addressing an incident related to Redis connection-pool exhaustion in the `checkout-api`. It emphasizes the mitigation strategy of rolling back to the last healthy deployment, contingent upon approval from the incident commander. The post illustrates that while the example captures the approval process, it does not carry out the rollback. Additionally, it highlights the importance of verification post-rollback, requiring responders to ensure the error rate decreases below 1% and the 95th percentile latency is under 400 ms, using updated evidence to confirm recovery.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/README.md)
**Source:** openai/openai-cookbook

The blog post introduces two modes for self-hosted sandbox examples: Application-managed and Webhook-managed. In the Application-managed mode, users can run a provider-specific main script that directly manages compute provisioning without using webhooks. In contrast, the Webhook-managed mode utilizes a shared client script, relying on a deployed handler to manage compute based on OpenAI's webhooks. Users must select one provisioning mode per session, and it is noted that deleting an API session does not terminate the associated compute. The post also outlines various examples and providers for both modes, emphasizing the importance of referring to the respective README files for setup and execution instructions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/README.md)
**Source:** openai/openai-cookbook

The blog post introduces application-managed sandboxes, allowing users to call both the Agents API and a designated sandbox provider without deploying a webhook handler. Each example provided in the post outlines a straightforward process of creating an API session, starting the sandbox, submitting input, streaming results, and cleaning up afterward. 

Various providers are listed, such as Blaxel, Cloudflare, Daytona, DigitalOcean, and others, each with specific setup instructions through individual `main.py` scripts available in their respective directories. These examples enable users to execute code either locally or in their cloud environment. For applications that strictly utilize the Agents API, the post suggests using webhook-managed sandboxes instead.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/blaxel/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Application-managed Blaxel sandbox, which enables users to create an Agents API session and a Blaxel sandbox to execute tasks such as transforming `brief.txt` into `plan.md`. Key setup requirements include configuring environment variables like `BL_API_KEY`, `BL_WORKSPACE`, and two OpenAI API keys. The script from the Cookbook repository must be run using a specified command, allowing six minutes for setup and execution, with a ten-minute time-to-live for the sandbox. If any issues arise during setup, users are advised to check the Blaxel service for session details before retrying. For additional guidance, links to the Blaxel sandbox documentation and the Python SDK are provided.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/cloudflare/README.md)
**Source:** openai/openai-cookbook

The blog post introduces an application-managed Cloudflare sandbox utilizing a Python application that interacts with a Cloudflare Worker. The Worker initiates a sandbox session using `codex exec-server` and subsequently returns a generated `plan.md`. Key features include the ability to start, read files, and destroy the sandbox, all managed through the Workers SDK without relying on webhooks. 

Deployment requires Cloudflare Workers with Containers enabled, Node.js, and Docker. The post provides a step-by-step guide for deploying the Worker and running the application, including setting necessary environment variables like the OpenAI API key and sandbox control token. It emphasizes maintaining resource management and cleanup operations, including a ten-minute idle timeout and proper session termination. Additionally, resources for further reference and background processes are linked.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/daytona/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the application-managed Daytona sandbox, outlining its setup and execution process. The application uses an Agents API session to create the sandbox and executes a task to convert `brief.txt` into `plan.md`. Users must set specific API keys, ensuring they belong to the same organization. The script allows six minutes for setup and execution with a ten-minute Time-To-Live (TTL) for the sandbox. It includes cleanup operations in case of failure. Users are advised to check Daytona for the session ID if creation times out before retrying, and to retain resources for follow-up tasks without attaching a provisioning webhook handler. Additional resources are linked, including Daytona documentation and a Python SDK.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/digitalocean/README.md)
**Source:** openai/openai-cookbook

The blog post introduces an application-managed DigitalOcean sandbox that utilizes the `codex-agentapi` template to create an Agents API session. The template initiates the `codex exec-server`, managed by OpenAI, to download the `plan.md` file, after which the sandbox is destroyed and the session is deleted. Key prerequisites include access to DigitalOcean’s Agent Harness Runtime preview and appropriate API keys. The article provides implementation steps using the PyDo beta SDK and outlines the importance of managing the environment ID and executor key without logging sensitive information. The setup allows for ten minutes of execution before initiating cleanup, with troubleshooting advice provided for timeout scenarios. For further exploration, it references additional resources for DigitalOcean sandbox setup and Python SDK usage.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/docker/README.md)
**Source:** openai/openai-cookbook

The blog post introduces an application-managed Docker sandbox designed for local image builds and execution of an agent using `sample_report.txt`. It emphasizes the need to start Docker and set both `OPENAI_API_KEY` and `OPENAI_EXECUTOR_API_KEY` with matching owner, organization, and project attributes. Users can initiate the process through a specific command from the Cookbook repository. The provided Dockerfile facilitates the installation of Codex and the setup of the local working environment. It's noted that this setup is intended for development purposes and is not suitable for a hardened multi-tenant application. For cloud compute management via OpenAI webhooks, users are directed to explore the webhook-managed examples.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/e2b/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of an application-managed E2B sandbox, detailing how to create an Agents API session to convert a text file (`brief.txt`) into a markdown file (`plan.md`). It provides instructions for setting the necessary API keys and executing a Python script from the Cookbook repository. Key features include a six-minute execution window and a ten-minute timeout for the sandbox environment, with provisions for cleanup on failure. Users are advised to check the E2B metadata for session ID validations after timeouts, and to retain both resources for follow-up sessions without attaching a provisioning webhook handler. References to E2B documentation and SDK are also included for further guidance.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/modal/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Application-managed Modal sandbox, which allows developers to remotely build an image and start a Modal sandbox for executing tasks. It details the process of connecting the executor, running an agent on a sample report, and cleaning up resources afterward. Key requirements include setting the `OPENAI_API_KEY` and `OPENAI_EXECUTOR_API_KEY` with appropriate permissions. The sandbox has a 15-minute maximum lifetime and operates without an inbound port for connections. Additionally, it mentions an alternative deployment method for a Modal-hosted handler using OpenAI webhooks through the webhook-managed Modal example. For implementation, specific commands are provided for the Cookbook repository.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/oci/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the OCI GenAI Sandbox, which is currently in beta, allowing users to manage their own sandboxes for running Generative AI projects. Key announcements include the need to contact an Oracle account manager for access and the availability of a beta Python SDK. Users must grant permission to their OCI group to manage projects and sandboxes. The post outlines the configuration requirements, including setting up authentication with the OCI CLI and environment variables for API keys and project details. It provides a detailed guide on running a sample application, including command-line instructions and necessary runtime configurations. The script manages the creation and cleanup of sandbox resources and emphasizes keeping the session alive for multiple interactions. References to additional documentation for further assistance are also included.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/runloop/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of an application-managed Runloop sandbox using the Agents API. The process begins with the application initiating a session and a Runloop devbox, executing a command to convert `brief.txt` into `plan.md`, then shutting down the devbox and deleting the session. Key environment variables such as `RUNLOOP_API_KEY` and `OPENAI_API_KEY` must be set, with specific authentication requirements for the executor key. The provided script runs within a framework that ensures setup and execution occur within five minutes, with a ten-minute fallback for devbox lifecycle management. The example emphasizes that provisioning webhooks should not be attached to the sessions, highlighting the need to maintain session and devbox continuity until application completion. Additionally, references to Runloop documentation and the Python SDK are included for further exploration.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/application_managed/vercel/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of an application-managed Vercel sandbox for creating and executing an Agents API session. The process involves starting a `codex exec-server`, converting `brief.txt` into `plan.md`, and subsequently cleaning up by destroying the sandbox and session. Users need to set several environment variables, including `VERCEL_TOKEN` and `OPENAI_API_KEY`, ensuring they are aligned with the same project and organization. The execution script allows six minutes for setup and execution within a temporary sandbox, which has a ten-minute limit. It includes instructions on retrying in case of timeout and emphasizes avoiding the provisioning webhook handler during operations. For more details, links to Vercel Sandbox documentation and SDK references are provided.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the concept of "Webhook-managed sandboxes," allowing for the integration of a sandbox environment through the Agents API using a webhook handler. Key components include a shared client application (`client.py`) that interfaces with various providers without requiring specific SDKs. A list of supported providers is provided, each with a deployment handler and setup instructions.

Users must install dependencies, configure their OpenAI API key and agent ID, and follow the relevant provider’s README to deploy the handler and register webhooks. The post details the lifecycle of sessions, including handling reconnections and session cleanup, and emphasizes managing API keys and credentials securely. Note that each handler only manages sessions for a unique `OPENAI_AGENT_ID`. For developers, it highlights the need for persistent controller hosting and monitoring of provisioning failures to ensure smooth operation.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/blaxel/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Blaxel webhook-managed sandbox, featuring a FastAPI endpoint that verifies signatures and saves work to SQLite. The system preserves background worker sessions even after controller restarts. To deploy, users must create an agent following specific environment variables, including Blaxel account credentials and OpenAI API keys. The deployment command generates a controller and a public webhook URL, which must be registered with OpenAI and configured with a signing secret.

Key features include: limited credential exposure to the controller, a maximum of five provisioning attempts for failures, a two-hour expiration for the controller, and guidelines for cleanup and session management through the Blaxel dashboard. Users are advised to maintain persistent hosting for long-running services and must follow specific procedures for stopping and cleaning up sessions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/cloudflare/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of a webhook-managed sandbox using Cloudflare Workers. Key features include session management through Durable Objects, which handle execution triggers, retries, and OS locks to prevent duplicate executors. 

To deploy, users need a Cloudflare account with Workers and access to Node.js and Docker. The setup process involves creating an agent, configuring secrets, and deploying the project using specific commands. Users must register their Worker URL with OpenAI and ensure the signing secret is properly set.

For cleanup, an authenticated endpoint should be called following a session, and final cleanup involves removing the API session and OpenAI webhook before deleting the Worker and its corresponding containers.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/daytona/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the introduction of a controller for managing webhooks in a Daytona sandbox that interacts with OpenAI APIs. This setup includes a dedicated environment where the controller receives webhooks, queues tasks in SQLite, and manages separate worker sandboxes for each API session. The post outlines how to deploy the system by creating a relevant agent, configuring API keys, and setting up webhook subscriptions for monitoring actions. It also covers lifecycle management, detailing how the system responds to various states, including creating or stopping worker sandboxes and handling session failures. Additionally, the post addresses cleanup procedures for terminating API sessions, sandbox deletion, and expiring resources. Finally, it emphasizes the importance of persistent hosting and maintaining logs for both the controller and executors.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/digitalocean/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the DigitalOcean webhook-managed sandbox, which provisions a Managed Agents Runtime Service (MARS) for OpenAI sessions. It utilizes Firecracker microVMs to run the Codex CLI without managing containers directly. Key features include the automatic pausing of idle sandboxes and the ability to reuse existing sandboxes upon restart. 

Deployment requires Python 3.11 or later and access to MARS, with explicit installation of the `pydo” pre-release, compatible with the upcoming OpenAI Python SDK. The setup process involves creating a DigitalOcean app, configuring environment variables, and registering a webhook with OpenAI. 

Development outlines configurations for agent selection and credential management. The post also addresses stopping and cleaning up sandboxes, ensuring files persist between uses while noting the need to delete both the API session and the sandbox separately.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/e2b/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the implementation details for a webhook-managed E2B sandbox utilizing OpenAI webhooks to manage API sessions. Key features include a controller that queues work in SQLite and connects to separate worker sandboxes for each session. Deployment requires specific agent and API keys, and a controller ID is stored for future reference. Users must register their webhook in OpenAI project settings and configure a public endpoint for delivery validation. The lifecycle management table details actions taken based on session states, such as creating, resuming, or terminating workers. For clean-up, users are advised to pause sandboxes and handle the API session properly before deletion. Finally, logs are accessible for monitoring the controller and worker activities.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/modal/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Modal webhook-managed sandbox, which utilizes an endpoint to verify OpenAI signatures while queuing tasks for a Modal function. Key announcements include the process for setting up and deploying the sandbox, which involves creating necessary secrets in Modal's dashboard, utilizing a specific command for configuration, and ensuring the correct handling of credentials. Deployment involves registering the endpoint URL with OpenAI and rerunning the deployment command. Additionally, the blog includes guidance on stopping or cleaning up the sandbox by terminating the session either via the Modal dashboard or through Python code. The post emphasizes the importance of managing API session IDs and API keys securely.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6e43b29a962ec8a540f76396f31d4d78818187d6/examples/agents_api/sandboxes/webhook_managed/vercel/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the implementation of a Vercel webhook-managed sandbox, which allows users to deploy a Node.js application that interfaces with OpenAI. Key features include a signature verification endpoint that communicates session IDs to Vercel Queues, and OS locks to prevent job duplication. To deploy, users must create a dedicated Vercel project, set required environment variables, and follow specific commands to establish the webhook and connect with OpenAI. The post emphasizes the need to register the webhook and manage deployments carefully, including stopping or cleaning up sandboxes through the Vercel dashboard. Additionally, it notes that named sandboxes can retain files between sessions, optimizing performance by pre-installing executors. Overall, the integration facilitates streamlined interaction with OpenAI while managing resources effectively.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/README.md)
**Source:** openai/openai-cookbook

The blog post introduces three independent evaluation harnesses designed for the GPT Live voice assistant: CRAWL for synthetic single-turn requests, WALK for recorded single-turn requests, and RUN for simulated multi-turn conversations. Each harness assesses the assistant's performance in terms of achieving intended outcomes, tool usage, and spoken interaction handling. 

CRAWL evaluates single-turn interactions using generated speech; WALK assesses recorded audio; and RUN simulates continuous conversations with a managed caller. Key features include customizable input data and audio realism settings. The post details how to set up, run each module, and the data requirements for effective evaluation. Additionally, it provides options for managing assistant implementations and metrics tracking. Overall, these tools aim to enhance the robustness and functionality of voice assistant interactions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/assistants/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the functionalities and configurations of a new GPT Live voice frontend that supports two backend-delegation architectures: OpenAI-managed Responses delegation and application-managed client delegation. Each backend operates independently, allowing for tailored prompts and tool implementations without affecting the other. A bundled comparison baseline is established to evaluate the two architectures against controlled parameters, ensuring isolation during tests.

Key features include session management, transcript handling, and tool execution control. The OpenAI-managed Responses delegation enables the assistant to directly handle conversations, while the application-managed client delegation grants applications oversight of call transcripts and tool executions. Furthermore, the post details configurations for remote applications, transport termination, and the protocols for managing event streams and delegation workflows. Overall, it emphasizes maintaining state isolation and security during interactions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/assistants/client/README.md)
**Source:** openai/openai-cookbook

The blog post announces the configuration of GPT Live for application-managed client delegation, utilizing `session.delegation.type: "client"`. This allows the assistant to manage transcript handoffs, backend memory, and tool execution. Essential components for customization are located in a dedicated directory, including prompts, backend scripts, and tool definitions. It emphasizes the importance of aligning baseline fixes with responses and provides a command for evaluating restaurant booking scenarios with the client assistant. 

Users need to set environment variables to connect to existing applications, which manage their own prompts and states, requiring secure TLS connections. The backend is designed to be provider-neutral, allowing for custom model implementations. Overall, it facilitates a robust framework for integrating AI into applications with emphasis on security and memory management.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/assistants/frontend/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the Shared GPT Live frontend, highlighting its key components and functionalities. The `assistant.py` file manages the GPT Live WebSocket, handles voice sessions, incoming events, caller audio streaming, and connection lifecycle, serving both delegation modes. In contrast, `transport.py` oversees protocol validation, session payloads, authentication, and WebSocket connections. Users can modify the assistant's spoken behavior by editing the `prompts/voice.txt` file. Additionally, configurations for the GPT Live model, voice, endpoint, and credentials must be set in the designated `.env` file or shell. The post also references links for environment file selection and security practices regarding artifact and connection safety.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/assistants/responses/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the configuration of GPT Live with a focus on the new delegation feature using `session.delegation.type: "responses"`. This setup allows GPT Live to manage backend conversation continuity and result injection, while application tool calls function within an isolated application state, with evaluators observing tool events and final outcomes.

Key components for customization are located in the specified folder, including scripts for backend behavior and frontend prompts. It also highlights the importance of maintaining alignment with the comparison-baseline contract and documenting any intentional variations.

To implement this configuration, a command is provided for running the evaluation scenario for restaurant booking. Overall, the update emphasizes improved management of responses and direct integration with application tools.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/crawl_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces CRAWL, a new single-turn evaluation harness designed for GPT Live voice agents. CRAWL efficiently converts scenario text into reusable caller audio while capturing evaluations of the agent's spoken responses, tool delegation, and final application state. Key features include the ability to identify regressions, evaluate various aspects of voice agent performance, and provide thorough functional coverage without the need for recorded audio.

CRAWL evaluates correct responses, tool selection, context handling, and response timings, although it does not cover multi-turn interactions. The harness allows users to set up tests easily in a structured manner, producing detailed output artifacts for analysis. It offers flexibility through command-line options and configuration settings, facilitating the assessment of various voice agent setups and helping improve their operational quality.

---

### [metrics-contract.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/docs/metrics-contract.md)
**Source:** openai/openai-cookbook

The blog post introduces significant updates in the Interaction Metric Contract, now at version 2.0, which specifies stringent rules for interaction and response evaluation. Key features include the implementation of a new semantic scoring system, termed `voice-semantic-v2`, that utilizes a refined five-point scale to assess response quality. Each response must adhere to clear severity anchors defining satisfaction levels from fully satisfied to wholly incorrect.

The response rate is explicitly measured based on a 5,000 ms deadline for the first audio after an eligible caller turn, without evaluating the substance or correctness of the response. Additional features detail the handling of acoustic intervals, transport timing, and the validity of response assessment, ensuring that distinct rules govern each aspect of interaction evaluation. This version mandates careful tracking and categorization of audio events, enhancing granularity and accuracy in performance reporting.

---

### [recording-source.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/recorded-example/recording-source.md)
**Source:** openai/openai-cookbook

The blog post details a recorded example of a conversation captured on September 9, 2026, using client-managed delegation and a voice model named Cedar. The audio clip, which lasts 42.34 seconds, features a caller and an AI assistant with reported metrics: semantic quality at 90%, tool accuracy at 50%, and a response rate of 75%. The recording predates recent updates, and its dialogue has not been modified or re-evaluated. Additionally, the post provides links to play the audio, view the transcript, and inspect results in various formats. Users are encouraged to replicate the scenario using the provided command sequence within a specified directory, emphasizing the need for proper configurations and dependencies. The results will vary with each new run due to potential differences in dialogue and scoring.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/run_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces "RUN," a system for evaluating GPT Live voice agents through simulated full-duplex conversations. It allows for the assessment of various conversational behaviors, including task completion, detail gathering, and memory retention. RUN operates by simulating a caller with a private agenda that interacts with the voice assistant, assessing factors such as response timing, interruptions, and tool usage.

Key features include the ability to visualize conversation evaluations, detailed output files such as audio, transcripts, and result summaries, and options for managing the evaluation process, including scenario selection and audio realism conditions. Additionally, it supports both caller-first and assistant-first interaction modes, ensuring flexibility in testing methodologies.

The RUN tool is designed for extensibility, allowing customers to customize their scenarios and assistant implementations, fostering effective evaluations of voice agents in real-world conditions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/shared/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the introduction of a shared evaluation infrastructure, labeled `shared/`, which provides a comprehensive framework for configuration, transport, audio handling, grading, and metrics applicable to the CRAWL, WALK, and RUN phases of evaluation. The architecture allows for a structured evaluation session with independent tool execution and application state management. Major components include files for configuration, audio processing, grading, and metrics reporting, ensuring task accuracy and semantic quality assessments. Key features highlight the separation of roles among callers, evaluators, and applications, enforcing strict boundaries for data integrity during evaluations. The infrastructure incorporates robust mechanisms for artifact safety, configuration management, and the production of standardized metrics to facilitate consistent and transparent evaluation processes across different simulation scenarios.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/duplex_voice_agent_evaluation/walk_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces WALK, a new evaluation harness for assessing GPT Live voice agents using recorded caller interactions. Unlike CRAWL, WALK focuses on evaluating how agents respond to real-world caller audio, including variations in accents, pronunciation, and ambient conditions, without substituting or generating caller audio during evaluations. Key features include the ability to analyze response accuracy, tool effectiveness, and overall handling of recorded requests. 

WALK utilizes a streaming process for audio evaluation and generates detailed outputs, including performance metrics and transcripts, essential for assessing task completion and agent behavior. Users can configure various parameters, run evaluations on individual recordings or datasets, and utilize synthetic audio when human recordings are unavailable. Overall, WALK enhances the robustness of voice agent evaluations by integrating realistic audio conditions.

---

### [voice_agent_evaluation.md](https://github.com/openai/openai-cookbook/blob/a0709e05a54d8dd1c4d9be3fc0a41526c3496c39/examples/audio/voice_agent_evaluation.md)
**Source:** openai/openai-cookbook

The GPT-Live evaluation guide outlines a comprehensive framework for assessing a full-duplex voice agent's performance by examining its conversational capabilities and task execution accuracy. The evaluation process is divided into three progressive modes: **CRAWL**, which uses synthetic audio for controlled single-turn requests; **WALK**, which tests real audio recordings for realism and robustness; and **RUN**, which evaluates continuous multi-turn interactions with a simulated caller. These modes help isolate various complexities affecting performance. Key focus areas include audio interaction quality and task reasoning, each with specific metrics for success, such as task completion rates and semantic quality. The guide also highlights the necessary architecture of GPT-Live, emphasizing the importance of effective backend delegation for task fulfillment. A runnable code reference is available for implementation and adaptation.