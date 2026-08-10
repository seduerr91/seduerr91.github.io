---
title: World Models Explained
tags: [Coding, AI]
style: fill
color: dark
description: A practical overview of world models, simulation, and why they matter beyond pure language modeling.
---

I watched [World Models explained in 10min..](https://www.youtube.com/watch?v=ECWC-YlAk1o) by Caleb Writes Code, published on February 18, 2026, and wanted a written version of the core ideas.

The short version is this: a world model is a system that tries to learn how the world changes. Instead of only predicting the next word, it tries to predict the next state of an environment. That sounds simple, but it points at a very different kind of intelligence. If a model can build an internal simulation of reality, it can plan, test alternatives, and reason about consequences before acting.

## What a World Model Is

A world model is an internal representation of how an environment works.

Given what has already happened, it tries to answer questions like:

- What state am I in right now?
- If I take action A, what happens next?
- Which futures are likely and which are impossible?

In practice, this usually means compressing raw observations like images, video, sensor data, or tokens into a latent state and then learning the dynamics of how that state evolves over time.

That is the key difference from a pure language model framing. A language model is excellent at continuing sequences. A world model is trying to capture structure: objects, persistence, motion, causality, constraints, and interaction.

## How These Models Are Trained

The training loop is usually some variation of prediction over time.

The model sees a sequence of observations and sometimes actions:

- observation at time `t`
- action at time `t`
- observation at time `t + 1`

From there it learns to predict missing pieces. Depending on the setup, that might mean:

- predicting the next frame
- predicting a future latent state
- reconstructing hidden parts of an observation
- predicting reward or task outcome

The important idea is that supervision can come from the world itself. You do not need a human to label every scene. Time provides the label. The next moment tells you whether your internal model was useful.

This is one reason world models are appealing for robotics, games, driving, and embodied AI. The raw data is expensive, but the signal is dense.

## What the Training Data Actually Looks Like

One thing that made world models click for me is realizing that the data is usually not "question, answer" data the way LLM instruction tuning often is.

It is more like:

- state
- action
- next state

Or, in more realistic systems:

- observations over time
- actions or controls over time
- labels for what happened next

Here are a few concrete examples from current datasets and benchmarks.

### 1. Robot trajectories: Open X-Embodiment

Google's [Open X-Embodiment](https://robotics-transformer-x.github.io/) is one of the clearest robotics examples.

The dataset contains over `1M+` real robot trajectories across many different robot bodies. A typical training example can look like:

- **Input:** camera frames of a robot arm, proprioceptive state like joint positions, a language instruction such as "pick up the red cup," and previous actions
- **Output:** the next robot action, or a sequence of future actions that should move the robot toward the goal

This is world-model-adjacent because the model has to infer how the scene changes when the robot moves.

### 2. Driving scenes: Waymo Open Motion Dataset

Waymo's [Motion Dataset](https://waymo.com/open/about/) is a good autonomous driving example.

Waymo says the motion data contains `103,354` twenty-second segments, with map data, tracked objects, and sensor context. The windows are broken into `1` second of history plus `8` seconds of future data.

A simplified training example looks like:

- **Input:** `1` second of vehicle and pedestrian history, road geometry, and the local map
- **Output:** predicted trajectories for the next `8` seconds, or simulated future agent behavior

This is exactly the kind of forecasting problem where "what happens next?" is the core learning signal.

### 3. Egocentric human video: Ego4D

The [Ego4D](https://ego4d-data.org/) project is useful for understanding how world-model ideas show up in video and action understanding.

Ego4D contains `3,670` hours of egocentric daily-life video from `923` participants across `74` locations. Here the training signal can look like:

- **Input:** first-person video of someone cooking, assembling, walking, or interacting with objects
- **Output:** anticipated future action, future hand-object interaction, or the next segment of the scene

That is not a physics simulator, but it is still teaching a model to predict how the world unfolds from partial observation.

## What People Actually Compete On

If I wanted to see what real benchmarkable problems in this area look like, I would not only read papers. I would also look at competitions.

Two especially useful ones:

### Lyft Motion Prediction for Autonomous Vehicles

Kaggle's [Lyft Motion Prediction for Autonomous Vehicles](https://www.kaggle.com/competitions/lyft-motion-prediction-autonomous-vehicles) is a very accessible version of a world-model-adjacent problem.

The task is simple to state and hard to solve:

- observe the recent motion of traffic participants
- predict where they will go next

This helps build intuition for multimodal futures, uncertainty, and how much of "world understanding" is actually trajectory prediction under constraints.

### Lux AI Season 3

[Lux AI Season 3 on Kaggle](https://www.kaggle.com/competitions/lux-ai-season-3) is more game-like, but that is part of the value.

It forces people to build agents that:

- reason over a dynamic world
- learn action consequences
- plan over future states

It is not "world models" in the pure research sense, but it exercises the same instincts: build an internal model of the environment, imagine futures, then choose actions.

## NVIDIA and Google: Are There Platforms Yet?

Yes, but they are not symmetrical.

### NVIDIA: Cosmos

NVIDIA absolutely has a platform story here.

[NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/) is its world foundation model platform for physical AI. NVIDIA positions it as a stack of:

- pretrained world foundation models
- tokenizers
- safety / guardrail tooling
- synthetic data and post-training workflows

The target use cases are robotics, autonomous vehicles, and simulation-heavy physical AI. If you want the "there is an industrial platform for world models" answer, this is probably the clearest one right now.

### Google DeepMind: Genie / Project Genie

Google feels more like a family of world-model efforts than one unified platform brand.

The most important pieces right now are:

- [Genie](https://deepmind.google/research/publications/60474/), the original generative interactive environments work
- [Genie 2](https://deepmind.google/blog/genie-2-a-large-scale-foundation-world-model/), which generates action-controllable 3D environments
- [Genie 3 / Project Genie](https://deepmind.google/models/genie/), which Google now describes as a general-purpose world model
- Google's newer [Street View grounding for Project Genie](https://deepmind.google/blog/simulate-real-world-places-with-project-genie-and-street-view/), which makes the "simulate real places" angle more concrete

So yes, Google definitely has a serious world-model program. It just reads more like a frontier research/product line than a single developer platform in the NVIDIA sense.

## Fei-Fei Li and Yann LeCun: Current Relevant Work

Two names come up constantly in this area for good reason.

### Fei-Fei Li

Fei-Fei Li's current work is best understood through [World Labs](https://www.worldlabs.ai/).

The most useful recent pieces for me are:

- [From Words to Worlds: Spatial Intelligence is AI's Next Frontier](https://www.worldlabs.ai/blog/from-words-to-worlds)
- [Marble: A Multimodal World Model](https://www.worldlabs.ai/blog/marble-world-model)
- [World Labs Acquires SceniX](https://www.worldlabs.ai/blog/scenix)
- [Building Worlds That Train Robots](https://www.worldlabs.ai/blog/real-to-sim-to-real)

My summary of her current position:

- "world models" are really about **spatial intelligence**, not just prettier video generation
- the hard problem is making models consistent across **geometry, physics, semantics, and time**
- simulation is not a side quest; it is central if we want robots to scale

That feels like one of the clearest modern statements of the field.

### Yann LeCun

Yann LeCun's current world-model push is showing up most concretely through Meta's [V-JEPA 2](https://ai.meta.com/research/vjepa/) work.

The main official links I would start with are:

- [Introducing V-JEPA 2](https://ai.meta.com/blog/v-jepa-2-world-model-benchmarks/)
- [V-JEPA 2 paper page](https://ai.meta.com/research/publications/v-jepa-2-self-supervised-video-models-enable-understanding-prediction-and-planning/)

My summary of the current LeCun / Meta angle:

- do not model pixels directly if you can avoid it
- learn predictive structure in a latent space
- use self-supervised video understanding as the route to prediction and planning
- combine large-scale passive video with smaller amounts of interaction data to get closer to usable physical intelligence

If Fei-Fei's framing is "spatial intelligence and simulation," LeCun's framing is more "predictive latent structure as the path to world understanding."

## If I Wanted to Learn This Now

Back in the late 2010s, a lot of people got their practical footing in AI through things like fast.ai. I do not think there is one single world-model equivalent today that has exactly the same role.

But there are a few resources that together feel pretty close.

### 1. Hugging Face Deep RL Course

The [Hugging Face Deep RL Course](https://huggingface.co/learn/deep-rl-course/unit0/introduction) is probably the closest low-friction way to build the agent-and-environment intuition that world models sit on top of.

Why it helps:

- teaches environments, actions, rewards, and rollouts
- gives hands-on code
- builds the intuition for why simulation matters

### 2. Hugging Face Robotics Course / LeRobot

The [Hugging Face Robotics Course](https://huggingface.co/learn/robotics-course/unit0/1) and the [LeRobot stack](https://huggingface.co/learn/robotics-course/unit1/2) feel especially relevant now.

Why it helps:

- it is practical
- it works with real robot datasets
- it gets you much closer to the observation-action-next-state mindset than an LLM course does

### 3. Stanford CS422 and Stanford XCS224R

If I wanted something more academic but still aligned:

- [Stanford CS422: Interactive and Embodied Learning](https://cs422interactive.stanford.edu/)
- [Stanford XCS224R: Deep Reinforcement Learning](https://online.stanford.edu/courses/xcs224r-deep-reinforcement-learning)

CS422 is especially relevant because it explicitly focuses on agents learning rich models of the world through interaction.

### My Personal Recommendation

If I were starting today, I would do it in this order:

1. Read the big-picture world-model pieces from World Labs, Meta, NVIDIA, and DeepMind
2. Do the Hugging Face Deep RL course to get the agent loop into muscle memory
3. Do the Hugging Face Robotics / LeRobot material to understand real robot data
4. Study V-JEPA 2, Genie, and Cosmos papers/blogs with that foundation in place

That would give me a much better path into world models than jumping straight from LLM habits into random papers.

## Follow-Ups I Would Keep Open

If I wanted to stay current after reading an overview like this, I would keep a few living bibliographies open instead of relying on random social posts.

- [`tsinghua-fib-lab/World-Model`](https://github.com/tsinghua-fib-lab/World-Model): this is probably the best research map to keep bookmarked right now. It is tied to the 2025 ACM Computing Surveys paper *Understanding World or Predicting Future? A Comprehensive Survey of World Models* and organizes work across model-based RL, self-supervised learning, LLM and MLLM approaches, interactive 3D environments, robotics, driving, and social simulation.
- [`knightnemo/Awesome-World-Models`](https://github.com/knightnemo/Awesome-World-Models): a broader community-curated list that is useful when I want faster coverage across embodied AI, autonomous driving, generative modeling, and agent systems.
- [`JiahuaDong/Awesome-World-Models`](https://github.com/JiahuaDong/Awesome-World-Models): a more survey-shaped collection that is helpful when I want a cleaner conceptual map of the field instead of only a long feed of papers.
- [`alexzhang13/world-models-papers`](https://github.com/alexzhang13/world-models-papers): a smaller, more opinionated list, but especially useful if I want the classical latent-dynamics / model-based RL definition of world models rather than the much looser "LLMs have world models" discourse.

If I were following this space specifically for drones, robotics, and embodied systems, I would filter those lists toward robotics, driving, interactive 3D, and aerial or physical-world simulation rather than treating "world models" as one giant undifferentiated topic.

## A Simple Architecture Intuition

Most explanations of world models boil down to a few moving parts:

1. A perception module that turns observations into a compact representation.
2. A dynamics module that predicts how that representation changes.
3. A prediction or decoding head that turns the latent state into something useful.
4. A planner or policy that uses those imagined futures to choose actions.

Not every system exposes these components cleanly, but the intuition holds. First, compress the world. Then, model its dynamics. Then, use the simulation to act better.

That simulation step matters a lot. If a model can mentally roll forward several candidate futures, it can choose without needing to try everything in the real world. That is safer, cheaper, and often much more sample efficient.

## Why Simulation Matters

The most exciting part of world models is not just prediction. It is imagination.

A good world model lets an agent run internal rollouts:

- If I move left, do I collide?
- If I grasp here, does the object rotate or slip?
- If I say this, what chain of events does it trigger?

This is why people connect world models to planning and agency. A model that can simulate consequences can do more than react. It can search.

That idea shows up all over AI:

- in reinforcement learning agents that learn environments before optimizing behavior
- in robotics systems that need physical intuition
- in video models that must preserve spatial and temporal coherence
- in assistants that may eventually need to reason across software state, tools, and real-world effects

## LLMs Versus World Models

I do not think the right framing is "LLMs or world models." The better framing is "what does each representation make easy?"

LLMs are extremely strong at:

- language
- broad knowledge recall
- flexible instruction following
- synthesizing across huge text corpora

World models are trying to get stronger at:

- persistence over time
- physical and spatial intuition
- counterfactual reasoning
- grounded planning over actions and outcomes

A language model can often talk about the world convincingly. A world model aims to internally simulate it.

The likely long-term direction is not replacement but combination: language interfaces on top of systems that can perceive, remember, simulate, and act.

## Why This Topic Feels Important

World models matter because fluent text is not the same thing as robust understanding.

If we want AI systems that do more than autocomplete language, they probably need some notion of state, dynamics, and consequences. That could matter for:

- robotics
- self-driving systems
- scientific modeling
- game agents
- agentic software that must reason through multi-step actions

At the same time, this area is still hard. Learned simulations can drift. Data collection is expensive. Evaluation is messy. A model that looks impressive in a demo may still fail badly under distribution shift or long planning horizons.

So I see world models less as a solved direction and more as a promising pressure test for the next phase of AI. They ask whether our systems can move from pattern continuation toward structured internal reasoning about change over time.

## Closing Thought

The video frames world models as part of a broader search for richer forms of intelligence beyond pure next-token prediction. That feels right to me.

Language models gave us systems that can explain, summarize, and converse at an astonishing level. World models push on a different question: can a model build a useful internal simulation of reality and use it to decide what to do next?

If that answer keeps getting stronger, it could become one of the most important bridges between generative AI and agents that operate competently in the world.
