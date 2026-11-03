---
title: AI Evolution - Innovations Shaping the Future of Work
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 11-03"
---
### Meta-Summary: Key Trends and Announcements from All Blog Posts

**1. Rapid Ecosystem Expansion and Managed Agent Innovations**  
Both Anthropic (Claude) and OpenAI are significantly expanding their developer ecosystems through “Cookbooks” and SDKs that offer turnkey recipes, guidelines, and structured workflows for building with LLM APIs. Anthropic especially is advancing with the launch of Claude Managed Agents—a hosted, stateful agent platform featuring real-time data persistence, integration with third-party systems like MongoDB Atlas, and robust human-in-the-loop options. Examples span from data analysis and SRE incident response to fraud review and Slack bots.

**2. Powerful Automation and Workflow Orchestration**  
There is strong emphasis on automating complex, multi-step workflows through agent orchestration, dynamic subagent management, and specialized agent patterns (e.g., orchestrator, scheduled review agents, research and chief of staff agents). Notable features include persistent memory, session browsing and management, audit trails, and prompt versioning with rollback for operational efficiency and compliance.

**3. Usability, Developer Productivity, and Community Contribution**  
Both platforms promote clear contribution guidelines, code standards (PEP8, test validation), and community collaboration through structured PR processes and open support channels. Features like skills discovery, custom skill creation/deployment, and repository integration lower friction for extension. Notebooks and practical cookbooks make advanced practices accessible to a wide audience, including best practices for project structure, testing, and maintaining metadata.

**4. Security, Observability, and Administration**  
New features focus on security (API key management, permission layers, integration of vulnerability detection agents, separation of application/database credentials), observability (CI/CD monitoring, real-time streaming of subagent activity, comprehensive log/event tracking), and administrative scalability (organization-wide admin APIs for user/workspace management and auditing).

**5. Advanced Retrieval, Summarization, and Document Processing**  
Innovations in retrieval-augmented generation (e.g., Contextual Embeddings, hybrid search), smarter citation support, and advanced summarization (legal document handling, visual data extraction from PDFs) enable more accurate, traceable, and context-aware outputs. These are key enablers for enterprise-grade applications in customer support, finance, legal, and compliance scenarios.

**6. Performance and Cost Optimization**  
Multiple strategies address latency, context window management, and cost—such as automatic context compaction, instant memory compaction, prompt caching, orchestration patterns (using a mix of large and small models), and scalable workflows for thousands of parallel agents. These contribute to faster, more resource-efficient applications tailored to operational needs.

**7. Specialized Applications and Business Process Automation**  
A wide range of specialized, production-ready agent recipes are showcased, including financial dashboards, portfolio analytics, automated reporting, code and security reviews, and content moderation pipelines. The new Skills and custom skills architecture allows organizations to automate domain-specific workflows while maintaining privacy and adaptability.

**8. Data-Driven Evaluation and Improvement**  
Frameworks for tool evaluation, synthetic data generation for prompt testing, structured grading and benchmarking, and telemetry on caching/latency provide feedback loops for continuous improvement and reliability.

---

**In summary:**  
The blogs collectively highlight a major maturation in the agentic AI landscape—moving from static LLM APIs to composable, secure, observable, and highly automatable systems for real-world workflows. Managed agents, robust SDKs, skill and workflow orchestration, cost management, and a relentless focus on usability and governance are equipping organizations to integrate advanced AI safely and efficiently across a wide spectrum of business and analytical domains.

## New Cookbook Recipes

### [pull_request_template.md](https://github.com/openai/openai-cookbook/blob/500df203bbf57d5c9151194c5d341afeda235ef3/.github/pull_request_template.md)
**Source:** openai/openai-cookbook

The blog post outlines a pull request (PR) aimed at adding new content to the OpenAI Cookbook. The motivation behind these changes is to enhance the overall quality and usability of the cookbook by ensuring that all new contributions adhere to established guidelines. Key steps mentioned include completion of the new Cookbook submission process and thorough review of the new recipe against the Cookbook rubric. Overall, the changes are positioned to improve the resource for users, making it more informative and aligned with best practices.

---

### [AGENTS.md](https://github.com/openai/openai-cookbook/blob/500df203bbf57d5c9151194c5d341afeda235ef3/AGENTS.md)
**Source:** openai/openai-cookbook

The blog post outlines comprehensive guidelines for organizing contributions to the OpenAI API cookbook. Key announcements include the structure for project organization, recommending the placement of runnable examples in `examples/<topic>/`, and detailed instructions for adjusting `registry.yaml` and `authors.yaml` for metadata updates. It emphasizes best practices for coding style, testing, and pull requests, advocating adherence to PEP 8 standards and thorough validation of notebook structures before submission. Recent learnings highlight technical nuances related to virtual environments, pytest imports, and grading methodologies, aiming to enhance project consistency, accuracy, and functionality. Contributors are urged to ensure documentation and metadata synchronization for effective collaboration and content publication.

---

### [CONTRIBUTING.md](https://github.com/openai/openai-cookbook/blob/500df203bbf57d5c9151194c5d341afeda235ef3/CONTRIBUTING.md)
**Source:** openai/openai-cookbook

The OpenAI Cookbook is a collaborative platform aimed at providing practical resources for utilizing OpenAI technologies. Contributors are encouraged to fix existing content or submit new examples and guides, with contributions reviewed on a non-guaranteed basis. The blog outlines a structured process for submitting proposals, including sharing ideas with maintainers, ensuring author profiles are complete, and obtaining necessary approvals. Contributors must also select appropriate tags for their submissions and prepare their changes by validating code and content accuracy. Lastly, the blog provides guidance on how to open a pull request, emphasizing the need for clarity, correctness, and completeness for acceptance. Support channels for various issues related to the Cookbook or OpenAI API are also described.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Claude Cookbooks," a collection of Jupyter notebooks and Python examples designed for developers using the Claude API. It provides a Quick Start guide for setting up the environment and configuring the API key. Core development commands include formatting, linting, and testing, all supported by the `make` and `uv` tools. 

Key rules emphasize security practices for handling API keys, managing dependencies, and ensuring the use of current Claude models. The structure of the project is described, categorizing various capabilities, evaluations, and utilities. It also outlines a process for adding new cookbooks, including necessary steps for quality checks and submission. Special Slash Commands are available for code review, model validation, and link checks to enhance development efficiency.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/README.md)
**Source:** anthropics/claude-cookbooks

The Claude Cookbooks have been launched to assist developers in utilizing the Claude API effectively. Key features include easily copyable code snippets primarily in Python, along with guides that are adaptable to other programming languages. Users are encouraged to obtain a Claude API key and explore the foundational course on API fundamentals for a comprehensive start.

The Cookbooks contain a variety of resources, including techniques for text classification, retrieval augmented generation, and effective summarization. Advanced capabilities are offered for integrating Claude with external tools, conducting multimodal tasks, and employing advanced techniques such as prompt caching and cost/latency optimization.

Community contributions are welcomed to enhance the resource further. Additionally, links to Anthropic’s developer documentation, support, and a Discord community are provided for further engagement.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/capabilities/content_moderation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post provides a comprehensive guide to building a content moderation pipeline using Claude, focusing on efficiently enforcing written content policies. Key highlights include the creation of a deterministic, auditable ruleset derived from human-readable policies, designed to handle various content types like ads and user comments.

Core components of the pipeline involve defining an extraction schema that allows the system to interpret content accurately, creating JSON rules with a three-valued logic structure, and employing a robust rule engine that ensures consistent decision-making without model involvement. The proposed approach emphasizes the need for auditability, traceability, and a repair loop to maintain compliance.

The guide outlines best practices for schema design, rule compilation, and content extraction while ensuring that the process remains transparent and accessible to compliance teams. Examples based on fictional brands demonstrate the application and effectiveness of the outlined methodologies.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses advancements in Retrieval Augmented Generation (RAG) using a technique called Contextual Embeddings, aimed at enhancing the retrieval performance of Claude. Key points include:

1. **Contextual Embeddings**: This method provides relevant context to document chunks, improving their embedded representations, which in turn enhances retrieval accuracy. Results showed a 35% reduction in retrieval failure rates and an increase in Pass@10 performance from 87% to 95%.

2. **Contextual BM25**: The blog introduces a hybrid search method that further boosts retrieval performance alongside Contextual Embeddings.

3. **Implementation and Evaluation**: A guide outlines setting up a retrieval system and offers instructions for implementing these techniques, using a dataset of codebases as a knowledge source.

4. **Cost Management**: Prompt caching is emphasized to cut costs associated with frequent data retrieval, significantly benefiting users on AWS and GCP platforms.

Overall, these innovations provide enterprises with powerful tools for improving responses in various applications such as customer support and financial analysis.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude's capabilities for summarizing legal documents. It highlights the importance of effective summarization in natural language processing, especially given the complexity of legal texts. Key topics discussed include:

- Techniques for crafting effective summarization prompts tailored to specific document types.
- Methods for extracting pertinent metadata and handling lengthy legal documents.
- Evaluation strategies, including automated metrics like ROUGE scores, to assess summary quality.
- Advanced summarization approaches, such as guided and domain-specific summarization, which cater to the unique requirements of legal documents.

By the end of the guide, readers will be equipped to implement these techniques and optimize their summarization workflows, ensuring that key information is accurately and efficiently distilled from extensive legal texts.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a "research agent" using the Claude Agent SDK, which enables autonomous information gathering and synthesis without a fixed workflow. Key features include the ability to adapt research strategies based on findings, effectively handling complex tasks such as competitive analysis and regulatory tracking. 

By implementing just a few lines of code, users can create agents that utilize web searches to follow leads and provide synthesized information. The post offers a step-by-step guide, highlighting improvements like conversation memory for multi-turn interactions, system prompts for tailored behavior, and the incorporation of multimodal analysis tools.

Finally, it outlines the transition from simple stateless queries to more sophisticated stateful agents suitable for production use in various research contexts. This foundation sets the stage for broader applications, including multi-agent systems in enterprise settings.

---

### [01_The_chief_of_staff_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the features of the Claude Code SDK through the development of an AI Chief of Staff agent for a startup. Key announcements include:

1. **Persistent Memory**: The `CLAUDE.md` file acts as a context provider, allowing agents to maintain consistent behavior without repetitive context input.

2. **Bash Tool for Script Execution**: Enables the agent to run Python scripts for complex tasks, supporting operations like financial modeling and data analysis.

3. **Output Styles**: Agents can employ different output styles tailored for various audience expertise levels, enhancing communication effectiveness.

4. **Plan Mode**: This feature allows agents to devise detailed execution plans without executing tasks, promoting better strategy formulation and stakeholder engagement.

These enhancements highlight the SDK's versatility and capability in building effective AI-driven agents.

---

### [02_The_observability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/02_The_observability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces enhancements to the Claude Code SDK, particularly focusing on an Observability Agent designed to integrate with external systems via the Model Context Protocol (MCP). Key updates include the introduction of a Git MCP server that empowers the agent with 13 Git tools for repository management and a GitHub MCP server that expands capabilities to over 100 tools for managing GitHub workflows, issues, pull requests, and CI/CD monitoring. 

The article details the setup process, including obtaining a GitHub Personal Access Token and running the MCP servers within a Docker environment. It emphasizes the agent's ability to autonomously monitor CI/CD processes and provide actionable insights based on its analyses. The blog also highlights the tutorial series covering the development of research agents, Chief of Staff agents, and the current observability system, equipping users to handle complex production scenarios effectively.

---

### [03_The_site_reliability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/03_The_site_reliability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces an **SRE Incident Response Agent**, designed to autonomously manage incident workflows including investigation, root cause identification, remediation, and documentation. It builds on a prior observability agent by enabling the SRE agent to take actions, such as editing configurations and restarting services. Key features of the agent leverage the **Claude Agent SDK** and **Model Context Protocol (MCP)** for safe infrastructure access. 

Key learnings include managing safe write access, effective agent behavior through clear tool descriptions, and the integration of various production signals for coherent diagnostics. The post provides guidance for infrastructure integration, requiring Docker and specific Python packages. Additionally, it outlines the architecture and the tools available for infrastructure inspection and management through a separate MCP server process. Ultimately, the post serves as a resource for extending the agent's capabilities and connecting it to existing infrastructures.

---

### [04_migrating_from_openai_agents_sdk.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the migration process from the OpenAI Agents SDK to the Claude Agent SDK, using an expense approval agent as an example. Key features of the Claude Agent SDK include built-in tools for reading, editing, and executing shell commands, a layered permission system, and direct access to an event stream for better monitoring and control. 

Developers will learn how to replace OpenAI SDK primitives with Claude equivalents without altering business logic, port a single-agent application, and integrate the SDK with existing observability frameworks. Detailed comparisons of specific elements from both SDKs are provided, alongside prerequisites for migration, emphasizing required knowledge and tools.

Ultimately, the post aims to facilitate a smooth transition while enhancing agent capabilities and runtime efficiency.

---

### [05_Building_a_session_browser.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/05_Building_a_session_browser.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a session browser using the Claude Agent SDK, emphasizing session management as a crucial feature for user engagement. Key functionalities announced include:

1. **Session Management**: The SDK now writes conversation transcripts to JSONL files and provides functions for organizing and accessing these sessions without direct file parsing.
2. **Core Features**:
   - **Listing and Rendering Sessions**: Display past sessions with pagination and metadata.
   - **Retrieving Messages**: Load session messages directly into a UI.
   - **Session Organization**: Users can rename, tag, and filter sessions.
   - **Forking Sessions**: Allows users to branch off conversations while preserving the original context.
   
The guide also covers prerequisites, setup instructions, and advanced features for further development. It is recommended to integrate these functionalities through various UI platforms and potentially share sessions across devices.

---

### [06_The_vulnerability_detection_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/06_The_vulnerability_detection_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Vulnerability Detection Agent** using the **Claude Agent SDK**. This tool aims to help security teams identify memory-safety bugs more effectively, addressing common issues with existing techniques like static analysis and fuzzing. The post provides a cookbook for building a vulnerability-discovery agent utilizing Claude Code's tools to read, analyze, and report on source code vulnerabilities.

Key announcements include:
- A step-by-step guide for setting up a vulnerability detection environment.
- The ability to create a structured threat model and run an agent to discover vulnerabilities with a defined focus on memory-safety issues.
- Inclusion of built-in tools (`Read`, `Grep`, `Glob`) to enhance the detection capabilities and collaboration between threat modeling and finding vulnerabilities.
- The final output is a structured JSON report of findings suitable for use in issue tracking and security management systems.

The guide necessitates basic Python and C knowledge and outlines necessary software tools for implementation.

---

### [07_Hosting_the_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/07_Hosting_the_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for deploying a research agent developed in a notebook environment. The agent can be hosted through three tiers: 

1. **Docker**: For local or single VM use, ideal for development and internal tools.
2. **Modal**: A serverless solution for easy access via URL, suitable for variable workloads without infrastructure management.
3. **Kubernetes**: Provides full control for multi-tenant environments with security measures like an authenticating gateway and egress lockdown.

Each deployment option uses identical agent code, making the hosting choice a matter of operational preference rather than code alteration. The post also discusses cost estimates, setup procedures, session management, and production readiness features, emphasizing the importance of choosing the right tier based on specific needs like user access and scalability.

---

### [08_Dynamic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/08_Dynamic_workflows.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces dynamic workflows in the Claude Code feature, designed for orchestrating multiple subagents at scale. This allows for more complex tasks, such as fact-checking, where one conversation cannot handle all claims. Claude writes a JavaScript orchestration script that executes in the background, managing up to 1,000 agents simultaneously. Each subagent operates independently with a clean context, supporting various models for different tasks. Key aspects include the ability to enforce structured verification, scalability beyond single agent limitations, and storing workflows as editable scripts. Required tools include Python 3.11+, the Claude Agent SDK, and a valid Anthropic API key. Dynamic workflows are available on all paid Anthropic API plans and certain cloud platforms. Users will learn to integrate dynamic workflows into their applications, using them effectively for tasks that exceed a single context window’s capabilities.

---

### [scheduled_repository_reviewer.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/claude_agent_sdk/scheduled_repository_reviewer/scheduled_repository_reviewer.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a recipe for building a scheduled repository reviewer using an agent that automates code reviews at user-defined intervals. This tool enhances consistency in reviews by resuming previous sessions and maintaining continuity across runs. The recipe outlines the prerequisites in terms of knowledge and tools, including the importance of using Python 3.11 and the Claude Agent SDK. Key features include a read-only review mode, allowable tools, permission management, and the ability to define output schemas for review findings. Users can integrate the reviewer with their cron jobs to automate recurring tasks like dependency audits or documentation reviews. For those wanting a managed solution, options like Claude Code routines and Managed Agents are available. Overall, this approach helps streamline code reviews, reducing manual oversight while ensuring thorough examinations of code changes over time.

---

### [CMA_plan_big_execute_small.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_plan_big_execute_small.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "orchestrator pattern," which optimizes agent workloads by separating planning and execution tasks. A frontier model is utilized for high-level planning, delegating the mechanical reading tasks to cheaper models that operate in parallel without directly engaging with raw web pages. This approach significantly reduces costs as it minimizes the expensive reading bills associated with large models.

Key features include the ability to configure a two-model agent team consisting of a frontier orchestrator and inexpensive search workers, live event streaming for task delegation, and rigorous cost comparisons against a single frontier agent performing the same tasks. The setup is beneficial for various workloads such as document review and code analysis, highlighting its versatility in applications needing extensive data processing while maintaining verification standards.

---

### [CMA_prompt_versioning_and_rollback.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_prompt_versioning_and_rollback.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new approach to managing prompt versioning and rollback for agents in a product support system utilizing a large language model (LLM). Key features include storing prompts server-side, resulting in immutable versioning with each update and facilitating easy rollbacks by referencing previous version numbers without requiring code deployments. 

The article outlines a practical walkthrough to create a support-ticket triage agent, update it to a new prompt version, and roll back to a previous version if performance declines. Users can evaluate each version's performance against labeled test sets to monitor accuracy. Overall, the new system enhances operational efficiency by allowing production teams to manage prompt updates independently from application code while maintaining a clear review process by pinning to specific versions. 

Next steps include exploring agent version listing and other advanced functionalities.

---

### [CMA_remember_user_preferences.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_remember_user_preferences.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the new "Memory" feature in Claude Managed Agents, designed to enhance user experience by allowing shopping assistants to remember customer preferences across interactions. This feature acts as a user-specific memory store, enabling the agent to record and retrieve information like sizes, budgets, and material preferences without requiring customers to repeat themselves during future visits.

Key components of the implementation include creating a memory store, configuring a shopping agent, and establishing two separate sessions to demonstrate how memory persists. The memory operates through a file structure accessible via a REST API, allowing for memory inspection and updates. The post outlines step-by-step instructions to build a shopping agent that utilizes this memory feature, emphasizing potential applications such as seeding stores with existing customer data and combining user-specific with shared memory stores. The Memory feature is currently in beta testing.

---

### [CMA_use_skills_from_a_repo.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_use_skills_from_a_repo.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature for the Claude Code environment that automatically detects and injects skills from a GitHub repository into an agent's system prompt. Skills are structured in the repository under `.claude/skills/<skill-name>/SKILL.md`, enabling seamless integration without manual uploads or version control. Upon starting a session, the system scans the repository to discover skills, utilizing a strict layout to ensure proper functionality.

Key points include the need for a `GITHUB_TOKEN` for public repository access, the importance of using the built-in `read` tool for skill discovery, and the coexistence of repository and API-driven skills. The post emphasizes the organized layout of `.claude/skills/`, outlines usage rules, and describes processes for mounting repositories and utilizing skills effectively during sessions. Overall, this advancement streamlines the skill integration process, enhancing user experience in coding environments.

---

### [CMA_watch_subagents_live.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_watch_subagents_live.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a notebook that enhances real-time observation of subagents in a multiagent setup using the Managed Agents API. Key features highlighted include:

- **Per-thread Delta Streaming:** Live previews of subagent text outputs as they generate content.
- **Initial Events on Session Creation:** The ability to initiate agent activity at the time of session creation.
- **Effort Management:** Configuration of how much computational effort an agent expends, allowing for budget control within a team structure.
- **Versioned Agent Updates:** Flexibility in managing agent versions during updates.

In a practical application, a coordinator delegates tasks between a standards researcher and a lesson writer to create a cohesive 7th-grade science unit plan. Supported by an improved streaming mechanism, users can monitor the entire process, enhancing collaboration and workflow efficiency. The notebook serves as a hands-on guide for users familiarizing themselves with these advancements.

---

### [CMA_with_mongodb_atlas.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/CMA_with_mongodb_atlas.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a detailed guide for integrating MongoDB Atlas with Claude Managed Agents (CMA) to create a fraud review agent. Key highlights include:

1. **Integration Simplicity**: It allows MongoDB Atlas to function as a retrieval engine, graph store, and system of record without requiring platform-level integration.
2. **Unified Querying**: Users can perform vector, full-text, hybrid, and graph searches with a single query language and connection, simplifying system architecture.
3. **Human-in-the-loop Functionality**: The integration leverages CMA to incorporate human oversight on critical decision-making processes through a `requires_action` gate.
4. **Application Ownership**: The data path to MongoDB is controlled by the application, keeping database credentials secure and within the user's environment.
5. **Modular Patterns**: The guide offers reusable patterns applicable across various domains, making it suitable for different agent functionalities beyond fraud review.

This approach facilitates a more robust operational framework while enhancing security and efficiency in managing data interactions.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/README.md)
**Source:** anthropics/claude-cookbooks

Anthropic has announced the release of Claude Managed Agents, a hosted runtime for stateful tool-using agents that persist data across sessions. Key features include integration with MongoDB Atlas for real-time data management, demonstrated through an end-to-end fraud-review agent. Various applied cookbooks are introduced, covering different functionalities such as data analysis, Slack bot integration, incident response automation, and security reviews of agent sessions. Guided tutorials are available to teach users the Managed Agents API through practical workflows, starting with the `CMA_iterate_fix_failing_tests.ipynb`. Notably, users can implement human-in-the-loop processes, manage budgets, and use skills from repositories. To get started, users need to set the required environment variables and can access example data for practical application. The release aims to foster advanced agent capabilities in real-world applications.

---

### [data_analyst_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/data_analyst_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on creating a data analyst agent using Claude Managed Agents, a platform by Anthropic. Key highlights include the development of an agent capable of analyzing CSV data and generating narrative HTML reports with interactive charts. The structured approach involves defining an **environment**, creating an **agent**, and then initiating a **session** that processes the dataset. Users learn to install necessary dependencies, upload data, and manage a live event stream to monitor the analysis process. The agent utilizes a tailored system prompt to ensure high-quality reporting, and once the task is completed, users can download the generated report. Instructions for archiving sessions and saving environment details for future use are also provided, emphasizing the reusability of the agent and environment for ongoing data analysis tasks.

---

### [slack_data_bot.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/slack_data_bot.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the implementation of a Slack bot utilizing Claude Managed Agents for data analysis. The bot, built with Slack's Bolt framework, starts an analysis session when mentioned, allowing users to attach CSV files for contextual queries. Key features include real-time updates on the agent's progress within the thread and the ability to continue conversations without re-mentioning the bot.

To set up, users need to create a Slack app, obtain OAuth tokens, and run a provided Python notebook to initialize the data analyst agent. The bot is designed to handle ongoing interactions, retaining context across messages. The article also suggests future enhancements, such as customizing the agent's prompt, persisting session data, and deploying the bot outside the notebook environment.

---

### [sre_incident_responder.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/managed_agents/sre_incident_responder.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a tutorial on building an SRE incident response agent using Claude Managed Agents. The agent automates initial responses to production alerts by gathering logs, following runbook conventions, and proposing fixes, all while ensuring human oversight through pull requests. Key features include:

- Integration with a simulated PagerDuty webhook for alert handling.
- Customizable agent skills for team-specific runbook guidance.
- Built-in sandbox tools for log and code investigation.
- Creation of custom tools to open, manage, and merge pull requests.
- Comprehensive session tracking via the Anthropic Console for clear observability.

The tutorial provides step-by-step instructions on setup, skill creation, agent deployment, and incident management, emphasizing a structured approach to incident triage. The implementation allows for an efficient human-agent collaboration in incident resolution.

---

### [admin_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/misc/admin_api.ipynb)
**Source:** anthropics/claude-cookbooks

In the latest blog post, the introduction of the Admin API allows organizations to manage their Claude API environments more efficiently. Key features include the ability to authenticate as an organization admin, invite users, create workspaces, audit API keys, and manage service accounts. The API provides endpoints structured under `/v1/organizations` and supports tasks through a Python SDK. 

The blog outlines practical applications such as onboarding a team, promoting user roles, auditing API keys for lifecycle management, and automating processes via service accounts. It emphasizes the importance of tracking and auditing API keys, setting organizational roles, and managing workspaces through REST calls. Development prerequisites include Python proficiency and a Claude Console organization admin role. The article concludes with references to additional admin resources for usage, cost analytics, and workload identity federation.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for generating synthetic test data for prompt templates using Claude and the Claude API. It introduces functionalities to extract variables from prompts, construct example blocks, and refine test cases via iterative iterations. Key highlights include:

1. **Prompt Evaluation**: Synthetic test cases help assess Claude's performance on realistic examples.
2. **Prompt Improvement**: The approach facilitates the generation of realistic inputs, enhancing the quality of input/output pairs.

The article provides necessary code snippets for implementing functions such as `extract_variables`, `construct_variables_block`, and `get_test_data`, enabling users to create tailored test cases. It emphasizes the importance of planning and allows for interactive adjustments to enhance the output's relevance. Overall, this technique supports developers in optimizing AI models with diverse and practical data scenarios.

---

### [session_memory_compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/misc/session_memory_compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines strategies for managing session memory in long-running conversations with Claude, highlighting the importance of maintaining context to ensure continuity and quality in applications such as coding assistants and customer service agents. It introduces a new cookbook focused on proactive session memory management, contrasting it with reactive approaches that can disrupt the user experience. Key features include:

- Writing effective memory prompts to retain critical context.
- Implementing instant memory compaction through background threading, reducing user wait times.
- Utilizing prompt caching to lower background memory update costs by approximately 80%.
- Guidance in selecting compaction strategies tailored to specific use cases.

The post details prerequisites like basic Claude API knowledge and Python familiarity, alongside examples of both traditional and instant compaction methods to illustrate these techniques effectively.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the introduction of citation support in the Claude API, enhancing its ability to provide verifiable sources when answering questions about documents. This feature is applicable across all Claude models and is more efficient compared to traditional prompt-based citation techniques, improving both recall and precision. It supports various document types, including plain text, PDF, and custom content, each yielding different citation formats. 

The post outlines how the API effectively manages citations, allowing the user interface to display sources accurately and create transparent responses. Additionally, it discusses the use of a context field for metadata that aids in generating informed replies without being cited. Visual examples illustrate the functionality, demonstrating its application in customer service scenarios and document referencing.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the capabilities of Claude, a language model, in processing charts, graphs, and slide decks. Key features highlighted include the ingestion of PDF documents and the ability to utilize Claude's vision capabilities for improved comprehension of visual data. Users are guided on how to encode PDF charts and graphs in base64 and query Claude with specific questions, demonstrating his proficiency in providing detailed answers. 

Additionally, tips are shared to optimize interaction with complicated visuals, such as providing arithmetic tools and asking Claude to identify colors in graphs to enhance accuracy. The post also details methods for analyzing slide decks using Claude's processing power, emphasizing the importance of narrating slides in detail to ensure completeness, particularly for vision-impaired audiences. Overall, the article provides a practical guide for leveraging Claude in data-heavy environments.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a methodology for analyzing Apple's 2023 financial earnings reports using Claude Haiku 5.5 sub-agent models. It outlines steps to set up the environment, download financial PDFs, and extract relevant data to assess net sales fluctuations. Key features include converting PDFs to images for easier processing, employing Concurrent Futures for efficient downloads, and using Claude Opus 5.5 to generate prompts for data extraction. After gathering information, the model synthesizes a response and produces Python code for visualizing revenue trends using matplotlib. The post demonstrates a comprehensive approach to leveraging AI for financial analysis, highlighting the integration and coordination of multiple models to achieve insightful outputs.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/skills/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post presents the "Skills Cookbook," a Jupyter notebook guide for developers to utilize Claude's Skills feature for document generation in formats like Excel, PowerPoint, and PDF. It includes an environment setup guide with dependencies installation and API configuration using a provided `.env` file. The directory structure for the project is outlined, featuring notebooks on Skills introduction, financial applications, and custom development.

Key technical information emphasizes the need for specific SDK versions and correct usage of newly introduced `client.beta` namespaces and APIs. The post addresses common development challenges with sample solutions, including file ID extraction and Jupyter kernel selection. Document generation times are noted, advising users to be patient during file creation. Lastly, a checklist for testing and resources for API reference and documentation are provided, targeting intermediate developers and business analysts in finance and analytics.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/skills/README.md)
**Source:** anthropics/claude-cookbooks

The "Claude Skills Cookbook" presents a detailed guide on utilizing Claude's Skills feature for document generation, data analysis, and business automation. It outlines the functionalities of Skills, which allow Claude to perform specialized tasks such as creating professional documents (Excel, PowerPoint, PDF) and automating business processes. Key features include a progressive disclosure architecture for optimized token usage, custom skills development, and practical, production-ready examples.

The cookbook is structured into three Jupyter Notebooks that cover the introduction to Skills, financial applications, and custom skill development. It also provides prerequisites for installation, realistic financial datasets for practice, and comprehensive API configuration instructions. Unique capabilities such as creating custom skills and troubleshooting common issues are discussed, alongside performance tips to enhance workflow efficiency. The document emphasizes the incorporation of Skills for effective financial reporting, data analysis, and document automation.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's Skills feature, enabling users to efficiently create professional documents, analyze data, and automate workflows with applications like Excel, PowerPoint, and PDFs. Users start by setting up their environment with Python and an Anthropic API key, followed by understanding and utilizing various Skills that package instructions and resources for specialized tasks. The post outlines the benefits of Skills, which include expert performance, organizational knowledge, and efficient token usage, minimizing costs during operation. The Skills feature operates on a progressive disclosure architecture, loading only necessary instructions, thus optimizing performance. Users are guided through installation, configuration, and practical examples, including generating Excel sheets with specific requirements while highlighting expected generation times. For document creation, the use of Skills significantly improves reliability and produces consistent, professional results.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

Claude has launched new features for financial applications, enabling users to create comprehensive financial dashboards, portfolio analytics, and automated reporting workflows using its Excel, PowerPoint, and PDF capabilities. Key announcements include the ability to generate professional financial documents directly within the Claude interface, enhancing productivity in financial analysis tasks.

Users can now build financial models with advanced calculations, executive presentations from data, and portfolio analysis tools that include risk metrics. Furthermore, automated reporting is supported across multiple formats, allowing for efficient information sharing.

The blog outlines practical use cases such as generating financial dashboards, executive summaries, and detailed portfolio analysis reports, emphasizing best practices for using Claude’s Skills effectively to streamline complex tasks. Prerequisites include an Anthropic API key and the latest SDK configuration to utilize these functionalities.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of custom skills for Claude, providing a comprehensive guide on how to create, deploy, and manage these skills to enhance Claude's capabilities with specific organizational knowledge and workflows. Key features include the ability to codify organizational practices, automate workflows, and maintain privacy while doing so. The architecture of these custom skills is outlined, emphasizing the essential structure of `SKILL.md`, along with the inclusion of scripts and resources. Three example skills are introduced: a Financial Ratio Calculator, Company Brand Guidelines, and a Financial Modeling Suite. Additional sections cover skill management, versioning, best practices, and troubleshooting tips. They also provide a step-by-step guide on setting up the required environment and APIs to facilitate skill creation and testing. Overall, this post equips users with the necessary knowledge to customize Claude for specific business needs.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a tool evaluation framework that employs multiple independent agents to perform tasks based on an evaluation file formatted in XML. Key components include an embedded evaluation prompt that guides the agents in structuring their responses and providing feedback on tool usage. The framework leverages the Anthropic API and allows for tracking of tool execution metrics, such as duration and error frequencies. A primary feature is a calculator tool that performs basic arithmetic operations and is used as part of the evaluation process. The article outlines steps for parsing tasks, running evaluations, and compiling results into a comprehensive report showcasing accuracy, average task duration, and tool utilization statistics. The evaluation methodology stresses the importance of clear documentation and actionable feedback for continuous improvement of the tools utilized.

---

### [automatic-context-compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/785d7a06457b3413727f386b9c470083feb23c49/tool_use/automatic-context-compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the introduction of **Automatic Context Compaction** in the Anthropic Python SDK, designed to manage the token context limits during agentic tasks, particularly in customer service workflows. The new feature allows agents to summarize previous interactions seamlessly, enabling them to process ongoing tasks without exceeding token limits.

Key points include:

- **Context Compaction Process**: The `runner.compact_before_next_turn()` function summarizes conversation history server-side when token usage surpasses a predefined threshold.
- **Use Case**: An agent handling customer support tickets can efficiently manage responses and classifications without overloading the context with unnecessary details from previous tickets.
- **Implementation**: The blog provides code snippets demonstrating the setup of tools for ticket processing and compares results from workflows with and without compaction, highlighting significant reductions in token usage without compromising performance. 

This feature makes workflows more efficient, maintaining task focus while managing context limitations effectively.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/41ce172f08f0f17783fb41d75267ff72fa8b33fc/latency_optimization/desk_agent/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a desk assistant for handling auto claims at a fictional company, Acme Insurance. The assistant is designed to follow a comprehensive policy manual to process tasks related to claims, utilizing simulated tools and a structured grading system for accuracy. It was created with 154 tasks divided into various categories, and the answers are generated according to rules from the manual. 

Key features include a robust grading mechanism that verifies task outputs against established criteria and functions that facilitate task management, including loading tasks and calling tools. The article also describes the logging and timing of task attempts, along with methods for tracking performance across multiple runs and settings. The assistant operates entirely within a standard library framework, ensuring no external API calls are required.

---

### [policy_manual.md](https://github.com/anthropics/claude-cookbooks/blob/41ce172f08f0f17783fb41d75267ff72fa8b33fc/latency_optimization/desk_agent/_gen/policy_manual.md)
**Source:** anthropics/claude-cookbooks

The Acme Insurance Auto Claims Adjudication Manual (effective January 1, 2024) provides comprehensive guidelines for processing auto claims. Key highlights include detailed definitions of various coverages such as Collision, Comprehensive, and Liability, along with Uninsured/Underinsured Motorist and Personal Injury Protection coverages. The manual outlines extensive documentation requirements for different claim types, including the First Notice of Loss, repair estimates, and necessary police reports.

The payout calculation rules specify deductible applications, Actual Cash Value determinations, and labor rate caps based on geographical regions. It also outlines the process for handling total loss claims, supplements, and subrogation.

Moreover, the manual presents exclusion codes for denials, ensuring claims are managed consistently and accurately. This document supersedes the previous version and is intended for internal claims operations only.

---

### [section9_desk_settlement.md](https://github.com/anthropics/claude-cookbooks/blob/41ce172f08f0f17783fb41d75267ff72fa8b33fc/latency_optimization/desk_agent/_gen/section9_desk_settlement.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the Desk Settlement Procedure for handling first-party physical damage claims during live calls with adjusters. Key points include:

1. **Coverage Verification**: Endorsements must be effective by the loss date; lapses result in denial (EXCL-07).
2. **Exclusions**: Certain exclusions apply based on relationships and policy specifics, influencing the coverage response.
3. **Repair Cost Adjustments**: Repair estimates must adhere to provided pricing catalogues, with clear distinctions on how repairs and components are priced, including adjustments for duplicates, part prices, and labor hours.
4. **Total Loss Evaluation**: The vehicle is deemed a total loss based on adjusted repair costs exceeding a threshold of its actual cash value (ACV).
5. **Deductibles and Additional Costs**: Deductibles apply to the vehicle amount, and towing or rental costs are separately calculated.
6. **Fraud Scoring and Verdicts**: Claims are scored for potential fraud, influencing the final decision on approval or denial.

Overall, this structured approach standardizes the assessment and resolution of claims efficiently.

---

### [latency_optimization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/41ce172f08f0f17783fb41d75267ff72fa8b33fc/latency_optimization/latency_optimization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines strategies for optimizing latency in Claude-powered applications, essential for real-time interactions like call center services and fraud detection. The key metrics for latency measurement include Time to First Token (TTFT), Time to Last Token (TTLT), and Output Tokens Per Second (OTPS). To boost performance, the post recommends various techniques, including:

1. **Input Token Management**: Reduce token count, utilize prompt caching.
2. **Agent Loop Efficiency**: Optimize background processing and reduce interaction rounds.
3. **Output Token Management**: Request shorter responses or structured outputs.
4. **Model and Effort Tuning**: Use fast mode and adjust model parameters.
5. **Task Duration Limits**: Implement time constraints to manage slow tasks.
6. **User Experience Design**: Stream outputs to improve perceived waiting times.

Overall, the cookbook emphasizes balancing quality with speed through targeted adjustments and efficient coding practices.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/41ce172f08f0f17783fb41d75267ff72fa8b33fc/latency_optimization/results/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details the contents of three JSONL files related to task attempts in a caching environment. 

1. **sweep.jsonl**: Contains 15,172 task attempts (out of 15,246 run) across three rounds and 33 settings, focusing on scenarios with prompt caching enabled. It is 8.4 MB in size and excludes first requests with a cold cache and retries.

2. **baseline.jsonl**: Consists of 462 task attempts, all without caching. No entries were excluded in this file, illustrating the baseline performance.

3. **race.jsonl**: Features 16,632 task attempts over three rounds and 36 settings, specifically highlighting nine shortlisted model settings with caching enabled. Notably, it includes metrics for call timings and cache reads, with 49 attempts exceeding a 60-second time limit.

This analysis aims to assess the effects of caching on task performance across various model settings.