---
title: Revolutionizing Voice Agents - Introducing GPT Realtime Mini
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-15"
---
OpenAI has introduced the GPT Realtime Mini, a cost-effective, low-latency voice agent model that reduces operating costs by 70% while enhancing real-time tool calling and audio interaction capabilities. Accompanying this release is an Agents SDK (Python & TypeScript) that streamlines the creation of advanced, context-aware customer support voice agents, employing a modular “handoff” architecture with specialized QA and authentication agents. Developer support includes sample implementations and repository resources. Separately, effective long-term problem-solving with Codex and the `gpt-5-codex` model is highlighted, utilizing iterative, plain-language "ExecPlans" and detailed documentation to make complex workflows accessible and executable even for non-experts. Key trends center on improved developer tooling, increased efficiency, and greater accessibility for building and maintaining sophisticated AI-driven applications.

## New Cookbook Recipes

### [building_w_rt_mini.ipynb](https://github.com/openai/openai-cookbook/blob/2608cb13d958c236e1381d70842ec564bfb957aa/examples/building_w_rt_mini/building_w_rt_mini.ipynb)
**Source:** openai/openai-cookbook

OpenAI has launched the **GPT Realtime Mini**, a cost-effective voice agent solution that significantly reduces operating costs and improves latency. Accompanying this release is the **Agents SDK**, available in Python and TypeScript, which facilitates the creation of voice agents that can adeptly handle complex workflows and support customer queries. The architecture involves a **Primary Agent** that categorizes queries into paths requiring either basic support or user authentication. Support is provided through two specialized agents: a **QA Agent** for general inquiries, utilizing a document lookup tool, and an **Auth Layer** that manages user-specific requests. This setup is designed to enhance customer support applications, leveraging seamless intent classification and secure data access while ensuring a streamlined user experience. Sample code snippets demonstrate the implementation process, illustrating how developers can build effective customer support systems.

---

### [codex_exec_plans.md](https://github.com/openai/openai-cookbook/blob/4987742e4001effffbc8d0685a59f46261a30764/articles/codex_exec_plans.md)
**Source:** openai/openai-cookbook

The blog post outlines the effective use of Codex and the `gpt-5-codex` model in long-term problem-solving through a structured approach using design documents called "ExecPlans". It describes how to create these plans, emphasizing that they should be thorough, self-contained, and updated throughout the implementation process. The document explains how to prompt Codex for complex features by utilizing a companion file, `AGENTS.md`, which guides the use of ExecPlans. Key features include defining tasks in plain language, documenting milestones, and maintaining logs of decisions and surprises encountered during the implementation. This ensures that even users without prior experience can follow and produce executable results from the plans.

---

### [byo_realtime.ipynb](https://github.com/openai/openai-cookbook/blob/9dd62be68f9e4a6006e4544670edb7ecff67dbba/examples/building_w_rt_mini/byo_realtime.ipynb)
**Source:** openai/openai-cookbook

OpenAI has launched the GPT Realtime Mini, significantly reducing costs by 70% while enhancing tool calling capabilities and minimizing latency. To aid developers in building voice agents, OpenAI released the Agents SDK in Python and TypeScript, including a customer support application example utilizing a "handoff architecture". This design features a main agent that routes queries to either general support or specific tasks requiring user authentication. Additionally, the SDK introduces two specialized agents: a QA Agent for document-based queries and an Auth Layer for customer-specific information. The implementation supports real-time audio interactions alongside robust user authentication management. Developers can borrow existing examples from the openai-agents-js repository to streamline the process of creating responsive and context-aware voice applications.