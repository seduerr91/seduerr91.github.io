---
title: Secure and Flexible Self-Hosted Sandboxes for Developers
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 05-20"
---
Across these blog posts, the most important trends and announcements center on the introduction and demonstration of self-hosted sandbox solutions across various platforms (Cloudflare, Daytona, Docker, Modal, and Vercel). Key themes include:

- **Unified Security Approach:** All implementations emphasize enhanced security by relying solely on environment keys for authentication, eliminating the need for organization API keys to reach the runner.
- **Flexible & Provider-Agnostic Architectures:** Solutions are presented for both pure-Worker/function-based and full container environments, with several posts highlighting provider-agnostic runner scripts that support wide compatibility.
- **Efficient Session and Idle Management:** Each sandbox approach incorporates mechanisms for session heartbeat, idle timeout, and resource management, often allowing for event-driven resets to optimize resource usage.
- **Operational Tooling & Integration:** CLI tools and webhook handlers are used to streamline process management, task queuing, and session control. Clear setup, configuration, and deployment instructions are provided for each platform.
- **Customization & Performance Optimization:** Posts frequently note the ability to modify behavior (without full redeployment in some cases) and recommend best practices such as pre-baking SDKs or using workspace volumes to reduce latency and efficiently reuse sandboxes.

**Overall, these announcements signal a trend toward more secure, customizable, and platform-flexible self-hosted sandbox environments, providing developers with robust tools and guidance for efficient, organization-controlled compute workflows.**

## New Cookbook Recipes

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/cf-worker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details a demonstration of Cloudflare's Self-Hosted Sandboxes using a pure-Worker variant. Key features include the use of a Durable Object to run the `client.beta.sessions.events.toolRunner()` with a simulated filesystem, enabling operations like read, write, and glob on a string map. The idle policy defaults to the SDK, ending the session after 60 seconds of inactivity, while any new event resets this timer. The implementation relies solely on an environment key for authentication, ensuring no organization API keys are required. The post also provides commands for setting up secrets and deploying the environment. For more advanced shell capabilities, users are directed to the Container or Vercel/Modal demos.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/cf/README.md)
**Source:** anthropics/claude-cookbooks

The Cloudflare blog post announces the introduction of self-hosted sandboxes using a container variant. It details the implementation of a Worker that verifies webhook events and processes work items through per-session Cloudflare Containers. Key features include a CLI that manages session heartbeat, backlog reconciliation, and work-item force-stop processes. The idle policy is managed by the CLI, which sets a maximum idle time after a session status indicates inactivity. Notably, the system ensures security by preventing organization API keys from reaching the runner; instead, it uses environment keys for authentication. Additionally, a pure-Worker variant is available, which operates with a fake filesystem. The article concludes with deployment instructions involving the use of `wrangler` commands for managing secrets and deployment settings.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/daytona/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a demonstration of self-hosted sandboxes using Daytona, a platform highlighted for its capabilities in managing session webhooks. The `daytona_webhook.py` application built with FastAPI demonstrates how to handle `session.status_run_started` webhooks and efficiently drain the environment's work queue. Key features include the creation of Daytona sandboxes that utilize the provider-agnostic `sandbox_runner.py`, ensuring compatibility with full Linux containers. Notably, security is emphasized by preventing organization API keys from reaching the runner, as each sandbox authenticates using an environment key. The post also provides deployment steps, recommending the pre-baking of SDKs into custom images to reduce cold-start times. All instructions are designed to facilitate easy integration and effective sandbox management in various deployment environments.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/docker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses a Docker-based implementation for self-hosted sandboxes, specifically utilizing a polling mechanism with the `ant` CLI. The process involves running a work item within a dedicated Docker container, which operates under a specified entrypoint and maintains a persistent workspace across sessions using Docker volumes. Key features include the `Dockerfile` configuration, the script `on-work.sh` for handling work items, and an idle policy for container management. It emphasizes that no organization API key is required, only an environment key for authentication. Prerequisites include having Docker and the `ant` CLI installed. Users can run the setup using provided shell commands to create a session and begin processing messages directly from the environment without needing external webhooks. This self-hosted approach allows for more control over the development environment.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/modal/README.md)
**Source:** anthropics/claude-cookbooks

The blog post presents a reference implementation for a self-hosted sandbox using Modal, specifically detailing the webhook flow as described in the usage guide. It includes two key script files: `modal_sandbox_webhook.py`, which handles webhook events and manages session-specific sandboxes, and `sandbox_runner.py`, which operates within the sandbox, processing tasks and maintaining execution context. 

The implementation emphasizes secure credential management by using an environment key instead of an organization API key. Prerequisites for setup are provided, as well as instructions for configuring and deploying the application. Users can test the functionality by creating a session and sending commands, with logs available on the Modal dashboard. The post highlights ease of modification, allowing for updates without full redeployment, except for code changes.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/2eed173a533a690eb70ab324614ce5350776a23a/managed_agents/self_hosted_sandboxes/vercel/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses a demo of Vercel's Self-Hosted Sandboxes, designed to facilitate efficient handling of session runners. The architecture utilizes a webhook function that processes work items by spawning a Vercel Sandbox, executing tasks with a specified SDK handler. It includes details on managing work items, with a focus on error handling and session management without needing an organization API key.

Key components outlined include:
- The webhook function's role in item processing and sandbox management.
- Implementing idle policies that reset based on events.
- Configuration and deployment instructions for setting up the environment.
- The integration of Vercel KV for sandbox reuse, and how working directories are established within the sandbox.

The post provides testing instructions and notes on performance considerations and session handling.