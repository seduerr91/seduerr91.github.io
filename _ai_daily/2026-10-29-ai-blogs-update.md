---
title: AI Innovations - Key Trends and Announcements Unveiled
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 10-29"
---
**Meta-Summary of Key Trends and Announcements**

Across all blog posts, several major trends and innovations in AI development and application emerge:

1. **Enhanced Decision and Classification APIs**: The introduction of the Decisions API (notably faster than prior methods) and specialized routing systems enables rapid, accurate content classification and customer support triaging using advanced models such as `gpt-6-luna`. Confidence scoring and customizable pipelines make these tools robust for real-world integration.

2. **Retrieval-Augmented Generation (RAG) Advances**: Substantial progress is made in RAG, including the deployment of contextual retrieval and embeddings, optimized workflows with vector databases (Pinecone, MongoDB Atlas), and systematic evaluation frameworks. These enhancements significantly boost knowledge retrieval accuracy and system effectiveness in domain-specific tasks.

3. **Evaluation and Prompt Engineering Tools**: The Promptfoo evaluation suite and resources like Claude Cookbooks and Metaprompt empower developers to test LLM outputs rigorously and streamline prompt engineering. Support for various metrics (BLEU, ROUGE, custom assertions), multi-model testing, and modular guides facilitate repeatable, high-quality development.

4. **Structured Data Extraction**: Multiple posts highlight new strategies for extracting structured information (JSON, knowledge graphs) from unstructured text using LLMs. Techniques spanning prompt engineering, chain-of-thought reasoning, and memory/context management deliver high-accuracy results across tasks such as entity extraction, sentiment analysis, and document summarization.

5. **Agent and Workflow Automation**: Deployment of advanced agents—such as Chief of Staff assistants and voice-enabled interfaces—showcases the integration of persistent memory, session management, tool orchestration (including integration with external APIs like Wolfram Alpha), and adaptive output styles. These upgrade operational efficiency and enable real-time, multi-modal AI applications.

6. **Content Moderation and Long-Document Handling**: Enhanced moderation filters and sophisticated summarization techniques (with support for legal and web documents) extend AI utility to managing user-generated content and processing long-form, complex data.

7. **Developer Experience and Best Practices**: Strong emphasis is placed on code quality, security (API key/credentials management), standardized workflows (pre-commit hooks, Git conventions), and collaborative open-source practices, offering clear onboarding and contribution paths for developers.

**Overall**, these posts reflect a mature, developer-focused AI ecosystem marked by faster, more accurate APIs, powerful retrieval and evaluation frameworks, improved prompt tooling, sophisticated knowledge extraction, real-world agent deployment, and comprehensive best-practice guidelines—enabling robust AI-powered solutions adaptable across industries.

## New Cookbook Recipes

### [README.md](https://github.com/openai/openai-cookbook/blob/f5819076643583e2c2a77268e7fe522e927499d0/examples/decisions/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Decisions API, which efficiently processes texts and images for decision-making tasks, operating approximately ten times faster than the Responses API. This API allows applications to classify content, route customer support requests, and score inputs. 

A demonstration highlights how to route banking support messages into four specialized queues, such as `account_access` and `transfer_cancellation`, using the `gpt-6-luna` model. Users can run examples through a provided terminal demo or Jupyter notebook, with Python as the main programming language. 

The post outlines essential components including how to formulate input requests, interpret results, and customize the queue structures. It emphasizes the API's ability to handle variable traffic and the importance of assessing confidence levels for decision accuracy. Overall, the Decisions API is presented as a valuable tool for enhancing customer support interactions.

---

### [customer_request_routing.ipynb](https://github.com/openai/openai-cookbook/blob/f5819076643583e2c2a77268e7fe522e927499d0/examples/decisions/customer_request_routing.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a support routing system using the OpenAI Decisions API, which enhances the speed of processing customer-support messages by returning typed answers significantly faster than the traditional Responses API. It utilizes the `gpt-6-luna` model to classify messages into predefined queues, allowing applications to efficiently direct inquiries such as payment issues, app access, transfer cancellations, and card delivery.

The post details a step-by-step walkthrough for implementing this system, from loading customer support messages through Python to sending requests and processing responses. Each routing decision includes confidence scoring, aiding in the identification of the appropriate team for managing customer inquiries. It emphasizes the importance of validating responses before connecting results to ticketing systems and suggests customization options for different use cases. The blog encourages users to refer to accompanying documentation for further integration and enhancements.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Claude Cookbooks," a resource featuring Jupyter notebooks and Python examples utilizing the Claude API. Key highlights include a quick start guide for installation and setup, detailing commands for code formatting, linting, and testing. Developers are directed to follow specific coding standards regarding line length and quoting style, while also adhering to Git workflow conventions for branch naming and commit formats using conventional commits.

Crucial rules emphasize the importance of keeping API keys secure, proper dependency management, and using current Claude model IDs. Special guidelines for notebooks stress maintaining outputs and ensuring error-free execution. Additionally, the project structure is outlined, categorizing components like capabilities, model evaluations, and integrations. Finally, the post provides details on adding new cookbooks, encouraging contributions from developers with a focus on quality checks before submission.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for contributors to the Claude Cookbooks development repository. Key announcements include the prerequisites for development, such as Python 3.11 and the recommended package manager 'uv'. A step-by-step quick start guide is included, detailing installation, cloning the repository, and setting up a development environment. 

Quality standards are emphasized, featuring tools like nbconvert for notebook validation and automated code reviews by Claude. Contributors can utilize slash commands for link and model verification directly within the workflow. 

The post also outlines best practices for notebooks, Git workflows, and pull request guidelines, as well as local testing procedures. Contributors are encouraged to maintain code quality through pre-commit hooks and to handle confidential data responsibly. For support, links to GitHub Issues and the Anthropic Discord are provided.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/classification/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces Promptfoo, a tool designed for evaluating prompts using different large language models (LLMs). It provides a comprehensive guide for setting up and running evaluations with prerequisites including Node.js and npm. Users can import prompts, connect to various LLM providers, and run tests utilizing a configuration file (`promptfooconfig.yaml`). Key features include the ability to handle multiple prompt formats, define transform functions for output testing, and specify output file formats. The evaluation process involves setting environment variables for API keys and executing commands in the terminal. Additionally, users can adjust the concurrency of requests to optimize performance. Finally, it encourages users to analyze results in conjunction with a previously established guide.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the creation of a high-accuracy insurance support ticket classification system, aiming to categorize tickets into 10 distinct categories. It highlights techniques to improve accuracy from 70% to over 95% by utilizing prompt engineering, retrieval-augmented generation (RAG), and chain-of-thought reasoning with large language models (LLMs). The guide entails setting up an environment with required packages, preparing data, crafting structured prompts, and evaluating model performance through various metrics.

Key features include the definition of ticket categories, the use of a vector database for enhanced classification, and a thorough evaluation framework using confusion matrices. The post also establishes baseline performance with a random classifier to validate the effectiveness of the implemented classification strategies. By employing LLMs, the guide emphasizes achieving high accuracy even with limited training data, significantly outperforming traditional machine learning methods.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces enhancements to Retrieval Augmented Generation (RAG) through Contextual Retrieval, which allows Claude to better utilize internal knowledge bases for improved workflows in various enterprise applications. A key feature is Contextual Embeddings, which augment document chunks with relevant context to enhance retrieval accuracy, reducing retrieval failure rates by 35%. The post details a guide to build and optimize a Contextual Retrieval system using nine codebases, covering set-up, performance evaluation, and implementation of Contextual BM25 for further improvements. Performance metrics showed significant gains, with Pass@10 scores increasing from ~87% to ~95%. The guide also highlights prompt caching to manage costs effectively. This method is specifically compatible with AWS and GCP platforms, supporting organizations in deploying RAG solutions efficiently.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/knowledge_graph/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the evaluation process for knowledge graph extraction, specifically focusing on scoring entity and relation extraction against a hand-labeled gold set. Users are guided on how to run the evaluation script after setting up dependencies and configuring their API key.

Key metrics for assessment include Precision (P), Recall (R), and F1 scores for both entities and relations. An entity is considered a true positive if its canonicalized name matches a gold entity, while relation accuracy hinges on matching canonicalized pairs, ignoring predicate wording. Baseline scores were recorded, with entity metrics showing P values between 0.80–0.90 and R values from 0.70–0.85, while relation metrics showed P values of 0.70–0.85 and R values of 0.55–0.70. The post emphasizes the conservative nature of the extractor, which may favor precision over exhaustive coverage.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/knowledge_graph/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the construction of knowledge graphs using Claude, addressing the challenge of extracting structured information from unstructured documents. The traditional methods of creating knowledge graphs—such as training named-entity recognizers and relation classifiers—are streamlined into prompt-driven tasks with Claude. Key highlights include:

1. **Extraction of Entities and Relations**: Users learn to leverage structured outputs for extracting entities and subject-predicate-object triples without requiring training data.
2. **Entity Resolution**: Claude helps cluster overlapping entities to form canonical nodes, minimizing fragmentation in the knowledge graph.
3. **Graph Assembly and Querying**: Users can assemble an in-memory graph using the extracted entities and relations, enabling multi-hop reasoning.
4. **Quality Measurement**: Techniques for measuring extraction quality, comparing tools like Haiku and Sonnet, are discussed.
5. **Integration**: The knowledge graph can be scaled to platforms such as Neo4j and Postgres.

This guide facilitates an efficient and effective approach to knowledge graph creation using Claude's capabilities.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/retrieval_augmented_generation/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post details the use of Promptfoo for evaluations, requiring node.js and npm for installation. It outlines the evaluation process organized through `promptfooconfig.yaml` files, with separate configurations for retrieval and end-to-end assessments. 

Key features include:

- **Prompt Management**: Importing prompts in various formats with the use of placeholders for dynamic evaluations.
- **Custom Providers**: Instead of standard LLM providers, custom retrieval methods are implemented.
- **Test Frameworks**: Utilizing datasets with expected result columns to automate assertions and ensure accuracy.
- **Flexible Outputs**: Results can be exported in multiple formats, or viewed via Promptfoo's web UI.

The article provides commands for executing evaluations of both systems, emphasizing environment variable setup and the ability to experiment with different models and testing frameworks.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the significance of Retrieval Augmented Generation (RAG) for enhancing Claude’s performance in answering domain-specific queries. RAG allows Claude to utilize internal knowledge bases, thus improving workflows across various sectors, including customer support and legal analysis. The post outlines a step-by-step guide to building a RAG system using Claude documentation as the knowledge base. Key features include setting up a basic RAG system, creating a robust evaluation framework, and implementing advanced techniques like summary indexing. Quantifiable improvements were observed in performance metrics, with notable increases in Average Precision (from 0.43 to 0.44), Average Recall (0.66 to 0.69), End-to-End Accuracy (71% to 81%), and others. The article also emphasizes the need for careful evaluation of retrieval and overall system accuracy, suggesting a methodical approach to testing and optimization.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/summarization/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive overview of the Promptfoo evaluation suite, which is designed for assessing language model performance. Key announcements include the need for specific prerequisites such as Node.js and npm, as well as additional Python dependencies like NLTK and ROUGE. Users are instructed to set their API keys and navigate the evaluation directory to run tests using the command line.

Important features of Promptfoo include its configuration file `promptfooconfig.yaml`, which outlines prompts, providers, and test cases. The suite offers various evaluation metrics, including BLEU for text similarity and ROUGE for summarization quality, alongside custom metrics assessing coherence and relevance. Users are also advised on managing Python binaries to ensure proper execution of the suite.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on using Claude for summarizing legal documents, particularly focusing on the intricacies common in such texts. Key topics include effective prompt crafting, handling long documents by overcoming token limit restrictions, and evaluating summary quality using automated metrics like ROUGE scores.

The guide elucidates advanced techniques such as multi-shot summarization, where examples are provided to enhance output quality, and guided summarization, which directs Claude to concentrate on specific aspects relevant to the document type. Moreover, domain-specific adaptations are discussed, allowing tailored summaries for particular legal contexts, such as sublease agreements. 

By the end, readers will be equipped with various strategies to refine summarization tasks and optimize workflows for legal documentation.

---

### [01_The_chief_of_staff_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of an AI Chief of Staff agent using the Claude Code SDK, focusing on enhancing agent capabilities for a startup's operational needs. Key features introduced include:

1. **Memory Utilization with CLAUDE.md**: Allows persistent context storage to improve agent efficiency and consistency in responding to queries without repetitive context provision.
   
2. **Bash Tool for Python Execution**: Enables agents to execute Python scripts for complex tasks, such as financial modeling and data analysis essential for decision-making.

3. **Output Styles**: Facilitates tailored communication styles for different user needs, enhancing engagement with varied audiences.

4. **Plan Mode**: Introduces a strategic planning feature that allows agents to draft plans without executing them, facilitating oversight and discussion before decisions are made.

These updates aim to streamline operations and empower the AI agent to deliver data-driven insights effectively.

---

### [05_Building_a_session_browser.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/claude_agent_sdk/05_Building_a_session_browser.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a session browser using the Claude Agent SDK, emphasizing the importance of session management for user interaction in applications like chatbots or IDE extensions. Key features include:

- Writing conversation transcripts to JSONL format and offering functions to read and organize them, enabling users to navigate past sessions easily.
- The ability to list, render, and display session metadata, and to retrieve messages without needing to run the agent.
- Features for user customization, including renaming sessions, tagging, and capability for forking conversations to branch and continue discussions without altering the original.
- All operations are performed as file manipulations, allowing seamless session management independent of agent activity.

The blog also encourages building a UI around these functionalities and discusses synchronization across machines for session sharing.

---

### [CMA_with_mongodb_atlas.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/managed_agents/CMA_with_mongodb_atlas.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for integrating MongoDB Atlas with Claude Managed Agents (CMA) to create a human-in-the-loop fraud review agent. Key features include:

1. **Unified Data Engine**: MongoDB serves as a comprehensive retrieval engine and operational data store, supporting vector, full-text, hybrid, and graph searches—all managed with a single query language and cluster.

2. **Credential Safety**: The integration safeguards database credentials by ensuring they remain within the application context, never entering the agent's sandbox.

3. **Custom Tool Development**: Users can implement their own custom tools for data retrieval and decision-making, leveraging MongoDB's capabilities.

4. **Vertical-Agnostic Patterns**: Although demonstrated with fraud review, the techniques apply to various domains, enabling flexibility for different use cases.

The guide provides practical steps on connecting MongoDB Atlas, managing data retrieval patterns, and successfully implementing the human-in-the-loop framework for agent operations.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for building content moderation filters using the Claude AI model. The primary method involves creating a tailored prompt that defines "ALLOW" and "BLOCK" categories for user-generated text. Users can easily customize moderation rules by modifying the prompt's content, making it adaptable for various contexts, like niche forums. The post provides an example of a Python function that sends text to Claude for classification, highlighting the model's ability to categorize comments based on specified guidelines. Additionally, the guide discusses advanced techniques such as "chain-of-thought" prompting and incorporating examples to improve Claude's reasoning capabilities and performance in nuanced categorization tasks. Overall, it emphasizes flexibility and customization in utilizing AI for effective content moderation.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses techniques for effectively prompting the Claude model to generate reliable JSON outputs. It highlights that while the legacy model Claude Haiku 4.5 can utilize assistant-message prefill for streamlined JSON responses, current models like Claude Opus 5.5 require structured outputs for guaranteed JSON formatting. Key methods outlined include:

1. **Direct JSON Request**: A standard JSON request demonstrates Claude’s ability to produce valid JSON.
2. **Prefilling to Avoid Preambles**: By pre-filling a response with a "{" character, users can instruct Claude to provide JSON immediately, bypassing introductory text.
3. **Using XML Tags**: For complex prompts, the model can format multiple JSON outputs in designated XML tags for easier extraction using regular expressions.

These techniques enhance user control over output formatting, simplifying subsequent data processing.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Metaprompt**, a user-friendly tool for prompt engineering aimed at addressing the "blank page problem." Users can enter a specific task and optional variable names to generate a prompt template. Key features include:

1. **Single-turn Focus**: Designed for single-turn question/response interactions, not multiturn conversations.
2. **No Coding Required**: Users follow straightforward steps, such as installing the required package and inputting their Claude API key and task.
3. **Example-driven**: The Metaprompt utilizes a long multi-shot prompt containing various instructive examples to guide its output.
4. **Customization**: Users can test the generated prompt with example values before finalizing.

The tool aims to enhance creativity and efficiency in generating prompts for AI interactions.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a step-by-step guide for summarizing web page content using Anthropic's Claude API. Key points include the installation of necessary libraries, specifically the Anthropic library, and setting up an API client with an API key. It illustrates how to request web page content using the `requests` library, emphasizing the importance of including a user-agent header to avoid access issues. The content is then prepared for the Claude API by formatting it in a prompt that asks for a concise summary. Finally, it details how to generate the summary by calling the Claude API and parsing the response to extract the summary text. The tutorial is practical for developers interested in leveraging AI for content summarization.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method for obtaining responses from Claude that exceed the maximum token limit in a single request. It utilizes the legacy model `claude-haiku-4-5`, which supports a technique involving assistant-message prefill. The post notes that current models can handle larger outputs (up to 128K tokens) but will return a 400 error if the request ends with an assistant message. To work around the `max_tokens` limitation, the author illustrates how to use a partially completed response to prompt Claude to continue generating the content seamlessly. However, users should be aware that while this method incurs "double-charges" for input tokens, output tokens are only charged once, allowing for extended narrative creation.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a procedure for analyzing Apple's 2023 financial earnings reports using Claude Haiku 5.5 sub-agent models. The process begins with setting up the development environment and downloading financial statement PDFs. Key steps include converting these documents into base64-encoded images to facilitate information extraction, as traditional PDF parsing proves challenging with formatted tables. 

The blog details how to formulate specific prompts for the Haiku sub-agents using Claude Opus 5.5, process the PDFs concurrently for data extraction, and compile the information. Finally, it demonstrates generating a comprehensive response to a user-provided question regarding net sales and creating a visual graph using matplotlib to illustrate the findings. The implementation emphasizes an efficient, modern approach to analyzing and visualizing corporate financial data.

---

### [low_latency_stt_claude_tts.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of a low-latency voice assistant using ElevenLabs for speech-to-text and text-to-speech capabilities, integrated with Claude for intelligent responses. Key features include:

1. **Installation and Setup**: Instructions for installing necessary dependencies and setting up API keys for ElevenLabs and Anthropic.
   
2. **Latency Optimization**: Demonstrates the performance improvements achieved through Claude's streaming API, enhancing response times significantly compared to traditional methods.

3. **Streaming Techniques**: Implementation of audio streaming for text-to-speech that reduces silence and improves response coherence, utilizing a WebSocket API to maintain context across audio streams.

4. **Production-Ready Solution**: Discussion of challenges such as continuous audio playback, microphone input handling, and maintaining conversational context, culminating in a complete voice assistant script.

Overall, this approach aims to facilitate the creation of a real-time, high-quality voice assistant.

---

### [rag_using_pinecone.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/third_party/Pinecone/rag_using_pinecone.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post outlines the process of implementing retrieval-augmented generation (RAG) using Claude and Pinecone's vector database. Key steps include embedding a dataset of Amazon product descriptions using Voyage AI, uploading the embeddings into a Pinecone index, and leveraging Claude to answer user queries based on this data. 

The tutorial begins with setting up necessary API keys for Claude, Pinecone, and Voyage AI, followed by downloading and preparing the Amazon products dataset. Users are guided through creating a Pinecone index, generating embeddings, and populating the index. 

The post also emphasizes improving search results by generating diverse search keywords from user queries and using these to retrieve relevant product descriptions. Ultimately, Claude formats the results and answers the user's question utilizing the information from the vector database.

---

### [using_llm_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/third_party/WolframAlpha/using_llm_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for integrating the Wolfram Alpha LLM API with the Claude AI, enhancing its ability to provide computed responses to user inquiries. Key steps include:

1. **Environment Setup**: Instructions for installing necessary libraries and configuring the Claude API client, along with obtaining a Wolfram Alpha App ID.

2. **Tool Definition**: Development of a `wolfram_alpha_query` function that URL-encodes user queries and sends them to the Wolfram Alpha API, managing responses and errors appropriately.

3. **Claude Interaction**: Details on how Claude can utilize the Wolfram Alpha tool to process user questions, including parsing tool calls and constructing responses.

4. **Testing**: Example queries demonstrate Claude's capability in answering complex questions, such as identifying populous countries and performing mathematical calculations.

This integration allows Claude to leverage Wolfram Alpha’s extensive knowledge base effectively.

---

### [context_engineering_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/tool_use/context_engineering/context_engineering_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses strategies for managing context in long-horizon AI agents, particularly addressing the challenges related to context accumulation and "context rot." It introduces three key strategies for effective context engineering: **compaction**, **tool-result clearing**, and **memory**. 

- **Compaction** summarizes lengthy conversations to maintain performance. 
- **Tool-result clearing** manages results from tool usage by removing old, re-fetchable outputs while keeping the tool call record. 
- **Memory** allows agents to persistently store notes, enabling continuity across sessions. 

These strategies are implemented via an API, providing essential tools for developers working on complex AI tasks. The blog highlights the importance of understanding each tool's application for optimizing agent performance in longitudinal tasks, demonstrated through a prototype research agent analyzing biological documents.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses leveraging Claude's tool use capabilities for extracting structured JSON data across different natural language processing tasks. Key examples include:

1. **Article Summarization**: Claude generates a JSON summary outlining the author, topics, summary, coherence, persuasion score, and counterpoint.
2. **Named Entity Recognition**: It extracts named entities from text, providing their names, types (e.g., PERSON, ORGANIZATION), and context in JSON format.
3. **Sentiment Analysis**: Claude analyzes a text's sentiment and returns positive, negative, and neutral scores as JSON.
4. **Text Classification**: The model classifies text into predefined categories with corresponding scores, formatted as JSON.
5. **Handling Unknown Keys**: A flexible schema is used to extract arbitrary characteristics of a character from a description.

These examples showcase how custom tools and defined input schemas can facilitate structured JSON output for various NLP applications.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the challenges faced by AI agents during long-running tasks and conversations, particularly regarding memory retention and context management. It introduces Claude's memory tool and context editing capabilities as solutions. Key features include:

1. **Memory Tool**: Allows AI to retain learned information across sessions via a file-based system.
2. **Context Editing**: Manages the limitations of context windows, with strategies for purging outdated information while preserving essential learned patterns.

The post presents various use cases such as code review assistants, research aids, and customer support bots that benefit from these features. Additionally, it includes technical prerequisites and setup instructions for implementing the memory and context management functions in practical applications. Ultimately, these tools enhance AI agents' effectiveness in repetitive tasks by enabling them to "remember" and apply previous insights, similar to human learning.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/c43f56d0360b9b1f631bd090fd199231d4c880cc/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `tool_choice` parameter for Claude, highlighting its three options: `auto`, `tool`, and `any`. 

1. **Auto**: This is the default setting, allowing Claude to decide if tool usage is needed. Demonstrations show Claude responding appropriately to queries, using tools only when necessary, backed by effective prompting.

2. **Tool**: This forces Claude to use a specified tool for responses. Examples demonstrate its reliability, but caution is advised as it can still call other tools unless configured to disable parallel usage.

3. **Any**: This requires Claude to use one of the available tools for every response, suitable for specific applications like SMS chatbots, ensuring tools are consistently engaged.

The post emphasizes the importance of careful prompt engineering and offers coding examples to illustrate each tool choice effectively.