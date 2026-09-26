---
title: Empowering Efficiency with OpenAI's Agents API Unveiled
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-26"
---
**Meta-Summary of Agents API Blog Announcements and Trends**

The recent series of blog posts showcase significant advancements in the OpenAI Agents API ecosystem, focusing on new application use cases, enhanced sandbox environments, and expanded provider support:

1. **Expanded Application Use Cases:**  
   A diverse array of fully implemented agents—including SRE bots for alert response, Slack bots with tool integrations, AI-powered data analysts, automated GitHub issue investigators, and document reviewers—demonstrate the flexibility of the Agents API for both collaborative and automation tasks. New bulk document review workflows leverage specialist subagents and customizable policies, notably streamlining invoice and contract processing.

2. **Comprehensive Sandbox Integration:**  
   Across all posts, a standardized model emerges for integrating sandboxes: every provider supports both Application-managed and Webhook-managed modes. The Application-managed mode gives applications direct control over sandbox lifecycle, while Webhook-managed mode delegates provisioning and session management to signed controllers, enhancing flexibility and scalability.

3. **Broad Provider Ecosystem:**  
   The API now features official sandbox integrations from a growing list of providers—including Blaxel, Cloudflare, Daytona, DigitalOcean, E2B, Modal, OCI GenAI (Oracle), Runloop, and Vercel. Each provider offers detailed implementation guides, with emphasis on secure key management (restricting executor access and protecting application credentials) and provider-specific resource management.

4. **Security, Credential Management, and Best Practices:**  
   Security is foregrounded: all sandboxes operate with restricted executor keys, while sensitive application or session keys remain secure outside the sandbox. Providers and examples recommend robust authentication practices, clear session and resource cleanup procedures, and guidance for environment setup (e.g., Docker, Node.js, Python 3.14+, API keys).

5. **Developer Guidance and Customization:**  
   All offerings are accompanied by step-by-step guides—spanning setup, deployment, sandbox management, webhook configuration, and cleanup—lowering the barrier to experimentation and productionization. Many examples include modular templates (e.g., codex-agentapi, sandbox.py) and encourage reuse and customization (e.g., policy tailoring for document review).

**Summary:**  
OpenAI’s Agents API ecosystem has rapidly matured, with versatile agent-driven applications and robust cross-cloud sandboxing options now readily available. The dual provisioning model (Application- vs. Webhook-managed), expanded provider marketplace, strong security standards, and comprehensive developer instructions collectively empower teams to build, customize, and scale agent-based workflows safely and efficiently across diverse infrastructure.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/README.md)
**Source:** openai/openai-cookbook

The blog post presents a series of applications and sandbox integrations for the Agents API, showcasing complete implementations for various use cases. Key applications include:

- **SRE bot**: Investigates alerts and requests recovery actions.
- **Slack bot**: Responds to requests using conversation history and workplace tools.
- **Data analyst**: Conducts read-only queries to answer questions.
- **GitHub issue investigator**: Reproduces bugs and prepares findings.
- **Document reviewer**: Reviews invoices and contracts.

Additionally, it details two sandbox integration methods: application-managed and webhook-managed. The post provides guidance on running examples, requiring Python 3.14 and the OpenAI Python SDK. It emphasizes setting up credentials and following security measures for authentication. Links to comprehensive documentation are also provided for further reference on the Agents API and sandbox environments.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/apps/document_review/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new feature for bulk invoice and contract review using the Agents API with a `gpt-5.6-luna` agent. This system enables the coordination of specialist subagents to review documents against a reusable accounts-payable policy. Key highlights include the setup of a workspace for document review, including necessary tools such as Python and Docker, and a streamlined process where each document is processed individually by subagents, culminating in individual and consolidated reports.

The implementation details provide guidance on creating a multi-agent review session, validating reports, and managing command activity. The feature promotes efficiency by ensuring that the application retains control over approvals, while allowing for customization of review policies to suit specific organizational needs. Overall, this facilitates a structured and reliable approach to document review within organizations.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/apps/github_issues/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new system for automating GitHub issue investigations using the Agents API. It outlines a process where an issue webhook triggers an automated agent to check out the repository, reproduce the problem in a sandbox, and post the findings back to GitHub. Key features include the use of a temporary sandbox environment, which allows for isolated testing. 

To implement this, developers need Python 3.14+, a sandbox environment, and various API keys (OpenAI, GitHub). The agent is programmed to conduct investigations while respecting the integrity of the codebase—no modifications are made to the source files during investigation. Finally, the findings from the investigation are posted as comments on the GitHub issue. The application also incorporates mechanisms for proper session management and cleanup post-investigation.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/apps/slack_bot/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the process of building a Slack bot using the Agents API, emphasizing its functionality for managing conversations and accessing tools within a collaborative environment. Key features include the ability to create individual sessions for each Slack thread, manage sandboxed environments, and utilize an array of connected tools like Notion, Google Drive, and GitHub.

To get started, developers need Python, a sandbox environment (self-hosted Docker or third-party), and relevant API keys. The bot's workflow allows it to respond to Slack commands, manage ongoing sessions, and stream investigation results directly into chat threads.

The implementation guides readers through setting up the environment, creating a Slack app, tagging the bot in conversations, and utilizing specific tools for searching Slack messages and handling project-related queries. The blog also covers resource management and tool integrations essential for a fully functional bot.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/README.md)
**Source:** openai/openai-cookbook

The blog post discusses self-hosted sandbox examples for applications using OpenAI's cloud infrastructure. Two primary modes for starting sandbox compute are presented: Application-managed, where the application directly controls compute without a webhook, and Webhook-managed, where a deployed handler manages compute based on webhooks from OpenAI. Users must select one mode per session, noting that deleting an API session does not terminate provider compute.

A list of available providers is included, showcasing the capabilities of each in both provisioning modes. Providers such as Blaxel, Cloudflare, Daytona, DigitalOcean, and others are highlighted, with links to specific running and deploying instructions for each mode. Each provider's folder contains examples and shared sandbox setups tailored for their respective configurations.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/blaxel/README.md)
**Source:** openai/openai-cookbook

The blog post announces the introduction of Blaxel sandboxes for running Agents API tasks via `codex exec-server`. It outlines two management modes: Application-managed and Webhook-managed. In Application-managed mode, users can create a sandbox, execute tasks, retrieve output, and clean up afterward. In Webhook-managed mode, a controller is deployed to provision workers as needed when a session requires an environment connection. Both modes utilize sandbox.py for the installation and launching of executors, ensuring that workers only access a restricted executor key while application credentials remain secure within the application or webhook controller.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/cloudflare/README.md)
**Source:** openai/openai-cookbook

Cloudflare has introduced new sandboxing capabilities for executing Python applications with two distinct management modes: Application-managed and Webhook-managed. 

In Application-managed mode, a Python application can autonomously initiate and terminate a sandbox through authenticated Worker routes. In contrast, the Webhook-managed mode utilizes a signed OpenAI webhook to activate a Durable Object controller that manages sandbox provisioning and reconnections. 

Both modes share components like the `Dockerfile`, npm dependencies, and `executor.ts`, but require separate Worker entrypoints and configurations due to differing authentication and lifecycle management processes. 

To utilize these features, developers need a Cloudflare account with Workers Paid and Containers enabled, along with the Node.js and Docker environment set up. Proper configuration, deployment, and cleanup guidelines can be found in the respective README files.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/cloudflare/webhook_managed/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Cloudflare webhook-managed sandbox, detailing its functionality and deployment process. Key features include signature verification by the Worker, session management through Durable Objects, and alarm-triggered execution to streamline operations. The setup involves creating an agent using specific scripts, configuring a Worker name and unique identifiers, and utilizing command-line instructions to deploy and manage secrets.

Developers are guided to register a webhook with OpenAI, use a control token for session cleanup, and ensure correct session handling during redeployment. The post emphasizes the importance of cleanup procedures to manage session states and the need to remove the OpenAI webhook before deleting the Worker. The article concludes by inviting readers to explore application-managed modes for direct provisioning.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/daytona/README.md)
**Source:** openai/openai-cookbook

The blog post announces new functionality for running Agents API tasks within Daytona sandboxes, highlighting two operational modes: application-managed and webhook-managed. In the application-managed mode, users can create a sandbox, execute a task, access its output, and subsequently clean up the session. The webhook-managed mode involves deploying a controller that manages worker provisioning and restarts when necessary. Both modes utilize `sandbox.py` for the installation and execution of the executor. Importantly, only a restricted executor key is accessible to workers, ensuring that application credentials remain secure within the application or webhook controller.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/digitalocean/README.md)
**Source:** openai/openai-cookbook

DigitalOcean has announced the public preview of its Managed Agents feature, which enhances the sandboxing experience for developers. The feature includes two primary modes: Application-managed and Webhook-managed. The Application-managed mode allows users to create a sandbox, execute a task, download the output, and clean up the sandbox along with the Agents API session. The Webhook-managed mode enables users to operate a signed webhook controller for provisioning sandboxes and managing reconnections. Both modes utilize a shared `environment.yaml` file. The integration of the `codex-agentapi` template is highlighted, ensuring that only the restricted executor key is utilized within the sandbox environment. Additionally, the webhook controller can operate independently, either locally or on the App Platform.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/docker/README.md)
**Source:** openai/openai-cookbook

The blog post discusses a Docker sandbox that provides an example for users to build a local executor image. It outlines the necessary steps to run a task within a Docker container and emphasizes the importance of cleaning up the container and API session afterward. Users are informed that the example requires Docker installation and clarifies that it does not include a webhook controller.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/e2b/README.md)
**Source:** openai/openai-cookbook

The blog post announces the introduction of E2B sandboxes for running Agents API tasks using `codex exec-server`. There are two modes available: Application-managed sandboxes, where users can create a sandbox, execute a task, and manage outputs; and Webhook-managed sandboxes, which allow for deploying a controller that provisions and resumes workers as needed. Both modes utilize `sandbox.py` for the installation and launch of executors, ensuring that workers only have access to a restricted executor key while keeping application credentials secure within the application or webhook controller.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/modal/README.md)
**Source:** openai/openai-cookbook

The blog post introduces two modes for managing modal sandboxes: Application-managed and Webhook-managed. 

1. **Application-managed**: Users can run a report task using a sample file, after which the application automatically terminates the sandbox and deletes the Agents API session.

2. **Webhook-managed**: This mode requires users to deploy a signed webhook receiver, allowing for the reconnection of sessions through named Modal sandboxes.

Both modes utilize a base image and executor command defined in `modal_executor.py`, with the application adding its report tools and sample file. The webhook controller packages shared Python source for deployment, ensuring that only the restricted executor key accesses the sandbox.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/oci/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the OCI GenAI Sandbox project, showcasing an application-managed example that utilizes Oracle's beta Python SDK. It highlights that this example does not incorporate a webhook controller, offering a streamlined approach for users to run applications within the sandbox environment. This initiative aims to facilitate experimentation and development with Oracle's generative AI capabilities.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/runloop/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the introduction of Runloop sandboxes for executing API tasks in Runloop development boxes. It highlights two provisioning models: 

1. **Application-managed** - where the application is responsible for creating a development box, executing a task, and cleaning up afterward.
2. **Webhook-managed** - in which a signed webhook controller manages the creation or resumption of a worker development box for each session.

Both methods utilize *sandbox.py* to install and launch `codex exec-server`. In the application-managed model, tasks are executed in `/home/user/workspace`, and a restricted executor key is provided as an environment variable. Conversely, in the webhook-managed model, tasks operate in `/workspace`, leveraging a Runloop secret reference while keeping the main API key secured behind a Runloop gateway.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/6dc6324fb9ed780b32b787f23fad336e9f1eff15/examples/agents_api/sandboxes/vercel/README.md)
**Source:** openai/openai-cookbook

The blog post introduces Vercel sandboxes, detailing two operation modes: Application-managed and Webhook-managed. In the Application-managed mode, a Python application creates a non-persistent sandbox that reads output and cleans up resources afterward. The Webhook-managed mode utilizes TypeScript functions to verify webhooks and provision named sandboxes through Vercel Queues. Each mode operates with distinct provider SDKs, maintaining separate implementations. Both modes execute with a limited OpenAI API key while keeping the application/session-read key secured outside the sandbox. It is essential for the two OpenAI keys to share the same owner, organization, and project. Users are advised to utilize a dedicated Vercel project with Sandbox access and to test in a separate project to avoid interfering with existing applications, while README files provide guidance on credentials, execution limits, and cleanup procedures.