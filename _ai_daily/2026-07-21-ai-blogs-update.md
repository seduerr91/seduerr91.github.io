---
title: OpenAI's Latest Trends in AI Development and Integration
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 07-21"
---
**Meta-Summary: Key Trends and Announcements Across the OpenAI Blog Posts**

OpenAI’s recent blog posts showcase an accelerating evolution in AI capabilities, developer tooling, and practical integrations—collectively aiming to make intelligent, robust, and customizable AI solutions accessible across industries. The most important trends and announcements can be summarized as follows:

**1. Enhanced Model Capabilities & Customization**
- **GPT-5 Launch:** The GPT-5 series introduces new developer controls like verbosity, context-free grammar (CFG), freeform function calling, and settings for minimal reasoning. These features give developers more precision in output formatting, reasoning depth, and application alignment.
- **Improved Agent Engineering:** Persistent context, structured memory, and routine/handoff orchestration (via Agents SDK and new Session objects) enable agents to engage more naturally in multi-turn and long-running conversations, enhancing personalization, reliability, and trust.
- **Vision & Multimodal AI:** With GPT-4o and multimodal fine-tuning capabilities, OpenAI expands into visual reasoning, image Q&A, object detection, and audio applications (e.g., one-step voice translation and dubbing), broadening AI’s applicability across manufacturing, healthcare, education, and media.

**2. Powerful Integration & Ecosystem Expansion**
- **Assistants API & Tooling:** New APIs and SDK enhancements simplify agent building, tool integration, asynchronous operation, and function execution — all within more manageable and robust frameworks.
- **Custom GPT Actions:** There is a strong emphasis on low-code/plug-and-play integrations for enterprise productivity, with GPT Actions and library guides for popular platforms such as Google Ads, Gmail, Salesforce, Notion, Outlook, Jira, SharePoint, AWS, Snowflake, and SQL/PostgreSQL.
- **Hosted MCP Tool:** The Model Context Protocol enables streamlined connectivity between models and external services, reducing latency and supporting use cases like commerce, operational workflows, and notifications.

**3. Advanced Retrieval and Database Integrations**
- **Retrieval-Augmented Generation (RAG):** Extensive tutorials on setting up RAG pipelines using diverse databases (Pinecone, Milvus, Weaviate, MongoDB Atlas, Elasticsearch, Neon Postgres, Redis, Typesense, Azure AI Search, BigQuery, Cassandra/Astra DB, Zilliz) highlight a growing focus on vector search, semantic understanding, and context-rich generative responses.
- **Hybrid and Cross-Encoding Search:** Improved methods for combining vector-based similarity with traditional search or reranking (bi-encoders + cross-encoders) bring higher precision to search, recommendation, and enterprise knowledge tasks.

**4. Evaluation, Safety, and Observability**
- **OpenAI Evals & Monitoring:** New frameworks and integration with tools like Langfuse and Weights & Biases allow systematic, reproducible evaluations of LLMs/agents, including content moderation, benchmark grading, and offline/online evaluation with business metric alignment.
- **Eval-Driven System Design:** Guidance for building production-grade, self-evolving agents via iterative eval loops, feedback integration, and modular agent development demonstrates a trend towards robust, continuously improving AI systems.
- **Content Moderation & Quality Assurance:** Emphasis on pre/post moderation, safety threshold tuning, and prompt optimization systems support application reliability, especially in regulated or customer-facing domains.

**5. Practical Automation and New Use Cases**
- **Coding & Data Tasks:** GPT-5.1 and Agents SDK showcase AI-driven software automation (code generation, patching, project scaffolding), with detailed guides for safe, iterative deployment and real-world applications from supply chain management to customer service.
- **Synthetic Data Generation & Fine-Tuning:** Multiple posts provide methods for generating, customizing, and leveraging synthetic data for task-specific or privacy-compliant model improvement, including techniques like model distillation, self-improving loops, and reinforcement fine-tuning.
- **Personality & Steerability:** Guidance for shaping AI response style, tone, and level of detail (personality engineering) supports satisfaction and alignment with diverse context/enterprise requirements.

**6. Ease of Use and Developer Support**
- **Integrated Documentation & Cookbooks:** Step-by-step guides, recipes, and example-driven tutorials cover a wide spectrum—from basic input formatting to advanced orchestration—making AI adoption approachable for new and experienced developers alike.

---

**In summary:** OpenAI’s latest releases significantly advance AI model adaptability, integration, and evaluation, providing tools that empower developers to build, tune, and monitor production-grade AI agents for complex, data-rich, and multimodal applications—all with a focus on responsible deployment, ease of use, and enterprise-readiness.

## New Cookbook Recipes

### [context_personalization.ipynb](https://github.com/openai/openai-cookbook/blob/01c41eeb5a83c87ec4202f9373a31902069c3e23/examples/agents_sdk/context_personalization.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses advances in **context engineering** for AI agents, emphasizing the shift from reactive to adaptive collaborations. It introduces the **RunContextWrapper** from the OpenAI Agents SDK, which enables developers to create persistent memory structures that enhance personalization. Context personalization is described as the key to making AI agents feel less generic, fostering trust through remembered details like user preferences and past interactions.

A **travel concierge agent** serves as a practical example, demonstrating how structured memory (user profiles, preferences) and unstructured memory (contextual notes) work together to offer tailored experiences. The architecture includes a systematic approach to state management, memory distillation, and consolidation, ultimately leading to more reliable and user-centric AI interactions. The blog highlights ongoing memory lifecycle management, using strategies like conflict resolution and forgetting to maintain high-quality agent performance.

---

### [session_memory.ipynb](https://github.com/openai/openai-cookbook/blob/01c41eeb5a83c87ec4202f9373a31902069c3e23/examples/agents_sdk/session_memory.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses effective context management for AI agents using the OpenAI Agents SDK, particularly through a new `Session` object. It emphasizes the importance of maintaining a balanced context in long-running interactions to ensure coherence and efficiency. Key techniques for context management include **trimming** (retaining a fixed number of recent interactions) and **compression** (summarizing past interactions). The advantages of these methods include improved accuracy, reduced latency, and error containment. A practical example provided focuses on multi-turn customer service conversations, demonstrating how agents can handle multiple issues while preserving essential details. The post also outlines prerequisites for utilizing the SDK, including setting up an OpenAI account and installing required libraries, further assisting developers in building coherent multi-turn agents.

---

### [Assistants_API_overview_python.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Assistants_API_overview_python.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the new **Assistants API**, a stateful enhancement of the Chat Completions API designed for creating assistant-like experiences. Key features of the Assistants API include the introduction of `Assistants`, `Threads`, and `Runs` to better manage conversation state and tool integration. The updated Python SDK (version 1.59.4) supports these functionalities, enabling the creation and management of assistants like a Math Tutor, equipped with tools like the Code Interpreter and File Search. 

Developers can now create assistants, manage conversations more effectively without tracking message history manually, and utilize asynchronous operations for processing user requests. Additionally, the API facilitates adding custom functions and tools for enhanced responses. The blog provides detailed examples on setting up assistants, managing threads, and using various tools, emphasizing the versatility and power of the Assistants API for building sophisticated applications.

---

### [Build_a_coding_agent_with_GPT-5.1.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Build_a_coding_agent_with_GPT-5.1.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the capabilities of GPT-5.1 in coding applications, highlighting the use of the OpenAI Agents SDK to create a coding agent capable of generating and refining applications based on user prompts. This agent utilizes several tools, including `apply_patch` for file editing, `shell` for executing shell commands, and `web_search` for accessing updated online information. 

The guide details the setup process for the agent, including defining its environment and creating a workspace, as well as how to initiate project creation with a sample NextJS application. Additionally, it outlines iterative project enhancements using the `apply_patch` tool, emphasizing the importance of safe execution environments for command execution in production scenarios. This comprehensive approach showcases GPT-5.1's potential in software development automation.

---

### [Classification_using_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Classification_using_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a text classification task using embeddings to predict food review scores on a scale from 1 to 5. It highlights that while fine-tuned models generally outperform embeddings in text classification tasks, the approach taken in this notebook demonstrates the effectiveness of using a Random Forest classifier with embedding-derived features. The dataset is divided into training and testing sets for accurate performance evaluation. The model achieved decent classification results, particularly for 5-star reviews, which are the most prevalent in the dataset. It notes the challenges in predicting mid-range scores (2-4 stars) due to their subjectivity and suggests that more data could improve the model's ability to distinguish between these categories. The post includes relevant code snippets and visualizations to support the findings.

---

### [Clustering.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Clustering.ipynb)
**Source:** openai/openai-cookbook

This blog post demonstrates the application of a K-means clustering algorithm in Python to uncover hidden groupings within a dataset of fine food reviews. It starts with the conversion of review embeddings into a NumPy array, followed by the implementation of K-means to identify clusters. The process involves determining the optimal number of clusters and visualizing the results using t-SNE. The post also highlights the identification of distinct themes within each cluster by utilizing GPT-4 to analyze random samples from the reviews.

Additionally, it provides sample reviews along with their scores and summaries for each cluster. Importantly, the post cautions that the clusters identified may not always align with specific intended uses, indicating that the number of clusters can influence the granularity of insights derived from the data.

---

### [Creating_slides_with_Assistants_API_and_DALL-E3.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Creating_slides_with_Assistants_API_and_DALL-E3.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the use of the new Assistants API (GPT-4) and DALL·E-3 to simplify the creation of presentation slides. It outlines a step-by-step process for generating a fictional quarterly financial review presentation for "NotReal Corporation" without utilizing traditional slide software like Microsoft PowerPoint or Google Slides. Key features include the ability to analyze financial data, generate visualizations, derive insights, and create titles using AI. The DALL·E-3 model will soon assist in producing images for slide titles. The post provides code snippets demonstrating how to implement these features, ultimately leading to the creation of a complete .pptx file containing the presentation slides.

---

### [Customizing_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Customizing_embeddings.ipynb)
**Source:** openai/openai-cookbook

This blog post outlines a method for customizing OpenAI embeddings for specific tasks by tailoring them to the relationships between text pairs. The approach involves using training data formatted as [text_1, text_2, label], where the label indicates whether the pairs are similar (+1) or dissimilar (-1). The author demonstrates this technique using the SNLI corpus, achieving as much as a 50% reduction in error rates for binary classification tasks.

Key steps include generating synthetic negatives for training, calculating embeddings and cosine similarities, and optimizing a projection matrix to improve task performance. The author emphasizes the importance of separating training and test datasets to avoid contamination, noting that minimal data (as few as 100 examples) can still yield noticeable improvements. The post also explores the impact of clustering on creating positive and negative pairs, offering a systematic way to enhance embeddings for various applications.

---

### [Data-intensive-Realtime-apps.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Data-intensive-Realtime-apps.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a practical guide for AI engineers on optimizing the use of OpenAI's Realtime API, particularly in scenarios involving data-intensive applications like speech-to-speech agents. It emphasizes the need for carefully designed function calls to prevent overwhelming the API and ensure efficient responses. Key recommendations include breaking large functions into smaller, more focused calls, optimizing conversation context to maintain performance, using filtering to minimize data payloads, and employing structured data formats that enhance model comprehension. Moreover, after heavy data interactions, following up with specific hint prompts can improve fluency and accuracy in the model's responses. The guide uses an example of an NBA scouting agent to illustrate these strategies effectively.

---

### [Fine-tuned_classification.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Fine-tuned_classification.ipynb)
**Source:** openai/openai-cookbook

The blog post details the process of fine-tuning the `babbage-002` classifier to differentiate between Baseball and Hockey using a dataset from the 20 Newsgroups. The authors employed a sample of 300 examples for training, and used OpenAI's data preparation tools to improve the dataset before fine-tuning. The training achieved a notable accuracy of 99.6% on the validation set within approximately ten minutes. The model was effectively evaluated using specific prompts and temperature settings, confirming its ability to classify not only emails but also tweets related to the two sports. This demonstrates the model's versatility and potential application in broader contexts.

---

### [Function_calling_with_an_OpenAPI_spec.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Function_calling_with_an_OpenAPI_spec.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a method for utilizing GPT to intelligently call APIs based on OpenAPI specifications, enhancing API interactions. It outlines a notebook that demonstrates two primary processes: converting an OpenAPI specification into function definitions and intelligently invoking these functions via the chat completions API.

Key announcements include the introduction of the OpenAPI Specification (OAS) as a standard for RESTful API descriptions, allowing both machines and humans to understand API capabilities. The implementation features the extraction of function names, descriptions, and parameters from an OpenAPI spec, enabling GPT to execute complex operations through chained function calls. 

The post concludes by highlighting potential system extensions, such as integrating real APIs, advanced error handling, and executing more intricate user commands.

---

### [How_to_call_functions_with_chat_models.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_call_functions_with_chat_models.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses using the Chat Completions API to enrich GPT model capabilities by integrating external functions. Key features include a `tools` parameter for function specifications, allowing the model to generate appropriate function arguments without executing them. Developers can enforce function usage or abstention using the `tool_choice` parameter. The content is structured into two sections: generating function arguments and executing those with model-generated inputs. 

Examples illustrate generating weather data arguments and SQL database queries, highlighting the models' ability to clarify requests and adapt to user inputs. Notably, newer models can handle multiple function calls simultaneously. The detailed presentation of utilities for function execution provides a practical framework for developers to implement these features effectively.

---

### [How_to_format_inputs_to_ChatGPT_models.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_format_inputs_to_ChatGPT_models.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on formatting inputs for OpenAI's ChatGPT models, specifically `gpt-3.5-turbo` and `gpt-4`. Key elements include the necessity of specifying the model and the format of the message inputs, which comprise required fields such as `role` and `content`. It highlights optional parameters to customize responses, including `temperature`, `max_tokens`, and `functions`. As of January 2024, users can also submit `functions` for output in JSON format. Examples illustrate how to structure conversation flows, how to utilize system messages for behavior priming, and the importance of token counting for managing API costs and response limits. Overall, the post serves as a valuable resource for developers looking to efficiently interact with OpenAI's chat models.

---

### [How_to_use_moderation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_use_moderation.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a detailed guide on using the Moderation API to enhance content safety within applications utilizing language models (LLMs). It highlights three key moderation techniques: 

1. **Input Moderation**: Identifies harmful content before it reaches the LLM, applicable in areas like community standards enforcement and spam prevention.
2. **Output Moderation**: Ensures that generated content aligns with acceptable standards, strengthening the reliability of user-facing applications.
3. **Custom Moderation**: Offers a tailored approach to content filtering, ideal for niche platforms that need specific content criteria.

Users are encouraged to balance latency and cost when implementing moderation, particularly in asynchronous designs. The post stresses the importance of setting appropriate moderation thresholds to mitigate false positives or negatives, thereby refining user experience and application integrity. For further exploration, it suggests consulting the Guardrails Cookbook for additional strategies.

---

### [Leveraging_model_distillation_to_fine-tune_a_model.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Leveraging_model_distillation_to_fine-tune_a_model.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a method for fine-tuning a smaller model, `gpt-4o-mini`, by leveraging outputs from a larger model, `gpt-4o`, through a process called model distillation. This technique aims to improve efficiency and reduce costs in predictions, particularly for classifying grape varieties in wine reviews using structured outputs.

The author utilizes a dataset from Kaggle, specifically filtering for French wines, to conduct the experiment. A comparative analysis demonstrates that `gpt-4o` significantly outperforms `gpt-4o-mini` in prediction accuracy. By distilling the outputs of `gpt-4o`, a fine-tuned model is generated that exhibits improved accuracy over the base `gpt-4o-mini` model by nearly 22%. This fine-tuned model promises faster and cheaper inference while maintaining high accuracy, making it well-suited for future predictions.

---

### [Optimize_Prompts.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Optimize_Prompts.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the launch of a new prompt optimization system for AI models, designed to enhance the effectiveness of user prompts. It employs a multi-agent approach, where specialized AI agents collaboratively analyze and rewrite prompts to address common issues such as contradictions, unclear format specifications, and inconsistencies with few-shot examples. Key agents include the Dev-Contradiction-Checker, Format-Checker, Few-Shot-Consistency-Checker, and respective rewriters.

The system offers a structured workflow comprising six steps, from understanding system functionality to running optimization and providing real-world examples. It also utilizes the OpenAI API and requires the installation of specific Python packages. Overall, the system aims to streamline prompt crafting, thus improving AI outputs significantly.

---

### [Orchestrating_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Orchestrating_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a method for orchestrating multiple language model agents through the concepts of **routines** and **handoffs**. A routine is defined as a series of steps that an agent follows, which can include prompts and relevant functions. The post provides an example of a customer service routine, demonstrating how straightforward instructions can effectively guide conversation flows. 

Additionally, the post introduces the concept of handoffs, where one agent can transfer control of a conversation to another, akin to a phone call transfer. By utilizing `Agent` objects and specialized functions for handoffs, the agents can dynamically decide when to pass control based on the conversation context. A sample repository, **Swarm**, is available for practical examples and implementations. Overall, these strategies aim to simplify the orchestration of complex inter-agent dialogue while maintaining robustness and clarity.

---

### [Question_answering_using_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Question_answering_using_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a novel two-step "Search-Ask" method to enhance GPT's ability to answer questions on topics outside its training data, such as recent events or private documents. The method involves first searching a text library for relevant sections and then asking GPT questions using the retrieved content. 

Key points include the advantages of search over fine-tuning, as searching allows for more reliable and flexible access to up-to-date information. The post highlights the use of embedding-based search, which excels with questions that do not lexically align with answers. A detailed procedure is provided, covering data preparation for embedding, query handling, and cost considerations associated with using GPT models versus embedding searches. The approach is recommended for systems needing to reference large quantities of text for effective Q&A.

---

### [Reinforcement_Fine_Tuning.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Reinforcement_Fine_Tuning.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a comprehensive guide on using OpenAI's APIs for reinforcement fine-tuning (RFT) of the `o4-mini` reasoning model, specifically aimed at predicting outcomes from medical transcripts. Key areas covered include:

1. **Setup**: Instructions for preparing the environment and understanding the nuances required in medical reasoning.
2. **Dataset Gathering**: Using the medical-o1-verifiable-problem dataset, emphasizing the importance of dataset quality and the effectiveness of RFT even with smaller datasets.
3. **Benchmarking**: Establishing a baseline performance by employing both strict and fuzzy grading methods to assess model outputs.
4. **Grading and Training**: Instructions for defining effective graders and managing training jobs to enhance model performance.

The guide combines practical coding examples with explanations of fundamental concepts, making it a valuable resource for developers and ML practitioners in healthcare-related AI applications.

---

### [SDG1.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/SDG1.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the benefits and methodologies of generating synthetic data using large language models (LLMs). It highlights the necessity of synthetic data for various applications, including training machine learning models and mitigating data privacy concerns. Key drivers for adopting synthetic data generation include its structured format, ability to augment sparse datasets, and enhancement of imbalanced datasets.

The tutorial is divided into two parts, with the first focusing on tasks such as generating structured CSV data and creating textual data for model fine-tuning. It illustrates how LLMs can produce complex datasets, including multiple related tables, and emphasizes the importance of crafting precise prompts. The post also stresses the significance of generating diverse datasets and outlines strategies for clustering data to address imbalances, ultimately enabling improved training for models like GPT-4o and GPT-3.5-turbo.

---

### [Search_reranking_with_cross-encoders.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Search_reranking_with_cross-encoders.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a method for improving search result accuracy through cross-encoding, complementing existing semantic search frameworks utilizing bi-encoders. It highlights that while bi-encoders enable faster document retrieval, cross-encoders enhance relevance assessment by incorporating subtle domain-specific rules. The suggested workflow involves initially using bi-encoders to identify a shortlist of relevant documents and then employing cross-encoders, specifically OpenAI's GPT models, to rerank these candidates based on relevance.

The post provides a code example for re-ranking academic papers, emphasizing the importance of domain-specific tuning for effective results. It also warns about potential latency issues with GPT models, suggesting fine-tuning as a possible solution. Typical use cases mentioned include refining stock report lists and improving results from traditional search methods. The post encourages experimentation with this reranking approach to optimize search capabilities.

---

### [Using_logprobs.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Using_logprobs.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the utilization of the `logprobs` parameter in the Chat Completions API, which enhances confidence assessment in language model outputs. When enabled, `logprobs` provides log probabilities for each output token, allowing users to gauge the model's confidence and examine alternative token predictions. Key applications highlighted include:

1. **Classification Tasks**: Users can assess the model's confidence in categorizing data, helping in decision-making.
2. **Q&A Evaluation**: `logprobs` can indicate whether the model has sufficient context to answer a question, thus reducing inaccuracies or "hallucinations" in responses.
3. **Autocomplete**: It can determine when to suggest the next word based on the model's confidence.

Overall, `logprobs` provide valuable insights into model behavior and reliability, enhancing classification, retrieval evaluation, and user interaction features.

---

### [Visualizing_embeddings_in_3D.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Visualizing_embeddings_in_3D.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the process of visualizing high-dimensional embeddings in a 3D space using Principal Component Analysis (PCA). Specifically, it reduces embeddings from 1536 dimensions to 3 for better visualization. The example utilizes a small dataset (`dbpedia_samples.jsonl`), which comprises 200 samples randomly selected from the DBpedia validation dataset. 

Key steps include loading the dataset, querying embeddings using a specified model, applying PCA for dimensionality reduction, and finally plotting the embeddings on a 3D graph. Different categories within the dataset are represented by distinct colors for clarity. The visualization is executed using Matplotlib, enhancing the understanding of the data structure within the reduced dimensions.

---

### [Whisper_correct_misspelling.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Whisper_correct_misspelling.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses strategies for improving transcription accuracy, especially for company names and product references. The authors propose a dual approach, combining the use of Whisper's prompt parameter with GPT-4's post-processing capabilities to address transcription errors. 

Key points include:

1. Inputting a list of correct spellings into Whisper to guide initial transcriptions and then utilizing GPT-4 for additional corrections enhances accuracy.
2. The method allows for scalable handling of extensive product lists, but may face limitations tied to the context window of GPT-4.
3. The effectiveness of GPT-4 in post-processing reveals its ability to significantly enhance transcription accuracy, even when the speech content is initially unknown.

Ultimately, these techniques demonstrate a robust framework for ensuring precise transcription, albeit with considerations for increased costs and latency.

---

### [evaluate_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/agents_sdk/evaluate_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post titled "Evaluating Agents with Langfuse" provides a comprehensive guide on how to monitor and evaluate the performance of OpenAI agents using Langfuse. Key features include methods for online and offline evaluation metrics, essential for debugging and enhancing agent reliability. The post emphasizes the importance of AI agent evaluation for real-time performance monitoring and cost management. It outlines steps to install necessary libraries and instrument the OpenAI agent, test instrumentation, and utilize Langfuse for advanced metric tracking, such as token usage and latency. Additionally, it details the incorporation of user feedback and the use of another model as a judge to evaluate the agent's outputs. The guide also covers offline evaluation strategies with benchmark datasets to ensure quality before deploying changes into production. Ultimately, the post highlights the significance of observability in the continuous improvement of AI agents.

---

### [chat_with_your_own_data.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/azure/archive/chat_with_your_own_data.ipynb)
**Source:** openai/openai-cookbook

The blog post announces the preview launch of the Azure OpenAI service, allowing users to utilize chat completion models like GPT-3.5-Turbo and GPT-4 with their own data without the need for model training or fine-tuning. This feature enhances conversational AI's accuracy by enabling models to reference specific, up-to-date data sources when generating responses. Integrating Azure Cognitive Search provides a pre-built solution for knowledge retrieval, facilitating the creation of customized AI applications. The post details the prerequisites for using this feature, including Azure resources, and offers a step-by-step setup for connecting the OpenAI SDK with Azure services. Moreover, it provides coding examples for setting up the necessary environment and connecting the model to user-specific data sources to improve contextual responses. The implementation supports various authentication methods, including Azure Active Directory credentials.

---

### [chat.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/azure/chat.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the process of utilizing the Azure OpenAI service for creating chat completions and includes details on content filtering. Key highlights include:

1. **Setup and Authentication**: Users are guided through installing necessary libraries and configuring authentication via Azure API keys or Azure Active Directory. The post emphasizes the use of environment variables for storing sensitive information.

2. **Model Deployment**: Instructions are provided for deploying a GPT model in the Azure OpenAI Studio, which will be referenced in subsequent chat completions.

3. **Chat Completions**: Examples demonstrate how to create chat completions, including the option for streaming responses.

4. **Content Filtering**: The Azure OpenAI service features content filtering to ensure prompt and response compliance with safety policies. The post explains how to handle flagged content and retrieve filtering results.

For further details, users are encouraged to consult the Azure documentation linked in the blog.

---

### [gpt_action_box.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_box.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library integration with Box.com, detailing how developers can create a GPT Action to connect ChatGPT with a Box account. This integration utilizes two key actions: the Box API for data retrieval and an Azure Function for response formatting, enabling ChatGPT to access and read file contents seamlessly. 

The guide highlights practical use cases, such as querying file details, visualizing datasets, and providing audits, which can significantly enhance efficiency for Box users. Additionally, it provides prerequisites for setting up a Box developer account and configuring OAuth 2.0. This integration aims to simplify information retrieval and organization within Box, ensuring security and clarity in response interactions. Developers are encouraged to refer to Box and Azure documentation for further implementation details.

---

### [gpt_action_gmail.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_gmail.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action for Google Gmail, detailing its capabilities and how developers can implement it. This action integrates with the Gmail API to read, send, list, and draft emails securely. It aims to enhance communication efficiency, improve customer engagement, and optimize resource allocation through various use cases such as summarizing emails, drafting responses, and connecting with other data tools. 

Key features include full access to the Gmail OAuth 2.0 API, email encoding instructions, and the ability to manage and send email drafts. The post provides essential links for documentation, setup requirements for the Google Cloud project, authentication details, and troubleshooting tips, ensuring developers are well-prepared to implement the action effectively.

---

### [gpt_action_googleads_adzviser.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_googleads_adzviser.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the **GPT Action Library** for connecting Google Ads data through **Adzviser**, which simplifies the retrieval of key performance metrics such as impressions, clicks, and costs. By integrating Adzviser as middleware, users can ask natural language questions in ChatGPT, and get formatted reporting data from Google Ads. This integration eliminates the need for manual data handling, streamlining tasks for marketers.

Notable features include:
- Real-time data retrieval for campaign performance analysis.
- Use case examples like auditing accounts, conducting keyword analysis, and generating reports.
- Step-by-step instructions for setup and data queries via a Custom GPT.

The post emphasizes ease of use for marketers in managing their Google Ads accounts effectively without navigating complex interfaces.

---

### [gpt_action_jira.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_jira.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the launch of a GPT Action designed to integrate ChatGPT with Jira, Atlassian's project management tool. This action allows users to leverage natural language capabilities to read and write Jira issues directly through ChatGPT, enhancing productivity with examples such as loading recent issues, creating and modifying tasks, and assigning them to specific users.

Key features include API connections that enable the creation and editing of issues and subtasks. Detailed instructions are provided for setting up the integration, including creating a Jira application, configuring permissions, and establishing authentication between ChatGPT and Jira using OAuth. The post emphasizes the importance of providing the correct parameters and clarifications during usage to ensure accurate responses. It also invites feedback and suggestions for further integrations.

---

### [gpt_action_notion.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_notion.ipynb)
**Source:** openai/openai-cookbook

The blog post details the GPT Action Library for integrating OpenAI's GPT with Notion, providing developers with guidelines for building a specific GPT Action for querying Notion pages. Key features include leveraging ChatGPT's natural language processing to interface with Notion's search functionalities and delivering relevant page summaries based on user inquiries. Example business use cases demonstrate its utility for onboarding new employees, aiding support agents, and synthesizing information. The post includes essential links for documentation and application prerequisites, authentication instructions via API keys, and troubleshooting tips. Overall, this integration aims to enhance productivity by allowing users to easily access and synthesize information stored within Notion.

---

### [gpt_action_outlook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_outlook.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the introduction of the GPT Action for Microsoft Outlook, enabling developers to integrate ChatGPT with Outlook for managing emails and calendar events. Key features include the ability to send and retrieve emails, look up daily meetings, and summarize schedules using natural language commands. The post includes essential resources such as links to the Microsoft Graph API documentation and guidance on setting up Azure App Registration, API permissions, and OAuth authentication.

Developers are provided step-by-step instructions for connecting ChatGPT to Outlook via the API, detailing actions like creating, reading, and modifying calendar events and emails. The integration enhances communication efficiency and scheduling capabilities through API-driven interactions, fostering a seamless user experience.

---

### [gpt_action_redshift.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_redshift.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for connecting ChatGPT to AWS Redshift, enabling data retrieval and analysis through natural language queries. Key features include an AWS middleware function that executes SQL queries against Redshift and returns results as downloadable files. Developers must ensure they have access to a Redshift environment, proper AWS CLI authentication, and necessary library installations. Example business use cases include data scientists performing analyses and citizen users querying transactional data. The post provides detailed steps for setting up the middleware, including environment configuration, deployment commands, and custom GPT instructions for effective SQL querying. The integration allows authenticated users to seamlessly interact with data while leveraging ChatGPT’s capabilities for insights.

---

### [gpt_action_salesforce.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_salesforce.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide for developers on creating a GPT Action for integration with Salesforce Service Cloud. Key features include the ability for users to retrieve and update case data directly through ChatGPT, enhancing customer response efficiency and consistency. The document outlines prerequisites for setting up the Salesforce environment, including permissions for app creation and relevant API documentation links. It details instructions for integrating the ChatGPT with Salesforce using OAuth, emphasizing the importance of correctly configuring the Connected App settings. Additionally, the post includes OpenAPI schemas for updating and retrieving case details, troubleshooting tips, and a call to action for users to report integration suggestions or issues. Overall, this guide streamlines the process of linking ChatGPT with Salesforce, ultimately improving user experience and operational efficiency.

---

### [gpt_action_sharepoint_doc.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sharepoint_doc.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library's SharePoint integration, enabling developers to build custom actions that leverage files stored in SharePoint and Office 365 through Microsoft Graph API. The solution allows users to ask questions and receive answers based on documents they can access. It employs Azure Functions to process responses from the Graph API and format them for ChatGPT.

Key features include:

1. **File Retrieval**: Access files via Microsoft Graph search capabilities, converting them into a format compatible with ChatGPT.
2. **Use Cases**: Effortlessly find related files or answer specific questions within documents.
3. **Customizations**: Developers can tailor functions to focus searches, limit file types, or adjust search parameters.
4. **Limitations**: Adheres to character limits and processing time constraints outlined in the documentation. 

Detailed setup instructions for deploying the Azure Function are also provided.

---

### [gpt_action_sharepoint_text.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sharepoint_text.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a new GPT Action for SharePoint that enhances document accessibility through ChatGPT, utilizing Microsoft Graph API. Key features include the use of Azure Functions to process user queries and retrieve relevant documents in readable text format, particularly effective for large, unstructured documents. The solution enables users to extract information quickly from accessible files, addressing specific queries and improving productivity. Noteworthy use cases include finding documents related to a specific topic or answering questions within extensive text archives. The architecture employs a Node.js Azure Function to search, format, and summarize document content using GPT 4o mini, thus allowing for efficient interaction with SharePoint documents. Developers are guided through prerequisites, setup, and coding steps necessary to implement and customize this solution according to their needs.

---

### [gpt_action_snowflake_direct.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_snowflake_direct.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide for developers on creating a GPT Action to connect with Snowflake Data Warehouse. It details the functionality, allowing users to query data using natural language, beneficial for data scientists and citizen data users seeking insights into their datasets. Key components include configuring a Custom GPT with specific SQL query steps, setting up Snowflake integration with necessary security and network policies, and utilizing OAuth for authentication. The middleware approach is recommended for handling larger result sets. Important links to Snowflake's API documentation and values for role and database specifications enhance usability. Additionally, the post outlines troubleshooting steps for common issues, encouraging user feedback for integration improvements.

---

### [gpt_action_snowflake_middleware.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_snowflake_middleware.ipynb)
**Source:** openai/openai-cookbook

The blog post details a guide for developers on creating GPT Actions that connect ChatGPT with a Snowflake Data Warehouse, enhancing data analysis capabilities through SQL queries. It emphasizes the use of middleware, specifically Azure Functions, to format SQL query outputs into CSV or Excel files under 10MB, facilitating integration with Python notebooks for data visualization and analysis.

Key features include the necessity for Azure and Snowflake setup, user authentication via OAuth, and outlining the steps to configure security integration within Snowflake. The post also emphasizes efficiency in querying data and highlights potential business applications, such as revealing data patterns and supporting data-driven decisions. Additionally, it provides practical coding examples to implement the middleware functionalities effectively.

---

### [gpt_action_sql_database.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sql_database.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for connecting ChatGPT with SQL databases, specifically using PostgreSQL as an example. Key features include the ability to execute read queries, return records as text or in CSV format, and facilitate natural language interaction with database data. This functionality empowers business users to obtain information without SQL knowledge and allows data analysts to enhance their analysis capabilities.

Developers are guided to set up middleware to handle SQL queries, convert responses into CSV format, and manage user authentication and permissions effectively. The workflow involves generating SQL queries from user prompts, submitting them through middleware to the database, and returning results as base64-encoded CSV files for processing by ChatGPT. The post emphasizes the importance of building either custom or third-party middleware for flexibility and control in handling database queries.

---

### [gpt_middleware_aws_function.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_middleware_aws_function.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library focusing on integrating AWS Lambda functions with ChatGPT. It provides a guide for users to set up an OAuth-protected Lambda function using AWS SAM (Serverless Application Model) to facilitate interaction with various AWS services such as Redshift, DynamoDB, and S3. Key features include pre-processing API responses, returning files for data analysis, and establishing middleware connections. The setup process involves creating a user pool in AWS Cognito for authentication, implementing security measures to ensure only authenticated access, and configuring ChatGPT to communicate effectively with the AWS Lambda function. The post concludes by highlighting the advantages of secure, versatile AWS lambda interaction within ChatGPT operations, while encouraging customization for specific use cases.

---

### [gpt_middleware_azure_function.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_middleware_azure_function.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a guide for developers to create middleware using an Azure Function to connect a GPT Action to specific applications. Key features highlighted include the ability to leverage ChatGPT’s language processing with functionalities such as preprocessing text responses, handling various data types, and returning files. Example use cases illustrate practical applications, like integrating with SharePoint and initiating processes within Azure functions.

The post details the application setup, including creating an OAuth-protected Azure Function, configuring authentication, and generating an OpenAPI specification for integration with ChatGPT. Developers are provided with comprehensive steps to establish a connection and test the setup using Postman. Additional links to Microsoft documentation and examples enhance the guide's utility for users.

---

### [Azure_AI_Search_with_Azure_Functions_and_GPT_Actions_in_ChatGPT.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/azure/Azure_AI_Search_with_Azure_Functions_and_GPT_Actions_in_ChatGPT.ipynb)
**Source:** openai/openai-cookbook

The blog post details the integration of Azure AI Search, now known as Azure Cognitive Search, with OpenAI embeddings as a vector database, alongside Azure Functions to enhance chatbot capabilities using ChatGPT. This setup aims to help users establish a Retrieval-Augmented Generation (RAG) infrastructure on Azure, providing an endpoint for ChatGPT. 

Key steps include configuring an Azure environment, preparing data for uploading through embedding, creating an Azure AI Vector Search, and then integrating this solution with a Custom GPT in ChatGPT. The architecture allows for flexibility in using other vector data stores, such as Postgres, by adjusting the configuration accordingly. Overall, it provides a comprehensive guide to building a robust search and integration system leveraging Microsoft Azure and OpenAI technologies.

---

### [Getting_started_with_bigquery_vector_search_and_openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/gcp/Getting_started_with_bigquery_vector_search_and_openai.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the integration of Google Cloud Platform (GCP) BigQuery as a vector search database with OpenAI embeddings, facilitating the creation of a Google Cloud Function to interface with a Custom GPT in ChatGPT. It aims to help users establish a Retrieval-Augmented Generation (RAG) infrastructure within GCP, allowing seamless integration with ChatGPT.

Key components include:
- **BigQuery**: A serverless data warehousing solution for rapid SQL queries and analysis of large datasets.
- **Google Cloud Functions**: A lightweight, event-driven compute service to create intended functionalities without managing servers.

The guide details prerequisites, architectural setup, environment configuration, data preparation, and creating BigQuery tables for vector searches. The process includes embedding documents, uploading data, and using search functions, emphasizing an architecture diagram and step-by-step instructions for implementation.

---

### [gpt-action-pinecone-retool-rag.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/pinecone-retool/gpt-action-pinecone-retool-rag.ipynb)
**Source:** openai/openai-cookbook

This blog post serves as a comprehensive guide on utilizing Pinecone as a vector database to store OpenAI embeddings, integrating this setup with Retool to create a REST endpoint for seamless interactions with ChatGPT. Key steps include setting up accounts for Pinecone and Retool, preparing the data for embedding, creating and populating a Pinecone index, and establishing a Retool workflow to connect queries from ChatGPT to the Pinecone database.

Additionally, the article highlights the implementation of an API using Retool, with detailed instructions for embedding text and querying the index. Finally, it outlines how to connect this setup with a custom GPT action through API specifications, completing the integration for AI-powered search capabilities. The resulting system enables users to leverage advanced similarity searches efficiently, thereby enhancing AI applications.

---

### [building_consistent_workflows_codex_cli_agents_sdk.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/codex/codex_mcp_agents_sdk/building_consistent_workflows_codex_cli_agents_sdk.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the introduction of Codex CLI and Agents SDK, designed to enhance consistency and scalability in development workflows. Key features include:

- **Scoped Context for Agents**: Each agent operates within its defined context, ensuring repeatability.
- **Scalable Orchestration**: Facilitates both single and multi-agent systems, allowing for complex workflows.
- **Observability and Auditability**: Full traces of agent interactions can be reviewed for analysis.

The post covers initialization of Codex CLI as an MCP Server, building single-agent systems (e.g., a designer and developer collaborating on a game), and orchestrating multi-agent workflows with distinct roles (e.g., project manager, designer, developers, tester) managing tasks and ensuring quality control through gated handoffs. This structure aims to mirror real-world enterprise development processes, ensuring reliable delivery and integration.

---

### [custom_image_embedding_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/custom_image_embedding_search.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of a Multimodal Retrieval-Augmented Generation (RAG) system utilizing CLIP embeddings alongside GPT-4 Vision, enhancing traditional text-based RAG by integrating image data for improved question-answering capabilities. Key features include direct image embedding for similarity searches, allowing for more accurate retrieval without relying on text captioning, and the ability to fine-tune CLIP with specific datasets.

The process outlined involves installing necessary packages, creating an image embedding database, querying the vision model, and performing semantic searches on a user-uploaded image. Through practical examples, the system demonstrates its ability to accurately retrieve and provide information about similar images from a knowledge base. The blog concludes by highlighting the broad applications of this approach and potential advancements in retrieval techniques and models.

---

### [introduction_to_deep_research_api.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/deep_research_api/introduction_to_deep_research_api.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the Deep Research API, a tool designed to automate complex research workflows by transforming high-level queries into structured, citation-rich reports. Unlike ChatGPT, which abstracts the research process, this API allows for direct programmatic interaction. Key features include:

1. Two available models for accessing the API: the optimized `o3-deep-research` and the lightweight `o4-mini-deep-research`.
2. The ability to configure parameters for detailed reports, set asynchronous processing, and include web search and code execution tools.
3. Enhanced output capabilities with structured responses, inline citations, and intermediate reasoning steps for analysis.
4. Optional integration with internal knowledge sources using Model Context Protocol (MCP) to enrich research tasks.

The post emphasizes the importance of detailed prompts for effective outcomes and provides examples for proper API setup and use cases.

---

### [introduction_to_deep_research_api_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/deep_research_api/introduction_to_deep_research_api_agents.ipynb)
**Source:** openai/openai-cookbook

The "Deep Research Agents Cookbook" introduces users to crafting advanced research workflows utilizing the OpenAI Deep Research API and Agents SDK. Key features include orchestrating single and multi-agent systems, enriching user queries for enhanced output, streaming research updates, and integrating web and internal document searches. Users are guided to set up a Basic Research Agent with capabilities for deep empirical research and streaming results, leveraging the model "o4-mini-deep-research-alpha." The post emphasizes the importance of a multi-agent architecture for clarifying user queries and refining research instructions. Additional technical notes cover setup prerequisites, configuration details, and a structured approach to ensure the best research outcomes through various specialized agents. The post concludes with example runs to demonstrate the functionality of agent interaction flows.

---

### [Evaluate_RAG_with_LlamaIndex.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/Evaluate_RAG_with_LlamaIndex.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a structured approach to building and evaluating a Retrieval Augmented Generation (RAG) pipeline using LlamaIndex. It begins by explaining the importance of RAG in integrating specific user data during the response generation process of large language models (LLMs). 

The post is divided into three main sections: understanding RAG, building the system, and evaluating its effectiveness. Key features highlighted include five stages in RAG (loading, indexing, storing, querying, and evaluation), as well as metrics for assessing performance, such as Hit Rate and Mean Reciprocal Rank (MRR). 

The evaluation process demonstrates the use of LlamaIndex's tools, including the Faithfulness and Relevancy evaluators, to ensure that the responses are accurate and aligned with the source data. Results indicated that the RAG system has high faithfulness and relevancy scores, emphasizing its effectiveness. 

Overall, the post serves as a comprehensive guide for implementing and assessing a RAG pipeline using LlamaIndex.

---

### [Getting_Started_with_OpenAI_Evals.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/Getting_Started_with_OpenAI_Evals.ipynb)
**Source:** openai/openai-cookbook

The blog post announces OpenAI Evals, a new framework designed for evaluating large language models (LLMs) and applications built on them. It includes an open-source registry of evaluation tasks (evals) that assist in measuring output quality against ideal responses. The post emphasizes the significance of robust evaluations to enhance application reliability, particularly with continuous model upgrades like GPT-4. It outlines two main eval types: validation logic and model grading, with the latter allowing models to judge their responses. Additionally, it presents templates for creating evals, including Basic and Model-Graded varieties, and details setup instructions for utilizing the framework, as well as leveraging GPT-4 for synthetic data generation. The running of evals is facilitated through the `oaieval` CLI, enabling users to assess model performance systematically.

---

### [How_to_eval_abstractive_summarization.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/How_to_eval_abstractive_summarization.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses various evaluation techniques for abstractive summarization tasks, focusing on methods like ROUGE, BERTScore, and a novel approach using Large Language Models (LLMs) as evaluators. Traditional metrics such as ROUGE and BERTScore offer reliable but sometimes inadequate assessments of summary quality, often lacking correlation with human evaluations.

The post introduces G-Eval, a method leveraging GPT-4 for reference-free summarization evaluation based on criteria like relevance, coherence, consistency, and fluency. This approach allows for scalable assessment without needing human reference summaries, making it useful for diverse datasets. The analysis includes an example comparing generated summaries against a reference summary, highlighting the effectiveness of LLMs in scoring and the need for integrated evaluation frameworks combining multiple metrics for better accuracy in summarization quality assessment.

---

### [How_to_evaluate_LLMs_for_SQL_generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/How_to_evaluate_LLMs_for_SQL_generation.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a systematic framework for testing and evaluating large language models (LLMs) specifically for SQL generation. It highlights the inherent nondeterminism of LLMs, which complicates consistency in production environments. Key features of the framework include:

1. **Unit Testing**: Focuses on individual components through tests for schema validity and syntactic correctness of SQL statements.
2. **Evaluation Metrics**: Establishes methods for quantitative assessment of model performance.
3. **Runbook Documentation**: Maintains a historical record of evaluations for tracking progress and regression.

The demonstration involves a natural language to SQL use case, leveraging a specific dataset from Hugging Face. The process entails using different prompts to generate SQL, validating outputs with unit tests, and assessing query relevance against user requests. Overall, the approach is adaptable for various LLM applications beyond SQL generation.

---

### [mcp_eval_notebook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/use-cases/mcp_eval_notebook.ipynb)
**Source:** openai/openai-cookbook

The blog post details an evaluation of the performance of two models, `gpt-4.1` and `o4-mini`, in answering questions about the `tiktoken` GitHub repository using OpenAI’s Evals framework with a custom dataset. Key announcements include the setup of an in-memory dataset consisting of Q&A pairs and the use of both LLM-based and Python MCP-based graders for robust evaluation.

The evaluation demonstrated that while `gpt-4.1` was designed not to utilize the MCP tool, resulting in poorer performance, `o4-mini` was able to call the MCP tool and performed better, despite a single failure due to not using the tool in one instance. The post emphasizes best practices for reproducible evaluations and suggests next steps such as expanding the dataset and automating reporting for further insights.

---

### [ft_retrieval_augmented_generation_qdrant.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/fine-tuned_qa/ft_retrieval_augmented_generation_qdrant.ipynb)
**Source:** openai/openai-cookbook

This blog post provides a comprehensive guide on fine-tuning OpenAI models, specifically the gpt-3.5-turbo, for Retrieval Augmented Generation (RAG) using the Qdrant vector search engine and Few-Shot learning techniques. It emphasizes the importance of reducing hallucinations in model outputs and improving performance for specific use-cases. 

The process includes setting up the environment, preparing the SQuADv2 dataset, and implementing both zero-shot and few-shot learning techniques. The author highlights the methodology for fine-tuning models and evaluating their effectiveness, introducing key concepts like zero-shot learning, few-shot learning, and the role of Qdrant in enhancing the retrieval process. Overall, this serves as a practical resource for practitioners aiming to optimize OpenAI models for specific applications.

---

### [gpt-5_new_params_and_tools.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/gpt-5_new_params_and_tools.ipynb)
**Source:** openai/openai-cookbook

OpenAI has launched the GPT-5 series with enhanced developer controls and features aimed at improving the customization of model outputs. Key announcements include:

1. **Verbosity Parameter**: Users can adjust response length and detail with settings for low, medium, and high verbosity, facilitating efficient output generation without altering prompts.

2. **Freeform Function Calling**: This feature allows the model to emit raw text payloads—like Python scripts or SQL queries—directly to custom tools, enhancing flexibility for various runtime environments.

3. **Context-Free Grammar (CFG)**: GPT-5 now supports CFG, enabling precise output conformity to specified syntax, useful for various applications including SQL dialect compatibility.

4. **Minimal Reasoning**: Users can minimize latency by selecting a minimal reasoning setting for tasks that do not require lengthy explanations.

Developers are advised to update their OpenAI SDK and utilize the Responses API for optimal performance with these new features.

---

### [gpt-5_prompting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/gpt-5_prompting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces GPT-5, an advanced AI model that significantly enhances task performance, coding capabilities, and steerability, particularly for developer-focused applications. Key features emphasized include improved instruction adherence, optimized coding for software engineering, and new API functionalities. The post provides prompting strategies aimed at maximizing performance, highlighting the importance of balancing agentic eagerness—adjusting the model’s proactivity in decision-making—and employing the Responses API for better reasoned task flows. Additionally, GPT-5 excels in frontend app development, with specific frameworks and design principles recommended for effective implementation. Collaboration with AI code editor Cursor illustrates practical prompt tuning to benefit from GPT-5’s features. Overall, the guide encourages experimentation with these suggestions to achieve optimal results.

---

### [prompt-optimization-cookbook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/prompt-optimization-cookbook.ipynb)
**Source:** openai/openai-cookbook

The blog post announces the release of GPT-5 and introduces the **GPT-5 Prompt Optimizer**, designed to enhance prompt crafting for better alignment with agentic task performance, coding, and steerability. Users can leverage the optimizer to migrate and improve existing prompts, addressing common failures such as contradictions and unclear instructions.

The post demonstrates the optimizer's application through a coding example, showing how baseline prompts can lead to variable performance due to ambiguous guidelines. Enhanced prompts, refined using the optimizer, yield more consistent and precise outputs. The blog highlights a comparative evaluation of scripts generated with baseline and optimized prompts, showcasing improvements in accuracy, runtime, and memory efficiency. Ultimately, the GPT-5 Prompt Optimizer aids users in achieving optimal results while emphasizing the importance of customized prompting strategies in working with large language models.

---

### [prompt_personalities.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/prompt_personalities.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the concept of shaping an AI agent's personality through system instructions, enhancing response style, tone, and detail levels. Key personality types include:

1. **Professional** – Delivers polished, precise responses suitable for enterprise contexts.
2. **Efficient** – Focuses on concise, direct answers ideal for technical tasks.
3. **Fact-Based** – Provides grounded, corrective feedback, emphasizing clarity and evidence-based responses.
4. **Exploratory** – Encourages knowledge sharing and curiosity with engaging explanations.

Each personality is designed to align with specific use cases while maintaining task specificity. The post emphasizes the importance of defining personality at the system prompt level to enhance consistency, reliability, and user satisfaction in AI interactions. Effective implementation supports a more predictable and trustworthy operational environment.

---

### [databricks_mcp_cookbook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/mcp/databricks_mcp_cookbook.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the development of a supply-chain copilot using the OpenAI Agent SDK and Databricks MCP servers. The solution integrates structured and unstructured data to offer real-time insights and proactive recommendations regarding inventory, manufacturing delays, and workflow adjustments. Key features include querying capabilities for various data types, time-series forecasting, and graph-based optimization of raw material transport, all through a conversational interface.

The architecture utilizes the OpenAI Agent SDK to interface with Databricks components. Users can deploy a template that answers specific supply chain inquiries, allowing for quick access to crucial operational data. Additionally, the cookbook provides detailed steps for configuring the Databricks environment, integrating MCP servers, and building the agent, ensuring tailored data access and functionality for supply chain management. With this system, stakeholders can enhance decision-making and mitigate risks in their supply chain operations.

---

### [mcp_tool_guide.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/mcp/mcp_tool_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the hosted Model Context Protocol (MCP) tool within the Responses API, designed to streamline the integration of external services into applications. By configuring the model to communicate directly with MCP servers, it eliminates multiple network hops, thus reducing latency and simplifying orchestration for tasks like e-commerce transactions, dev-ops, and notifications. Use cases highlighted include adding items to shopping carts, opening GitHub issues from Sentry errors, and sending SMS notifications via Twilio. Best practices for utilizing MCP include filtering tool exposure, caching information to minimize requests, and leveraging concurrent tool use for efficiency. Furthermore, several scenarios illustrate how MCP can enhance functionality across diverse applications while maintaining optimal performance and reducing payload size. Overall, MCP aims to facilitate easier and quicker API interactions in various domains, particularly in commerce and data management.

---

### [Vision_Fine_tuning_on_GPT4o_for_Visual_Question_Answering.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/multimodal/Vision_Fine_tuning_on_GPT4o_for_Visual_Question_Answering.ipynb)
**Source:** openai/openai-cookbook

OpenAI has launched **Vision Fine-Tuning on GPT-4o**, a multimodal fine-tuning capability allowing developers to enhance GPT-4o’s image understanding using both images and text inputs. This feature supports various applications, including visual question answering, advanced visual search, and object detection for autonomous systems. The initiative aims to customize models for specific industries and tasks, showcasing an effective approach to answering context-aware questions based on visual content.

The blog outlines a practical guide for developers using a dataset of images of books and their corresponding questions and answers. This includes details on data preparation, model training processes, and the importance of structured training examples. The vision fine-tuning supports various domains, emphasizing its potential in manufacturing, education, and healthcare. For further details, the full documentation is available.

---

### [image_evals.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/multimodal/image_evals.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces methodologies for evaluating image generation and editing models, emphasizing the need for structured evaluations in real-world applications like design and marketing. Key features focus on ensuring models meet specific workflow requirements through metrics of quality, controllability, and usability. The guide outlines a vision eval system categorized into image generation and editing evaluations, human feedback alignment, and strategies for building evaluation criteria.

The proposed "vision eval harness" standardizes evaluations, creating comparable results across different prompts and models. This system employs three main plug-ins: test cases for inputs, runners for generating outputs, and graders for evaluating results. The post provides practical coding examples and describes a reusable grader interface to assess images effectively, enhancing overall reliability in image-focused workflows.

---

### [Using_chained_calls_for_o1_structured_outputs.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/o1/Using_chained_calls_for_o1_structured_outputs.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the limitations and enhancements of the newly released OpenAI o1 reasoning models. Initially, these models lack support for structured outputs, leading to challenges in generating reliable JSON responses from prompts. The article presents two methods to effectively prompt the o1 models, particularly the o1-preview, to return valid JSON formats. 

The first method involves explicitly prompting the model to extract company information from a given source and format it in JSON, although this requires manual post-processing for type safety. The second method introduces a solution using structured outputs by chaining requests to the gpt-4o-mini model for better data handling. This approach allows for more reliable type safety and simplifies the integration of responses into existing workflows, though it requires two API calls.

---

### [Using_reasoning_for_routine_generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/o1/Using_reasoning_for_routine_generation.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the process of transforming complex customer service knowledge base articles into structured routines that can be easily executed by large language models (LLMs). This involves simplifying the information into clear, step-by-step actions that reduce ambiguity and enhance automated reasoning. The tool o1 has shown ability to convert these articles into executable routines without extensive training, utilizing a zero-shot approach that minimizes prompting efforts. The post also highlights the generation of function definitions for actions and the use of clear conditional logic, which are crucial for handling customer interactions effectively. Future steps include integrating these routines into customer service systems and conducting evaluations to ensure compliance and model response quality before deployment.

---

### [Secure_code_interpreter_tool_for_LLM_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/object_oriented_agentic_approach/Secure_code_interpreter_tool_for_LLM_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a flexible method for dynamically generating code tools using the o3-mini model, enabling LLM agents to interact more creatively and effectively with user prompts. This approach allows for runtime code generation rather than relying solely on predefined functions, which is beneficial for tasks such as data analysis and machine learning.

Key features include:
- The ability of LLMs to autonomously create and execute code in response to user queries.
- Details on setting up a secure Dockerized environment for executing generated code while preventing unwanted access.
- The definition of two agent types: a FileAccessAgent for reading data and a PythonCodeExecAgent for generating and executing code.

The post provides a comprehensive guide on creating customized code interpreters, promoting adaptability and security in AI applications.

---

### [receipt_inspection.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/partners/eval_driven_system_design/receipt_inspection.ipynb)
**Source:** openai/openai-cookbook

The blog post titled "Eval-Driven System Design: From Prototype to Production" provides a comprehensive guide on utilizing evaluations (evals) to develop production-grade autonomous systems, particularly in scenarios with limited labeled data. It addresses common challenges faced by ML/AI professionals and encourages a methodical approach to system design.

Key steps in the process include: 
1. **Start Small** with initial labeled data.
2. **Build Incrementally** to develop a minimum viable system.
3. **Align with Business Metrics** to ensure improvements are impactful.
4. **Iterate Using Eval Scores** for continuous refinement of models.
5. **Integrate Quality Assurance** practices for long-term system efficacy.

The guide is particularly relevant for ML/AI engineers and solution architects, offering modular, executable code samples for practical application. An illustrated use case focuses on automating receipt analysis, showcasing how to efficiently handle real-world data by leveraging eval-driven iterations.

---

### [autonomous_agent_retraining.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/partners/self_evolving_agents/autonomous_agent_retraining.ipynb)
**Source:** openai/openai-cookbook

The blog post presents a "cookbook" for developing self-evolving autonomous agents, specifically focusing on a retraining loop that enhances performance through feedback. Targeted primarily at ML/AI engineers and solution architects, it emphasizes an application in regulated healthcare documentation, which requires high accuracy and compliance. Key learnings include diagnosing performance gaps, utilizing prompt optimization strategies, and creating a self-healing workflow combining human evaluations with automated assessments. The process begins with a baseline agent, which undergoes evaluations to gather feedback and iterates improvements, ultimately improving performance over time. The OpenAI Evals platform is featured as a tool for iterative prompt optimization, allowing for seamless feedback collection and enhancement of agent capabilities. The approach aims to streamline the regulatory document drafting process, linking academic and practical applications for better efficiency in critical healthcare tasks.

---

### [reasoning_function_calls.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/reasoning_function_calls.ipynb)
**Source:** openai/openai-cookbook

OpenAI has introduced function calling capabilities using reasoning models, such as o3 and o4-mini, designed to follow logical chains of thought for complex tasks. These models excel in problem-solving, coding, and multi-step planning. The implementation via the Responses API simplifies interaction compared to traditional chat models, although developers must be aware of nuances, particularly with context token consumption due to hidden reasoning tokens.

The post details the process of invoking function calls, custom tool integration, and handling multiple function call workflows. It discusses the importance of maintaining conversation history and reasoning context, especially when managing complex user queries. Overall, the article emphasizes that effectively orchestrating interactions with reasoning models can support intricate use cases, expanding the potential applications of OpenAI's technology.

---

### [GPT_finetuning_with_wandb.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/GPT_finetuning_with_wandb.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a new integration between Weights & Biases (W&B) and OpenAI's API to facilitate the fine-tuning of ChatGPT-3.5 and GPT-4 models. Users can now track their experiments, models, and datasets more effectively with a simple command: `openai wandb sync`. The post outlines a practical example where ChatGPT-3.5 is fine-tuned using a legal dataset to enhance its performance in specific legal tasks.

Detailed steps are provided for dataset preparation, formatting, and validation, alongside key points about hyperparameter settings and estimated costs based on the number of tokens. Additionally, the blog emphasizes the logging capabilities of W&B for ongoing fine-tune jobs, ultimately enhancing the user's project management experience when utilizing OpenAI’s models.

---

### [How_to_automate_S3_storage_with_functions.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/How_to_automate_S3_storage_with_functions.ipynb)
**Source:** openai/openai-cookbook

The blog post details how to automate interactions with Amazon S3 buckets using OpenAI's ChatGPT functions. It offers a practical code example that includes various capabilities such as listing S3 buckets, uploading or downloading files, and searching for specific files within buckets. To utilize this, users must set up an environment with appropriate AWS credentials and OpenAI API keys. 

The provided functions allow integration of user commands with S3 operations, enabling a conversational flow where the chatbot can clarify user requests and execute corresponding functions. Key functionalities include listing buckets, managing objects in S3, and answering user queries effectively, ensuring the model remains focused on S3-related tasks. The blog highlights the importance of proper use of the ChatGPT API for executing these actions seamlessly.

---

### [Visualizing_embeddings_in_wandb.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/Visualizing_embeddings_in_wandb.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the process of visualizing embeddings using Weights & Biases (W&B), a machine learning platform employed by teams like OpenAI to enhance model development. It outlines how to log data by creating a W&B Table that includes original data and embeddings derived from a dataset containing fine food reviews. Each embedding is represented in individual columns, enabling detailed analysis. The post also demonstrates how to visualize these embeddings in a 2D space using dimension reduction algorithms such as PCA, UMAP, and t-SNE, specifically guiding users to render the data as a "Combined 2D Projection" after logging. For further details, users can visit the W&B project link provided.

---

### [Getting_started_with_azure_ai_search_and_openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/azuresearch/Getting_started_with_azure_ai_search_and_openai.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines how to utilize Azure AI Search as a vector database integrated with OpenAI embeddings. Key announcements include the use of Azure AI Search (formerly Azure Cognitive Search) for creating rich search experiences over various content types. The post provides a thorough guide on prerequisites, such as having an Azure AI Search service and OpenAI credentials.

It details the steps for configuring authentication, setting up the Azure Search client, creating a search index with vector and semantic search capabilities, and uploading pre-computed embeddings from Wikipedia articles. The content also covers performing both pure vector and hybrid searches, showcasing the use of semantic ranking features to enhance search relevance. Code snippets are provided throughout for practical implementation. This comprehensive approach allows developers to create advanced search functionalities leveraging Azure’s AI capabilities.

---

### [Philosophical_Quotes_AstraPy.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_AstraPy.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a quickstart guide to creating a "philosophy quote finder & generator" using OpenAI's vector embeddings and DataStax Astra DB as a vector store. Key features include:

1. **Setup**: Installation and connection to Astra DB and OpenAI API.
2. **Indexing and Storage**: Quotes from philosophers are converted into embedding vectors for efficient searching and stored along with metadata.
3. **Quote Search Engine**: Users can search for quotes similar in content to a provided quote using vector similarity searches, with options to filter by author or tags.
4. **Quote Generation**: The system can generate new quotes based on a topic or input example by leveraging previously indexed quotes, demonstrating the use of OpenAI's language model for creative tasks.

The blog emphasizes the ease of integrating vector search and API usage with Astra DB for building powerful text-based applications.

---

### [Philosophical_Quotes_CQL.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_CQL.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a quickstart guide for developing a "philosophy quote finder & generator" utilizing OpenAI's vector embeddings and Apache Cassandra (or DataStax Astra DB) as a data persistence layer. Users will learn to index quotes from philosophers as vector embeddings, create a search engine for these quotes, and generate new quotes based on similar inputs. Key features include using Cassandra Query Language (CQL) for database interactions, implementing approximate nearest neighbor searches for semantic similarity, and integrating OpenAI's API for generating embeddings. The tutorial includes code snippets for setting up database connections, inserting vectors, and querying the database, emphasizing a hands-on approach. Overall, it showcases the ease of combining vector search capabilities with powerful embedding models to facilitate advanced quote searching and generation.

---

### [Philosophical_Quotes_cassIO.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_cassIO.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the CassIO quickstart tutorial for creating a "philosophy quote finder and generator" using OpenAI's vector embeddings and Apache Cassandra or DataStax Astra DB. Key components include:

1. **Workflow Overview**: The tutorial guides users through evaluating and storing vector embeddings of philosophical quotes to build a search engine and quote generator.
2. **Indexing and Search**: Quotes are indexed as embedding vectors, enabling semantic similarity search. Users can query for similar quotes using vector space techniques.
3. **Quote Generation**: The system can generate new quotes based on existing ones by utilizing OpenAI's Language Model (LLM) functionality.
4. **Performance Optimization**: The post discusses optional partitioning strategies for enhancing query performance based on author-specific queries.

This comprehensive guide demonstrates foundational practices in utilizing vector search capabilities with Cassandra and OpenAI’s embeddings.

---

### [elasticsearch-retrieval-augmented-generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/elasticsearch/elasticsearch-retrieval-augmented-generation.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a comprehensive guide on implementing Retrieval Augmented Generation (RAG) using Elasticsearch and OpenAI's GPT models. Key steps include indexing the OpenAI Wikipedia vector dataset into Elasticsearch, encoding user questions with OpenAI's embeddings, and conducting semantic searches against the index. The tutorial details the installation of necessary packages, the creation of an Elasticsearch index, and the indexing of data in bulk.

Additionally, it describes performing k-nearest neighbors (kNN) searches to retrieve relevant documents and using OpenAI's Chat Completions API to generate responses based on those documents. The approach allows leveraging the strengths of both Elasticsearch for retrieval and OpenAI's models for generative tasks without requiring model training. The post encourages users to adapt and customize the method for their specific applications.

---

### [elasticsearch-semantic-search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/elasticsearch/elasticsearch-semantic-search.ipynb)
**Source:** openai/openai-cookbook

The blog post details the integration of Elasticsearch with OpenAI for semantic search, specifically through the indexing of the OpenAI Wikipedia vector dataset. Key steps include installing necessary packages, connecting to an Elastic Cloud deployment, and indexing the dataset with appropriate mappings using dense vectors for effective kNN search. The authors demonstrate how to read data from a CSV file into a Pandas DataFrame, create the Elasticsearch index, and efficiently index data in batches using the Bulk API. Users learn to encode queries with OpenAI's embeddings endpoint and execute search queries against the index. The post concludes by encouraging experimentation with different queries and data, also linking to a related notebook focused on retrieval-augmented generation using both tools.

---

### [Getting_started_with_kusto_and_openai_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/kusto/Getting_started_with_kusto_and_openai_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the process of using Azure Data Explorer (Kusto) as a vector database for AI embeddings, specifically with OpenAI's embeddings. Key announcements include:

1. **Implementation Steps**: A detailed guide on employing OpenAI precomputed embeddings, storing them in Kusto, and converting text queries into embeddings for semantic search.
  
2. **Prerequisites**: Setting up an Azure Data Explorer instance and acquiring OpenAI API credentials are essential for executing the outlined processes.

3. **Storage and Retrieval**: Instructions for downloading precomputed embeddings, creating Kusto tables, and executing cosine similarity searches to find semantically similar content.

4. **Functionality**: The use of OpenAI's and Azure's embedding models to generate search vectors, along with utilizing Kusto's series-cosine-similarity function for retrieval of relevant results.

This comprehensive guide enhances the integration of AI embeddings with Azure's data handling capabilities for advanced search applications.

---

### [Filtered_search_with_Milvus_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/milvus/Filtered_search_with_Milvus_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

This blog post discusses a notebook on using Milvus and OpenAI to perform filtered searches for movies. The process begins with generating embeddings from movie descriptions using OpenAI's embedding service and then storing these embeddings in Milvus, a vector database. The dataset used contains over 8,000 movie entries from HuggingFace. Key setup steps include installing necessary libraries, launching the Milvus instance, configuring global parameters for connection and embedding, and creating a collection to hold the movie data. After embedding the movie descriptions, the post details how to perform a query with filtering to find relevant movies based on specific criteria. The example concludes with querying for a movie featuring a "fluffy animal" released before 2019 and rated "PG".

---

### [Getting_started_with_Milvus_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/milvus/Getting_started_with_Milvus_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses integrating Milvus, a vector database, with OpenAI to create an efficient book recommendation system using embeddings. The process begins with downloading required libraries and setting up a Milvus service instance. Using a dataset from Hugging Face containing over one million book title-description pairs, the author demonstrates how to generate embeddings using OpenAI's model and store them in Milvus.

Key components include configuring connection parameters, setting up a collection schema within Milvus, and indexing the data. The embeddings are generated in batches and inserted into the Milvus collection. The final feature demonstrated is querying the database, which allows users to search for relevant books based on natural language queries. This system showcases the effectiveness of using embeddings for improved search capabilities in large datasets.

---

### [semantic_search_using_mongodb_atlas_vector_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/mongodb_atlas/semantic_search_using_mongodb_atlas_vector_search.ipynb)
**Source:** openai/openai-cookbook

This blog post provides a detailed tutorial on building a semantic search application utilizing OpenAI and MongoDB Atlas vector search. Key steps include setting up a MongoDB Atlas cluster, generating embeddings using OpenAI’s API, and creating and storing those embeddings within a MongoDB collection. The tutorial uses the "sample_mflix" dataset, focusing on the "plot" field of each movie document.

It outlines the creation of a vector search index, which facilitates semantic search using approximate nearest neighbors (KNN) for retrieving semantically similar movie plots. The tutorial also covers querying the data to return results based on query similarity rather than keyword matching. The instruction is aimed at developers interested in enhancing search functionalities with AI-driven semantic understanding.

---

### [neon-postgres-vector-search-pgvector.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/neon/neon-postgres-vector-search-pgvector.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on leveraging Neon Serverless Postgres as a vector database for OpenAI embeddings. Key steps include generating embeddings with the OpenAI API, storing them in a Neon database, and using the `pgvector` extension for performing vector similarity searches. Essential prerequisites are outlined, such as creating a Neon database, obtaining an OpenAI API key, and installing necessary Python packages. The post details the process of connecting to the Neon database, loading pre-computed Wikipedia article embeddings, creating a table for vector storage, and executing similarity search queries. Users can query based on either title or content embeddings, with demonstrated examples for each. This guide serves as a practical resource for integrating vector similarity search capabilities in PostgreSQL using OpenAI embeddings.

---

### [Using_Pinecone_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/pinecone/Using_Pinecone_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses utilizing Pinecone for embedding search, outlining a practical flow for downloading, embedding, indexing, and searching data within vector databases. It emphasizes the increasing demand for vector databases to manage unstructured data, essential for applications like chatbots and recommendation systems.

Key features highlighted include:
- Introduction and definition of vector databases, underscoring their role in storing and managing embedding vectors.
- A step-by-step demo flow using Python, which encompasses setup, data loading, Pinecone configuration, index creation, and executing search queries.
- The ability to create distinct namespaces for embeddings, enhancing organization and search capabilities within the index.

Overall, the post serves as a guide for understanding and implementing vector databases with a focus on Pinecone for effective embeddings management.

---

### [Using_Redis_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/redis/Using_Redis_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the implementation of Redis as a vector database for embeddings search, crucial for applications such as chatbots and topic modeling. It defines vector databases as tools for managing and searching embedding vectors, which have gained traction due to AI advancements in handling unstructured data. The tutorial walks through a flow that includes setting up the Redis-Py client, indexing data, and executing search queries. Key features of Redis highlighted include its vector storage and search capabilities through the RediSearch module, which enables secure and scalable embeddings usage for enterprises. Additionally, the blog illustrates how to perform semantic searches using a hybrid approach that combines vector and full-text searches with practical coding examples. The post emphasizes the ease of using Redis with Docker and the importance of vector databases in enhancing performance and security for production use cases.

---

### [Using_Typesense_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/typesense/Using_Typesense_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses leveraging Typesense for embeddings search, guiding users through a process of data downloading, embedding, indexing, and searching using vector databases. It explains that vector databases are specifically designed to store, manage, and search embedding vectors, which have gained prominence due to their effectiveness in various AI applications including natural language processing and image recognition. 

Key aspects include:
- A demo flow that involves setting up Typesense, loading data, indexing it, and conducting search queries.
- Detailed instructions on setting up Typesense locally through Docker, along with creating a collection and indexing vectors from a dataset of Wikipedia articles.
- An example of performing nearest-neighbor searches based on embedded queries.

The post concludes by encouraging users to explore more complex use cases with embeddings, highlighting the potential of vector databases in secure and scalable environments for enterprises.

---

### [Using_Weaviate_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/Using_Weaviate_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a workflow for utilizing Weaviate, a vector database, to conduct embeddings searches. It highlights the growing significance of vector databases in managing and searching embedding vectors derived from various forms of unstructured data, facilitating applications like chatbots and topic modeling in secure, scalable environments.

Key features discussed include:

1. Integration with OpenAI for generating embeddings.
2. A detailed demo flow covering data setup, loading, indexing, and searching within Weaviate.
3. Options for self-hosted or cloud deployment of Weaviate.
4. The provision for automated vectorization of unwielded data using Weaviate’s built-in OpenAI module.
5. Assurance of performance and scalability for embedding use cases.

This post serves as a foundational guide for users looking to implement vector databases effectively.

---

### [generative-search-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/generative-search-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines how to integrate Weaviate with the Generative OpenAI module for enhanced search capabilities. It emphasizes that users should have their data already imported into Weaviate and an OpenAI API key configured in their environment variables. Key features discussed include constructing generative search queries similar to standard semantic searches, utilizing the `with_generate()` function to generate responses either per item or as a grouped task. Two examples illustrate this functionality: summarizing individual articles and explaining commonalities among a group of articles. The post concludes by encouraging users to explore further examples for complex use cases.

---

### [getting-started-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/getting-started-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses how to utilize Weaviate, an open-source vector search engine, in conjunction with the OpenAI text2vec module for vectorizing non-vectorized data. It outlines a step-by-step workflow for setting up a Weaviate instance, connecting it with an OpenAI API key, configuring the data schema, and importing data, illustrating the automated generation of vector embeddings.

Key features include:
- **Easy Vectorization**: The integration eliminates the need for manual data vectorization.
- **Deployment Options**: Users can deploy Weaviate in various setups, including self-hosted, SaaS, or hybrid configurations.
- **Client Libraries**: Weaviate supports multiple programming languages, and offers a REST API for flexibility.
- **Search Functionality**: The system allows efficient semantic searches on embedded data.

By following the instructions, users can effectively implement vector databases and enhance their applications with embeddings for advanced search capabilities.

---

### [hybrid-search-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/hybrid-search-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on using Weaviate with the OpenAI vectorization module for Hybrid Search. It outlines the steps to set up a Weaviate instance, configure data schema, and perform data import while automatically generating vector embeddings. Key highlights include:

- **Hybrid Search Introduction:** The blog explains Hybrid Search, combining vector search with BM25 search, useful for applications like chatbots and topic modeling.
- **Weaviate Features:** Weaviate is an open-source vector search engine that optimizes query performance with KNN algorithms and supports multiple deployment options (self-hosted, SaaS, hybrid).
- **OpenAI Integration:** The text2vec-openai module allows seamless vectorization without manual intervention, requiring only an OpenAI API key and schema configuration.
- **Demo Flow:** A step-by-step demonstration is provided, including instance creation, schema configuration, data import, and query execution.

The guide concludes by encouraging exploration of more complex use cases using Weaviate's capabilities.

---

### [question-answering-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/question-answering-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the implementation of question answering capabilities in Weaviate using the OpenAI Q&A module. It details a structured approach for setting up a Weaviate instance, configuring schemas for data, and importing non-vectorized data that Weaviate automatically vectorizes via OpenAI. Key features include options for deployment (self-hosted, SaaS, and hybrid options) and support for various programming languages through client libraries. The workflow involves establishing an OpenAI API key, defining a schema for data embedding, and importing datasets like the Simple Wikipedia. The conclusion emphasizes the ease of setting up vector databases for question answering and encourages users to explore additional use cases. The blog serves as a guide for those looking to leverage Weaviate's vector search capabilities in conjunction with OpenAI's technology.

---

### [Filtered_search_with_Zilliz_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/zilliz/Filtered_search_with_Zilliz_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

The blog post details a notebook demonstration on using OpenAI's embedding capabilities and Zilliz's database for enhancing movie searches. It starts by providing an overview of the necessary libraries, including `openai` for embeddings and `pymilvus` for Zilliz interactions. The author sets up a collection in Zilliz, defining schema fields for movie attributes like title, type, release year, rating, and description. The dataset used is from Hugging Face, featuring over 8,000 movie entries.

The main process involves embedding movie descriptions, inserting them into the Zilliz database in batches, and querying the database using a sample description and filter criteria. The query function retrieves and prints relevant movie details based on user-defined parameters. Overall, the post highlights the integration of AI embeddings and database functionality for improved movie search experiences.

---

### [voice_translation_into_different_languages_using_GPT-4o.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/voice_solutions/voice_translation_into_different_languages_using_GPT-4o.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the capabilities of OpenAI’s GPT-4o, which introduces an audio modality enabling direct translation and dubbing of audio files in a single step. Specifically, it provides a guide on translating English audio files into Hindi seamlessly, eliminating the need for multi-step processes (transcription, translation, and dubbing). Key features include:

1. **Audio Processing**: Transcription and dubbing can be completed with one API call.
2. **Quality Evaluation**: Users can assess translation quality via BLEU and ROUGE scores.
3. **Improvement Strategies**: Suggestions are provided for optimizing results by refining transcriptions and adjusting prompts.
4. **Terminology Clarification**: A distinction between "language" and "script" is explained, emphasizing their importance in translation tasks.

This process enhances accessibility to global audiences, making content translation easier for various industries.