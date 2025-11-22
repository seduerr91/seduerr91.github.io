---
title: Claude Platform Advances - Key Trends Unpacked
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 11-22"
---
**Claude Platform Meta-Summary: Key Trends and Announcements**

The collected blog posts reveal rapid, multi-faceted advancements in Anthropic's Claude ecosystem, highlighting several prominent trends and major feature rollouts:

1. **Expanded Core Capabilities and Transparency**
   - Claude is increasingly equipped with advanced features such as extended memory across sessions, multi-chat context handling, and robust eval/evaluation workflows. Notably, the extended thinking feature in Claude 3.7 Sonnet provides unprecedented transparency, allowing users to inspect the model's reasoning prior to responses and tool use.

2. **Retrieval-Augmented Generation (RAG) & Contextual Embeddings**
   - RAG has emerged as a central architecture, with numerous posts detailing improved embeddings, contextual chunking to reduce failures and enhance accuracy, and seamless integrations with databases like MongoDB and Pinecone. Novel techniques such as contextual embeddings and prompt caching now offer users more precise, efficient retrieval and reduced costs.

3. **Tool Use and Automation**
   - Claude's support for tool integration has significantly deepened, including API-based utilities (calculators, nutrition data, Wolfram Alpha), PDF/image analysis, and structured output generation (JSON, sentiment analysis, etc.). The platform now enables workflow automation via custom and built-in skills, orchestrator-worker patterns, and multi-agent systems—empowering sophisticated business and research automation.

4. **Financial and Business Applications**
   - The platform now offers a robust suite of financial tools: Excel/PowerPoint/PDF generation, advanced financial modeling, dashboard/report automation, and specialized skills (e.g., ratio calculators, brand guidelines). Emphasis is placed on proper setup, best practices, and progressive disclosure architectures to optimize performance and maintain data integrity.

5. **API Feature Announcements and Developer Experience**
   - Major API enhancements include support for PDF uploads, citation generation, message batch processing, prompt/speculative caching, usage/cost tracking, and new slash commands for validation/review. The developer experience is supported by detailed guides, checklists, workflows (PR/contribution), and security/best practice documentation.

6. **Evaluation, Moderation, and Content Quality**
   - Several posts focus on robust evaluation methods (e.g., human, model-based, code), content moderation frameworks, synthetic test data generation, and automated notebook/code review flows, all designed to maintain high-quality outputs and responsible AI usage.

7. **Prompt Engineering and Summarization**
   - Best practices in prompt engineering are emphasized, from crafting effective RAG prompts and legal summarization strategies to generating unique frontend designs and programmatic prompt evaluation. Metaprompts and tools for prompt generation further lower barriers for users.

8. **Community and Contribution**
   - Contribution guidelines, code quality rubrics, and collaborative cookbooks foster an open, community-driven environment, encouraging developers to share, audit, and advance Claude-based solutions.

**In Summary:**  
Anthropic’s Claude platform has seen major advances in context management, retrieval accuracy, tool integration, financial automation, and developer-centric features. These innovations, along with a commitment to quality and openness, position Claude as a versatile foundation for enterprise-grade AI agents, workflow automation, and state-of-the-art natural language and data processing applications.

## New Cookbook Recipes

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/9e6ca618fa0173f9253c6d6a41981c3ee2c8d309/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses challenges faced by AI agents in long-running tasks, specifically around memory loss and context management. It introduces Claude's memory tool, which allows for cross-conversation learning, enabling AI to retain and reference learned information across multiple sessions. Key features include a file-based memory system and context editing strategies to manage context overflow during lengthy interactions. Use cases are provided, such as a Code Review Assistant that learns from past reviews to enhance efficiency. The post also highlights best practices for implementing these features, aiming to improve AI agent performance over time and streamline long interactions.

---

### [link-review.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.claude/commands/link-review.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines guidelines for reviewing links within specified changed files, emphasizing link quality and security. Key quality checks include identifying broken and outdated links, ensuring no links lead to suspicious sites, and adhering to best practices such as using HTTPS and relative paths for internal links. Specific checks are highlighted for Anthropic content, requiring current links for Claude documentation and API resources. The review should be summarized into three categories: valid links, links needing attention, and broken links needing fixing. Reviewers are instructed to post their findings as comments on the relevant pull request using a provided command.

---

### [model-check.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.claude/commands/model-check.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a procedure for validating the usage of the Claude model in code by reviewing specific files for compliance with the current list of public models. Key steps include fetching the latest model list from the official Claude documentation, ensuring that all model references are valid, and identifying any deprecated or internal models. It also emphasizes the importance of recommending the use of aliases that end in "-latest" for easier maintenance. The findings from this review should be documented and submitted as a comment on the relevant pull request, utilizing a specific command for feedback submission.

---

### [notebook-review.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.claude/commands/notebook-review.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a thorough review of Jupyter notebooks and Python scripts, highlighting their functionality and effectiveness in data analysis. 

**Key Highlights:**
- ✅ The notebooks demonstrate clear organization and effective use of markdown for documentation.
- ⚠️ Suggestions for improvement include enhancing code comments for better clarity and ensuring consistent formatting across all scripts.
- ❌ Critical issues identified involve potential inefficiencies in code execution that could impact performance and suggestions to optimize them.

Overall, the review underscores the strengths of the notebooks while recommending adjustments to elevate their usability and efficiency.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.claude/skills/cookbook-audit/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a structured approach to auditing an Anthropic Cookbook notebook using a comprehensive rubric contained in `style_guide.md`. Key steps include conducting a preliminary review of the style guide, performing automated technical checks with a Python script, manually evaluating the markdown output, and scoring various dimensions of the notebook based on predetermined criteria. The audit report format emphasizes an executive summary, detailed scoring, specific recommendations, and examples for improvement. The guiding principles focus on problem-solving, user agency, and the teaching of transferable knowledge, ensuring cookbooks remain practical rather than theoretical. Overall, the approach fosters clear communication and effective learning for users tackling AI challenges.

---

### [style_guide.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.claude/skills/cookbook-audit/style_guide.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a structured approach for creating effective technical notebooks, emphasizing the importance of framing the content around the problems being solved rather than the technicalities of the machinery. Key components include: 

1. **Introduction Framework**: Start with a problem, explain its significance, and define learning objectives clearly to establish a learning contract with users. 

2. **Prerequisites & Setup**: Clearly list the necessary knowledge and tools for success, using concise step-by-step instructions for setup, while promoting best practices.

3. **Core Cookbook Sections**: Each concept should be demonstrated through practical examples rather than mere documentation, avoiding overwhelming details and ensuring clarity of purpose.

4. **Conclusion**: Summarize the learning objectives and suggest further applications or readings to extend the knowledge gained.

Overall, the blog emphasizes clear communication and practical application to enhance user engagement and understanding.

---

### [pull_request_template.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/.github/pull_request_template.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines guidelines for submitting pull requests related to cookbook contributions. It emphasizes the importance of providing a clear and detailed description of changes, including problem statements or use cases. Contributors are encouraged to check relevant boxes regarding the type of changes, such as new cookbooks or bug fixes. A checklist is provided to ensure that new or updated cookbooks are properly documented and tested, with a focus on clarity and usability. Additionally, it highlights the necessity for proper testing to ensure all components execute without errors. The post clarifies that submissions not adhering to these guidelines may be closed to uphold the quality of the community's resources.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on how to contribute to the Claude Cookbooks. Key announcements include prerequisites such as Python 3.11 and the recommended uv package manager. The development setup involves cloning the repository, creating a virtual environment, and installing dependencies with tools like nbconvert and ruff for quality assurance. Notably, the post introduces Claude Code slash commands for validating code and notebooks, promoting automated testing and code reviews. Contributors are encouraged to follow best practices, including using environment variables for API keys and ensuring notebooks are focused and error-free. Furthermore, it outlines a structured git workflow for making contributions and emphasizes the importance of code quality through pre-commit hooks and CI/CD processes. Contributions will be licensed under the MIT License.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/README.md)
**Source:** anthropics/claude-cookbooks

The Claude Cookbooks offer developers a comprehensive collection of code snippets and guides for building applications utilizing the Claude API. Key features include sections on classification, augmentation with external knowledge, and effective summarization techniques. It is primarily designed for Python but can be adapted for other languages. Users must obtain a Claude API key to access the examples, and a foundational course is recommended for beginners.

The resource encourages community contributions, fostering an interactive development environment while providing a structured table of recipes covering tool integration, third-party resources, multimodal capabilities, and advanced techniques such as sub-agents and content moderation filters. Additional resources are available, including links to Anthropic's developer documentation and AWS integration examples.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/capabilities/classification/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a comprehensive guide for developing a high-accuracy classification system for insurance support tickets, capable of categorizing them into ten distinct categories with an accuracy improvement goal from 70% to over 95%. Key techniques discussed include prompt engineering, retrieval-augmented generation (RAG), and chain-of-thought reasoning. It emphasizes the advantages of using Large Language Models (LLMs) in complex classification scenarios, particularly where traditional machine learning falls short.

The guide covers prerequisites, data preparation, prompt design, RAG implementation, and evaluation techniques, ultimately leading to a baseline comparison against a random classifier. Detailed steps include loading training and test data, crafting XML-structured prompts for classifiers, and setting up an evaluation framework to analyze performance metrics. The anticipated outcome is a robust classification system that enhances efficiency and customer experience in managing insurance queries.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/capabilities/contextual-embeddings/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses advancements in Retrieval Augmented Generation (RAG) through the introduction of Contextual Embeddings, enhancing the retrieval performance of Claude by improving the embedding quality of document chunks. This method remedies the context fragmentation inherent in traditional RAG, allowing for a 35% reduction in retrieval failure rates and improving retrieval accuracy (Pass@10) from ~87% to ~95%. The guide outlines setting up a contextual retrieval system using a dataset of nine codebases, detailing steps from basic retrieval setup to performance evaluation. Additional features such as prompt caching are highlighted to manage costs effectively. Contextual embedding techniques can be implemented in AWS Bedrock and GCP Vertex environments, with resources provided for practical application. Overall, these innovations position RAG as a robust tool for improving workflows across various enterprise applications, including customer support and document analysis.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post explores the concept of Retrieval Augmented Generation (RAG) and its application in enhancing Claude's performance with domain-specific queries. Key announcements include a guide for building a RAG system utilizing Claude Documentation as a knowledge base. The article outlines several steps, including setting up an in-memory vector database using embeddings from Voyage AI and developing an evaluation suite for performance measurements. Notable advancements in RAG techniques provided significant improvements in various metrics: Average Precision increased from 0.43 to 0.44, Average Recall from 0.66 to 0.69, and End-to-End Accuracy rose from 71% to 81%. The blog emphasizes the importance of efficient retrieval systems and metrics like F1 Score and Mean Reciprocal Rank for evaluating system performance. The setup requires various libraries and API keys and emphasizes considerations around rate limits for API usage.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post focuses on techniques for summarizing lengthy legal documents using Claude, an advanced natural language processing model. It highlights the importance of summarization in processing extensive texts and introduces methods for optimizing this task, including prompt crafting, metadata extraction, and techniques for handling longer documents.

Key features covered include:
- Basic and multi-shot summarization approaches that improve the structure and detail of summaries.
- Advanced guided summarization techniques, allowing customization based on the document type, such as focusing on specific legal aspects in sublease agreements.
- Evaluation of summary quality, including automated methods and criteria to tailor insights to specific needs.

The guide emphasizes iterative improvement and customization for effective summarization workflows, providing clear methods for users to apply these techniques in legal contexts.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the development of a research agent using the Claude Agent SDK, emphasizing its capability to autonomously gather and synthesize information across various contexts, such as competitive analysis and technical troubleshooting. Key features include the ability to adapt search strategies based on discovered information and operate without a predefined workflow.

By the end of the guide, users will be able to create a research agent with minimal code. The post describes enhancements like maintaining conversation memory for multi-turn queries, specialized system prompts for tailored research behavior, and multimodal capabilities using the Read tool for analyzing visual content. 

In conclusion, readers learn how to build three increasingly sophisticated research agents, moving from stateless to stateful interactions, ultimately preparing them for the development of enterprise-grade multi-agent systems.

---

### [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/coding/prompting_for_frontend_aesthetics.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post, "Frontend Aesthetics: A Prompting Guide," discusses how to enhance the design outputs of Claude, an AI focused on frontend development. While Claude has solid design knowledge, it often resorts to generic aesthetics. The guide introduces effective prompting strategies to achieve more unique designs:

1. **Specific Design Dimensions**: Guide Claude through individual elements like typography and color.
2. **Design Inspirations**: Reference specific aesthetics or themes without being too restrictive.
3. **Desire for Distinction**: Explicitly instruct Claude to avoid common defaults in design.

The post includes prompts for implementation that encourage creativity, such as focusing on vivid typography and cohesive color themes. Results show significant improvements in design quality with the use of these prompts. The guide also suggests isolated prompting for targeted control over specific design aspects.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the extended thinking feature of Claude 3.7 Sonnet, enhancing its reasoning capabilities for complex tasks. This feature allows for transparency by generating "thinking" content blocks that display internal reasoning prior to the final answer. Key announcements include examples of setup, basic usage, streaming capabilities, and token counting for managing context windows. There are specific demonstrations for handling redacted thinking blocks when safety systems trigger encryptions and examples of common errors to avoid, such as having an insufficient thinking budget. Additionally, it details the functions to manage and count tokens effectively. Overall, extended thinking aims to provide a more interactive and insightful experience when interacting with the Claude 3.7 Sonnet model.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the extended thinking feature in Claude 3.7 Sonnet, enabling users to observe the model's reasoning process before it utilizes tools, enhancing transparency and insight. Key functionalities include:

1. **Setup**: Installation of the required package and environment configuration.
2. **Single Tool Calls**: Demonstrates a mock weather tool's integration, showing how Claude processes user input, executes tool requests, and delivers results.
3. **Multiple Tool Calls**: Illustrates utilizing both weather and news tools in tandem, highlighting the iterative process when handling multiple requests.
4. **Preserving Thinking Blocks**: Emphasizes the importance of maintaining cryptographic signatures of thinking blocks to validate conversations and adherence to context.

The demonstration and examples aim to provide guidance on leveraging these features effectively. For more details, refer to the provided documentation link.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on finetuning the Claude 3 Haiku model on Amazon Bedrock. It outlines the prerequisites, including having an AWS account with Bedrock access, a suitable dataset in JSONL format, and a service role for S3 access. The post details the steps to prepare the dataset, upload it to an S3 bucket, and configure the finetuning job using the Boto3 client. Key parameters for the job, such as job name, custom model name, and hyperparameters (epoch count, batch size, learning rate), are specified. Additionally, the post concludes with instructions on checking the job status and utilizing the finetuned model via the Bedrock API, emphasizing the requirement for provisioned throughput for model invocation.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Message Batches API, designed for efficient, asynchronous processing of large volumes of message requests at a drastically reduced cost of up to 50%. The tutorial outlines the steps for creating and submitting message batches, monitoring their status, and retrieving results, alongside best practices for effective batching.

Key features highlighted include:
1. **Basic Batch Processing**: Demonstrates how to submit a batch of message requests, track processing status, and handle response results.
2. **Advanced Batch Processing**: Presents complex batch requests that include various message types, such as simple questions, image analyses, and multi-turn interactions, showcasing enhanced error handling.
3. **Implementation Guidance**: Offers practical code examples for setup and execution, employing the `anthropic` library.

Overall, the guide aims to facilitate effective bulk message processing using the API.

---

### [building_evals.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/building_evals.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the empirical process of optimizing the AI model Claude for task accuracy through effective evaluation (eval) systems. It outlines four key components of evals: an input prompt, model output, a "golden answer" for comparison, and a scoring method. The post details three grading methods: 

1. **Code-based grading** (fast and reliable, suitable for exact matches),
2. **Human grading** (more comprehensive but slow and expensive), and 
3. **Model-based grading** (using Claude to evaluate its responses, which proves to be efficient).

The post concludes with guidance on creating effective evals, emphasizing specificity, testing grading methods, and designing questions that lend themselves to automation. The insights aim to streamline the eval process and improve the accuracy of AI model assessments.

---

### [building_moderation_filter.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/building_moderation_filter.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on utilizing Claude to build a content moderation filter for user-generated text. The core approach involves creating a prompt that delineates "BLOCK" and "ALLOW" categories, allowing for straightforward customization based on specific filtering needs. It includes example usage with Python code to classify text, showcasing the technique's flexibility in tailoring guidelines for various communities, such as rollercoaster enthusiasts.

Key enhancements discussed include utilizing "chain-of-thought" prompting for improved reasoning and incorporating example outputs for better accuracy in categorization. These strategies aim to refine Claude's capabilities in handling nuanced content and ambiguous cases effectively. The post serves as a practical resource for developers aiming to implement content moderation using AI.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses generating synthetic test data for prompt templates using Claude and the Claude API. It outlines the importance of testing prompts with different variable values, particularly when real data cannot be used due to privacy concerns. Key features include functions for extracting variables, constructing example blocks, and generating test cases, which enhance prompt evaluation and improvement. The post provides template functions for constructing synthetic test data and emphasizes the iterative nature of refining results while utilizing planning texts for context. Additionally, it highlights the role of example cases in guiding Claude to produce realistic outputs. Users can leverage these methods to enhance their prompt templates and improve response quality through iterative testing and refinement processes.

---

### [how_to_enable_json_mode.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/how_to_enable_json_mode.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses how to effectively prompt Claude, a language model, to return JSON data, despite the absence of a dedicated "JSON Mode." It presents various techniques to achieve reliable JSON outputs. Key methods include using partial prompts to bypass introductory text and formatting responses with specific tags to facilitate extraction. The article outlines the process for creating structured JSON output by requesting a dictionary with athletes' names and their sports, along with additional JSON dictionaries for each athlete. It emphasizes string parsing and regular expressions as tools for extracting required data efficiently. Overall, the post provides practical recipes for efficiently obtaining and structuring JSON from Claude.

---

### [how_to_make_sql_queries.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/how_to_make_sql_queries.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide on generating SQL queries using Claude, an AI model developed by Anthropic. It details the setup process, including the installation of necessary libraries and the configuration of the Claude API client. A test SQLite database is created with a sample "employees" table, populated with data for demonstration purposes. The core feature highlighted is the ability to translate natural language questions into SQL queries with the help of Claude. An example question, "What are the names and salaries of employees in the Engineering department?", is used to illustrate this functionality. The post concludes by executing the generated SQL query and displays the results, emphasizing the usability of Claude for database interactions.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Metaprompt, a prompt engineering tool designed to help users overcome the "blank page problem" by generating starting points for AI interactions. Users can input a specific task and define variables, leading to tailored prompts ready for execution with the Claude AI. The tool is user-friendly, requiring no coding, with clear instructions on entering the Claude API key and task details. It includes a collection of multi-shot examples to guide users in creating effective prompts, emphasizing that the generated prompt may need adjustments for optimal results. However, it is focused on single-turn interactions rather than multi-turn dialogues.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a new feature in the Claude API that allows users to upload PDFs, currently in beta. The author demonstrates how to implement this feature by installing the Anthropic client and preparing a PDF document for processing. Only the model "claude-sonnet-4-5" supports PDF uploads at this time. The author details the process of converting a PDF into base64-encoded bytes, necessary for the API. A sample prompt is provided, showcasing how to ask Claude to summarize the abstract in simple terms, rewrite the Methods section as a recipe, and craft a poem about the results. This functionality enables enhanced interaction with PDF documents, supporting both text and visual elements extraction.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation and benefits of prompt caching through the Claude API, which allows developers to store and reuse context in prompts. This capability significantly improves response quality and reduces latency by over 2x, while cutting costs by up to 90%, particularly for repetitive tasks. The post provides a detailed setup guide and illustrates the performance differences between cached and non-cached API calls using examples from Jane Austen's "Pride and Prejudice." Results show a considerable decrease in response time from 21.44 seconds for non-cached calls to just 3.64 seconds for cached ones. Additionally, a simulated multi-turn conversation demonstrates how prompt caching can enhance efficiency, with response times improving from 24 seconds down to 7-11 seconds as cache breakpoints were optimized. Overall, prompt caching emerges as a transformative feature for streamlining interactions with the Claude API.

---

### [read_web_pages_with_haiku.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/read_web_pages_with_haiku.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a practical recipe for summarizing web page content using Anthropic's Claude API. It begins with the setup, specifically installing the Anthropic library and configuring the API client. The initial step involves fetching content from a specified URL using the requests library. The blog provides a code snippet that handles potential errors in fetching the web page. Following this, the content is prepared for input into the Claude API, where a prompt requests a concise summary. Finally, it demonstrates how to call the Claude API to generate the summary, concluding with the output of the summarization. This structured approach showcases the integration of web scraping and AI summarization tools.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method to extend the response length of Claude, a language model, beyond the maximum token limit of 4096 by using a prefill technique. Initially, the author prompts Claude to generate five stories about different animals, each at least 1000 words long. However, the first response is cut off due to the token limit. To overcome this, the author feeds the partially completed response back into Claude as an assistant message, allowing the model to continue the narrative seamlessly. The post notes that while this method incurs double charges for input tokens, output tokens will not incur additional charges.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Speculative Prompt Caching," a technique aimed at reducing time-to-first-token (TTFT) for API responses by initiating cache warming while users are still typing their queries. 

In the standard prompt caching method, the API processes user input after it is submitted, leading to delays. Conversely, with speculative caching, the cache is warmed up in the background as the user types, resulting in a quicker response time. The post details the setup for implementing this method, showcasing two demonstration examples with performance comparisons. 

Key findings reveal speculative caching can significantly decrease TTFT—a highlighted improvement of over 10%—especially beneficial for large contexts. Best practices emphasize early cache warming, maintaining consistency in the context used, and monitoring cache activity for optimization.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the introduction of citation support in the Claude API, available for models `claude-sonnet-4-5` and `claude-3-5-haiku-20241022`. This feature allows users to receive detailed citations when querying information, which enhances source verification. The new citation method improves efficiency compared to traditional prompt-based techniques, reducing output token count and generating more precise citations.

The support extends across three document types: plain text, PDF, and custom content, with each providing structured data relevant to the citations. The blog details the functionality of each type, citing by sentence, page, or custom chunks. It also discusses the context field for additional metadata and highlights limitations in PDF citations. Enhanced citation visualization tools are provided to improve user interface transparency and reliability. Comprehensive documentation is available for further guidance.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details how to effectively utilize Claude for analyzing charts, graphs, and slide decks, emphasizing its vision and PDF support capabilities. The `claude-sonnet-4-5` model currently supports PDF ingestion, allowing users to submit documents alongside questions for analysis. The post provides coding examples demonstrating how to encode PDF documents and interact with Claude to extract detailed information about financial data. Additionally, it offers best practices, such as avoiding arithmetic errors by using a calculator tool and requesting detailed descriptions for complex visual data. For slide decks, it suggests narrating the content in detail to enhance comprehension, especially for users with vision impairments. Overall, the post provides practical insights and techniques to maximize Claude's functionality in processing visual data.

---

### [using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/multimodal/using_sub_agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post demonstrates how to analyze Apple's 2023 financial earnings reports using Claude 3’s Haiku sub-agent model. The process involves setting up an environment with necessary libraries, downloading the earnings PDF documents, and asking a specific question regarding quarterly net sales and their contributors. The PDFs are converted to base64-encoded images due to their table-heavy content, which makes extraction challenging. 

The Haiku model is prompted to extract relevant information concurrently from these PDFs, and the findings are organized into XML format. Finally, the collected data is used to formulate a response along with a matplotlib graph to visualize the revenue trends, showcasing Claude's capability to generate both textual and graphical outputs based on structured queries.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a comprehensive guide on utilizing the Usage & Cost Admin API for monitoring and managing API usage and expenses. Key features include:

1. **Usage Tracking**: Users can monitor token consumption, usage across various models and workspaces, and analyze cache efficiency.
2. **Cost Analysis**: Detailed cost breakdowns by service type and spending trends can be retrieved, aiding in financial reporting and chargeback scenarios.
3. **API Overview**: The guide outlines two main endpoints - the Messages Usage API for token-level data and the Cost API for financial data.
4. **Security Practices**: Emphasizes the importance of storing API keys securely.
5. **Common Use Cases**: Highlights scenarios such as usage monitoring, cost attribution, and cache analysis.
6. **Data Handling**: Discusses time granularity options, pagination for large datasets, and the ability to export data to CSV for further analysis.

This resource serves as a practical tool for developers seeking to optimize their API usage and manage costs effectively.

---

### [basic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/patterns/agents/basic_workflows.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines three basic multi-LLM workflows designed to enhance task performance while managing costs and latency: 

1. **Prompt-Chaining**: This involves breaking tasks into sequential subtasks where each outcome is dependent on the prior result, enabling structured processing. 
2. **Parallelization**: Independent subtasks are executed concurrently across multiple LLMs, improving efficiency in handling large datasets. 
3. **Routing**: This dynamic approach routes inputs to specialized LLMs based on content analysis, facilitating targeted processing. 

The post includes code samples exemplifying these workflows, such as data extraction, stakeholder impact analysis, and customer support ticket routing, demonstrating practical applications of each method. These implementations aim to inspire users to adopt similar structures in their own projects.

---

### [evaluator_optimizer.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/patterns/agents/evaluator_optimizer.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Evaluator-Optimizer Workflow, which utilizes a two-step process involving a language model (LLM) that generates a response and another that evaluates it. This iterative method is particularly useful when clear evaluation criteria exist and when iterative refinement can enhance response quality. Key indicators for its effectiveness include demonstrable improvement in LLM responses through feedback and the LLM's ability to provide meaningful evaluations. The post provides example functions for generating and evaluating solutions in a coding task context, demonstrating how the workflow can lead to enhanced code implementation through continuous feedback and adjustments.

---

### [orchestrator_workers.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/patterns/agents/orchestrator_workers.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the orchestrator-workers workflow, a pattern designed to dynamically analyze and delegate complex tasks to specialized LLMs (Large Language Models). Instead of relying on predefined subtasks, the orchestrator LLM assesses each unique task, determining the most beneficial variations to pursue. The system is particularly useful when tasks require multiple distinct approaches and when optimal subtasks cannot be predicted in advance.

Key features include a two-phase operation: an analysis and planning phase followed by an execution phase, where workers receive tailored task descriptions. This method enhances adaptability, providing a structured and flexible approach to content generation, particularly for marketing. 

However, it may introduce latency and complexity for simple tasks. The implementation, which includes necessary helper functions and XML parsing for structured communication, demonstrates its application in generating varied marketing copy tailored to different audiences. Future enhancements may include parallel processing and improved error handling.

---

### [research_lead_agent.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/patterns/agents/prompts/research_lead_agent.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines a structured approach for expert research leads to effectively address user queries, emphasizing high-level research strategy and delegation to subagents. The process consists of four key steps: 

1. **Assessment and breakdown**: Analyzing the user's question to identify core concepts and necessary data points.
2. **Query type determination**: Classifying the query as depth-first, breadth-first, or straightforward to determine the best research approach.
3. **Detailed research plan development**: Creating a task-specific plan outlining how to allocate research tasks among subagents, ensuring comprehensive coverage of the topic.
4. **Methodical plan execution**: Implementing the plan by deploying subagents for parallel or sequential research tasks while monitoring progress and adjusting as necessary.

The post emphasizes the importance of clear task descriptions and methodical execution to ensure the quality and thoroughness of research outputs.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Skills Cookbook - Claude Code Guide," a Jupyter notebook resource for developers looking to integrate Claude's document generation capabilities (Excel, PowerPoint, PDF) into their applications. It outlines a quick start setup, including environment configuration and commands to run notebooks while emphasizing the use of the Anthropic SDK version 0.71.0 or later.

The project includes progressive Jupyter notebooks, a sample data directory, and a custom skills development area. Key features highlighted include built-in file generation functionalities, the use of a beta API, and a structured approach for handling file downloads and metadata retrieval. The post also highlights essential troubleshooting steps, common tasks for notebook contributions, and a comprehensive testing checklist to ensure functionality. Resources for further API documentation are provided to support developers.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/README.md)
**Source:** anthropics/claude-cookbooks

The Claude Skills Cookbook provides a detailed guide on utilizing Claude's Skills feature for tasks like document generation, data analysis, and business automation. Users can create professional documents (Excel, PowerPoint, PDF), automate workflows, and conduct data visualizations. Key features include a progressive disclosure architecture that optimizes token usage, real-world financial applications, and guidance on developing custom skills. The cookbook is structured into three main notebooks: an introduction to Skills, financial applications, and custom skills development. Essential prerequisites include Python 3.8+, an Anthropic API key, and a Jupyter Notebook environment. Additionally, the post outlines sample data sets for financial tasks and provides crucial troubleshooting steps. For further exploration, readers can refer to the linked documentation and resources.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/custom_skills/analyzing-financial-statements/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces a Financial Ratio Calculator Skill designed for in-depth financial statement analysis to assess company performance. Key capabilities include the calculation of various financial ratios—profitability, liquidity, leverage, efficiency, and valuation—as well as per-share metrics. Users can input financial data in multiple formats (CSV, JSON, text, Excel) and can choose specific ratios or opt for a comprehensive analysis. The tool outputs calculated ratios, industry benchmarks, trend analyses, and insights, all formatted in an Excel report. Best practices for use include ensuring data completeness and contextually interpreting ratios, while limitations emphasize the need for accurate financial data and the nature of industry benchmarking.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/custom_skills/applying-brand-guidelines/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the Corporate Brand Guidelines Skill for Acme Corporation, ensuring consistent implementation of brand standards across all documents. Key features include a defined color palette and typography that utilizes Acme Blue and Segoe UI, respectively. Standardized templates for PowerPoint presentations and Excel spreadsheets are presented, including layout rules and formatting standards to ensure brand integrity. The guidelines emphasize a professional tone in communication, with specific phrases for consistency. To maintain quality, documents must adhere to formatting checks and avoid prohibited elements such as unapproved graphics or fonts. The skill includes script functionalities for applying and validating brand compliance. Regular updates to the guidelines are specified, ensuring that teams stay aligned with current branding standards.

---

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/custom_skills/creating-financial-models/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces an advanced financial modeling suite designed for investment analysis and risk assessment. Key features include Discounted Cash Flow (DCF) analysis for enterprise and equity valuations, sensitivity analysis to assess the impact of variable assumptions, Monte Carlo simulations to model uncertainty across multiple scenarios, and scenario planning to evaluate various economic environments. 

The suite supports diverse model types, including corporate valuations, project finance, M&A analysis, and leveraged buyouts. Best practices emphasized include clear documentation, consistent modeling standards, and risk management protocols. Included scripts facilitate DCF valuations and sensitivity testing. The post underscores the importance of solid assumptions and professional judgment in financial modeling while outlining automatic quality checks to ensure model integrity. Regular updates will ensure alignment with the latest financial practices and market changes.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's Skills feature, designed to enhance file creation, data analysis, and workflow automation in applications like Excel, PowerPoint, and PDF generation. Key components include:

1. **Setup Requirements**: Users need Python 3.8+, an Anthropic API key, and to follow detailed installation steps for environment setup and API configuration.

2. **Understanding Skills**: Skills are advanced packages enabling Claude to perform specialized tasks efficiently, offering expert-level performance, proven helper scripts, and organizational knowledge while optimizing token usage.

3. **Operational Workflow**: The document explains how Skills work, their three-tier loading model, and the need for code execution tools. Users can discover built-in skills from Anthropic, which facilitate professional document generation.

4. **Performance Insights**: Expected generation times for files are outlined, with recommendations for gradual complexity in requests.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's enhanced capabilities tailored for financial applications, emphasizing the use of Excel, PowerPoint, and PDF skills to create precise financial dashboards, portfolio analytics, and automated reporting workflows. Key features include:

- **Excel Financial Models**: Users can craft comprehensive financial models with formulas, key performance indicators, and visualizations efficiently.
- **Automated Executive Presentations**: Generate professional PowerPoint presentations summarizing financial data and insights suitable for board presentations.
- **Portfolio Analysis Tools**: Tools for analyzing investment portfolios, including risk metrics and sector allocation visualization.
- **Automated Reporting Pipelines**: Streamlined processes for producing reports across multiple formats.

The post also highlights best practices for file generation and suggests incremental complexity in dashboard creation. Users are guided to ensure proper setup, including API configurations and environment prerequisites.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the process of building custom skills for Claude, an AI model by Anthropic. Custom skills are specialized knowledge packages tailored to an organization's workflows, enabling the codification of proprietary methods and consistent engagement across interactions. Key features include the ability to automate complex workflows, maintain version control, and ensure the privacy of organizational knowledge.

The post highlights the architecture of custom skills, emphasizing the necessary directory structure and file requirements, particularly the `SKILL.md` file, which must contain metadata and structured instructions. It provides examples of three custom skills— a Financial Ratio Calculator, Company Brand Guidelines, and a Financial Modeling Suite—demonstrating their potential applications. Additionally, best practices for skill management, versioning, and troubleshooting are included to guide users in deploying and testing their custom skills effectively.

---

### [prerecorded_audio.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/Deepgram/prerecorded_audio.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for using Deepgram to transcribe audio files and employing Anthropic to generate interview questions based on the transcripts. Key steps include setting up a Jupyter notebook with necessary dependencies, uploading audio files, and utilizing the Deepgram API to transcribe the audio. Users are instructed to input their API keys, specify the audio URL, and run scripts to create a JSON transcript file. Once transcription is complete, the transcript is sent to Anthropic, which generates thoughtful, open-ended interview questions. The instructions emphasize user engagement with a playful tone and encourage users to troubleshoot common issues with the Deepgram integration. Overall, the post serves as a practical resource for automating audio transcription and interview preparation.

---

### [Basic_RAG_With_LlamaIndex.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the creation of a Basic RAG (Retrieval-Augmented Generation) Pipeline using LlamaIndex. The pipeline involves several key steps: setting up the LLM and embedding model, downloading and loading data, indexing it, and creating a query engine for querying. 

Key features include the use of the latest `Claude 3 Opus` model from Anthropic and the `BAAI/bge-base-en-v1.5` embedding model from Hugging Face. The installation process requires specific packages, and API keys must be set for the models. The post demonstrates how to download a sample text (an essay by Paul Graham), load the data, index it, and test the query engine with a question about the author’s background. Overall, it serves as a practical guide to implementing a RAG pipeline with LlamaIndex.

---

### [Multi_Document_Agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/Multi_Document_Agents.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of a Retrieval-Augmented Generation (RAG) system using the `DocumentAgents` concept in conjunction with a `ReAct Agent`. Key elements include the installation of necessary libraries, configuration of logging, and setting up the Claude API key for the LLM. The system utilizes Wikipedia articles from major U.S. cities such as Toronto, Seattle, Chicago, Boston, and Houston to build a RAG pipeline. It then constructs specialized agents for each city, incorporating vector and summary indices to facilitate effective information retrieval and summarization. The post demonstrates testing the RAG setup with various queries, showcasing the ability to retrieve specific data and provide summaries based on the selected city agent.

---

### [Multi_Modal.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/Multi_Modal.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Anthropic MultiModal LLM, which facilitates image understanding and reasoning. It provides installation instructions for necessary packages, along with steps to set up an API key. The post demonstrates how to utilize the model for local image analysis, including extracting descriptions and structured outputs from images using Pydantic schemas.

Key features include the ability to process images from both local directories and URLs, implement image reading with Python libraries such as PIL, and provide structured JSON responses based on analyzed content. The post concludes with an example of extracting stock information from an image, showcasing the model's multi-modal capabilities in practical applications.

---

### [ReAct_Agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/ReAct_Agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of a ReAct Agent utilizing various tools, specifically focusing on its integration with calculators and QueryEngine tools for data retrieval and processing. Key highlights include:

1. Installation of necessary libraries such as `llama-index` and its embedding models.
2. Configuration of the Anthropic LLM with the Claude-3 Opus model.
3. Definition of custom functions like addition and multiplication, which are packaged as FunctionTools for the agent’s use.
4. Construction of a ReAct Agent capable of performing calculations and generating step-by-step solutions to queries.
5. Implementation of QueryEngines built from Uber and Lyft's 2021 SEC filings, enabling detailed financial inquiries.
6. Demonstration of the agent's capabilities with specific queries, showcasing its analytic functionalities.

The overall focus is on enhancing chatbot interactivity through complex data-driven queries.

---

### [Router_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/Router_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `RouterQueryEngine`, a tool designed to route user queries to various query engines for improved document analysis. Key features include the ability to handle different indices and query engines on the same or different documents. The post outlines the installation process for necessary packages and details the setup for logging and API key configuration for `Claude-3 Opus`, a language model. 

It describes how to load a document, create summary and vector indices, and use them as query engines. The `RouterQueryEngine` is developed to efficiently manage these tools, allowing users to execute queries for summarization and context retrieval. The post concludes with examples demonstrating its functionality by querying for a document summary and insights into Paul Graham's activities.

---

### [SubQuestion_Query_Engine.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the `SubQuestionQueryEngine`, designed to handle complex queries that span multiple documents by decomposing them into simpler sub-queries. Key features include installation instructions, setup for the `Claude-3 Opus` LLM, embedding models, and logging configurations. Users are guided through downloading and indexing the 2021 SEC filings of Uber and Lyft, and creating dedicated query engines for each. The post highlights the ability to perform specific queries about revenue figures and comparisons using the `SubQuestionQueryEngine`, allowing users to gather insights across both companies seamlessly. This tool provides a streamlined approach to financial analysis through document-based queries.

---

### [rag_using_mongodb.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/MongoDB/rag_using_mongodb.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a comprehensive tutorial on building a Retrieval-Augmented Generation (RAG) system using Claude 3 and MongoDB. Key steps include setting up the development environment and MongoDB database, handling data ingestion, and creating a vector search index. The tutorial emphasizes:

1. **Environment Setup**: Installation of necessary libraries such as PyMongo, pandas, and VoyageAI, alongside configuring MongoDB.
2. **Data Preparation**: Efficiently managing tech news articles through data loading, transforming embedding data, and limiting document usage.
3. **MongoDB Operations**: Creating a new database and collection, alongside clearing existing data before ingesting the processed dataset.
4. **Vector Search Implementation**: Coding a function to perform vector searches based on user queries, leveraging MongoDB's capabilities.
5. **Integrating Claude 3**: Combining user inputs and search results for enhanced context in the chatbot's responses.

The tutorial targets developers wanting to implement advanced chatbot functionalities with state-of-the-art AI models.

---

### [claude_3_rag_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/Pinecone/claude_3_rag_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the updates introduced in LangChain v1, particularly in agent initialization and usage. It outlines the construction of a Retrieval-Augmented Generation (RAG) agent using Claude 3, Voyage AI for embeddings, and Pinecone for knowledge retrieval. The installation of necessary libraries and API keys is detailed.

Key features include:
1. Building a knowledge base using AI ArXiv v2 dataset with embedding integration and metadata storage in Pinecone.
2. Defining a specialized XML agent compatible with Anthropic models to enhance tool interaction.
3. Implementing conversational memory to facilitate more dynamic and context-aware interactions over time.

The post demonstrates the step-by-step implementation of these components, emphasizing clarity in agent logic and architecture. The example culminates in a robust, memory-enabled chat interaction with the agent.

---

### [rag_using_pinecone.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/Pinecone/rag_using_pinecone.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the process of utilizing retrieval-augmented generation (RAG) with an integration of Claude, Pinecone, and Voyage AI. Key steps include:

1. **Embedding Data**: Using Voyage AI's embedding model, the Amazon products dataset is embedded.
2. **Pinecone Setup**: A vector database is initialized in Pinecone to store these embeddings.
3. **Querying**: The system allows users to pose natural language questions, which are then embedded and matched against the index for relevant product descriptions.
4. **Keyword Optimization**: Claude generates diverse search keywords from the user's query, enhancing the search results.
5. **Final Response**: The product descriptions retrieved are formatted and used to provide an answer to the user's query using Claude.

This combination of technologies improves search capabilities, enabling more contextual and relevant responses to user inquiries.

---

### [wikipedia-search-cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the development of a virtual research assistant using Claude's models for effective Wikipedia searches. This system enables Claude to retrieve answers for complex or current queries that it may not know outright. The implementation process involves a series of structured prompts guiding Claude on how to query Wikipedia effectively, breaking down complex questions into subqueries, and synthesizing the search results into coherent answers. Key features include a specialized search tool that formats Wikipedia content and an iterative approach to ensure Claude gathers sufficient information before formulating a response. The post highlights successful query examples demonstrating the tool's capability to accurately ascertain information, emphasizing its adaptability for broader web searches with minimal adjustments.

---

### [using_llm_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/third_party/WolframAlpha/using_llm_api.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details a guide on integrating the Wolfram Alpha Large Language Model (LLM) API with Claude, a conversational AI. Key steps include:

1. **Environment Setup**: Instructions are provided to install necessary libraries and configure the Claude API client with a Wolfram Alpha App ID.

2. **Tool Definition**: A function is defined to query the Wolfram Alpha API, which encodes the query and processes the API response to return either the computed result or an error message.

3. **Interactive Functionality**: Further, the blog illustrates how Claude can leverage this tool to answer user inquiries by managing tool calls and processing responses.

4. **Practical Examples**: The article concludes with examples demonstrating the functionality, allowing users to ask questions like geographical statistics and mathematical calculations to showcase Claude's new capabilities.  

This integration enhances Claude's response accuracy by utilizing Wolfram Alpha's extensive knowledge base.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a tool evaluation framework that utilizes multiple agents to independently run evaluation tasks defined in an XML file. Key components include the implementation of an "agent loop" that manages task execution, tool usage, and metrics tracking. The evaluation approach mandates agents to summarize their steps, provide feedback on tools, and return a final response within designated XML tags. 

Additionally, the post introduces a simple calculator tool as a demonstration, detailing how it can be integrated into the evaluation system. Results from the evaluation include accuracy statistics, average durations, and feedback on tool performance, culminating in a structured report format. The overall process emphasizes systematic task evaluation with clear reporting and constructive feedback on the tools used.

---

### [calculator_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/calculator_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the implementation of a simple calculator tool integrated with Claude, a language model API. Key steps include setting up the environment with the Anthropic library, defining the calculator tool to handle basic arithmetic expressions, and demonstrating how Claude interacts with this tool. The calculator function processes user input by sanitizing it and evaluating the mathematical expression, returning either the result or an error message if the expression is invalid. Finally, the post illustrates how users can engage with Claude by asking mathematical questions, which the model addresses using the calculator tool. The overall aim is to showcase the integration of a functional utility within Claude's framework to enhance its problem-solving capabilities.

---

### [customer_service_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/customer_service_agent.ipynb)
**Source:** anthropics/claude-cookbooks

This blog post outlines the process of creating a customer service chatbot using the Claude 3 model and client-side tools. The chatbot is designed to look up customer information, retrieve order details, and cancel orders. 

Key steps include:

1. **Environment Setup**: Installation of necessary libraries and setup of the Claude API client.
2. **Tool Definition**: Creation of three tools—get_customer_info, get_order_details, and cancel_order—each with specific actions and input requirements.
3. **Simulated Responses**: Development of synthetic responses to mimic real customer and order data for demonstration purposes.
4. **Tool Processing**: Implementation of a function to process tool calls and return relevant results.
5. **User Interaction**: A mechanism for interacting with the chatbot and processing user queries.
6. **Testing**: The chatbot is tested with sample queries to confirm its functionality.

The blog encourages integration with actual databases to enhance the chatbot's capabilities.

---

### [extracting_structured_json.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/extracting_structured_json.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a guide on utilizing Claude's tool use feature to extract structured JSON data from various inputs. It details the setup process, including required libraries and API client initialization. The post provides several practical examples, including:

1. **Article Summarization**: Generating a JSON summary that includes fields like author, topics, and scores for coherence and persuasion.
2. **Named Entity Recognition**: Extracting entities from a text and returning them in a structured JSON format.
3. **Sentiment Analysis**: Analyzing text sentiment and providing scores in JSON format.
4. **Text Classification**: Classifying text into predefined categories and presenting the results as JSON.
5. **Dynamic JSON Structures**: Handling unknown keys in JSON with an open-ended input schema.

These examples illustrate how to define custom tools and schemas to effectively guide Claude in producing structured outputs for various natural language processing tasks.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides an overview of the `tool_choice` parameter in Claude, detailing how to control tool usage during interactions. It presents three options for `tool_choice`: 

1. **Auto**: Claude decides when to use tools, allowing for flexibility based on the user's query.
2. **Tool**: Claude is forced to use a specific tool, ensuring it engages that tool regardless of the input.
3. **Any**: Claude must use one of the provided tools but can select which one to apply.

The post emphasizes the importance of prompt engineering to guide Claude's tool usage effectively. Several code examples illustrate the functionality and behavior of each `tool_choice` option, showcasing scenarios in which Claude interacts with tools to either retrieve information or perform actions. Additionally, it highlights potential pitfalls in tool selection and the benefits of specific prompting strategies.

---

### [tool_use_with_pydantic.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/tool_use_with_pydantic.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the development of a note-saving tool using Pydantic and the Anthropic API. Key highlights include:

1. **Environment Setup**: Installation of required libraries and initialization of the Claude API client.
2. **Pydantic Model Definitions**: Creation of models for `Author`, `Note`, and `SaveNoteResponse` to ensure structured data validation and type-checking.
3. **Client-side Tool Definition**: Specification of a tool that allows saving notes with metadata such as author details, note content, priority, and visibility status.
4. **Tool Implementation**: A mock function simulates note-saving and validates responses using Pydantic.
5. **Chatbot Interaction**: Establishment of a function to integrate user input and tool functionality, processing responses effectively.
6. **Testing**: Demonstration of the tool's capability with a test interaction to save a private note.

Overall, the post emphasizes reliable data handling in chatbot interactions through structured validation.

---

### [vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/17a5bc9d17c568892c04faefbbdc18c2a2456681/tool_use/vision_with_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post presents a tutorial on leveraging the Claude API to extract structured nutrition information from an image of a nutrition label using a custom tool. Key steps include setting up the Claude API client and defining a "print_nutrition_info" tool, which captures essential nutritional metrics such as calories, total fat, cholesterol, total carbohydrates, and protein. The tutorial details how to load a nutrition label image, encode it in base64, and send it to the Claude model for analysis. Upon receiving the image and prompt, the Claude model processes the request and utilizes the defined tool to output the nutritional data in a structured JSON format. This integration exemplifies the effective use of AI tools for image analysis and information extraction.