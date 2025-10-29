---
title: Claude's Evolution - From LLM to Productivity Powerhouse
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks, openai/openai-cookbook on 10-29"
---
Here is a concise meta-summary capturing the most important trends and announcements across all the provided blog post summaries:

---

### Meta-Summary: Key Trends & Announcements

**1. Rapid Expansion of Claude’s Capabilities**
- Anthropic’s Claude ecosystem has greatly broadened, introducing advanced features such as retrieval-augmented generation (RAG), citation tools, Skills for professional document automation, and robust integration points for code review, data processing, and financial modeling.
- New multimodal and vision features, including structured image analysis and document ingestion (notably PDFs), allow Claude to handle an increasingly wide range of enterprise and developer use cases.

**2. Enhanced Developer Tooling and Integration**
- APIs and SDKs now support bulk processing (Message Batches API), prompt caching (including speculative caching), finetuning (Claude 3 Haiku on Amazon Bedrock), and advanced output control (JSON formatting, custom tool use, the `tool_choice` parameter).
- Extensive guides demonstrate Claude’s seamless integration with popular ecosystems and platforms: CI/CD (GitHub Actions, Jenkins), databases (MongoDB, Pinecone), frameworks (LangChain, LlamaIndex), and external APIs (Wolfram Alpha, Deepgram).
- Structured workflows and data extraction pipelines—such as RAG setups, agent-based querying, and tool-enhanced JSON extraction—reflect the maturing landscape for sophisticated, automated AI solutions.

**3. Automated, Actionable, and Explainable AI**
- Automated code and content review guidelines and tools leverage AI to streamline compliance and code quality, including model-use validation, link-checking, and security assessments.
- Memory and context-editing tools, alongside orchestrator-worker architectures and batch tool workarounds, enable more complex, efficient, and extensible workflows—including dynamic routing, parallelization, and feedback-driven iteration (Evaluator-Optimizer workflows).
- Enhanced explainability is emphasized through new citation features, structured evaluation reports, and mechanisms for traceable, reliable outputs in both text and visual analysis.

**4. Democratization and Customization of AI Abilities**
- The launch of Skills and frameworks for building custom skills positions Claude as an extensible platform: organizations and individuals can codify expertise, automate industry-specific tasks (e.g., financial reports, moderation, chatbots), and package reusable workflows.
- Tutorials and prompt engineering resources (Metaprompt, aesthetics prompting, prompt evaluation) empower users to tailor interactions, refine outputs, and address challenges like the “blank page” problem or generic generation.

**5. Focus on Practical, Real-World Applications**
- Blog posts highlight tangible applications across document and data analysis (summarization, SQL generation, financial report extraction), customer service automation, interview preparation, and content moderation—showcasing Claude’s adaptability to diverse, real-world tasks.

---

**In summary:** The recent posts underscore Anthropic Claude’s evolution from a powerful LLM to a comprehensive, extensible productivity platform—bolstered by integrations, tools, and customizability that empower both technical and business teams to automate, analyze, and interact with data and workflows at scale.

## New Cookbook Recipes

### [build_code_review_with_codex_sdk.md](https://github.com/openai/openai-cookbook/blob/03b88f529b038a6123b269c08698fa15cebc76bf/examples/codex/build_code_review_with_codex_sdk.md)
**Source:** openai/openai-cookbook

The blog post discusses the integration of automated code review capabilities using the Codex SDK within CI/CD environments, including both GitHub Actions and Jenkins. Users can connect Codex to their cloud-hosted GitHub repositories for automatic reviews on pull requests (PRs). If code is hosted on-premises, Codex’s review process can be replicated with custom CI/CD runners. Key steps include installing the Codex CLI, defining a structured JSON output schema for detailed findings, and using a specific prompt to guide Codex in assessing code quality. Examples of workflows for both GitHub Actions and Jenkins are provided, highlighting how to build and trigger code review actions, generate structured output, and publish review comments directly to the SCM. The integration aims to enhance code quality through actionable insights delivered by AI-driven reviews.

---

### [link-review.md](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/.claude/commands/link-review.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines important guidelines for reviewing links in specific changed files to ensure quality and security. Reviewers must focus on identifying broken links, outdated resources, and potential security risks, emphasizing best practices such as using HTTPS and appropriate link structures. For Anthropic content, it highlights the need for up-to-date links to Claude documentation, API references, and model documentation, insisting that GitHub links point to the correct repositories. The report should categorize links as valid, needing attention, or broken, and confirmation is required if all links are acceptable. Reviews must be submitted as comments on the relevant pull request using a specified command.

---

### [model-check.md](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/.claude/commands/model-check.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a validation process for the usage of the Claude model in code reviews. Key steps include fetching the latest list of approved models from Claude's documentation and reviewing specified files for compliance. Reviewers are instructed to ensure that all model references match the current public models, flag any deprecated (Sonnet 3.5, Opus 3) or internal/non-public model names, and encourage the use of aliases with the suffix -latest for improved maintainability. Findings must be communicated by posting comments on the pull request using a specific command.

---

### [notebook-review.md](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/.claude/commands/notebook-review.md)
**Source:** anthropics/claude-cookbooks

The blog post presents a comprehensive review of Jupyter notebooks and Python scripts. It highlights several key aspects:

- ✅ The notebooks and scripts demonstrate effective coding practices, with clear documentation and visually appealing outputs that enhance user understanding.
- ⚠️ Suggestions for improvement include optimizing performance by reducing redundant code, and enhancing user interactivity through more dynamic visualizations.
- ❌ Critical issues identified include potential compatibility problems with certain libraries and lack of error handling, which could lead to runtime failures.

Overall, while the contributions are strong, addressing the suggestions and critical issues will improve usability and reliability.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a high-accuracy classification system for insurance support tickets using Claude, a large language model (LLM). Key advancements include increasing classification accuracy from 70% to over 95% through techniques like prompt engineering and retrieval-augmented generation (RAG). The guide covers prerequisites, setup instructions, data preparation, and the implementation of LLMs to enhance classification efficiency for complex business scenarios.

Central to the guide are ten defined ticket categories, such as Billing Inquiries and Claims Assistance, which are crucial for automating responses and improving customer satisfaction. The evaluation framework includes testing the model's performance and comparing it against a baseline random classifier, confirming the necessity of structured approaches to achieve meaningful accuracy. Overall, the blog illustrates leveraging LLMs for sophisticated classification tasks, particularly in industries with intricate customer service needs.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the enhancements made to Retrieval Augmented Generation (RAG) through the introduction of Contextual Embeddings, aimed at improving the retrieval process in various enterprise applications. Key features include the ability to add relevant context to document chunks, significantly reducing retrieval failure rates by 35% on average across multiple datasets. The post outlines a practical guide on setting up and optimizing a Contextual Retrieval system, including implementing Contextual Embeddings and a hybrid search method known as Contextual BM25. Performance evaluations indicated a notable improvement in retrieval accuracy, with Pass@10 performance rising from approximately 87% to 95%. The guide also emphasizes cost management through prompt caching. The implementation is designed for use with AWS and GCP platforms, offering a Lambda function to facilitate context addition for document processing, ensuring ease of integration for users.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Retrieval Augmented Generation (RAG) as a powerful enhancement for Claude, particularly for domain-specific inquiries in enterprise settings. Key functionalities include utilizing internal knowledge bases to improve response accuracy across areas like customer support and document analysis. The guide outlines steps to build an optimized RAG system using Claude Documentation, which involves setting up a basic RAG framework, building an evaluation suite with focus on precision, recall, and F1 scores, and refining the system using summary indexing and re-ranking techniques. Performance improvements are showcased through metrics such as Average Precision and Recall, with notable increases in accuracy from 71% to 81%. The post emphasizes the systematic evaluation of both retrieval and generation processes to ensure effective integration and efficiency in practical applications.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post provides a comprehensive guide on using Claude for document summarization, particularly focusing on legal texts. Key highlights include:

- **Summarization Techniques**: The guide covers foundational and advanced summarization techniques, such as basic and multi-shot summarization, enabling users to extract core ideas from lengthy documents effectively.
- **Guided Summarization**: Instructions are detailed on how to create prompts to guide summarization, focusing on categories like parties involved, key terms, and special provisions relevant to legal agreements (e.g., sublease agreements).
- **Evaluation Methods**: The post emphasizes the evaluation of summary quality, noting the challenges of subjective assessments and suggesting metrics like ROUGE scores.
- **Iterative Improvement**: Encourages systematic refinement of summarization processes through an iterative approach.

By leveraging these insights, users can enhance their summarization workflows with Claude, tailoring outputs to meet specific needs in legal documentation.

---

### [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/coding/prompting_for_frontend_aesthetics.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Frontend Aesthetics: A Prompting Guide" outlines strategies for improving the quality of frontend designs generated by the AI model Claude, which tends to produce generic outputs. It highlights three key prompting strategies: specifying design elements (typography, color, motion, backgrounds), referencing design inspirations, and calling out common design defaults to avoid. A detailed prompting framework, the "DISTILLED_AESTHETICS_PROMPT," is provided that encourages Claude to create more creative and visually interesting designs. Examples illustrate significant differences between outputs generated with and without the enhancements. Additionally, the guide discusses isolated prompts for targeting specific design aspects or themes, allowing for greater control over the generated designs. The overall message conveys that clear guidance can unlock Claude's potential to produce distinctive and tailored frontend aesthetics.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on finetuning the Claude 3 Haiku model using Amazon Bedrock. To get started, users need an AWS account, a dataset in JSONL format, and a service role with S3 access. The data structure requires alternating user and assistant messages, with a minimum of two messages per entry. A sample dataset is included that trains the model to respond with JSON. Users are guided through uploading their dataset to S3 and launching a finetuning job via the Boto3 library, specifying parameters such as `job_name`, `base_model_id`, and hyperparameters like `epoch_count` and `batch_size`. After the job is created, users can check its status and use the finetuned model by setting it with Provisioned Throughput in Bedrock, allowing for API interactions.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Message Batches API, designed for processing high volumes of message requests asynchronously and cost-effectively, potentially reducing costs by 50%. It outlines the steps for creating and monitoring message batches, processing results, and implementing best practices.

Key features include:

1. **Batch Requests**: Users can prepare and submit multiple message requests in a single API call.
2. **Monitoring**: The status of batch processing can be monitored continuously to track progress.
3. **Result Retrieval**: Upon completion, results can be accessed, detailing successes or errors for individual requests.
4. **Advanced Processing**: Examples include handling mixed message types (e.g., text, system prompts, images) and error management.

Overall, the API enhances efficiency for bulk operations in message processing tasks.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the process of building effective evaluations (evals) for AI model Claude, emphasizing the importance of efficient grading methods. It outlines the four key components of an eval: input prompts, model outputs, golden answers for comparison, and grading scores. The post categorizes grading into three methods: 

1. **Code-based Grading**: Fast and reliable, uses string matching; best for straightforward tasks. 
2. **Human Grading**: Flexible but slow and costly, used for subjective evaluations.
3. **Model-based Grading**: Utilizes Claude’s capabilities to grade automatically, streamlining the process significantly.

The author provides examples for each grading method and concludes with tips for designing effective evals, including specificity to tasks and structuring questions to facilitate automation.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide for building a content moderation filter using Claude, an AI model. The primary strategy involves crafting a prompt that specifies moderation categories (e.g., "ALLOW" and "BLOCK") along with detailed content descriptions. Users can replace sample text with actual user-generated content to classify it accordingly. The guide includes Python code snippets for utilizing the Claude API to automate this process.

Key features include the ability to customize moderation rules to fit specific contexts, such as niche forums, and the introduction of techniques such as Chain of Thought (CoT) prompting and few-shot learning to improve moderation accuracy. Overall, this approach allows for a flexible and scalable content moderation solution adapted to varying needs.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for generating synthetic test data to evaluate and improve prompt templates for AI models, specifically using the Claude API. It emphasizes the importance of creating test cases that reflect realistic variable scenarios in prompts while maintaining user privacy. Key features include functions for extracting variables from templates, constructing example blocks, and generating test cases. The process involves defining a prompt template, using helper functions to format and generate realistic examples, and leveraging Claude to provide output based on these templates. The post also highlights the iterative nature of refining prompts by incorporating feedback and examples, which can significantly enhance model performance. Overall, this approach facilitates effective prompt evaluation and improvement through the creation of varied test cases.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses how to effectively retrieve JSON outputs from the Claude AI model, despite the lack of a dedicated "JSON Mode". It outlines methods for prompting Claude to deliver clean JSON responses without preambles. Key techniques include pre-filling Claude's messages with a "{" character and using extraction methods for pre-defined tags to isolate JSON data. The post also explains the use of regular expressions to extract JSON from complex prompts where multiple outputs are involved, highlighting the ability to enhance output clarity through proper structuring. Additional notes emphasize the balance between extracting concise JSON data and allowing Claude to perform more complex reasoning. Overall, several strategies are provided for users to efficiently interact with the AI for JSON data extraction.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a tutorial on using the Claude API to generate SQL queries from natural language questions. It begins with the setup of necessary libraries and the Claude API client, followed by the creation of a test SQLite database populated with sample employee data. The author demonstrates how Claude can be prompted to convert human language into SQL by defining a function, `ask_claude`, which takes a query and database schema as input. An example question about employee names and salaries in the Engineering department is provided, showcasing Claude's ability to generate an appropriate SQL query. Finally, the generated SQL query is executed against the test database, and the results are displayed. The tutorial emphasizes the seamless integration of natural language processing with SQL query generation.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Metaprompt, a tool for prompt engineering that addresses the "blank page problem" by generating starting prompts for tasks entered by users. To utilize the Metaprompt, users need to enter their Claude API key and the specific task they want to accomplish. The tool produces a prompt template based on examples that guide the Claude AI in generating effective responses. The blog specifies that it is designed for single-turn prompts and advises users to customize the output for better results. Various examples demonstrate the Metaprompt's capabilities, such as acting as a customer success agent, checking sentence equivalency, tutoring in math, and referencing documents. Overall, the Metaprompt streamlines the process of creating effective prompts tailored to a user's needs.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces prompt caching through the Claude API, highlighting its ability to store and reuse context within prompts, significantly enhancing the efficiency of API calls. Key advantages include over 2x reduction in latency and up to 90% cost savings, especially beneficial for handling extensive text content.

The post showcases two main examples: a single API call and a multi-turn conversation. In the first example, a cached API call demonstrated a total time of 3.64 seconds compared to 21.44 seconds for a non-cached call. The second example explored a multi-turn conversation, showing that response times could drop from nearly 24 seconds to 7-11 seconds after initial caching, with almost all input tokens cached in subsequent turns. This technique promises significant performance improvements while maintaining response quality.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a step-by-step guide on how to summarize web page content using Anthropic's Claude API. It begins with instructions for setting up the necessary environment, including the installation of the Anthropic library and client configuration with an API key. The process involves fetching web page content via its URL using the requests library, specifically targeting the 96th Academy Awards Wikipedia page. After successfully retrieving the content, the post outlines how to prepare the input for the Claude API by formatting the page content and creating a summary prompt. Finally, it demonstrates how to generate the summary using the Claude model and retrieve the output. This tutorial emphasizes the integration of API capabilities to automate content summarization effectively.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses how to extend Claude's response length beyond the maximum token limit using a method that involves pre-filling context with previously generated content. By prompting Claude to write extensive stories (at least 1000 words each), the initial response exceeded the 4096-token limit, resulting in an incomplete message. The solution detailed involves re-submitting Claude's partially completed output in a subsequent request, allowing it to continue generating text seamlessly from where it left off. While this method enables longer responses, it's important to note that it incurs double charges for input tokens but not for output tokens.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post elaborates on "Speculative Prompt Caching," a technique that enhances the efficiency of generating responses by preemptively loading data into cache while users formulate their queries. In contrast to conventional caching, where the cache is populated after a question is submitted, speculative caching initiates the caching process as soon as the user starts typing.

Key setup involves using an asynchronous API with a model that manages large contexts, specifically SQLite source files. The implementation includes utility functions for downloading data and warming the cache before the query submission. The results demonstrate a significant reduction in Time-to-First-Token (TTFT) and overall response time when using speculative caching—highlighting improvements of up to 41.8% in TTFT and 37% in total response time. The blog emphasizes best practices such as starting cache warming early and ensuring cache consistency for optimal performance.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new citation feature in the Claude API that enhances how large language models (LLMs) provide sourcing for their responses. This feature is available for the `claude-sonnet-4-5` and `claude-3-5-haiku-20241022` models. Key benefits include improved precision and recall in citations compared to traditional prompt-based techniques and reduced costs by avoiding full text outputs from sources. The API supports citations from various document types—plain text, PDFs, and custom content—allowing users to define citation formats. Users can leverage the context field for metadata, and citations in PDFs will reference specific page numbers. The post details examples, including document setup and response visualization to demonstrate these capabilities in practice, aiming to increase transparency and trust in automated responses.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details effective methods for utilizing Claude with charts, graphs, and slide decks, emphasizing its vision capabilities and PDF support for better data processing. Key announcements include the beta feature for PDF documents, accessible only through the `claude-sonnet-4-5` model with a specific header. The post outlines a straightforward process for ingesting data, where users can upload PDF files and ask specific questions about the content. Tips are provided to enhance Claude’s responses, such as using arithmetic tools and requesting detailed descriptions of complex data visuals. Additionally, the article covers the use of Claude for narrating slide decks, encouraging thorough prompts to ensure accurate, detailed presentations of visual elements and content. Overall, the post serves as a comprehensive guide for leveraging Claude in scenarios involving data-heavy documents.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for analyzing Apple's 2023 financial earnings reports using Claude 3's Haiku sub-agent models. The process involves setting up the environment, downloading financial statement PDFs, and converting them to base64-encoded PNG images for easier data extraction. A specific prompt is generated for each PDF using Claude 3 Opus, which is then used by Haiku to extract relevant information regarding Apple's quarterly net sales. The extracted data is compiled and used to generate a response to the question posed, along with Python code for creating a graph using matplotlib. Finally, the code is executed to visualize the revenue growth trend, showcasing the integration of AI and automated data processing in financial analysis.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The "Usage & Cost Admin API Cookbook" provides a comprehensive guide for programmatically accessing usage and cost data through the Claude API. Key features include:

- **Usage Tracking**: Monitor token consumption across models, workspaces, and API keys, and analyze cache efficiency.
- **Cost Analysis**: Retrieve detailed service cost breakdowns and track spending trends for financial reporting.
- **API Endpoints**: The guide details two main endpoints: the Messages Usage API for token-level usage data and the Cost API for financial information.

Common use cases include usage monitoring, cost attribution, and financial reporting, with security best practices outlined for API key management. The document also offers examples of how to retrieve and analyze data, including usage and cost summaries, grouped views by model, and handling paginated datasets. Additionally, it explains how to export usage data to CSV for external analysis.

---

### [basic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/patterns/agents/basic_workflows.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines three fundamental workflows for effectively leveraging multiple Language Learning Models (LLMs): 

1. **Prompt-Chaining**: This method breaks down complex tasks into sequential subtasks, with each step building upon the output of the previous one.
   
2. **Parallelization**: This approach involves distributing independent subtasks across multiple LLMs to process them simultaneously, thereby reducing overall latency.

3. **Routing**: This method dynamically selects the most appropriate LLM based on the characteristics of the input, enhancing task performance by utilizing specialized models.

The post provides code snippets exemplifying each workflow, demonstrating practical applications such as structured data extraction, stakeholder impact analysis, and customer support ticket routing. Overall, these implementations serve as foundational examples rather than production-ready solutions.

---

### [evaluator_optimizer.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/patterns/agents/evaluator_optimizer.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Evaluator-Optimizer workflow, which utilizes two language model (LLM) calls: one for generating responses and another for providing evaluation and feedback in an iterative loop. This workflow is particularly beneficial when there are clear evaluation criteria and potential for refinement. Key indicators of efficacy include the ability to improve generated responses through feedback and the LLM's capability to offer meaningful evaluations.

The post includes example functions for generating responses and evaluating outputs, emphasizing the importance of maintaining a loop until satisfactory results (labeled as "PASS") are achieved. This iterative process is exemplified through a coding task, demonstrating how to assess and enhance a code implementation using defined prompts for evaluation and generation.

---

### [orchestrator_workers.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/patterns/agents/orchestrator_workers.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a new "Orchestrator-Workers Workflow" that enables a central language model (LLM) to dynamically break down complex tasks into subtasks, delegating these to worker LLMs for parallel execution. This workflow is particularly beneficial for tasks with unpredictable subtasks, allowing for increased flexibility compared to traditional parallelization methods.

Key features include:

1. An orchestrator that analyzes a given task and identifies relevant subtasks dynamically.
2. The ability to process tasks in parallel, enabling efficient task management.
3. Example use case provided for generating marketing variations for a product description, showcasing the orchestrator and worker prompt templates.

The system is designed for versatility and can adapt its task decomposition based on specific inputs, enhancing overall productivity and creativity in content generation.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the new "Claude Skills" feature, enabling users to create professional documents and automate workflows in Excel, PowerPoint, and PDF formats. Key components of the post include setup instructions, understanding the functionality of Skills, and quick start guides for using these features efficiently. 

Skills are described as organized packages that enhance Claude's capabilities, providing expert-level performance, cost efficiency, and reliability due to pre-tested code. A progressive disclosure architecture ensures minimal token usage until Skills are invoked.

Users can discover available Skills through the Anthropic API and utilize them to generate files like Excel worksheets with included data and formatting. The blog also highlights anticipated generation times and advises a structured approach to using Skills, integrating patience and system checks for successful execution. For detailed examples and troubleshooting, references to additional resources are provided.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides an overview of Claude's advanced Skills for financial applications, enabling users to seamlessly create financial dashboards, portfolio analyses, and automated reporting workflows using Excel, PowerPoint, and PDF formats. Key highlights include:

- **Financial Model Creation**: Users can develop comprehensive financial models in Excel, integrating formulas and charts.
- **Executive Presentation Generation**: Claude automates the creation of professional PowerPoint presentations summarizing key financial metrics.
- **Portfolio Analysis Tools**: Users can build detailed Excel workbooks for portfolio performance analysis and generate investment committee presentations.
- **Automated Reporting**: The Skills facilitate the creation of multi-format reporting pipelines, enhancing efficiency in financial document generation.

The post emphasizes best practices for utilizing these Skills effectively, including optimal file organization and performance tips for complex dashboards.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Building Custom Skills for Claude" outlines how organizations can develop, deploy, and manage custom skills tailored to their specific workflows and knowledge domains using the Claude AI. Key highlights include:

1. **Custom Skills Definition**: Custom skills allow businesses to codify internal methodologies, maintain consistency, automate complex workflows, and protect proprietary methods.
2. **Architecture Overview**: Each skill requires a specific structure, including a mandatory `SKILL.md` file containing essential instructions.
3. **Key Benefits**: Features such as expertise at scale, version control, and enhanced privacy are emphasized.
4. **Example Implementations**: The post demonstrates the creation of three example skills: a Financial Ratio Calculator, Company Brand Guidelines, and a Financial Modeling Suite, along with tips for debugging and best practices.
5. **API Integration**: It provides practical API workflows for skill creation and management.

Guidance on setting up and using the Anthropic API is also included to assist developers in operationalizing their custom skills.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a process to transcribe audio files using Deepgram and generate interview questions with Anthropic. Users are encouraged to copy the provided notebook and follow key steps. 

**Key Features:**
1. **Audio Transcription**: The notebook includes instructions to set up dependencies, input audio URLs, and configure the Deepgram API for transcription.
2. **Error Handling**: Common troubleshooting tips for errors related to the Deepgram SDK and account credits are provided.
3. **Transcript Analysis**: Users can parse the generated JSON output to view the transcription clearly.
4. **Question Generation**: The transcription can then be sent to Anthropic’s Claude AI to generate thoughtful, open-ended interview questions, optimizing the interview preparation process.

The blog emphasizes a step-by-step approach for effective audio transcription and leveraging AI for question formulation.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process of building a basic Retrieval-Augmented Generation (RAG) pipeline using LlamaIndex. The key steps include setting up a large language model (LLM) and embedding model, downloading and loading data, indexing it, and creating a query engine. 

The installation commands are provided for LlamaIndex and necessary dependencies. The setup utilizes the Claude 3 Opus model from Anthropic for LLM and a Hugging Face embedding model. Data is loaded from a text file containing essays by Paul Graham, which is then indexed for retrieval. A query engine is established to allow querying of indexed documents, demonstrated with an example query about the author's childhood. 

Overall, the post serves as a practical guide for creating a RAG pipeline with LlamaIndex.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a Retrieval-Augmented Generation (RAG) system using `DocumentAgents` within a `ReAct Agent` framework, aimed at handling multiple documents effectively. Key installation steps using the `llama-index` library and configuration for logging are outlined. The post highlights the usage of the Claude-3 Opus LLM and a HuggingFace embedding model. It details the process of downloading Wikipedia pages for major U.S. cities to create a RAG pipeline and the subsequent loading of these documents into a structured format. Each city has its own ReAct agent with specific tools for querying document contents and summarization. The article concludes with practical test queries demonstrating how the system retrieves and summarizes information based on user input, showcasing the agent's capabilities.

---

### [Multi_Modal.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/Multi_Modal.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the use of Anthropic's MultiModal LLM class for image understanding and reasoning. Key installation steps include setting up the `llama-index` library and installing necessary packages for multi-modal capabilities. Users are guided on downloading sample images and integrating the Anthropic API key for image processing. Two main functionalities are demonstrated: first, generating descriptive alternate text for images stored locally and from URLs, and second, extracting structured output from images using a Pydantic schema. The post includes detailed Python code snippets for leveraging image data in various scenarios, enhancing capabilities in AI-driven image analysis and reasoning.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a ReAct Agent utilizing various tools for enhanced data processing. It outlines the installation of required packages, including `llama-index` and the configuration of API keys for the Anthropic LLM, specifically using the `Claude-3 Opus` model. 

Key features include the creation of a ReAct Agent over simple calculator functions and QueryEngine tools, which involve processing financial data from Uber and Lyft’s 2021 SEC filings. The author demonstrates how to define tools for arithmetic operations and build indices from document data for querying. 

The ReAct Agent is tested with queries to perform calculations and to compare financial metrics, showcasing its ability to handle complex queries while utilizing the capabilities of the underlying AI tools effectively.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, a tool designed to route user queries to various query engine tools based on the available data indices. Key highlights include the installation of necessary packages like `llama-index` and `llama-index-llms-anthropic`, as well as the setup of logging configurations to handle asynchronous queries in Jupyter notebooks.

The post outlines how to set the Claude API key and utilize the Claude-3 Opus LLM alongside a HuggingFace embedding model. It describes the process of downloading and loading a document, creating summary and vector indices, and setting up query engines for each index. The final feature presented is the Router Query Engine, which uses an LLM selector to efficiently route queries, with practical examples provided for executing specific queries on the Paul Graham essay.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, designed to tackle complex queries across multiple documents by breaking them into simpler sub-queries. Key features include the ability to install the necessary packages, set up API keys, and configure the latest `Claude-3 Opus` LLM alongside a Hugging Face embedding model. The post demonstrates downloading and indexing 2021 SEC filings for Uber and Lyft, creating query engines for each, and using the `SubQuestionQueryEngine` to handle comparative queries about revenue growth and investments between the two companies. This framework facilitates advanced querying for financial data analysis, showcasing its capabilities through practical examples.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This tutorial outlines the steps to create a Retrieval-Augmented Generation (RAG) system using Claude 3 and MongoDB. Key highlights include:

1. **Development Setup**: Instructions for installing libraries such as `pymongo`, `datasets`, and `voyageai`, along with configuring a MongoDB database.
2. **Data Handling**: Efficient techniques for processing and preparing tech news articles in a format suitable for ingestion, including creating vector search indexes.
3. **Embedding Generation**: Guidance on utilizing VoyageAI to generate embeddings from text data and ingesting these into MongoDB.
4. **Vector Search**: A custom function is created to perform semantic searches, leveraging MongoDB's capabilities to identify relevant content based on user queries.
5. **Claude 3 Integration**: The tutorial culminates in integrating the Claude 3 language model to generate insightful responses rooted in the retrieved contextual data.

Overall, the tutorial provides a comprehensive approach to setting up a conversational system backed by a robust knowledge database.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces significant updates in LangChain v1, particularly concerning the management and initialization of agents, which are now more intuitive despite the presence of multiple abstractions. The article details the construction of a Retrieval-Augmented Generation (RAG) agent using Claude 3 as the language model, Voyage AI for knowledge embeddings, and Pinecone for knowledge retrieval. Prerequisites for installation are provided, alongside a demonstration of setting up an index and populating it with data from the AI ArXiv dataset. The post also describes the creation of an XML agent tailored for Anthropic models, emphasizing the use of a specific prompt format. Additional features, including conversational memory to maintain state across interactions, are discussed, facilitating a more cohesive user experience in queries. Overall, it highlights the streamlined processes in interacting with agents within the LangChain framework.

---

### [rag_using_pinecone.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/Pinecone/rag_using_pinecone.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a notebook that implements retrieval-augmented generation (RAG) by connecting Claude with a Pinecone vector database. Key steps include:

1. **Data Preparation**: The Amazon products dataset is embedded using Voyage AI's model and uploaded to Pinecone.
2. **Database Setup**: Pinecone is initialized with a specified cloud provider and index dimension to store embeddings.
3. **Embedding Process**: Product descriptions are embedded and uploaded in batches to the Pinecone index.
4. **Querying**: Users can pose natural language questions, which are embedded to retrieve relevant product descriptions from the index.
5. **Optimization**: Claude generates diverse search keywords for enhanced query results.
6. **Response Generation**: Finally, a formatted prompt is sent to Claude, allowing it to answer user questions based on the retrieved data.

This integration enhances information retrieval through advanced machine learning techniques, providing more precise assistance to users.

---

### [wikipedia-search-cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for enhancing the Claude AI model's ability to answer questions by integrating a Wikipedia search function. This approach allows Claude to access real-time information when it does not already know the answer. Key steps include: 

1. **Tool Utilization**: Claude is prompted with a description of the search tool, which dictates how to issue search queries effectively.
2. **Search and Synthesis**: Claude executes searches based on user questions using precise keywords, reflecting on search quality before formulating a coherent answer.
3. **Implementation**: The blog provides detailed code snippets that outline how to implement the search tool, including handling search results and synthesizing information.

Ultimately, this system enhances Claude's performance in retrieving accurate information for complex queries.

---

### [using_llm_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/third_party/WolframAlpha/using_llm_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the integration of the Wolfram Alpha LLM API with Claude, allowing Claude to utilize Wolfram Alpha's computational knowledge to respond to user queries. The process begins by setting up the environment and installing the necessary libraries, including defining a function for sending queries to the Wolfram Alpha API. A structured tool is also created, which includes an input schema for the queries.

Subsequently, the blog outlines how Claude interacts with this tool to answer user questions efficiently. A demonstration with example queries showcases the functionality, allowing users to retrieve information on topics such as geography, mathematics, and astronomy. This integration enhances Claude's capabilities, making it a more informative chatbot by leveraging Wolfram Alpha's data.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the implementation of a tool evaluation framework utilizing multiple agents that independently execute evaluation tasks from an XML file. Key components include an embedded evaluator prompt guiding the agents on task completion, summarizing steps and providing feedback on the utilized tools. The framework leverages the Anthropic client to process tasks and track tool performance, incorporating error handling and metrics collection.

Key features include:
- A structured evaluation process with clear reporting on accuracy and task durations.
- Integration of a basic calculator tool for arithmetic operations, with defined input parameters.
- Comprehensive feedback mechanisms for tools, aimed at enhancing clarity and functionality.

The evaluation results in a detailed report summarizing performance and insights, aiding in the analysis of tool efficacy during the evaluation process.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post describes how to implement a simple calculator tool for the AI model Claude, enabling it to perform arithmetic operations based on user input. The process begins with setting up the environment using the Anthropic API. A calculator function is defined to evaluate mathematical expressions securely by filtering out non-numeric characters. The tool is incorporated into Claude's messaging framework, allowing it to process user queries, call the calculator tool when necessary, and return the results. The post includes examples of user interactions, demonstrating Claude's ability to perform complex calculations such as multiplication and division seamlessly. Overall, the integration enhances Claude's functionality, enabling it to solve mathematical problems effectively.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process of creating a customer service chatbot utilizing Claude 3 and client-side tools. Key steps include setting up the environment with the Claude API, defining three essential tools for the chatbot: retrieving customer information, order details, and canceling orders. The article discusses simulation of synthetic data for testing these features, as well as how to process tool calls and manage interactions between the user and the chatbot. The implementation allows the chatbot to respond to various customer inquiries, such as retrieving email addresses, checking order statuses, and processing order cancellations. The post encourages users to further enhance the chatbot by integrating it with real customer databases for more practical applications.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines practical examples of using the Claude AI model combined with its tool use feature to extract structured JSON data for various natural language processing tasks. Key features include:

1. **Custom Tools Creation**: Users can define tools like `print_summary`, `print_entities`, and `print_sentiment_scores` to generate specific JSON outputs for tasks such as article summarization, named entity recognition, sentiment analysis, and text classification.

2. **Implementation Examples**: The post provides detailed code snippets demonstrating how to set up the environment, input text, and utilize the defined tools to receive structured JSON responses, making it easier to work with complex data.

3. **Versatile Input Handling**: It also discusses handling unknown JSON keys with an open-ended input schema, showcasing Claude's adaptability in text analysis tasks.

These features position Claude as a valuable resource for developing applications that require structured data extraction from unstructured text.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the advancements in Claude Sonnet 4.5, focusing on its memory tool and context-editing capabilities. These features enable AI agents to learn and improve over conversations by maintaining a memory of previous interactions. The key announcements include:

1. **Memory Tool**: Allows for cross-conversation learning, letting Claude retain learned patterns for future use, managed via a client-side file system.
2. **Context Editing**: Automatically manages the conversation context by clearing outdated tool results, which helps optimize computational efficiency without losing important information.

Use cases highlighted include applications in code review, research assistance, customer support, and data analysis, demonstrating how the integration of memory and context can enhance task performance over time. The capabilities are designed to ensure that AI interactions remain efficient and relevant, facilitating better user experiences.

---

### [parallel_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/parallel_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses changes in the behavior of Claude 3.7 Sonnet regarding parallel tool calls. The model may not make simultaneous tool calls by default. To address this, the post recommends introducing a "batch tool" that allows for multiple tool calls to be executed in parallel, improving efficiency and reducing response time. The post illustrates this by using example tools for weather and time queries in San Francisco. Initially, Claude only made a single tool call when asked for both pieces of information, indicating a potential inefficiency. By implementing the batch tool, Claude successfully queries both tools in one call, demonstrating the advantage of this workaround. Overall, the batch tool enhances functionality and optimizes the interaction process.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the `tool_choice` parameter in the Claude model, which allows users to customize tool usage during interactions. There are three options: 

1. **Auto**: Claude decides whether to use a tool based on the user's query. It's the default setting, demonstrated with a mock web search tool.
   
2. **Tool**: Users can enforce the use of a specific tool, ensuring Claude employs it for all relevant queries. This feature is exemplified with sentiment analysis and calculator tools.

3. **Any**: This setting mandates that Claude uses one of the available tools, ideal for scenarios like chatbots where responses must derive from tool outputs.

Detailed prompts improve Claude's performance by guiding tool usage, emphasizing the importance of effective prompt engineering in achieving desired outcomes.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the creation of a note-saving tool utilizing Pydantic for response validation and the Anthropic Claude API. Key steps include setting up the environment and defining necessary Pydantic models for the note, author, and response schema. The client-side tool is structured to save notes with metadata such as priority and visibility status. A dummy function simulates the note-saving process, which, when invoked, processes the tool call and generates a success response. The post also outlines how to interact with the chatbot, ensuring input validation and final response generation. This approach enhances reliability during chatbot interactions and reinforces data integrity through structured models.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/35bced565449cc1b00c0bf7339794e63f3722953/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for utilizing the Claude API to extract structured nutrition information from an image of a nutrition label. It begins with the installation of essential libraries and setting up the Claude API client. A custom extraction tool, labeled "print_nutrition_info," is defined to retrieve key details such as calories, total fat, cholesterol, total carbohydrates, and protein from the image.

The process involves loading a nutrition label image and sending it alongside a prompt to the API. The model processes the image, invoking the custom tool to output the structured information in a formatted JSON object. The integration of Vision capabilities with tool use signifies a practical application of AI in analyzing visual data for nutritional insights.