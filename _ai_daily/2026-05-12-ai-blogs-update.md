---
title: Empowering Agents - Trends in Continuous Improvement and Automation
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 05-12"
---
Across these blog posts, key trends and announcements include the introduction of iterative, closed-loop workflows enabling continuous improvement for both autonomous agents and developer tools. Notably, OpenAI's Codex and Agents SDK are central to these processes, facilitating automated review, repair, and validation—not only for financial analyst agents but also for API/SDK documentation. Emphasis is placed on using real and synthetic data traces, structured feedback (from humans and models), and codified business rules to refine agent behavior and documentation quality.

Additional updates highlight the move toward lightweight, local evaluation and testing patterns (as seen with simplified SQL and retrieval fixtures), promptly validating agent outputs with manageable datasets rather than large benchmarks. The posts also showcase versatile local knowledge and embedding search examples, incorporating new and legacy tool-calling schemas to maintain compatibility and flexibility. Overall, the collective focus is on making agent development more robust, automatable, and easily testable, driving continuous learning and rapid iteration.

## New Cookbook Recipes

### [agent_improvement_loop.ipynb](https://github.com/openai/openai-cookbook/blob/05fe56240be4a27b1f6b3f424cb2e3c9bcf9980e/examples/agents_sdk/agent_improvement_loop.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the creation of an agent improvement loop using OpenAI's Agents SDK for a financial analyst role. Key components include capturing real traces of the agent's performance on synthetic company data, incorporating human and model feedback, and using this information to generate reusable evaluations through Promptfoo. The notebook outlines a full cycle where traces lead to validated feedback, which informs harness updates via Codex. By the end, the developer will create a comprehensive report (`codex_handoff.md`) containing analysis, ranked recommendations, and implementation guidance for Codex to enhance the agent's capabilities. The workflow emphasizes continuous learning through automation and iteration, ensuring that each run refines the agent’s performance while maintaining a scalable evaluation process.

---

### [Build_iterative_repair_loops_with_Codex.ipynb](https://github.com/openai/openai-cookbook/blob/98a492bdea11f86b40bdb81aeafac7e4fbcb917e/examples/codex/Build_iterative_repair_loops_with_Codex.ipynb)
**Source:** openai/openai-cookbook

The blog post "Build iterative repair loops with Codex" discusses the implementation of closed-loop agent workflows that enhance documentation reliability, particularly for API and SDK examples. The workflow consists of three phases: **Review**, where Codex inspects documents without editing; **Repair**, where it makes calculated edits based on identified issues; and **Validate**, where it checks for remaining problems and reports them for further action. This iterative process can be applied to any measurable agent output. The example utilizes intentionally outdated notebooks to showcase how the Codex CLI operates in headless mode for repair tasks, emphasizing structured output for ease of troubleshooting. Key features include a defined set of business rules guiding Codex repairs and a structured output schema for each phase, facilitating an effective feedback loop that helps continuously improve documentation quality.

---

### [getting_started_evals_pre_repair.ipynb](https://github.com/openai/openai-cookbook/blob/98a492bdea11f86b40bdb81aeafac7e4fbcb917e/examples/codex/data/docs/getting_started_evals_pre_repair.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a simplified evaluation fixture for SQL queries, named "Evals," which uses small local datasets instead of extensive benchmarks. It features a pre-defined schema for car data and provides examples of SQL questions related to horsepower and car production year. The code snippet demonstrates how to create evaluation rows that pair user questions with ideal SQL responses. It includes a legacy command for executing evaluations and a placeholder for a log name, indicating the need for error tracking. The results from a sample evaluation are highlighted, reporting an accuracy of 50%. The overall focus is on enabling quick testing of SQL query responses within a manageable scope.

---

### [knowledge_retrieval_pre_repair.ipynb](https://github.com/openai/openai-cookbook/blob/98a492bdea11f86b40bdb81aeafac7e4fbcb917e/examples/codex/data/docs/knowledge_retrieval_pre_repair.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a function calling mechanism for knowledge retrieval based on a fixture derived from an arXiv retrieval example. It introduces two sample paper records related to reinforcement learning, specifically focusing on PPO (Proximal Policy Optimization) and RAG (Retrieval Augmented Generation). The function `get_articles` retrieves articles based on a user query and ranks them by relevance, while `read_article_and_summarize` provides a concise summary of the top article. Additionally, a legacy function-calling schema is maintained for repair purposes. The example emphasizes leveraging local data for efficient execution while retaining old tool-calling patterns for future adjustments.

---

### [qdrant_embeddings_search_pre_repair.ipynb](https://github.com/openai/openai-cookbook/blob/98a492bdea11f86b40bdb81aeafac7e4fbcb917e/examples/codex/data/docs/qdrant_embeddings_search_pre_repair.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a new fixture derived from the Qdrant search example designed for embedding search using a small set of articles to facilitate quick validation. It introduces the embedding model "text-embedding-ada-002" for generating vector representations of article titles and contents. The post provides a Python implementation of an embedding function and a local Qdrant class to enable searching through the articles based on title or content vectors. Users can conduct queries to find relevant articles, with results sorted by their similarity scores. The example concludes by demonstrating a query for "modern art in Europe," outputting the corresponding article title and its score.