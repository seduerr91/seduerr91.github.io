---
title: Evals Discontinued - Embrace Open-Source with Promptfoo
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 08-25"
---
OpenAI has discontinued its Evals product and is directing users to transition to Promptfoo, an open-source alternative for AI evaluation workflows. Promptfoo distinguishes itself with a code-centric, configurable CLI and YAML-based setup that integrates easily into development pipelines. The main trends highlighted include a shift toward open-source, locally managed evaluation tools and greater workflow flexibility, with robust documentation available to support migration and customization during the transition.

## New Cookbook Recipes

### [moving-from-openai-evals-to-promptfoo.md](https://github.com/openai/openai-cookbook/blob/5a49d2a28a2779b1928d9cee988510e85e014910/examples/evaluation/moving-from-openai-evals-to-promptfoo.md)
**Source:** openai/openai-cookbook

OpenAI has announced the discontinuation of its Evals product and recommends users transition to Promptfoo for evaluation workflows. Promptfoo is an open-source CLI and library designed for evaluating AI applications, offering a flexible, code-centric approach to running and maintaining evaluations locally or in CI environments.

Key differences between OpenAI Evals and Promptfoo include the configuration method, with Promptfoo utilizing a portable configuration file and CLI workflow, while Evals relies on the OpenAI Platform dashboard. Users can recreate their evaluations in Promptfoo by defining prompts, providers, test cases, and assertions in a `promptfooconfig.yaml` file. 

Promptfoo also allows for integration into development workflows and customization of evaluations. Users are encouraged to validate their configurations and adjust their tests as needed during the migration process. For further assistance, documentation is available to support installation and configuration of Promptfoo.