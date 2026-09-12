---
title: Revolutionizing Workflows with AI and Automation
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-12"
---
**Meta-Summary:**

Across these blog posts, significant advancements are introduced in automation and AI-driven tooling, particularly targeting workflow efficiency, compliance, and integration with cloud infrastructure:

- **Automation & AI-Agent Workflows:** New multi-agent systems, exemplified by the `gpt-5.6-luna` agent for bulk invoice and contract review, streamline document processing while maintaining human oversight. Customizable review policies, like the detailed accounts-payable policy (AP-104), reinforce compliance and risk mitigation before approval.
  
- **Enhanced Asset Generation:** The addition of transparent image asset generation via OpenAI models caters to industries such as e-commerce, enterprise presentations, and print-on-demand, simplifying design workflows and assuring seamless integration across diverse backgrounds.

- **Cloud Integration & Sandbox Management:** The integration of DigitalOcean’s MARS sandboxes managed via webhooks enables scalable, automated provisioning and lifecycle control of AI workflows, leveraging secure microVM environments with robust configuration, credential management, and operational transparency.

In summary, the key trends are the convergence of customizable AI agents, advanced asset generation, and secure, automated cloud sandbox environments—collectively enhancing productivity, compliance, and flexibility for both technical and business users.

## New Cookbook Recipes

### [transparent-image-assets-for-campaigns-and-presentations.ipynb](https://github.com/openai/openai-cookbook/blob/93efae39998351b540f917e33f847c6d6097cda7/examples/multimodal/transparent-image-assets-for-campaigns-and-presentations.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a new feature for generating transparent image assets, enhancing usability in marketing and presentation contexts. Key use cases include:

1. **E-commerce Campaigns**: Create reusable transparent product images for various seasonal backgrounds.
2. **Enterprise Presentations**: Generate charts with transparent backgrounds to maintain the integrity of slide designs.
3. **Design-Template Assets**: Produce decorative elements and icons for flexible use across templates.
4. **Print-on-Demand Merchandise**: Apply consistent designs across diverse products.

The setup involves installing specific Python packages and using OpenAI's image models to generate high-quality transparent PNGs. Screenshots demonstrate successful applications in seasonal campaigns and enterprise settings. This feature streamlines workflows and preserves intricate design details in various backgrounds, showcasing transparency advantages over traditional image processing methods.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/3326f7e8648b6e929cdf06bb39e78e13f7f1710c/examples/agents_api/apps/document_review/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a new system for bulk invoice and contract review using the `gpt-5.6-luna` agent, which employs a multi-agent architecture. Users can submit folders of documents to be analyzed by specialized subagents, which apply a mounted accounts-payable policy and generate individual reports along with a consolidated summary for human approval. 

Key features include:

- Setup requirements involving Python, Docker, and OpenAI API keys.
- A detailed procedure for mounting a workspace, running document reviews, and managing output.
- An option to inspect retained command activity for auditing purposes.
- Customization capabilities through the integration of a personalized expense-review policy.

This system aims to streamline document analysis while ensuring final decisions remain under human control.

---

### [SKILL.md](https://github.com/openai/openai-cookbook/blob/3326f7e8648b6e929cdf06bb39e78e13f7f1710c/examples/agents_api/apps/document_review/skills/expense-review-policy/SKILL.md)
**Source:** openai/openai-cookbook

The blog post outlines the "Expense Review Policy" (Policy ID: AP-104) focusing on the meticulous review of invoices, expense receipts, and service contracts. Key features include a thorough examination of invoice line items, requiring accurate calculations using Python's `decimal.Decimal`, and the necessity for documented approvals like purchase orders. The policy emphasizes the importance of flagging discrepancies such as missing receipts, unverified changes, and reporting risks in contracts, including automatic renewals and unilateral price increases. Review decisions can range from needing additional information, escalations due to fraud indicators, to being ready for human approval. The policy aims to ensure compliance and mitigate financial risk before human approval is granted for transactions.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/3326f7e8648b6e929cdf06bb39e78e13f7f1710c/examples/agents_api/sandboxes/webhook_managed/digitalocean/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the DigitalOcean webhook-managed sandbox, designed for provisioning DigitalOcean Managed Agents Runtime Service (MARS) sandboxes. Key features include Firecracker microVMs booting from pre-configured images containing the Codex CLI, automated sandbox pausing and resumption, and multiple integration points with DigitalOcean's ecosystem. Users can deploy using Python 3.11 or later, requiring a DigitalOcean account with MARS access. The setup involves configuring various environment variables and registering a webhook for OpenAI to communicate with the sandboxes. The post also details local controller execution and configuration options within the sandbox, emphasizing the importance of credential management and sandbox lifecycle management. Users can list deployed applications and manage their session sandboxes with specific commands.