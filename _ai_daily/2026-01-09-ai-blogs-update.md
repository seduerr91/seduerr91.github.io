---
title: AI Agents Evolve — Context Smarts and Personality Unleashed
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 01-09"
---
The blog posts highlight two major trends in AI agent development: enhanced **context engineering** and refined **personality design**. Advances in the OpenAI Agents SDK enable agents to manage structured, persistent long-term memory, facilitating dynamic, personalized experiences that recall user preferences and support nuanced decision-making. Simultaneously, defining agent personality through prompt engineering allows developers to tailor interaction styles and behaviors—such as professionalism, efficiency, factuality, or exploration—to better meet user needs and maintain consistency. Together, these developments support the creation of AI agents that are both context-aware and adaptable in personality, significantly improving user engagement and reliability across applications.

## New Cookbook Recipes

### [context_personalization.ipynb](https://github.com/openai/openai-cookbook/blob/a46b4185e765466162036ff2b1f640025238cca7/examples/agents_sdk/context_personalization.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses advancements in **context engineering** for AI agents, particularly through the **OpenAI Agents SDK**. It introduces the `RunContextWrapper`, which enhances an agent's ability to manage long-term memory effectively, allowing for personalization and context awareness. Key features include the ability to create structured state objects that persist across sessions, capturing user preferences and recalling them for tailored interactions. The tutorial emphasizes a **travel concierge agent** use case, detailing memory management strategies, such as capturing user preferences, consolidating memories, and establishing clear precedence rules. The importance of maintaining structured and unstructured memory to facilitate user-centric decisions is highlighted, alongside strategies for memory distillation, consolidation, and the necessity of forgetting outdated information to ensure high-quality agent performance. The insights aim to transform stateless interactions into dynamic, personalized experiences.

---

### [prompt_personalities.ipynb](https://github.com/openai/openai-cookbook/blob/b8ed4810a1e70bac1f7b888b6d62f7a0d415e1f3/examples/gpt-5/prompt_personalities.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the importance of defining an agent's personality through explicit instructions in prompting, akin to ChatGPT's personality presets. By doing so, developers can influence the agent's tone, verbosity, structure, and decision-making style across interactions. Four distinct personality profiles are presented: 

1. **Professional** - Polished and formal, ideal for enterprise communication.
2. **Efficient** - Concise and direct, best for technical tasks and automation.
3. **Fact-Based** - Clear and corrective, suited for debugging and evaluations.
4. **Exploratory** - Enthusiastic and educational, promoting a deep understanding of concepts.

The post emphasizes the operational value of these personalities in aligning agent behavior with user expectations while ensuring consistency without compromising task-specific outputs. Careful implementation is recommended for scalability and reliability in production environments.