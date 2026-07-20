---
title: OpenAI Unleashes Next-Gen AI Innovations for Developers
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 07-20"
---
**Meta-Summary of Blog Post Summaries**

OpenAI’s recent blog posts collectively showcase significant advancements in AI model capabilities, developer tooling, workflow integrations, and evaluation methodologies across both text and multimodal domains. Below are the most important trends and announcements:

### 1. Advanced Model Releases and Features

- **GPT-5 Series & Reasoning Models:** The launch of GPT-5 and enhanced reasoning models (e.g., o3, o4-mini, o1-preview) delivers improved performance in agentic tasks, coding, and steerability. New features include output verbosity control, freeform function calling, context-free grammars for structured outputs, and minimal-reasoning settings for lower latency.
- **Vision Fine-Tuning and Multimodality:** Introduction of Vision Fine-Tuning on GPT-4o enables developers to customize models on both images and text, supporting advanced visual question answering and multimodal applications like direct audio translation and multimodal RAG pipelines.

### 2. Powerful and Flexible APIs/SDKs

- **Assistants & Agents APIs:** The new Assistants API and Agents SDK facilitate stateful, context-aware AI experiences with multi-turn workflows, memory management, orchestrated handoffs, and modular routines. Convergence with Python SDK integration and support for async operations further simplifies development.
- **Enhanced Tool Use:** Expanded tool integrations—ranging from code interpreters and custom function calling to direct integration with external APIs via the MCP (Model Context Protocol)—enable richer, more complex agent workflows, including dynamic tool generation and custom code execution.
- **Control Over Output & Personality:** Features like personality system prompts, context management (trimming/summarization), and prompt optimization toolkits empower developers to tailor model outputs more precisely and reliably.

### 3. Retrieval-Augmented Generation (RAG) & Vector Databases

- **Ecosystem Expansions:** Detailed guides cover integrating OpenAI models with numerous vector stores (e.g., Azure AI Search, Pinecone, Weaviate, Milvus, MongoDB, Redis, Typesense, Zilliz, Cassandra, AstraDB, Neon, ElasticSearch, and Google BigQuery) to implement scalable, retrieval-augmented generation and semantic search workflows.
- **Multimodal & Hybrid RAG:** New methodologies merge text and vision (e.g., CLIP embeddings + GPT-4 Vision), hybrid search combining vector and traditional queries, and techniques for leveraging customized or filtered searches for domain-specific retrieval.

### 4. Enterprise Connectors and Action Libraries

- **Pre-built Integrations:** OpenAI released GPT Action Libraries for prominent enterprise platforms (Box, Gmail, Google Ads, Jira, Notion, Outlook, Salesforce Service Cloud, SharePoint, Snowflake, AWS Redshift, and SQL databases), enabling natural language interactions, task automation, and data retrieval directly within business workflows.
- **Middleware & Serverless Patterns:** Practical tutorials guide the use of AWS Lambda, Azure Functions, and Google Cloud Functions as secure action middleware, streamlining connection to cloud services and databases.

### 5. Evaluation, Fine-Tuning, and System Design

- **Robust Evaluation Frameworks:** OpenAI Evals, plugin integrations (e.g., Langfuse, Weights & Biases), and cookbook-style guides highlight best practices in model, agent, and workflow evaluation using custom metrics, automated graders (LLM-as-a-Judge), and offline/online instrumentation.
- **Fine-Tuning & Distillation:** Posts demonstrate fine-tuning for tasks like classification, RAG optimization, reasoning (including reinforcement fine-tuning in sensitive domains like life sciences), and distilling large models into cost-effective smaller ones.
- **Data Generation & Augmentation:** Solutions for high-quality synthetic data generation and embedding visualization advance model training and data enrichment pipelines.

### 6. Best Practices and Community Empowerment

- **Prompt & System Optimization:** A strong emphasis on prompt optimization, collaborative multi-agent prompt engineering, system personality design, and transition from reactive to proactive, memory-enabled agents.
- **Security, Compliance, and Moderation:** Comprehensive guides address content moderation using the Moderation API, memory lifecycle management, context compression, and logging best practices for secure, compliant, and efficient agent deployment.
- **Developer Empowerment:** Cookbook and quickstart series offer domain-specific solutions, hands-on code, and modular workflows, encouraging experimentation and swift adaptation to varied business and research needs.

### 7. Multimodal, Real-Time, and Industry-Specific Applications

- **Applied Use Cases:** Posts highlight real-world deployments—from supply-chain copilots integrating live data with analytics to automated research agents and domain-specific classification (e.g., food reviews, sports, regulatory document drafting).
- **Multilingual Capabilities:** New audio-in/audio-out functionalities and optimized transcription methods enhance support for multilingual and technical content.

---

**Summary:**  
OpenAI’s latest ecosystem developments focus on enabling developers and enterprises to build highly contextual, evaluable, and domain-tailored AI solutions. Key innovations include stateful and multi-modal agent APIs, scalable RAG with broad vector database support, robust fine-tuning/evaluation frameworks, and out-of-the-box productivity integrations. Strategic advancements in prompt/model control, memory, and workflow orchestration ensure AI systems are not only performant but also secure, reliable, and highly adaptable to evolving application landscapes.

## New Cookbook Recipes

### [Assistants_API_overview_python.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Assistants_API_overview_python.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the new Assistants API, an advanced evolution of the Chat Completions API designed to facilitate the creation of assistant-like experiences. Key features include:

1. **Stateful Conversations**: The API introduces `Assistants`, `Threads`, and `Runs` to manage conversation state, encapsulate functionalities, and perform actions respectively.
2. **Python SDK Compatibility**: The Python SDK has been updated to support the Assistants API, facilitating users to create assistants and manage threads interactively.
3. **Powerful Tools**: Assistants can utilize tools such as Code Interpreter, File Search, and custom Functions to enhance interaction and functionality.
4. **Asynchronous Operations**: The API operates asynchronously, allowing for efficient handling of multiple user requests simultaneously.
5. **Expanded Action Capabilities**: Unlike the Chat Completions API, the Assistants API permits multi-step tool usage and allows detailed tracking of actions through Runs and Steps. 

Overall, the Assistants API offers a robust framework for developers to build powerful, context-aware assistant experiences.

---

### [Build_a_coding_agent_with_GPT-5.1.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Build_a_coding_agent_with_GPT-5.1.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the development of a coding agent using the new GPT-5.1 model and the OpenAI Agents SDK. The agent is designed to create and refine applications based on user prompts, leveraging tools for code editing, command execution, and web searches. Key features include:

- Tools for editing files (`apply_patch`), executing shell commands (`shell`), and retrieving information (`web_search`).
- The ability to scaffold new projects and iteratively improve them through user feedback.
- Integration with the Context7 MCP server for up-to-date documentation.

The setup process involves defining instructions and a working environment, along with implementing a shell executor for command handling. Finally, the post outlines how the agent can create a NextJS application and subsequently enhance it using the apply_patch tool for code updates. The focus is on building a robust and responsive coding assistant capable of handling full codebases.

---

### [Classification_using_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Classification_using_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses text classification using embeddings for predicting food review scores from 1 to 5. It acknowledges that while fine-tuned models generally outperform embeddings in classification tasks, this example demonstrates the use of embeddings in a Random Forest Classifier. The dataset, structured into a training and testing set, was processed to convert embeddings from strings to arrays. The classifier achieved decent performance, particularly excelling at differentiating 5-star reviews, which are the most prevalent in the dataset. The post notes that predictions for 1-star and 5-star reviews were also easier, whereas categorizing 2 to 4 stars may benefit from additional data due to their inherent subjectivity. An accompanying precision-recall plot illustrates these findings.

---

### [Clustering.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Clustering.ipynb)
**Source:** openai/openai-cookbook

The blog post demonstrates the application of k-means clustering in Python to identify hidden patterns within a dataset of fine food reviews. The process begins with loading and preparing the dataset, which includes embedding conversion. A k-means model is then fitted to the data with four clusters defined. The results are visualized using t-SNE, illustrating distinct groupings.

Further analysis involves sampling reviews from each cluster and employing OpenAI's GPT-4 to generate thematic names for the clusters based on these samples. The author emphasizes the flexibility of cluster numbers: more clusters reveal detailed patterns, while fewer clusters highlight broader discrepancies. The use of OpenAI's tools significantly enriches the interpretation of the clustering results.

---

### [Creating_slides_with_Assistants_API_and_DALL-E3.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Creating_slides_with_Assistants_API_and_DALL-E3.ipynb)
**Source:** openai/openai-cookbook

The blog post highlights the capabilities of the new Assistants API (GPT-4) and DALL·E-3 for streamlined slide creation. It details a step-by-step process for generating a presentation without the need for traditional software like PowerPoint or Google Slides. Key features include the ability to upload data files, create visualizations based on data, and generate insights, all facilitated by the Assistant. The post showcases a fictional financial review example, explaining how to analyze quarterly profits and create corresponding visualizations. Additionally, it discusses integrating DALL·E-3 to create visually appealing title images. A Python script is provided for rendering slides using the python-pptx library, ultimately enabling users to produce a cohesive presentation autonomously. Key announcements emphasize the efficiency of the Assistants API in automating data analysis and visualization tasks in slide preparation.

---

### [Customizing_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Customizing_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on customizing OpenAI embeddings for specific tasks, showcasing a process that utilizes training data formatted as [text_1, text_2, label], where the label indicates similarity. It demonstrates how to generate 'custom embeddings' that can significantly improve model accuracy—reporting up to a 50% reduction in error rates in binary classification scenarios. The example uses 1,000 sentence pairs from the SNLI dataset to illustrate the methodology, including the generation of synthetic negative examples. The post outlines the crucial steps of data preprocessing, creating embeddings, calculating cosine similarities, and optimizing embedding matrices to enhance performance. The author details various code snippets and their functions, enabling practitioners to adapt the process to their own datasets effectively. Additionally, accuracy metrics for both training and test datasets are reported to show the improvements achieved through this optimization approach.

---

### [Data-intensive-Realtime-apps.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Data-intensive-Realtime-apps.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a practical guide for AI engineers to optimize OpenAI's Realtime API for data-intensive applications, particularly in speech-to-speech agents like NBA scouting. It highlights the nuances of handling large data volumes through well-crafted function calls, advocating for breaking down complex functions into smaller, more focused ones to enhance response efficiency.

Key strategies include optimizing real-time conversation context to prevent performance degradation, employing data filters to minimize response sizes, and utilizing flattened data structures for clearer processing. Engineers are also encouraged to follow up data-heavy function calls with hints to improve model accuracy. The guidance is illustrated using a hypothetical NBA scouting example, emphasizing the importance of thoughtful API design in achieving better performance and reliability in conversational agents.

---

### [Fine-tuned_classification.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Fine-tuned_classification.ipynb)
**Source:** openai/openai-cookbook

The blog post details the fine-tuning of the `babbage-002` classifier to distinguish between baseball and hockey. It utilizes the `fetch_20newsgroups` dataset, focusing on emails related to both sports. Key steps include data preparation, where a dataset of 300 examples is transformed into a format suitable for training, and the application of a data preparation tool that improves dataset structure and splits it into training and validation sets.

The fine-tuning process involves creating and submitting the training and validation files to the OpenAI API, achieving a remarkable accuracy of 99.6% on the validation set. The model demonstrates versatility by accurately classifying not just emails but also tweets related to the two sports. Overall, the post showcases a practical approach to fine-tuning a classifier for sports categorization.

---

### [Function_calling_with_an_OpenAPI_spec.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Function_calling_with_an_OpenAPI_spec.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the integration of OpenAPI specifications with GPT to enable intelligent API function calling. It is structured into two main sections: converting OpenAPI specs into function definitions and using the chat completions API to invoke these functions based on user prompts. 

Key features include the ability to list, create, retrieve, delete, and update events through defined API endpoints. The blog provides a detailed description of how JSON references are resolved and how function names and parameters are extracted from the OpenAPI spec. Additionally, it outlines a process for handling user instructions that involves chaining function calls, with a cap on the number of calls to enhance efficiency. 

The conclusion highlights potential future extensions, such as improved error handling and integrating with actual APIs for better functionality.

---

### [How_to_call_functions_with_chat_models.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_call_functions_with_chat_models.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the utilization of the Chat Completions API to enhance GPT models by integrating external functions. It introduces the `tools` parameter, which allows developers to specify functions inside the API, enabling the model to generate appropriate function arguments without executing them. Key features highlighted include the ability to force function usage or to prevent the model from utilizing functions through the `tool_choice` parameter.

The post includes detailed steps on how to generate function arguments based on prompts, how to execute functions with model-generated arguments, and an example employing a hypothetical weather API. Additionally, it introduces advanced capabilities in newer models, such as calling multiple functions in a single interaction. The piece emphasizes the importance of proper execution of function calls, particularly in scenarios like querying a database with generated SQL commands.

---

### [How_to_format_inputs_to_ChatGPT_models.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_format_inputs_to_ChatGPT_models.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines how to effectively format inputs for OpenAI's ChatGPT, specifically using the `gpt-3.5-turbo` and `gpt-4` models through their API. It emphasizes the required parameters for API calls, such as the model name and the structured `messages` input, which includes roles and content. Key features for customization are highlighted, including frequency and presence penalties, temperature settings, and the ability to submit function calls starting January 2024. The post also provides coding examples to demonstrate chat completions and practical tips for instructing the AI effectively. Additionally, it discusses methods for counting tokens, which is crucial for managing costs and response limits in API calls. Overall, it serves as a comprehensive guide for developers integrating ChatGPT into their applications.

---

### [How_to_use_moderation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/How_to_use_moderation.ipynb)
**Source:** openai/openai-cookbook

The blog post serves as a comprehensive guide on using the Moderation API, which is part of OpenAI's tools for ensuring content safety in applications. Key features highlighted include Input Moderation, which filters harmful content before it reaches the language model; Output Moderation, ensuring generated content aligns with community standards; and Custom Moderation, allowing bespoke filtering tailored to specific contexts. It discusses workflows integrating the Moderation API to check user inputs and model outputs for inappropriate content, demonstrating how asynchronous tasks can be employed to minimize latency. Importantly, it emphasizes the need to balance precision and recall in moderation thresholds to enhance user experience while safeguarding content integrity. Additional resources, such as the Guardrails Cookbook, are recommended for broader applications of content safety measures.

---

### [Leveraging_model_distillation_to_fine-tune_a_model.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Leveraging_model_distillation_to_fine-tune_a_model.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses OpenAI's model distillation process, which fine-tunes a smaller model (`gpt-4o-mini`) using outputs from a larger model (`gpt-4o`). This technique is aimed at enhancing efficiency, reducing latency, and cutting costs for specific tasks. The post details a project using a Kaggle dataset of wine reviews, specifically focused on predicting grape varieties based on various attributes.

Key components include analyzing the dataset, generating prompts for predictions, employing structured outputs for better model constraints, and evaluating performance differences between the original and distilled models. The results indicate that while `gpt-4o` outperforms `gpt-4o-mini` by 12.8% in accuracy, the fine-tuned model derived from `gpt-4o` significantly enhances the performance of `gpt-4o-mini`, achieving a **22% relative improvement**. This ensures accurate predictions while maintaining cost-effectiveness.

---

### [Optimize_Prompts.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Optimize_Prompts.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a newly developed prompt optimization system employing a collaborative multi-agent approach to enhance the effectiveness of AI prompts. Key features of this system include:

1. **Issue Detection**: Specialized agents—Contradiction Checker, Format Checker, Few-Shot Consistency Checker, and corresponding Rewriters—identify and address contradictions, format ambiguities, and inconsistencies in prompts.
2. **System Workflow**: Instructions for each agent outline their specific roles, methodology, and output requirements using structured data models.
3. **Evaluation**: The system utilizes OpenAI Evals to refine agent functions and ensure prompt clarity.
4. **Hands-On Cookbook**: A structured guide is provided, detailing the optimization process and examples, enabling users to enhance their prompts effectively using the open-source code.

The system aims to empower users in creating more reliable AI interactions by optimizing prompt quality.

---

### [Orchestrating_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Orchestrating_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post "Orchestrating Agents: Routines and Handoffs" discusses improving the performance of language models through the concepts of **routines** and **handoffs**. The author introduces routines as a series of instructions paired with necessary tools for executing tasks. A customer service routine is demonstrated, illustrating how language models can effectively manage tasks through simple loops that handle user interactions and function calls. 

Additionally, the post elaborates on **handoffs**, where one agent can transfer an ongoing conversation to another, facilitating dynamic task assignments. This is done through specially defined functions that inform the model when a handoff is needed. A sample repository, [Swarm](https://github.com/openai/swarm), is provided for practical implementation. Overall, the post emphasizes the flexibility and efficiency of orchestrating multiple agents in handling complex user interactions.

---

### [Question_answering_using_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Question_answering_using_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a two-step Search-Ask method designed to enhance GPT's ability to answer questions on unfamiliar topics, particularly for information outside its training cutoff, such as recent events or non-public documents. The method involves first searching a library of reference texts for relevant sections and then prompting GPT with both the question and the retrieved information.

The post argues against fine-tuning the model for knowledge acquisition, likening it to long-term memory that may misremember facts, while asserting that the Search-Ask approach serves as short-term memory, improving accuracy. It details the procedure for embedding-based searches, highlighting their utility, and discusses the cost implications of using GPT relative to embeddings. Additionally, it provides a practical example of how this method can facilitate current event inquiries, with detailed steps on preparing search data and executing queries.

---

### [Reinforcement_Fine_Tuning.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Reinforcement_Fine_Tuning.ipynb)
**Source:** openai/openai-cookbook

The blog post examines the application of reinforcement fine-tuning (RFT) to enhance the reasoning capabilities of OpenAI's `o4-mini` model, particularly in the life sciences domain for clinical outcomes prediction. It outlines a systematic approach for developers and ML practitioners familiar with OpenAI's APIs. Key steps include setting up the system, gathering a specialized dataset from Hugging Face, benchmarking the model's baseline performance, defining effective grading methods, and training the model. The guide emphasizes the importance of precise reasoning in critical fields like medicine and provides a structured methodology to improve model accuracy through RFT, explaining the potential of small datasets in achieving significant improvements. It stresses the need for careful evaluation to avoid common pitfalls in model training and highlights practical implementation strategies for model grading.

---

### [SDG1.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/SDG1.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses synthetic data generation using large language models (LLMs) as a solution for acquiring high-quality, diverse, and privacy-compliant data, particularly for training machine learning models. Key motivations for using synthetic data include overcoming privacy issues with human data, achieving structured and manipulable datasets, augmenting sparse categories, and addressing imbalanced datasets. 

The tutorial is divided into two parts, covering techniques such as generating structured CSV files with prompts, using Python programs to automate data generation, creating multitable datasets, and dealing with textual data generation challenges. It also highlights the importance of enhancing dataset diversity through clustering techniques, including K-means clustering and the elbow method to determine the optimal number of clusters.

The blog provides practical examples and code snippets to support data creation, emphasizing the potential of using higher quality synthetic data to fine-tune models effectively.

---

### [Search_reranking_with_cross-encoders.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Search_reranking_with_cross-encoders.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the use of cross-encoders in search result reranking to enhance the accuracy of semantic search beyond the capabilities of bi-encoders. It explains that while bi-encoding is faster and cost-effective, cross-encoding is more precise, making it suitable for refining results from a preliminary search. A hybrid approach is recommended: first using embeddings for initial ranking, then applying a cross-encoder like GPT for deeper analysis of top candidates. The notebook provides a practical example, detailing the setup and implementation of a GPT-powered cross-encoder for reranking academic papers. It emphasizes the importance of tailoring the model with domain-specific examples and suggests considering fine-tuning for more specialized use cases. The article encourages exploring community resources for similar implementations, highlighting its applicability to various domains.

---

### [Using_logprobs.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Using_logprobs.ipynb)
**Source:** openai/openai-cookbook

This blog post outlines the functionality and applications of the `logprobs` parameter in the Chat Completions API, which allows users to access the log probabilities of generated output tokens. Key features include:

1. **Classification Preparedness**: Log probabilities enable better confidence assessment in classification tasks, allowing for the establishment of confidence thresholds—essential for reliable model outputs.
2. **Q&A Evaluation**: The tool aids in determining if the retrieved information is sufficient to accurately answer a question, thereby mitigating hallucinations in responses.
3. **Autocomplete Functionality**: `Logprobs` can assist in suggesting the next word dynamically based on confidence levels.
4. **Token Highlighting and Perplexity Evaluation**: Users can visualize token choices and evaluate model confidence on various outputs.

Ultimately, the post showcases practical examples that illustrate how `logprobs` can enhance model performance in various applications.

---

### [Visualizing_embeddings_in_3D.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Visualizing_embeddings_in_3D.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a method for visualizing embeddings in 3D using Principal Component Analysis (PCA) to reduce their dimensionality from 1536 to 3. It utilizes a small dataset, `dbpedia_samples.jsonl`, which consists of 200 samples randomly selected from the DBpedia validation dataset. The process involves loading the dataset, querying embeddings using a specified model, and applying PCA for dimensionality reduction. The final step is the visualization of these reduced embeddings in a 3D plot, where data points are color-coded based on their respective categories. This approach allows for a clearer analysis of the embeddings' relationships and structures in a lower-dimensional space.

---

### [Whisper_correct_misspelling.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/Whisper_correct_misspelling.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses strategies for improving transcription accuracy, specifically for company names and product references. It outlines a dual approach using OpenAI’s Whisper model and GPT-4 for spell correction. The first method involves using a predefined list of correct spellings in the Whisper prompt to guide initial transcriptions. The second method leverages GPT-4's post-processing capabilities, making it more scalable for larger product lists.

Key findings include the effectiveness of GPT-4 in correcting misspellings, confirming its reliability over Whisper alone, although it comes with potential increases in cost and latency. The author provides practical steps for setting up the transcription process, including code snippets for implementation. Overall, these advancements aim to enhance the precision of transcriptions for technical terms and proper nouns.

---

### [context_personalization.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/agents_sdk/context_personalization.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses advancements in **context engineering** for AI agents, emphasizing the significance of transforming them from reactive assistants to adaptive collaborators through memory management. The **OpenAI Agents SDK** introduces the `RunContextWrapper`, which facilitates the creation of structured state objects that evolve over time, enabling personalized user experiences. Key features include the maintenance of long-term memory notes, which allow agents to remember user preferences and past interactions, enhancing context personalization. The tutorial focuses on developing a **travel concierge agent** that utilizes structured profiles and memory notes to tailor interactions. The blog outlines best practices for memory lifecycle management, including memory distillation, consolidation, and controlled forgetting to prevent data overload. This approach not only fosters user trust and satisfaction but also equips businesses with valuable insights into customer preferences, ultimately leading to improved service and product development.

---

### [evaluate_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/agents_sdk/evaluate_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post on **Evaluating Agents with Langfuse** explores the integration of the OpenAI Agent SDK with Langfuse for monitoring and evaluating AI agents. Key aspects include the importance of agent evaluation for debugging, cost monitoring, and enhancing reliability. The post outlines installation steps for necessary libraries, and provides detailed instructions on instrumenting agents to capture traces and performance metrics, both online and offline. Major features highlighted include tracking metrics like costs, latency, user feedback, and utilizing an LLM-as-a-Judge for automatic output evaluation. Offline evaluation through benchmark datasets is also discussed, offering a comprehensive approach to maintaining quality assurance in AI agent development. The post includes code examples and visualizations to illustrate the process effectively.

---

### [session_memory.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/agents_sdk/session_memory.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the importance of effective **context management** for AI agents interacting in long-running, multi-turn exchanges. With the introduction of the OpenAI Agents SDK, the `Session` object facilitates improved memory management through two primary techniques: **trimming** and **compression**. 

Key benefits of these techniques include enhanced coherence in conversations, increased tool-call accuracy, reduced latency and costs, and better error containment. The post compares context trimming (keeping the last N turns) and context summarization (creating concise summaries), outlining their respective pros and cons.

Real-world applications, like multi-turn customer service conversations, illustrate how these techniques can ensure agents remain consistent while addressing multiple issues. Overall, the blog emphasizes that proper context management is not just an optimization but a necessity for efficient AI behavior.

---

### [chat_with_your_own_data.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/azure/archive/chat_with_your_own_data.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the Azure OpenAI service's new feature, currently in preview, which allows users to utilize supported chat models like GPT-3.5-Turbo and GPT-4 on their own data without training or fine-tuning. This integration enhances the model's responses by drawing on specific, up-to-date information, thus increasing accuracy. Key elements include the combination of Azure OpenAI with Azure Cognitive Search for a customizable knowledge retrieval solution. Users can reference their data to generate contextual responses, leveraging the latest information from designated sources. The post includes prerequisites for setup, authentication details, and an example of how to implement the feature using the Azure OpenAI Python SDK.

---

### [chat.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/azure/chat.ipynb)
**Source:** openai/openai-cookbook

The blog post details the process for implementing chat completions using the Azure OpenAI service, including setup, authentication methods, deployment of a model, and content filtering features. The initial setup involves installing dependencies and importing necessary libraries, followed by authentication through either an API key or Azure Active Directory. Users are guided on creating a model deployment in the Azure OpenAI Studio, which is then utilized to generate chat completions and stream responses. Additionally, the post highlights content filtering capabilities, explaining how to handle prompts flagged by the filter, check results, and access filtering details on both prompts and completions. Overall, the post serves as a comprehensive guide for developers to effectively utilize the Azure OpenAI service in their applications.

---

### [gpt_action_box.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_box.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for Box, detailing how developers can connect ChatGPT to Box.com accounts using two main actions: a Box API action that queries data and an Azure Function for response formatting. This integration allows users to retrieve information from their Box accounts, including file details and metadata, and facilitates content analysis directly within ChatGPT. The post outlines prerequisites for setting up a Box developer account and an Azure environment. Additionally, it provides a series of example use cases highlighting how existing Box customers can leverage this functionality for data visualization and organizational tasks. Developers are guided on how to configure their Custom GPT with specific instructions to ensure secure data handling. Links to Box and Azure resources are also included for users to aid their integration efforts.

---

### [gpt_action_gmail.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_gmail.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for Gmail, outlining how developers can create a custom email assistant using OpenAI's GPT technology and Gmail APIs. This integration allows users to read, send, list, and draft emails within an authorized Gmail account, enhancing productivity and communication efficiency. Key use cases include summarizing lengthy emails, drafting responses based on previous threads, and integrating analyses from other GPTs for consolidated email communications.

Developers are guided to ensure that they have a Google Cloud account, with the Gmail API enabled, and provided with instructions on setting up OAuth for authentication. The post also highlights the technical specifications of the API, including essential endpoints for managing emails and drafts, alongside clear steps to set up authentication and troubleshoot common issues. Overall, this GPT Action aims to streamline email management and improve user interaction with Gmail.

---

### [gpt_action_googleads_adzviser.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_googleads_adzviser.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for integrating Google Ads with ChatGPT via Adzviser, enabling users to efficiently retrieve performance metrics like impressions and costs directly through natural language queries. By using Adzviser as middleware, users can connect their Google Ads accounts and leverage ChatGPT’s Data Analysis capabilities without manual data handling. Key features include tailored insights for eCommerce and brand marketers, enabling quick checks on metrics like Return on Ad Spend (ROAS) and facilitating comprehensive account audits. The guide provides detailed setup instructions, use case examples, and a structured workflow for both retrieving data and conducting audits, ensuring a streamlined process for Google Ads marketers. This integration enhances accessibility to critical advertising data, supporting better decision-making and optimization strategies.

---

### [gpt_action_jira.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_jira.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action for Jira, enabling developers to integrate ChatGPT with Atlassian's Jira for project and ticket management. Key announcements include the ability for users to interact with Jira Cloud using natural language via ChatGPT, allowing for easier management of project issues. Example use cases featured are retrieving recent issues and creating or modifying tasks through the chat interface. 

The post details essential application links, prerequisites for setup, and instructions for creating a Custom GPT tailored for Jira functionalities, including necessary API calls and permissions. It also outlines authentication steps to securely connect ChatGPT with Jira, including obtaining a Client ID and Secret. Finally, troubleshooting tips are provided for common integration issues, emphasizing user feedback for prioritizing future enhancements.

---

### [gpt_action_notion.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_notion.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library for Notion, designed to enable developers to build actions that connect ChatGPT with Notion. This integration allows users to query Notion pages using natural language, streamlining information retrieval and synthesis. Key features include the ability for new employees to access quick guides, support agents to quickly locate relevant documents, and users to summarize or transform information efficiently.

The post outlines the authentication process, highlighting the creation of an internal integration within Notion and sharing permissions. Developers are guided through setting up their custom GPTs with specific instructions for utilizing Notion's API. Additionally, a detailed OpenAPI schema is provided for various endpoints, underscoring the integration's capabilities. The overall aim is to enhance workflow efficiency by combining ChatGPT's conversational abilities with Notion's organizational tools.

---

### [gpt_action_outlook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_outlook.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the GPT Action Library tailored for Outlook, designed to facilitate developers in creating GPT Actions for enhanced communication and scheduling functionalities. This integration allows users to utilize ChatGPT's natural language processing to interact with Outlook, enabling tasks like retrieving meeting details and sending emails effortlessly.

Key features include the capability to summarize daily meetings, send emails directly from ChatGPT, and manage calendar events. The setup requires an initial App Registration in Azure, followed by configuring API permissions for necessary functionalities such as calendar management and email access.

Authentication is established via OAuth, with detailed steps provided for entering credentials in ChatGPT. The post concludes with guidance for troubleshooting and an invitation for users to suggest further integration enhancements.

---

### [gpt_action_redshift.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_redshift.ipynb)
**Source:** openai/openai-cookbook

The blog post details the deployment of a GPT Action for AWS Redshift, aimed at facilitating data retrieval and analysis via ChatGPT. Key features include the ability to execute SQL queries, access databases securely through AWS functions, and return results as downloadable files. Developers are guided to set up prerequisites like AWS CLI authentication and Redshift access. Instructions include code samples for creating middleware, establishing connections, and structuring queries, emphasizing customization for specific applications. The post outlines business use cases, highlighting advantages for data scientists and casual users in accessing and analyzing transactional data. Final enhancements include setting up OpenAPI specifications and custom GPT instructions for effective user interaction.

---

### [gpt_action_salesforce.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_salesforce.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a comprehensive guide for developers looking to build a GPT Action that interfaces with Salesforce Service Cloud. Key features include the ability for users to retrieve and update case data directly through ChatGPT, enhancing natural language processing capabilities in Salesforce interactions. Specific use cases highlight benefits such as reduced response times and improved brand consistency in customer communications. 

The guide provides detailed instructions on necessary configurations, including setting up a Connected App in Salesforce, establishing OAuth authentication, and implementing the OpenAPI schema for seamless integration. Developers are advised to follow pre-action, action, and post-action steps to ensure proper functionality. FAQs and troubleshooting tips are also included to assist with common issues.

---

### [gpt_action_sharepoint_doc.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sharepoint_doc.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a GPT Action for integrating ChatGPT with SharePoint and Office 365 functionalities using Microsoft Graph API. This solution allows users to fetch documents from SharePoint based on queries, enabling efficient data retrieval for analysis and summarization. The implementation involves an Azure Function that uses the Graph API to search for files accessible to the authenticated user and returns the content in a format compatible with ChatGPT. Key use cases include locating relevant files or answering specific questions embedded in documents. Customization options are available for tailoring search parameters and file types. The solution adheres to the limitations set for ChatGPT's Actions, ensuring effective and efficient usage within specified constraints.

---

### [gpt_action_sharepoint_text.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sharepoint_text.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a GPT Action tailored for SharePoint, empowering developers to integrate ChatGPT with SharePoint and Office365 file systems. This solution leverages Microsoft’s Graph API for searching and retrieving file content, allowing users to query documents using natural language. The architecture involves an Azure Function that processes file content, returning a human-readable output rather than a base64 encoded file. Key features include the ability to handle unstructured documents and summarize text using GPT-4o mini. Example use cases illustrate how this integration can assist users in locating relevant files or extracting critical information from them. Developers are provided with setup instructions and necessary code snippets to customize the solution according to their needs.

---

### [gpt_action_snowflake_direct.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_snowflake_direct.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the development of a GPT Action for Snowflake, allowing users to interact with Snowflake Data Warehouses using natural language. The Action generates SQL queries based on user inquiries, facilitating data analysis and anomaly detection. Notable features include integration steps for Snowflake, setting up OAuth for authentication, and the necessity to configure IP whitelisting to allow ChatGPT connections.

Key use cases highlighted are data scientists executing data analyses and citizen data users accessing transactional data insights. The setup involves configuring a Custom GPT with specific SQL instructions, defining network policies, and creating a security integration for OAuth credentials. The post concludes with troubleshooting tips and encourages feedback for integration enhancement. 

For detailed instructions, developers are directed to follow specific guidelines provided in linked documents.

---

### [gpt_action_snowflake_middleware.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_snowflake_middleware.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines how to develop a GPT Action facilitating interactions between ChatGPT and Snowflake Data Warehouse, specifically targeting the goal of executing SQL queries and returning results formatted as CSV. Key announcements include an emphasis on utilizing Azure Functions as middleware to manage SQL query execution and response formatting, ensuring compatibility with ChatGPT's Data Analysis environment. The integration leverages Azure Entra ID for OAuth authentication, mapping user credentials to Snowflake through a newly created security integration. The guide provides detailed steps for setting up both Azure functions and Snowflake configurations, including user mapping and authorization processes. These capabilities enable businesses using Snowflake to efficiently analyze datasets, identify patterns, and make informed decisions more effectively.

---

### [gpt_action_sql_database.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_action_sql_database.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a guide for developers on integrating ChatGPT with SQL databases using a GPT Action. It outlines a workflow specifically demonstrating PostgreSQL, applicable similarly to other SQL databases. Key functionalities include allowing ChatGPT to execute read queries, return data as text, or export it in CSV format. 

The guide highlights the potential of empowering business users to query databases without SQL knowledge and enabling data analysts to conduct complex analyses. It discusses designing middleware to interface with the database and shares considerations for building it, either custom or through third-party solutions. 

Key steps include generating SQL queries, sending them through a REST API to middleware, fetching results from the database, converting records into CSV, and returning them to ChatGPT for processing. The post emphasizes user authentication and managing permissions to ensure secure access to data.

---

### [gpt_middleware_aws_function.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_middleware_aws_function.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on how to set up an AWS Lambda function as middleware for integrating with ChatGPT. Key announcements include the use of AWS SAM (Serverless Application Model) to build an OAuth-protected AWS function that connects ChatGPT to various AWS services, such as Redshift, DynamoDB, and S3. 

Highlighted features include the ability to preprocess API responses, handle authentication via AWS Cognito, and return files (e.g., CSV or PDF) for analysis. The article walks users through prerequisites and setup steps, including creating the Lambda function, configuring OAuth with Cognito, and testing the functionality. It concludes with an encouragement to customize the setup according to specific user needs, emphasizing the secure and efficient communication capabilities between ChatGPT and AWS applications.

---

### [gpt_middleware_azure_function.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/gpt_actions_library/gpt_middleware_azure_function.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a comprehensive guide for developers on building middleware to connect a GPT Action with Azure Functions. Key features include leveraging ChatGPT's natural language capabilities for tasks like text preprocessing and handling diverse data types, including file responses such as CSV and PDF. Specific use cases are mentioned, such as connecting ChatGPT with SharePoint to retrieve files or initiate processes via Azure Functions.

The document provides detailed instructions on setting up OAuth-protected Azure Functions, covering initial setup in the Azure Portal, creating functions, configuring authentication, and testing the integration using tools like Postman. It emphasizes generating an OpenAPI specification for the endpoint to complete the integration, ultimately allowing users to seamlessly connect ChatGPT to their Azure-based applications.

---

### [Azure_AI_Search_with_Azure_Functions_and_GPT_Actions_in_ChatGPT.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/azure/Azure_AI_Search_with_Azure_Functions_and_GPT_Actions_in_ChatGPT.ipynb)
**Source:** openai/openai-cookbook

This blog post details a method for integrating Azure AI Search, now known as Azure Cognitive Search, with OpenAI embeddings for use in ChatGPT. It provides a comprehensive step-by-step guide on setting up Azure AI Search as a vector database, leveraging Azure Functions to connect with ChatGPT for a Retrieval-Augmented Generation (RAG) infrastructure. Key features include:

1. **Environment Setup**: Guidelines for configuring Azure settings and installing necessary libraries.
2. **Data Preparation**: Techniques for embedding documents, exemplified using OpenAI documentation.
3. **Creating Azure AI Vector Search**: Instructions for index creation, data upload, and testing search functionality.
4. **Establishing Azure Function**: Steps to create an Azure Function that interacts with the vector search.
5. **Integration with ChatGPT**: Directions for linking the Azure Function to a Custom GPT instance.

This framework can be adapted to other vector databases, broadening its applicability.

---

### [Getting_started_with_bigquery_vector_search_and_openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/gcp/Getting_started_with_bigquery_vector_search_and_openai.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a comprehensive guide for integrating Google Cloud BigQuery with Google Cloud Functions and OpenAI's embeddings for vector search capabilities. Key features include creating a scalable RAG (Retrieval-Augmented Generation) infrastructure on Google Cloud Platform, with ChatGPT integration as an endpoint.

The post details prerequisites such as having a GCP project and OpenAI API key. It covers the setup of the environment, preparing data, and constructing a BigQuery table to handle vector searches. The architecture involves a clear step-by-step process, from embedding OpenAI documents to executing vector-based queries. 

Essentially, the notebook serves as a robust framework for developers aiming to harness the power of vector search within a cloud-based AI ecosystem, providing scripts for data handling, embedding, and categorization while ensuring efficient data storage solutions.

---

### [gpt-action-pinecone-retool-rag.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/chatgpt/rag-quickstart/pinecone-retool/gpt-action-pinecone-retool-rag.ipynb)
**Source:** openai/openai-cookbook

This blog post outlines a comprehensive guide on utilizing Pinecone as a vector database for storing OpenAI embeddings, and integrating it with Retool to create a REST endpoint for ChatGPT interactions. Key features include the ability to perform fast similarity searches, making it suitable for applications like semantic search and recommendation systems.

Prerequisites for implementation include accounts on Pinecone and Retool, a Custom GPT with actions enabled, and an OpenAI API key. The post details the setup process, including creating a Pinecone index, populating it with embeddings, and building a Retool workflow to connect ChatGPT queries. 

Furthermore, it provides instructions for deploying a Custom GPT action, incorporating an OpenAPI specification for API integration, and testing the entire setup. This post serves as a valuable resource for developers looking to combine AI technologies for enhanced functionality.

---

### [building_consistent_workflows_codex_cli_agents_sdk.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/codex/codex_mcp_agents_sdk/building_consistent_workflows_codex_cli_agents_sdk.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the Codex CLI and Agents SDK, offering tools for developers to achieve consistent, repeatable, and scalable workflows in software development. Key features include:

1. **Initialization of Codex CLI as an MCP Server**, which allows for the seamless execution of agent tasks.
2. **Building Single-Agent Systems**: The blog demonstrates creating two agents (Designer and Developer) to collaboratively develop a simple game using the Codex MCP server.
3. **Orchestrating Multi-Agent Workflows**: A more complex structure is presented, featuring roles like Project Manager, Designer, and Developers, showcasing how agents can coordinate tasks and enforce gating logic, ensuring comprehensive project flow and deliverables.
4. **Observability and Auditability**: Tracing agent behavior for evaluation and monitoring is highlighted.

Developers are encouraged to have a basic coding background and set up their environments to utilize these features effectively.

---

### [custom_image_embedding_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/custom_image_embedding_search.ipynb)
**Source:** openai/openai-cookbook

This blog post discusses a novel approach to enhancing traditional text-based Retrieval-Augmented Generation (RAG) by integrating multimodal capabilities, specifically through the use of CLIP embeddings and GPT-4 Vision. The method improves question-answering by directly embedding images into the retrieval process, thus avoiding the inaccuracies associated with text captioning.

Key announcements include the installation of essential packages, the development of an image embedding database, and the execution of semantic searches using user-provided tech images. The post outlines a practical implementation which allows for user queries on these images, demonstrating its application by accurately identifying relevant technological information. Additionally, it highlights potential future improvements, such as further fine-tuning of the CLIP model and advancements in the retrieval process.

---

### [introduction_to_deep_research_api.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/deep_research_api/introduction_to_deep_research_api.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the Deep Research API, a tool designed to automate complex research tasks through an agentic model. Unlike ChatGPT, it provides programmatic access and autonomously decomposes tasks, conducts web searches, and synthesizes information into structured reports. Key models include `o3-deep-research-2025-06-26` for in-depth outputs and `o4-mini-deep-research-2025-06-26` for faster responses. Users can authenticate and make API calls to generate reports, incorporating features like web search and code execution, while also retrieving inline citations and metadata. Additionally, it allows for integration with internal data sources through a Model Context Protocol (MCP). The API emphasizes the importance of careful input configuration to enhance output relevance. Overall, it is positioned as a comprehensive tool for conducting automated, data-driven research.

---

### [introduction_to_deep_research_api_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/deep_research_api/introduction_to_deep_research_api_agents.ipynb)
**Source:** openai/openai-cookbook

The "Deep Research Agents Cookbook" introduces advanced workflows for conducting research with the OpenAI Deep Research API and Agents SDK. It builds upon earlier content, guiding users through orchestrating single and multi-agent systems to enhance query responses and integrate web searches. Key features include a Basic Research Agent that utilizes the `o4-mini-deep-research-alpha` model for efficient, real-time research output, and a multi-agent pipeline that employs triage, clarification, and instruction-building to improve research quality.

Users are advised to use Deep Research Agents for complex tasks involving planning and synthesis, while simpler queries should utilize the standard OpenAI API. The setup requires an OpenAI API key and the installation of specified libraries. The cookbook promotes a Zero Data Retention approach for enterprises, ensuring data privacy while enabling robust research capabilities.

---

### [Evaluate_RAG_with_LlamaIndex.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/Evaluate_RAG_with_LlamaIndex.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the construction and evaluation of a Retrieval Augmented Generation (RAG) pipeline using LlamaIndex. It covers three main sections: an introduction to RAG, the process of building a RAG system with LlamaIndex, and methods for evaluating its effectiveness. 

Key features of RAG include real-time data incorporation into generative models, enhancing response relevance. The pipeline includes stages such as loading, indexing, storing, querying, and evaluation. Performance metrics emphasize retrieval and response accuracy, employing tools like the RetrieverEvaluator and FaithfulnessEvaluator. The results indicate a hit rate of 0.7586 and a mean reciprocal rank (MRR) of 0.6206, highlighting areas for improvement in response ordering.

Overall, the post demonstrates practical applications of LlamaIndex for creating an efficient RAG system with robust evaluation methods.

---

### [Getting_Started_with_OpenAI_Evals.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/Getting_Started_with_OpenAI_Evals.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces OpenAI Evals, a framework for evaluating large language models (LLMs) and systems built on them. Key features include a hosted evaluation API, an open-source registry of challenging evals, and customizable evaluation templates. The post emphasizes the importance of robust evaluations for understanding model performance, especially with foundational models like GPT-4. 

Two main evaluation approaches are highlighted: code-based validation and model grading, with templates developed for both. The blog provides a guide on setting up the framework, creating eval datasets, and utilizing GPT-4 to generate synthetic data for evaluations. It concludes with instructions on running evaluations through a command-line interface and discusses the configuration of eval metrics and summaries. Overall, OpenAI Evals aims to enhance the testing and reliability of AI models deployed in various applications.

---

### [How_to_eval_abstractive_summarization.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/How_to_eval_abstractive_summarization.ipynb)
**Source:** openai/openai-cookbook

This blog post explores evaluation techniques for abstractive summarization tasks, focusing on traditional metrics such as ROUGE and BERTScore, alongside a new method leveraging Large Language Models (LLMs) like GPT-4 for reference-free evaluation. Traditional metrics, while reliable, often fail to align with human judgment, showing limited correlation especially in open-ended tasks. The author highlights the effectiveness of GPT-4 to assess summaries based on relevance, coherence, consistency, and fluency, without relying on reference texts. The post details a setup using both traditional and advanced evaluation methods, providing Python code for practical implementation. The evaluation demonstrates how different summaries perform against reference material and potentially offers a more nuanced understanding of summary quality by combining human insights and automated metrics.

---

### [How_to_evaluate_LLMs_for_SQL_generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/How_to_evaluate_LLMs_for_SQL_generation.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a framework for systematically testing and evaluating large language models (LLMs) for SQL generation, highlighting the inherent nondeterministic nature of these models as a challenge for consistency. Key components of the framework include:

- **Unit Testing** to assess individual application components.
- **Evaluation Metrics** to quantitatively gauge model effectiveness.
- **Runbook Documentation** for tracking historical performance.

The practical demonstration focuses on converting natural language to SQL, utilizing unit tests to ensure the correctness and consistency of generated SQL queries. The evaluation includes checks for syntactic correctness and relevance of generated SQL to user queries. The framework is adaptable for various LLM-driven applications, making it a valuable resource for developers seeking to integrate LLMs into production settings effectively.

---

### [mcp_eval_notebook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/evaluation/use-cases/mcp_eval_notebook.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the evaluation of language models, specifically `gpt-4.1` and `o4-mini`, using a custom dataset of Q&A pairs related to the `tiktoken` repository through the OpenAI Evals framework. Key features include the setup of an in-memory dataset, the use of both LLM-based and Python MCP graders for robust evaluation, and the clear configuration of evaluation criteria to ensure reproducibility. 

Findings reveal that while the `gpt-4.1` model performed suboptimally by not using the MCP tool, `o4-mini` was able to leverage it, resulting in better performance. The post also highlights best practices for conducting such evaluations and suggests expanding the dataset and analyzing results for future work. Next steps include enhancing capabilities, analyzing results more comprehensively, and automating reporting for better insights.

---

### [ft_retrieval_augmented_generation_qdrant.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/fine-tuned_qa/ft_retrieval_augmented_generation_qdrant.ipynb)
**Source:** openai/openai-cookbook

The blog post presents a detailed guide on fine-tuning OpenAI models for Retrieval Augmented Generation (RAG) using Qdrant and Few-Shot Learning. Key components include the integration of the gpt-3.5-turbo model with the SQuAD dataset to minimize hallucinations and improve answer accuracy. The notebook outlines a practical workflow for machine learning practitioners, covering topics such as data preparation, model evaluation, and fine-tuning processes. 

Key findings indicate minimal gains when fine-tuning more advanced models like gpt-4. Additionally, the post emphasizes the use of Qdrant for enhancing retrieval performance and describes methodologies for both Zero-Shot and Few-Shot learning. Overall, the guide serves as a comprehensive resource for optimizing RAG implementations using OpenAI's technology.

---

### [gpt-5_new_params_and_tools.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/gpt-5_new_params_and_tools.ipynb)
**Source:** openai/openai-cookbook

OpenAI has announced key updates in the GPT-5 series, introducing features that enhance developer control over model responses. Notable updates include:

1. **Verbosity Parameter**: Users can adjust output length and style with settings for low, medium (default), and high verbosity, allowing for concise or detailed responses without altering prompts.
   
2. **Freeform Function Calling**: The model can now generate raw text payloads, enabling direct communication with custom tools, offering flexibility in coding environments without JSON formatting.

3. **Context-Free Grammar (CFG)**: This feature employs production rules to constrain output and ensure valid syntax for programming languages, enhancing output precision.

4. **Minimal Reasoning**: A low-reasoning setting optimizes latency for straightforward tasks, beneficial for quick extractions or classifications.

These features support all GPT-5 models and bring significant advancements in user interaction and output control. Users are advised to update their OpenAI SDK to utilize these enhancements effectively.

---

### [gpt-5_prompting_guide.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/gpt-5_prompting_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces GPT-5, a new advanced model enhancing performance in agentic tasks, coding, and overall steerability. Key features include improved instruction adherence and optimized coding capabilities. It emphasizes the importance of effective prompting, providing specific strategies to adjust the model's eagerness in decision-making processes and implement tool calls. Notably, it highlights the benefits of using the Responses API for better efficiency and context reusability, resulting in significant performance gains. GPT-5 excels in coding across web development frameworks and can manage large codebases effectively. The collaboration with Cursor, an AI code editor, exemplifies successful prompt tuning for enhanced model functionality. Overall, the post serves as a guide for maximizing GPT-5's capabilities through tailored prompts and strategic tool usage, encouraging users to experiment for optimal results.

---

### [prompt-optimization-cookbook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/prompt-optimization-cookbook.ipynb)
**Source:** openai/openai-cookbook

The blog post announces the release of GPT-5, emphasizing its advanced capabilities, particularly in agentic tasks, coding, and steerability. A key feature introduced is the **GPT-5 Prompt Optimizer**, which assists users in optimizing and migrating prompts for better model performance. The post highlights the importance of effective prompting while offering a walkthrough on evaluating and improving prompts using the Optimizer. It notes the common pitfalls in prompt instructions, such as contradictions and ambiguities, which can hinder performance. The post also includes a coding and analytics task example, demonstrating a comparison between a baseline prompt and an optimized version, showcasing measurable improvements in code generation accuracy and efficiency. Lastly, it introduces the **LLM-as-a-Judge** for qualitative assessments, reiterating the significance of thorough experimentation in prompting approaches.

---

### [prompt_personalities.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/gpt-5/prompt_personalities.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the importance of defining an AI agent’s personality through system prompts to control its tone, detail, and style. It emphasizes that personality influences response style but does not override specific output formats. Four example personalities are outlined: 

1. **Professional** - Polished and precise, suitable for enterprise interactions.
2. **Efficient** - Concise and straightforward, ideal for coding and automated tasks.
3. **Fact-Based** - Direct and corrective, best for debugging and evaluations.
4. **Exploratory** - Enthusiastic and clear, promoting learning and knowledge sharing.

The post concludes that carefully crafted personality instructions can enhance the reliability and predictability of AI systems in various contexts, and recommends starting with a minimal, focused personality tailored to specific workloads.

---

### [databricks_mcp_cookbook.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/mcp/databricks_mcp_cookbook.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the creation of a supply-chain copilot using the OpenAI Agent SDK in conjunction with Databricks Managed MCP servers. The solution enables real-time queries on structured and unstructured enterprise data, addressing critical supply-chain questions like inventory levels and potential manufacturing delays. Key features include time series forecasting, semantic search for email communications, and revenue risk assessments. 

The architecture integrates an OpenAI Agent with existing analytics workloads in Databricks, offering a conversational interface for data-driven decision-making. The guide provides step-by-step instructions for configuration, including Databricks authentication and building the agent. Additionally, it highlights the use of sample datasets to model supply-chain operations effectively. Ultimately, the solution facilitates proactive management of supply chains by forecasting demand and optimizing logistics.

---

### [mcp_tool_guide.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/mcp/mcp_tool_guide.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the Model Context Protocol (MCP) tool within the Responses API, which streamlines the integration of external services with AI applications. Traditionally, connecting to these services involved multiple round-trips, incurring latency and management challenges. MCP simplifies this by allowing models to directly interact with MCP servers, facilitating actions like adding items to a shopping cart or querying services with reduced latency.

Key use cases include commerce, where items can be added to carts in a single operation, and dev-ops, enabling tasks like fetching errors and auto-generating GitHub issues. Best practices highlight the importance of filtering tool access to enhance performance, caching to minimize repeated server calls, and integrating MCP with other tools. The post also outlines practical scenarios and provides guidelines for effective tool calls, emphasizing the need for clear prompt instructions to optimize model behavior.

---

### [Vision_Fine_tuning_on_GPT4o_for_Visual_Question_Answering.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/multimodal/Vision_Fine_tuning_on_GPT4o_for_Visual_Question_Answering.ipynb)
**Source:** openai/openai-cookbook

The blog post announces the introduction of **Vision Fine-Tuning on GPT-4o**, a new feature that allows developers to fine-tune the model using both images and text. This multimodal capability enhances the model's image understanding, enabling tailored solutions across various fields such as advanced visual search and object detection. It is particularly effective for tasks like **visual question answering**, creating context-aware responses based on images and text inputs.

The post details guidelines for training a model using a dataset of question-answer pairs related to images of books, which includes approximately 1 million pairs. It provides a practical guide on structuring training data and emphasizes the importance of proper format to ensure successful model learning. This fine-tuning opens doors to numerous applications, including in education, healthcare, and document processing. For further details, the full documentation is available online.

---

### [image_evals.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/multimodal/image_evals.ipynb)
**Source:** openai/openai-cookbook

The blog post details the development of a practical image evaluation system tailored for image generation and editing use cases. Key features of this "vision eval" system include repeatable assessments ensuring that outputs meet specific workflow requirements, rather than merely aesthetic judgments. The guide categorizes evaluations into four primary areas: image generation, image editing, human feedback alignment, and strategic evaluation building. 

A vision eval harness is introduced, facilitating structured assessments across various prompts and models. The system incorporates three plugins: test cases, runners, and graders, enhancing the evaluation process. Additionally, it outlines the architecture for scoring methodologies, emphasizing the importance of precise corrections, quality metrics, and human feedback integration. This framework ensures reliability and usability for production workflows involving image generation and editing.

---

### [Using_chained_calls_for_o1_structured_outputs.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/o1/Using_chained_calls_for_o1_structured_outputs.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the advancements in OpenAI's reasoning models, specifically the `o1-preview`, which lacks built-in support for structured outputs as of September 2024. Consequently, users must prompt the model to generate well-formed JSON responses. The post outlines two methods for obtaining valid JSON from `o1-preview`, including an example that involves analyzing a list of companies to determine which would benefit from AI technology. 

To improve type-safety and streamline workflows, the author introduces a process for linking the `o1-preview` response with `gpt-4o-mini`, which can properly format the returned data. This method, despite requiring two API calls, allows for effective integration of structured outputs into applications, enhancing overall functionality and reliability.

---

### [Using_reasoning_for_routine_generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/o1/Using_reasoning_for_routine_generation.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the process of transforming customer service knowledge base articles into executable routines for large language models (LLMs) to enhance their operational efficiency. It emphasizes the need to simplify complex, human-oriented documentation into clear, structured step-by-step instructions called routines, which reduce ambiguity and improve the LLM's performance. The approach taken by o1 enables zero-shot learning, where the LLM can understand and execute instructions without extensive training. The post also highlights the generation of function calls within these routines, allowing the LLM to perform actions on behalf of users, such as accessing external information or executing transactions. Key insights reveal the effective breakdown of tasks, the integration of IFTTT logic, and the necessity of rigorous evaluation before deployment to ensure compliance and effectiveness in customer service applications.

---

### [Secure_code_interpreter_tool_for_LLM_agents.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/object_oriented_agentic_approach/Secure_code_interpreter_tool_for_LLM_agents.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the innovative use of the o3-mini model for dynamically generating and executing tools, specifically in the context of building a custom code interpreter. Key features include:

1. **Dynamic Tool Generation:** Unlike predefined functions, the o3-mini model enables real-time creation of code blocks based on user prompts, allowing for versatile problem-solving across applications such as data analysis, machine learning, and process automation.

2. **Custom Code Interpreter Development:** The post provides a detailed guide on establishing a secure Python execution environment using Docker, alongside creating two agent types: 
   - **FileAccessAgent**: Predefined tool for reading files with access to the host system.
   - **PythonCodeExecAgent**: Dynamically generates and executes code within the Docker container.

3. **Agentic Orchestration:** The procedure emphasizes the isolation of functionalities between agents for security and safety, illustrating how to leverage the o3-mini model responsibly to execute sophisticated tasks.

The post serves as a comprehensive technical guide for developers aiming to enhance their AI applications with customizable coding abilities.

---

### [receipt_inspection.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/partners/eval_driven_system_design/receipt_inspection.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a practical guide for ML/AI engineers on eval-driven system design, focusing on creating a production-grade autonomous system to automate manual tasks, like receipt analysis. It addresses common challenges such as starting without labeled data and emphasizes the importance of rigorous eval processes to make informed decisions on improvements and trade-offs. 

Key features include:

1. **Incremental Development**: Build a minimal viable product (MVP) with a small dataset and iterative eval improvements.
2. **Business Alignment**: Connect eval performance with business metrics to ensure impactful improvements.
3. **QA Integration**: Implement a quality assurance process to utilize learnings from production data for ongoing improvement.

The guide employs a hypothetical receipt processing scenario to illustrate the end-to-end system construction and eval integration. It is modular, allowing users to adapt code samples to their needs.

---

### [autonomous_agent_retraining.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/partners/self_evolving_agents/autonomous_agent_retraining.ipynb)
**Source:** openai/openai-cookbook

The blog post presents a "cookbook" for developing self-evolving agents aimed at enhancing autonomous agent retraining processes, particularly in the regulated healthcare sector. Key highlights include:

1. **Retaining Feedback Structures**: The approach integrates a retraining loop that captures human feedback, allowing agents to improve iteratively by learning from errors.
2. **Practical Applications**: It emphasizes a healthcare use case involving the drafting of regulatory documents for pharmaceutical approvals, showcasing AI's role in enhancing accuracy and compliance.
3. **Prompt Optimization Strategies**: The post discusses three strategies for optimizing prompts—from manual iterations to complete automation—and provides a detailed workflow using the OpenAI Evals platform for evaluating outputs.
4. **User Guidance**: Target audiences include ML/AI engineers and product teams, with modular steps to facilitate independent or sequential application of the techniques presented.

Overall, it aims to transition agentic systems from basic prototypes to robust tools capable of maintaining high performance in complex tasks.

---

### [reasoning_function_calls.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/reasoning_function_calls.ipynb)
**Source:** openai/openai-cookbook

OpenAI has introduced function calling capabilities using its new reasoning models, such as o3 and o4-mini, optimized for complex, multi-step tasks. These models utilize logical chains of thought to enhance problem-solving, scientific reasoning, and coding tasks. Interaction via the API remains straightforward, but subtle differences exist, particularly concerning function calling.

The blog post highlights the ease of making API calls, including examples that showcase how reasoning models manage conversation state and handle context more efficiently than traditional chat models. It elaborates on the integration of custom functions to enhance reasoning tasks, demonstrating how multiple function calls can be executed in sequence based on the model's output.

Additionally, it emphasizes the importance of managing conversation history and reasoning steps, particularly when orchestrating responses manually for complex workflows. Overall, the post illustrates a framework for leveraging OpenAI’s reasoning models in real-world applications.

---

### [GPT_finetuning_with_wandb.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/GPT_finetuning_with_wandb.ipynb)
**Source:** openai/openai-cookbook

The blog post highlights the integration of Weights & Biases (W&B) with OpenAI's API for fine-tuning ChatGPT-3.5 and GPT-4. Users can track their experiments, models, and datasets through a central dashboard, enabling enhanced management of ML workflows. The process involves setting up a training environment, preparing a dataset from LegalBench, and establishing training and testing sets. A key feature is the simple command `openai wandb sync`, which facilitates logging fine-tuning jobs. The post provides a step-by-step guide on preparing data, validating its format, and ultimately fine-tuning the model using OpenAI's API. Users are informed about the training process's duration and how to monitor job statuses, along with the ability to log fine-tuning results on W&B. This integration aims to streamline and simplify the fine-tuning process for machine learning practitioners.

---

### [How_to_automate_S3_storage_with_functions.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/How_to_automate_S3_storage_with_functions.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a guide for automating tasks related to Amazon S3 buckets using OpenAI's ChatGPT functions. Key functionalities include listing buckets, searching for specific files, uploading, and downloading files from S3 buckets. The setup requires AWS access keys with S3 writing permissions and an OpenAI API key stored in a local environment file. 

Essential features are defined as function calls for various S3 operations, enabling the integration of user interactions with ChatGPT to execute specific tasks. The post emphasizes creating a conversational flow where users input commands, and the model clarifies requirements as needed. It demonstrates practical use cases, such as listing buckets, searching for files, and handling file uploads and downloads, ultimately streamlining interactions with S3 storage through automated processes.

---

### [Visualizing_embeddings_in_wandb.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/third_party/Visualizing_embeddings_in_wandb.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the use of Weights & Biases (W&B) for visualizing embeddings through an Embedding Projector. It highlights the process of logging data by creating a W&B Table that integrates original data with 1536-dimensional embeddings from a dataset. The embeddings are visualized using dimension reduction algorithms such as PCA, UMAP, and t-SNE. Users can render the data as a 2D projection for enhanced visualization by adjusting settings in the W&B interface. The tutorial utilizes the provided "Get_embeddings_from_dataset Notebook" and demonstrates the steps of loading the dataset, processing it with Python, and logging to W&B, showcasing the platform's capability to facilitate model tracking, evaluation, and sharing of machine learning findings.

---

### [Getting_started_with_azure_ai_search_and_openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/azuresearch/Getting_started_with_azure_ai_search_and_openai.ipynb)
**Source:** openai/openai-cookbook

The blog post details the process of using Azure AI Search, previously known as Azure Cognitive Search, as a vector database for OpenAI embeddings. It provides a comprehensive guide for developers, outlining prerequisites such as obtaining an Azure AI Search Service and an OpenAI key. The post includes instructions for setting up authentication for Azure OpenAI, configuring the Azure AI Search client, and creating a search index that supports vector search and semantic ranking.

Key functionalities include uploading documents with pre-computed embeddings, performing vector similarity searches, and leveraging hybrid search techniques that combine traditional keyword searches with vector-based methods. The content emphasizes the use of Azure's capabilities to enhance the relevance and contextual understanding of search results, particularly through the use of semantic ranking and extractive answers.

---

### [Philosophical_Quotes_AstraPy.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_AstraPy.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a quickstart guide for building a "philosophy quote finder & generator" using OpenAI's vector embeddings and DataStax's Astra DB as a vector store. Key features include:

1. **Vector Collection Creation**: Users will create a vector collection in Astra DB to store embeddings of philosopher quotes.
2. **Quote Search Engine**: The system allows users to find similar quotes by converting input quotes into vector form and querying the vector store based on semantic similarity.
3. **Quote Generation**: Users can generate new quotes by feeding a topic and examples into an OpenAI language model, which utilizes the search engine's results.
4. **Installation and Setup**: The post includes instructions for installing necessary packages and connecting to Astra DB and OpenAI's API.

Overall, it demonstrates practical applications of vector embeddings and semantic search in literature-themed projects.

---

### [Philosophical_Quotes_CQL.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_CQL.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a quickstart guide for creating a "philosophy quote finder and generator" utilizing OpenAI's vector embeddings in conjunction with Apache Cassandra or DataStax Astra DB for data persistence. It explains the workflow of indexing quotes as embedding vectors, implementing a search engine to find similar quotes, and generating new quotes based on existing ones.

Key features include:
1. **Indexing and Search**: Quotes are converted into embedding vectors, which allows for semantic similarity searches based on vector proximity.
2. **Quote Generation**: A generative model utilizes existing quotes to create new ones based on user input.
3. **Cassandra Integration**: The guide shows how to set up a database connection, create necessary tables and indices, and manage metadata for enhanced search functionality.

Overall, the post effectively demonstrates the powerful application of vector search and embeddings in managing and generating philosophical content.

---

### [Philosophical_Quotes_cassIO.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/cassandra_astradb/Philosophical_Quotes_cassIO.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a quickstart guide for building a "philosophy quote finder & generator" using OpenAI's vector embeddings and Apache Cassandra or DataStax Astra DB. The guide focuses on creating a Vector Store to persist data, evaluating and storing vector representations of philosophical quotes, and implementing both a search engine and a quote generator using semantic similarity.

Key highlights include:
- Using the CassIO library for vector capabilities.
- Indexing quotes into embedding vectors with metadata for enhanced search functionality.
- Enabling a search engine that retrieves similar quotes based on user queries, with optional author and tag constraints.
- Integrating a generative model to create new quotes based on example prompts.
- Mention of performance optimization through partitioning for queries targeting specific authors.

The guide serves as a comprehensive starting point for anyone interested in leveraging vector search and generative AI in text-based applications.

---

### [elasticsearch-retrieval-augmented-generation.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/elasticsearch/elasticsearch-retrieval-augmented-generation.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a tutorial on implementing Retrieval Augmented Generation (RAG) using Elasticsearch and OpenAI's API. Key steps include:

1. **Indexing OpenAI’s Wikipedia vector dataset** into Elasticsearch, utilizing a structured index mapping with dense vector types for efficient semantic search.
2. **Embedding questions** with OpenAI's embeddings endpoint, allowing users to leverage the model's capabilities for encoding queries.
3. **Executing k-nearest neighbors (kNN) searches** on the indexed data to retrieve relevant documents. 
4. **Generating responses** to queries using the Chat Completions API, incorporating the top search result as context for improved output.

This process highlights the synergy between Elasticsearch’s robust retrieval capabilities and OpenAI's generative models, providing a framework for future applications of RAG without the need for fine-tuning models.

---

### [elasticsearch-semantic-search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/elasticsearch/elasticsearch-semantic-search.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a guide on utilizing Elasticsearch and OpenAI for semantic search. Key announcements include the indexing of the OpenAI Wikipedia vector dataset into Elasticsearch, embedding queries through the OpenAI API, and executing semantic searches using encoded questions.

The tutorial details steps such as installing necessary packages, establishing a connection to Elasticsearch, downloading and preprocessing the dataset, and creating an index with specific mappings. The post also demonstrates how to index the data efficiently using Elasticsearch's Bulk API and conduct queries with the k-nearest neighbors (kNN) search function.

This functionality allows users to perform semantic searches effectively by generating embeddings for their queries with OpenAI. The post encourages experimentation with different queries and data, while referencing additional resources for further exploration of retrieval-augmented generation techniques using Elasticsearch and OpenAI.

---

### [Getting_started_with_kusto_and_openai_embeddings.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/kusto/Getting_started_with_kusto_and_openai_embeddings.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines the process of using Azure Data Explorer (Kusto) as a vector database for AI embeddings with OpenAI embeddings. Key steps include:

1. Utilizing precomputed embeddings from the OpenAI API.
2. Storing these embeddings in Kusto.
3. Converting input text queries into embeddings using OpenAI.
4. Executing cosine similarity searches within Kusto to find relevant stored embeddings.

Prerequisites involve setting up an Azure Data Explorer server instance and obtaining OpenAI credentials. The procedure includes installing necessary libraries, downloading embedding data, and creating a Kusto table to store the vectors. Users can query the database for semantic searches using a specified similarity function. The blog post provides code snippets to facilitate these tasks, ensuring a comprehensive guide for implementing the solution.

---

### [Filtered_search_with_Milvus_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/milvus/Filtered_search_with_Milvus_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

The blog post details a project utilizing Milvus and OpenAI to implement a filtered search for movies based on their descriptions. The dataset, sourced from HuggingFace, includes over 8,000 movie entries. Key steps include:

1. **Setup**: The required libraries (`openai`, `pymilvus`, `datasets`, `tqdm`) are installed, and the Milvus service is launched.
2. **Configuration**: Global variables for Milvus connectivity and OpenAI embedding parameters are established.
3. **Data Insertion**: The Netflix shows dataset is downloaded, and movie descriptions are embedded using OpenAI's model before being inserted into a Milvus collection in batches.
4. **Query Function**: A query function demonstrates searching for movies based on descriptions and metadata filters. The results include scores, titles, and additional information about the movies.

This integration allows for efficient and relevant movie searches based on user-defined criteria.

---

### [Getting_started_with_Milvus_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/milvus/Getting_started_with_Milvus_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on leveraging Milvus and OpenAI to create an embedding system for book descriptions sourced from a dataset containing over 1 million title-description pairs. It begins by detailing the setup process, requiring the installation of essential libraries like OpenAI and pymilvus, and the initialization of a Milvus service through Docker. Key configurations include establishing global variables for connection parameters and embedding dimensions.

The post describes how to connect to Milvus, create a collection for storing book data, and configure indexing settings. It then shows how to download the dataset from Hugging Face, embed book descriptions using OpenAI's embedding model, and insert the data into the Milvus collection in batches. Finally, it illustrates how to query this database, providing ranked results based on the input text. This workflow effectively combines OpenAI's capabilities with Milvus for efficient book retrieval.

---

### [semantic_search_using_mongodb_atlas_vector_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/mongodb_atlas/semantic_search_using_mongodb_atlas_vector_search.ipynb)
**Source:** openai/openai-cookbook

This blog post outlines the process for building a semantic search application using OpenAI's embedding capabilities alongside MongoDB Atlas vector search. Key steps include:

1. **Environment Setup**: Users must create a MongoDB Atlas cluster (version 6.0.11 or higher) and obtain an OpenAI API key.
2. **Embedding Generation**: Utilizing OpenAI’s model to generate vector embeddings from movie plots in the MongoDB sample dataset.
3. **Index Creation**: Instructions are provided for creating an Atlas Vector Search Index either through the Atlas UI or programmatically using the pymongo driver.
4. **Data Querying**: The application allows querying for movies based on semantically similar plots, moving beyond traditional keyword searches.

The post emphasizes leveraging the `$vectorSearch` aggregation operator for enhanced search functionalities within the database.

---

### [neon-postgres-vector-search-pgvector.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/neon/neon-postgres-vector-search-pgvector.ipynb)
**Source:** openai/openai-cookbook

The blog post details the use of Neon Serverless Postgres as a vector database for OpenAI embeddings, guiding users through the setup and implementation process. Key features include instructions on creating embeddings via the OpenAI API, storing them in a Neon database, and performing vector similarity searches using the `pgvector` extension. 

Prerequisites involve setting up a Neon database, obtaining an OpenAI API key, and installing necessary Python modules. The article walks through connecting to the Neon database, loading pre-computed Wikipedia article embeddings, creating a corresponding database table with indexes, and executing similarity searches based on user queries. The guide emphasizes practical applications of vector searches, illustrating functionality with example queries for articles related to "Greek mythology" and historical battles.

---

### [Using_Pinecone_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/pinecone/Using_Pinecone_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines a practical guide for utilizing Pinecone as a vector database to enhance embedding search capabilities. It introduces vector databases, highlighting their importance in managing and querying embedding vectors for various applications such as chatbots and topic modeling. The post walks through a demo process that includes setting up the environment, loading data, creating indices for article titles and content in Pinecone, and performing search queries. Key steps involve preparing data for embedding, establishing a connection with Pinecone, and executing queries to retrieve relevant information based on semantics. This guide aims to equip users with foundational knowledge to leverage vector databases in secure and scalable production environments.

---

### [Using_Redis_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/redis/Using_Redis_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post outlines using Redis for embedding searches within vector databases, a crucial solution for enterprises needing secure, scalable machine learning applications like chatbots and topic modeling. It explains the concept of vector databases, their rise in popularity due to advancements in AI, and how they facilitate efficient management and searching of embedding vectors. 

Key features include:

- **Setup & Implementation:** A step-by-step demo illustrates setting up Redis, loading data, creating search indexes, and running search queries.
- **Hybrid Search Capabilities:** Users can execute hybrid searches combining vector and full-text queries, enhancing search functionalities.
- **Redis Enhancements:** The incorporation of vector storage and search functionality in the Redis-Py client and the RediSearch module is highlighted as a significant advancement.

The tutorial also guides on deploying Redis using Docker, and working with an example dataset to demonstrate the process effectively.

---

### [Using_Typesense_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/typesense/Using_Typesense_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post provides a comprehensive guide on utilizing Typesense for embeddings search, targeting environments for chatbot and topic modeling applications. Key features of vector databases are highlighted, emphasizing their effectiveness in managing and querying embedding vectors, which have become essential for processing unstructured data using AI.

The post outlines a demo flow that includes setting up the Typesense Python client, loading embedded data, and executing nearest neighbor searches. It details the process of creating a collection in Typesense, indexing data, and performing semantic searches based on user queries. The tutorial culminates in the ability to effectively implement vector databases, enabling various AI-driven use cases for enterprises. Overall, the guide equips users with the foundational skills to explore more complex applications of embeddings and vector databases.

---

### [Using_Weaviate_for_embeddings_search.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/Using_Weaviate_for_embeddings_search.ipynb)
**Source:** openai/openai-cookbook

The blog post illustrates the process of using Weaviate, a vector database, for embedding search with a focus on use cases such as chatbots and topic modeling. It starts by defining a vector database and its significance in managing and searching embedding vectors derived from unstructured data. The post outlines a demo workflow that includes setting up the environment, loading and embedding data, and configuring Weaviate.

Key features highlighted are the option for both self-hosted and SaaS versions of Weaviate, and the ability to either bring pre-existing vectors or use Weaviate's integration with OpenAI for automated vectorization. The article provides detailed instructions for creating schemas, importing data, and conducting similarity searches, emphasizing Weaviate's role in facilitating secure and scalable embedding applications.

---

### [generative-search-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/generative-search-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

This blog post presents a detailed guide for utilizing the Generative OpenAI module with Weaviate for Generative Search. It assumes that users have already imported their data into Weaviate and have an OpenAI API key. Key steps include setting up the OpenAI API key as an environment variable, connecting to the Weaviate instance, and forming generative search queries. Users can leverage the `with_generate()` function to enhance search results, either by generating responses for each item or as a collective response from a group of items. The post emphasizes error handling and encourages users to explore additional use cases through further examples. Overall, it empowers users to integrate generative capabilities into their vector databases.

---

### [getting-started-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/getting-started-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses setting up a Weaviate instance to perform vectorized searches using the OpenAI module, specifically the text2vec-openai. It outlines a straightforward workflow for users whose data is unvectorized, detailing the creation of a Weaviate instance, connection setup with an OpenAI API key, schema configuration, data import (automatically vectorized), and execution of semantic searches. 

Weaviate is described as an open-source vector search engine that combines vector search capabilities with structured filtering, supporting billions of data objects through KNN algorithms. Deployment options include self-hosted, SaaS, and hybrid solutions, and Weaviate offers client libraries for various programming languages. The blog emphasizes that users need not manually vectorize their data, as the integration with OpenAI handles this automatically.

---

### [hybrid-search-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/hybrid-search-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses utilizing Weaviate, an open-source vector search engine, in conjunction with OpenAI's text2vec module for hybrid searching of non-vectorized data. It highlights the process of setting up a Weaviate instance, including configuration of the data schema, automatic vector embedding generation, and executing hybrid searches that combine vector and BM25 searches. The key features include Weaviate's ability to effortlessly integrate with OpenAI for vectorization, eliminating the need for manual data vectorization.

Weaviate supports various deployment options (self-hosted, SaaS, and hybrid) and provides client libraries for Python, JavaScript, Java, and Go. The post also includes a demo flow illustrating the initial setup, importing data, and querying processes. Ultimately, it serves as a guide for implementing vector databases and embeddings for practical applications such as chatbots and topic modeling.

---

### [question-answering-with-weaviate-and-openai.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/weaviate/question-answering-with-weaviate-and-openai.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the integration of OpenAI's Q&A capabilities within Weaviate, an open-source vector search engine. It details a simple workflow for non-vectorized data, where Weaviate automatically generates vector embeddings via the OpenAI module instead of requiring manual vectorization. Key features of Weaviate include fast KNN algorithms for efficient querying and multiple deployment options: self-hosted, SaaS, or hybrid-SaaS. The post outlines steps to set up a Weaviate instance, configure the data schema, import datasets, and perform question answering using OpenAI's completions API. Additionally, it emphasizes ease of use, with no need for manual data vectorization, as the integration streamlines the process. The post includes technical prerequisites and code snippets for practical implementation. Overall, readers are guided to effectively harness vector databases for advanced search and Q&A applications.

---

### [Filtered_search_with_Zilliz_and_OpenAI.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/vector_databases/zilliz/Filtered_search_with_Zilliz_and_OpenAI.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses an application of filtered search for movie recommendations utilizing Zilliz and OpenAI. The process involves generating embeddings from movie descriptions through OpenAI and integrating these embeddings with Zilliz's vector database for efficient retrieval.

Key highlights include:
- **Libraries Used**: The tutorial requires libraries such as `openai`, `pymilvus`, `datasets`, and `tqdm`.
- **Data Source**: It utilizes a dataset of over 8,000 movie entries from HuggingFace.
- **Embedding Process**: Text descriptions are embedded using OpenAI's models and stored in Zilliz along with additional metadata (title, release year, rating).
- **Database Operations**: The collection is created, indexed, and populated in batches for optimized performance.
- **Query Execution**: Users can perform queries with descriptions and filtering criteria, receiving relevant movie recommendations based on specified parameters.

This approach enhances the efficiency and relevance of movie searches through advanced embedding and metadata filtering techniques.

---

### [voice_translation_into_different_languages_using_GPT-4o.ipynb](https://github.com/openai/openai-cookbook/blob/0aaed0f1d32f83a43732c9cc23283a037a801782/examples/voice_solutions/voice_translation_into_different_languages_using_GPT-4o.ipynb)
**Source:** openai/openai-cookbook

This blog post introduces the enhanced capabilities of OpenAI's GPT-4o for translating audio files directly between languages. The new audio-in and audio-out modality streamlines the process, allowing users to dub audio content, such as podcasts, in a single step. The guide focuses on translating an English audio file into Hindi, detailing four main steps: 

1. **Transcription:** Optionally transcribe audio to text in the source language.
2. **Dubbing:** Use GPT-4o to directly dub the audio into the target language, retaining certain English terms as needed.
3. **Benchmarking:** Evaluate translation quality using BLEU and ROUGE scores to compare with a reference transcription.
4. **Optimization:** Adjust parameters based on benchmark scores for improved accuracy.

The post emphasizes the distinction between language and script, offering practical applications for various content types across multiple industries.