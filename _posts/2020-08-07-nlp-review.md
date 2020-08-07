---
title: NLP Recent Paper Review
tags: [Coding]
style: fill
color: danger
description: Summary of Review by HuggingFace on recent NLP papers.
---

In his presentation from April 2020, Thomas Wolf, presents recent works in the field of Artificial Intelligence.

Current research directions in the field of NLP are:

- model size and computational efficiency
- out-of-domain generalization
- fine tuning and sample efficiency
- common sense and inductive bias

### Model size

Regarding model size the most recent developments were usually based on __increasingly big models__ such as T5 by Google, MegatronLM by Nvidia, or BART / XLM-R by Facebook Research. These models usually have over 1 billion parameters.

This is a problem because of the narrowing research competition and the environmental cost that come with the training of these models.

However, works on __smaller models__ because the big ones are usually overparametrized are a research stream. Thomas Wolf presents three techniques, i.e. distillation, pruning, and quantization to address the reduction of model size.
- __Distillation__ deals with taking a teacher model (like BERT) and using a student model (e.g., TinyBERT) to reduce inference cost, while capitalizing on the inductive biases learned by large models.
- __Pruning__ can be done for heads, weights, and layers.
- __Quantization__ refers to the change of the data type (i.e., FP32 to INT8).

Additionally, researchers trace how increasing amounts of data improve result quality in NLP challenges. This can be done for pre-training (e.g. the XLNet vs. BERT debates) or in fine-tuning (scores on the Winograd Schema Challenge or MaskedWiki.)

Generally, the power law of natural language modelling (NLM) confers that *compute, dataset size and parameters* need to be scaled up in tandem. RoBERTa-large with 2.2T tokens compared to BERT-large with only 137B tokens had a significantly better result in zero-shot evaluation on birth-year comparisons.

### In-domain vs. Out-of-domain Generalization

Out-of-domain generalizations relates to the ability of a trained Neural Network to also solve NLP tasks outside the training domain. Let us assume that a neural net was only trained on wikipedia articles then it would write texts or solve masked tasks only with wikipedia-like answers. In a forum like platform like Reddit the neural network would be easily spotted.

### The limits of NLU and the rise of NLG

The NL Decathlon is a test consisting of different tasks like translation, question answering and summarization. It is used to evaluate different models and test their quality of natural language generation (NLG).

### A fundamental flaw: the lack of robustness

Still, neural nets in NLP easily fall into local minima meaning that they are confused if certain parts of a text are changed. Solutions to this could be better *regularizaton*, *ensembles and multi-tasking* but will result in high cost of training.

### The inductive bias question

Models can be brittle and spurious. Brittle refers to failing when text is modified, even when meaning is preserved. While spurious models memorize artifacts and biases instead of truly learning.

### Common Sense

The limits of distributional hypothesis proposes that certain types of information are difficult to learn from raw text. E.g., humans do not state the obvious (sheep are white, but everybody talks about black sheep), so structural knowledge (a table that says that sheep are white), multimodal learning (show a lot of sheep to the computer from pictures) or humans in the loop may be the remedy. Just like humans are also learning from multimodal contexts (after all we have multiple senses).

### The continual-learning question

What does the neural network need to know, what could it forget? Current transfer learning only performs adaptions once but we need models that continuously retain and accumulate knowledge across many tasks. So no distinction between pretraining and adaption should be made.
