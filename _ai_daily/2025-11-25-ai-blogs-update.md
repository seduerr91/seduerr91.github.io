---
title: Claude Ecosystem Soars – Key Trends and Innovations Unveiled
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 11-25"
---
Here is a concise meta-summary highlighting the most important trends and announcements from the collected blog post summaries:

---

**Meta-Summary of Key Trends and Announcements**

The blog posts reflect rapid advancements in the Claude ecosystem, emphasizing scalability, efficiency, multimodality, and expanded integration capabilities for developers and organizations. Major trends and announcements include:

**1. Tooling and Agentic Capabilities Expansion:**  
- Claude’s platform introduced advanced features for programmatic tool calling, memory management, and context compaction, enabling more scalable, efficient, and complex agentic workflows (e.g., semantic tool search, tool use parameterization, and custom skill creation).
- The Claude Agent SDK and Skills feature power the creation of specialized, production-ready research and business automation agents, supporting tasks like financial analysis, data extraction, and workflow automation.

**2. Enhanced Document and Image Handling:**  
- Native support for complex image and PDF inputs (including cropping tools and vision integration) has broadened Claude's abilities in visual data analysis, document summarization, and information extraction, with features like PDF uploads and targeted content processing now available via the API.

**3. Scalable Data Processing and Retrieval-Augmented Generation (RAG):**  
- Multiple guides highlight improvements in RAG workflows, contextual embeddings, vector database integration (MongoDB, Pinecone), and evaluation techniques—delivering higher accuracy in domain-specific settings such as customer support and legal summarization while optimizing cost and latency through prompt caching and batch APIs.

**4. Multimodal and Structured Output Innovations:**  
- Claude’s multimodal APIs and structured output features support advanced use cases from generating frontend designs and financial models to extracting nutrition data from images—aided by robust prompt engineering, JSON output strategies, and integration with third-party APIs (e.g., Wolfram Alpha).

**5. Workflow Automation and Evaluation:**  
- New methodologies for orchestrating multi-LLM and agent-based workflows, including orchestrator-worker patterns, evaluator-optimizer loops, and systematic evaluation frameworks, fuel task decomposition, dynamic routing, feedback-driven refinement, and transparent model assessment.

**6. Ecosystem and Community Resource Development:**  
- The Claude Cookbooks, notebook audits, coding standards, and contribution guidelines foster community-driven best practices, reproducibility, and resource sharing. Automated tools and slash commands streamline pull requests, code quality checks, and content validation for collaborative development.

**7. Administrative and Cost Management Enhancements:**  
- Usage and cost monitoring APIs, secure key management, and documentation on best practices ensure responsible, cost-effective Claude adoption in production environments.

**8. Transparency, Integrity & UX Improvements:**  
- Features like citation support, extended “thinking” reasoning blocks, and cryptographically signed thought traces promote transparency and verifiability in Claude’s output. Speculative caching, context compaction, and batch processing reduce latency and improve the developer/user experience.

---

**Summary:**  
Overall, the Claude platform is rapidly maturing into a robust ecosystem supporting sophisticated agentic workflows, multimodal inputs, scalable integrations, rigorous evaluation, and community collaboration. A relentless focus on efficiency, transparency, and usability is enabling developers and businesses to deploy production-grade AI agents and applications across a widening array of domains and modalities.

## New Cookbook Recipes

### [tool_search_with_embeddings.ipynb](https://github.com/anthropics/claude-cookbooks/blob/bedc03b4ad15af6ce0b208f3a8c4774183db9b90/tool_use/tool_search_with_embeddings.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new approach for building Claude applications that utilize numerous specialized tools, addressing limitations when managing contexts with a large number of tool definitions. The key innovation is a semantic tool search mechanism, which allows Claude to dynamically discover relevant tools through a single `tool_search` tool, reducing context usage by over 90% and enabling scalability to thousands of tools.

The post outlines the implementation of client-side tool search, leveraging semantic embeddings to identify capabilities based on task context. It provides a guide on setting up tool libraries and conducting semantic searches, emphasizing the use of natural language queries rather than exact tool names. Developers are encouraged to implement and test this method within their applications, ultimately facilitating more efficient and scalable tool management in production environments.

---

### [crop_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/7fd2ac6fcb7f1c7926b4f845c360399a14008af8/multimodal/crop_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the introduction of a cropping tool for Claude, aimed at enhancing its image analysis capabilities. Previously, Claude could only view entire images, which limited its ability to discern fine details such as small text or closely-valued elements in charts. The new crop tool allows users to specify areas of interest using normalized coordinates, facilitating a focused examination of specific regions in images, including charts, documents, and technical diagrams. 

The post outlines the setup process, demonstrates the tool's functionality through chart analysis, and shows how Claude iteratively uses the crop tool to refine its observations. Additionally, it mentions the availability of the Claude Agent SDK, which simplifies tool definition and implementation. This enhancement is expected to improve Claude’s effectiveness in tasks that require detailed image interpretation.

---

### [automatic-context-compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/7fd2ac6fcb7f1c7926b4f845c360399a14008af8/tool_use/automatic-context-compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new feature called Automatic Context Compaction within the Claude Agent Python SDK, designed to manage token context limits in long-running agentic tasks, such as customer service workflows. When token usage exceeds a configurable threshold, the SDK automatically compresses conversation history by summarizing previous exchanges and retaining only essential information. This allows users to process more tasks without hitting the typical 200k token limit.

The post illustrates this feature through a simulated customer support ticket workflow, demonstrating significant reductions in token consumption. With automatic context compaction, token usage decreased from 150,000 to 79,000 tokens, all while preserving the workflow's effectiveness and quality. Key benefits include bounded input tokens, seamless task continuation, and quality summaries that reflect task progress without burdening the model with excessive data.

---

### [ptc.ipynb](https://github.com/anthropics/claude-cookbooks/blob/7fd2ac6fcb7f1c7926b4f845c360399a14008af8/tool_use/ptc.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents the new feature, Programmatic Tool Calling (PTC), which enables Claude to programmatically call tools within the Code Execution environment. This innovation significantly decreases latency and token consumption by allowing the model to execute code directly rather than navigating through each tool invocation separately. It exemplifies its benefits using a mock API for team expense management, highlighting its efficiency in analyzing employee expenses against budget limits, especially where sequential dependencies exist.

The post outlines prerequisites, including knowledge of Python and basic agentic patterns, and provides clear instructions for setup, including installing necessary tools and configuring the environment. It contrasts traditional tool calling with PTC to illustrate performance improvements, emphasizing how PTC streamlines data processing while maintaining security with appropriately designated tool access. Ultimately, developers gain insights on leveraging PTC in their coding practices for enhanced performance.

---

### [link-review.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.claude/commands/link-review.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guideline for reviewing links in specified changed files for quality and security issues. Key points include the need to check for broken, outdated, or potentially harmful links while adhering to best practices such as using HTTPS and relative paths for internal links. Specific checks for Anthropic content require ensuring links to Claude documentation and API resources are current, and GitHub links utilize the correct repository paths. The report format for reviewers includes categorizing links as valid, needing attention, or broken. Reviewers are instructed to submit their findings as comments on the relevant pull request using a specified command.

---

### [model-check.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.claude/commands/model-check.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a validation process for the usage of the Claude model within specific files. Key tasks include fetching the current list of allowed models from the Claude documentation, ensuring all references pertain to public models, identifying any deprecated or internal/non-public model names, and recommending the use of aliases ending in "-latest" for improved maintainability. The primary goal is to provide clear and actionable feedback on any discrepancies found during the review, with findings to be documented as comments on the relevant pull request using a specified command.

---

### [notebook-review.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.claude/commands/notebook-review.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive review of Jupyter notebooks and Python scripts, highlighting both strengths and areas for improvement. 

Key Announcements:
- The review focuses on the usability and functionality of Jupyter notebooks and Python scripts used in various applications.

Features:
- ✅ Positive aspects include effective visualizations, well-structured code, and clear documentation that enhance user experience.
- ⚠️ Suggestions for improvement involve optimizing code for performance and increasing modularity to promote reuse.
- ❌ Critical issues that require immediate attention include fixing bugs that lead to runtime errors and ensuring compatibility across different environments.

Overall, the review emphasizes the importance of refining these tools to maximize their usefulness and accessibility for users.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.claude/skills/cookbook-audit/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process for auditing an Anthropic Cookbook notebook based on a structured rubric. Key steps include reviewing the style guide, conducting automated checks for technical issues, and generating a Markdown output for evaluation. Auditors score dimensions of narrative quality, code quality, technical accuracy, and actionability, providing specific recommendations for improvement. The audit emphasizes problem-focused introductions, clear learning objectives, structured content, and practical code examples. It underscores the importance of clarity in communication, including pre- and post-explanation of code blocks. Overall, the guidelines aim to enhance user understanding while ensuring cookbooks serve as effective, actionable resources.

---

### [style_guide.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.claude/skills/cookbook-audit/style_guide.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a structured approach to framing technical documents and guides, emphasizing the importance of focusing on the problem being solved rather than the technology itself. Key components include:

1. **Introduction Structure**: Initiate with the problem and its significance, followed by clear learning objectives.
2. **Prerequisites & Setup**: Define necessary software and knowledge requirements, and provide a streamlined installation guide to reduce noise.
3. **Core Cookbook Sections**: Encourage demonstration over documentation, ensuring that content is engaging and visual aids are utilized for clarity.
4. **Conclusion**: Summarize key learnings and suggest further applications of the concepts discussed.

This structured format aims to enhance the usability and clarity of technical content, fostering an effective learning experience for users.

---

### [pull_request_template.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/.github/pull_request_template.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the guidelines for submitting a pull request, particularly focusing on contributions to cookbooks. Key points include the need for a clear description of changes, the type of change being made (e.g., new cookbook, bug fix), and adherence to a checklist that ensures comprehensive documentation and code quality. Contributors are encouraged to thoroughly test their changes and provide relevant context or links to related discussions. The post emphasizes that pull requests lacking detail or not meeting guidelines may be closed to maintain high standards in community resources.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the guidelines for contributing to the Claude Cookbooks repository. Key announcements include prerequisites for setup, such as Python 3.11 or higher and the recommended use of the `uv` package manager. 

The contribution process involves cloning the repository, setting up the environment, and installing pre-commit hooks to maintain code quality. Automated tools like `nbconvert`, `ruff`, and Claude AI Review ensure compliance with quality standards, while various slash commands facilitate checks for links and model usage within the code.

Developers are encouraged to follow best practices for notebooks, including maintaining clear concepts and proper API key handling. The post details a Git workflow, focusing on creating atomic commits and proper pull request protocols. Lastly, contributors are reminded to protect sensitive information and are provided support resources.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/README.md)
**Source:** anthropics/claude-cookbooks

The Claude Cookbooks are a resource designed to assist developers in utilizing the Claude API through a variety of code snippets and guides. Key features include classifications, summarization techniques, and integration with tools such as customer service agents and SQL queries. Users are encouraged to begin with the Claude API Fundamentals course to solidify their understanding. The cookbooks also cover advanced topics like using sub-agents, PDF uploads, and creating moderation filters. Community contributions are welcomed, with an emphasis on avoiding duplication of efforts. Additional resources include access to developer documentation, support documents, and a Discord community for further engagement.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a guide to building a high-accuracy insurance support ticket classifier using Large Language Models (LLMs). Key features include the progressive improvement of classification accuracy from 70% to over 95% through prompt engineering, retrieval-augmented generation (RAG), and chain-of-thought reasoning. It emphasizes the need for Python proficiency and details essential setup steps, including installing necessary packages and configuring API keys.

The classification system categorizes tickets into ten distinct categories related to insurance, such as Billing Inquiries and Claims Disputes, utilizing synthetic data generated by Claude 3 Opus. The guide provides steps for data preparation, prompt engineering, and performance evaluation, highlighting the importance of explainability and handling complex business rules. Overall, it showcases the potential of LLMs to enhance classification tasks in scenarios with limited training data.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post explores advancements in Retrieval Augmented Generation (RAG) through the introduction of Contextual Embeddings, enhancing response accuracy by providing documents with essential context during embedding. This method has demonstrated a 35% reduction in retrieval failures. A new approach, termed Contextual BM25, is also outlined, improving retrieval performance further. The evaluation utilized a dataset of nine codebases, revealing improved Pass@10 performance from approximately 87% to 95% via Contextual Embeddings. Additionally, the importance of prompt caching to optimize costs and latency is emphasized, enhancing efficiency in the implementation. Key features and setup requirements for the RAG system, along with evaluation metrics, are also detailed. Finally, the blog notes that resources for integrating this method in AWS and GCP environments are available for developers.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of Retrieval Augmented Generation (RAG) to enhance Claude's performance in responding to domain-specific queries. Key highlights include the ability of RAG to leverage internal knowledge bases for improved accuracy in customer support and internal documentation analysis. The guide outlines a step-by-step process for building and optimizing a RAG system using Claude Documentation, including setting up an in-memory vector database with embeddings, creating a robust evaluation suite, and applying advanced techniques such as summary indexing and re-ranking. Performance improvements were noted across several metrics: average precision (0.43 to 0.44), recall (0.66 to 0.69), F1 Score (0.52 to 0.54), mean reciprocal rank (0.74 to 0.87), and end-to-end accuracy (71% to 81%). The post emphasizes the need for comprehensive evaluation of both the retrieval and overall systems.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses utilizing Claude for effective summarization, particularly of legal documents. It emphasizes the importance of condensing lengthy texts while retaining key details. The guide covers foundational techniques for crafting effective prompts, extracting metadata, handling longer documents, and evaluating summary quality through various automated methods (like ROUGE scores).

Key highlights include:
- Crafting prompts that assist Claude in generating structured summaries.
- The concept of multi-shot summarization which leverages examples to improve output.
- Advanced techniques such as guided summarization to target specific document features.
- The introduction of domain-specific prompts to tailor summarization for particular legal documents, like sublease agreements.

By the end of the guide, readers are expected to have a robust understanding of summarization strategies and how to apply them effectively in practical scenarios.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Claude Agent SDK, enabling developers to create research agents capable of autonomously exploring external systems. Unlike traditional automated workflows, these agents adapt their approach based on findings, making them suited for various tasks like competitive analysis and technical troubleshooting. 

Key features include:

1. **Advanced Autonomy**: The agents utilize the WebSearch tool to make independent queries and synthesize findings.
2. **Stateless vs. Stateful Queries**: Stateless queries are effective for one-off tasks, whereas stateful agents with memory allow for multi-turn investigations.
3. **Production Readiness**: The blog outlines the transition from prototype to a production-ready module, highlighting core functions for reusable research applications.

Overall, this guide equips users with the knowledge to build efficient research agents while promoting exploration of information-seeking strategies.

---

### [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/coding/prompting_for_frontend_aesthetics.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for utilizing Claude, an AI, to generate visually appealing frontend designs. It emphasizes that without proper prompting, Claude often resorts to generic aesthetics, characterized by common choices in typography and color. The guide outlines three effective prompting strategies: guiding specific design dimensions such as typography and color, referencing design inspirations, and explicitly avoiding clichéd aesthetics. A distilled aesthetics prompt is presented to help achieve distinctive designs, avoiding overused fonts and predictable layouts. Examples demonstrate the superior results of applying the prompt, showcasing enhanced designs for a SaaS landing page, blog post layout, and admin panel compared to outputs generated without guidance. For more targeted control, the blog also suggests using isolated prompts focusing on specific aspects or themes, allowing users to achieve a cohesive aesthetic in their projects.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents an overview of the "extended thinking" feature in Claude 3.7 Sonnet, which enhances the model's reasoning capabilities for complex tasks. Key features include the generation of internal reasoning blocks, termed "thinking," that offer transparency in the model's problem-solving process. The post highlights various scenarios including setup instructions, a basic example showcasing this thinking feature, streaming capabilities, and token counting to manage context windows effectively. Additionally, the note on redacted thinking explains how the model securely handles flagged content. Important considerations for users are provided, including minimum token budgets, feature incompatibilities, and pricing implications for extended thinking. Overall, this feature aims to improve output clarity and effectiveness in task completion.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the extended thinking feature in Claude 3.7 Sonnet, which enhances transparency by allowing users to observe the model's reasoning process before it uses tools and provides final answers. Key features highlighted include:

1. **Setup and Usage**: Instructions for setting up the environment and initiating the feature were provided, enabling users to see thinking processes through code examples, including single and multiple tool calls, such as a weather and news service.

2. **Single and Multiple Tool Calls**: The post presented examples demonstrating how Claude utilizes thinking and tools for user queries, showing the model's thought process and facilitating dynamic interactions.

3. **Preservation of Thinking Blocks**: Emphasis was placed on preserving cryptographic signatures associated with thinking blocks to ensure the integrity of conversations when utilizing the extended thinking feature.

For further details, the post refers readers to the relevant documentation.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on how to finetune Claude 3 Haiku using Amazon Bedrock. Key requirements include having an AWS account, access to Bedrock, and a properly formatted JSONL dataset. The dataset should contain alternating user and assistant messages, with the option for an additional system message. 

The post outlines the steps to upload the dataset to S3 and initiate a finetuning job using the `boto3` library, detailing necessary configurations such as job names, roles, and hyperparameters. After launching the job, users can monitor its status and, once completed, host the finetuned model through Provisioned Throughput on Amazon Bedrock. The blog concludes with an example of how to invoke the finetuned model using the Bedrock API.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Message Batches API, designed for efficient and cost-effective asynchronous processing of large volumes of message requests, promising up to a 50% reduction in costs. It outlines key functionalities, including creating and submitting message batches, monitoring their processing status, retrieving results, and implementing best practices.

The post provides step-by-step examples illustrating both basic and advanced batch processing. Users can generate simple batches of inquiries and monitor their outcomes, as well as handle complex requests that include varied message types, such as text, system prompts, and image analysis. The API also facilitates error handling during these operations. Overall, it serves as a practical guide for developers looking to optimize their message processing strategies.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the methodology for building effective evaluations (evals) for optimizing the Claude language model. It outlines the four essential components of an eval: input prompts, model outputs, golden answers for comparison, and scoring methods. The author highlights three grading methods: 

1. **Code-based grading**, which utilizes string matching for fast, reliable results.
2. **Human grading**, which is flexible but slow and costly, requiring extensive evaluation of varied responses.
3. **Model-based grading**, wherein Claude grades completed tasks by following a defined rubric, significantly speeding up the process.

The post emphasizes the importance of efficient eval design, suggesting specific question structures to facilitate automation and recommending a balance between quantity and quality of eval questions. Overall, the guidance aims to advance the accuracy and practicality of deploying language models into production environments.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude, an AI model, to create a customizable content moderation filter for user-generated text. The process involves defining moderation rules within a prompt, categorizing user content into "ALLOW" and "BLOCK" categories. It includes Python code examples demonstrating how to classify comments based on these guidelines. Users can personalize their moderation by altering category descriptions, making it applicable to various contexts, such as a rollercoaster enthusiast forum. Advanced techniques are also discussed, including "chain-of-thought" prompting, which guides Claude to reason through moderation decisions step-by-step, and "few-shot learning," where examples are incorporated to improve classification accuracy. Overall, the article emphasizes flexibility and performance enhancement in content moderation using AI.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for generating synthetic test data for prompt templates using Claude and its API. It introduces the concept of "variables" within these prompts and provides a structured approach to create relevant test cases without using real data—ensuring privacy compliance. Key features include:

1. **Functions for Data Generation**: Several functions are detailed for extracting variables, constructing example blocks, and generating test cases, enabling users to generate realistic inputs for evaluating and improving prompt performance.
2. **Evaluation and Improvement**: The generated test cases can be used to assess how Claude performs with realistic examples and refine prompts through iterative testing.
3. **Customizable Templates**: It details how to format prompt templates for synthetic evaluations, including handling user examples, thereby enhancing Claude’s response accuracy.

Overall, this toolset empowers users to test and enhance AI prompt commands effectively.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses how to effectively obtain JSON outputs from the Claude AI model despite the absence of a formal "JSON Mode." It highlights strategies for extracting reliable JSON by using specific prompts and techniques. Key methods include:

1. **Default Behavior**: Users can generate JSON by sending direct requests.
2. **Prefilled Responses**: Adding a "{" character in the prompt instructs Claude to bypass preambles and focus on delivering JSON.
3. **Tagging JSON Outputs**: For complex requests, embedding JSON within specified tags (e.g., `<athlete_sports>`, `<athlete_name>`) allows for easier extraction using regular expressions.
4. **Text Management**: Suggestions are provided to manage text output, including removing preambles and post-JJSON content.

Overall, the post serves as a practical guide for developers looking to streamline JSON generation from Claude.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a practical approach to utilizing Claude, an AI tool by Anthropic, for generating SQL queries from natural language questions. It details the setup process, including installing libraries and configuring the Anthropic client, followed by the creation of a test SQLite database with an employee table containing sample data. The author presents a function to send natural language questions to Claude, which translates them into SQL queries based on a provided database schema. An example question is posed about retrieving names and salaries of employees in a specific department, demonstrating the query generation and execution process. The post concludes with instructions to close the database connection after obtaining results. Overall, it illustrates how Claude can facilitate SQL query creation through natural language processing.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Metaprompt," a prompt engineering tool designed to help users overcome the "blank page problem." This straightforward tool allows users to input a specific task and any desired variable names, generating a customizable prompt template for use with the Claude AI. It emphasizes ease of use, not requiring any coding skills—users simply need to insert their API key and task, then run the notebook to view their prompt.

Key features include:
- Support for various tasks with example prompts demonstrating how to interact with the AI.
- A structured process for enhancing prompts, ensuring they are practical for single-turn interactions.
- Variability in output, encouraging users to modify the generated prompts for optimal results.

Overall, Metaprompt aims to streamline prompt creation, making it accessible for users at all levels.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a new feature from Claude.ai that allows users to upload PDFs via the API. The feature, currently in beta, is accessible exclusively through the "claude-sonnet-4-5" model. The post details the process of encoding a PDF into base64 format, which is necessary for API integration. After setting up the Anthropic client, the author demonstrates how to read a PDF and submit it alongside a prompt asking for tasks such as summarizing the abstract at a kindergarten reading level and composing content in various styles. This showcases the document processing capabilities of Claude, enabling users to interact with both textual and visual elements within the PDF.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation and benefits of prompt caching via the Claude API, which enables users to store and reuse context in prompts. Key advantages include reducing response latency by over 2x and lowering costs by up to 90%, particularly useful for tasks involving extensive text, like literature analysis. The post includes a practical guide with examples—including both single-turn and multi-turn conversations—to demonstrate caching's performance improvements. 

In the examples, a significant reduction in API call times was highlighted: a cached call took just 3.64 seconds compared to 21.44 seconds for a non-cached call. In multi-turn scenarios, response times improved from nearly 24 seconds to 7-11 seconds after initial caching, showcasing the feature's effectiveness in enhancing user experience and operational efficiency.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a tutorial on using Anthropic's Claude API to summarize web page content. Key steps include installing the Anthropic library and setting up the API client with an API key. It details fetching web page content using the `requests` library, demonstrating how to handle HTTP responses effectively. The post then explains how to format a prompt for the Claude API, which includes the fetched content and a request for a summary. Finally, it illustrates how to invoke the API to generate a concise summary of the web page. Overall, it serves as a practical guide for developers looking to automate content summarization using the Claude API.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method to obtain longer responses from Claude, exceeding the maximum token limit of 4096 by utilizing a prefilled message. It demonstrates how to prompt Claude to generate five stories, each at least 1000 words long. When Claude's response cuts off prematurely due to the token limit, the author suggests including the incomplete response in a follow-up message to allow Claude to continue seamlessly from where it left off. The post notes that while this method results in double charges for input tokens, it does not incur double charges for output tokens.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses "Speculative Prompt Caching," a technique aimed at reducing time-to-first-token (TTFT) by warming up the cache during user input. 

**Key Features:**
- **Comparison:** It contrasts two caching methods: standard prompt caching, where the API context loads after user input, and speculative caching, where the cache warms up in the background as the user types.
- **Performance Improvement:** Implementing speculative caching showed significant improvements in TTFT and total response time, especially with large contexts (>1000 tokens).
- **Implementation:** It involves sending a single-token request while the user types, ensuring efficiency.

**Best Practices:**
- Initiate cache warming early and ensure reuse of the same context for reliability in cache hits.
- Monitor cache performance metrics to validate efficiency.

Overall, speculative caching enhances user experience by reducing waiting times for responses in applications relying on large datasets.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the introduction of citation support in the Claude API, available in both `claude-sonnet-4-5` and `claude-3-5-haiku-20241022`. This feature allows Claude to provide detailed citations for various document types, including plain text, PDF, and custom content documents. Advantages of this method include improved efficiency and accuracy compared to traditional prompt-based citation techniques, which consume more resources and can lead to inaccuracies.

The post also outlines how citations work with different document types, showing practical examples with a customer support chatbot and PDF documents. Additionally, it discusses enhancements for visualizing citations in user interfaces and the contextual use of additional document information. Overall, this release aims to enhance user experience by ensuring transparent sourcing of information. Further documentation can be accessed via the provided link.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the use of the Claude AI model for working with charts, graphs, and slide decks, highlighting its PDF support and vision capabilities. Key features include:

1. **PDF Integration**: The blog explains how to ingest charts and graphs by converting them into PDF format, which Claude can process effectively, particularly in its `claude-sonnet-4-5` model (currently in beta).
2. **Ingestion Techniques**: Users are guided on how to encode PDFs and formulate queries that maximize Claude's ability to extract and analyze information from the data presented.
3. **Tips for Improved Accuracy**: Suggestions include providing arithmetic tools to prevent errors and strategies for handling complex visual elements in charts, like identifying colors using HEX codes.
4. **Slide Deck Processing**: It emphasizes utilizing PDF support for analyzing slide decks, proposing detailed narration prompts to improve output quality.

Overall, the article offers practical workflows and considerations for leveraging Claude in data-heavy environments.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a step-by-step guide for analyzing Apple's 2023 financial earnings reports using Claude 3's Haiku sub-agent models. Key elements include:

1. **Setup**: It starts with installing required libraries (e.g., `anthropic`, `matplotlib`) and configuring the Claude API client.
   
2. **Data Preparation**: The author collects Apple's quarterly earnings release PDFs and formulates a key question focused on net sales changes throughout the year.

3. **PDF Processing**: PDFs are downloaded and converted to base64-encoded PNG images for easier data extraction.

4. **Information Extraction**: Leveraging the Haiku models, relevant information is extracted from each earnings report.

5. **Response Generation**: Opus generates a comprehensive response that answers the initial question and includes Python code for visual representation using matplotlib.

6. **Execution**: Finally, the generated matplotlib code is extracted and executed to visualize the results. 

This systematic approach demonstrates the integration of advanced processing tools in financial analysis.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the "Usage & Cost Admin API Cookbook," a comprehensive guide for utilizing the Claude API to track usage and manage costs effectively. Key features include:

1. **Usage Tracking**: Users can monitor token consumption, cache efficiency, and usage across various models and workspaces.
2. **Cost Analysis**: The API provides a detailed breakdown of costs by service type, helping to spot spending trends and generate financial reports.
3. **Endpoints**: It details the "Messages Usage API" for tracking token usage and the "Cost API" for financial data reporting.
4. **Security**: It emphasizes the importance of secure key storage and management.
5. **Practical Applications**: Use cases focus on usage monitoring, cost attribution, cache analysis, and financial reporting.

The post highlights workflow examples, including fetching and analyzing usage and cost data, with a focus on efficient data handling and export options.

---

### [basic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/patterns/agents/basic_workflows.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces three fundamental multi-LLM workflows aimed at enhancing task performance while managing cost and latency. The workflows are:

1. **Prompt-Chaining**: Breaks down a task into a series of sequential subtasks, where each step utilizes the previous step's output.
2. **Parallelization**: Facilitates the simultaneous processing of independent subtasks across multiple language models (LLMs).
3. **Routing**: Employs content classification to dynamically select specialized paths tailored to different inputs.

Sample implementations of these workflows include examples for structured data extraction, stakeholder impact analysis, and customer support ticket resolution. These implementations are provided as demonstrations of core concepts rather than production-ready code, emphasizing their applicability in various scenarios within LLMs.

---

### [evaluator_optimizer.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/patterns/agents/evaluator_optimizer.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses an innovative Evaluator-Optimizer workflow that utilizes two separate language models (LLMs) in a iterative feedback loop to enhance responses. This approach is most effective under conditions where clear evaluation criteria exist and iterative refinement can provide significant value. Key indicators of its suitability include the ability of LLM responses to be refined through feedback and the capacity of LLMs to generate meaningful evaluations. 

The post includes a practical code implementation that demonstrates how to structure the generation and evaluation prompts. Additionally, it illustrates a loop function for continuous improvement until the output meets predefined criteria, specifically highlighting an example scenario involving coding tasks. This workflow aims to optimize task completion by combining generation and evaluative feedback efficiently.

---

### [orchestrator_workers.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/patterns/agents/orchestrator_workers.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the "orchestrator-workers workflow," a technique utilizing a central LLM (Large Language Model) to analyze tasks and dynamically assign subtasks to specialized worker LLMs. This method offers increased adaptability over traditional fixed parallelization by allowing the orchestrator to determine the best approaches based on the unique context of each input. 

Key features include a two-phase process for analysis and execution, an XML-based communication format for structured outputs, and a focus on generating multiple content variations tailored to different audiences, such as in marketing scenarios. The system requires Python infrastructure and emphasizes flexibility, error resilience, and improved task decomposition while cautioning against inappropriate use in simple or latency-sensitive tasks. Future enhancements might involve asynchronous worker execution, retry mechanisms, and synthesis of worker outputs.

---

### [research_lead_agent.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/patterns/agents/prompts/research_lead_agent.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines an expert research lead's strategic approach to managing research projects effectively. It emphasizes the importance of assessing and breaking down user queries, categorizing them into depth-first, breadth-first, or straightforward types, and developing a detailed research plan. The plan should clearly allocate tasks to subagents, ensuring comprehensive coverage and efficient execution of research processes.

The article highlights the need for specific instructions for subagents, outlining objectives, expected formats, background context, and sources to use. It encourages deploying multiple subagents based on complexity, with the goal of synthesizing findings for a thorough and accurate response. The emphasis is on a structured methodical execution of research while adapting to new information, ensuring the final output meets user expectations for quality and depth.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Claude Skills Cookbook," a Jupyter notebook toolkit designed to help developers integrate Claude's Skills feature for document generation (Excel, PowerPoint, PDF). It provides a structured approach for setting up the development environment, including commands for activating a virtual environment, installing dependencies, and launching Jupyter notebooks. Key architectural details outline the directory structure, built-in skills for document types, and various API integration requirements, specifically highlighting the need for beta API usage. The post also addresses common development challenges, such as ensuring SDK compatibility, managing file API responses, and streamlining document generation times. Additional resources and a checklist for testing notebook changes are included to ensure proper functionality and performance. The project primarily targets intermediate developers and business analysts, focusing on finance and analytics applications.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/README.md)
**Source:** anthropics/claude-cookbooks

The "Claude Skills Cookbook" provides a detailed guide on utilizing Claude's Skills feature for document generation, data analysis, and business automation. Key features include dynamic loading of specialized capabilities for creating professional documents (like Excel, PowerPoint, PDFs), performing complex data analyses, and automating tailored business workflows. The cookbook is structured into three main notebooks: an introduction to Skills, financial applications, and custom skills development. It highlights progressive disclosure architecture for token optimization and offers real-world finance-focused examples. Users can create custom skills and include sample datasets for practical application. Installation steps, API configuration, and file generation processes are also meticulously outlined. The resource serves as a comprehensive toolkit for leveraging Claude's capabilities effectively.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/custom_skills/analyzing-financial-statements/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the capabilities of the Financial Ratio Calculator Skill, designed for comprehensive financial analysis by calculating key financial ratios from company data. The skill evaluates performance through profitability, liquidity, leverage, efficiency, and valuation ratios, as well as per-share metrics.

Users can input financial data via CSV, JSON, text, or Excel formats and select specific or all ratios for analysis. The output includes calculated ratios, industry benchmarks, trend analysis, and insights in both text and Excel report formats. The post also highlights best practices for data validation and interpretation while noting limitations such as the need for accurate data and general applicability of industry benchmarks. This tool aims to assist investors in making informed decisions based on financial statement evaluations.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/custom_skills/applying-brand-guidelines/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the Corporate Brand Guidelines Skill for Acme Corporation, aimed at ensuring consistency in branding across all generated documents. Key features include a defined color palette with specific primary and secondary colors, typography standards using Segoe UI, and logo usage rules emphasizing placement and sizing. Document formats for PowerPoint, Excel, and PDF are detailed, specifying layout, styles, and content presentation guidelines to maintain corporate identity. The tone of voice is recommended to be professional, clear, and active, with standard phrases provided for communications. Additionally, quality standards are established to ensure compliance with branding before finalizing documents, and a script is included to automate branding application. These guidelines apply to all external communications, with periodic updates planned.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/custom_skills/creating-financial-models/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post details an advanced financial modeling suite designed for investment analysis and risk assessment, featuring core capabilities such as Discounted Cash Flow (DCF) analysis, sensitivity analysis, Monte Carlo simulations, and scenario planning. Key functionalities include building DCF models with multiple growth scenarios, conducting sensitivity tests with tornado charts, running comprehensive Monte Carlo simulations for uncertainty modeling, and crafting scenario analyses for various economic climates. The suite supports models for corporate valuation, project finance, M&A analysis, and leveraged buyouts. Best practices emphasize consistent formatting, thorough documentation, and robust risk management strategies. Included scripts facilitate model creation, while regular updates ensure alignment with current financial theories and market standards. The post concludes by highlighting the importance of professional judgment in interpreting model outputs and recognizing inherent limitations.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude Skills, a feature that enhances Claude's capabilities in generating professional documents and automating workflows in Excel, PowerPoint, and PDF formats. Key aspects include:

1. **Setup and Installation**: Guidelines for setting up the environment, including Python requirements and API key configuration.
2. **Skills Overview**: Skills are defined as organized packages that provide Claude with specialized tasks, enhancing efficiency and reliability while minimizing token usage.
3. **Types of Skills**: Differentiates between Anthropic-managed and custom user-defined skills.
4. **Execution Model**: Describes how Skills leverage code execution for functionalities like file creation, emphasizing the importance of beta API usage.
5. **Performance Insights**: Highlights token savings and document generation time expectations, urging users to start with simpler tasks before scaling up.

For practical examples, it discusses creating documents like Excel spreadsheets using Claude's Skills, demonstrating the ease and efficiency of this feature.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the capabilities of Claude's Skills tailored for financial applications, enabling users to create financial dashboards, portfolio analytics, and automated reporting workflows directly through Excel, PowerPoint, and PDF files. Key features include:

1. **Excel Financial Models**: Develop comprehensive financial dashboards with dynamic charts and formulas.
2. **Executive Presentations**: Automatically generate PowerPoint presentations summarizing financial data for clear communication.
3. **Portfolio Analysis Tools**: Construct detailed Excel workbooks analyzing investment portfolios, including risk metrics and sector allocations.
4. **Automated Reporting Workflows**: Streamline reporting processes across multiple formats.

The post emphasizes practical use cases for creating financial documents while providing guidelines for best practices in file generation. It also details prerequisites for using these capabilities, including the necessary API configurations and SDK installations. Overall, Claude's Skills facilitate the efficient creation of essential financial materials, enhancing productivity in financial analysis and reporting tasks.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Building Custom Skills for Claude" outlines the process of creating and managing custom skills to enhance the AI assistant Claude with specific organizational knowledge and workflows. Key features include the ability to codify unique methodologies, enforce consistency across interactions, and automate multi-step processes while safeguarding intellectual property.

The architecture of custom skills is discussed, highlighting that a minimum of a `SKILL.md` file is required, alongside optional documentation and scripts. Several examples are provided, including a Financial Ratio Calculator that analyzes financial data and generates reports, and a skill for enforcing corporate brand guidelines.

The post also details best practices for skill management, including version control and advice on troubleshooting. It emphasizes the importance of setting up the proper environment and provides a code workflow for creating, testing, and managing these skills effectively.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a notebook that allows users to transcribe audio files using Deepgram and subsequently generate interview questions using Anthropic's API. The process includes several steps: 

1. **Dependencies Installation** - Users are instructed to install necessary packages, including Deepgram's SDK and Anthropic's library.
2. **Audio File Preparation** - Users are guided to specify a URL for an audio file to transcribe.
3. **Transcription Process** - After setting up the Deepgram API key and audio file URL, users transcribe the audio and save the results in a JSON file.
4. **Transcription Review** - The post shows how to extract and print the transcription from the generated JSON.
5. **Interview Questions Generation** - Finally, it explains how to send the transcription text to Anthropic to generate a set of thoughtful interview questions.

Overall, the post provides a clear tutorial for utilizing audio transcription and AI-driven content generation tools.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a Basic Retrieval-Augmented Generation (RAG) Pipeline using LlamaIndex. Key steps include setting up a Language Model (LLM) and an embedding model, downloading and loading data, indexing it, and creating a query engine for querying purposes. The installation process is outlined, requiring packages like `llama-index` and `llama-index-embeddings-huggingface`. For the LLM, the latest Claude 3 Opus models are utilized alongside HuggingFace for embeddings. Data is sourced from a specific essay, which is indexed to allow efficient querying. A sample query tests the system's response capabilities, highlighting the functionality of the query engine.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the implementation of a Retrieval-Augmented Generation (RAG) system using `DocumentAgents` and the `ReAct Agent` concept for handling multiple documents. Key announcements include:

1. **Installation Requirements**: Users are instructed to install necessary packages such as `llama-index` and `llama-index-llms-anthropic`.

2. **Agent Implementation**: The post outlines the process of setting up `Claude-3 Opus` as the language model and integrating it with Hugging Face embeddings to process data from Wikipedia pages of five cities: Toronto, Seattle, Chicago, Boston, and Houston.

3. **Document Loading and Querying**: It describes downloading city-related documents, building vector and summary indices, and creating agents for specific queries using tools that retrieve information or summarize content.

4. **Testing Queries**: Demonstrates the system's capability by querying various city-specific information and generating responses through selected tools.

This framework enables efficient information retrieval and summarization from a vast collection of documents.

---

### [Multi_Modal.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/Multi_Modal.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the use of Anthropic's MultiModal LLM for image understanding and reasoning. It outlines a practical implementation guide, including necessary installations (e.g., `llama-index` and various libraries for handling images). The setup process includes configuring an API key and downloading sample images. 

Key highlights include using the Anthropic MultiModal class to describe images and to analyze images from local files and URLs. Furthermore, a structured output parsing feature is introduced, which employs Pydantic models to extract and return stock information from images in a predetermined JSON format. This showcases the model’s capability to reason about visual content and output data structured according to specific schemas.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the creation of a ReAct Agent utilizing tools such as a simple calculator and a QueryEngine for processing data from Uber and Lyft's 10K SEC filings. Key announcements include the installation of necessary packages like `llama-index`, the configuration of the Anthropic LLM API using the `Claude-3 Opus` model, and the implementation of two functionalities—multiplication and addition—using FunctionTools. Additionally, it covers the setup of a query engine that allows the ReAct Agent to answer detailed financial queries about Lyft and Uber. The article demonstrates querying the agent to retrieve and compare the revenue growth of both companies in 2021, showcasing its capabilities in natural language processing and data analysis.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, which routes user queries to various query engine tools for different document indices. Key features include the installation of relevant packages like `llama-index` and setting up logging in Jupyter notebooks using `nest_asyncio` for handling asynchronous queries. It guides users to configure the Claude-3 Opus LLM and a HuggingFace embedding model while demonstrating how to download and load a document. 

The post details the creation of both a Summary Index for summarization and a Vector Store Index for context-specific queries. It outlines the establishment of a Router Query Engine that integrates tools for both types of queries, enabling streamlined responses. Finally, it showcases sample queries and the output from the system, illustrating its practical applications.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, designed to simplify complex queries that require information from multiple documents. It outlines the installation process for required libraries, including `llama-index` and its components for working with the `Claude-3 Opus` LLM and Hugging Face embeddings. The post details the setup of the API key, data loading from Uber and Lyft's 2021 SEC filings, and the creation of index engines for querying. 

Key features include the ability to perform nuanced queries that compare financial data, such as revenue growth and investments between Uber and Lyft. Additionally, it describes the use of tools to facilitate these queries, showcasing how to efficiently extract comparative insights from large documents.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post provides a comprehensive guide on creating a Retrieval-Augmented Generation (RAG) system using Claude 3 and MongoDB. Key steps include:

1. **Development Environment Setup**: Instructions for installing necessary libraries and configuring MongoDB.
2. **Data Handling**: Techniques for creating vector search indexes and preparing data for ingestion.
3. **Utilizing Claude 3**: Implementing the Claude 3 model for generating contextually relevant responses based on database queries.
4. **MongoDB Operations**: Steps for creating a MongoDB cluster, establishing collections, and performing vector searches.
5. **User Queries Handling**: Accepting queries, generating embeddings using a VoyageAI model, and utilizing Claude 3 to enhance responses.

The tutorial emphasizes efficient data processing and integration of advanced language models with vector-based information retrieval for a tech-focused chatbot application.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the advancements in LangChain v1, particularly in initializing and utilizing agents, making this process clearer than in prior versions. It details constructing a Retrieval-Augmented Generation (RAG) agent using Claude 3, Voyage AI for embeddings, and Pinecone for knowledge retrieval. Essential installations and API key requirements are specified.

The post further outlines creating a knowledge base from the AI ArXiv dataset, utilizing embedding models for data processing, and constructing a custom search tool to query AI research. A notable feature includes the implementation of an XML agent designed for compatibility with Anthropic models. The agent utilizes memory capabilities to maintain conversational context, enabling a more interactive user experience. The walkthrough culminates in leveraging the agent for dynamic queries, demonstrating its superior adaptability in conversation.

---

### [rag_using_pinecone.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/Pinecone/rag_using_pinecone.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post showcases a step-by-step tutorial on integrating Claude, a conversational AI, with a Pinecone vector database using the retrieval-augmented generation (RAG) approach. Key highlights include:

1. **Setup**: Users are guided to obtain API keys from Claude, Pinecone, and Voyage AI, alongside necessary library installations.
2. **Dataset Handling**: The Amazon product dataset, consisting of over 10,000 descriptions, is downloaded and structured into a DataFrame.
3. **Pinecone Index Creation**: Instructions for initializing a Pinecone index to store and manage embeddings generated from the dataset are provided.
4. **Embedding Generation and Querying**: The post details the process of creating embeddings using Voyage AI and querying the Pinecone index with user's natural language questions for relevant product descriptions.
5. **Optimizing Searches**: The integration of Claude allows for the generation of diverse keywords based on user queries, enhancing search relevance.
6. **Final Response**: The tutorial concludes by formatting the returned product descriptions and obtaining a comprehensive answer from Claude.

---

### [wikipedia-search-cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a virtual research assistant using Claude 2, capable of searching Wikipedia to answer complex queries. It details a structured approach to utilizing a search tool by prompting Claude with instructions on effective querying, allowing it to fetch information from Wikipedia as needed. The process includes generating queries, analyzing results, and synthesizing responses to ensure accurate answers. The post highlights the importance of crafting concise queries and utilizing a multi-step retrieval strategy to enhance the search process. Additionally, it shares implementation details, including a sample query execution that demonstrates Claude's capability to find and synthesize accurate information from the Wikipedia search tool. Overall, the article emphasizes the potential of tool use in improving the reliability and accuracy of AI-generated responses.

---

### [using_llm_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/third_party/WolframAlpha/using_llm_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the integration of the Wolfram Alpha LLM API with Claude, a language model, enabling Claude to access Wolfram Alpha's computational capabilities to answer user queries. It outlines a step-by-step setup, beginning with the installation of necessary libraries and configuration of the Claude API client using a Wolfram Alpha App ID. The post demonstrates how to define a utility function to process queries, which are sent to the Wolfram Alpha API, with a focus on error handling. Furthermore, it illustrates the interaction process between Claude and the Wolfram Alpha tool, providing sample user questions such as population statistics of countries, mathematical calculations, and astronomical distances. The integration enhances Claude's ability to deliver informed responses by leveraging Wolfram Alpha's extensive knowledge base.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a structured approach for evaluating AI tools using independent agents to complete tasks outlined in an XML evaluation file. Key components include:

1. **Evaluation Methodology**: Tasks are executed by agents utilizing predefined tools, with detailed tracking of tool performance and outcomes.
2. **Agent Loop Implementation**: Agents process prompts and provide structured output, including summaries, feedback on tools, and their final responses wrapped in specific tags.
3. **Tool Metrics**: Performance metrics are tracked for each tool used, capturing execution duration and the number of calls.
4. **Report Generation**: An evaluation report summarizing accuracy, average task duration, and detailed task outcomes is generated post-evaluation.
5. **Example Tool**: The post introduces a basic calculator tool for arithmetic, emphasizing the need for clear descriptions in tool schemas.

The post showcases a comprehensive framework aimed at enhancing the evaluation process of AI tools.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the implementation of a calculator tool for interfacing with Claude, an AI model. Key steps include setting up the environment by installing the necessary libraries and initializing the Claude API client. A simple calculator tool is defined to evaluate basic arithmetic expressions, leveraging Python's `eval` function while emphasizing the risks associated with its use. The interaction process involves capturing user queries, prompting Claude to use the calculator tool when necessary, and managing the responses effectively. The post concludes with example queries demonstrating the functionality of the calculator tool, allowing users to perform complex arithmetic operations through Claude.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the process of creating a customer service chatbot using Claude 3 and client-side tools. Key steps include setting up the environment, defining three main tools—get_customer_info, get_order_details, and cancel_order—each with specific input schemas. Simulated responses for these tools are provided to illustrate their functionalities, as real customer data isn't used. The post outlines a method to process tool calls and return results upon user interaction with the chatbot. Testing examples demonstrate the chatbot’s ability to provide customer information, order details, and handle order cancellations effectively. The article encourages further development by integrating with actual customer databases and expanding tool capabilities.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post explores how to use Claude's tool use feature to extract structured JSON data for various natural language processing tasks. Key examples demonstrated include:

1. **Article Summarization**: Utilizing a custom tool, users can generate a JSON summary containing fields for author, topics, summary, coherence score, and persuasion score.

2. **Named Entity Recognition**: This involves extracting entities from text and returning them in JSON format, detailing their names, types, and contexts.

3. **Sentiment Analysis**: Claude provides sentiment scores in JSON format, categorizing sentiments as positive, negative, or neutral.

4. **Text Classification**: The model categorizes text into predefined categories and offers classification scores in JSON.

5. **Handling Unknown Keys**: The capability to deal with dynamic input structures based on provided descriptions is also featured.

These examples underscore the flexibility of Claude in generating structured outputs tailored to various applications.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces advanced capabilities for AI agents to manage memory and context, addressing challenges faced during long-running tasks and multi-session interactions. Key announcements include the introduction of the **Memory Tool**, which allows agents like Claude to retain learned patterns across conversations, and **Context Editing**, which enhances context management during extended dialogues. 

These features enable AI agents to learn from past experiences, apply knowledge in future interactions, and efficiently manage context without losing important information. Use cases highlighted include applications in code reviews, research assistance, customer support, and data analysis. 

By implementing these tools, developers can build agents that better adapt over time, ensuring they become more effective in handling tasks. The post serves as a guide for integrating these capabilities using Python, including setup instructions and practical examples.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `tool_choice` parameter for Claude, detailing its three options: `auto`, `tool`, and `any`. 

1. **Auto**: Allows Claude to determine tool usage based on input; it defaults to this mode.
2. **Tool**: Forces Claude to consistently use a specified tool regardless of context.
3. **Any**: Ensures Claude uses one of the available tools for all responses.

The post emphasizes the importance of crafting detailed prompts, especially under the `auto` setting, to guide Claude's decision-making. Through examples, it demonstrates how Claude can be prompted to either use a web search tool or perform operations like sentiment analysis and customer inquiries, depending on the specified `tool_choice`. 

In summary, understanding `tool_choice` enhances Claude’s functionality as an AI assistant.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a note-saving tool using Pydantic and the Anthropic Claude API. Key announcements include the implementation of Pydantic models for note validation, which ensures the integrity of user input regarding notes, authors, and metadata. The noted classes—Author, Note, and SaveNoteResponse—define the structure and requirements for saving a note, including attributes like priority and visibility.

The process involves setting up the environment, defining the client-side tool, and creating functions to handle user interactions with the chatbot. The tool saves a note and confirms the operation's success, with responses validated against the Pydantic models. This structured approach enhances reliability and facilitates seamless interactions for users wishing to save notes through the chatbot. The post concludes with a demonstration of the tool via a test interaction.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/a0b47a009ac9e55dfb51f661fd74fcb84bc839fd/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a method for integrating Vision with tools to extract structured nutrition information from an image of a nutrition label using Claude’s API. Key elements include the installation of necessary libraries and the setup of a custom tool named "print_nutrition_info," designed to extract various nutritional metrics such as calories, fat, cholesterol, carbohydrates, and protein. The process involves loading a nutrition label image, encoding it to base64 format, and sending it to the Claude model with a prompt. The model then uses the custom tool to return the extracted information in a structured JSON format. The post emphasizes the seamless interaction between image processing and tool functionality to enhance data retrieval.