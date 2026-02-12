---
title: Revolutionizing Image Review with OpenAI’s Evals API
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 02-12"
---
OpenAI has announced the Evals API for image-based tasks, allowing users to systematically evaluate model-generated responses to images. The main trends include increased support for custom datasets (like VibeEval), flexible grading of model outputs based on relevance and accuracy, and streamlined setup and logging options. The emphasis is on empowering users to efficiently experiment with and enhance evaluation processes across diverse image-based AI applications.

## New Cookbook Recipes

### [EvalsAPI_Image_Inputs.ipynb](https://github.com/openai/openai-cookbook/blob/ac3d7a456b6165e7290d5908dd38d4b6c168259f/examples/evaluation/use-cases/EvalsAPI_Image_Inputs.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces OpenAI's Evals API for image-based tasks, showcasing how to evaluate model-generated responses to images. Key highlights include the use of the VibeEval dataset, which contains user prompts, images, and reference answers, facilitating the creation of a customized data source for grading. The setup requires installing necessary libraries, preparing the dataset, and configuring evaluation parameters, including a grader that scores model responses based on relevance and accuracy. The post outlines steps for running the evaluation and retrieving results, with options for handling logs as data sources. The conclusion encourages experimentation with various image-based use cases, emphasizing the versatility of the Evals API in enhancing evaluation efficiency.