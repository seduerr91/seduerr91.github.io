---
title: Elevate Voice Systems with Crawl Walk Run Evaluations
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 01-27"
---
**Meta-summary:**

The recent blog posts highlight a systematic and phased approach to evaluating real-time voice systems, with a strong emphasis on accelerating development cycles through robust, structured evaluations. Central to these advancements are three purpose-built evaluation harnesses—Crawl, Walk, and Run—which enable teams to progressively increase testing complexity, from simple single-turn synthetic examples to realistic multi-turn conversations.

Key trends and announcements include:

- **Phased Evaluation Maturity:** The introduction of the Crawl, Walk, and Run harnesses supports incremental adoption, allowing teams to start with basic, reproducible tests and advance toward complex, scenario-driven simulations as evaluation needs mature.
- **Dual Focus on Quality:** Posts stress the need to measure both content and audio quality, using a combination of deterministic inputs, realistic audio replays, and simulated conversations to ensure holistic assessment.
- **Data and Grading Infrastructure:** Reliable benchmarking and improvement are underpinned by systematic data collection, customizable test setups (via CSV and TTS), and robust grading mechanisms—both manual and LLM-based.
- **Automation and Reproducibility:** Across all harnesses, automation, output standardization, detailed logging, and CLI flexibility simplify integration and facilitate efficient, repeatable evaluations.
- **Enhanced Realism and Control:** Leveraging common telephony standards, deterministic replays, and simulated users, the harnesses balance evaluation realism with reproducibility.

Collectively, these tools and guidelines mark a significant step forward in delivering reliable, high-quality real-time voice capabilities by empowering teams to adopt structured, efficient, and scalable evaluation processes.

## New Cookbook Recipes

### [Realtime_eval_guide.ipynb](https://github.com/openai/openai-cookbook/blob/3c748633692ebac002e66225749c1b5cfb8eb144/examples/Realtime_eval_guide.ipynb)
**Source:** openai/openai-cookbook

The "Realtime Eval Guide" emphasizes the importance of systematic evaluation of voice systems, highlighting that robust evaluations can dramatically accelerate production speed by 5-10 times. The guide outlines a phased approach—Crawl, Walk, Run—where complexity increases incrementally to facilitate accurate diagnostics and iterative improvements. 

Key findings include the distinction between content and audio quality, showcasing that both are essential for comprehensive evaluations. The necessity of maintaining reliable benchmarks through ongoing data collection and grading is underscored, with recommendations for utilizing both manual and automated grading systems. 

The guide also stresses the significance of an effective eval harness to ensure comparable results and encourages teams to develop strong foundational datasets and gradation systems to enhance evaluation efficiency. Overall, investing in structured evals is presented as pivotal for delivering reliable voice functionality.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9085ae61536ba780151453e5825457b52ff46cf1/examples/evals/realtime_evals/README.md)
**Source:** openai/openai-cookbook

The blog post introduces three evaluation harnesses for the Realtime API, categorized by complexity: **crawl**, **walk**, and **run**. 

- **Crawl** focuses on synthetic single-turn evaluations, using text prompts converted to TTS audio, allowing for quick iterations and controlled comparisons.
- **Walk** features deterministic replay of saved phone audio, enhancing realism while maintaining reproducibility.
- **Run** shifts to model-simulated multi-turn conversations, identifying potential failures in longer interactions and tool behaviors.

Each harness requires Python 3.9+ and enables users to adapt test setups based on their evaluation maturity. The post includes installation instructions and details on results layout, emphasizing the shared CLI flags for ease of transition between harnesses. Each harness generates output metrics, logs, and audio for comprehensive evaluation.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9085ae61536ba780151453e5825457b52ff46cf1/examples/evals/realtime_evals/crawl_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Crawl Harness," a tool for deterministic single-turn replay in Realtime evaluations. It allows for fixed audio inputs to be streamed into a Realtime session for controlled comparisons with minimal variance. Key features include the ability to load evaluation prompts from a CSV, synthesize audio via TTS, and capture tool-call correctness. Outputs from each run are organized into CSV and JSON files, providing detailed metrics on latency and correctness. Users can customize the harness by modifying CSV data, system prompts, and grading logic. While it focuses on the first assistant interaction, it facilitates efficient iteration and evaluation of real-time model performance.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9085ae61536ba780151453e5825457b52ff46cf1/examples/evals/realtime_evals/run_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the Run Harness, a model-simulated multi-turn evaluation framework for the Realtime API. It employs one real-time model as a user simulator (audio-only) and another as the assistant under test. Key functionalities include loading simulation scenarios from CSV files, generating user audio turns, streaming audio to the assistant in designated chunks, and capturing various outputs such as audio, texts, tool interactions, and latencies. The framework offers grading capabilities using an LLM-as-judge, producing comprehensive evaluations stored in detailed logs. Users can run the harness with specific command-line options, enabling customizable simulations without necessitating live backend integrations. The post also outlines available files and simulation definitions to facilitate repeated multi-turn evaluations efficiently.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9085ae61536ba780151453e5825457b52ff46cf1/examples/evals/realtime_evals/walk_harness/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Walk Harness," a tool designed for evaluating real-time audio runs. Key features include the ability to replay saved audio in G.711 mu-law format, stream audio in fixed-size chunks, and capture metrics related to user interactions, tool calls, and latency. The harness processes input from a CSV file, produces audio assets using TTS and ffmpeg, and generates metrics reports in a results directory.

To use the harness, users must install ffmpeg, generate audio files, and run evaluation scripts via specified commands. The system expects specific audio formats and allows for customization through various command-line options, including model selection and dataset modification. This tool enhances the realism of evaluations by using common telephony audio standards.