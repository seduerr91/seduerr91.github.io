---
title: Streamline Your API Projects with OpenAI’s New Framework
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 03-03"
---
**Meta-Summary of Key Trends and Announcements:**

Across the blog posts, OpenAI introduces a comprehensive framework for structuring, evaluating, and developing real-time API projects. The main trends and announcements are:

1. **Project Organization and Best Practices:**  
   New guidelines standardize repository structure, emphasizing clear separation between runnable examples (`examples/<topic>/`), documentation (`articles/`), and metadata (`registry.yaml`, `authors.yaml`). Best practices such as using virtual environments, following PEP 8 standards, thorough testing, and detailed commit protocols are highlighted for reliability and maintainability.

2. **Modular Evaluation Harnesses:**  
   Three tailored evaluation harnesses—**Crawl**, **Walk**, and **Run**—support varying complexity:
   - **Crawl:** Enables rapid, single-turn testing using text and TTS-generated audio, streamlining early development and comparison.
   - **Walk:** Replays realistic saved audio interactions with fixed boundaries, optimizing for reproducibility and audio fidelity.
   - **Run:** Simulates multi-turn conversations with end-to-end evaluation, leveraging model-based user simulation and LLM-based grading for deeper interaction analysis.

3. **Tooling and Automation:**  
   Scaffolding tools, such as the "Bootstrap Realtime Eval" skill, automate the creation of new evaluation frameworks. These tools guide users in harness selection, input normalization, and enforce quality rules to maintain structure and testability.

4. **Customizability and Extensibility:**  
   Each harness and framework is highly configurable—users can supply custom models, prompts, datasets, and grading logic. Input requirements, expected outputs, and README conventions are established for clarity and ease of onboarding.

5. **Rich Evaluation Outputs:**  
   Harnesses produce standardized logs, results (CSV/JSON/JSONL), performance metrics, audio files, and visual plots, supporting detailed analysis and benchmarking.

6. **Emphasis on Reproducibility and Realism:**  
   By using deterministic inputs, controlled streaming, and standardized audio formats (notably G.711 mu-law WAV for telephony applications), the frameworks ensure realistic, reproducible evaluations—vital for scenarios like customer service automation.

Overall, the suite of tools and guidelines positions developers for efficient, reproducible, and high-quality real-time API testing and development.

## New Cookbook Recipes

### [AGENTS.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/AGENTS.md)
**Source:** openai/openai-cookbook

The blog post outlines the guidelines for structuring and organizing projects in an OpenAI API repository. Key announcements include the arrangement of runnable examples and documentation, emphasizing the housing of notebooks under `examples/<topic>/` and articles in `articles/`. It describes the importance of using a virtual environment for dependency management, adhering to PEP 8 coding standards, and implementing effective testing protocols. Commit and pull request guidelines stress concise messaging and thorough documentation. Additionally, it highlights the necessity of maintaining accurate metadata in `registry.yaml` and `authors.yaml`. Recent learnings address issues such as pytest module imports and the implications of run-level grades in simulations, providing solutions to enhance project accuracy and reliability.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/README.md)
**Source:** openai/openai-cookbook

The blog post introduces three evaluation harnesses for the Realtime API, categorized by complexity: **crawl**, **walk**, and **run**. 

- **Crawl** offers a synthetic single-turn evaluation, ideal for quick iterations using text prompts and TTS audio.
- **Walk** employs a realistic replay of saved phone-audio, capturing interactions with fixed turn boundaries for reproducibility.
- **Run** simulates multi-turn conversations to identify potential failures, using a model to generate user inputs and deterministic tool outputs.

Each harness includes a structured setup process utilizing Python 3.12+, and outputs evaluation results and logs in designated directories for analysis. Key commands for operation are provided, ensuring easy execution across different development environments. The shared results structure facilitates straightforward comparisons and visual analysis of metrics.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/crawl_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Crawl Harness," a deterministic tool designed for Realtime evaluations, facilitating controlled comparisons by feeding fixed audio inputs into a session. Key features include the ability to load evaluation prompts from a CSV, synthesize audio using text-to-speech (TTS), and stream audio in fixed-size chunks to the Realtime API. The harness records the first assistant's turn and evaluates tool-call correctness. Upon execution, it generates multiple outputs, including a results CSV, summary metrics in JSON format, and various audio files for both input and output. Users can customize inputs, adjust system prompts, and manage grading logic, although the harness focuses solely on the first assistant response without evaluating subsequent tool outputs. Overall, it streamlines the testing process for audio-driven evaluation scenarios.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/run_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Run Harness," a model-simulated evaluation tool for the Realtime API, designed for multi-turn interactions. It incorporates one real-time model as a user simulator (audio-only) and another as the assistant under test. Key features include loading simulation data, processing user audio in fixed chunks, capturing assistant responses, and grading interactions with an LLM-as-judge. The tool generates comprehensive results, including CSV and JSON files with detailed logs, and produces visual plots of the outcomes.

Users can run evaluations using a dedicated script and customize various parameters, such as simulation data, models, and system prompts. The tool's design allows for repeatable evaluations without relying on live backend systems, streamlining the testing process.

---

### [SKILL.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/skills/bootstrap-realtime-eval/SKILL.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Bootstrap Realtime Eval" skill, designed to facilitate the creation of a new realtime eval framework within a specific repository. Users can scaffold a new evaluation by selecting from three harnesses: crawl, walk, or run, depending on their goals. The skill emphasizes the collection of essential inputs such as eval name, scenario, and data paths while providing guidance on making informed harness selections. The workflow outlines steps for normalizing inputs, authoring realistic starter data, and validating the generated framework through smoke tests and automated tests. Key points include maintaining structure integrity and ensuring the README clearly defines the harness choice and usage instructions. Additionally, the post highlights several hard rules to ensure quality and consistency in the generated evaluation frameworks.

---

### [harness-selection.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/skills/bootstrap-realtime-eval/references/harness-selection.md)
**Source:** openai/openai-cookbook

The blog post offers a detailed guide on choosing the appropriate real-time evaluation harness based on user needs. Three harnesses are presented: `crawl`, `walk`, and `run`. 

- **Crawl** is recommended for fast iterations on single-turn behaviors with basic text prompts.
- **Walk** is suitable for users needing audio realism, relying on existing audio files or generating new ones.
- **Run** serves scenarios requiring multi-turn interactions, where comprehensive conversation dynamics are essential.

The post includes specific data requirements for each harness, guidance on when to use each option, and expectations for the generated README format, ensuring clarity and ease of use for developers.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/45a8058f49252317a6a717e08bb7987d82ae1cd1/examples/evals/realtime_evals/walk_harness/README.md)
**Source:** openai/openai-cookbook

The blog post discusses the Walk Harness, a tool designed to facilitate real-time evaluation runs by replaying saved audio. Key features include streaming G.711 mu-law WAV files in fixed-size chunks, manually committing user turns to avoid variability, and capturing various performance metrics such as transcript deltas and latency. The tool generates accuracy statistics and visual plots, and produces comprehensive event logs in JSONL format.

To operate the Walk Harness, users must install ffmpeg, generate audio assets from a CSV dataset, and execute the evaluation harness. The posts provide detailed instructions on input formats and customization options, allowing users to adjust model parameters, prompts, and datasets. The harness enhances the realism of evaluations by relying on standard telephony audio formats, making it invaluable for applications like customer service simulations.