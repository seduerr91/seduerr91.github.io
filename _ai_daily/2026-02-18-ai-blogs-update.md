---
title: Claude Upgrades - Smarter, Faster, More Efficient AI
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 02-18"
---
**Meta-Summary of Blog Post Summaries**

Across the examined blog posts, several major trends and announcements emerge, highlighting Anthropic’s ongoing enhancement of the Claude platform for seamless, efficient, and scalable AI application development:

1. **Expansion of Cookbook Resources & Best Practices:**  
   Anthropic introduced and continuously refined the Claude Cookbooks—a growing collection of Jupyter notebooks and Python examples—to foster consistent, high-quality, and actionable guides for building with the Claude API. Emphasis is placed on rigorous auditing, adherence to style guides, structured automation and review workflows, and practical, problem-oriented instructional design. Contributor guidelines enforce quality, security, and effective Git workflows.

2. **Advancements in Agentic and Tool-Enhanced Workflows:**  
   The Claude Agent SDK and Code SDK saw significant upgrades, enabling developers to create autonomous, adaptive research and organizational agents. New features such as multi-agent orchestration, persistent agent memory, programmatic tool calling (PTC), advanced memory and context editing, and automatic/instant context compaction support robust multi-turn and long-running conversational tasks, pushing towards production-ready, contextually aware AI systems.

3. **Innovations in Document and Data Handling:**  
   Claude now offers direct PDF upload and ingestion capabilities, improved vision (image analysis) tools—including cropping and chart interpretation—and sophisticated legal and financial document summarization. Features like citation support, synthetic test data generation, and deep Skills integration (for business automation, data analysis, and custom workflow encapsulation) extend Claude’s document creation and data-handling suite, targeting business-centric use cases.

4. **Performance Optimization & Cost Management:**  
   New APIs and techniques, such as prompt caching, speculative prompt caching, batch message processing, and the Usage & Cost Admin API, empower users to reduce latency and operational costs (by up to 90%) while efficiently tracking resource consumption. Session memory compaction and context management innovations ensure Claude can handle extended dialogues with minimal delay and resource strain.

5. **Enhancements in Reasoning Transparency & Model Capabilities:**  
   The Claude 3.7 Sonnet model introduces “extended thinking” for transparent, stepwise reasoning, while improvements in retrieval-augmented generation (RAG) and agent evaluation frameworks deliver measurable accuracy gains in sophisticated tasks.

6. **Scalable and Flexible Tool Ecosystem:**  
   Developments in tool management—including dynamic tool discovery, semantic tool search, and scalable orchestration (orchestrator-workers pattern)—enable Claude to interface with thousands of tools efficiently. This supports powerful multi-agent and workflow applications with drastically reduced context overhead.

7. **User Experience & Developer Guidance:**  
   Anthropic shared actionable guidance for prompt engineering (including the Metaprompt tool and aesthetics prompting), structured code and agent evaluations, and best practices for building, testing, and maintaining custom skills and agents. Example-driven tutorials, extensive documentation, and a commitment to open development and community contributions underpin these efforts.

**In summary:** Anthropic’s updates focus on making Claude a more capable, transparent, context-aware, and enterprise-ready AI platform. The advancements span developer experience, agentic intelligence, document/data interaction, tool scalability, performance, and cost efficiency, supported by robust resources and community-centric practices.

## New Cookbook Recipes

### [SKILL.md](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/.claude/skills/cookbook-audit/SKILL.md)
**Source:** anthropics/claude-cookbooks

The blog post outlines the auditing process for Anthropic Cookbook notebooks, providing a structured approach for reviewers. Key elements include the necessity of reviewing the `style_guide.md` prior to the audit, which contains essential templates and best practices. The audit workflow involves identifying the notebook, conducting automated technical checks, and performing a manual review against the style guide. The auditing report format includes an executive summary with scores, strengths, and issues, as well as detailed evaluations of narrative, code quality, technical accuracy, and actionability. Additionally, it emphasizes the importance of clear introductions, organized content, structured conclusions, and actionable recommendations that enhance user understanding and application of the material. This approach aims to create cookbooks that facilitate practical solutions while encouraging deeper comprehension of underlying concepts.

---

### [style_guide.md](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/.claude/skills/cookbook-audit/style_guide.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a structured approach to writing a technical cookbook that emphasizes problem-solving over mere technology deployment. It encourages framing the introduction around the specific problem and its significance, followed by clear learning objectives. The prerequisites and setup sections outline necessary knowledge and tools, ensuring users are equipped for success with concise installation instructions. The core content focuses on demonstrating features through contextualized code examples rather than extensive documentation, avoiding overly technical jargon. In the conclusion, the guide suggests reflections on the learning objectives and further applications of the knowledge gained. Overall, the emphasis is on practical utility and user engagement throughout the learning process.

---

### [CLAUDE.md](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/CLAUDE.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Claude Cookbooks," a resource of Jupyter notebooks and Python examples designed for building applications using the Claude API. It provides essential instructions for quick setup, including dependency installation, API key configuration, and essential development commands for code formatting, linting, and testing. The post outlines key coding standards and git workflow, emphasizing proper branch naming and conventional commit formats. It highlights important rules for handling API keys, model usage, and notebook structure. Slash commands are available for reviewing notebook quality and validating model references. The project structure is detailed, showcasing various capabilities such as core functionalities, advanced notebooks, and integrations. Finally, it outlines a clear process for adding new cookbooks, ensuring consistency and quality throughout contributions.

---

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for contributors to the Claude Cookbooks, detailing development setup and quality standards. Key prerequisites include Python 3.11+ and the recommended use of the `uv` package manager. Contributors are guided through a quick start process involving repository cloning, environment setup, and API key configuration.

Quality assurance is emphasized with tools like nbconvert for notebook execution, ruff for linting, and smart code reviews using Claude AI. The post outlines specific slash commands for validating notebooks and model checks integrated within the development environment.

Contribution guidelines encourage best practices in notebook creation and Git workflows, including structured commit messages and focused pull requests. Finally, the post addresses testing protocols, CI/CD workflows, and security protocols for handling sensitive data. Contributors are encouraged to utilize GitHub's issues and discussions for support and adhere to the MIT License for contributions.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/capabilities/retrieval_augmented_generation/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of Retrieval Augmented Generation (RAG) to enhance Claude's performance in responding to domain-specific queries. It highlights that RAG allows Claude to access internal knowledge bases effectively, making it suitable for various enterprise applications, such as customer support and financial analysis.

Key topics include:

1. **RAG System Setup**: Steps to establish a basic RAG system using in-memory vector databases and Voyage AI embeddings.
2. **Evaluation Metrics**: Introduction of a comprehensive evaluation suite measuring average precision, recall, F1 score, Mean Reciprocal Rank (MRR), and end-to-end accuracy.
3. **Performance Improvements**: The guide showcases significant enhancements in various metrics after implementing advanced techniques like summary indexing and re-ranking.
4. **Implementation Details**: Provides specific coding examples and setup requirements for creating and evaluating the RAG pipeline.

Through these enhancements, Claude's accuracy improved considerably, demonstrating the effectiveness of RAG systems.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/capabilities/summarization/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines effective strategies for leveraging Claude's capabilities in summarizing legal documents. Key focuses include:

1. **Prompt Crafting**: Techniques for creating prompts that drive effective summarization, including multi-shot learning where examples are provided to improve output structure.
   
2. **Guided Summarization**: Explicitly defining the framework for summaries tailored to legal documents, helping to draw attention to critical details such as parties involved, key dates, and specific clauses.

3. **Domain-Specific Techniques**: Customizing prompts for sublease agreements, ensuring essential terms and provisions are highlighted.

4. **Evaluation Methods**: Addressing the challenges in summarization evaluation through automated metrics and tailored criteria, acknowledging the subjective nature of summary quality.

5. **Iterative Improvement**: Emphasizing continuous enhancement of summarization techniques to refine outputs based on specific use cases.

The guide aims to equip readers with comprehensive tools and methodologies for optimizing summarization processes using Claude effectively.

---

### [00_The_one_liner_research_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Claude Agent SDK, enabling users to create autonomous research agents that can adapt their information-gathering strategies without a predefined workflow. Researchers can build a functional agent with minimal code, allowing it to search the web, synthesize conflicting sources, and generate responses based on findings. Key features include state management for conversations, specific system prompts to tailor research outputs, and support for multimodal content analysis using tools like WebSearch and Read. The post also outlines essential prerequisites, setup instructions, and best practices for building production-ready agents. This capability is ideal for tasks that require iterative exploration and synthesis, such as competitive analysis or technical troubleshooting. The conclusion emphasizes the potential of these agents for more complex multi-agent systems.

---

### [01_The_chief_of_staff_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the construction of an AI Chief of Staff agent using the Claude Code SDK, which incorporates various advanced features for organizational tasks. Key highlights include:

1. **Memory with CLAUDE.md**: This feature allows the agent to access persistent context, minimizing repetitive instructions and optimizing token usage.
   
2. **Bash Tool for Python Execution**: The agent can run scripts for complex tasks like financial modeling, enhancing its data processing capabilities.
   
3. **Output Styles**: Customizable output formats cater to different user expertise levels, improving communication effectiveness.
   
4. **Plan Mode**: This mode enables strategic planning without execution, helping stakeholders review detailed plans while reducing execution errors.

These features collectively enhance the agent's integration and performance in supporting executive decision-making and operational efficiency.

---

### [02_The_observability_agent.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/claude_agent_sdk/02_The_observability_agent.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details the advancements made in developing AI agents using the Claude Code SDK, specifically through the integration of the Model Context Protocol (MCP) for enhanced functionality. Key announcements include the addition of the Git MCP server, which enables agents to interact with Git repositories, and the GitHub MCP server, allowing access to over 100 tools for comprehensive GitHub integration. This upgrade transforms agents from passive observers into active participants in development workflows. The post highlights the creation of an observability agent capable of monitoring CI/CD workflows, analyzing failures, and providing actionable insights. It concludes by summarizing the journey through SDK tutorials that covered research agents, multi-agent orchestration, and external system integration, establishing a foundation for production-ready autonomous systems.

---

### [prompting_for_frontend_aesthetics.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/coding/prompting_for_frontend_aesthetics.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post "Frontend Aesthetics: A Prompting Guide" outlines strategies for improving the distinctiveness of frontend designs generated by Claude, which tends to produce conservative outputs. Key recommendations include:

1. **Guiding Specific Design Dimensions**: Direct Claude on typography, color, motion, and backgrounds independently.
2. **Referencing Design Inspirations**: Suggest specific aesthetics or sources to enrich designs without being too prescriptive.
3. **Calling Out Common Defaults**: Instruct Claude to avoid standard, generic choices often reflected in AI-generated outputs.

The guide provides a detailed aesthetics prompt, which, when applied, results in more visually diverse designs, as demonstrated through various examples like a SaaS landing page and a blog post layout. Additionally, it notes that isolating specific design aspects can lead to quicker and more predictable results. Overall, the guide enhances Claude's design capabilities by encouraging creativity and context-specific choices.

---

### [extended_thinking.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/extended_thinking/extended_thinking.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the advanced capabilities of the Claude 3.7 Sonnet model, particularly highlighting the "extended thinking" feature. This functionality enhances Claude's reasoning by allowing it to output internal thought processes in "thinking" blocks, providing transparency in complex problem-solving. Key elements include examples of basic usage, handling streaming responses, and managing token counts for optimal performance. The article emphasizes the importance of managing thinking budgets effectively, outlining minimum requirements and compatibility issues. Additionally, it explains how to deal with redacted thinking blocks due to safety protocols. The post concludes by discussing common error cases when using the extended thinking feature and offers guidance for effective implementation. For more detailed instructions, readers are encouraged to refer to the linked documentation.

---

### [extended_thinking_with_tool_use.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/extended_thinking/extended_thinking_with_tool_use.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the extended thinking feature in Claude 3.7 Sonnet, which enhances transparency in decision-making by displaying step-by-step thought processes prior to final answers. Key announcements include the ability to utilize tools with this feature, allowing for dynamic interactions, such as fetching weather and news updates. The implementation requires setting up API clients and keeping track of conversation history and thinking blocks. The article provides examples of single and multiple tool calls, illustrating how to handle tool execution and follow-up interactions seamlessly. Importantly, it emphasizes the need to preserve cryptographic signatures in thinking blocks for context validation to ensure coherent exchanges with Claude. For more details, refer to the official documentation.

---

### [batch_processing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/batch_processing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of batch processing using the Message Batches API to efficiently handle large volumes of messages asynchronously while reducing costs by 50%. It outlines a step-by-step guide, which includes creating and submitting message batches, monitoring their processing status, and retrieving results.

Key features highlighted include:

1. Setting up an environment for batch processing with necessary imports.
2. An example demonstrating basic batch processing, including preparing a list of questions and monitoring batch status.
3. Detailed handling of batch results, including success and error management.
4. An advanced example that showcases complex batch processing with various message types, including image analysis and multi-turn messaging.

The post serves as a comprehensive guide for developers to leverage batch operations effectively.

---

### [generate_test_cases.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/generate_test_cases.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method for generating synthetic test data for prompt templates using Claude and its API. It introduces functions for extracting variables from templates, constructing example blocks, generating test cases, and refining results iteratively. Key benefits highlighted include improved prompt evaluation through realistic test cases and enhanced performance via multishot examples. The methodology encompasses defining prompt templates, formatting them for generating synthetic data, and interacting with Claude to produce examples based on user-defined variables. The post also emphasizes the potential for continuous improvement by adjusting prompts and examples, ultimately enhancing the overall functionality and output quality of the AI interactions.

---

### [metaprompt.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/metaprompt.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces "Metaprompt," a prompt engineering tool aimed at easing the "blank page problem." Users can input their tasks and variable names, leading to the generation of a starting prompt template for single-turn interactions with the AI model, Claude. The post outlines the straightforward process for utilizing the tool, requiring no coding expertise. Users merely need to enter their Claude API key, specify their task, and optionally list desired input variables. Examples provided in the Metaprompt showcase various tasks, such as acting as a customer service agent and providing tutoring in math. The prompts are designed to guide the AI’s responses effectively, but users are encouraged to adapt the generated prompts for optimal results.

---

### [pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/pdf_upload_summarization.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a new feature from Claude.ai that allows users to upload PDFs via the API, currently in beta. Users can install the Anthropic client and set up the model (claude-sonnet-4-6) that supports PDF interactions. The post demonstrates how to convert a PDF file into base64 encoded bytes for integration with the Claude API. It provides a practical example of using the PDF feature by summarizing a long document — specifically, asking Claude to summarize an abstract at a kindergarten level, rewrite a Methods section as a recipe, and compose a poem regarding the results in a Homer's style. This functionality enhances user engagement and expands the capabilities of the AI in handling complex documents.

---

### [prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of prompt caching via the Claude API, which allows users to store and reuse context within prompts, significantly enhancing efficiency. Key benefits include reducing latency by over 2x and costs by up to 90%, making it ideal for applications involving repetitive tasks. The post provides practical examples, demonstrating the performance of cached versus non-cached API calls, revealing that while the first cached call incurs similar processing times to a non-cached call, subsequent cached calls achieve dramatic speed improvements (2-10x faster). Additionally, a multi-turn conversation simulation showcases the effectiveness of caching in maintaining response quality while minimizing latency, with nearly full input token caching achieved over successive turns. This technique is particularly useful for large documents and comprehensive conversational contexts.

---

### [sampling_past_max_tokens.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/sampling_past_max_tokens.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses a method to enable Claude, the AI model, to generate responses exceeding the maximum token limit of 4096 tokens. By using a prefill with the content of Claude's previous incomplete response, users can prompt the model to continue and complete its output seamlessly. The example illustrates initiating a request for five 1000-word stories about different animals, highlighting how Claude's response gets cut off. The subsequent request allows Claude to build on the last output, effectively overcoming the token limitation. It is noted that users should be aware of potential double charges for input tokens in this process, although output tokens will not incur double charges.

---

### [session_memory_compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/session_memory_compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the implementation of "Session Memory Compaction" for managing context limits in long-running conversations with AI models, such as Claude. It introduces a proactive approach for handling session memory, allowing instant compaction of memory in the background, thus improving user experience by eliminating delays during conversations. 

Key features include:
- Writing prompts that maintain critical context during compaction.
- Instant compaction through background threading, ensuring no user wait time.
- A strategy for prompt caching that can reduce the cost of memory updates by approximately 80%.

The post also outlines prerequisites, installation instructions, and includes code examples illustrating traditional compaction versus the new instant compaction approach, which provides a more efficient and seamless interaction for users in various applications.

---

### [speculative_prompt_caching.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/speculative_prompt_caching.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the concept of "Speculative Prompt Caching," a technique designed to decrease time-to-first-token (TTFT) by warming the cache while users are still formulating their queries. Unlike standard caching, where the user waits for the cache to fill after submitting a question, speculative caching starts caching immediately as the user begins typing. The implementation involves using asynchronous programming to download relevant context and sample a token while the user types, resulting in faster query responses.

Key findings reveal that speculative caching significantly reduces both TTFT and total response time, particularly for large contexts. Best practices include initiating cache warming early and ensuring consistency in context used for warming and queries. The post emphasizes that this method is simple to implement and effectively hides caching times from users.

---

### [using_citations.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/misc/using_citations.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces a new citation feature in the Claude API, enhancing its capability to provide detailed citations when answering queries related to different types of documents. This feature is available for `claude-sonnet-4-6` and `claude-3-5-haiku-20241022` models and offers improved recall and precision compared to traditional prompt-based citation techniques. Users can cite plain text, PDF, and custom content documents, each with structured citation formats. The API facilitates seamless built-in references with context, allowing for better tracking of information sources. Additionally, the post discusses how to visualize citations in user interfaces, ensuring transparency and reliability. It also covers the use of context fields for providing metadata, and highlights the ability to annotate PDF citations using external libraries for enhanced user interaction. Comprehensive documentation is available for further guidance.

---

### [crop_tool.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/multimodal/crop_tool.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines the introduction of a cropping tool for the artificial intelligence model Claude, enhancing its image analysis capabilities. This tool allows Claude to "zoom in" on specific areas of an image, which is crucial for tasks that require detailed examination, such as reading small text or analyzing closely valued data in charts. 

Key features include:
- A crop tool using normalized coordinates for easy reference.
- Demonstrations of the crop tool's utility with different image types, including charts, documents, and technical diagrams.
- Instructions for setting up the tool and integrating it within Claude's framework, including a coding example to implement the feature.
- An alternative approach using the Claude Agent SDK for streamlined integration.

Overall, this advancement aims to facilitate more focused and accurate image analysis by Claude.

---

### [reading_charts_graphs_powerpoints.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/multimodal/reading_charts_graphs_powerpoints.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post details how to effectively utilize Claude for analyzing charts, graphs, and slide decks, highlighting its vision capabilities and PDF support. Key features include providing Claude with PDF documents of visual content along with specific questions, leveraging the model's ability to interpret data accurately. Currently, only the `claude-sonnet-4-6` model supports PDF ingestion in beta, necessitating a specific beta header. 

The post outlines best practices, such as ensuring clear arithmetic calculations by including a calculator tool and advising on complex charts to enhance Claude's accuracy. Additionally, for slide decks, it suggests a method for sequential narration that employs both textual and visual elements, improving representation over standard text extraction. Limitations, such as page count restrictions in requests, are also mentioned, emphasizing Claude's versatility in handling data-rich content.

---

### [usage_cost_api.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/observability/usage_cost_api.ipynb)
**Source:** anthropics/claude-cookbooks

The "Usage & Cost Admin API Cookbook" provides a comprehensive guide for programmatically tracking Claude API usage and associated costs. Key features include monitoring token consumption, analyzing cache efficiency, and detailed cost breakdowns by service type. 

The blog outlines two primary API endpoints: the Messages Usage API for token-level data and a Cost API for expenditure detail in USD. Essential functionalities include usage monitoring for cost optimization, cost attribution across teams, and generating financial reports.

Security recommendations emphasize using an Admin API Key securely. Examples throughout the post illustrate how to retrieve and analyze usage and cost data, including paginated data fetching and CSV export options for external analysis. The structure facilitates enhanced decision-making and cost management for users of the Claude API.

---

### [orchestrator_workers.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/patterns/agents/orchestrator_workers.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the orchestrator-workers workflow, a dynamic system leveraging a central LLM to analyze tasks and delegate subtasks to specialized worker LLMs, resulting in varied and contextually relevant outputs. This approach is advantageous for complex tasks where optimal subtasks cannot be pre-defined, distinguishing it from traditional parallelization methods. Key features include a two-phase operation involving task analysis and execution, facilitating the generation of tailored content, such as marketing copy, based on specific inputs. The implementation requires Python 3.9 or higher, an Anthropic API key, and a basic understanding of prompt engineering. The post highlights adaptability, flexibility, structured coordination, and error resilience as primary benefits, while noting considerations regarding cost and latency, advising against use for simple or predictable tasks. Future enhancements include parallel execution, improved retry mechanisms, and synthesis of worker outputs.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/skills/README.md)
**Source:** anthropics/claude-cookbooks

The "Claude Skills Cookbook" provides a detailed guide on leveraging the Skills feature of Claude for tasks such as document generation, data analysis, and business automation. Key functionalities include the ability to create various document formats (Excel, PowerPoint, PDF) and perform complex data tasks by utilizing specialized, customizable skills. The cookbook is structured into three primary notebooks focusing on an introduction to Skills, financial applications, and custom skills development.

Noteworthy features include a progressive disclosure architecture for optimized token usage, production-ready examples, and guidelines for creating bespoke skills. Additionally, it supports the integration of financial data and automated business processes. The project is accessible via Python with a straightforward installation process outlined for users. For further learning, resources such as the API documentation and community support links are provided.

---

### [01_skills_introduction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/skills/notebooks/01_skills_introduction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the Claude Skills feature, which enables users to create professional documents, analyze data, and automate workflows using Excel, PowerPoint, and PDF. 

Key highlights include:
- **Setup Requirements:** Users need Python 3.8 or higher and an Anthropic API key to get started.
- **Skills Explanation:** Skills are specialized packages that enhance Claude’s capabilities, allowing for expert-level performance and reliable execution of tasks.
- **Token Optimization:** Skills reduce token usage significantly compared to traditional prompts, enhancing efficiency.
- **Types of Skills:** Users can utilize both Anthropic-managed and custom skills tailored to specific needs.
- **Use Cases:** The post illustrates how to create Excel documents with intricate requirements, highlighting the ease of use and efficiency of the Skills feature.

For a visual demonstration, readers are encouraged to visit the provided link showcasing Claude's file creation capabilities.

---

### [02_skills_financial_applications.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/skills/notebooks/02_skills_financial_applications.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Claude's latest capabilities for financial applications, enabling users to create financial dashboards, perform portfolio analytics, and automate reporting workflows via Excel, PowerPoint, and PDF. Key features include:

1. **Financial Dashboard Creation**: Users can generate detailed Excel workbooks that include financial modeling, visualizations, and summaries of company performance.
2. **Executive Presentations**: Claude can create professional PowerPoint presentations summarizing financial performance, including key metrics and graphical data representations.
3. **Portfolio Analysis Tools**: The platform allows for in-depth analysis of investment portfolios, utilizing data to produce comprehensive reports and investment committee presentations.

The post emphasizes best practices for leveraging Claude's skills in Excel and presentation formats, highlighting efficiency and effectiveness in financial reporting and analysis tasks.

---

### [03_skills_custom_development.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/skills/notebooks/03_skills_custom_development.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post titled "Building Custom Skills for Claude" outlines guidance for creating, deploying, and managing specialized skills tailored for Claude, enabling organizations to encapsulate their unique knowledge and workflows. Custom skills enhance operational consistency, automate complex tasks, and safeguard intellectual property.

Key features emphasized include:

1. **Skills Architecture**: Custom skills consist of a required `SKILL.md` file along with optional scripts and resources, allowing diverse functionalities.
2. **Skill Management**: Users can create, version, and delete skills using utility functions, ensuring streamlined control over capabilities.
3. **Case Examples**: The post includes practical examples, like a financial ratio calculator and corporate brand guidelines, showcasing the practical applications of these features.
4. **Best Practices**: Recommendations for effective skill development are provided, alongside troubleshooting tips to assist users in implementation.

Overall, this resource empowers organizations to leverage Claude's capabilities through tailored custom skills.

---

### [tool_evaluation.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_evaluation/tool_evaluation.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a systematic evaluation framework for AI agents executing predefined tasks using specific tools. Key features include an evaluation prompt that guides agents on how to summarize their approach, provide feedback on tool performance, and deliver concise responses. The framework utilizes an agent loop to manage interactions with tools and track metrics. 

Additionally, the post details a calculator tool, demonstrating its integration within the evaluation framework, albeit with noted limitations such as vague descriptions and potential safety concerns in its implementation. The evaluation report summarizes the performance, including accuracy and average tool usage metrics across tasks parsed from an XML file. The overall goal is to enhance tool functionality and evaluation accuracy while offering constructive feedback for further improvement.

---

### [automatic-context-compaction.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/automatic-context-compaction.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces the **Automatic Context Compaction** feature in the Claude Agent Python SDK, designed to manage context limits for long-running AI tasks. This feature becomes essential as agentic workflows—such as an AI customer service agent handling support tickets—often exceed token limits due to extensive conversation history.

Key highlights include:

1. **Context Compaction Process**: The `compaction_control` parameter compresses conversation histories by summarizing previous interactions once a predefined token threshold is exceeded, allowing continued operation without hitting context limits.
  
2. **Demonstration**: A customer service workflow illustrates how compaction optimizes token usage across several processed tickets, highlighting significant token savings compared to workflows without compaction.

3. **Efficiency Gains**: Automatic resets of input tokens after compaction help improve response speed and workflow continuity, while maintaining the quality and relevancy of relevant information in summaries.

Overall, this feature significantly enhances performance in scenarios involving extensive iterative tasks.

---

### [memory_cookbook.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/memory_cookbook.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces advanced memory and context editing features for AI agents using Claude, highlighting innovative solutions to common challenges faced in long-running tasks. Key announcements include the **Memory Tool** that allows AI agents to learn and retain information across sessions, enabling cross-conversation learning. This tool supports a file-based system for memory management. Additionally, **context editing capabilities** assist in managing input token limits, ensuring that crucial information is retained while older context is dynamically cleared based on user-defined parameters. The post also outlines practical use cases, particularly focusing on developing a Code Review Assistant that can recognize and learn from debugging patterns. The guide provides setup instructions, best practices, and fast-start examples for implementing these features effectively. Overall, the aim is to build AI agents that improve performance over time by utilizing learned knowledge efficiently.

---

### [parallel_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/parallel_tools.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses updates related to parallel tool calls in Claude 3.7 Sonnet. It notes that the model is now less likely to make simultaneous tool calls, even when the `disable_parallel_tool_use` setting is not activated. To address this, the blog introduces a "batch tool," designed to enable multiple tool invocations in one go. This tool allows for improved efficiency by processing queries that require data from multiple sources—such as weather and time—simultaneously, reducing latency. The post provides code examples demonstrating how to implement and utilize the batch tool effectively alongside existing tools like `get_weather` and `get_time`, showcasing its ability to streamline responses in collaborative scenarios.

---

### [programmatic_tool_calling_ptc.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/programmatic_tool_calling_ptc.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces Programmatic Tool Calling (PTC) with the Claude API, which enables more efficient tool usage by allowing Claude to execute code directly in the Code Execution environment. This reduces latency and token consumption by enabling Claude to process large data sets without unnecessary context round-trips. The post outlines a practical example using a mock API for team expense management, illustrating how PTC can streamline the analysis of team expenses against budget limits. Readers will learn to differentiate between traditional and programmatic tool calling, writing agents that leverage PTC, given prerequisites such as Python knowledge and the Anthropic API setup. Detailed code snippets and explanations demonstrate the setup and execution of both traditional tool calling and PTC, emphasizing the latter's advantages in performance and efficiency for applications involving large datasets.

---

### [tool_choice.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/tool_choice.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the `tool_choice` parameter in the Anthropic's Claude model, which allows for different modes of tool usage in chat interactions. There are three options: 
1. **Auto**: Claude decides when to use tools based on its confidence in answering questions. It performs optimally with well-structured prompts but may overuse tools.
2. **Tool**: This option forces Claude to always use a specified tool, ensuring consistent interaction even in contexts where a different approach might suffice.
3. **Any**: This requires Claude to use one of the available tools, pivotal for applications like SMS chatbots where tool usage is necessary for communication.

The article illustrates these functionalities with practical coding examples, emphasizing the importance of prompt engineering for effective tool deployment.

---

### [tool_search_alternate_approaches.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/tool_search_alternate_approaches.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post introduces alternative methods for tool discovery with Claude, emphasizing two primary techniques:

1. Tools can be discovered without a traditional "search" function by including them in Claude's system prompt and utilizing a `describe_tool` function to load them into context.
2. Tools do not need to be present in a request's `tools` list until required, enabling optimized request sizes while retaining access to potentially thousands of tools.

The guide outlines prerequisites in terms of Python knowledge and the necessary API tools. It details a mock execution of various tools like weather, stock price, currency conversion, and email sending, demonstrating how Claude can dynamically load tools using a conversation loop. Key to this approach is the use of `defer_loading=True`, which facilitates cache preservation as new tools are discovered. This method supports scalability for applications with extensive tool libraries.

---

### [tool_search_with_embeddings.ipynb](https://github.com/anthropics/claude-cookbooks/blob/944b94a0ebc6025e89aaf90136e120a72068b077/tool_use/tool_search_with_embeddings.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post discusses the introduction of a semantic tool search feature for Claude applications, allowing developers to manage thousands of tools effectively. This approach replaces the traditional method of pre-defining all tools with a single `tool_search` tool. By utilizing semantic embeddings, this method reduces context usage by over 90% and simplifies the tool discovery process, enabling Claude to find relevant tools dynamically based on task context.

Key features highlighted include the ability to scale tool libraries easily, implement client-side tool searches, and leverage embeddings for more intuitive user interactions. The post provides code examples for embedding tool definitions, conducting semantic searches, and defining a meta-tool for Claude to access tools on demand. Overall, this framework enhances the efficiency and flexibility of handling extensive tool ecosystems within applications.