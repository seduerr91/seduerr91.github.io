---
title: Empowering Developers with Anthropic's Managed Agents Trends
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 05-19"
---
**Meta-Summary: Anthropic Managed Agents and Self-Hosted Sandboxes – Key Trends and Announcements**

The blog post collection highlights Anthropic’s rapid expansion of **Claude Managed Agents (CMA)** across a growing ecosystem of self-hosted execution environments and integrations, emphasizing enhanced developer flexibility, security, and real-world application support. Several major trends unify these announcements:

**1. Broad Ecosystem of Reference Implementations:**  
Anthropic now offers standardized, documented reference implementations for running CMA Private Sandboxes across diverse compute providers—Docker, Cloudflare (Workers, Durable Objects, Containers), Modal, Daytona, and Vercel. Each adheres to a unified contract involving webhook-triggered session management, work queue draining, and per-session sandbox creation. Multiple language and tooling options (Python, TypeScript/Node.js, FastAPI, CLI-based workflows) accommodate varying developer and deployment needs.

**2. Security & Simplified Authentication:**  
A major development is the shift to a **single environment key** (`ANTHROPIC_ENVIRONMENT_KEY`) for authentication across all SDKs, sandboxes, and worker variants—eliminating reliance on organization API keys and session tokens. This simplifies integration, reduces exposure risk, and standardizes credentials management, aligning with improved SDK library structure and command naming.

**3. Containerization and Serverless Flexibility:**  
Implementations consistently leverage isolation (Docker/OCI containers, Cloudflare Durable Objects/Workers, Modal/Vercel sandbox instances). Each per-session environment supports idempotent, stateless operation with efficient idle policies (typically 60s), workspace persistence options (e.g., Docker volumes, Modal mounted storage, Vercel KV), and extensible operational tooling (filesystem, shell, or browser interaction).

**4. Enhanced Agent Capabilities:**  
New tool support broadens agent utility—including headless Chromium browser control (via Cloudflare Browser Rendering), persistent JavaScript REPLs, and live web-editing capabilities—all delivered through session tools, SSE-based interfaces, or custom API commands.

**5. Streamlined Integration and Deployment:**  
Comprehensive setup guides accompany each integration, including clear environment variable/configuration management, CLI installation steps, and notes on optimizing cold-start times through pre-baked images or mounted volumes. Deployment instructions support a range of environments—from local developer machines to scalable cloud providers—enabling both rapid prototyping and production readiness.

**6. Slack Integration for Seamless Collaboration:**  
Anthropic Agents can now be accessed directly within Slack, with bridges and guides provided for effortless thread-based conversations. Emphasis is placed on event-driven, stateless integration, with troubleshooting resources to ensure robust deployments and avoid common pitfalls.

**Summary:**  
Anthropic’s latest updates unlock greater developer control and security when running Claude Managed Agents in private, self-hosted, or hybrid environments. By offering modular, provider-agnostic sandboxes, unified authentication, new agent toolsets, and real-time collaboration features (e.g., Slack and live web interfaces), Anthropic empowers organizations to deploy advanced AI automation safely and flexibly in a manner tailored to their own infrastructure and operational practices.

## New Cookbook Recipes

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the availability of reference implementations for running Claude Managed Agents sessions through self-hosted execution sandboxes. Each implementation adheres to a standardized contract across different compute providers, which includes receiving a webhook to initiate sessions, draining work queues, and launching individual sandboxes for work items. Notably, the sandboxes authenticate using an environment key rather than an organization API key, enhancing security.

The post outlines several variants for different compute environments, including Docker, Cloudflare Containers, Cloudflare Workers, Modal, Daytona, and Vercel Functions. It emphasizes the use of specific tools and language support for each variant, such as Python and Node.js. Additionally, it provides links to documentation for setting up the environment and guidelines for upgrading between SDK versions.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/cf-worker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the demo of **CMA Private Sandboxes** using a pure Worker variant on Cloudflare. It highlights the integration of a Durable Object functioning as a session tool runner, using TypeScript to manage a fake filesystem instead of a traditional container. Key operations like `read`, `write`, and `grep` utilize an in-memory map structure. The idle policy defaults to shutting down the dispatcher 60 seconds after detecting session inactivity. The article provides a reference for the lower-level `SessionToolRunner` and notes that no organization API keys are required; authentication is handled through an environment key. The deployment process includes setting up secrets and configuring the environment ID in a configurations file before deploying via Wrangler.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/cf/README.md)
**Source:** anthropics/claude-cookbooks

The blog post presents a demonstration of Cloudflare's CMA Private Sandboxes using a container variant. Key features include the implementation of a Worker that validates the `session.status_run_started` webhook and efficiently drains the environment work queue. Each work item initializes a dedicated Cloudflare Container that runs with a specified CLI, which manages various operational aspects like heartbeat and backlog reconciliation. The container's idle policy is set to a maximum of 60 seconds, with session status streaming to maintain its lifecycle. Importantly, the runner does not interact with organization API keys; instead, it uses an environment key for authentication. Additionally, a pure-Worker variant is available, utilizing a fake filesystem for isolation. The post concludes with setup instructions using the `wrangler` CLI for deploying the solution.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/daytona/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the release of a reference implementation termed "Daytona demo" associated with CMA Private Sandboxes. It introduces a FastAPI application (`daytona_webhook.py`) that processes the `session.status_run_started` webhook and efficiently drains the environment work queue to recover missed deliveries. Each item results in the creation of a separate Daytona sandbox, utilizing the provider-agnostic `sandbox_runner.py`. Notably, the implementation ensures that no organization API keys are exposed to the runner, employing the environment key for authentication across sessions. The setup requires deploying the FastAPI app on any HTTP-capable server and registering it as a webhook endpoint. A cold-start note indicates that using `pip install` within each new sandbox delays startup by approximately 10–15 seconds, which can be optimized by pre-baking the SDK into a custom Daytona image for production use.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/docker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the introduction of CMA Private Sandboxes, which operates via a Docker-based setup without relying on cloud services. The host runs a process to manage work items using specific scripts, creating per-session containers that maintain a workspace backed by a Docker volume. Key components include a customized `Dockerfile` defining the environment and a script (`on-work.sh`) that initializes containers with session-specific identifiers.

An idle policy automatically manages container lifecycles, while credentials are simplified to an environment key rather than requiring an API key. Users must have Docker and the `ant` CLI installed to run the system. The setup enables direct polling of the environment without the need for webhooks, ensuring efficient, in-session operations.

---

### [upgrade-guide.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/docs/upgrade-guide.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines significant updates to the "Running a self-hosted worker" documentation for the Anthropics SDKs. Key changes include:

1. **Unified Authentication**: The previous multiple credential system has been replaced by a single `ANTHROPIC_ENVIRONMENT_KEY`, streamlining authentication across all SDK functionalities, eliminating the need for session tokens.

2. **CLI Command Renaming**: The commands have been updated, with `ant worker poll` now listed as `ant beta:worker poll` and `ant worker dispatch` changed to `ant beta:worker run`, reflecting a new prefix schema for API-resource commands.

3. **Library Restructuring**: The SDK has undergone significant restructuring, including the removal of certain modules and renaming of functions. The dispatcher functionality is now divided into `SessionToolRunner` for dispatch-only roles and `EnvironmentWorker` for complete work-item lifecycle management.

These enhancements facilitate easier integration and usage of the Anthropics SDKs for developers.

---

### [usage-guide.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/docs/usage-guide.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a three-step process for setting up a self-hosted worker environment using the Anthropic SDKs. Key prerequisites include specific SDK versions: Python `0.103.0`, TypeScript `0.97.0`, and `ant` CLI v1.9.0. Users must generate an environment key in the console, which authenticates the worker's operations. The process involves creating the self-hosted environment via the console or programmatically, setting the environment key, and starting the worker using the command `ant beta:worker poll`. 

The worker can execute various shell operations directly, and users can customize their setups by using external scripts or running the worker as a container entry point. It also supports customization of the toolset by filtering or extending tools like `bash`, `read`, and `write`. The worker's management capabilities are available through SDK libraries, allowing for advanced integrations.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/modal/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details the implementation of a reference demo for the CMA Private Sandboxes using Modal, featuring two key components: `modal_sandbox_webhook.py` and `sandbox_runner.py`. The webhook receives and verifies session status updates and manages a work queue for session items, while the runner executes tasks within the sandbox environment, utilizing environment variables for context management. 

Significantly, there is no need for an organization API key since both the webhook and the runner authenticate with an environment key. Instructions for setup, including installation and deployment commands for the Modal workspace, are provided, alongside configuration details for environment secrets. The testing section outlines how to create a session and send messages, while iteration guidance is offered for making changes to the implementation.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/1a4f78a64a894fc2796072f76fb1041c218544cc/managed_agents/self_hosted_sandboxes/vercel/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details the implementation of a Vercel Sandbox for handling webhooks in a scalable and efficient manner. It introduces a framework where a webhook triggers a Vercel Sandbox to process work items using the `EnvironmentWorker.handleItem()` method. Key features include:

- A single webhook function that processes, acknowledges, and executes tasks in the sandbox, with built-in error handling.
- Configuration instructions for setting up the environment and deploying the application using the Vercel CLI.
- Sandboxes can be reused through external state management using Vercel KV for efficiency.
- Logs and performance metrics are accessible via the Vercel dashboard, providing insights into sandbox execution.
  
Overall, the post highlights the streamlined integration of Vercel with session-based task execution, enhancing developer experience and application performance.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/3c26fa886042cad6ecd0922b7205f7c586da4e9f/managed_agents/self_hosted_sandboxes/self_hosted_sandbox-daytona/README.md)
**Source:** anthropics/claude-cookbooks

The blog post presents a reference implementation for the Daytona Private Sandboxes, featuring a FastAPI app (`daytona_webhook.py`) designed to manage the `session.status_run_started` webhook. This setup facilitates the draining of the environment work queue to capture missed deliveries and create individual Daytona sandboxes. Each sandbox utilizes a provider-agnostic `sandbox_runner.py`, functioning as a full Linux container with standard tools available. Notably, the application ensures that no organization API key is exposed to the runner, using a single environment key for both control plane and session calls. The post provides instructions to deploy the FastAPI app and highlights a cold-start note about the necessity of pip installs in fresh sandboxes, recommending the pre-baking of custom images for improved performance in production settings.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/3c26fa886042cad6ecd0922b7205f7c586da4e9f/managed_agents/self_hosted_sandboxes/self_hosted_sandbox-docker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the implementation of a Docker-based demo for CMA Private Sandboxes, focusing on a self-hosted environment devoid of cloud dependency. The process involves running a polling worker script (`ant beta:worker poll`) that spawns per-session Docker containers for handling work items, maintaining workspace continuity through Docker volumes. Key features include:

- A `Dockerfile` that establishes the container image with a fixed `ant` CLI setup.
- An `on-work.sh` script that manages the execution of containers and ensures idempotency.
- Utilization of an environment key for authentication, avoiding the use of an organization API key.
- Idle policy mechanisms that manage container lifecycle efficiently.

The setup requires Docker and a specific version of the `ant` CLI, guiding users through installation and execution steps for initiating sessions and monitoring logs, thereby facilitating a controlled and secure demonstration environment.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/3c26fa886042cad6ecd0922b7205f7c586da4e9f/managed_agents/self_hosted_sandboxes/self_hosted_sandbox-modal/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details a demonstration of a reference implementation for webhook flow in Modal's CMA Private Sandboxes. It introduces two key Python files: 

1. **`modal_sandbox_webhook.py`**: Manages the reception of the `session.status_run_started` webhook, verifies it, and initiates a per-session Modal Sandbox. It maintains the agent's work environment across restarts using a mounted volume.

2. **`sandbox_runner.py`**: Operates within the Sandbox, constructing an `AgentToolContext` from environment variables, managing session tasks, and implementing an idle policy for efficiency.

The post emphasizes security by utilizing a single environment key for authentication. Setup and deployment instructions are provided, along with testing methods demonstrating the logging of sandbox events. The post concludes with guidance on iterating updates without needing to redeploy secrets.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/3c26fa886042cad6ecd0922b7205f7c586da4e9f/managed_agents/self_hosted_sandboxes/self_hosted_sandbox-vercel/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details a demonstration of Vercel's Private Sandboxes using a webhook for session management. Key features include a webhook function that verifies signatures and drains work items, each resulting in the creation and execution of a Vercel Sandbox to handle tasks. This process utilizes the SDK's tools for filesystem operations and operates without exposing an organization API key, enhancing security. 

The demo outlines setup requirements, including the installation of the Vercel CLI, and provides configuration commands to establish necessary environment variables. Users are instructed on deployment and testing procedures, including sending messages to initiate sessions. Notably, it addresses sandbox reuse through external state management via Vercel KV, and highlights potential optimizations for cold start times.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/browseruse/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature enabling agents to use a headless Chromium browser via Cloudflare's Browser Rendering technology. Each session is managed by a Durable Object, providing real-time interaction through a user interface displaying both a conversation and the browser session. Key functionalities include navigating to websites, extracting visible text and interactive elements, clicking on items, typing text, and scrolling—all facilitated by specific commands like `browser_goto`, `browser_read`, and `browser_click`.

Endpoints are provided for various operations, including webhook registration and state management. The deployment process requires a Workers Paid account and includes setup instructions. The system is designed to maintain session continuity, allowing the agent to interact with web content seamlessly while capturing viewport images at specified intervals. Overall, this advancing toolset enhances the capability of agents in web interaction and data retrieval.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/cloudrepl/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces "cloudrepl," a Cloudflare Worker designed to provide Anthropic Agent-API sessions with a persistent JavaScript REPL powered by a Durable Object for each session. Key features include the ability to register a webhook endpoint for session events, utilizing custom tools (`js_repl` and `js_list_symbols`) during session creation. The Worker manages real-time tool use by processing code and returning results through a Server-Sent Events (SSE) stream. Persistence features ensure event tracking and handle idempotency. To deploy, users must set up secrets and register the webhook with Anthropic, which involves specific API calls. Additionally, there are guidelines for local development and available endpoints for interaction. The post highlights a future requirement for incorporating the `session.running` event into the webhook functionality.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/livepage/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces **livepage**, a Cloudflare Worker that transforms an Agent-API session into a live-editing webpage. It features a real-time document display using Server-Sent Events (SSE) that allows multiple users to see live updates. The demo showcases two windows, one for conversation and another for the live webpage, where commands to modify the HTML reflect immediately in the live view. 

Key tools include functions for getting and setting HTML, adding and removing elements, and updating styles. The system also provides multiple API endpoints for webhooks, fetching tool information, and managing session states. Deployment instructions are provided, along with guidance on integrating with an Anthropic webhook. The post emphasizes the seamless persistence of edits and real-time collaboration capabilities.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-cf-worker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the demonstration of Cloudflare's CMA Private Sandboxes featuring a pure-Worker variant. It introduces a Durable Object that runs the TypeScript `client.beta.sessions.events.toolRunner()` with an in-isolate fake filesystem, supporting operations through a `Map<string,string>`. The session management employs a default idle policy that triggers the dispatcher to exit after 60 seconds of inactivity, while any new event resets this timer. Notably, the implementation utilizes environment credentials for both webhook polling and Durable Object authentication, eliminating the need for an organization API key. Instructions for deploying the setup are provided, including commands for deploying secrets and configuring the necessary environment.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-cf/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the deployment of Cloudflare Private Sandboxes using a Container variant. Key features include the verification of the `session.status_run_started` webhook via the `client.beta.webhooks.unwrap()` method, followed by draining the environment work queue. Each work item initiates a per-session Cloudflare Container, managed through a CLI that offers heartbeat management, backlog reconciliation, and various default tools. The Idle Policy is set to a maximum of 60 seconds, with the system ensuring that no organizational API key is exposed to the runner, as authentication relies solely on the environment key. Additionally, a pure-Worker variant is available, utilizing an isolated fake filesystem. Instructions for deployment using Wrangler include setting up secrets and editing configuration files.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-daytona/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a reference implementation for the onboarding guide related to Daytona, featuring a FastAPI application named `daytona_webhook.py`. This app effectively manages the `session.status_run_started` webhook by draining the environment work queue, ensuring that any missed deliveries are recovered and sandbox instances are created using a provider-agnostic script. Each Daytona sandbox operates as a full Linux container, allowing standard tools to function seamlessly. Importantly, no API keys compromise security, as the system employs the environment key for authentication across both control plane and session-specific calls. Users are guided to deploy the FastAPI app in various environments and register it as a webhook endpoint, thereby facilitating secure and efficient sandbox management.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-docker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the CMA Private Sandboxes, a Docker demo for running a per-session container using the `ant beta:worker poll` command. Key features include the execution of `ant beta:worker run` in isolated containers, handling work items via a dedicated script (`on-work.sh`), and persistent session storage using Docker volumes. 

The setup avoids cloud dependencies by operating on a host-controlled environment while retaining the same CLI and environmental contracts as its Cloudflare counterpart. It emphasizes security by avoiding organization API keys and utilizes an environment key for authentication. The post outlines prerequisites, including Docker and the `ant` CLI, and provides instructions for setup and execution. Unique to this demo is the long-polling mechanism that eliminates the need for webhook exposure, allowing for seamless communication without internet dependency.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-modal/README.md)
**Source:** anthropics/claude-cookbooks

The blog post describes the implementation of a private sandboxing solution using Modal, focusing on a reference implementation for handling webhooks as outlined in the onboarding guide. Key components include two primary files: `modal_sandbox_webhook.py`, which processes the `session.status_run_started` webhook and manages per-session modal sandboxes, and `sandbox_runner.py`, which operates within those sandboxes to execute tasks. 

Notably, it utilizes environment keys for authentication, eliminating the need for an organization API key. The setup process entails installing Modal, configuring secrets, and deploying the application with straightforward commands. The post also outlines testing procedures and reiterates that modifications to Python files require redeployment, while changes to secrets do not. Additional logging and monitoring capabilities are available through the Modal dashboard.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/7d1dc7d034c3a6bd0bdccacf1eba4ffc54e7cdc6/managed_agents/self_hosted_sandboxes/privatesandbox-vercel/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a demo for CMA Private Sandboxes using Vercel. The architecture involves a webhook that triggers Vercel Sandboxes to process sessions. The key features include a robust webhook function that verifies signatures, drains work items, and manages sessions concurrently. Sandboxes utilize the TypeScript `EnvironmentWorker.handleItem()` method with the SDK’s `betaAgentToolset()` to interact with the filesystem. 

Key announcements include the elimination of the need for an organization API key, as authentication is handled through a single environment key. The setup requires the Vercel CLI and configuration of environment variables. Notable features mentioned are sandbox creation and management, with options for reusing sandboxes via external state management using Vercel KV. Additionally, logs are accessible for debugging, and the sandbox's ephemeral nature is highlighted.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/a102bbecf486e7e8372ad4ecfbf9e9c9aa469fa1/managed_agents/slack/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a Slack webhook bridge designed to facilitate user interactions via the Claude Managed Agents (CMA). Key elements include a stateless integration process that converts Slack app mentions into CMA sessions and then routes messages back to Slack threads. 

To set up and debug this bridge, users are advised to initiate with the `/claude-api` command to access the full Managed Agents API reference. The post provides a thorough checklist and troubleshooting guidance in `./skill.md`. 

Moreover, once the foundational bridge is established, users can enhance functionality by integrating features such as GitHub repositories, MCP tools, outcomes, multiagent configurations, memory stores, and custom tools. Detailed instructions for implementation and server setup are also included, emphasizing the importance of referencing the API documentation for accurate configurations.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/a102bbecf486e7e8372ad4ecfbf9e9c9aa469fa1/managed_agents/slack/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces the integration of Claude Managed Agents with Slack, allowing users to communicate with Claude within Slack threads via `@mention`. This feature streamlines interactions, sending requests and receiving responses through a structured event-driven process. A quickstart guide is provided for users to set up their environment using a simple command-line interface. Key files related to the integration include scripts for creating agents, managing event servers, verifying Slack signatures, and handling message routing. Users are instructed to ensure they have the appropriate version of the Anthropic SDK installed. This integration enhances productivity by facilitating efficient communication between Slack users and Claude.

---

### [skill.md](https://github.com/anthropics/claude-cookbooks/blob/a102bbecf486e7e8372ad4ecfbf9e9c9aa469fa1/managed_agents/slack/skill.md)
**Source:** anthropics/claude-cookbooks

The blog post provides essential setup tips for integrating Slack with the Anthropic CMA webhook bridge. Key announcements include the clarification of webhook functions: Slack triggers on mentions, while Anthropic activates on session idle, each sending minimal payloads. Users are advised to maintain a stateless bridge by utilizing metadata during the session kickoff. Important features highlighted include Slack's three-second acknowledgment requirement and the necessity of using a developer sandbox for testing. Common pitfalls to avoid are outlined, such as understanding OAuth scopes versus event subscription settings, correctly using the appropriate tokens, and ensuring proper workspace configuration for webhooks. A checklist for local development and debugging strategies for silent failures are also provided, along with production notes for scaling the application effectively. Overall, the post emphasizes careful configuration to avoid common integration issues.