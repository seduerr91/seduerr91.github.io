---
title: AI Trends in Commerce and Content Moderation Unveiled
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 08-15"
---
Across the blog post summaries, several key trends and announcements emerge:

- Agentic Commerce and Secure Payments: Multiple posts introduce advances in agent-driven procurement using Amazon Bedrock AgentCore Payments, highlighting strict application-defined spending controls, approval workflows, and robust payment integrity. New frameworks allow AI agents to request and purchase external services via APIs while maintaining strong security boundaries, including delegated wallet signing, auditability, idempotency, and deterministic local testing. These developments streamline agentic workflows and reinforce the importance of granular authorization in AI-powered transactions.

- Content Policy Enforcement and Moderation: Several posts detail innovative, rules-based content moderation systems leveraging Claude, emphasizing the translation of written policies into auditable, consistently-enforced rulesets—moving beyond model predictions to ensure traceability, accountability, and high policy compliance. These approaches focus on extracting structured data from submissions, compiling dynamic policy rules, and building transparent, reproducible moderation pipelines with extensive evaluation guidance.

- Expanded AI Capabilities and Practical Guidance: The "Capabilities" section of the Claude Cookbooks highlights new guides for key AI tasks—classification, retrieval augmented generation, summarization, text-to-SQL, and knowledge graph construction—offering practical code, techniques, and evaluation tools for users seeking to leverage advanced AI solutions across domains.

- Marketplace and Media Policy Updates: The Northwind platform has rolled out significant updates to its ad creative, third-party listing, and community content policies, tightening requirements for ad targeting, transparency, regional compliance, authenticity claims, and user conduct. Enhanced review processes, stricter content and creative quality controls, and explicit prohibitions aim to improve safety, transparency, and regulatory compliance for both advertisers and sellers.

In summary, the posts collectively showcase the maturation of agentic AI payment systems, advancements in structured content moderation, practical resources for AI deployment, and a parallel tightening of marketplace and media governance standards.

## New Cookbook Recipes

### [controlled_agentic_commerce.ipynb](https://github.com/openai/openai-cookbook/blob/5bff2e10495570b034dcd07d0e2abb16bf7f6d16/examples/partners/AWS/controlled_agentic_commerce_with_agentcore_payments/controlled_agentic_commerce.ipynb)
**Source:** openai/openai-cookbook

This blog post introduces the Amazon Bedrock AgentCore Payments, a system enabling AI agents to access paid services while ensuring that application-defined spending controls remain intact. The workflow allows agents to request paid resources, such as risk reports, under strict guidelines involving approval checks and spending limits. It explains the process using a supplier research example where an AI agent evaluates a fictional supplier. Key features include the separation of responsibilities between the AI agent, the application, AgentCore Payments, and the paid API. The post demonstrates how the agent can make a request and handle payments through a synthetic environment, ultimately detailing the importance of maintaining application control over financial transactions while utilizing external APIs. This integration aims to streamline agentic commerce workflows without compromising authorization or security protocols.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/683ca90a3166b9130230a8e9b59af71ee661f27e/examples/partners/AWS/controlled_agentic_commerce_with_agentcore_payments/README.md)
**Source:** openai/openai-cookbook

The blog post by Deepak Jain and Sid Rampally introduces an AI agent framework that facilitates the procurement of APIs through Amazon Bedrock AgentCore Payments. Utilizing the OpenAI Agents SDK, the framework allows agents to request various supplier reports while imposing spending limits and approval processes. Key features include the `x402_fetch` tool for payment requests, a controlled payment session to ensure secure transactions, and local simulations for testing before deployment in AWS environments. The architecture outlined emphasizes strong security boundaries, ensuring that approvals, budget management, and payment integrity are maintained. The post also details a testing framework to ensure compliance with defined operational standards and provides extensive guidance on setting up and executing both local and live tests. Finally, it highlights that live runs require thorough validation and separate IAM roles for enhanced security.

---

### [SOURCE_ATTRIBUTION.md](https://github.com/openai/openai-cookbook/blob/683ca90a3166b9130230a8e9b59af71ee661f27e/examples/partners/AWS/controlled_agentic_commerce_with_agentcore_payments/SOURCE_ATTRIBUTION.md)
**Source:** openai/openai-cookbook

The blog post discusses the AWS paid-research companion sample, authored by AWS Solutions Architect Nick. It reports on a live multi-agent testnet run utilizing a Bedrock-hosted OpenAI model, alongside features like AgentCore Payments, delegated wallet signing, an x402 V2 challenge, and a paid retry yielding a successful HTTP 200 response. Notably, the post emphasizes that this example is implemented independently and does not replicate the code from the AWS sample. Instead, it focuses on a single-agent, one-tool pattern, incorporating application-owned authorization, challenge validation, idempotency, receipts, audit evidence, and deterministic local tests, all aimed at informing users through a provider-neutral setup language and cost-effective session exercises.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35f2eec7e44897c537e44441b7dff2f0ecbfb804/capabilities/content_moderation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a content moderation pipeline using Claude, focusing on systematic enforcement of content policies. The guide provides a framework for building a content moderation engine that translates written policies into auditable rules without relying on model predictions for decision-making.

Key features include:
- Designing an extraction schema that informs both the content extraction and rule compilation processes.
- Developing a JSON-based rule language that supports three-valued logic for policy enforcement.
- Implementing a rule engine that evaluates content against established rules consistently.
- Addressing challenges in content moderation, such as maintaining consistent verdicts and providing an audit trail for decisions.

The guide emphasizes the use of synthetic data for demonstration and outlines the components that facilitate a reliable and efficient content moderation system.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Capabilities" section of the Claude Cookbooks, featuring a series of guides that highlight Claude's strengths in various tasks. Key guides include:

1. **Classification**: Techniques for effective classification, including prompt engineering and evaluation.
2. **Retrieval Augmented Generation (RAG)**: Strategies to enhance Claude's capabilities with domain knowledge through RAG systems, focusing on performance optimization and evaluation.
3. **Contextual Embeddings**: An innovative approach to improve RAG by incorporating context into document chunks.
4. **Summarization**: Methods for synthesizing information from multiple sources, including evaluation strategies.
5. **Text-to-SQL**: Generating complex SQL from natural language, emphasizing accuracy evaluation.
6. **Knowledge Graph Construction**: Building knowledge graphs through extraction techniques and deduplication.
7. **Content Policy Enforcement**: Automating content moderation based on written policies.

Each guide provides practical instructions, code, and evaluation tools for users to explore Claude's capabilities effectively.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/content_moderation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new approach to content moderation using a tool called Claude, which effectively enforces written content policies through a structured ruleset. The traditional methods face challenges like inconsistent verdicts and lack of traceability, especially as policies evolve. Claude addresses these issues by employing a two-part system: a **compiler** to convert policy clauses into a validated ruleset and an **extractor** that categorizes submissions into typed fields. The **engine** then applies these rules consistently, ensuring the same content receives identical verdicts every time, thereby improving accountability and traceability.

The implementation guide includes a fully executed notebook and example data across various domains, demonstrating high accuracy in decisions. It is ideally suited for dynamic policies needing clear justification, while not recommended for standard single-category detection tasks.

---

### [policies.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/content_moderation/data/ad_creatives/policies.md)
**Source:** anthropics/claude-cookbooks

The Northwind Media Network has updated its Ad Creative Acceptance Policy, outlining guidelines for various restricted advertising categories. Key announcements include:

1. **Alcohol & Gambling:** Ads must target adults 21+ and must include responsible messaging and relevant age badges. Claims of guaranteed winnings are prohibited.
  
2. **Financial Services & Health Products:** Creatives must disclose representative APRs and avoid guaranteeing approvals or medical claims. Weight loss ads cannot target those under 18, and no before/after imagery is allowed.

3. **Creative Quality Standards:** Minimal text overlay is mandated, and all creatives must clearly identify the advertiser.

4. **Audience Safety Measures:** Creatives targeting unspecified age demographics are considered to reach all ages, leading to rejections for restricted categories.

5. **Regional Compliance:** Specific requirements apply for states like New Jersey, and certain ad types (e.g., alcohol, gambling) are not permitted in email formats. 

These changes aim to ensure transparency, safety, and compliance in advertising practices.

---

### [policies.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/content_moderation/data/product_listings/policies.md)
**Source:** anthropics/claude-cookbooks

The Northwind Marketplace has announced updates to its Third-Party Listing Policy, emphasizing crucial compliance rules for sellers. Key points include prohibitions on claims related to medical treatments or FDA endorsements, and restrictions against sharing personal contact information or soliciting off-platform payments. Listings that feature luxury brands priced under $100 will face counterfeit risk reviews, and any claims of authenticity will lead to rejection. Additionally, new sellers are subject to specific regional rules: they cannot list certain age-restricted items like blades and tools, and electronics priced above $500 will undergo review prior to publication to ensure compliance.

---

### [policies.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/content_moderation/data/ugc/policies.md)
**Source:** anthropics/claude-cookbooks

Northwind Media's Community Content Policy outlines important guidelines to ensure a respectful and safe environment for users. Key elements include prohibiting personal attacks and profanity, with the latter being flagged for moderator review in forums. The policy emphasizes protecting user privacy by removing any content that exposes personal information. Additionally, it addresses spam and promotional content, stating that primarily promotional posts will be removed and links from new accounts will undergo a review process before being published. Lastly, product reviews that appear to be paid or incentivized will be flagged for further examination.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/9148d36f5d1c3a8ec1a331a6b4ad63bb00789e45/capabilities/content_moderation/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines an evaluation framework that processes labeled samples across three domains using specified Python scripts (`engine.py` and `pipeline.py`) from the cookbook. Users are instructed to install necessary packages, including `anthropic` and `python-dotenv`, and run an evaluation script that compares model decisions against expected labels. The `ad_creatives` domain employs a predefined ruleset, while the other two domains generate rules dynamically on first run, caching them for future evaluations. Results of the evaluation are saved in a JSON file for analysis.