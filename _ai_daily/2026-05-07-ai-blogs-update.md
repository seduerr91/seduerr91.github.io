---
title: Revolutionizing Automation with Claude Managed Agents
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 05-07"
---
Across the blog posts, several significant trends and announcements emerge:

1. **Introduction of Claude Managed Agents**: Anthropic has unveiled Claude Managed Agents, a hosted runtime enabling users to build stateful, tool-using agents tailored to a variety of practical scenarios, from data transformation to automated report generation and incident response. Core features include persistent sessions, support for memory stores, and seamless integration with user workflows.

2. **Specialization and Coordination via Multi-Agent Patterns**: A key pattern highlighted is the use of specialized agents coordinated by a master agent to tackle complex tasks—exemplified by a multi-agent setup for automated sales-proposal writing. This approach enhances task efficiency, maintains focus through specialist roles, and minimizes context overlap, resulting in higher-quality outputs.

3. **Outcome Grading for Autonomous Quality Assurance**: The new **Outcomes** feature empowers agents to autonomously check their own outputs using detailed, user-defined rubrics and a grader agent. This iterative system promotes accuracy, reliability, and continual improvement in agent-generated content.

4. **Advancements in Local Development and Observability**: The Agents SDK Deployment Manager provides a powerful local control-plane for deploying, monitoring, and debugging agents, simplifying development workflows and tracing via a user-friendly UI backed by a Flask/React stack and Docker support.

Overall, these developments reflect a move toward more robust, reliable, and developer-friendly agent ecosystems, enabling both automation of end-to-end workflows through specialized coordination and improved assurance of quality through integrated review mechanisms.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/45bd8db2a1c514ecf7315306d2e7085d6036489a/examples/agents_sdk/deployment_manager/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Agents SDK Deployment Manager, a local control-plane application designed for running and observing Agents SDK demo projects. Key features include the ability to import local SDK projects, inspect app details and logs, and manage local deployments as Docker containers. Users can view deployment status, traces, and app events through a React UI served by a Flask backend.

Essential prerequisites for use include `uv`, `npm`, and Docker. The manager supports Docker deployments, enabling local tracing and gathering of operational data without the need for bind-mounting trace files. It captures trace records which are stored in an SQLite database for easy access and analysis via the UI. Deployment assurances specify requirements for the apps, such as the presence of a `pyproject.toml` and a readiness endpoint. Additionally, several make targets are provided for simplified management commands.

---

### [CMA_coordinate_specialist_team.ipynb](https://github.com/anthropics/claude-cookbooks/blob/93a262f1e00a9d48f58b4c6fe49241b612156452/managed_agents/CMA_coordinate_specialist_team.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the use of Claude Managed Agents and the multi-agent coordinator pattern to automate the process of sales-proposal writing for a fictional company, Northstar. The system involves three specialist agents: a researcher for industry insights, a case study picker for selecting relevant examples, and a pricing modeler for generating pricing options. These agents work under the coordination of a master agent, which sequences their tasks and compiles the final proposal. The post outlines the setup process, including defining the specialists' roles, feeding them necessary data, and guiding the proposal creation. Additionally, it highlights the advantages of using multiple agents to maintain focused toolsets and minimize context overlap. This method enhances proposal quality by leveraging specialized functions, ensuring efficiency and relevance in the final output.

---

### [CMA_verify_with_outcome_grader.ipynb](https://github.com/anthropics/claude-cookbooks/blob/93a262f1e00a9d48f58b4c6fe49241b612156452/managed_agents/CMA_verify_with_outcome_grader.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces **Outcomes**, a new feature in Claude Managed Agents that enables agents to check their own work through a dedicated grader. Users create a detailed rubric outlining success criteria for a task, allowing the grader to evaluate the writer's output autonomously and provide feedback for revisions. 

This feature is demonstrated through a session where a "Research Analyst" agent drafts a brief on electric vehicle fast charging economics. The grader independently verifies citations, checks for completeness, and identifies any shortcomings based on the rubric criteria. The process involves multiple iterations of writing and grading, which results in a refined output after addressing identified gaps.

Key learnings include crafting an effective rubric, understanding the iterative review process, and recognizing when to utilize the Outcomes feature for enhanced accuracy in agent-generated content.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/d28edf1735dc27f3f2d19d17d403b9200dd50934/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has introduced Claude Managed Agents, a hosted runtime for creating stateful, tool-using agents with a focus on ease of use and integration in various environments. The blog post presents a series of "applied cookbooks" that demonstrate practical use cases, such as transforming CSV data into HTML reports, creating Slack bots for report generation, and managing incident responses via automated sessions. Additionally, a selection of end-to-end tutorials guides users through the Managed Agents API, covering diverse scenarios from fixing failing tests to operating in a production environment. Key features include session persistence, human-in-the-loop interactions, and memory stores for user preferences. Users can start by configuring their environment with the provided Jupyter notebooks, which come with built-in dependencies and examples.