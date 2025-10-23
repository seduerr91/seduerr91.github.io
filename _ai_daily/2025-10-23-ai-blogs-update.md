---
title: Claude API Trends and Innovations You Need to Know
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-23"
---
**Claude API Blog Meta-Summary: Key Trends and Announcements (2024)**

The recent collection of blog posts reflects several significant trends and feature announcements across the Claude API and its ecosystem:

### 1. **Advances in Retrieval-Augmented Generation (RAG) and Contextual Retrieval**
- New contextual retrieval methods (including Contextual Embeddings, RAG with custom knowledge bases, Contextual BM25, and summary indexing) substantially enhance Claude’s information retrieval accuracy for tasks in customer support, finance, and legal sectors.
- Posts highlight practical guides on building RAG pipelines with Claude—using both internal (Claude Documentation, MongoDB, Pinecone) and external tools (LlamaIndex, LangChain)—and demonstrate marked improvements in both performance metrics and evaluation methodologies.

### 2. **Enhanced Structured Data Handling**
- Claude now natively supports advanced structured outputs: extracting structured JSON from diverse text and image inputs, generating SQL queries from natural language, and producing reliable JSON even in multi-turn or complex scenarios.
- The introduction of specialized tools (for summarization, sentiment analysis, metadata extraction, note-keeping, nutritional info extraction, and more) underscores the trend towards automation and integration with enterprise data workflows.

### 3. **Expanded File and Media Processing**
- Claude’s capabilities have been extended to ingest, analyze, and summarize PDFs (including charts, graphs, slide decks), with API-based file uploads (beta) and fine control over content extraction.
- Multimodal features include the ability to extract information from visual data (e.g., nutrition labels) and transcribe audio files for downstream text analysis.

### 4. **Agentic, Tool-Augmented, and Modular AI Systems**
- Multiple posts unveil modular architectures with tool integration, including ReAct agents, calculator and customer service bots, and the RouterQueryEngine/SubQuestionQueryEngine models, enhancing AI’s ability to chain tools, reason stepwise, and route complex queries for analytics and automation.
- The `tool_choice` parameter, robust prompt engineering guidance, and innovative prompt templates (e.g., Metaprompt) support greater transparency and control over tool invocation.

### 5. **Customizability, Automation, and Workflow Optimization**
- Skill packs and custom skills are now supported, allowing enterprises to codify organizational expertise, automate document generation, and streamline reporting—especially for specialized workflows like finance, code review, and brand governance.
- Batch processing and speculative prompt caching greatly reduce latency and operational costs, improving scalability for bulk and interactive use cases.

### 6. **Robust Evaluation, Monitoring, and Trust Features**
- Systematic frameworks for model evaluation (including code-based, human, and model-based grading) promote continuous improvement in AI accuracy and reliability.
- New admin APIs and detailed usage/cost reporting empower organizations to monitor token consumption, optimize costs, and ensure secure operations.
- The launch of built-in citation support in select Claude models increases transparency, allowing easier verification of AI outputs against source materials.

### 7. **Advanced Reasoning, Memory, and Extended Thinking**
- Claude 3.7 Sonnet’s extended thinking features unlock step-by-step reasoning, transparent decision-making, and support for managing large or complex discussions, while new memory/context management tools enable “learning” across sessions for more adaptive AI assistants.

---

**Conclusion**:  
Anthropic’s steady roll-out of new features and technical guides around Claude highlights a shift toward more robust, transparent, and workflow-integrated enterprise AI. With improvements spanning RAG, tool use, structured data handling, scalability, and customizable skills, Claude emerges as a comprehensive platform for building intelligent, context-sensitive, and trustworthy AI applications.

## New Cookbook Recipes

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post outlines a guide for building a customer support ticket classification system using Large Language Models (LLMs), specifically leveraging the Claude API. Key highlights include:

1. **Setup Requirements**: Users should install specific Python packages, including `anthropic`, `voyageai`, and others, and obtain necessary API keys.

2. **Classification Capabilities**: The guide emphasizes the advantages of LLMs in handling complex classification tasks with limited training data and providing natural language explanations.

3. **Steps for Implementation**:
   - **Data Preparation**: Preparing training and test datasets for the model.
   - **Prompt Engineering**: Crafting effective prompts to guide the LLM.
   - **Retrieval-Augmented Generation (RAG)**: Utilizing a vector database for improved classification accuracy.
   - **Testing and Evaluation**: Implementing performance evaluations with confusion matrices.

4. **Problem Definition**: The guide utilizes a synthetic dataset simulating support tickets in the insurance sector, providing a detailed categorization framework. The content covers methodology for classification and generating relevant insights through visualizations.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses advancements in Retrieval Augmented Generation (RAG) through the introduction of Contextual Retrieval, enhancing Claude's ability to utilize internal knowledge bases effectively. Key announcements include the potential for RAG applications in various sectors like customer support and legal analysis. 

The main feature highlighted is **Contextual Embeddings**, which enhance document chunks by adding relevant context before embedding, resulting in a significant 35% reduction in retrieval failures. The post demonstrates performance improvements with a dataset of 9 codebases, achieving an increase in Pass@10 performance from approximately 87% to 95%. Additionally, a hybrid search method called **Contextual BM25** is presented, further optimizing retrieval accuracy.

The implementation of prompt caching is noted for its cost management benefits during contextual embedding generation. Overall, the guide serves as a comprehensive resource for building optimized Contextual Retrieval systems.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of Retrieval Augmented Generation (RAG) with Claude, aimed at improving responses to domain-specific queries in business contexts. Key components include leveraging internal knowledge bases to enhance Claude’s capabilities in tasks such as customer support and financial analysis. The post outlines a guide to build and optimize a RAG system using Claude Documentation, detailing steps like setting up a basic RAG system, building an evaluation suite, and applying advanced techniques like summary indexing and re-ranking.

Significant performance improvements were recorded, with notable increases in precision, recall, F1 score, mean reciprocal rank (MRR), and overall accuracy. The post also emphasizes the importance of robust evaluation metrics to assess the systems effectively. For practical implementation, API keys and specific libraries are required to utilize Claude's functionality. The guide serves as a comprehensive resource for enterprises looking to enhance their workflows.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on using Claude for summarizing legal documents, which are often lengthy and complex. Key highlights include techniques for effective summarization, such as crafting specific prompts, extracting metadata, and handling extensive texts. The author discusses evaluating summary quality using automated methods like ROUGE scores, while also acknowledging the subjective nature of summary effectiveness based on context and audience.

The guide introduces various summarization techniques, including basic summarization, multi-shot learning for improved output structure, and advanced guided summarization tailored for specific document types like sublease agreements. The incorporation of domain-specific prompts enhances the relevance of summaries by focusing on critical aspects such as parties involved, property details, and key terms. By implementing these strategies, users can significantly improve their summarization workflows, particularly in legal contexts.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents the capabilities of Claude 3.7 Sonnet's extended thinking feature, which enhances reasoning for complex tasks and provides transparency into its thought process through internal reasoning blocks. Key functionalities include:

1. **Setup and Examples**: Instructions on setting up the environment and using extended thinking with basic examples.
2. **Streaming Responses**: Techniques for managing real-time outputs while extended thinking is enabled.
3. **Token Count Management**: Strategies for tracking token usage and understanding the context window limits of extended thinking.
4. **Redacted Thinking**: An explanation of how safety systems trigger redacted thinking blocks which are encrypted yet maintain context.
5. **Error Handling**: Guidance on common error scenarios related to token budgets, feature incompatibilities, and context window limits.

Overall, the post emphasizes the advanced reasoning capabilities and practical applications of Claude's extended thinking feature.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the extended thinking feature of Claude 3.7 Sonnet, which enhances the transparency of tool use by allowing users to observe step-by-step reasoning before a final answer is provided. Key functionalities highlighted include single tool calls, handling multiple tool calls, and preserving thinking blocks. Examples demonstrate how to integrate mock tools, such as weather and news services, with the system's reasoning process. The post emphasizes the importance of preserving the integrity of thinking blocks, including their cryptographic signatures, to maintain conversation context. Detailed coding examples illustrate these capabilities and guide users on setting up the required environment, including package installation and API key configuration.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process for finetuning the Claude 3 Haiku model on Amazon Bedrock, detailing necessary prerequisites such as an AWS account and a suitable dataset. It emphasizes that the dataset must be formatted as a JSONL file with a specified structure of user and assistant messages. Users are guided through uploading their dataset to Amazon S3, configuring job parameters, and launching the finetuning job using Boto3. The post also provides instructions for checking the job status and utilizing the finetuned model via the Bedrock API once it is ready. Key steps include setting hyperparameters for the job and using provisioned throughput for model hosting. This guide is aimed at enhancing users' understanding of model customization within the Amazon Bedrock framework.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Message Batches API, designed to efficiently process large volumes of message requests asynchronously, potentially cutting costs by 50%. Key features include creating and submitting batches, monitoring their processing status, and retrieving results. 

The post outlines two examples of batch processing: the first demonstrates basic batch creation and monitoring with a set of questions, while the second showcases advanced processing that includes various message types—simple inquiries, system prompts, and image analysis requests. The author provides code snippets to illustrate setup, submission, monitoring, and result retrieval with practical implementations, such as handling error cases and using base64-encoded images. Overall, the tutorial serves as a comprehensive guide for developers looking to optimize message processing using the API.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the process of building evaluations (evals) for AI models, particularly Claude, to optimize task accuracy. It outlines the four essential components of an eval: input prompts, model outputs, 'golden answers' for comparison, and scoring methods. Three grading approaches are covered: 

1. **Code-based grading** allows fast and reliable assessments through string matching, ideal for specific task designs.
2. **Human grading** involves subjective evaluation by a person and is more flexible but costly and time-consuming.
3. **Model-based grading** utilizes Claude to self-grade its responses based on predefined rubrics, significantly reducing manual effort.

Key recommendations include designing task-specific evals, exploring automation possibilities, and aiming for a balance between question volume and quality. This structured approach ensures effective evaluation and improvement of AI performance.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for creating a content moderation filter using Claude, allowing users to categorize user-generated text based on defined rules. The primary method involves phrasing prompts that specify "ALLOW" and "BLOCK" categories with associated content guidelines. Users can easily customize moderation rules based on specific needs, exemplified in a scenario focused on rollercoaster discussions.

Key features include:
1. Customizable prompt structures for different contexts.
2. Implementation techniques, including "chain-of-thought" (CoT) prompting for improved reasoning in categorization.
3. Using examples within prompts to enhance accuracy in nuanced cases.

Example Python code demonstrates how to classify user comments in compliance with given guidelines, showcasing the effectiveness of the system in filtering content appropriately. Overall, the approach emphasizes flexibility and adaptability in content moderation processes.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post explores a method for generating synthetic test data to evaluate and improve prompt templates using the Claude API. It introduces the concept of variables in prompts, demonstrating how one can create functions to extract these variables, construct example blocks, and generate realistic test cases. Key features include the ability to format prompt templates for synthetic evaluations, with and without user-provided examples. The process allows users to iteratively refine outputs, enhancing Claude's performance by leveraging example-driven input/output pairs. Additionally, it emphasizes the importance of detailed planning and thoughtful input generation for real-world applications, particularly in customer support scenarios. The post provides practical code snippets to illustrate how to implement these techniques effectively.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a guide on effectively prompting Claude to generate JSON outputs, despite the absence of a formal "JSON Mode." Key strategies include:

1. **Simple JSON Requests**: By directly asking Claude to create a JSON dictionary, users can easily extract the response using Python code.
2. **Prefilled Responses**: To ensure Claude starts directly with JSON, users can prefill the assistant's message with an opening brace.
3. **Tagging for Extraction**: For complex prompts requiring multiple JSON outputs, users are advised to instruct Claude to wrap responses in unique XML-like tags for easier extraction.
4. **String Parsing Techniques**: The post discusses methods to cleanly extract JSON from mixed content by isolating it with defined start and stop sequences.

These approaches help streamline the process of getting structured data from Claude, improving integration into applications.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude, an AI model, to generate SQL queries from natural language inputs. The process begins with setting up a test database using SQLite. A sample database schema for employee records is created, including fields such as name, department, and salary, populated with example data. The key feature demonstrated is a function that sends natural language questions to Claude, enabling the generation of corresponding SQL queries. For instance, a query asking for the names and salaries of employees in the Engineering department is executed, and the results are printed. The post emphasizes the ease of converting human language to SQL using AI, streamlining database interactions. Lastly, users are reminded to close the database connection upon completion.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Metaprompt, a prompt engineering tool aimed at addressing the "blank page problem" by providing users with a structured starting point for creating AI prompts. Users input their specific tasks and optional variable names, and the tool generates a suitable prompt template for various single-turn tasks such as customer support, document inquiry, and mathematical tutoring. The tool includes detailed instructions designed to guide Claude, the AI assistant, in responding effectively. Additionally, caveats are mentioned, noting that while the generated prompts can assist, they may not always be optimal and modifications are encouraged. The tool emphasizes user-friendliness, requiring no coding knowledge for operation.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature in Claude.ai that allows users to upload PDFs via the API, currently available in beta with specific model support. Users can install the Anthropic client and leverage the capability to handle PDF documents, which includes extracting both text and visual elements. The example showcases how to encode a PDF file in base64 format to use with the Claude API. The post demonstrates the feature by prompting the AI to summarize the document's abstract at a kindergarten level, convert the Methods section into a recipe format, and create a poem reflecting the results in the style of Homer. This illustrates the flexibility and creative potential of interacting with PDF contents using Claude.ai.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses prompt caching functionalities in the Claude API, highlighting its efficiency in context management and cost reduction. By storing and reusing context, prompt caching enhances response quality while decreasing latency and costs by over 90%, making it suitable for applications involving repetitive tasks. 

The post details a setup process for implementing prompt caching, demonstrated through examples of single-turn and multi-turn conversations. It showcases the performance differences between cached and non-cached API calls, noting a significant improvement in speed from 21.44 seconds to 3.64 seconds for the same request. 

Additionally, it presents an incremental caching method for multi-turn conversations, leading to response times dropping to 7-11 seconds after initial cache setup, with nearly all input tokens being cached. This illustrates the effectiveness of prompt caching in optimizing API interactions.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a recipe for summarizing web page content using Anthropic's Claude API. It outlines the process starting with the installation of the necessary libraries, including the Anthropic library. The steps involve setting up the Claude client with an API key, fetching web page content via the requests library, and preparing an appropriate input prompt for the Claude API. The final step demonstrates how to call the API to generate a concise summary of the fetched content. The model used for summarization is "claude-haiku-4-5", allowing users to obtain simplified summaries of web pages effectively.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post demonstrates a method to obtain responses from the Claude AI model that exceed the standard max_tokens limit of 4096. By utilizing a two-step process, users can prompt Claude to generate extensive responses, such as writing five 1000-word stories about different animals. Initially, Claude may truncate its response due to the token limit. To continue from the cutoff point, the response is included in a follow-up message, allowing Claude to seamlessly finish the output. The post also notes that this technique results in being "double-charged" for reading input tokens within the initial prompt, while output tokens are charged normally.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Speculative Prompt Caching," a technique designed to enhance response times in natural language processing applications by pre-warming the cache while users formulate queries. Unlike traditional caching, which begins only after query submission, speculative caching initiates as soon as the user starts typing, ultimately improving the time-to-first-token (TTFT).

Key features include:
- Dramatic reductions in TTFT, particularly beneficial for large contexts (over 1000 tokens).
- Simple implementation, involving just a one-token API request during typing.
- Parallel cache warming that significantly decreases perceived latency.

Performance comparisons in the post highlight marked improvements in TTFT and total response times, detailing specific percentage enhancements achieved through this approach. Best practices are recommended to optimize cache effectiveness and ensure a seamless user experience.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the launch of a citation support feature for the Claude API, enhancing its ability to provide detailed citations for responses drawn from various document types, including plain text, PDF, and custom content. This feature, available in the `claude-sonnet-4-5` and `claude-3-5-haiku-20241022` models, allows users to track and verify information sources, improving accuracy and transparency over traditional prompt-based citation methods. Key advantages include reduced output costs, higher citation precision and recall, and improved user trust through clear sourcing. The API now includes options for different document citation formats, and enhanced UI capabilities to visualize citations, providing users better context for cited material. Users can also input contextual information for generating responses without the need for citation. The documentation for this feature is accessible online.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude, specifically the `claude-sonnet-4-5` model, to effectively work with charts, graphs, and slide decks. Key features include support for PDF ingestion, enabling users to pass documents along with specific queries to the model, utilizing its vision capabilities. The post outlines a method to encode PDF files in base64 for processing and provides sample questions to illustrate Claude's ability to analyze detailed data.

Additionally, it emphasizes the importance of structured prompting to enhance results, particularly for complex visuals where color and intricate details may pose challenges. The guide also addresses potential limitations, such as page count restrictions and caveats when using multimodal PDFs. Overall, these techniques empower users to leverage AI in analyzing graph-heavy content efficiently.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a process for analyzing Apple's 2023 financial earnings reports using the Claude 3 Haiku sub-agent models. Key steps include:

1. **Environment Setup**: Installation of necessary libraries and configuration of the Claude API client.
2. **Data Acquisition**: Downloading Apple's financial statements in PDF format and posing a specific question regarding net sales variations over the fiscal year.
3. **PDF Processing**: Converting the PDF documents to base64-encoded images for easier data extraction.
4. **Prompt Generation**: Utilizing Claude 3 Opus to generate prompts specific to each PDF for information extraction.
5. **Information Extraction**: Employing the Haiku models to retrieve relevant data from each quarter's report concurrently.
6. **Response Generation**: Compiling extracted data and questioning to generate a comprehensive response and accompanying graph using matplotlib.
7. **Visualization**: Extracting and executing matplotlib code from the generated response to visualize the revenue trends.

This method showcases the effective use of AI models in financial data analysis and visualization.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The "Usage & Cost Admin API Cookbook" blog post presents a comprehensive guide for utilizing the Claude API to track usage and analyze costs programmatically. Key features include:

1. **Usage Tracking**: Monitor token consumption across models, workspaces, and API keys, with insights on cache efficiency.
2. **Cost Analysis**: Access detailed spending breakdowns per service and generate financial reports.
3. **API Endpoints**: The blog details two primary APIs: the Messages Usage API for token data and the Cost API for financial insights.
4. **Security Guidelines**: Emphasizes securing API keys and recommends best practices for usage.
5. **Common Use Cases**: Highlights tracking consumption to optimize costs, expense allocation, cache efficiency measurement, and financial reporting. 

The post also provides code examples for implementing these features, ensuring users can leverage the API effectively.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's Skills feature, which allows users to generate professional documents and automate workflows with applications like Excel, PowerPoint, and PDF. It outlines the steps for setup, including prerequisites such as Python 3.8 and an Anthropic API key.

The Skills feature enhances Claude's capabilities with organized packages of instructions and code, enabling efficient and expert-level performance for various tasks. Key benefits include reduced token usage and time savings due to pre-tested helper scripts. The three-tier progressive loading architecture ensures only necessary resources are utilized, enhancing efficiency.

The post emphasizes the importance of Skills in creating documents, discussing expected generation times and providing examples of use cases, such as generating an Excel budget spreadsheet. Furthermore, it explains how to discover and utilize both Anthropic-managed and custom Skills, making the process straightforward for developers.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's new skills tailored for financial applications, allowing users to create financial dashboards, portfolio analytics, and automated reporting workflows using Excel, PowerPoint, and PDF formats. Key features include:

1. **Financial Model Creation**: Users can generate comprehensive Excel models with formulas, charts, and visualizations for performance tracking and key metrics.
2. **Executive Presentations**: Automated PowerPoint generation summarizing financial results and insights, enhancing professional reporting.
3. **Portfolio Analysis**: Tools for in-depth portfolio performance analysis including risk metrics and sector allocation.
4. **Automated Reporting**: Ability to streamline reporting processes across multiple formats, improving efficiency in financial documentation.

To utilize these features, users must complete initial setup tasks and ensure proper configurations with the Anthropic API. The post emphasizes hands-on applications through specific case studies demonstrating practical uses of the skills in finance.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on building custom skills for the Claude AI, emphasizing how organizations can leverage this functionality to enhance Claude's capabilities with specialized knowledge and workflows. Key announcements include the introduction of custom skills, which allow users to codify organizational practices, ensure interaction consistency, and automate complex workflows while maintaining privacy.

The structure of a custom skill involves a required `SKILL.md` file for instructions and allows for various supporting files such as scripts and templates. The post also outlines best practices, prerequisites for setup, and provides examples, including a Financial Ratio Calculator and Company Brand Guidelines.

Moreover, it details skill management, version control, and essential utility functions for creating, listing, and testing skills within the Anthropic framework, ensuring that organizations can efficiently deploy tailored solutions in their operations.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a guide on how to transcribe audio files using Deepgram and generate interview questions with Anthropic. Users are encouraged to make a copy of the provided notebook and follow a series of steps, starting with setting up dependencies and obtaining audio URLs. The transcription process requires users to input their Deepgram API key and desired audio file URL. After transcribing the audio, users can review the generated transcript. Subsequently, the transcript can be sent to Anthropic's Claude model to produce thoughtful, open-ended interview questions tailored from the transcript content. The post emphasizes ease of use, guiding users through each step to ensure successful implementation.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the construction of a basic Retrieval-Augmented Generation (RAG) pipeline using LlamaIndex. Key steps include setting up the LLM and embedding model with Claude 3 Opus, downloading and loading data, indexing the data, and creating a query engine for interaction. 

Installation instructions for necessary libraries are provided, including `llama-index` and specific models from Anthropic and HuggingFace. The process involves configuring API keys, downloading a sample essay, and preparing the data for querying. Finally, the setup is demonstrated by creating a query engine that can respond to user queries, showcasing the pipeline's functionality.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the implementation of Multi-Document Agents using the `ReAct Agent` concept within a Retrieval-Augmented Generation (RAG) framework. Key announcements include the adoption of the `Claude-3 Opus` LLM and the HuggingFace embedding model for processing large datasets. The installation process and necessary setup, including logging configurations, are outlined. The content focuses on building agents for Wikipedia pages of five major cities: Toronto, Seattle, Chicago, Boston, and Houston, creating both vector and summary indices for each city's data. The blog concludes with a demonstration of querying these agents, showcasing their ability to respond to specific questions and provide summaries based on their respective datasets, emphasizing the efficiency in retrieving and generating context-specific information.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents the creation and implementation of a ReAct Agent using various tools, including a simple calculator and a QueryEngine for financial data from Uber and Lyft's SEC filings. Key announcements include the installation of the `llama-index` library, the use of Anthropic's Claude-3 Opus LLM, and the definition of computational tools for performing arithmetic operations. The author demonstrates the setup of a ReAct Agent that can sequentially handle queries, displaying the agent's responses interactively. Additionally, it explores QueryEngine tools that provide insights into financial data, allowing users to query Lyft and Uber's 2021 revenue growth. This showcases the ReAct Agent's capabilities in both mathematical and analytical contexts, combining LLM functionalities with structured data queries.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, designed to route user queries to various query engine tools, suitable for different indices or documents. Key highlights include the installation instructions for necessary libraries, the setup of logging for a Jupyter notebook environment, and the configuration of `Claude-3 Opus` LLM alongside a HuggingFace embedding model.

The post details the process of downloading and loading a document (Paul Graham's essay) and creating Summary and Vector Store indices for distinct query functions. Two tools are established—one for summarization and another for specific context retrieval. Finally, the `RouterQueryEngine` is implemented to manage these tools, allowing for effective query resolution. Example queries demonstrate its practical application, underscoring its utility in navigating complex user inquiries.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, a powerful tool for handling complex queries that span multiple documents by decomposing them into sub-queries. Key features include the use of the `Claude-3 Opus` LLM from Anthropic and HuggingFace's embedding model. Instructions are provided for installation, API key setup, logging configuration, and data loading using Uber and Lyft's 2021 SEC filings.

The post details creating indexed data and query engines for both datasets, followed by practical examples of querying revenue figures directly and comparing financial metrics across the two companies. The effective use of `SubQuestionQueryEngine` allows for streamlined comparisons, showcasing its capability to deliver multi-faceted responses efficiently. Overall, this tool enhances the ability to generate insights from extensive document collections.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This tutorial outlines the process of building a Retrieval-Augmented Generation (RAG) system using Claude 3 and MongoDB. Key components include:

1. **Development Setup**: Instructions on installing libraries and configuring a MongoDB database.
2. **Data Handling**: Methods for creating vector search indexes and data ingestion from tech news articles into MongoDB.
3. **Embedding Generation**: Utilizing VoyageAI to create embeddings for documents and user queries.
4. **Vector Search Implementation**: Establishing a vector search index in MongoDB to enable semantic searches based on user input.
5. **User Query Processing**: Integrating the Claude 3 model to handle user queries and enhance responses with relevant data retrieved from the database.

Overall, the tutorial provides a comprehensive guide for developing a chatbot capable of leveraging contextual information for improved interaction.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the advancements in LangChain v1, particularly in initializing and using agents, which are now clearer and more logical than in previous versions. It showcases the creation of a Retrieval-Augmented Generation (RAG) agent using Claude 3, Voyage AI for knowledge embeddings, and Pinecone for knowledge retrieval. Key components include API key configurations, dataset sourcing from Hugging Face, and embedding integration using the Voyage AI model. The author also details how to build and populate the knowledge base, implement an ArXiv search tool, and create an XML agent compatible with Anthropic models. The post concludes with the application of conversational memory to the agent, allowing it to maintain context across interactions, thereby enhancing the user experience in conversational queries.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a detailed implementation of a tool evaluation framework whereby multiple agents autonomously execute tasks defined in an XML evaluation file. Key components include:

1. **Agent Loop Implementation**: This processes evaluation prompts by invoking specified tools and returns a structured response that includes summaries and feedback on tool usage.

2. **Task Evaluation**: Each task is evaluated independently, collecting data on accuracy, response timings, and tool call metrics.

3. **Feedback Mechanism**: Agents provide detailed feedback on tool clarity, usability, and any execution errors encountered, facilitating continuous tool improvement.

4. **Reporting**: A comprehensive report summarizes evaluation outcomes, including accuracy rates and average task durations.

5. **Tool Definition**: The framework uses a simple calculator tool as an example to demonstrate the evaluation process.

This systematic approach enables robust analysis of AI tools, emphasizing the importance of feedback for refinement.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines how to integrate a simple calculator tool with the Claude AI model to enable basic arithmetic operations based on user inputs. The process involves three main steps: 

1. **Setting Up**: Installation of the required libraries and configuring the Claude API client.
2. **Defining the Calculator**: A calculator function is created using a regular expression to sanitize input expressions, which are then evaluated using Python’s `eval()` function, despite the noted security risks. The tool is defined with an appropriate input schema.
3. **User Interaction**: The interaction process is demonstrated, where user mathematical inquiries are processed, and results are returned after engaging the calculator tool.

The article emphasizes practical examples of how the tool can compute various mathematical expressions through user queries.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a practical guide for creating a customer service chatbot using Claude 3 and client-side tools. Key features include the ability to look up customer information, retrieve order details, and cancel orders. The setup process involves installing the necessary libraries and defining three primary tools: `get_customer_info`, `get_order_details`, and `cancel_order`, each equipped with specific input schemas. Simulated responses are provided for demonstration purposes to mimic real customer data and order interactions. The blog emphasizes processing tool calls to generate responses and outlines how to test the chatbot with sample queries, illustrating its capability to assist customers effectively. Users are encouraged to enhance the chatbot by integrating it with actual databases and expanding its functionalities.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on using Claude's tool feature to extract structured JSON data from various text inputs. It outlines several applications, including article summarization, named entity recognition, sentiment analysis, text classification, and handling unknown JSON keys. Each example showcases custom tool definitions with specific input schemas for managing different tasks effectively. 

Key announcements include the availability of the "print_summary," "print_entities," "print_sentiment_scores," "print_classification," and "print_all_characteristics" tools, which enable users to obtain structured JSON outputs like article summaries, entity lists, sentiment scores, category classifications, and character descriptions. The post emphasizes the utility of defining tailored tools to facilitate seamless data extraction for natural language processing applications.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude Sonnet 4.5, featuring advanced memory and context management tools designed for improving AI agents' conversational abilities. Key announcements include:

1. **Memory Tool**: This tool allows AI to learn and retain information across conversations, employing a file-based system for ease of management.
2. **Context Editing**: Automatically manages AI's context by clearing outdated tool results, maintaining recent relevant information while ensuring learned patterns persist.

Use cases illustrate its applications, notably in code reviews, research assistance, customer support, and data analysis. The post outlines a practical demo focusing on a Code Review Assistant that learns from previous interactions, showcasing the benefits of memory and context management in creating more efficient and context-aware AI agents. Overall, the enhancements promise to streamline workflow and facilitate more effective real-world applications of AI technologies.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `tool_choice` parameter within the Claude model, which offers three settings for tool interaction: `auto`, `tool`, and `any`. 

1. **Auto**: Claude autonomously decides when to use tools based on user queries. For example, it will utilize a fictitious web search tool for questions requiring real-time information but will rely on its existing knowledge for others.

2. **Tool**: Users can force Claude to employ a specific tool. A demonstration highlights how Claude can be compelled to always use a sentiment analysis tool, regardless of the input.

3. **Any**: This option mandates Claude to engage one of several provided tools for responses, ensuring it communicates exclusively through bot functions in an SMS context.

The piece emphasizes the significance of prompt design to optimize tool usage effectively.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the creation of a note-saving tool utilizing Pydantic for input validation and schema enforcement. Key steps include setting up the environment with the required libraries, defining Pydantic models for notes and authors, and implementing a tool to save notes with associated metadata. The tool accepts inputs like note content, author details, priority, and visibility status. It processes requests made by a chatbot, ensuring that all inputs conform to predefined schemas. The interaction with the chatbot is demonstrated through a sample query, showcasing how notes can be saved while maintaining a robust validation mechanism using Pydantic. This implementation enhances reliability in handling user requests within the chatbot framework.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/2e7b63258d512376d2e8fd4f54241a3dbe6b07a2/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method to utilize the Claude API for extracting structured nutrition information from an image of a nutrition label. Key features include setting up the necessary libraries and the Claude API client, as well as defining a custom tool, "print_nutrition_info," designed to extract specific nutritional data—calories, total fat, cholesterol, total carbohydrates, and protein—from the image. The process involves encoding the image into a base64 format and sending it along with a prompt to Claude, which then utilizes the defined tool to produce a structured JSON object with the extracted information. This integration demonstrates a practical application of AI in handling visual data and enhancing data accessibility in nutrition analysis.