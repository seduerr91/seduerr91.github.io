---
title: Empowering Automation - Unveiling OpenAI's New APIs and Tools
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 10-20"
---
**Meta-Summary:**

The latest announcements unveil a suite of powerful new APIs and tools for advanced automation, research, evaluation, and analytics within the OpenAI ecosystem. Central trends include the launch of the Deep Research API, which automates complex research workflows through autonomous planning, web search, synthesis, and integration with both public and internal data sources. Detailed guides, such as the Deep Research Agents Cookbook, support the creation of multi-agent pipelines and stress enriched queries, advanced orchestration, privacy (zero data retention for enterprises), and nuanced multi-step reasoning.

Complementary enhancements include expanded API-based analytics, with the Completions Usage API and Costs API enabling granular usage, project-level breakdowns, and spend tracking through accessible programmatic interfaces and robust visual tools. Finally, model evaluation capabilities have advanced with the introduction of the Evals API for audio, supporting direct grading of audio outputs without transcription, broadening applicability to domains like customer support.

Overall, these announcements highlight a concerted focus on empowering developers and organizations to build sophisticated, privacy-conscious research and evaluation workflows, deeper analytics, and robust agent-based automation, underscored by user control, extensibility, and data insights.

## New Cookbook Recipes

### [introduction_to_deep_research_api.ipynb](https://github.com/openai/openai-cookbook/blob/b5b0fba65bdc014e32f3537ce4db770fd7052697/examples/deep_research_api/introduction_to_deep_research_api.ipynb)
**Source:** openai/openai-cookbook

The Deep Research API has been launched to automate complex research tasks that require in-depth reasoning, planning, and synthesis of real-world information. This API allows users to provide high-level queries and receive structured, citation-rich reports. Key features include the ability to plan sub-questions, execute web searches, and synthesize results autonomously, with two models available: `o3-deep-research-2025-06-26` for detailed analysis and `o4-mini-deep-research-2025-06-26` for faster, lightweight output.

The API supports background processing and illustrates output along with inline citations and source metadata. Additionally, it can integrate with internal documents through a Model Context Protocol (MCP) that makes internal data accessible during research tasks. The deployment of this API emphasizes the importance of precise and detailed input prompts for optimal results, giving developers significant control over research task framing.

---

### [introduction_to_deep_research_api_agents.ipynb](https://github.com/openai/openai-cookbook/blob/b5b0fba65bdc014e32f3537ce4db770fd7052697/examples/deep_research_api/introduction_to_deep_research_api_agents.ipynb)
**Source:** openai/openai-cookbook

The "Deep Research Agents Cookbook" introduces a comprehensive guide for creating advanced research workflows with the OpenAI Deep Research API and Agents SDK. Key features include orchestrating single and multi-agent pipelines, enriching user queries to enhance output quality, and integrating web search capabilities. Users can efficiently tackle tasks needing planning, synthesis, or multi-step reasoning.

A key highlight is the Basic Research Agent, which employs the `gpt-5.6-terra` model and uses the `WebSearchTool` for deep research, providing streaming results. Additionally, a structured four-agent pipeline enhances research quality through clarification and detailed instruction generation. The cookbook emphasizes a zero data retention model to enhance privacy for enterprise users. Proposed use cases focus on complex inquiries rather than simple fact retrieval. 

Overall, the guide offers robust methods for deploying and maximizing the capabilities of Deep Research Agents in sophisticated research tasks.

---

### [completions_usage_api.ipynb](https://github.com/openai/openai-cookbook/blob/017f7fdca3ba949676a3e54322c68b08f06589c8/examples/completions_usage_api.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses an extended example of using the OpenAI Completions Usage API, detailing how users can access and visualize detailed usage data beyond the default dashboards. Key features include retrieving completions usage data, parsing the JSON response into a pandas DataFrame for analysis, and using matplotlib for visualizations such as bar charts and pie charts. The example illustrates grouping token usage by model and project, thereby enhancing data insights. Best practices for API key management and optional parameters for data retrieval are also highlighted. Visual representations, including bar charts of token usage and the distribution of model requests, are provided to help users better understand their data trends. Additionally, the post introduces the Costs API for tracking expenses related to API usage.

---

### [EvalsAPI_Audio_Inputs.ipynb](https://github.com/openai/openai-cookbook/blob/46981091cbec72f2354e49915003a50a7e32ff34/examples/evaluation/use-cases/EvalsAPI_Audio_Inputs.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the Evals API for evaluating model-generated audio responses using OpenAI's Evals framework. It highlights the newly added capability to grade audio outputs directly, eliminating the need for transcription to text, which enhances evaluations in scenarios like customer support. Key features demonstrated include generating responses to audio prompts, aligning responses with reference answers, and grading audio outputs using dedicated audio models. 

The post details the process of setting up audio data for evaluation using the Big Bench Audio dataset, creating a JSON-like data source, and configuring grading criteria with specific configurations for both audio and text inputs. It concludes by outlining the workflow for running and displaying evaluation results on the OpenAI Evals dashboard, inviting users to adapt the example for their specific use cases.