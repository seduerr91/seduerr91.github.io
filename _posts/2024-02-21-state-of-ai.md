---
tags: [Coding]
title: Insights from Text-to-SQL Conversion Research
description: Insights from Text-to-SQL Conversion Research
style: fill
color: secondary
---

For the curious mind, I did a literature review to understand how other professionals in the field address the complexity of this task. Feel free to browse my summary:

Modern approaches to bridging the human-language to database-query gap have been making waves in the tech community, with a spotlight on leveraging Large Language Models (LLMs) to create powerful Text-to-SQL tools. 
I dove into recent scholarly articles, including the insightful "Text-to-SQL Empowered by Large Language Models: A Benchmark Evaluation" by Gao et al. Their method serves as the backbone for the Text-to-SQL generation strategy we'll discuss, peppered with minor tweaks aimed at optimizing performance.

The research demonstrates a progressive strategy called SQL-Prompt, which relies on In-Context Text-to-SQL with Minimal Labeled Data. It compares results from using various prompts and models, both verbose and concise, settling on the most consistent outcomes. Although thorough, the technique is noted for being on the slower side, and has led to a consensus that exact matching might not be the most effective goal due to the realization that multiple queries can hit the same mark.

From the SPIDER challenge contestants, several noteworthy techniques emerged. Of particular interest was the winning strategy, which included masking domain-specific words from both questions and the target queries. Authors found success in employing a similarity measure (like the Euclidean algorithm) to home in on the top_k questions and queries that mirrored one another, allowing for the organization of both the question and the corresponding SQL without needing a predefined schema.

To further refine their process and handle execution errors, researchers introduced Sample Aware Prompting and Dynamic Revision. With this method, any execution issues are appended, leading to a dialogue where the LLM explains the gap in understanding, and then context from the database schema is reintroduced, prompting a retry. This invariably extensive method was still hailed as a success.

Other techniques like the DB-First Approach and a generic prompt were deemed less useful, overshadowed by other sophisticated strategies at play. Of note, an article on SQL-PALM was rendered out of date by more modern studies, and while the BIRD benchmark, recommended by HKU, was an interesting avenue, it lacked relevance since we were using SPIDER.

Keeping up with current trends, Seek.ai from Manhattan has managed to lead the SPIDER challenge, achieving a 91% accuracy rate with their models—a figure impressively close to the human benchmark of 92%.

As we continue to watch and learn from these innovative research initiatives, it's clear that the potential of Text-to-SQL tools is yet to be fully unlocked, and each study brings us closer to seamless human-database interaction.