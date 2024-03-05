---
tags: [Coding]
title: Shifts in LLM Usage
description: Reflections on my State of AI review.
style: fill
color: secondary
---

# Main Shift in AI in early 2024

Recently, a significant shift has occurred from text generation (e.g., generating subject lines or database queries) to drive agentic decision-making. In this paradigm, the AI encounters a problem, is equipped with tools to address it, and independently determines a course of action to achieve an objective and resolve the problem.
It is worth noting that such agentic endeavors are currently limited by slow processing and response times. Increasing tokens-per-minute (TPM) is a key objective for many companies, and the success of agent interaction has been demonstrated in tests that employed GPT-4 for the task of generating a newsletter from the crawled subreddit LocalLLama.
Nonetheless, advancements in the areas of increasing TPM, hosting local LLMs, continuous improvements in models (such as Gemini Ultra or the next GPT iteration), and enhanced opportunities for retrieval augmented generation, wider context spans (e.g., Gemini's 1.5M tokens), and fine-tuning LLMs (e.g., PEFT and Lightning AI) are poised to overcome these limitations in the foreseeable future.

# Technical Perspective: CompilerCrew & Memory

The following layers are considered important for an agentic state-of-the-art AI architecture:

1. `Interaction layer`: Allows for interaction with the orchestrating agent.
2. `Orchestration layer`: Coordinates interactions with user, agent crew, and accesses memory layer.
3. `Model layer`: Different models can be utilized for different types of functionality.
4. `Storage layer`: Considerations abotu different memory types and storage of business logic.
5. `Agents layer`: Agents (referred to as a crew) to 

## 1. Interaction Layer

The interaction layer is a crucial component of the system, facilitating seamless interactions with AI and enabling integration with various platforms. It comprises three key elements: an AI Portal, an API endpoint, and administrative tools (observability, prompt management).

### AI Chat Portal

An AI chat portal serves as a dedicated platform for interactions with the agentic AI system. It provides a user-friendly interface tailored for efficient and effective communication with the AI system (implements streaming for faster responses). Is is further characterized by the following properties: 

- Collaboration: The AI Portal facilitates collaboration among users, allowing them to engage in discussions and share ideas. 
- Common knowledge base: Allows access to common knowledge base so that different users within a client organization can collaborate, be updated on processes.
- Transparency into Agentic Thinking: Allows users to gain insights into the thinking processes of the AI system. This transparency enables users to better understand how the AI arrives at its conclusions and recommendations. 

This chat portal can be quickly implemented with Chainlit. Besides integration with various other platforms should be considered. Integrating the orchestrator also wide range of platforms, including Slack and MS Teams, Email and Zoom allows users to interact with the AI system directly within their preferred communication channels, enhancing productivity and streamlining workflows. 

Additionally, I recommend the following systems:
- Observability tools (suggestion LangSmith) need to be integrated. An observability tool provides real-time monitoring and analysis of the AI system's performance. It offers valuable insights into various metrics, including latency, throughput, and error rates. Any deviations or drift in quality should be communicated to a Slack channel. This should be not only developer-facing but also product-team facing.
- Prompt Management Tool/Freeplay: In addition to the elements mentioned above, the interaction layer also includes a prompt management tool. This tool assists users in crafting effective prompts that elicit the desired responses from the AI system. It shall make it easy for the product team to make adjustments to the AI system.

## 2. Orchestration Layer

This orchestration layer needs to be optimized for speed by supporting streaming and smart prompting strategies. Based on a review from February 2024, the currently most suitable agentic architecture is the LLMCompiler. The LLMCompiler, by Kim, et. al., is an agent architecture designed to speedy task execution. The LLM Compiler has the following main components:

- Planner: streams a DAG of tasks. Each task contains a tool, arguments, and list of dependencies.
- Task Fetching Unit schedules and executes the tasks. This accepts a stream of tasks. This unit schedules tasks once their dependencies are met. Since many tools involve other calls to search engines or LLMs, the extra parallelism can grant a significant speed boost (the paper claims 3.6x).
- Joiner: dynamically replan or finish based on the entire graph history (including task execution results) is an LLM step that decides whether to respond with the final answer or whether to pass the progress back to the (re-)planning agent to continue work.

The key runtime-boosting ideas here are:

- Planner outputs are streamed; the output parser eagerly yields task parameters and their dependencies.
- The task fetching unit receives the parsed task stream and schedules tasks once all their dependencies are satisfied.
- Task arguments can be variables, which are the outputs of previous tasks in the DAG. For instance, the model can call search("${1}") to search for queries generated by the output of task 1. This lets the agent work even faster than the "embarrassingly parallel" tool calling in OpenAI.
- By formatting tasks as a DAG, the agent can save precious time while invoking tools, leading to an overall better user experience.

The orchestrator agent communicates with the user through the interaction layer and instructs, checks, manages, and steers the agent crew.

It's tasks involve:

- Communicate with the user to understand the prompt goal.
- Steers the other agents toward a unified strategy based on prompt instructions.
- Adjust parameters for the existing campaign based on the given prompt.
- Recommend next best action based on campaign outcomes and agent reports.

## 3. Model Layer

Consider employing a hybrid architecture of diverse LLMs to optimize the balance between quality and speed in achieving the agent's goals. This approach includes:

- Leveraging proprietary large language models (like GPT-4) for core tasks like powering CrewAI, ensuring superior performance in complex scenarios.
- Integrating open-source LLMs for solving well-defined subtasks, providing flexibility and cost-efficiency.
- Fine-tuning open-source models to create specialized tools tailored to the agent's needs.
- Exploring speed optimization techniques such as speculative sampling, which uses a smaller model to predict multiple steps ahead and efficiently batch scoring for the larger LLM.
- Investigating CALM (Contextual Adaptive Language Modeling), an approach that allows the LLM to dynamically exit early based on confidence levels, potentially reducing computation time. 

These methods can be implemented independently or in combination to significantly enhance response generation speed.

## 4. Storage Layer

There are a myriad of considerations when it comes to the storing of all data points involved, hence, I am listing different types, techniques and consider a high-level concept of key aspects to store.

### Storage Layer Types

- Conversation memory: The n most recent messages. This memory is used to store the context of the conversation so that the AI can respond in a way that is relevant to what the user has said.
- Semantic memory: A RAG for messages not documents. This memory is used to store information about the previous conversations.
- Business Logic: Contains agents, marketing concepts, cordial knowledge. This memory is used to store the rules that govern the AI's behavior.
- Tools: Different tools that agents have available to achieve business objectives. This memory is used to store information on the tools that the AI can use to interact with Cordial.

### Storage Techniques
- Recency: Upweighting messages based on a timestamp. This technique is used to ensure that the AI is responding to the most recent messages in the conversation.
- Relevancy: Classical RAG. This technique is used to ensure that the AI is responding to messages that are relevant to the user's query.
- Reflection: Before storing a conversation, have an AI reflect on it (pre-fill categorial variables, adding summaries). This technique is used to ensure that the AI is storing the most important information from the conversation.

### Storage Implementation Concept

- Agents: Name, Description, Campaigns, Tools
- Campaigns: Timestamp, Audience, Messages, KPIs (opening rates, cart adds, …) 
- Client: Name, Clients, Communication Styles, …
- Communication Tables: 
- Conversations (on user level), Campaigns and performance (on corporate account level), Objectives (on corporate account level), Share outs (on corporate account level)
- Logs

## 5. Agent Layer

### The Data Maestro
This agent tirelessly aggregates, cleans, and enriches your data from multiple sources. It tirelessly seeks out the most promising patterns and segments for maximum targeting effectiveness.

### The Insights Oracle
Driven by advanced machine learning, this agent analyzes the patterns uncovered by the Data Maestro. It reveals critical insights about customer preferences, behaviors, and potential churn signals.

### The Campaign Strategist
Armed with the Insights Oracle's recommendations, this agent drafts multi-channel campaign blueprints tailored to your goals. It outlines optimal audiences, messaging ideas, and even suggests A/B testing setups for continuous improvement.

### The Workflow Wizard
This agent loves turning plans into action. It automates email flows, sets up SMS triggers based on website activity, and orchestrates campaigns across platforms with precision.

### The Optimization Guru
No campaign is ever 'finished' with this agent on board. It scrutinizes performance metrics in real-time, tweaking subject lines, adjusting send times, and suggesting content changes to enhance results. 

## Critical Appreciation

With the current limitations of AI, that I mentioned in the introductory part of this article, it is crucial to design our AI architecture in a way that it minimizes these shortcomings. 
Aspects to pay particular attention to are:

- `Large Context Management`: Every business use case likely involves vast amounts of information exceeding GPT-4's token span. `Solutions`: Employ summarization techniques to condense data before feeding it to the LLM. Develop hierarchical information retrieval systems where only the most relevant portions are provided to GPT-4.
- `Protecting Sensitive Data`: Frontend architecture must prevent inadvertent exposure of critical data to external services like Slack. `Solutions`: Implement strict filtering and aggregation mechanisms on the frontend. Potentially use local, self-hosted LLMs for processing sensitive information.
- `Preventing Rabbit Holes`: Agents powered by LLMs can become distracted or generate irrelevant content. `Solutions`: Human-in-the-loop oversight is essential. Develop 'sanity checks' where the generated output is evaluated for relevance and coherence before being presented to the user.
- `Controlling Costs`: Extensive use of GPT-4 could become expensive due to its high token generation rates. `Solutions`: Establish a tiered LLM approach. Smaller, cheaper models handle initial requests, escalating to GPT-4 only when necessary. Explore open-source LLMs or fine-tuned models for specific, less demanding tasks.
- `Optimizing Response Speed`: GPT-4's processing time creates a bottleneck. `Solutions`: Monitor performance metrics closely. Implement techniques like speculative sampling or CALM (explained earlier). Consider 'interim' responses while the primary model is working.
- `Complexity Management`: The interaction between many moving parts can lead to unpredictable performance. `Solutions`: Adopt structured project management methodologies. Emphasize modular design and robust testing of individual components.
- `Framework Limitations`:  CrewAI's sequential nature and success rate need improvement. Solutions: Explore reinforcement learning techniques to help the agent learn from successes/failures. Investigate more sophisticated agent architectures that can handle parallel tasks and dynamically adjust workflows.
- `Managing Implementation`: The sheer number of components and integrations can be overwhelming. Solutions: Prioritize by use case, tackling the most impactful or feasible ones first. Define clear interfaces and data exchange protocols between system elements. Use rigorous documentation and change management throughout.