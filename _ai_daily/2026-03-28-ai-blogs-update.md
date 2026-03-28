---
title: Unlocking Claude's Potential - Explore New Capabilities Now!
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 03-28"
---
The recent series of blog posts introduces and details the new "Capabilities" section of the Claude Cookbooks, highlighting a suite of practical guides showcasing Claude's strengths across advanced natural language processing tasks. Major trends and announcements include:

- **Comprehensive Task Coverage:** The guides span classification, retrieval-augmented generation (RAG), contextual embeddings, long-form summarization, text-to-SQL, and, most notably, end-to-end knowledge graph construction from unstructured text.
- **Emphasis on Knowledge Graphs:** Multiple posts provide in-depth tutorials on extracting and assembling knowledge graphs, outlining specific workflows for entity/relation extraction, resolution, and evaluation using both code samples and gold-standard datasets.
- **Evaluation and Metrics:** There is a strong focus on practical evaluation, providing precision, recall, and F1 benchmarks, particularly for knowledge graph extraction, and highlighting trade-offs that practitioners should consider when tuning extraction prompts.
- **Innovative Extraction Techniques:** Claude enables structured data extraction and entity resolution without pre-labeled training data. Techniques include clustering entities by descriptive similarity and assembling interactive, visual graphs for corpus exploration.
- **Hands-on Implementation:** Each guide is accompanied by executable code, detailed examples (e.g., Apollo program corpus), and step-by-step instructions, promoting reproducibility and ease of experimentation with Claude’s capabilities.

Overall, the posts announce robust new resources—backed by scripts and datasets—for building, evaluating, and visualizing advanced AI-powered workflows using Claude. Knowledge graph construction emerges as a centerpiece, illustrating Claude’s evolving ability to generate structured insights from unstructured sources.

## New Cookbook Recipes

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/44f96bff8aec6849e929e5a074e2dda97d1389ba/capabilities/README.md)
**Source:** anthropics/claude-cookbooks

The blog post introduces the "Capabilities" section of the Claude Cookbooks, featuring a series of guides that demonstrate Claude's strengths across various tasks. Key highlights include:

- **Classification**: Techniques for enhancing classification tasks with limited data through prompt engineering and evaluation.
- **Retrieval-Augmented Generation (RAG)**: Guidance on building RAG systems, optimizing performance with domain knowledge, and using techniques like summary indexing.
- **Contextual Embeddings**: A method to improve RAG by providing richer context to document chunks, enhancing retrieval and performance.
- **Summarization**: Strategies for summarizing information from multiple sources, with methods suitable for long-form content.
- **Text-to-SQL**: Generating SQL queries from natural language, focusing on accuracy and evaluation metrics.
- **Knowledge Graph Construction**: Building knowledge graphs from unstructured text, incorporating entity recognition and extraction techniques.

Each guide includes code and evaluation scripts for practical implementation.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/44f96bff8aec6849e929e5a074e2dda97d1389ba/capabilities/knowledge_graph/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the process of constructing knowledge graphs (KG) from unstructured text using the Claude framework. It outlines key KG construction tasks, including named entity recognition, relation extraction, entity resolution, and entity summarization. The post provides a structured guide featuring a main tutorial notebook (`guide.ipynb`), a dataset directory containing gold-standard triples for evaluation, and a folder dedicated to precision and recall scoring scripts. For detailed evaluation instructions, readers are directed to the `evaluation/README.md` file.

---

### [README.md](https://github.com/anthropics/claude-cookbooks/blob/44f96bff8aec6849e929e5a074e2dda97d1389ba/capabilities/knowledge_graph/evaluation/README.md)
**Source:** anthropics/claude-cookbooks

The blog post discusses the evaluation of knowledge graph extraction, focusing on the scoring of entity and relation extraction compared to a hand-labeled gold standard dataset. Users are guided on setup procedures, including installation of dependencies and configuration of an API key. Key performance metrics include Precision, Recall, and F1 scores for both entities and relations. Entities are evaluated by matching their canonical names, while relations consider both endpoints’ canonical forms, disregarding predicate wording. Expected baseline scores using the `claude-haiku-4-5` model are provided, indicating Precision, Recall, and F1 score ranges for entities (P: 0.80–0.90, R: 0.70–0.85, F1: 0.75–0.85) and relations (P: 0.70–0.85, R: 0.55–0.70, F1: 0.60–0.75). The post highlights the conservativeness of the extractor, emphasizing a trade-off between recall and precision in tuning extraction prompts.

---

### [guide.ipynb](https://github.com/anthropics/claude-cookbooks/blob/44f96bff8aec6849e929e5a074e2dda97d1389ba/capabilities/knowledge_graph/guide.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post outlines a method for constructing knowledge graphs using Claude, an AI model by Anthropic. Key features include:

1. **Simplified Extraction**: Using structured outputs to extract entities and relations from unstructured documents without the need for training data. 
2. **Entity Resolution**: Instead of traditional string-similarity methods, Claude clusters entities based on one-line descriptions to resolve overlapping names effectively.
3. **Graph Assembly**: The process includes building an in-memory graph using NetworkX, allowing for multi-hop reasoning through traversal between nodes (entities).
4. **Visual Representation**: The resulting graph is visualized, showing connections among entities, providing insights into the corpus's focus and depth.
5. **Entity Summarization**: Nodes aggregate mentions and synthesize profiles that include summaries and key facts about the entities, enhancing the graph's informational quality.

This guide specifies prerequisites, setup instructions, and practical examples based on content around the Apollo program.