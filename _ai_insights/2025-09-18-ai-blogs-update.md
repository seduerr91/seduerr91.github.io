---
title: Claude's Evolution - Top Trends in AI Development
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 09-18"
---
**Meta-Summary: Key Trends and Announcements**

Across these blog posts, several major trends and announcements emerge in the evolving landscape of AI application development, particularly centered on Claude's ecosystem and related tooling:

1. **Rapid Advancement in Retrieval-Augmented Generation (RAG):** Multiple posts focus on RAG, highlighting enhanced performance through techniques such as Contextual Embeddings, Contextual BM25, and summary indexing, resulting in improved precision and recall. Enterprises benefit from better domain-specific query handling and support for evaluation suites to fine-tune retrieval pipelines.

2. **Expansion of Multimodal and Structured Data Capabilities:** Claude’s new multimodal LLMs now support tasks involving images (e.g., extracting information from nutrition labels), PDFs, and structured outputs via JSON—streamlining ingestion, analysis, and reasoning across various data formats.

3. **Agentic Systems and Tool Integration:** There is a significant push towards developing advanced agentic frameworks with features such as memory management, multi-agent orchestration, and integration with external tools/APIs (MongoDB, Pinecone, Wolfram Alpha, etc.). Concepts like ReAct Agents, MCP servers, and multi-document/query routing enable sophisticated workflows and task automation.

4. **Prompt Engineering and Evaluation Tools:** The introduction of utilities like the Metaprompt, Promptfoo, and synthetic test data generators supports robust prompt engineering, troubleshooting, and systematic evaluation of LLM behavior. Features such as prompt caching enhance efficiency and reduce costs.

5. **Transparency and Reasoning Enhancements:** New features like “extended thinking” in Claude 3.7 surface the model’s reasoning process, increasing accountability and trust, especially when combined with automated document citation.

6. **Community Resources, Guides, and Open Collaboration:** The Claude Cookbooks initiative, along with practical guides for legal and classification tasks, API integration, and notebook-based development workflows, lower the barrier of entry and foster open, cross-platform development. Automated QA, security best practices, and contribution protocols ensure project quality and sustainability.

7. **Cost and Usage Management:** New API endpoints and administrative tooling provide granular monitoring of token usage, cache efficiency, and financial reporting, which are crucial for enterprise adoption.

8. **Audio and Speech Capabilities:** Partnerships (such as with Deepgram) and supporting notebooks introduce audio transcription and downstream text analysis, broadening Claude’s applicability.

In sum, the dominant themes are the accelerating capabilities and accessibility of Claude-powered generative AI, covering advanced data modalities, robust retrieval and agentic frameworks, systematic tooling for evaluation and cost control, and a strong emphasis on community-driven development and transparency.

## New Cookbook Recipes

### [gpt-5_troubleshooting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/5eedb60904522b9b52fc89f840c93b3a66f6d9ee/examples/gpt-5/gpt-5_troubleshooting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post presents a comprehensive troubleshooting guide for leveraging GPT-5 effectively, highlighting common issues developers may encounter. Key concerns include:

1. **Overthinking**: The model may generate lengthy responses for simple queries. Recommendations include adjusting the `reasoning.effort` parameter to "minimal" or "low" and setting explicit stop conditions.

2. **Laziness/Underthinking**: To combat insufficient reasoning prior to responses, increase the `reasoning_effort` and encourage self-reflection in the model’s answers.

3. **Overly Deferential Behavior**: Implement persistence instructions in prompts to ensure the model completes tasks independently.

4. **Verbosity**: Adjust the `verbosity` parameter to reduce response length.

5. **Latency**: Track response times and optimize model performance through effective caching and parallel tool calls.

The guide culminates in general troubleshooting tips, encouraging the use of meta prompting to enhance instruction clarity for future responses.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/4b36a1e1f64361397f4cbe4fbc7cdace338f16f8/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for contributing to the Claude Cookbooks project. Key announcements include the prerequisites for development, which require Python 3.11 or higher and the `uv` package manager. The setup instructions involve cloning the repository and configuring the development environment. 

The post highlights the implementation of automated quality assurance tools such as `nbconvert`, `ruff`, and Claude AI Review to maintain code integrity. Contribution guidelines emphasize best practices for notebooks, a structured Git workflow with conventional commit formats, and pre-commit hooks to ensure code quality. 

Moreover, it details the local testing process and outlines the CI/CD validation workflows. Lastly, contributors are reminded to avoid committing sensitive data and to report any security issues privately. The project operates under the MIT License.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/4b36a1e1f64361397f4cbe4fbc7cdace338f16f8/README.md)
**Source:** anthropics/claude-cookbooks

The Claude Cookbooks offer comprehensive resources for developers looking to integrate the Claude API into their projects. Key features include code snippets primarily in Python, aimed at enhancing capabilities like text classification, summarization, and integration with external tools and third-party data sources. Developers are encouraged to secure an API key and start with the Claude API Fundamentals course for foundational knowledge. The cookbooks also invite community contributions to expand the resource's value. Additional advanced techniques covered include utilizing sub-agents, handling PDFs, and creating moderation filters. Resources for AWS integration are also provided for users leveraging Claude in cloud environments. For more information, users can navigate to linked developer documentation, support resources, and community forums.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/4b36a1e1f64361397f4cbe4fbc7cdace338f16f8/skills/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Skills" section of the Claude Cookbooks, featuring guides that outline Claude's specific skills and capabilities. Key highlights include:

1. **Classification with Claude**: A guide focusing on enhancing classification tasks through data preparation and retrieval-augmented generation (RAG) techniques.
  
2. **Retrieval Augmented Generation**: This guide teaches the integration of domain knowledge using RAG, emphasizing performance optimization and evaluation methods.

3. **Contextual Embeddings**: A new technique that improves RAG performance by adding context to document chunks, suitable for semantic and BM25 searches.

4. **Summarization**: Exploration of various summarization techniques, including strategies for multi-document and long-form content, and evaluation methods.

5. **Text-to-SQL**: Instructions on generating SQL queries from natural language inputs, focusing on prompting techniques and accuracy evaluation.

The guides are accessible and self-contained, providing essential tools for implementation.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/4b36a1e1f64361397f4cbe4fbc7cdace338f16f8/skills/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the value of Retrieval Augmented Generation (RAG) for optimizing Claude’s performance in answering domain-specific queries. Key insights include setting up a basic RAG system utilizing an internal knowledge base, enhancing customer support workflows, and improving domain-specific question responses. The post outlines a process involving the construction of an evaluation suite to measure the performance of the RAG pipeline and introduces advanced techniques such as summary indexing and re-ranking to boost efficiency. Notable performance improvements are reported, with metrics showing increases in Average Precision (0.43 to 0.44), Average Recall (0.66 to 0.69), Average F1 Score (0.52 to 0.54), and End-to-End Accuracy (71% to 81%). The content serves as a guide for enterprises implementing RAG applications in various fields.

---

### [model-check.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/.claude/commands/model-check.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a process for validating the usage of the Claude model within code changes. Key steps include fetching the current list of allowed models from the Claude documentation and ensuring that all model references comply with this list. Specifically, it emphasizes the need to flag any deprecated models, internal model names, and to suggest the use of aliases ending with "-latest" for better maintainability. The post stresses the importance of providing actionable feedback on any issues discovered and instructs users to post their findings as comments on the relevant pull request using a specified command.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/claude_code_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the creation of a basic research agent using the Claude Code SDK. This agent is designed to autonomously search the web and summarize findings, with the flexibility to adapt based on unexpected discoveries. Key features highlighted include the use of the WebSearch tool and the ClaudeSDKClient, which allows for maintaining conversation context across multiple queries. Improvements for a production-ready agent involve implementing a system prompt and leveraging the Read tool for multimodal input. The post concludes with a guide for integrating this agent into Python scripts and hints at future enhancements, including the development of a Chief of Staff agent that manages multiple specialized subagents.

---

### [02_The_observability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/claude_code_sdk/02_The_observability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post explores advancements made in integrating AI agents with external systems through the Model Context Protocol (MCP) using the Claude Code SDK. It introduces two key MCP servers: the Git MCP server, which allows agents to interact with Git repositories using 13 tools for tasks like examining commit history, and the GitHub MCP server, which offers over 100 tools for managing issues, pull requests, and CI/CD workflows across public and private repositories.

A notable development is the creation of an observability agent capable of monitoring GitHub Actions workflows, analyzing CI pipeline triggers, and providing actionable insights on failure scenarios. The post outlines practical steps for configuring these MCP servers and emphasizes the transition from passive monitoring to active incident response. Ultimately, the tutorial series illustrates how to build sophisticated agentic systems that enhance production workflows through intelligent automation and observability.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/claude_code_sdk/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a tutorial series on building advanced agentic systems using the Claude Code SDK. Key steps include installing necessary tools, cloning the project, and configuring API keys for functionality. The series progresses from creating basic research agents to deploying sophisticated multi-agent systems that integrate external tools. Participants will learn core SDK concepts, multi-agent orchestration, and enterprise features including compliance tracking. Notable notebooks include a simple research agent and a complex AI Chief of Staff, each showcasing specific features like memory persistence, output customization, and integration with external systems. The Claude Code SDK's versatility extends beyond coding, enabling applications in research, data analysis, and workflow automation. Overall, the tutorial series aims to equip developers with the skills to harness the full potential of the Claude Code SDK for diverse agent-building projects.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "extended thinking" feature of Claude 3.7 Sonnet, which enhances reasoning capabilities for complex tasks and offers transparency in its reasoning process through "thinking" content blocks. Key points covered include setting up the environment, conducting basic examples, and streaming outputs with extended thinking. The document also addresses token counting and context window management, emphasizing the importance of understanding thinking budgets, with a minimum set at 1,024 tokens. It explains how redacted thinking blocks work, which are generated when safety systems flag internal reasoning. Finally, the blog outlines common error cases and incompatibilities when using the extended thinking feature, such as minimum budgeting and restrictions on certain modifications.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the extended thinking feature of Claude 3.7 Sonnet, emphasizing its capability to provide transparency in the model’s decision-making processes. The feature allows users to view Claude's thought process before and after tool usage, effectively illustrating how it makes decisions based on tool results. Key aspects covered include setting up the environment, executing single and multiple tool calls, and handling thinking blocks. Examples demonstrated involve retrieving weather data and news headlines, outlining the integration of thinking with tool use while ensuring the preservation of thinking block signatures. This feature enhances interaction by allowing structured reasoning while utilizing tools for real-time data acquisition.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for utilizing the Claude API to create a customizable content moderation filter for user-generated text. The process involves defining categories such as "ALLOW" and "BLOCK" in the prompt, providing specific examples of content for each category, and prompting Claude to classify user text accordingly. Key features include:

1. **Customization**: Users can easily modify the guidelines and examples to suit different contexts or topics.
2. **Chain of Thought (CoT)**: This technique encourages Claude to elaborate its reasoning process, enhancing clarity in decision-making.
3. **Few-shot Learning**: Providing additional examples in the prompt aids in training Claude to better understand nuanced content categorizations.

The post includes Python code snippets demonstrating how to implement these features effectively using the Claude API.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for generating synthetic test data for prompt templates using the Claude API. It introduces various functions that help extract variables from templates, create examples, and generate test cases effectively, even when real data is unavailable due to privacy concerns. The two main benefits highlighted are prompt evaluation and improvement via multishot examples. 

The post also features detailed code snippets for functions designed to format prompt templates for synthetic evaluations, allowing users to construct realistic test scenarios. It emphasizes the importance of planning and iterative refinement in generating effective test cases. Overall, the guide aims to assist users in leveraging synthetic data to enhance the performance of AI models like Claude.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post demonstrates how to use Claude, an AI tool, to generate SQL queries from natural language queries. It begins with setting up a test SQLite database, including creating a sample table named "employees" and populating it with data regarding various staff members. The core feature is a function that sends a natural language question along with the database schema to Claude, which then produces the corresponding SQL query. An example question, "What are the names and salaries of employees in the Engineering department?" is used to illustrate this process. The generated SQL query is executed against the database, displaying the relevant results. Finally, the blog emphasizes the importance of closing the database connection post-execution.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Metaprompt, a new tool aimed at enhancing prompt engineering by addressing the "blank page problem." Users can input their task and optional variable names to generate a starting prompt for iteration. The tool is user-friendly, requiring no coding skills—simply enter the Claude API key and task details, and run the notebook to obtain a prompt.

Key features include:
- A focus on single-turn question/response prompts.
- Generation of tailored prompts through examples and structured instructions.
- Specific templates to guide Claude in various scenarios, such as acting as a customer service agent or a math tutor.

Overall, the Metaprompt is designed to facilitate prompt creation and improve interactions with AI models like Claude.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the new feature in Claude.ai that allows users to upload PDFs via the API, currently available in beta. It outlines the process of integrating this feature in a notebook, including installing the Anthropic client and setting up the necessary headers for PDF support. The example provided demonstrates how to convert a PDF into base64 for processing. The author tests the functionality by summarizing the abstract of a PDF at a kindergarten level, reformatting the Methods section as a recipe, and creating a poem about the results. This feature signifies a significant enhancement in Claude’s capabilities, allowing sophisticated interactions with PDF content.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of prompt caching in the Claude API, which allows users to store and reuse context within prompts. This feature significantly enhances the efficiency of interactions, enabling reductions in latency by over 2x and costs by up to 90%. The post provides a step-by-step setup for using prompt caching throughout both single-turn and multi-turn conversations using a sample from "Pride and Prejudice." It demonstrates the performance benefits with comparisons of non-cached versus cached API calls, revealing considerable improvements in response times. Caching enables faster interactions while maintaining quality, evidenced by a drop in response time from 24 seconds to about 7-11 seconds, with nearly all tokens in subsequent turns cached. The discussion includes implementation details and performance metrics that showcase the advantages of using prompt caching in practical applications.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a step-by-step tutorial on using Anthropic's Claude API to summarize web page content. Key announcements include the completion of library installation and setup, highlighting the use of the Anthropic library and the specific model "claude-3-haiku-20240229." The tutorial demonstrates how to fetch a web page's content using the requests library, specifically for the 96th Academy Awards Wikipedia page. Following content retrieval, it describes preparing the input for the Claude API, which involves creating a structured prompt that requests a concise summary. Finally, it illustrates how to call the model to generate the summary and print the result. This concise guide aims to empower users to effectively summarize web content using AI tools.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The Claude API has introduced a new citation feature that enhances how it handles document-based queries, providing detailed citations for responses. The feature is supported on "claude-3-5-sonnet-20241022" and "claude-3-5-haiku-20241022" models, offering advantages over traditional prompt-based citation techniques by improving recall and precision while reducing costs. It supports various document types, including plain text, PDFs, and custom content, with tailored citation formats. Users can visualize citations in a structured way, with direct links to the source material, thus fostering transparency and trust in information. Additional functionalities include the use of a context field for supplementary information and highlighting cited text in PDFs for better visibility. Documentation for implementing these features is available on Claude's official site.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a process for analyzing Apple's 2023 financial earnings reports using the Claude 3 Haiku sub-agent models. Key steps include setting up the necessary environment and libraries, gathering documents, and formulating questions regarding Apple’s net sales over the year. The post details how to download the earnings release PDFs and convert them to base64-encoded images for easier extraction of information. Subsequently, the Haiku models extract relevant data from each PDF, which is then synthesized and queried via Claude 3 Opus to generate a comprehensive response and accompanying visualization code using matplotlib. Finally, the post discusses the execution of the matplotlib code to visualize the revenue trends, emphasizing the effectiveness of combining sub-agent models for financial data analysis.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the "Usage & Cost Admin API Cookbook," a guide for programmatically accessing Claude API usage and cost data. Key features include:

1. **Usage Tracking**: It provides monitoring of token consumption across models, workspaces, and API keys, alongside cache efficiency analysis.
2. **Cost Analysis**: Users can retrieve cost breakdowns by service type and track spending trends, facilitating financial reporting and chargebacks.
3. **API Overview**: The guide introduces two primary endpoints: the Messages Usage API for usage data and the Cost API for financial data.
4. **Security Guidelines**: Users need to securely manage their Admin API keys and follow best practices for storage and rotation.
5. **Common Use Cases**: Examples include usage monitoring, cost attribution, cache analysis, and generating financial reports.

Overall, this resource positions itself as a comprehensive toolkit for managing API usage and costs effectively.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/skills/classification/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on using Promptfoo for evaluation purposes, requiring Node.js and npm for installation. Users can install Promptfoo via npm or npx, utilizing a pre-initialized `promptfooconfig.yaml` file. Key features include importing prompts, connecting to various large language models (LLMs), and performing tests using datasets. The configuration allows for flexibility in testing parameters, including temperature settings. Data transformations and output formats are customizable, supporting both file and web UI outputs. Users must set their API keys for services like Anthropics and Voyage before running evaluations. The command `npx promptfoo@latest eval` initiates the process, with an option to increase request concurrency. The concluded evaluations can be analyzed further in related files.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/skills/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Large Language Models (LLMs) for advanced classification tasks, particularly within the insurance industry, where categorization of customer support tickets can significantly impact client satisfaction. Key highlights include:

1. **Environment Setup**: Instructions for installing necessary packages, including `anthropic`, and configuring environment variables for API keys.
2. **Classification with LLMs**: It discusses leveraging LLMs for classification problems involving complex business rules and minimal training data, highlighting their ability to deliver natural language explanations.
3. **Implementation Steps**: The guide outlines essential steps such as data preparation, prompt engineering, and using Retrieval-Augmented Generation (RAG) to enhance model accuracy via a vector database.
4. **Example Problem**: A classifier is developed to categorize support tickets into specific categories like Billing Inquiries and Claims Assistance, emphasizing the importance of effective classification to streamline customer service processes. 

The guide also includes practical code examples for building and testing the classifier, enhancing the reader’s understanding of LLM capabilities in this domain.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/skills/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines advancements in Retrieval Augmented Generation (RAG) with a focus on Contextual Retrieval, enhancing Claude's ability to utilize internal knowledge bases. Key announcements include the introduction of Contextual Embeddings, which add relevant context to document chunks, leading to a 35% reduction in retrieval failure rates. A technique called Contextual BM25 is also presented, further improving performance. The guide details steps for building and optimizing a Contextual Retrieval system, including setting up a basic pipeline, implementing Contextual Embeddings, and employing reranking strategies. Performance evaluations revealed an increase in Pass@10 scores from approximately 87% to 95% using these enhancements. Additionally, the benefits of prompt caching in minimizing costs during context generation are highlighted, making the process more efficient for enterprises utilizing this technology on platforms like AWS and GCP.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/skills/retrieval_augmented_generation/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces Promptfoo, a tool for evaluating retrieval and end-to-end performance systems, requiring Node.js and npm for installation. Users can initiate evaluations using the provided `promptfooconfig.yaml` files, split into retrieval and end-to-end configurations. The tool allows the importation of prompts in various formats and the use of custom providers for different retrieval methods. The evaluation relies on datasets that include an expected output column to facilitate automatic assertions. Additionally, Promptfoo supports various LLMs and provides built-in tests for robustness. Users can define environmental variables for their APIs, execute evaluation commands via terminal, and view results in multiple formats or through the Promptfoo web UI.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/skills/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post serves as a comprehensive guide to utilizing Claude for summarizing legal documents, emphasizing effective techniques and evaluation strategies. Key highlights include crafting effective prompts, extracting metadata, and handling lengthy documents within token limits. The guide elaborates on various summarization approaches, from basic summaries to advanced techniques like guided and domain-specific guided summarization, which tailor outputs to specific legal contexts.

The post discusses the challenges of evaluating summary quality, stressing the necessity for both automated and task-specific criteria. Additionally, it outlines essential setup steps, including required packages and data preparation techniques. By the end of the guide, users will gain insights into optimizing their summarization workflows, ensuring they can produce structured, coherent summaries of complex legal texts.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/Deepgram/README.md)
**Source:** anthropics/claude-cookbooks

Deepgram has announced the release of the Pre-Recorded Audio Notebook, enabling users to transcribe pre-recorded audio effectively using their technology. This initiative reinforces Deepgram's commitment to providing essential speech-to-text, text-to-speech, and language intelligence capabilities. The blog post also highlights valuable resources for developers, including API playgrounds, starter apps, and SDKs for various programming languages such as Python, Node, .NET, and Go. Additionally, it encourages community interaction through GitHub Discussions and Discord. Interested users can sign up for a free API key on the Deepgram Console to begin exploring the platform's capabilities.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a comprehensive guide for transcribing audio files using Deepgram and generating interview questions with Anthropic. Key steps include:

1. **Setup**: Users must copy the notebook and install necessary dependencies, including Deepgram and Anthropic SDKs.
2. **Transcription Process**: Users are instructed to input their Deepgram API key and audio file URL into the provided code to transcribe the audio. The result is saved as a JSON file.
3. **Data Analysis**: The transcript is then parsed, allowing users to view the plain text version of the transcription.
4. **Generating Questions**: Finally, the transcription is sent to the Anthropic API to generate insightful, open-ended interview questions based on the content of the audio.

This workflow allows for efficient audio transcription and enhances interview preparation with AI-generated questions.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a Basic RAG (Retrieval-Augmented Generation) Pipeline using LlamaIndex. Key steps include setting up a large language model (LLM) and embedding model, downloading and loading data, indexing it, and creating a query engine. The selected LLM is the latest Claude 3 Opus from Anthropic, paired with a HuggingFace embedding model. The post provides detailed installation commands, API key setup, and code snippets for each step, culminating in a demonstration of querying the indexed data. This setup enables effective retrieval and generation tasks based on the indexed content.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a Retrieval-Augmented Generation (RAG) system using the `DocumentAgents` and `ReAct Agent` concepts to manage multiple documents effectively. Key announcements include the use of the latest `Claude-3 Opus` NLP model and a pipeline that incorporates Wikipedia pages from five major cities: Toronto, Seattle, Chicago, Boston, and Houston. The author outlines installation steps for required packages and demonstrates how to load and manage documents using Python. It details the construction of individual ReAct Agents for each city that facilitate querying specific information and summarizations. The setup culminates in a top-level retriever capable of directing queries to the appropriate agent based on context, showcasing sample queries and responses that validate the functionality of the implemented system.

---

### [Multi_Modal.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/Multi_Modal.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Anthropic MultiModal LLM, a framework designed for image understanding and reasoning. Key highlights include:

1. **Installation Requirements**: Instructions for installing necessary packages such as `llama-index` and `matplotlib`.
2. **API Key Setup**: Guidance on configuring the Anthropic API key.
3. **Image Processing**: Demonstrations of loading and analyzing images both from local files and URLs using the MultiModal class.
4. **Prompting for Image Descriptions**: Showcases how to use the LLM to generate alternative text descriptions for images.
5. **Structured Output Parsing**: An example of extracting stock information from an image and returning it in a structured JSON format based on defined Pydantic schemas.

Overall, the blog emphasizes the capabilities of the Anthropic MultiModal LLM for integrating image data into language tasks.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/README.md)
**Source:** anthropics/claude-cookbooks

The blog post announces a collaboration between LlamaIndex and Claude, presenting a collection of cookbooks designed for developing large language model (LLM) applications. The key offerings include several Jupyter notebooks: 

1. **Basic RAG With LlamaIndex** - for building retrieval-augmented generation (RAG) pipelines.
2. **Router Query Engine** - to route queries to various indices.
3. **SubQuestion Query Engine** - for addressing complex queries across multiple documents.
4. **ReAct Agent** - for utilizing tools with QueryEngine.
5. **Multi-Document Agents** - for efficient RAG pipelines involving numerous documents.
6. **Multi-Modal** - for creating multi-modal applications.

The post encourages users to explore the resources through the provided documentation, Discord, Twitter, and LinkedIn links.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the ReAct Agent framework for integrating with tools, particularly focusing on a calculator and QueryEngine tools. Key features include:

1. **Installation and API Setup**: Steps to install necessary packages like `llama-index` and configure API keys for using the Anthropic LLM.

2. **Calculator Tools**: Demonstrates creating a ReAct Agent that can perform arithmetic operations (addition and multiplication) and respond to queries.

3. **QueryEngine**: The framework is extended to analyze 10-K SEC filings for Uber and Lyft using documents loaded into vector indices, enabling users to ask financial questions.

4. **Agent Queries**: Examples are provided where the ReAct Agent answers complex queries regarding financial data, showcasing its capabilities in handling detailed questions.

Overall, the post highlights the versatility of the ReAct Agent in processing various data tools and responding to user inquiries.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, a tool designed to route user queries to various query engine tools, each capable of handling different types of documents and indices. It outlines the installation process for the necessary packages, including `llama-index`, `llama-index-llms-anthropic`, and `llama-index-embeddings-huggingface`. The setup involves configuring a logger and applying `nest_asyncio` for asynchronous query support in Jupyter notebooks. Key features include the use of the latest `Claude-3 Opus` model for LLM and a Hugging Face embedding model. The post demonstrates creating summary and vector indices from a document, followed by setting up query engines and testing the configuration with example queries related to Paul Graham's essay. Overall, the RouterQueryEngine facilitates efficient querying through a structured and flexible approach.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, which addresses complex queries across multiple documents by breaking them into simpler sub-queries. Key features include instructions for installation and API setup, utilizing the `Claude-3 Opus` LLM and a HuggingFace embedding model. The post demonstrates practical usage with data from Uber and Lyft's 2021 10-K SEC filings, detailing steps for data loading, indexing, and creating query engines specific to each document. Users can make precise queries, such as revenue comparisons and investment analyses, using the newly constructed `SubQuestionQueryEngine`. This tool enhances information retrieval by facilitating multi-document query capabilities efficiently.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This tutorial outlines the steps to create a Retrieval-Augmented Generation (RAG) chatbot system using Claude 3 and MongoDB. Key components include:

1. **Development Setup**: Instructions for installing required libraries, setting up MongoDB, and preparing the data, including the creation of a vector search index.
2. **Data Handling**: Efficient methods for downloading and preparing tech news data using Pandas and VoyageAI for embedding.
3. **MongoDB Integration**: Steps to connect to MongoDB, create databases and collections, and ingest data from a combined DataFrame.
4. **Vector Search Functionality**: Implementation of a custom vector search function to retrieve relevant content based on user queries.
5. **Query Processing**: Using Claude 3 models to generate responses, integrating user queries with retrieved knowledge for more accurate outputs.

Essential credentials like Claude API Key and MongoDB URI are required for successful setup and execution.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the enhancements in LangChain v1, particularly focusing on the implementation of RAG (Retrieval-Augmented Generation) agents using Claude 3. It outlines notable changes in agent initialization, making it clearer and promoting closer interaction with agent logic. Key features include using Claude 3 for LLM capabilities, Voyage AI for embedding knowledge, and Pinecone for knowledge retrieval.

The post elaborates on setting up the environment, building knowledge bases with the AI ArXiv dataset, and creating a specialized XML agent tailored for Anthropic models. It emphasizes incorporating conversational memory using `ConversationBufferWindowMemory`, allowing the agent to maintain context over interactions. Examples demonstrate initializing the agent, querying data, and tracking conversational memory to enhance user interactions. This reflects advancements in agent functionalities and user experience within LangChain.

---

### [rag_using_pinecone.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/Pinecone/rag_using_pinecone.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a tutorial on connecting Claude with a Pinecone vector database using retrieval-augmented generation (RAG). Key steps include embedding a dataset of over 10,000 Amazon product descriptions using Voyage AI, uploading these embeddings to Pinecone, and enabling Claude to answer questions based on information from the database. The process begins with setting up necessary API keys and downloading the product dataset. After creating a Pinecone index, the embeddings are generated and uploaded. The tutorial also describes how to optimize search results by generating keywords from user queries via Claude and returning the most relevant product descriptions. Finally, formatted search results are used to generate answers to user questions with Claude, showcasing the integration of advanced AI capabilities in information retrieval.

---

### [using_llm_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/third_party/WolframAlpha/using_llm_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines how to integrate the Wolfram Alpha LLM API to enhance Claude's capabilities for handling user queries. Key steps include establishing the environment by installing required libraries and creating a Wolfram Alpha App ID. A custom function, `wolfram_alpha_query`, is developed to send URL-encoded queries to the API and retrieve responses. Additionally, a tool schema is defined for Claude to process these queries. The post also includes a section on interacting with Claude by prompting it to use the Wolfram Alpha tool to answer example questions. This integration allows Claude to handle complex queries related to mathematics, science, and general knowledge effectively.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a tutorial on integrating a simple calculator tool with the Claude AI model. The process begins with setting up the necessary environment by installing the `anthropic` library and initializing the Claude API client. A calculator tool is defined that evaluates basic arithmetic expressions by sanitizing input and using the `eval()` function—though this method is noted to be risky in general use. The article details the implementation of the tool and illustrates how Claude can interact with it to solve mathematical problems through user queries. Sample interactions demonstrate Claude's ability to handle complex calculations, underscoring the practical application of the calculator tool in enhancing AI capabilities.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a customer service chatbot using Claude 3 and client-side tools. Key features include the ability to retrieve customer information, obtain order details, and cancel orders on behalf of customers. The implementation involves setting up the Claude API client, defining three specific tools—get_customer_info, get_order_details, and cancel_order—along with simulating responses due to the lack of real customer data. A function processes tool calls, enabling interaction with the chatbot to handle user inquiries. The post concludes by encouraging readers to integrate the chatbot with actual databases and expand its functionality for broader customer service applications.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses utilizing Claude’s tool use feature to extract structured JSON data from various types of input and presents several practical examples. Key highlights include:

1. **Article Summarization**: Demonstrates generating a JSON summary of an article, including fields like author, topics, and coherence scores.
2. **Named Entity Recognition**: Illustrates extracting named entities from text and presenting them in structured JSON format, detailing entities' names, types, and contexts.
3. **Sentiment Analysis**: Shows how to analyze sentiment and return positive, negative, and neutral sentiment scores structured in JSON.
4. **Text Classification**: Classifying text into predefined categories and returning the results as JSON.
5. **Handling Unknown Keys**: Provides guidance on managing JSON objects with unknown structures using an open-ended input schema.

Overall, the post emphasizes the versatility of Claude in generating well-structured JSON outputs for varied natural language processing tasks.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the critical need for effective memory management in building LLM (Large Language Model) agents, especially for long-horizon tasks. It introduces three self-managed memory implementations: 

1. **Simple Memory Tool**: A basic scratchpad for storing and modifying persistent text memory, designed for quick experimentation without a clear directive on memory content.
   
2. **Compactify Memory Tool**: Facilitates the summarization of conversation history, empowering the model to decide when to summarize while ensuring compliance with a defined token threshold.

3. **File-Based Memory**: Allows interaction with a hierarchical file structure for memory representation, enhancing usability and structure through Anthropic's Files API.

The post underscores the significance of managing LLM memory to avoid exceeding context windows and to enhance efficient processing of relevant tokens during interactions.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a note-saving tool using Pydantic and Pydantic's integration with the Anthropic API for chatbot interactions. Key elements include:

1. **Environment Setup**: Instructions for installing necessary libraries and setting up the Claude API client are provided.
   
2. **Pydantic Models**: Three models (Author, Note, and SaveNoteResponse) are defined to validate inputs and outputs, ensuring structured data handling.

3. **Tool Definition**: The tool, named "save_note", accommodates note details, author information, priority, and public accessibility, with clear input schema requirements.

4. **Function Implementation**: A series of functions are developed to handle the note-saving process, validate inputs, and generate responses.

5. **Chatbot Interaction**: A final function enables user interaction with the chatbot, showcasing how to save a note and validate the process using Pydantic.

This structured approach enhances the reliability of the note-saving feature within the chatbot.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c0be217337914f9b3611f1277b5059fb2fa94f53/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method to utilize the Claude API for extracting structured nutrition information from an image of a nutrition label. It begins with the setup of necessary libraries and the Claude API client. A custom tool named "print_nutrition_info" is defined to capture specific attributes like calories, total fat, cholesterol, total carbs, and protein from the nutrition label. The process involves loading an image and passing it to Claude with a specific prompt to invoke the custom tool. The API is expected to return the extracted data in a structured JSON format. The post serves as a practical guide for developers looking to integrate image analysis with nutrition information extraction using AI tools.