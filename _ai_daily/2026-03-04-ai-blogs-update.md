---
title: Enhancing OpenAI APIs – Trends in Quality and Efficiency
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 03-04"
---
Across the blog posts, several important trends and announcements stand out:

- **Structured Repository Practices**: There is a clear emphasis on maintaining organized, collaborative, and high-quality repositories. Guidelines promote consistent coding styles (PEP 8 adherence), rigorous testing, standardized metadata management, and clear workflows for commits and pull requests, all aimed at enhancing contribution quality and team collaboration.

- **Realtime Evals Framework Expansion**: Multiple posts detail the introduction and use of the "Realtime Evals" framework for evaluating OpenAI APIs. Three harness options—crawl, walk, and run—are tailored to varying complexity levels and evaluation goals, allowing for flexible, text or audio-based, and single- or multi-turn evaluations. Comprehensive guides and setup instructions enable users to choose and operationalize the right harness efficiently.

- **Improved Usability and Tooling**: The framework is complemented by tools like a Streamlit results viewer app that supports direct exploration and comparison of evaluation runs. Features like automatic run detection, visualizations, and detailed artifact inspection help streamline analysis and improve user experience.

- **Performance Optimization through Caching**: Significant API cost and latency reductions are achievable via prompt caching, with best practices highlighted for maximizing cache hits, stabilizing prompts, and leveraging improved routing and API choices. These optimizations allow for substantial efficiency and cost savings at scale.

In summary, the posts collectively highlight a maturing ecosystem built around robust eval workflows, strong quality standards, and powerful tools and optimizations that drive efficiency and improved results for developers using OpenAI APIs.

## New Cookbook Recipes

### [AGENTS.md](https://github.com/openai/openai-cookbook/blob/288f8d3eecc14815f389cfd5899cf69ddff43ee6/AGENTS.md)
**Source:** openai/openai-cookbook

The blog post outlines comprehensive repository guidelines for organizing and developing projects using OpenAI APIs. Key announcements include the structured approach to project organization, which categorizes notebooks and scripts, and ensures appropriate metadata management via `registry.yaml` and `authors.yaml`. It emphasizes maintaining a consistent coding style aligned with PEP 8, rigorous testing protocols for notebooks, and clear commit and pull request practices. Recent learnings highlight specific issues encountered during development, such as dependency conflicts and grading methodology, alongside solutions for effective project execution. Overall, the guidelines aim to enhance collaboration and maintain high-quality contributions within the repository.

---

### [SKILL.md](https://github.com/openai/openai-cookbook/blob/288f8d3eecc14815f389cfd5899cf69ddff43ee6/examples/evals/realtime_evals/skills/bootstrap-realtime-eval/SKILL.md)
**Source:** openai/openai-cookbook

The blog post details the process of bootstrapping a new realtime evaluation (eval) folder within a specific repository. Users can create these folders by selecting appropriate harnesses from predefined options, such as crawl, walk, or run, and providing necessary inputs, including eval name, goal, and required data. The workflow emphasizes gathering user inputs before generating files, normalizing data, and enriching the scaffold with realistic starter data. It also outlines validation steps, including smoke evals and full evals, to ensure the generated code functions correctly. Moreover, the importance of an accurate README is highlighted, as it should clarify the harness choice, essential commands, and troubleshooting notes. Key rules and criteria for successful completion are provided to streamline the process and enhance user experience.

---

### [harness-selection.md](https://github.com/openai/openai-cookbook/blob/288f8d3eecc14815f389cfd5899cf69ddff43ee6/examples/evals/realtime_evals/skills/bootstrap-realtime-eval/references/harness-selection.md)
**Source:** openai/openai-cookbook

The blog post introduces a comprehensive guide for selecting the appropriate realtime evaluation harness based on user needs. Three harness options are detailed:

1. **Crawl**: Ideal for users seeking fast iterations with text prompts. It requires basic text input and generates immediate commands.
2. **Walk**: Best for users with existing audio files, emphasizing realism and replay characteristics. It requires a dataset with audio paths.
3. **Run**: Suitable for multi-turn interactions and conversation-level evaluations, involving more complex setup with simulation files.

Recommendation rules are provided to assist users in choosing the right harness based on their materials. Additionally, data contract requirements for each harness are outlined, alongside expectations for the generated README, ensuring clarity and usability without delving into the source code.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/bec79f8267ebf6d8201aaffbd0bd270770eed024/examples/evals/realtime_evals/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Realtime Evals framework, which consists of three evaluation harnesses—**crawl**, **walk**, and **run**—each designed for different levels of complexity in testing the Realtime API. 

- **Crawl** focuses on synthetic single-turn evaluations using text-to-speech and simple grading.
- **Walk** replays realistic saved audio to analyze assistant responses while maintaining consistency.
- **Run** simulates multi-turn conversations to identify failures and evaluate tool behavior.

Setup instructions include requirements for Python 3.12+, and commands for installation and execution of each harness are detailed, ensuring users can quickly get started. Additionally, the framework supports comprehensive result tracking and visualization through a Streamlit results viewer, allowing detailed comparisons and insights into model performance across runs. Common CLI flags are also provided for flexibility in operation.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/bec79f8267ebf6d8201aaffbd0bd270770eed024/examples/evals/realtime_evals/results_viewer/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a Streamlit app designed for exploring saved realtime evaluation runs from various harnesses, including crawl, walk, and run. This app automatically detects relevant run directories and offers two main features: a Comparison View for comparing summary metrics across multiple runs and a Run Viewer to inspect individual runs. The Run Viewer displays detailed data, including CSV results, audio artifacts, and event logs.

To run the app locally, users need to activate a virtual environment and execute a Streamlit command. The expected data layout for saved runs includes a `summary.json` and `results.csv`, with additional audio and event files for crawl and walk runs. The app can handle nested directories, enhancing its usability for comprehensive data exploration.

---

### [Prompt_Caching_201.ipynb](https://github.com/openai/openai-cookbook/blob/ce3974d32e729cc2c5d6a7563953a53cc4fa9437/examples/Prompt_Caching_201.ipynb)
**Source:** openai/openai-cookbook

The blog post "Prompt Caching 201" provides a comprehensive guide to optimizing prompt caching in OpenAI's API. Key announcements highlight that prompt caching can significantly reduce time-to-first-token latency by up to 80% and input token costs by up to 90%, with automatic operation and no additional fees. 

The article outlines caching fundamentals, emphasizing that cache hits occur with repeated prefix matches, particularly for requests over 1024 tokens. Various optimization strategies are suggested, including stabilizing prompt prefixes, utilizing `prompt_cache_key` for improved routing, and choosing to use the Responses API over Chat Completions for better cache utilization. The post encourages users to continuously measure caching performance and share best practices for enhancing cache hit rates, ultimately leading to improved efficiency and cost savings in API usage.