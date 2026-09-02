---
title: Claude’s Ecosystem Trends - AI Automation and Accuracy Rise
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 09-02"
---
**Meta-Summary of Key Trends and Announcements**

Across these blog posts, several significant trends and announcements emerge regarding the application and ecosystem growth of Claude and other advanced language models:

1. **Proliferation of Retrieval-Augmented Generation (RAG):**
   - Multiple tutorials and guides demonstrate the widespread adoption of RAG architectures using Claude, often integrating with vector databases like MongoDB and Pinecone, frameworks such as LangChain and LlamaIndex, and innovative enhancements like contextual embeddings and summary indexing. These approaches enable more accurate, context-aware, and domain-specific query handling in business and technical settings.
   
2. **Tool and Agent Ecosystem for Enhanced Automation:**
   - New workflows and agent architectures leverage Claude’s capabilities with integrated tools (e.g., calculators, note-saving, security scanner managers, customer service functions). The agent-based approaches, including ReAct and router/subquestion engines, allow modular, scalable automation across tasks such as document analysis, mathematical reasoning, and multi-source data retrieval.
   
3. **Domain-Specific Solutions with High Accuracy:**
   - Posts highlight practical applications in insurance support, customer service, financial analysis (e.g., parsing earnings PDFs), and legal summarization. By combining prompt engineering, RAG, chain-of-thought reasoning, and finetuning (e.g., via Amazon Bedrock), these solutions achieve markedly improved performance, exceeding 95% accuracy in targeted tasks.
   
4. **Evaluation and Quality Methodologies:**
   - There’s a consistent emphasis on rigorous evaluation—manual, automated (model-based grading), or code-based—and bespoke metric selection (e.g., ROUGE for summarization). This focus ensures that new LLM-powered systems are reliably benchmarked against real-world requirements.
   
5. **Multi-Modal and Structured Data Capabilities:**
   - Claude's multi-modal powers are demonstrated through image understanding, structured output extraction (JSON/XML), and combined workflows with speech-to-text (Deepgram) and document parsing for holistic pipeline creation. Notable techniques include practical JSON extraction, extending output lengths via continuation prompts, and parsing visual data like nutrition labels.
   
6. **Developer-Focused Resources and Best Practices:**
   - The ecosystem is seeing richer educational resources (e.g., Claude Cookbooks), detailed setup guides for model use and agent development, and strong emphasis on best practices: dependency management, testing, documentation, notebook organization, and secure API key handling.

**In summary, the Claude ecosystem is rapidly advancing in the areas of retrieval-augmented systems, agent and tool integration, domain-specific accuracy, rigorous evaluation, multi-modal processing, and developer enablement—enabling highly structured, automated, and robust AI solutions across a growing range of complex, enterprise-grade scenarios.**

## New Cookbook Recipes

### [security_scanners_with_agents_sdk.ipynb](https://github.com/openai/openai-cookbook/blob/a78f3f37bd23637aac2b3f1e8b1251cf5bb9e1a7/examples/agents_sdk/security_scanners_with_agents_sdk.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a new workflow that integrates security scanners with the OpenAI Agents SDK, aimed at enhancing security review processes. Key features include a manager agent that dynamically selects specialist agents to assess code findings from static analysis tools like Semgrep and Bandit. The workflow involves collecting scanner findings, validating them, and crafting a Codex `/goal` prompt for review before implementing any fixes.

Essential technical requirements for the implementation are detailed, including the need for Python 3.12, specific library versions, and API key permissions. The architecture leverages static source analysis, ensuring findings reference inspected files and mandates a review sequence. The post also discusses potential extensions to include runtime checks, along with the setup for scanning selected vulnerable GitHub projects. Overall, this integration aims to streamline code vulnerability assessments through a structured and automated approach.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Claude Cookbooks," a set of Jupyter notebooks and Python examples designed to facilitate development with the Claude API. Key features include a quick start installation guide, development commands for code formatting, linting, and testing, and a structured Git workflow that emphasizes conventional commit formats. 

The document outlines important rules for managing API keys and dependencies, specifying the correct usage of current Claude models and their respective identifiers. Notebooks should maintain outputs for demonstration and be organized by concepts. Quality checks through the `make check` command and pre-commit hooks are mandated.

Additionally, slash commands for notebook review and model validation are provided. The project structure is well-defined, categorizing core capabilities, evaluation patterns, and advanced skills, among others. Guidance for adding new cookbooks includes creating notebooks and maintaining documentation standards.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post details the creation of a high-accuracy insurance support ticket classifier utilizing Claude, an advanced large language model (LLM). The guide illustrates a method to enhance classification accuracy from 70% to over 95% through techniques like prompt engineering, retrieval-augmented generation (RAG), and chain-of-thought reasoning. 

Key steps include preparing training and test datasets, crafting structured prompts, implementing RAG for effective data retrieval, and establishing a robust evaluation framework to measure performance. The system targets ten classification categories covering various aspects of insurance support, such as billing inquiries and claims assistance. By leveraging LLM capabilities, this approach promises to improve categorization efficiency and provide natural language explanations, thereby enhancing the interpretability of the classification process.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses advancements in Retrieval Augmented Generation (RAG) through the introduction of Contextual Embeddings, which significantly enhance retrieval performance. By incorporating relevant context into document chunks before embedding, this method improves retrieval accuracy, reducing the failure rate of top-20 retrievals by 35%. Key features include setting up a retrieval pipeline, implementing Contextual Embeddings, and using a contextualized BM25 search. The evaluation, conducted on a dataset of nine codebases, demonstrated an increase in Pass@10 scores from approximately 87% to 95%. Additionally, prompt caching is highlighted as a cost-effective strategy for managing API usage, with context generation occurring only at ingestion, not during query execution. The post provides guidance for technical implementation, including necessary libraries and setup instructions.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of Retrieval Augmented Generation (RAG) using the Claude AI model, aimed at enhancing responses to domain-specific queries within business contexts. Key announcements include the framework for building a RAG system, which utilizes internal knowledge bases and customer support documents. The guide outlines three primary steps: setting up a basic RAG system with an in-memory vector database, developing a robust evaluation system, and employing advanced techniques like summary indexing and re-ranking.

The results indicate significant performance improvements, with metrics such as Average Precision increasing from 0.43 to 0.44, Average Recall from 0.66 to 0.69, and End-to-End Accuracy rising from 71% to 81%. The post emphasizes the importance of rigorous evaluation methods to ensure the efficiency and accuracy of RAG applications in various enterprise settings.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude for summarization, particularly focusing on legal documents. Key topics include:

- Effective prompt crafting for summarization.
- Data preparation techniques for extracting text from PDFs.
- Basic and advanced summarization methods, including multi-shot learning and guided summarization.
- Strategies for evaluating summary quality using metrics like ROUGE scores and tailored approaches.
- Iterative methods to enhance summarization accuracy and performance.

The guide emphasizes the importance of adapting summarization techniques to specific document types, like sublease agreements, ensuring clarity and relevance. Additionally, it discusses the challenges of summarization evaluations, highlighting the need for a bespoke approach to achieve optimal results.

By mastering these techniques, users will be equipped to efficiently summarize legal documents and improve their workflows in natural language processing tasks.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a detailed guide on finetuning the Claude 3 Haiku model on Amazon Bedrock. It outlines the necessary prerequisites, including an AWS account, a dataset in JSONL format, and a service role for accessing S3. The dataset must consist of alternating user and assistant messages, with a minimum structure specified. The article presents a sample dataset that teaches the model to respond in JSON format. Steps for uploading the dataset to S3 and configuring the finetuning job with specified hyperparameters using the Boto3 library are also covered, along with code snippets. Lastly, it explains how to check the job status and host the finetuned model using Provisioned Throughput in Amazon Bedrock for API invocation.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the process of building evaluations (evals) for the Claude model, emphasizing the empirical science involved in optimizing model accuracy. It outlines the four main components of an eval: an input prompt, the model's output, a golden answer for comparison, and a scoring mechanism. 

Three grading methods are highlighted: **code-based grading**, which is quick and reliable but limited in scope; **human grading**, which offers flexibility but is slow and costly; and **model-based grading**, where Claude assesses its own outputs using a specially designed grader prompt, thus providing a faster automated solution.

The post concludes with design recommendations, advocating for creating specific evals that reflect real-life question distributions and exploring innovative formats, such as multiple choice, to facilitate automated grading.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses techniques for efficiently obtaining JSON responses from Claude, despite the absence of a formal "JSON Mode." Key methods include utilizing the API to generate structured JSON directly, pre-filling responses to minimize unnecessary content, and using tags to organize complex outputs.

1. **Basic JSON Extraction**: Users can execute commands that prompt Claude to produce dictionaries, which can then be extracted using string manipulation.

2. **Prefilled Responses**: By prefilling responses with a "{" character, users can direct Claude to start immediately with JSON output.

3. **Tagging for Complex Outputs**: For intricate prompts, the blog suggests enclosing outputs in specific XML-like tags, allowing easier extraction with regular expressions.

In summary, the post highlights practical approaches to streamline extracting structured data from Claude's outputs.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post demonstrates how to utilize Claude, an AI language model from Anthropic, to generate SQL queries from natural language questions. It begins with setup instructions, including the installation of necessary libraries and the configuration of the Anthropic API client. A test SQLite database is created, populated with sample employee data, and the database schema is defined. 

The core feature discussed is a function that allows users to input natural language questions, which Claude then translates into SQL queries. An example question about retrieving names and salaries of employees in the Engineering department is used to illustrate this process. Finally, the generated SQL query is executed against the test database, and the results are printed. The blog emphasizes the effectiveness of Claude in understanding and converting human language to SQL syntax.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method to extend the response length of the Claude AI model beyond its 4096 max_tokens limit by utilizing a prefill technique. By initially prompting Claude to write five stories of at least 1000 words, the response is cut off due to the token limit. To overcome this, the partially completed response is incorporated into a follow-up message, allowing Claude to continue seamlessly from where it left off. The author notes that this method results in double charges for input tokens but does not incur double charges for the output tokens. This technique offers a practical solution for users needing longer outputs from Claude.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a comprehensive methodology for analyzing Apple's 2023 financial earnings reports using Claude’s Haiku sub-agent models. Key steps include setting up the environment and API client, gathering earnings release PDFs, and constructing a specific prompt to extract relevant data regarding quarterly net sales. The process involves downloading the PDFs, converting them to images, and employing thread handling for efficiency. Using the Haiku model, the extracted information is formatted into XML and passed to the Opus model, which formulates a response and generates Python code for data visualization with matplotlib. Finally, the blog emphasizes the need for caution when executing model-generated code, suggesting the use of sandbox environments for security. This approach showcases the capabilities of AI models in financial data analysis and visualization.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a tutorial on how to transcribe audio files using Deepgram and generate interview questions with Anthropic. The process involves copying a provided notebook and following specific steps. Users need to install essential dependencies, input their Deepgram API key and desired audio file URL, and execute the code cells to obtain a transcription in JSON format. The tutorial further guides users on how to parse the JSON file to extract readable transcription text. Finally, the transcribed content is sent to the Anthropic API to generate thoughtful interview questions, enhancing the utility of the transcription. This integration serves as a valuable tool for preparing for interviews based on recorded discussions.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process of building a Basic Retrieval-Augmented Generation (RAG) Pipeline using LlamaIndex. Key steps include setting up a large language model (LLM) and embedding model with the latest Claude 3 Opus. The detailed installation process involves installing necessary packages and setting up API keys for Anthropic. Data is downloaded, indexed, and then used to create a query engine that can respond to user queries. A test query is showcased, illustrating how the pipeline effectively retrieves relevant information from the indexed documents. This comprehensive guide serves as an introduction to utilizing LlamaIndex for RAG implementations.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a Multi-Document Agent system using the `DocumentAgents` concept and `ReAct Agent` framework for constructing a Retrieval-Augmented Generation (RAG) pipeline. Key announcements include the installation of relevant libraries such as `llama-index` and setting up logging for Jupyter notebooks. It highlights the integration of the `Claude-3 Opus` language model from Anthropic and a Hugging Face embedding model. The post outlines the process of downloading and loading Wikipedia pages of major cities (Toronto, Seattle, Chicago, Boston, Houston) to build individual ReAct agents for each city. It details the creation of vector and summary indexes along with the definition of tools for querying. Finally, it demonstrates how to query specific information using the agents, showcasing the effectiveness of tailored responses based on the selected tools.

---

### [Multi_Modal.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/Multi_Modal.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Anthropic MultiModal LLM, focusing on its application for image understanding and reasoning. Key highlights include:

1. **Installation Instructions**: Steps to install necessary packages such as `llama-index` and related libraries are provided.
2. **API Setup**: Users are guided to set up their Anthropic API key for enabling functionality.
3. **Image Processing**: Demonstrations are given for loading images from local files and URLs, alongside tools for visualizing them.
4. **Text Description Generation**: The MultiModal LLM is utilized to create descriptive text for the images based on prompts.
5. **Structured Output Parsing**: A Pydantic program is employed to extract and format specific information, such as stock data, from images into JSON format.

Overall, the post serves as a practical guide for leveraging the Anthropic model in multi-modal scenarios, emphasizing ease of use in processing images.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the ReAct Agent, highlighting its application over various tools. Key features include the installation of essential libraries and the setup of API keys for the Anthropic LLM, specifically employing the latest Claude-3 Opus model. The ReAct Agent is designed to work with simple mathematical functions, demonstrated through multiplying and adding integers. Additionally, it showcases the agent’s capabilities in querying financial data from Uber and Lyft’s SEC filings for 2021. The post also emphasizes the agent's ability to generate structured responses from complex queries, while displaying the underlying prompts used for selection. Overall, the ReAct Agent serves as a versatile tool for combining computational functions with advanced query handling in real-world data contexts.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, a system designed to route user queries to various available query engine tools, enabling efficient handling of user inquiries across different documents and indices. Key announcements include the installation of necessary packages such as `llama-index`, `llama-index-llms-anthropic`, and `llama-index-embeddings-huggingface`. The setup involves configuring logging for Jupyter notebooks and providing an API key for the `Claude-3 Opus` LLM.

The post details the creation of a summary index for summarization queries and a vector index for specific context questions related to Paul Graham's essay. Furthermore, it showcases the development of query engine tools for both summarization and vector queries and the implementation of a Router Query Engine that selects between these tools. Test queries demonstrate the functionality of the system for extracting summaries and contextual information from the document.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, a tool designed to simplify complex queries that span multiple documents by decomposing them into sub-queries. Key announcements include installation instructions for relevant libraries and the use of the latest anthropic LLM, Claude-3 Opus, along with a Hugging Face embedding model. The post details a practical implementation involving the analysis of 2021 SEC filings from Uber and Lyft, demonstrating how to load data, create vector store indices, and establish query engines. It also showcases querying capabilities, such as retrieving revenue figures for both companies and comparing revenue growth and investments between them. The `SubQuestionQueryEngine` allows for efficient querying across different data sources, enhancing overall data analysis and retrieval processes.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post presents a tutorial on building a Retrieval-Augmented Generation (RAG) system using Claude 3 and MongoDB. Key components of the tutorial include:

1. **Development Setup**: Guidance on setting up the environment with essential libraries and preparing a MongoDB database.
2. **Data Management**: Efficient data handling techniques, including creating vector search indexes and preparing articles for ingestion.
3. **Model Integration**: Implementation of Claude 3 models to generate responses based on contextual information stored in the database.
4. **Vector Search Setup**: Instructions for creating a vector search index in MongoDB and ingesting data from a dataset.
5. **User Query Handling**: A detailed approach for managing user queries, including embedding generation and performing vector searches to complement the chatbot's responses.

The tutorial includes practical code snippets and essential prerequisites, such as obtaining API keys and configuring database connections.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the enhancements introduced in LangChain v1, focusing on the development of a Retrieval-Augmented Generation (RAG) agent utilizing Claude 3. Key improvements include a clearer initialization and operation process for agents. The post outlines the steps for building a RAG agent, which involves setting up knowledge retrieval using a dataset from Hugging Face and embedding models from Voyage AI. Pinecone is utilized as the vector database for storing and querying embeddings. Additionally, it describes creating an XML agent specifically designed for Anthropic models and implementing a memory system to allow the agent to maintain conversational context, enhancing its ability to provide relevant responses based on past interactions. Overall, the article emphasizes the streamlined approach and improved capabilities of LangChain v1 for developing intelligent agents.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the integration of a calculator tool within the Claude AI framework, enabling Claude to perform arithmetic operations based on user input. Key steps include setting up the environment using the Anthropics API and defining a calculator function that sanitizes and evaluates mathematical expressions. The tool is designed to handle basic operations and return results, while also managing potential errors during evaluation. Interaction with Claude is facilitated through a chat function that allows users to pose math questions, with subsequent calls to the calculator to compute answers. The post provides examples demonstrating Claude's functionality, such as solving complex arithmetic expressions.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the creation of a customer service chatbot utilizing Claude 3 and client-side tools. Key features include the chatbot's ability to retrieve customer information, order details, and process order cancellations. The post outlines the steps for setting up the environment and installing necessary libraries, followed by the definition of three essential tools: `get_customer_info`, `get_order_details`, and `cancel_order`. Synthetic responses are simulated to demonstrate the chatbot's functionality without real customer data. The process includes handling tool calls and integrating user interactions for seamless communication. Finally, the chatbot is tested with sample queries, showcasing its capabilities. The author encourages further enhancement by integrating real databases and expanding the toolset for broader customer service applications.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post demonstrates the development of a note-saving tool using Pydantic and the Anthropic API. Key steps include setting up the environment, defining Pydantic models for validating note input and responses, and creating a client-side tool for saving notes. The models include the Author, Note, and SaveNoteResponse structures, ensuring adherence to a specified schema. A sample function for saving a note is provided, which is integrated with the chatbot's interaction process. The chatbot processes user queries, utilizes the note-saving tool, and generates responses while validating incoming data with Pydantic. This approach enhances reliability and ensures accurate note management within chatbot interactions. The implementation is illustrated with a test case, showing how a user can save a private note.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/26b5cdce81d357596f5df7f44f50908a80be40cf/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a method for using Vision in conjunction with a tool to analyze nutrition labels and extract structured information. It begins with the installation of necessary libraries and the setup of an API client for Claude. A custom extraction tool, "print_nutrition_info," is defined to retrieve key nutritional data such as calories, total fat, cholesterol, total carbohydrates, and protein from an image. The process involves loading a nutrition label image, encoding it in base64, and passing it to Claude alongside a prompt. Finally, the post demonstrates how to display the structured nutrition information returned by the tool in a JSON format. This integration showcases the capabilities of AI in processing and interpreting visual data.