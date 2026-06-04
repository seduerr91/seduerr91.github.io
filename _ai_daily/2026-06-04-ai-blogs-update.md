---
title: OpenAI Evals Retires - Embrace Promptfoo for AI Testing
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 06-04"
---
OpenAI is discontinuing its Evals product and recommending users transition to Promptfoo, an open-source CLI tool and library that offers more flexible, code-integrated workflows for evaluating and red-teaming AI applications. Users can export their test data and scoring criteria from OpenAI Evals into Promptfoo, though some evaluations may require additional manual setup. This migration is intended to improve user experience by enabling local and CI-based testing, deeper integration with application code, and more adaptable evaluation processes. Users are encouraged to adopt Promptfoo for comprehensive, customizable AI application testing.

## New Cookbook Recipes

### [moving-from-openai-evals-to-promptfoo.md](https://github.com/openai/openai-cookbook/blob/a71f65310a8948193cea1e3996ec74b1164d091c/examples/evaluation/moving-from-openai-evals-to-promptfoo.md)
**Source:** openai/openai-cookbook

OpenAI is discontinuing its Evals product and recommends transitioning to Promptfoo for evaluation workflows. Promptfoo is an open-source CLI and library that allows users to evaluate and red-team AI applications with a more flexible, code-oriented workflow. It enables local or CI-based executions, while OpenAI Evals managed evaluations through its platform dashboard.

Users can export evaluations from OpenAI Evals into runnable Promptfoo configurations, preserving key elements such as test data and scoring criteria. However, Promptfoo setup may require additional manual configurations for certain evaluations and grading processes. Historical evaluation results can be imported into Promptfoo for ongoing reference.

The migration aims to enhance user experience by integrating evaluations with application code and adapting testing as needs evolve. Users are encouraged to install Promptfoo, configure their evaluations, and explore its capabilities for comprehensive testing and development workflows.