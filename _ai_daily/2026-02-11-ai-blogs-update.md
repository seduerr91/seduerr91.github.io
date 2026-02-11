---
title: OpenAI Unveils Skills - Revolutionizing API Workflows
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 02-11"
---
OpenAI has announced "Skills," a major enhancement to its API that enables developers to efficiently manage and execute reusable workflows within both hosted and local environments. Skills, defined by a `SKILL.md` manifest and easily managed via API, streamline the execution of scripts and procedures without adding complexity to system prompts. This innovation addresses the need for version control, repeatable and conditional workflows, and the integration of local artifacts. By distinguishing Skills from tools and prompts, OpenAI promotes clearer organizational structure, more maintainable code, and flexible application development, positioning Skills as a vital middle layer for building efficient, scalable workflows.

## New Cookbook Recipes

### [skills_in_api.ipynb](https://github.com/openai/openai-cookbook/blob/3d532002ad85f933dfd7bbd9eaee944b985a3e9d/examples/skills_in_api.ipynb)
**Source:** openai/openai-cookbook

OpenAI has introduced "Skills" in its API to enhance the management of reusable workflows within hosted and local environments. Skills are bundles of files encapsulated by a `SKILL.md` manifest, allowing for the execution of scripts and procedures on-demand without cluttering the system prompts. They are particularly beneficial for developers needing version control and repeatable workflows, especially those that are conditional or require local artifacts.

Key features include:
- Easy upload and management via API.
- Ability to attach skills to execution environments, leading to smooth model operations.
- Clear differentiation from tools and system prompts for better organizational structure.

Best practices for using Skills include keeping them discoverable, using zip uploads for reliability, and designing them as compact command-line interfaces. Overall, Skills serve as a middle layer, striking a balance between prompts and tools, thus promoting efficient, maintainable workflows across applications.