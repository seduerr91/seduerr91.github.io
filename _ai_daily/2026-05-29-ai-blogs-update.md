---
title: Deploying Research Agents Made Easy - Choose Your Tier
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 05-29"
---
**Meta-Summary:**
The blog series presents a unified approach to deploying a research agent using a consistent Docker image and HTTP interface, but across three main deployment tiers—Docker (local/single-tenant), Modal (serverless/public), and Kubernetes (secure, multi-tenant production). Each tier addresses varying needs for scalability, security, and management overhead:

- **Docker** is best suited for local development or internal use, with robust support for both simple, temporary sessions and persistent hybrid modes for ongoing conversations.
- **Modal** offers effortless serverless deployment with automatic scaling and public HTTPS access, ideal for rapid prototyping, although authentication options are limited and manual monitoring is recommended.
- **Kubernetes** supports advanced production scenarios requiring strong tenant isolation, network security (including egress locking), and pod-per-session management, at the cost of more complex setup.

Across all deployment methods, strong emphasis is placed on secure configuration, consistent API interface contracts, observability, and proper file structuring. Notable trends include the use of persistent session storage where possible, enhancements to deployment automation and monitoring, and practical cost considerations. Collectively, the announcements guide developers through a flexible ecosystem for both experimentation and scalable, robust production deployments of AI agents.

## New Cookbook Recipes

### [07_Hosting_the_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/31cfc00ca5e8049a23a410d1fee0dd8428104cad/claude_agent_sdk/07_Hosting_the_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the deployment of a research agent through three tiers: Docker, Modal, and Kubernetes. Each tier serves different needs, from local development to multi-tenant production environments. 

1. **Tier 1 - Docker**: Ideal for internal tools and single-tenant applications, allowing basic container deployment with manual session management.
   
2. **Tier 2 - Modal**: Offers serverless hosting, providing a public HTTPS URL and automatic scaling without infrastructure management. It requires minimal setup but has limited authentication.

3. **Tier 3 - Kubernetes**: Best for regulated environments, enabling pod-per-session isolation and an authenticating gateway for tenant-scoped sessions. It involves more complex infrastructure management.

The notebook includes a deployment guide, cost estimates, and insights on using the Agent SDK for customer-facing products and internal tools. A production-ready configuration involves observability, liveness checks, and session persistence strategies.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/31cfc00ca5e8049a23a410d1fee0dd8428104cad/claude_agent_sdk/hosting/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details the deployment options for a research agent through three tiers: local Docker, Modal, and Kubernetes. All tiers utilize the same agent image and HTTP interface, differing only in deployment mechanisms. The article provides an interface contract outlining essential API endpoints, including the health check and message session management, along with security precautions to avoid exposing the service directly to the internet. A structured directory layout for organizing files related to hosting the agent is presented, highlighting the shared Dockerfile and server implementation. The post emphasizes proper configuration requirements, including the necessary environment variables for operation and guidelines for building the Docker container from the parent directory. For comprehensive instructions, readers are encouraged to refer to the linked notebooks.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/31cfc00ca5e8049a23a410d1fee0dd8428104cad/claude_agent_sdk/hosting/docker/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces two operational modes for running the shared image of the Claude Agent SDK locally using Docker: Ephemeral and Hybrid. 

In the **Ephemeral mode**, the SDK is executed as a one-off process, ideal for batch processing and single analyses, which does not require maintaining the session after completion. 

In the **Hybrid mode**, it runs a FastAPI server, allowing persistent sessions that maintain conversation context across container restarts by mounting session data. This enables users to have ongoing dialogues with the agent, with session data stored locally. The post provides command-line examples for both modes, illustrating the setup and interaction with the SDK.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/31cfc00ca5e8049a23a410d1fee0dd8428104cad/claude_agent_sdk/hosting/kubernetes/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the implementation of a Kubernetes hosting tier (Tier 3) for running an agent in isolated pods per session, enhancing security through network-level controls. Each user session is assigned its own pod managed by a gateway, which interacts with the Kubernetes API and utilizes Redis for session-pod mapping. Key components include an egress proxy that ensures agent pods can only access the Anthropic API, and a standby pool that pre-warms pods for faster session initialization. 

The guide provides prerequisites for deployment using local Kubernetes clusters and discusses how to configure and run the setup, including tenant management and egress lockdown verification. Additionally, it notes limitations, such as the absence of a real identity provider and durable session storage. The post serves as a comprehensive guide for teams requiring customized, secure deployments in controlled environments.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/31cfc00ca5e8049a23a410d1fee0dd8428104cad/claude_agent_sdk/hosting/modal/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the use of Modal for running the same Dockerfile image through `modal.Sandbox`, enabling developers to deploy applications without managing infrastructure. Key features include public HTTPS URLs, scale-to-zero functionality, and easy setup with prerequisites such as installing the Modal package and creating secrets. Deployment is accomplished by executing a script that builds the Docker image and starts a service, providing a public URL for interaction. 

Session persistence is achieved through a mounted volume, though concurrent writes may require employing a `SessionStore` for reliability. The sandbox runs until a specified timeout, and it's recommended to monitor server health manually. Finally, teardown instructions ensure that sandboxes and associated resources are stopped to avoid unnecessary charges.