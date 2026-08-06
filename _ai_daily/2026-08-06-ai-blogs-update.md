---
title: Revolutionizing AML Analysis with OpenAI Agents SDK
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 08-06"
---
The blog posts highlight OpenAI Agents SDK’s integration with GPT-5.6 Sol on Amazon Bedrock for anti-money laundering (AML) analysis, demonstrating a structured and role-separated approach to investigations. Key trends include deterministic, offline investigation workflows with clear boundaries between AI, application controls, and human oversight, minimizing unnecessary model calls and promoting explainability. The demonstration leverages synthetic data, detailed configuration steps, and purpose-built analytic tools to simulate and assess potentially suspicious activities, showcasing the versatility and practical application of AI-powered tools in regulated financial compliance environments.

## New Cookbook Recipes

### [evidence_grounded_aml_agent_with_bedrock.ipynb](https://github.com/openai/openai-cookbook/blob/5645f6fb319b224c4853e643e6fecfee9d8886aa/examples/partners/AWS/evidence_grounded_aml_agent_with_bedrock.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses a demonstration of anti-money laundering (AML) analysis utilizing the OpenAI Agents SDK with GPT-5.6 Sol on Amazon Bedrock. It outlines a structured process where an alert triggers an investigation, employing deterministic calculations without making model calls in its default offline path. The blog details the separation of workflows into four boundaries, ensuring clear roles for AI, application controls, and human oversight.

The setup requires Python 3.10 and involves configurations for AWS credentials if paid features are used. Synthetic data is employed to simulate transactions, highlighting how alerts based on unusual cash activities are assessed without filing Suspicious Activity Reports (SARs). Specific tools and classes are defined for the investigation process, including tools to gather data and perform typology checks to identify potential signals of illicit activity.