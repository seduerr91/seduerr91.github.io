---
tags: [Coding]
title: State of AI
description: The State of AI as of Feburary 2024
style: fill
color: secondary
---

An overview of everything In found relevant in the space of AI as of February 2024.

## LangChain Blog

### [Planning & Execute Agents](https://blog.langchain.dev/planning-agents/)

Traditional approach: Reasoning and Action (ReAct) agents
- Uses: repeated thought, act, observation loop
    - `Thought: I should call Search() to see the current score of the game.`
    - `Act: Search("What is the current score of game X?")`
    - `Observation: The current score is 24-21`
    - `... (repeat N times)`
- [LLM Compiler](https://github.com/langchain-ai/langgraph/blob/main/examples/llm-compiler/LLMCompiler.ipynb?ref=blog.langchain.dev): 
  - New approach borrowed from compilers: faster, cost savings, performance improvements.
  - **Planner**: streams a DAG of tasks with each containing a tool, arguments, and list of dependencies.
  - **Task Fetching Unit**- schedules and executes tasks. This accepts a stream of tasks, and runs them once dependencies are met.
  - **Joiner**: dynamically replan or finish based on the entire graph history (incl. results). 

### [Benchmarking Agent Tool Use](https://blog.langchain.dev/benchmarking-agent-tool-use/)

Article on different challenges with different models. GPT-4 is the winning model.


### [Winning the Future of AI](https://blog.langchain.dev/winning-in-ai-means-mastering-the-new-stack/)

#### AI in 2030
Ten years ago - Big data and ML: ad optimizations, search, feed ranking. 
Five years ago - ML Ops: data labeling, churn prediction, recommendations, image classification, sentiment analysis.
One year ago - LLMs and foundational models completely transformed our expectations from AI. 
2024: Agents and co-pilots are taking center stage.  

#### The challenges going forward

Some things don’t change: 
- **Core infrastructure building blocks**: model training and hosting, pretrained foundation models, vector databases, model pipelines and data operations, labeling, evaluation frameworks, and AI application hosting.
- **Engineering Best Practices**: Issues like code quality, deployments, uptime, speed, correctness, etc. 
Challenges for AI applications: 
- **Multimodal data**: Models will be flooded with images and video & make services far more data intensive.
- **Data is growing and becoming more complex**: Massive amounts of text and multimodal data will have to be processed by models and made available to AI applications in real time. Traditional databases, which most engineers are familiar with, struggle mightily with such applications.
- **Hardware is changing**: Hardware accelerators will relieve today’s compute shortages, but the need to leverage (and mix between) a broad and evolving set of accelerators will pose new challenges around portability and performance optimization.
- **Application development**: Becoming more AI centric and well integrated with advanced tooling and AI capabilities. Traditional web development is becoming much more storage and compute intensive. 
- **Model training**: We move away from (only) model development from scratch. Capabilities for model retraining and fine tuning are needed. While this greatly reduces the computational burden it also poses new challenges regarding model customization and composition which will strain our already strained model evaluation capabilities.
- **Cloud centrality**: Data gravity vs. model gravity requires new cloud native services that are very dynamic and optimized in their use of compute, storage, and networking.

#### The AI Stack

**Foundational Models (Sagemaker?)**: Models are expected to either transform a document or perform a task. Transformation usually means generating vector embedding for ingestion in vector databases or feature generation for task completion. Tasks include text and image generation, labeling, summarization, transcription, etc. They not only need to be hosted but constantly retrained and improved.
**Model training and Deployment (Ray)**: Ray, an open source project used as the foundation of AI infrastructure across the tech industry and used to train some of the world’s largest models like GPT-4.
**Vector Database (Postgres)**: Knowledge is at the core of AI and semantic retrieval is the key to making relevant information available to models in real time. To do that Vector databases have matured and specialized to be able to search through billions of embeddings in milliseconds and still remain cost effective.
**AI Application Hosting (Vercel)**: AI apps are more dynamic by nature, making traditional CDN caching less effective, and rely on server rendering and streaming to meet users’ speed and personalization demands. As the AI landscape evolves rapidly, iterating quickly on new models, prompts, experiments, and techniques is essential, and application traffic can grow exponentially, making serverless platforms particularly attractive. In terms of security, AI apps have become a common target of bot attacks to attempt to steal or deny LLM resources or scrape proprietary data. 
**LLM Developer Toolkits (LangChain, LamaIndex)**: Building LLM applications requires taking all the above mentioned components and putting them together to build the “cognitive architecture” of your system. Important components of toolkits include: the ability to flexibly create custom chains, a variety of integrations, and first class streaming support (an important UX consideration for LLM applications). 
**LLM Ops (LangSmith, Zeno)**: Hosting generates issues around the reliability of the application. Common issues include being able to test and evaluate different prompts or models, being able to trace and debug individual calls to figure out what in your system is going wrong, and being able to monitor feedback over time.

### [LangGraph](https://blog.langchain.dev/langgraph/)

**Motivation**: "running an LLM in a for-loop"
Previous chains are directed acyclic graphs (DAGs)
Cycles: ability to use them for reasoning tasks

Use case: when RAG isn't useful, then it's ideal if the LLM can reason that the results returned from the retriever are poor, and maybe issue a second (more refined) query to the retriever, and use those results instead. 
Why LangGraph? When you put agents into production is that often times more control is needed. You may want to always force an agent to call particular tool first. When talking about these more controlled flows, we internally refer to them as "state machines". 
Functionality: At it's core, LangGraph exposes a pretty narrow interface on top of LangChain. StateGraph is a class that represents the graph. 
Initialize this class by passing in a state definition. This state definition represents a central state object that is updated over time. 
The attributes of this state can be updated in two ways: 
- First, an attribute could be overridden completely. This is useful if you want to nodes to return the new value of an attribute. 
- Second, an attribute could be updated by adding to its value. This is useful if an attribute is a list of actions taken (or something similar) and you want nodes to return new actions taken (and have those automatically added to the attribute).

Example: 
```python
from langgraph.graph import StateGraph
from typing import TypedDict, List, Annotated
import Operator

class State(TypedDict):
    input: str
    all_actions: Annotated[List[str], operator.add]

graph = StateGraph(State)
```

Nodes: After creating a StateGraph, you then add nodes with graph.add_node(name, value) syntax. The name parameter should be a string that we will use to refer to the node when adding edges. The value parameter should be either a function or LCEL runnable that will be called. 
This function/LCEL should accept a dictionary in the same form as the State object as input, and output a dictionary with keys of the State object to update.

```python
graph.add_node("model", model)
graph.add_node("tools", tool_executor)
from langgraph.graph import END
```

There is also a special END node that is used to represent the end of the graph. It is important that your cycles be able to end eventually!

**Edges**: After adding nodes, you can then add edges to create the graph. There are a few types of edges.
- The Starting Edge: This is the edge that connects the start of the graph to a particular node. This will make it so that that node is the first one called when input is passed to the graph. Pseudocode for that is:

```python
graph.set_entry_point("model")
```

- **Normal Edges**: These are edges where one node should ALWAYS be called after another. An example of this may be in the basic agent runtime, where we always want the model to be called after we call a tool.

```python
graph.add_edge("tools", "model")
```
- **Conditional Edges**: These are where a function (often powered by an LLM) is used to determine which node to go to first. To create this edge, you need to pass in three things:

  - The upstream node: the output of this node will be looked at to determine what to do next
  - A function: this will be called to determine which node to call next. It should return a string
  - A mapping: this mapping will be used to map the output of the function in (2) to another node. The keys should be possible values that the function in (2) could return. The values should be names of nodes to go to if that value is returned.
An example of this could be that after a model is called we either exit the graph and return to the user, or we call a tool - depending on what a user decides! See an example in pseudocode below:

```python
graph.add_conditional_edge(
    "model",
    should_continue,
    {
        "end": END,
        "continue": "tools"
    }
)
```

- **Compile**: After we define our graph, we can compile it into a runnable! This simply takes the graph definition we've created so far an returns a runnable. This runnable exposes all the same method as LangChain runnables (.invoke, .stream, .astream_log, etc) allowing it to be called in the same manner as a chain.

```python3
app = graph.compile()
```

- **Agent Executor**: We've recreated the canonical LangChain AgentExecutor with LangGraph. This will allow you to use existing LangChain agents, but allow you to more easily modify the internals of the AgentExecutor. The state of this graph by default contains concepts that should be familiar to you if you've used LangChain agents: input, chat_history, intermediate_steps (and agent_outcome to represent the most recent agent outcome)

```python
from typing import TypedDict, Annotated, List, Union
from langchain_core.agents import AgentAction, AgentFinish
from langchain_core.messages import BaseMessage
import operator

class AgentState(TypedDict):
   input: str
   chat_history: list[BaseMessage]
   agent_outcome: Union[AgentAction, AgentFinish, None]
   intermediate_steps: Annotated[list[tuple[AgentAction, str]], operator.add]
```

- **Chat Agent Executor**: One common trend we've seen is that more and more models are "chat" models which operate on a list of messages. This models are often the ones equipped with things like function calling, which make agent-like experiences much more feasible. When working with these types of models, it is often intuitive to represent the state of an agent as a list of messages.

- **Modifications**: One of the big benefits of LangGraph is that it exposes the logic of AgentExecutor in a far more natural and modifiable way. 
  - Force Calling a Tool: For when you always want to make an agent call a tool first. For Agent Executor and Chat Agent Executor.
  - Human-in-the-loop: How to add a human-in-the-loop step before calling tools. For Agent Executor and Chat Agent Executor.
  - Managing Agent Steps: For adding custom logic on how to handle the intermediate steps an agent might take (useful for when there's a lot of steps). For Agent Executor and Chat Agent Executor.
  - Returning Output in a Specific Format: How to make the agent return output in a specific format using function calling. Only for Chat Agent Executor.
  - Dynamically Returning the Output of a Tool Directly: Sometimes you may want to return the output of a tool directly. We provide an easy way to do with the return_direct parameter in LangChain. However, this makes it so that the output of a tool is ALWAYS returned directly. Sometimes, you may want to let the LLM choose whether to return the response directly or not.

### [Reflection Agents](https://blog.langchain.dev/reflection-agents/)

LATS can be used for one time tasks that require reflec/xion such as building software products.
**Reflection** is a prompting strategy used to improve the quality and success rate of agents and similar AI systems. It involves prompting an LLM to reflect on and critique its past actions, sometimes incorporating additional external information such as tool observations.
**Reflexion** by Shinn, et. al., is an architecture designed to learn through verbal feedback and self-reflection. Within reflexion, the actor agent explicitly critiques each response and grounds its criticism in external data. It is forced to generate citations and explicitly enumerate superfluous and missing aspects of the generated response. This makes the content of the reflections more constructive and better steers the generator in responding to the feedback.
**Language Agent Tree Search (LATS)**, by Zhou, et. al, is a general LLM agent search algorithm that combines reflection/evaluation and search (specifically Monte-Carlo trees search) to achieve better overall task performance compared to similar techniques like ReACT, Reflexion, or even Tree of Thoughts. It adopts a standard reinforcement learning (RL) task framing, replacing the RL agents, value functions, and optimizer all with calls to an LLM. The search has four main steps:
- **Select**: pick the best next actions based on the aggregate rewards from step (2) below. Either respond (if a solution is found or the max search depth is reached) or continue searching.
- **Expand and simulate**: generate N (5 in our case) potential actions to take and execute them in parallel.
- **Reflect + evaluate**: observe the outcomes of these actions and score the decisions based on reflection (and possibly external feedback)
- **Backpropagate**: update the scores of the root trajectories based on the outcomes.
- Once you've created the basic outline, it's easy to expand to other tasks! For instance, this technique would suit code generation tasks well, where you the agent can write explicit unit tests and score trajectories based on test quality.
- LATS unifies the reasoning, planning, and reflection components of other agent architectures, such as Reflexion, Tree of Thoughts, and plan-and-execute agents. LATS also from the backpropagation of reflective and environment-based feedback for an improved search process. While it can be sensitive to the reward scores, the general algorithm can be flexibly applied to a variety of tasks.

### [JSON Based Agents with Ollama & LangChain](https://blog.langchain.dev/json-based-agents-with-ollama-and-langchain/)

[Notebook](https://github.com/tomasonjo/blogs/blob/master/llm/ollama_semantic_layer.ipynb?ref=blog.langchain.dev) based on existing LangChain implementation of a JSON-based agent using the Mixtral 8x7b LLM. I used the Mixtral 8x7b as a movie agent to interact with Neo4j, a native graph database, through a semantic layer.
Quite a high-level article. However, the idea is that you can work ollama with json-outputs but you need to account for small-talk bits that do not require json output by just routing those parts to a separate tool of the agent. 

TODO Serve Ollama local and interact with it: ollama run llava, ollama run codellama:70b, ollama run llama2-uncensored:7b, ollama run sqlcoder:15b, ollama run llama2:13b.

### [OpenGPTs](https://blog.langchain.dev/opengpts/)

OpenGPTs runs on MessageGraph, a particular type of Graph we introduced in LangGraph. This graph is special in that each node takes in a list of messages and returns messages to append to the list of messages.

Architectures: 

- Assistants: These can be equipped with arbitrary amount of tools and use an LLM to decide when to use them. Only work with best-of-class models, because weak models consistently fail. 
- RAG: These are equipped with a single retriever, and they ALWAYS use it.
- ChatBot: These are just parameterized by a custom system message.

Persistence: Dealt with through CheckPoint objects. This checkpoint object will then save the current state of the graph after calling each node.

Configuration: mark fields as configurable and then pass in configuration options during run time.

New Tool: Robocorp’s Action Server. Robocorp’s action server is an easy way to define - and run - arbitrary Python functions as tools.


### [Connery: OpenSource Plugin Infrastructure for OpenGPTs and LLM Apps](https://blog.langchain.dev/meet-connery-an-open-source-plugin-infrastructure-for-opengpts-and-llm-apps/)

Great article about making AI production-safe! They offer their own system that seems like a no-code tool to integrate certain features. I think this provides inspo on how to make our tools even better. However, we'd like to stick to code.

#### Essential integration and personalization features:

- **User authentication, authorization**, and a user interface to manage connections and personalization.
- **Connection management**: Users need a secure way to authorize AI-powered apps to access their services, such as Gmail, using OAuth. For services not supporting OAuth, like AWS, secure storage of access keys is essential through Secrets Management.
- **Personalization**: The user can configure and personalize integrations. For example, specify a custom signature for all the emails. Or personalize metadata for actions so LLMs better understand the personal use case. They can also provide personal information such as name and email so LLMs can use it as additional context when calling actions.

#### AI safety and control

Risks like misinterpreted commands can be mitigated with:

- Metadata allows LLMs to better understand available actions and consequently reduce the error rate in selecting and executing them. It includes an action description with a clear purpose, an input schema describing the available parameters and validation rules, and the action outcome.
- Human-in-the-loop capability to empower the user with the final say in executing actions for critical workflows. This should also allow for editing suggested input parameters before running an action - for example, reviewing an email before sending.
- Audit logs for consistency, compliance, and transparency.

#### Infrastructure for integrations

- Authorization for integrations with third-party services using OAuth, API Keys, etc.
- Support different integration types and patterns like CRUD operations, async operations, event-driven operations, etc.
- Support integration code and its runtime


### [Multi-Agent Workflows](https://blog.langchain.dev/langgraph-multi-agent-workflows/)

Benefits: 
- Grouping tools/responsibilities can give better results. An agent is more likely to succeed on a focused task than if it has to select from dozens of tools.
- Separate prompts can give better results. Each prompt can have its own instructions and few-shot examples. Each agent could even be powered by a separate fine-tuned LLM!

Types:
- Multi Agent Collaboration: different agents (e.g. researcher and chart generator) collaborate on a shared scratchpad of messages (router). This means that all the work either of them do is visible to the other. This has the benefit that other agents can see all the individual steps done.
- Agent Supervisor: multiple agents are connected, but compared to above they do NOT share a shared scratchpad. Rather, they have their own independent scratchpads, and then their final responses are appended to a global scratchpad.
- Hierarchical Agent Teams: the agents in the nodes are actually other langgraph objects themselves. This provides even more flexibility than using LangChain AgentExecutor as the agent runtime

Example of using [CrewAI with LangChain](https://youtu.be/OzYdPqzlcPo) and LangGraph to automate the process of automatically checking emails and creating drafts. CrewAI orchestrates autonomous AI agents, enabling them to collaborate and execute complex tasks efficiently.

### [CrewAI Unleashed](https://blog.langchain.dev/crewai-unleashed-future-of-ai-agent-teams/)

Concepts:

- Agents: These are like your dedicated team members, each with their role, background story, goal and memory
- Tools: The equipment our agents use to perform their tasks efficiently, you can use any existing ones from LangChain or quickly write your own
- Tasks: Small and focused mission a given Agent should accomplish
- Process: This is the workflow or strategy the crew follows to complete tasks.
- Crew: Where Agents, Tasks and a Process meet, this is the container layer where the work happens

TODO Play with CrewAI Examples

### [Adding Long Term Memory to OpenGPTs](https://blog.langchain.dev/adding-long-term-memory-to-opengpts/)

- LLMs are stateless. 
- Currently, people either use conversational memory (a list until you reach the token limit of your model) or semantic memory (which is using the RAG approach.)
- New idea: Reflective approach

Solution: 

- Recency: fetch memories based on recent messages (combination of conversation memory and just upweighting messages based on time stamp after fetching). Can help if information is spread out over multiple messages, by reflecting over multiple message a synthesis can be generated.
- Relevancy: fetch relevant messages (semantic memory). The second issue is partially addressed by the recency weighting. However, likely not fully solved.
- Reflection: they don't just fetch raw messages, but rather they use an LLM to reflect on the messages and then fetch those reflections. The third issue isn't really addressed, this is still a pretty general form of memory (but that's fine, that's what it was aiming to do).

Long term memory is a very underexplored topic. Part of that is probably because it is either (1) very general, and trends towards AGI, or (2) so application specific, and tough to talk about generically.
In this case, it becomes important to think critically about:

What is the state that is tracked?
How is the state updated?
How is the state used?

### [Prompt Guide AI](https://www.promptingguide.ai/research/rag#rag-research-insights)

Interesting site with lots of knowledge and related info on AI

### [Microsoft’s LASER](https://www.theverge.com/2024/1/31/24057362/microsoft-llm-accuracy-laser-research-ai)

Original [article](https://arxiv.org/abs/2312.13558)

- With LASER, researchers can “intervene” and replace one weight matrix with an approximate smaller one. 
- Weights are the contextual connections models make. The heavier the weight, the more the model relies on it. So, does replacing something with more correlations and contexts make the model less accurate? Based on their test results, the answer, surprisingly, is no.  

## Company AI Architecture Articles

### [Rakuten](https://blog.langchain.dev/rakuten-group-builds-with-langchain-and-langsmith-to-deliver-premium-products-for-its-business-clients-and-employees/)

Offering three different agenda: AI Analyst (market intelligence research assistant), AI Agent (self-serve customer support), AI Librarian (answer client questions No word on actual impact it has. Like adoption rate and improvements.

### [Dataherald](https://blog.langchain.dev/dataherald/)

Build a Text-to-SQL engine based on agents. They offer a free API and work with golden SQL queries. 
They have two bots: one for ingestion by querying target SQL databases, and one for query generation, like my tool.

## ChristopherGS

### [Production RAG with PG Vector and OSS Model](https://christophergs.com/blog/production-rag-with-postgres-vector-store-open-source-models)

What’s an Index?
A data structure designed to enable querying by an LLM. In LlamaIndex terms, this data structure is composed of Document objects.

What’s a Vector Store Index?
The Vector Store Index is the predominant index type encountered when working with Large Language Models (LLMs). Within LlamaIndex, the VectorStoreIndex data type processes your Documents by dividing them into Nodes and generating vector embeddings for the text within each node, preparing them for querying by an LLM.

### [DeepEval](https://christophergs.com/blog/ai-engineering-evaluation-with-deepeval-and-open-source-models)

#### Problems of LLMs:

- Suffer from hallucinations
- Struggle to keep up-to-date with the latest information
- Respond with irrelevant information
- Respond with correct but suboptimal information (like, the second biggest reason for something instead of the biggest)
- Totally lie to you
- Return toxic or dangerous content you wouldn’t want to share with your users
- Surface secret content you don’t want to unveil (often via chatbot prompt jailbreaking)

In a typical AI application, the areas of evaluation fall into two main areas:

Response Evaluation: Does the response match the retrieved context? Does it also match the query? Does it match the reference answer or guidelines?
Retrieval Evaluation: Are the retrieved sources relevant to the query?

##### Steps to Create an Evaluation Process

- Create an evaluation dataset
- Identify relevant metrics for evaluation
- Develop a Scorer to calculate metric scores, bearing in mind that outputs from large language models (LLMs) are probabilistic. Therefore, your Scorer’s implementation should acknowledge this aspect and avoid penalizing outputs that, while different from anticipated responses, are still correct.
- Apply each metric to your evaluation dataset
- Improve your evaluation dataset over time
- Setting up an evaluation framework in this way enables you to:
  - Run several nested for loops to find the optimal combination of hyperparameters such as chunk size, context window length, top k retrieval etc.
  - Determine your optimal LLM - especially important when evaluating open-source LLMs
  - Determine your optimal embedding model
  - Iterate over different prompt templates that would yield the highest metric scores for your evaluation dataset (although note that prompts won’t perform the same across different models, so always group prompts and models together)

##### DeepEval for Evaluation

Use DeepEval for a few reasons: It is open-source, it works with your existing Python pytest suite of tests, it offers a wide variety of evaluation metrics, the source code is readable, it works with open-source models

Also it offers metrics: General Evaluation (G-Eval - define any metric with freetext), Summarization, Faithfulness, Answer Relevancy, Contextual Relevancy, Contextual Precision, Contextual Recall, Ragas, Hallucination, Toxicity, Bias

Example testing for hallucination: Instantiate the HallucinationMetric, giving it a score threshold which the test must pass. Under the hood, this particular metric downloads the vectara hallucination model from HuggingFace.

No one wants to pay to run their test suite. Open-source evaluation is a really powerful tool, and I expect to see a lot more adoption of it in the coming months. I

### [Technical User Intro to LLM](https://christophergs.com/blog/intro-to-large-language-models-llms)

#### What is a Large Language Model?

At its core, a Large Language Model (LLM) comprises two essential components:

- Parameter File: This file houses the parameters. Each parameter is represented as a 2-byte float16 number. For instance, the llama-2-70b model has a 140GB parameter file due to its 70 billion parameters. More on how this file is generated shortly.
- Runtime File: This is a programming script, often compact enough to be written in around 500 lines of C code (though it could be written in any language). It defines the neural network architecture that utilizes the parameters to function.

llama-2-70b utilized around 10TB of web-crawled text and required significant computational resources:
  - Compute Power: Utilized about 6,000 GPUs over 12 days.
  - Cost: Approximated at $2M.

This training stage effectively compresses the internet text into a ‘lossy’ zip file format, where the 10TB of data is reduced to a 140GB parameter file, achieving a compression ratio of about 100X. Unlike lossless compression (like a typical zip file), this process is lossy, meaning some original information is not retained.


#### Neural Network Operation

At its heart, a Neural Network in an Large Language Model aims to predict the next word in a given sequence of words. The parameters are intricately woven throughout the network, underpinning its predictive capabilities. There’s a strong mathematical relationship between prediction and compression, explaining why training an LLM can be likened to compressing the internet.

- Stage One: Pretraining | This stage creates what we call the base model, essentially a sophisticated document generator.
- Stage Two: Fine Tuning | Fine tuning, or ‘alignment,’ transforms the base model into an assistant. This involves training on high-quality, manually generated Q&A sets, typically comprising around 100,000 conversations.

Comparison of LLMs: Models are ranked using an [Elo rating system](https://en.wikipedia.org/wiki/Elo_rating_system), akin to chess ratings. This score is derived from how models perform in comparison to each other on specific tasks.

#### The Future of Large Language Models and Generative AI

Scaling Laws: The effectiveness of LLMs in next-word prediction tasks depends on two variables: Number of Parameters (N),  Training Text Volume (D)
Current trends suggest limitless scaling potential in these dimensions. This means that LLMs will continue to improve as companies spend more time and money training increasingly large models. This means that we are nowhere near close to “topping out” in terms of LLM quality.