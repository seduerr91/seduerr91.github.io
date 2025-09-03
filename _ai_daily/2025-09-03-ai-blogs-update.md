---
title: Revolutionizing Audio AI - OpenAI's New Evals API
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 09-03"
---
OpenAI has announced the introduction of the Evals API with enhanced capabilities for evaluating audio-based AI tasks. This update eliminates the need for text transcription when grading audio responses, instead allowing direct comparison of model outputs to reference audio. The new approach streamlines assessment in real-world applications like customer support, offering customizable grading configurations and more accurate performance measurement. The release includes guidance on setup and usage, signaling a significant advancement in the evaluation of AI systems handling audio inputs.

## New Cookbook Recipes

### [EvalsAPI_Audio_Inputs.ipynb](https://github.com/openai/openai-cookbook/blob/4730fa6c2dfe5368c8358f284e2895773b82b4e5/examples/evaluation/use-cases/EvalsAPI_Audio_Inputs.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces OpenAI's Evals API with a focus on evaluating audio-based tasks. It demonstrates how to grade model-generated responses to audio messages using sampling and model grading, eliminating the previous requirement for transcription to text. The new approach allows for more accurate evaluations in scenarios such as customer support. Key features discussed include the use of an audio dataset for assessment and a custom grading configuration based on the audio response's alignment with a reference answer. The post also outlines the setup process, including dependency installation, dataset preparation, and grading criteria configuration, culminating in running an evaluation and obtaining results. This advancement facilitates the effective assessment of AI models that handle audio input, enhancing their utility in real-world applications.