---
title: Claude Evolution - Advancing AI for Real-World Solutions
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-25"
---
Here is a concise meta-summary capturing the most significant trends and announcements across the provided blog post summaries:

---

**Meta-Summary of Major Trends and Announcements**

The Anthropic Claude ecosystem is rapidly advancing across four key dimensions: agent capabilities, workflow automation, developer tools, and API/platform enhancements.

1. **Agentic & Multi-Agent Systems**: There is a clear trend toward building both specialized and collaborative agentic solutions. Managed and custom Claude Agents are now handling a range of complex, real-world scenarios, including SRE incident response, security threat analysis, expense approvals, multi-stage research, sales proposal generation, and autonomous code review. Features like memory persistence, session budget control, geographic inference pinning, and adaptive multi-agent orchestration (e.g., orchestrator-worker and advisor setups) are increasingly enabling robust, scalable, and compliant enterprise workflows.

2. **Workflow Automation & Customization**: The introduction and expansion of Claude Skills and dynamic workflows empower users to automate business processes (e.g., financial reporting, document analysis, customer support) with modular, composable tools. Batch tool calling, programmatic tool invocation, automatic tool discovery (including semantic search), and custom skill packaging have dramatically reduced development friction and context overhead, while managed human-in-the-loop mechanisms and outcome grading ensure output quality and regulatory compliance.

3. **Enhanced Developer Experience**: The platform emphasizes streamlined onboarding and high code quality via standardized style guides, audit rubrics, automated validation, and pre-commit hooks. Features like prompt caching, speculative caching, and instant memory/context compaction address latency, cost, and session continuity challenges. Extensive cookbooks, template repositories, and modular AI notebook examples lower barriers for users to adopt advanced patterns, such as RAG architecture or domain-specific notebook development.

4. **API & Platform Developments**: Claude's API has evolved with critical enhancements—citation support, batched message processing, programmatic usage/cost tracking, prompt versioning, responses beyond standard token limits, and PDF/vision integration all broaden Claude's applicability. The Admin API, Message Batches API, and managed deployment options (Docker, Modal, Kubernetes) provide organizations with greater scalability, observability, and operational control, including for regulated and multi-tenant environments.

**Overarching Announcement:**  
Anthropic is positioning the Claude ecosystem as a full-stack, enterprise-grade foundation for practical, trustworthy AI systems—bridging LLM intelligence with rigorous tool-based automation, customizable workflows, and developer-centric infrastructure for real-world business and research applications. Continuous innovation focuses on usability, security, output reliability, compliance, and efficient scaling, reflecting rapid progress toward seamless AGI-enabled process automation.

## New Cookbook Recipes

### [model-check.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/.claude/commands/model-check.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a validation process for the usage of Claude models against the current public models. Key steps include fetching the latest model list from Claude's documentation and reviewing specified files for compliance. Reviewers must verify that model references are current, identify older models that are either superseded or retired, and recommend updates as necessary. Additionally, any internal or non-public model names should be flagged. The post emphasizes the importance of providing clear feedback and instructs reviewers to document their findings directly on the relevant pull request using GitHub Commands.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/.claude/skills/cookbook-audit/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the procedure for conducting a comprehensive audit of an Anthropic Cookbook notebook, utilizing the guidelines from the `style_guide.md`. Key steps include running automated checks for technical issues, performing a manual review based on a provided rubric, and generating a structured audit report detailing score dimensions such as Narrative Quality, Code Quality, Technical Accuracy, and Actionability. The entrance notes emphasize the necessity of understanding the style guide before auditing, with particular importance placed on presenting findings clearly and offering actionable recommendations. Additionally, the post reaffirms that cookbooks serve to teach users practical solutions while fostering a deeper understanding of underlying principles, distinguishing them from mere tutorials or reference documents. The guidelines promote a problem-focused approach, ensure clarity in code presentation, and foster a learning mindset through critical engagement with content.

---

### [style_guide.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/.claude/skills/cookbook-audit/style_guide.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a structured approach for creating a technical notebook focused on solving specific problems rather than detailing the underlying machinery. It emphasizes the importance of beginning with a compelling problem and clearly stating the value it delivers, leading to concrete learning objectives. The recommended format includes a hook, context, learning objectives, and broader applications.

Additionally, it provides a template for prerequisites and setup to ensure users have the necessary knowledge and tools. The guide encourages demonstrating concepts through practical examples rather than exhaustive documentation. Finally, it stresses summarizing key takeaways and suggesting further applications of the lessons learned, ensuring that users can connect the content to real-world scenarios.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Claude Cookbooks," a collection of Jupyter notebooks and Python examples designed for developers utilizing the Claude API. A quick start guide outlines the setup process including dependencies installation and API key configuration. Development commands are provided for code formatting, linting, and testing, emphasizing the use of the Ruff formatter.

Key guidelines for project structure, branch naming, and commit formatting are discussed, emphasizing the importance of maintaining best practices, especially regarding API keys and model usage. Furthermore, new commands like `/notebook-review` and `/model-check` enable users to validate their notebooks and model references efficiently. 

The overall structure is organized into specific directories catering to core capabilities, evaluation patterns, and integration scripts, along with instructions on adding new cookbooks to the repository.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the guidelines for contributing to the Claude Cookbooks project. Key announcements include the prerequisites for development, specifically Python 3.11 and the uv package manager. A quick start guide helps contributors set up their development environment, emphasizing the installation of pre-commit hooks and the configuration of their Claude API key.

The post details the quality standards maintained through automated tools, including the Notebook Validation Stack and Claude Code Slash Commands, which streamline code reviews. Contributors are advised to adhere to best practices regarding notebooks and follow a specific Git workflow, including the use of conventional commits and atomic commit practices. Contributions will undergo automated validation through GitHub Actions, ensuring that code and notebook quality is upheld. Security protocols emphasize the importance of safeguarding API keys. Contributors must agree to the project's MIT license.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/capabilities/knowledge_graph/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a new approach to knowledge graph construction using Claude, an AI model by Anthropic. It simplifies the process by using prompts instead of traditional training for named entity recognition (NER) and relation extraction. Key features include:

- **Structured Outputs:** Extracted typed entities and triples from unstructured text without prior training data.
- **Entity Resolution:** Claude enables grouping of different surface forms under canonical names, improving data coherence.
- **In-Memory Graph Assembly:** Users can create and query a graph in memory before scaling to larger databases like Neo4j or Postgres.
- **Multi-Hop Questioning:** The setup allows for complex queries that require traversing the graph.

The tutorial provides prerequisites, setup instructions, and detailed code examples for extracting and resolving entities, ultimately assembling and summarizing the knowledge graph.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation and optimization of Retrieval Augmented Generation (RAG) systems using Claude, particularly focusing on their application in business contexts. Key highlights include:

1. **RAG Implementation**: The guide outlines setting up a basic RAG system utilizing an in-memory vector database and embeddings sourced from Voyage AI.
  
2. **Performance Metrics**: It introduces a robust evaluation suite to independently measure retrieval and end-to-end performance, showing improvements in metrics such as Average Precision, Recall, F1 Score, Mean Reciprocal Rank (MRR), and End-to-End Accuracy after applying advanced techniques.

3. **Advanced Techniques**: The blog emphasizes summary indexing and re-ranking methods to enhance the RAG system's efficacy.

4. **Resources**: It provides code examples and necessary libraries to facilitate users in building their RAG systems, including details about API integrations.

Overall, these developments significantly enhance the ability of Claude to handle domain-specific inquiries effectively.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude's capabilities for summarizing legal documents, focusing on effective strategies and techniques. Key topics include: 

1. **Prompt Crafting**: Techniques for creating effective prompts, including incorporating examples for improved output through few-shot learning.
2. **Advanced Summarization Techniques**: Methods such as guided and domain-specific summarization tailored to specific legal contexts, enhancing the quality and relevance of the summaries.
3. **Evaluation of Summarization**: Discusses traditional and automated methods for assessing summary quality, emphasizing the subjective nature of summarization evaluation.
4. **Iterative Improvement**: Strategies for refining and optimizing summarization performance.

The guide aims to equip users with a solid foundation in using Claude for summarization tasks while offering best practices for various document types.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development and implementation of a research agent using the Claude Agent SDK, which aims to streamline research tasks by autonomously gathering and synthesizing information. Key features include the ability to execute queries with minimal code, adapt workflows based on discoveries, and provide synthesized responses with citations. The SDK supports both stateless and stateful agents, enabling one-off queries or multi-turn conversations that build on previous findings. The post highlights improvements such as maintaining conversation memory, using system prompts for specialized behavior, and multimodal research capabilities involving image analysis. Additionally, it offers guidance on packaging the research agent for production use, emphasizing best practices for citation and activity monitoring. Overall, the foundation set here prepares users for more complex, enterprise-grade multi-agent systems.

---

### [01_The_chief_of_staff_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)
**Source:** anthropics/claude-cookbooks

In this blog post, the author introduces an AI Chief of Staff agent for a startup using the Claude Code SDK, leveraging the Opus 5.5 model to enhance decision-making capabilities. Key features presented include:

1. **Memory with `CLAUDE.md`**: Allows agents to store context persistently, reducing redundancy in queries and streamlining operations while providing high-level insights over detailed data.

2. **Bash Tool for Python Execution**: Enables the agent to execute Python scripts for complex tasks like data analysis and financial modeling.

3. **Output Styles**: Different markdown-defined output styles cater to diverse audiences, improving communication effectiveness.

4. **Plan Mode**: Facilitates strategic planning by allowing the agent to create detailed plans without executing actions, ensuring thorough preparation and review. 

These features aim to enhance the agent's operational efficiency and decision-making capabilities in high-stakes environments.

---

### [02_The_observability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/02_The_observability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the advancements in integrating AI agents with external systems using the Model Context Protocol (MCP). It introduces the Git MCP server, enabling agents to interact with Git repositories through 13 specialized tools for tasks such as exploring commit histories and managing branches. Additionally, the GitHub MCP server expands capabilities, allowing access to over 100 tools for managing issues, pull requests, and CI/CD workflows on the GitHub platform.

A key focus is on developing an observability agent that can autonomously monitor and analyze CI/CD processes, providing operational summaries and actionable insights for on-call engineers. The post concludes by summarizing the evolution of the Claude Code SDK from basic research agents to complex multi-agent systems, highlighting the potential for scalable production solutions. The complete implementations of the agents are available for further exploration.

---

### [03_The_site_reliability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/03_The_site_reliability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces an **SRE Incident Response Agent** designed to autonomously manage incident investigation and remediation processes. Key features include the ability to investigate incidents, identify root causes, and perform remediations, such as editing configuration files and restarting services, using the Claude Agent SDK with MCP tools for secure infrastructure access. Significant highlights involve teaching how to safely grant the agent write access to infrastructure, synthesizing data from various sources for comprehensive diagnosis, and structuring workflows that differentiate between investigation and remediation tasks. Additionally, instructions for connecting the agent to existing infrastructure and extending its capabilities are provided. Prerequisites include Docker, Python 3.11+, and necessary setup files for creating a simulated environment to test the agent. This innovative tool aims to enhance operational efficiency in managing service incidents.

---

### [04_migrating_from_openai_agents_sdk.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process of migrating an app from the OpenAI Agents SDK to the Claude Agent SDK, exemplified through an expense approval agent. Key features of the Claude Agent SDK include access to built-in tools like `Read`, `Edit`, `Bash`, and a robust permission system. Migration allows developers to use explicit tool schemas and a user-driven execution loop, although it results in increased boilerplate code for tools.

By following the notebook, developers will learn how to replace OpenAI primitives with Claude equivalents without altering business logic, port custom tools, and integrate the SDK with existing observability frameworks. The migration emphasizes using `ClaudeSDKClient` for session management and offers both in-memory and disk-backed options for conversation persistence. This comprehensive guide ensures a smooth transition while harnessing the advanced capabilities of the Claude SDK.

---

### [06_The_vulnerability_detection_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/06_The_vulnerability_detection_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Vulnerability Detection Agent**, leveraging the **Claude Agent SDK** to help security teams identify memory-safety bugs more efficiently. Traditional tools often produce excessive false positives or require extensive manual setup. This agent utilizes built-in features, such as `Read`, `Grep`, and `Glob`, to analyze code and generate actionable findings.

Key capabilities include:

1. Conducting a threat model analysis using a two-turn session, resulting in a refined `THREAT_MODEL.md`.
2. Executing a memory safety bug detection loop that separates the discovery process into find, triage, and reporting stages.
3. Producing structured JSON outputs for findings, ensuring clear communication with downstream systems.

Prerequisites include Python proficiency and specific tools, ensuring users can effectively engage with the framework provided in this cookbook.

---

### [07_Hosting_the_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/07_Hosting_the_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the deployment options for a research agent developed using the Claude SDK, highlighting three tiers of hosting solutions: Docker, Modal, and Kubernetes. Each tier provides a distinct environment while maintaining identical agent code and interfaces.

1. **Docker**: Suitable for internal tools and single-tenant applications where users manage the deployment. It supports ephemeral and hybrid modes for isolated or ongoing sessions.

2. **Modal**: A managed serverless option that offers a publicly accessible URL with scale-to-zero capabilities, ideal for bursty workloads and minimal operational overhead while still providing token-based authentication.

3. **Kubernetes**: Designed for multi-tenant production and regulated environments, it includes advanced features like session isolation, an authenticating gateway, and built-in observability and persistence options.

The post emphasizes the importance of selecting the appropriate tier based on specific deployment needs and operational controls.

---

### [08_Dynamic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/08_Dynamic_workflows.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces dynamic workflows as a feature in Claude Code, designed to enhance task orchestration at scale. This feature allows users to generate JavaScript orchestration scripts for complex tasks requiring multiple subagents, which run in parallel or sequentially. Unlike traditional methods, dynamic workflows enable a structured verification process, maintaining consistency across tasks and optimizing resource utilization. Users can execute workflows from the Python Agent SDK, manage agent concurrency, and switch models for different tasks, enhancing both efficiency and cost-effectiveness. The post provides an example of fact-checking a draft investor update, outlining scenarios where dynamic workflows prove beneficial, such as document audits and research synthesis. It emphasizes the prerequisites for implementation and the associated token costs, with workflows being available on all paid plans and various cloud platforms.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/hosting/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the deployment of a research agent available through three hosting tiers: local Docker, Modal, and Kubernetes. All tiers utilize the same agent image and HTTP interface, with variations in operational mechanics. Key features include an interface contract with endpoints for health checks and message handling, as well as a required environment variable setup. The agent must operate behind a secure gateway to prevent unauthorized access, especially since it lacks authentication by default. Additionally, the directory layout for the hosting setup is provided, featuring necessary files such as Dockerfiles and server scripts. Instructions for building the agent container are also included, emphasizing the correct build context and dependency requirements. For detailed deployment narratives, users are referred to the associated Jupyter notebooks.

---

### [scheduled_repository_reviewer.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/claude_agent_sdk/scheduled_repository_reviewer/scheduled_repository_reviewer.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a recipe for building a scheduled repository reviewer that automates recurring code reviews using an agent. The agent can be configured to run unattended and provide findings based on previous reviews, ensuring continuity through a feature called resumed sessions. Key capabilities include running the review under specific permissions, managing budget and turns, and generating structured JSON outputs. The post outlines prerequisites, including knowledge of Python and the Agent SDK, and offers setup instructions for creating a sample repository to test the reviewer. Additionally, it presents alternatives for users who prefer managed review options. Security features and safeguards are also highlighted to protect against unauthorized access during the review process. The tutorial serves as a guide for implementing a robust, automated review process tailored for ongoing repository audits.

---

### [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/coding/prompting_for_frontend_aesthetics.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Frontend Aesthetics: A Prompting Guide" provides strategies for enhancing the output of Claude, an AI tool for generating front-end designs. It highlights that while Claude possesses design knowledge, it often defaults to generic aesthetics. The guide outlines three effective prompting strategies: focusing on specific design dimensions (typography, color, motion), referencing inspirational sources, and explicitly instructing Claude to avoid common defaults. 

The post includes a distilled aesthetics prompt to drive improved design results and showcases examples where Claude generates more interesting layouts with this guidance compared to outputs without it. Additionally, it suggests the use of isolated prompts for targeted control over individual design elements. Overall, these techniques are positioned as ways to encourage more creative and visually appealing front-end outcomes.

---

### [reproduce_agentic_search_benchmarks.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/evals/agentic_search/reproduce_agentic_search_benchmarks.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the reproducibility of Claude's agentic search benchmark scores (DeepSearchQA, BrowseComp) using the public Messages API. Key insights include the importance of harness configuration, which significantly affects performance, especially during extensive tool calls. The cookbook provides detailed guidance on creating an agentic search loop, understanding the impact of various configuration parameters, and adapting the setup for different benchmarks.

Essential elements covered are:
- The use of programmatic tool calling to enhance efficiency.
- Key configuration parameters such as thinking patterns, effort levels, and context management to optimize long-horizon tasks.
- Methods for evaluating performance, including a focus on compaction instructions and budget management.

The post aims to equip users with the necessary knowledge and tools to accurately reproduce and evaluate Claude's benchmark results.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the functionality and features of Claude's "extended thinking" in version 5.5, which enhances its reasoning capabilities for complex tasks. Key features include the generation of internal reasoning blocks labeled as "thinking," allowing users to observe the reasoning process prior to the final response. The model employs an adaptive thinking approach, enabling it to determine how much processing is required for each request, with effort levels adjustably set from "low" to "max." The post demonstrates examples of setting up the environment, performing token counting, and handling errors related to extended thinking, emphasizing its adaptive effort mechanism, which replaces older token budgeting methods. Additionally, the article addresses scenarios where internal reasoning may be redacted due to safety protocols. Overall, the extended thinking feature aims to provide transparency and structured reasoning to facilitate handling complex queries.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the extended thinking feature of Claude Sonnet 5.5, allowing users to observe step-by-step reasoning prior to final answers and tool usage. Key enhancements include adaptive thinking, which can occur before tool requests and intersperse with reading tool results. This process aids transparency in decision-making. Demonstrations include a single tool call using a weather API and a more complex scenario involving multiple tools, such as weather and news services, allowing Claude to provide informed recommendations based on gathered data. The post emphasizes that thinking blocks must be maintained throughout the conversation, ensuring consistency and context. Users are encouraged to refer to the accompanying documentation for detailed implementation guidance.

---

### [CMA_cap_session_spend.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_cap_session_spend.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the new "session budget" feature for managing costs in AI-driven research sessions. This feature allows users to set a maximum spending limit for individual sessions. When the session's tracked token cost reaches this cap, the session automatically goes idle, preserving its state. Key features include:

- **Setting Budgets**: Users can define a budget when creating a session, with tracking at public list prices.
- **Usage Monitoring**: The system provides real-time updates on token usage and costs.
- **Session Resumption**: If the budget is exceeded, users can raise the cap to resume work without losing progress.
- **Permanent Removal**: Budgets can be cleared but cannot be added once removed.

This functionality is ideal for autonomous sessions, ensuring expenditures remain within predefined limits without human oversight.

---

### [CMA_consult_an_advisor.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_consult_an_advisor.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature allowing a working agent to consult a more capable model, referred to as an "advisor," during task execution. This feature enhances decision-making by enabling the working model to seek guidance on complex cases without committing to potentially irreversible actions. The advisor can be integrated into the agent's configuration under the `multiagent` roster and queried mid-turn, with the system capturing the consultation's costs separately. Concrete examples demonstrate how to set up an advisor, execute consultations while managing token costs, and handle redacted outputs from the advisor model. Furthermore, it facilitates a scenario where the primary agent can interact with both specialists and the advisor within the same session, improving overall response accuracy and efficiency. The process for archiving sessions and environments is also highlighted as part of the feature's usage.

---

### [CMA_coordinate_specialist_team.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_coordinate_specialist_team.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a multi-agent system using Claude Managed Agents to automate the sales proposal writing process for a fictional company, Northstar. The process involves a coordinator agent and three specialized agents: a researcher who identifies industry priorities through web search, a case-study picker that selects relevant examples from a library, and a pricing modeler that formulates pricing options based on internal rules and seat count.

The post outlines the setup, configuration, and interaction of the agents as they collaboratively work to create a tailored proposal. By employing this model, the organization can streamline its proposal creation, ensuring that each agent operates within its scope while providing coordinated outputs. The advantages of this approach include enhanced focus for each role and efficient overall management of the proposal writing process. For further details, readers are directed to the Managed Agents documentation.

---

### [CMA_explore_unfamiliar_codebase.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_explore_unfamiliar_codebase.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a notebook designed for an artificial intelligence agent to explore an unfamiliar codebase. The primary focus is on distinguishing between outdated documentation and the actual code structure. The agent is tasked with decoding the architecture by navigating the file system while using commands such as `ls`, `grep`, and `read`. A key feature is a trap involving a stale `ARCHITECTURE.md` file that misleads the agent if not verified against the code.

Key learnings include the importance of exploration prior to answering questions and the ability to add resources to an ongoing session, enhancing context without restarting. The post also details the integration of specific API calls for uploading files and managing session resources. This is aimed at improving the accuracy and reliability of the agent's conclusions regarding the codebase's architecture.

---

### [CMA_gate_human_in_the_loop.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_gate_human_in_the_loop.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the introduction of custom tools in workflows that require a balance between automation and human oversight, particularly in expense approval processes. It highlights two key custom tools: `decide()`, for straightforward cases that can be resolved automatically, and `escalate()`, for ambiguous cases needing human input. 

The functionality of these tools allows agents to interact with external applications, enhancing the decision-making process by integrating business logic and providing real-time human review. The post outlines two development parts: local event streaming during initial testing and a production webhook pattern for efficient handling of escalations without maintaining long-lived connections. The piece concludes by emphasizing the importance of a calibrated approach in automating workflows that still necessitate human judgment.

---

### [CMA_iterate_fix_failing_tests.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_iterate_fix_failing_tests.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Iterate" notebook, designed to teach users about the Managed Agents API through a hands-on debugging simulation. The agent is tasked with fixing failing tests in a Python codebase via an iterative loop: trying, observing, and fixing until all tests pass. Key components include the agent (with tools and prompts), environment (container setup), and session (a combination of the agent and environment). Users create agents, upload files with bugs, and execute a session where the agent interacts with the event stream to resolve issues. The post highlights using a streaming pattern for real-time updates and offers commentary on the benefits of polling for shorter tasks. Additional resources and extensions for advanced workflows are suggested, aimed at enhancing agent capabilities in various programming scenarios.

---

### [CMA_operate_in_production.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_operate_in_production.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the operation of Managed Agents in a production environment, highlighting essential features for effective deployment. Key announcements include:

1. Adoption of **MCP toolsets** for direct communication with SaaS APIs, minimizing app round-trips.
2. Implementation of **Vaults** for secure storage of user-specific credentials, ensuring isolation and clean audit trails.
3. Use of **Webhooks** to facilitate human-in-the-loop (HITL) workflows efficiently, eliminating the need for persistent HTTP connections.
4. Introduction of **Resource lifecycle verbs** (list, retrieve, update, archive, delete) to manage accumulated workspace resources.
5. **Inference geography pinning** for compliance, allowing agent requests to be executed in specified regions.

The post outlines a practical flow demonstrating these features, culminating in resource cleanup procedures. It emphasizes the importance of session and credential management for scalable, secure, and compliant operations.

---

### [CMA_orchestrate_issue_to_pr.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_orchestrate_issue_to_pr.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a notebook titled "Orchestrate: from issue to merged PR," which demonstrates an agent's ability to execute an end-to-end workflow for bug resolution in a simulated GitHub environment. The process includes interpreting a bug report, fixing the bug, creating a pull request (PR), navigating continuous integration (CI) failures, addressing review feedback, and finally merging the PR. The agent maintains state throughout these stages using a mock CLI and a structured repository setup.

Key features include multi-turn interactions that allow state to persist between messages and mid-chain recovery, where the agent can adapt based on CI feedback or reviewer comments. The post also provides guidance on using a real GitHub repository by replacing mock resources in the setup. This framework aims to enhance agent capabilities in software maintenance through simulated workflows without actual network access.

---

### [CMA_pin_inference_geo.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_pin_inference_geo.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `inference_geo` feature for agents handling regulated data, allowing the geographic location of model requests to be pinned, ensuring compliance with residency policies. The `inference_geo` is defined in the agent configuration and is strictly validated against the workspace's policies during creation, session initiation, and each request, guaranteeing adherence even if policies change post-deployment. Key functionalities include:

- Pinning agents to specific geographies (like “us”).
- Confirming geographical pins during session creation.
- Strict validation that prevents operational sessions from deviating from defined geographic constraints.
- Options to override geographical settings for individual sessions without altering the original agent.

This feature provides vital controls for compliance and residency requirements, ensuring that data processing adheres to specified geographic regions throughout the agent's lifecycle.

---

### [CMA_plan_big_execute_small.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_plan_big_execute_small.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the orchestration pattern, designed to enhance efficiency in AI workloads by separating planning and execution tasks. In this pattern, a frontier model performs planning and synthesis, while inexpensive models handle reading and verification of web sources. The post demonstrates the pattern's capabilities using a web research example, comparing costs and performance against a single-agent approach that adheres to the same verification standards. Key features include the ability to configure a dual-model team with an orchestrator and workers, monitor session events in real-time, and maintain cost restrictions. This strategy can be applied to various tasks requiring heavy data processing, such as document review and code analysis. The conclusions drawn highlight the economic advantages of using smaller models for execution while maintaining rigor and accuracy in information retrieval.

---

### [CMA_prompt_versioning_and_rollback.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_prompt_versioning_and_rollback.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the introduction of prompt versioning and rollback capabilities for a support ticket triage agent using a large language model (LLM). Key advancements include managing prompts server-side, enabling easy updates with immutable versioning. This allows product managers (PMs) to alter prompt configurations without redeploying code. The process involves creating an agent, scoring its performance, and rolling back to previous versions if necessary. 

Main highlights include:
- The creation of a support-ticket triage agent that generates and updates immutable versions.
- The ability to compare performance across versions.
- The option to roll back to an earlier version without deployment, preserving ongoing assessments of new prompts.

This versioning approach retains the integrity of the software development lifecycle while allowing for experimentation and agile iteration on prompt changes.

---

### [CMA_remember_user_preferences.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_remember_user_preferences.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature called Memory in Claude Managed Agents, designed to enhance user interactions by enabling agents to remember customer preferences across sessions. This feature addresses the common issue where agents forget previous conversations, allowing for a more personalized experience.

Key components include:

1. **Memory Store**: A container that holds customer-specific shopping preferences.
2. **Shopping Agent**: A configured assistant capable of checking and updating preferences in the memory store.
3. **Session Illustration**: Two separate sessions demonstrate the agent’s ability to remember customer details, enhancing continuity in recommendations.

The post outlines setup steps, including creating a memory store, defining a shopping agent, and conducting initial and returning customer sessions. It emphasizes the simplicity of integration through a REST API and suggests best practices for using memory stores in production environments, such as seeding information and combining individual and shared memory stores.

---

### [CMA_use_skills_from_a_repo.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_use_skills_from_a_repo.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature for Claude Code that enables automatic discovery and usage of skills directly from GitHub repositories, eliminating the need for manual uploads and version management. When a session mounts a GitHub repository, the system scans the `.claude/skills/` directory, automatically injecting detected skills into the agent's prompt. Each skill is defined by a `SKILL.md` file that includes its name, description, and associated scripts or reference files.

Key elements include strict guidelines on the repository's layout, lenient frontmatter requirements, a cap on the number of skills recognized, and the ability to trigger skills without explicitly naming them in user requests. This integration allows for cohesive development by keeping skills versioned alongside the code they pertain to, while still permitting the use of traditional Skills API for organization-wide tools. The blog emphasizes that this feature is presently available only on Anthropic-hosted environments.

---

### [CMA_verify_with_outcome_grader.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_verify_with_outcome_grader.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Outcomes** feature in Claude Managed Agents, which improves the quality of AI-generated outputs by adding a second agent that acts as a grader. Users create a **rubric** outlining what constitutes a complete and accurate work product, which the grader utilizes to evaluate the writer's output. This system addresses common shortcomings in AI-generated documents by conducting automated checks against the criteria defined in the rubric, ensuring a more thorough review process.

Key features include the ability for the grader to provide detailed feedback based on the rubric, thus facilitating an iterative revision loop. The post illustrates the process through a practical example involving a research brief on EV fast-charging economics, demonstrating how the grader identified necessary improvements that the initial draft overlooked. Overall, this feature streamlines the verification of AI-generated content, enhancing both accuracy and reliability.

---

### [CMA_watch_subagents_live.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/CMA_watch_subagents_live.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a real-time observation framework for multiagent systems using the Managed Agents API. It highlights several key features aimed at enhancing the streaming of subagent outputs during collaborative tasks, specifically within an educational context. Notable enhancements include:

1. **Per-thread delta streaming**: Allows real-time text previews for each session thread.
2. **Initial events on session creation**: Enables simultaneous session creation and activity kickoff.
3. **Effort specification for agents**: Adjusts inference effort levels per agent, optimizing costs for varying roles.
4. **Optional versioning on updates**: Allows flexibility in agent updates without enforcing version conformity.

The use case demonstrates coordinating a team to develop a 7th-grade science unit, involving a standards researcher and a lesson writer. This structured approach ensures synchronized task execution and facilitates live progress monitoring. The notebook provided offers practical implementation guidance.

---

### [data_analyst_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/data_analyst_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines how to create a data analyst agent using Anthropic's Claude Managed Agents. The agent processes CSV files, generating a detailed HTML report with interactive charts. Key features include the use of a reusable environment with pre-installed data analysis libraries, the ability to track the agent's progress via a live event stream, and a user-friendly setup for uploading datasets and retrieving reports.

Users are guided through the process of defining an agent, creating an environment, uploading a dataset, and executing a session that performs data analysis. The narrative-driven output is designed for clarity and actionable insights. Additionally, the post emphasizes the ease of reusing the created agent and environment for future analysis tasks and provides instructions for integrating this functionality into Slack.

---

### [sre_incident_responder.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/managed_agents/sre_incident_responder.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the capability to create a Site Reliability Engineering (SRE) Incident Response Agent using Claude Managed Agents. It outlines a tutorial that demonstrates how to automate initial incident responses by integrating various tools. Key features include the setup of a simulated PagerDuty webhook to trigger actions, a "Skill" for team runbook conventions, and built-in tooling for log investigation in a secure sandbox environment. Custom tools enable the agent to open pull requests and request human approvals before executing changes. The tutorial emphasizes the simplicity of connectivity, as it requires only an API key, and allows for local testing using mocked services. Additionally, the Anthropic Console provides comprehensive observability of every action taken during the incident handling process, ensuring a complete audit trail.

---

### [admin_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/admin_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the new Admin API for easier management of organizations using the Claude API. It outlines key functionalities, including onboarding team members, creating workspaces, inviting users, auditing API keys, and automating tasks through a service account. Features include:

- Authentication via OAuth or Admin API key.
- Streamlined user invitations and role assignments.
- Organization-wide API key audits and rate limit checks.
- Service account creation for CI jobs, facilitating non-human members' functionality.

The Admin API provides REST endpoints to enhance scalability and maintain records without manual processes. It is crucial for Python users with experience in API management and requires certain roles within the Claude Console. Additional resources for usage tracking and workload identity management are also mentioned as related tools.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of the Message Batches API, designed to facilitate the asynchronous processing of large volumes of message requests while achieving cost savings of up to 50%. Key functionalities include creating and submitting message batches, monitoring their processing status, retrieving results, and following best practices for effective batching.

The post provides a comprehensive guide on setting up the environment and offers multiple examples: a basic batch processing scenario with a list of questions, and an advanced batch that utilizes various message types, including text and images. It emphasizes robust error handling and monitoring of batch processing status, ensuring efficient management of requests. The post culminates in a demonstration of how to retrieve and process results once batch processing is complete.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the process of designing effective evaluations (evals) for the AI model Claude to enhance task accuracy through systematic analysis and grading methods. It outlines four key components of an eval: input prompts, model outputs, golden answers for comparison, and scoring mechanisms. The post details three grading methods: 

1. **Code-based grading**: Fast and reliable, ideal for exact matches.
2. **Human grading**: Highly capable but slow and expensive, suitable for more nuanced responses.
3. **Model-based grading**: Utilizes Claude for self-assessment, improving efficiency in evaluations.

The author emphasizes the importance of specific task design and suggests strategies for automating grading to optimize efficiency. The conclusion highlights the need to experiment with model-based grading to determine its effectiveness for various tasks.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a method to generate synthetic test data for prompt templates using the Claude API. It emphasizes the importance of testing these templates with varied inputs to ensure reliable performance, particularly in scenarios where real data cannot be used due to privacy concerns. Key features discussed include functions to extract variables from prompts, construct example data, and generate realistic test cases. The article outlines a systematic approach: defining prompt templates, formatting them for synthetic evaluations, and refining them iteratively based on generated outputs. It highlights two main benefits: enhanced prompt evaluation through realistic examples and improved performance from multishot examples. The post encourages users to leverage this approach to develop more effective AI-driven applications, particularly in customer support contexts.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses techniques for extracting reliable JSON outputs from the Claude language model, specifically using the `claude-haiku-4-5` version due to its support for assistant-message prefill. Key techniques include:

1. **Prefilled Responses**: By including a "{" character in the assistant's prefilled message, users can prompt Claude to output JSON without preamble.
2. **Tagging Outputs**: For complex prompts, users can ask Claude to enclose JSON outputs in specific XML-style tags, simplifying extraction with regex.
3. **Extraction Methods**: The post provides code examples for extracting JSON using string parsing and regex, highlighting the importance of structuring prompts to ensure clean JSON retrieval.

The methods discussed enhance the user's ability to interact with Claude effectively, promoting efficient JSON generation and extraction.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a tutorial on using the Claude AI model to generate SQL queries from natural language questions. It begins with the setup of an environment using the Anthropic API and SQLite to create a test database containing an employees table. After populating the database with sample data, the tutorial introduces a function to interact with Claude, allowing users to input questions and receive corresponding SQL queries. It demonstrates this by querying for the names and salaries of employees in the Engineering department, executing the generated SQL, and displaying the results. The post emphasizes Claude's ability to interpret human language effectively and translate it into SQL syntax, enhancing accessibility to database querying.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Metaprompt, a tool designed to assist with prompt engineering and help users overcome the "blank page problem." By entering a task and optional variable names, users receive a customizable prompt template that can be iterated upon. Key features include easy usability with no coding required and the ability to install the necessary package and input an API key. The notebook facilitates creating single-turn prompts and provides a testing section to validate the generated templates with example inputs. The Metaprompt includes several examples to guide users on creating effective prompts for various tasks, emphasizing the need for customization and awareness that the generated prompts may not be optimal. Overall, the tool aims to streamline the prompt creation process for enhanced user interaction with AI models.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature of the Claude AI platform that allows users to upload PDFs through its API. The author demonstrates how to encode a PDF into base64 for integration with the Claude API, which supports both text and visual elements. An example is provided where a PDF document is utilized to ask the AI for varied tasks, including summarizing the abstract at a kindergarten level, rewriting the Methods section as a recipe, and composing a Homeric poem on the results. This showcases Claude's capability to handle complex document analysis and creativity in response generation. Overall, the post highlights the versatility of Claude AI in processing and interpreting various document formats.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the introduction of prompt caching for the Claude API, which enhances efficiency by allowing the reuse of context in prompts. Prompt caching can reduce latency by over 2x and costs by up to 90% for repetitive tasks. Users can enable this feature through automatic caching—by adding a `cache_control` field—or by setting explicit cache breakpoints for precise control. The post includes examples demonstrating the two methods, emphasizing the advantages of automatic caching in multi-turn conversations. Key details provided include cacheable length, time-to-live (TTL) for cached data, and pricing structures for cache operations. Users are encouraged to start with automatic caching due to its ease of use and effectiveness for most scenarios.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a tutorial for summarizing web page content using Anthropic's Claude API, specifically the Claude Haiku 4.5 model. It begins with instructions to install the required libraries and set up the Anthropic client with an API key. The guide proceeds to demonstrate how to fetch a web page's content using the requests library. After fetching the content, it prepares a prompt for the Claude API to generate a summary. Finally, the tutorial shows how to call the Claude API and print the generated summary. Overall, it provides a clear, step-by-step approach for utilizing the Claude API to summarize web pages efficiently.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a technique to obtain responses from the Claude language model that exceed the standard maximum tokens limit. Specifically, it focuses on the `claude-haiku-4-5` model, which allows for a continuation method using an assistant message to bypass the max tokens restriction. The author demonstrates how to solicit long-form content, such as multiple 1,000-word stories about different animals, while managing to continue from where the first response was cut off. This method, though effective, incurs double charges for input tokens, while maintaining a single charge for the output tokens. The post emphasizes the model's capabilities and provides a practical example of its implementation.

---

### [session_memory_compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/session_memory_compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the importance of managing session memory in long-running conversations with the AI model Claude to prevent loss of critical information. It introduces a new cookbook for proactively managing session memory by implementing instant memory compaction, which eliminates user wait times during context limit interruptions. 

Key features include:

- Writing effective memory prompts to preserve context.
- Utilizing background threading for instant compaction.
- Implementing prompt caching to reduce memory update costs by approximately 80%.
- Choosing compaction strategies based on specific use cases.

The post also provides installation guidance, coding examples, and a comparison between traditional and instant compaction methods, highlighting the benefits of proactive compaction without user delays. This enhancement aims to improve continuity and the overall quality of conversational applications.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses "Speculative Prompt Caching," a technique that enhances user experience by reducing the time-to-first-token (TTFT) during API interactions. 

**Key Features:**
1. **Methodology**: Speculative caching initiates cache warming as a user types, allowing for faster responses when the query is submitted.
2. **Implementation**: The blog includes code snippets for setup and execution, demonstrating both standard and speculative caching methods.
3. **Performance Comparison**: Tests show that speculative caching significantly improves TTFT and total response time compared to standard caching.
4. **Results**: It highlights a percentage improvement in TTFT and total time, emphasizing the effectiveness of this technique with large contexts.
5. **Best Practices**: Recommendations include starting cache warming early and ensuring the same context is used for warming and requests.

Overall, the technique promises notable efficiency gains in API response times, particularly with extensive data contexts.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the introduction of citation support in the Claude API, enhancing the ability of users to track and verify sources of information in LLM-powered applications. This feature is available across all current Claude models and offers several advantages over traditional prompt-based citation methods, including reduced cost and improved accuracy in citations. 

Citations can be generated from various document types: plain text, PDFs, and custom content documents, each formatted appropriately. For instance, citations from PDFs reference specific page numbers. Additionally, the post discusses how structured citation data can improve user interfaces by highlighting sourced information and linking to original documents. The ability to use a `context` field for providing supplemental information not meant for citation is also highlighted. Overall, this feature aims to foster greater transparency and trust in AI-generated responses.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines effective methods for using Claude, an AI model, to analyze charts, graphs, and slide decks. Key features emphasized include Claude's vision and PDF support capabilities, which facilitate the ingestion of visual data. Users can convert PDF documents of charts and graphs into base64 format for Claude to interpret, allowing for detailed queries about the content, such as financial metrics or data trends.

Tips are provided to enhance Claude’s performance, including using a calculator for arithmetic accuracy and asking for color identification in complex charts. For slide decks, employing a narrative approach is recommended, where Claude describes each slide comprehensively to support users, particularly those with visual impairments. The post concludes with examples showcasing the effectiveness of these strategies in extracting valuable insights from visual-heavy presentations.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post describes a comprehensive method for analyzing Apple's 2023 financial earnings reports using AI language models, specifically Claude Haiku 4.5 and Claude Opus 5.5. The process begins with setting up the environment, including installing necessary libraries and establishing a Claude API client. It outlines downloading Apple's earnings release PDFs and converting these documents into base64-encoded images for better processing. The blog details generating prompts for Haiku using data extracted from each PDF, extracting relevant information concurrently with sub-agent models, and creating a response to a user question regarding net sales changes throughout the year. It concludes with generating and executing Python code using matplotlib to visualize the revenue growth trend, demonstrating the effective integration of AI with financial data analysis.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide to using the Claude API for tracking usage and costs programmatically. Key features include monitoring token consumption, analyzing cache efficiency, and obtaining detailed financial breakdowns. Two primary endpoints—the Messages Usage API and Cost API—enable users to access token-level data and financial information in USD, respectively.

Common use cases outlined include usage monitoring for cost optimization, cost attribution across teams, and financial reporting. The API supports various time granularities for data retrieval and allows for grouping and filtering of results based on different parameters. Additionally, the post includes examples of connecting to the API, querying usage and cost data, and handling pagination for larger datasets. Users are encouraged to securely manage their API keys.

---

### [async_multi_agent_orchestration.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/patterns/agents/async_multi_agent_orchestration.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post explores **multi-agent orchestration** patterns in the **Claude Opus 4.8** system. It highlights two key orchestration modes: a **fixed N-agent team** and **async subagents**. Using the **Anthropic Python SDK** and `asyncio`, users can set up asynchronous messaging mechanics among agents.

Key features include a **message hub** that facilitates communication between agents, and two core messaging tools: **SEND_MESSAGE** and **WAIT_FOR_MESSAGE**. 

The post details two scenarios: 

1. A **fixed N-Agent Team** where agents introduce themselves and the lead summarizes their interactions.
2. **Async Subagents** where a lead spawns multiple helpers to perform tasks concurrently while reporting their status back.

The post encourages users to integrate their own tools and workflows into this framework, providing a basis for further customization and development in multi-agent systems.

---

### [orchestrator_workers.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/patterns/agents/orchestrator_workers.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the orchestrator-workers workflow, a dynamic system for handling complex tasks by leveraging a central LLM (Large Language Model) that analyzes and delegates subtasks to specialized worker LLMs. This approach allows for flexibility in task decomposition, adapting to specific inputs without relying on pre-defined subtasks. 

The system is particularly beneficial for generating content variations, such as marketing copy, and provides structured XML communication for coordination. Key features include:

1. Task analysis and adaptive subtask generation.
2. Support for complex content creation needing diverse perspectives.
3. Error handling to manage empty or malformed responses from workers.

Limitations include potential latency and costs due to multiple LLM calls. The post recommends enhancing the implementation with parallel execution and retry logic to improve performance. Overall, this workflow is ideal for content generation and tasks with variable requirements.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/skills/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Claude Skills Cookbook," a guide to utilizing Claude's Skills feature for document generation, data analysis, and business automation. Key announcements include the ability to create professional documents (Excel, PowerPoint, PDF) and to perform complex data analysis while adapting to company workflows. The cookbook features three main notebooks: an introduction to Skills, financial applications, and custom skills development. Notable features include a progressive disclosure architecture to optimize token usage and the capacity to create and deploy custom skills. It provides practical examples and realistic financial datasets to illustrate functionality. Users must set up their environment with Python and an Anthropic API key to start leveraging these capabilities. The post emphasizes the potential for automating financial reporting, data analytics, and document generation while encouraging user contributions and engagement with additional resources.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's Skills feature, allowing users to create professional documents, analyze data, and automate workflows with tools like Excel, PowerPoint, and PDF generation. Key announcements include the setup process for Claude’s Skills, which requires Python 3.8+, an Anthropic API key, and specific environment configurations.

The Skills are modular packages that enhance Claude's capabilities, offering expert-level performance, reduced token usage, and seamless composability for complex tasks. Users can discover available skills, including pre-built Anthropic-managed options and custom creations, through a dedicated API.

Notably, the post outlines practical examples for generating Excel spreadsheets with embedded formulas and formatting, emphasizing the expected generation times and troubleshooting steps. Overall, the Skills feature aims to streamline business workflows while ensuring reliability and efficiency in document creation.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the new capabilities of Claude's Skills specifically tailored for financial applications, enabling users to build financial dashboards, conduct portfolio analyses, and automate reporting tasks seamlessly using Excel, PowerPoint, and PDF formats. Key features include the ability to generate comprehensive financial models with formulas and charts in Excel, create professional presentations summarizing key financial data in PowerPoint, and produce multi-format automated reports. The post also introduces specific use cases, such as financial dashboard creation, portfolio analysis workflows, and automation of reporting pipelines. The integration of Claude's file creation abilities enables efficient handling of complex financial documentation. Overall, these features are designed to enhance productivity and accuracy in financial data management.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Building Custom Skills for Claude" provides a comprehensive guide on how to create, deploy, and manage custom skills tailored to specific organizational workflows and knowledge. Key highlights include:

1. **Definition of Custom Skills**: These skills encapsulate unique organizational methodologies and can automate complex workflows while maintaining privacy.
2. **Example Implementations**: The post outlines three specific examples—Financial Ratio Calculator, Company Brand Guidelines, and a Financial Modeling Suite.
3. **Architecture Overview**: It details the required structure of skills, emphasizing the importance of the `SKILL.md` file, which outlines instructions and uses YAML frontmatter.
4. **Skill Management**: Discusses version control and the ability to update or delete existing skills.
5. **Best Practices**: Provides guidelines for effective skill creation and maintenance.

This guide equips users to extend Claude's functionality effectively, allowing integration of specialized knowledge into its operations.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a step-by-step guide for using Deepgram to transcribe audio files and leveraging Anthropic's capabilities to generate interview questions based on those transcriptions. Users are instructed to set up a notebook, install necessary dependencies, and provide audio file URLs for transcription. The process involves creating a Deepgram client, configuring audio analysis options, and saving the generated transcripts as JSON files. Finally, the post demonstrates how to utilize Anthropic to analyze the transcript and produce insightful, open-ended interview questions. The guide emphasizes practical steps and troubleshooting tips for a seamless user experience.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of a Basic Retrieval-Augmented Generation (RAG) Pipeline using LlamaIndex. The process involves several key steps: setting up the Language Learning Model (LLM) and embedding model using Anthropic's `Claude Opus 5.5`, downloading and loading data, indexing it with `VectorStoreIndex`, and establishing a query engine. The post outlines installation commands for necessary packages, including `llama-index` and its components for Anthropic and Hugging Face embeddings. An example of querying the indexed data is also provided, showcasing the functionality of the pipeline. This tutorial demonstrates how to effectively utilize LlamaIndex for handling data and querying it efficiently.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the creation of a Retrieval-Augmented Generation (RAG) system using the `DocumentAgents` concept and `ReAct Agent`. Key steps involve installing necessary libraries such as `llama-index` and setting up logging for Jupyter notebooks. Users are guided to import documents from Wikipedia for five cities: Toronto, Seattle, Chicago, Boston, and Houston. The post details how to load the documents and build a ReAct agent for each city, incorporating vector and summary indices to facilitate specific queries. An overarching vector index allows users to choose the appropriate agent based on the nature of their questions. Finally, test queries showcase the system’s ability to retrieve precise information or summaries, demonstrating its functionality.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the ReAct Agent, showcasing its integration with various tools such as simple calculators and QueryEngine. It emphasizes the installation requirements, including the `llama-index` and necessary API keys for the Anthropic LLM, specifically using Claude Opus 5.5. Key features include the creation of tools for mathematical operations like addition and multiplication, and the implementation of a ReAct Agent that can process queries step-by-step. The post also demonstrates how to create QueryEngine tools using 10K SEC filings from Uber and Lyft, allowing users to ask complex financial queries. Finally, it highlights the agent's capabilities to analyze and compare data from these filings.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, a tool designed to efficiently route user queries to various query engines that handle different indexing methods or document sets. Key features include the installation of necessary packages (`llama-index`, `llama-index-llms-anthropic`, and `llama-index-embeddings-huggingface`), implementation of logging, and the setup of an LLM using Anthropic's `Claude Opus 5.5`. The post outlines the process for loading documents, creating summary and vector indices, and establishing query engines for summarization and contextual retrieval. Ultimately, it showcases the creation of a `RouterQueryEngine` that utilizes LLMSingleSelector for routing and demonstrates testing with specific queries about a Paul Graham essay. The implementation enhances retrieval efficiency by leveraging multiple query engines.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, a tool designed to tackle complex queries by breaking them into simpler sub-queries across multiple documents. Key features include installation instructions for necessary libraries, setup for the Anthropic `Claude Opus 5.5` LLM, and embedding models. The process is demonstrated using Uber and Lyft's 2021 SEC filings, where documents are loaded, indexed, and queried for specific financial information. The `QueryEngineTool` is created for each company, which are then integrated into the `SubQuestionQueryEngine` allowing for comparative queries. Examples of queries such as revenue comparisons and investment analyses highlight the practical applications of this engine in analyzing corporate financial data.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post outlines a tutorial on building a Retrieval-Augmented Generation (RAG) system using Claude models and a MongoDB database. Key components include:

1. **Setup Instructions**: It details the installation of necessary libraries and configuration of a MongoDB database for storing tech news articles.
2. **Data Handling**: The tutorial covers methods for creating vector search indexes and preparing data for ingestion into the database.
3. **Embedding Generation**: Instructions on using the VoyageAI API to generate embeddings from the article descriptions are included.
4. **Database Operations**: Steps for creating a MongoDB collection, data ingestion, and performing vector searches against user queries using an aggregation pipeline are provided.
5. **Integration with Claude**: The tutorial concludes with instructions for using the Claude model to process user queries and refine responses through vector searches, enhancing contextual accuracy.

Overall, it serves as a comprehensive guide for developers looking to implement a RAG system for enhanced chatbot capabilities.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the updates and enhancements introduced in LangChain v1, particularly focusing on the implementation of retrieval-augmented generation (RAG) agents. Key changes include a more transparent initialization and usage of agents, allowing developers to engage more directly with the agent logic. The piece illustrates building a RAG agent using Claude as the language model, Voyage AI for knowledge embeddings, and Pinecone for knowledge retrieval. It outlines the installation prerequisites, including necessary API keys, and details in setting up a knowledge base with embeddings and a Pinecone database. Additionally, it covers creating an XML agent tailored for Anthropic models, integrating conversational memory for maintaining context, and demonstrates how to build a chat interface that remembers previous exchanges. Overall, the post provides practical guidance for leveraging LangChain v1 in developing advanced AI agents.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a tool evaluation process utilizing AI agents to autonomously assess tasks from an XML evaluation file. Key components include a structured evaluation prompt that guides agents to execute tasks, document their approaches, provide feedback on tool utility, and return final responses in a predefined format. The main evaluation function parses the XML file to extract evaluation tasks and uses a simplified loop to evaluate each one with specified tools. 

The performance of the evaluation is summarized in a report showcasing accuracy, average task duration, and tool call statistics. A basic calculator tool is demonstrated to validate the approach, despite a lack of detailed descriptions in its schema. The results are intended to aid in understanding the efficiency and effectiveness of AI tools in task completion and provide actionable feedback for improvement.

---

### [automatic-context-compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/automatic-context-compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of **Automatic Context Compaction** in the Claude Agent Python SDK, aimed at enhancing the performance of long-running agentic tasks that often exceed context limits due to extensive token usage. It introduces a new parameter, `compaction_control`, which automates the management of conversation history by summarizing previous discussions once a specific token threshold is surpassed. 

Through the example of an **agentic customer service workflow**, it demonstrates how this feature allows agents to process multiple support tickets efficiently without reaching context limits. Key benefits include reduced token consumption, preserved task quality, and maintaining focus across iterations. The post provides a clear setup guide and showcases significant improvements in token usage efficiency when employing context compaction, ultimately enabling smoother task completion while emulating natural human workflows.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post describes a tutorial on integrating a calculator tool with the Claude AI model to perform arithmetic operations. Key steps include:

1. **Environment Setup**: Installing the required libraries and establishing a connection to the Claude API.
2. **Tool Definition**: Creating a calculator function that sanitizes user input to prevent invalid expressions and uses the `eval()` function for evaluation. This is cautioned against for production use but serves as a demonstration here.
3. **Interaction with Claude**: Implementing a method for Claude to process user queries, utilize the calculator tool for computations, and return results.
4. **Practical Demonstration**: Providing example math questions to showcase how Claude can perform calculations using the newly created tool.

The tutorial emphasizes the importance of safety in code handling user input while exploring Claude's capabilities.

---

### [context_engineering_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/context_engineering/context_engineering_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses effective context engineering for AI agents, particularly addressing the challenges of managing context in long-horizon tasks. It introduces the concept of "context rot," where increased token accumulation negatively impacts model recall. The article focuses on three main strategies for efficient context management: **compaction**, which summarizes context to maintain performance; **tool-result clearing**, which manages excess tool outputs by keeping only a record of tool usage; and **memory**, which utilizes persistent external storage for tracking progress across sessions. The author demonstrates how these strategies can be implemented using the Anthropic API in a long-running research agent scenario, emphasizing their importance for maintaining high-quality interactions. Techniques for optimizing these tools for specific workloads are also provided, along with a practical use case involving the analysis of scientific documents.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a step-by-step guide to creating a customer service chatbot using the Claude API and client-side tools. Key components include:

1. **Environment Setup**: Installation of the necessary libraries and setup of the Claude API client.
2. **Tool Definitions**: Three main client-side tools were created—`get_customer_info`, `get_order_details`, and `cancel_order`—each designed to assist with specific customer service tasks.
3. **Synthetic Response Simulation**: Due to the lack of real data, synthetic responses were generated for customer and order queries to demonstrate functionality.
4. **Processing Tool Calls**: A function was developed to handle requests from the chatbot, utilizing the defined tools.
5. **User Interaction**: A mechanism for user interaction with the chatbot was implemented, allowing it to respond based on user queries and tool results.
6. **Testing**: Sample queries were tested to verify the chatbot's ability to assist customers effectively.

The post encourages further integration with real databases for expanded capabilities.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post presents a comprehensive guide on enhancing AI agents, particularly Claude, to handle long-running tasks and multi-session interactions effectively. Key features include:

1. **Memory Tool**: Enables cross-conversation learning, allowing Claude to retain insights from past interactions, thus improving its responsiveness and efficiency in future sessions.
  
2. **Context Editing**: Employs two strategies—clearing outdated tool results and managing thinking blocks—to optimize the usage of context windows during lengthy discussions.

3. **Use Cases**: The guide highlights practical applications, such as a code review assistant, research assistant, customer support bot, and data analysis helper, demonstrating significant improvements in task management over time.

4. **Implementation Details**: It outlines setup requirements, code examples, and best practices for integrating memory features, aimed at developers familiar with Python and REST APIs.

Overall, this framework empowers AI agents to learn and adapt, enhancing their utility across various domains.

---

### [parallel_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/parallel_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses enhancements to the Claude language model to encourage efficient parallel tool calls using a "batch tool." By default, Claude can invoke multiple tools simultaneously, but it may still call them sequentially in certain scenarios, resulting in unnecessary delays. The introduction of a batch tool aims to streamline this process by allowing multiple tool calls to be wrapped and executed in one go.

The post includes a demonstration where Claude is configured with tools for retrieving weather and time information. It explains how this batch tool can be utilized to optimize the invocation of multiple tools, allowing for all results to be returned in a single response. This new functionality is positioned as an optional yet beneficial pattern, ensuring that applications can minimize the number of round trips during tool interactions.

---

### [programmatic_tool_calling_ptc.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/programmatic_tool_calling_ptc.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Programmatic Tool Calling (PTC) with the Claude API, which enables Claude to execute multiple tool calls programmatically, significantly reducing latency and token consumption. PTC allows the model to manage large datasets effectively by writing targeted code, bypassing the need for multiple requests through the model's context window.

The post demonstrates PTC using a mock API for team expense management, highlighting its advantages over traditional tool calling methods. Key features include the ability to analyze employee expenses more efficiently by managing extensive metadata and streamlining sequential dependencies.

To successfully implement PTC, readers are instructed on prerequisites, setup, and code examples for both traditional and PTC methods. Ultimately, this enables users to optimize their applications by leveraging Claude’s capabilities more effectively in analyzing and processing complex data.

In summary, PTC marks a significant enhancement in the Claude API, facilitating more efficient data processing and analysis.

---

### [threat_intel_enrichment_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/threat_intel_enrichment_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a "Threat Intelligence Enrichment Agent" designed to automate the workflow of security analysts by using Claude's tool capabilities. This agent takes raw Indicators of Compromise (IOCs) such as IP addresses or file hashes, queries various threat intelligence sources (like VirusTotal or AbuseIPDB), and correlates findings to generate structured, analyst-ready reports.

Key features include:

- Design of tool schemas for effective intelligence source selection.
- Creation of a loop that allows for chaining tool calls based on results.
- Multi-source correlation and mapping to the MITRE ATT&CK framework.
- Conversion of free-text analysis into JSON format for integration with other systems.

The setup requires Python 3.10+, an Anthropic API key, and familiarity with Claude’s tool use. The architecture is adaptable for real API integration, making it useful for both product development and enterprise SOC automation.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the `tool_choice` parameter in Claude, which governs how the AI interacts with various tools provided. The parameter can take three values: `auto`, `tool`, and `any`. 

1. **`auto`**: Claude decides when to use tools based on his confidence in answering a question. The post illustrates this with examples, such as Claude using a web search tool only when uncertain about current events.

2. **`tool`**: This forces Claude to always use a specific tool. It includes guidance for ensuring effective tool use with proper prompt engineering.

3. **`any`**: This mandates that Claude must use any tool available, suitable for applications like SMS chatbots.

Overall, the post emphasizes the importance of prompt clarity and the strategic use of the `tool_choice` parameter to optimize Claude's tool utilization.

---

### [tool_search_alternate_approaches.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/tool_search_alternate_approaches.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses innovative techniques for tool discovery using Claude. Two primary strategies are introduced: 

1. **Tool Discovery without Search**: By incorporating tool names in Claude's system prompt and utilizing a `describe_tool` function, tools can be fully loaded into context without semantic searching.
2. **Dynamic Loading of Tools**: Tools may be excluded from the request's `tools` list until needed, streamlining requests even when numerous tools are accessible.

The post emphasizes the importance of using `defer_loading=True`, which prevents cache invalidation and allows efficient management of interactions with potentially thousands of tools. Additionally, it outlines prerequisites for users, such as Python fundamentals and familiarity with Claude's tool use, and presents a method for implementing a conversation loop that supports dynamic tool loading. The insights shared allow developers to maintain focused requests while scaling their applications effectively.

---

### [tool_search_with_embeddings.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/tool_search_with_embeddings.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new semantic tool search feature for Claude, designed to enhance application scalability by efficiently managing large tool libraries. By utilizing a single `tool_search` meta-tool, Claude can discover relevant capabilities dynamically instead of requiring all tool definitions upfront. This method significantly reduces context window utilization—by more than 90%—and allows for seamless scaling to thousands of tools. The guide details prerequisites for implementation, including basic Python knowledge and API key setup, followed by step-by-step instructions on creating a tool library, generating semantic embeddings, and implementing the search functionality. Additionally, it demonstrates how Claude can use natural language queries to find tools, thereby improving usability and efficiency in applications that rely on extensive tool ecosystems.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the creation of a note-saving tool using Pydantic for input validation and the Claude API. Key steps include:

1. **Environment Setup**: Installation of necessary libraries and initialization of the Claude API client.
2. **Pydantic Model Definition**: Creation of models for Note, Author, and SaveNoteResponse to enforce schema validation.
3. **Tool Configuration**: Definition of the note-saving tool, specifying input parameters and types.
4. **Function Implementation**: Development of a `save_note` function and a `process_tool_call` function to handle tool invocation and note processing.
5. **User Interaction**: Implementation of a chatbot interaction sequence that utilizes the defined tool, processes user input, and generates an appropriate response.

The approach enhances reliability in note-saving operations by ensuring responses adhere to the expected structures using Pydantic models.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bfe50e59dbb4f5546a0af9ca36ebb77e637c9ce1/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for integrating Vision with tool usage to extract structured nutrition information from an image of a nutrition label. It begins by detailing the setup process, requiring the installation of specific libraries and initializing the Claude API client. The core feature presented is the custom tool named "print_nutrition_info," designed to extract data such as calories, total fat, cholesterol, total carbs, and protein from the nutrition label image. The post provides a step-by-step guide on how to load the image, encode it in base64, and prompt the model to utilize the tool for extraction. The response handling captures the output from the tool if it is successfully invoked. This process showcases the practical application of AI in analyzing and structuring nutritional data from images.