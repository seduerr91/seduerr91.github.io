---
title: Unlocking AI: New Tools for Developers and Evaluation!
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 08-29"
---
Across the blog posts, several key trends and announcements emerge:

1. **Expanded AI Evaluation and Fine-Tuning Capabilities:** OpenAI is introducing robust frameworks for model evaluation—most notably, the enhanced Evals API now supports audio inputs, enabling direct grading of audio outputs and streamlining assessment in audio-driven scenarios like customer support. Similarly, the posts showcase advanced fine-tuning techniques (e.g., Reinforcement Fine-Tuning for domain-specific reasoning models), with new methods such as combining exact and fuzzy grading to boost evaluation accuracy, particularly in complex fields like life sciences.

2. **Practical Guides for Real-World Applications:** The posts emphasize practical, hands-on tutorials—covering setup, dataset preparation, and custom configuration—empowering developers to adapt these tools for specialized use cases, from medical coding and fraud detection to automating development workflows.

3. **Increased Automation and Integration of AI Tools:** Automation is a prevailing theme, with guides illustrating how AI (e.g., using `codex-cli` and OpenAI APIs) can orchestrate workflows between popular platforms (like Jira and GitHub), automate code tasks, and reduce manual effort—ultimately promoting higher efficiency and improved collaboration in software development environments.

In summary, OpenAI is advancing its ecosystem through richer evaluation capabilities (especially for audio and domain-specific tasks), providing actionable resources for customization, and deepening automation via integration with popular developer tools.

## New Cookbook Recipes

### [EvalsAPI_Audio_Inputs.ipynb](https://github.com/openai/openai-cookbook/blob/a90448358320081935df1a133adb8664bbf75047/examples/evaluation/use-cases/EvalsAPI_Audio_Inputs.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces the OpenAI Evals framework's new capability for handling audio inputs in evaluation tasks. It outlines a process for grading audio model responses using the Evals API, enhancing the evaluation of scenarios like customer support where audio is the primary medium of interaction. Key features include direct grading of audio outputs without prior transcription and options to incorporate both audio and text transcripts for assessment.

The tutorial provides detailed steps on setting up dependencies, preparing datasets, configuring evals, and running evaluations, particularly using the big_bench_audio dataset hosted on Hugging Face. It highlights using a score model grader to assess model responses against reference answers. The post encourages users to adapt the provided examples for their specific applications and explore additional OpenAI API functionalities, including handling larger audio files through the uploads API.

---

### [Reinforcement_Fine_Tuning.ipynb](https://github.com/openai/openai-cookbook/blob/b46fe3c81e63a9d51178e4c07160293ffc70e327/examples/Reinforcement_Fine_Tuning.ipynb)
**Source:** openai/openai-cookbook

The blog post presents a detailed guide on implementing Reinforcement Fine-Tuning (RFT) for the OpenAI `o4-mini` reasoning model, specifically targeting applications in life sciences. The guide outlines essential steps, including setting up the environment, gathering a specialized dataset from Hugging Face, and benchmarking the base model's performance using various grading techniques. Key features include the combination of exact and fuzzy grading methods to enhance model evaluation accuracy. The post emphasizes the capacity of RFT to improve reasoning capabilities even with limited data, showcasing how the model can better predict clinical conversation outcomes. Furthermore, it highlights potential use-cases for RFT in precise contexts such as medical coding and fraud risk assessment. The guide ultimately aims to equip developers with the necessary skills to effectively fine-tune and evaluate their models for robust performance in practical applications.

---

### [jira-github.ipynb](https://github.com/openai/openai-cookbook/blob/2fdcbb423bb60a63c973e9ed91ec3d095d8ff05a/examples/codex/jira-github.ipynb)
**Source:** openai/openai-cookbook

The blog post introduces a cookbook for automating workflows between Jira and GitHub using the `codex-cli` tool within GitHub Actions. By labeling a Jira issue, an automation is triggered that facilitates the creation of a GitHub pull request (PR), updates both platforms, and enhances the code review process with minimal manual effort. 

Key features include:
1. Automatic transitions of Jira issue statuses based on specific labels.
2. Integration with GitHub actions to handle pull requests and automate coding tasks using the OpenAI API for implementation.
3. Streamlined communication, as JIRA tickets are updated with PR links and status changes.

The workflow ensures a seamless process that minimizes manual updates while maintaining efficient tracking of ticket progress throughout development. The `codex-cli` serves as a powerful AI tool, allowing developers to focus on code quality rather than repetitive tasks.