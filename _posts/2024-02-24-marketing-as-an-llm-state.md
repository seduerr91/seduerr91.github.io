---
tags: [Coding]
title: Getting started with CUDA
description: My summar of a video by Jeremy Howard, FastAPI
style: fill
color: secondary
---

- First, this is a use case with a really positive societal benefit. 
- Second, the implementation mirrors how we are thinking about more complex workflows internally - as state machines! -
- Check out LangGraph (which we just released) as an easy way to build these types of applications.

Mental Health Crisis
20% of Americans suffer with their mental health each year. While the demand for psychotherapy is steadily rising, supply is severely limited. Wait lists for therapy are often several months and once you finally get an appointment, it costs upwards of $100 per session. This is more than half of what the average American earns per day.

Today, most people who are suffering from mental health challenges can’t access any support. We believe that AI can help solve the mental health crises and are going to explain in this post how we are approaching it by developing Sonia, an AI therapist.

AI Therapy
Going back in time, the concept of AI therapy first came up in 1964 when MIT professor Joseph Weizenbaum developed the computer program ELIZA. Modeled after a Rogerian psychotherapist, the chatbot was originally built as an antic to show just how superficial human-to-computer interaction was. To his surprise and confusion, people started spending hours talking to ELIZA, valuing the non-judgmental responses that offered a safe space for expressing their feelings.

Fast forward almost half a century, the rise of Large Language Models (LLMs) and the release of ChatGPT have brought the spotlight back to AI therapy. In the past 15 months since its release, many have reported turning to ChatGPT to talk about their emotions and struggles.

ChatGPT represents a promising step towards making mental health care more accessible through the use of AI. However, the problem with a vanilla model like ChatGPT is the lack of domain-specific conversation structure. A single system prompt isn’t able to guide through an entire 30-60 minute conversation where the client and therapist need to continuously dig deeper to get to the core of a problem. While these models were pre-trained on countless psychology textbooks (leading to therapeutical knowledge), transcripts of therapy sessions are barely available publicly (leading to a lack of therapeutical behavior). ChatGPT is an RLHF fine-tuned model that receives instructions and provides solutions, which is very different from how a therapist should engage in a therapy session.

Cognitive Behavioral Therapy
Before we get started on the technical details, we’ll provide a quick introduction to cognitive behavioral therapy, Sonia’s main therapeutical approach. CBT is one of the most widespread forms of psychological treatment, proven to be effective for numerous mental health problems including anxiety and depression. The approach is centered around the cognitive model of CBT, which describes the interconnectedness of situations, thoughts, behaviors, and emotions. The model states that it isn’t the situation itself that impacts how we feel or react, but rather our interpretations and thoughts about the situation. CBT aims to help clients become aware of, challenge, and reframe these negative interpretations and thoughts.

LLM State Machine
It is a widespread belief that therapy is more of an art than science. Quite the opposite, CBT is a very structured therapeutical approach. A session as described by its founding father Aaron Beck consists of 8 well-defined stages, that get traversed by the therapist. Each stage of the session, such as “mood check”, “agenda setting”, or “feedback”, has a very specific purpose and objective. Looking at it from a computer science perspective, this structure makes it perfectly suited to be modeled as a finite-state machine, which is exactly what we did.

Architecture
The main task of an AI (and human) therapist is to respond to their client. Every response requires new context and information, which is dependent on past interactions with the client, the stage of the ongoing session, the current topic that is being addressed, or the sentiment of the very last client message, just to name a few. So how can we make sure that our AI therapist has the right context at the right time?

Many retrieval-augmented generation (RAG) solutions would simply embed a corpus of psychological knowledge and semantically retrieve the related data. However, fully relying on this would not sufficiently exploit the well-defined structure of CBT therapy and have a suboptimal signal-to-noise ratio.

On the other extreme, hard-coding a single prompt for each stage does not allow enough flexibility, which is crucial for personalized and effective treatment. In CBT, each stage can be broken down into several more fine-grained substages, which of course shouldn’t all be treated equally.

Aiming to find a middle ground, we built a deep decision tree of structured retrieval and prompting for each stage using the LangChain framework. LangChain’s customizable memory modules and agent constructors accelerated our development significantly. Once it was all set up, monitoring and testing on LangSmith saved us many hours while iterating on the prompts.

Transitions
After we built the agents for each stage, we needed to think about how to transition between the 8 distinct stages of a CBT therapy session. The tricky part here is that this task is highly domain-specific to therapy. It’s neither a fully syntactic, nor a fully semantic problem.

On the syntactic side, rules such as “there should be exactly 8 messages in stage X” or “stage X should last at most 5 minutes” could easily be implemented. But what if the client asks a follow-up question in the 8th message or has to take a short break for a few minutes? Point being, you can’t fully rely on these types of rules (but you also can’t completely ignore them).

On the semantic side, one potential approach is to run repeated LLM calls to determine whether all stage objectives have been met. The output can then either be used to explicitly switch the context of the agent, or more implicitly by integrating the output into the prompt that generates the response to the client.

No single one of these approaches is sufficient, but collectively they perform pretty well. Not surprisingly, this combination is also being implemented by a human therapist in practice. They need to stay within certain set boundaries such as session duration, but make sure to smoothly finish covering important topics.

Asynchronous Emergency Check
As recently described by Bill Gates, an AI mental health agent can and should do much more than just generating responses. One example of such an additional task is emergency detection. If a client is in immediate danger of hurting themselves or others, they shouldn’t be talking to a machine - at least not yet in early 2024. We have implemented several asynchronous checks that evaluate the risk contained in every message that the client types or speaks. Above a certain threshold, Sonia immediately redirects clients to national hotlines.

Another example are therapeutical worksheets. If a client struggles to articulate their thoughts, values or goals, a therapist has an inventory of exercises and worksheets to help. Implemented quite similar to a tool as described by LangChain, our AI therapist Sonia identifies the right time to interrupt the session and present an interactive worksheet to the client in the frontend. Those results then get analyzed and leveraged to continue the session.

Conclusion
AI has the potential to make mental health care accessible to anyone, anywhere, and anytime at 1% of today’s costs. We are excited to build something that has the potential to positively impact the lives of millions around the world and are grateful for partners like LangChain that support and accelerate us in this process.

Sonia: AI Therapy is live on the App Store.

Other State Machines & LangGraph
Modeling CBT as a state machine allowed us to find the right balance between structure and flexibility. While the implementation details are quite domain-specific, we believe that the architecture and mental model can be used for a broad range of conversational AI applications (customer support, candidate screening, tutoring, etc.). LangChain just recently released LangGraph, a module to create stateful cyclical graphs on top of LangChain. One of the main use cases is the concept of multi-agent workflows, defined as ‘independent actors powered by language models connected in a specific way’. Put simply, it is the optimal framework to build an LLM state machine. We wish this would have existed when we started building back in October, and highly encourage everyone looking into a state-machine-like application to check it out. Please let us know if you do, we are happy to chat and share learnings!

Inspired by the Sonia AI article:  https://blog.langchain.dev/mental-health-therapy-as-an-llm-state-machine/