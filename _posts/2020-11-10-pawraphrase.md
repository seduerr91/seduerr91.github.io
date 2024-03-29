---
title: Invoking more Creativity with Pawraphrases based on T5 
tags: [Coding]
style: fill
color: secondary
description: This micro-service allows to find paraphrases for a given text based on T5.
---

In this article, I show how to invoke creativity in your text generation through using paraphrases.

![Imgur](https://i.imgur.com/v6DFBE0.png)


This project was concluded with the help of Javier of [Narrativa](www.narrativa.com) a Spanish deep learning company that helps companies, such as the Wall Street Journal, to create texts with the help of AI. In this article, we explain how we finetune the architecture T5 with the dataset PAWS (both from Google) to get the capability of creating paraphrases (or pawphrases since we are using the PAWS dataset :smile:). With this, we can create paraphrases for any given textual input. 

Find the code for the service in this [Github Repository](https://github.com/seduerr91/pawraphrase_public). In order to create your own __'pawrasphrase tool'__, follow these steps: 

### Step 1: Find a Useful Architecture and Datasets

Since Google's [T5](https://ai.googleblog.com/2020/02/exploring-transfer-learning-with-t5.html) has been trained on multiple tasks (e.g., text summarization, question-answering) and it is solely based on Text-to-Text tasks it is pretty useful for extending its task-base through finetuning it with paraphrases. 

Luckily, the [PAWS](https://github.com/google-research-datasets/paws) dataset consists of approximately 50.000 labeled paraphrases that we can use to fine-tune T5.

### Step 2: Prepare the PAWS Dataset for the T5 Architecture

Once identified, it is crucial to prepare the PAWS dataset to feed it into the T5 architecture for finetuning. Since PAWS is coming both with paraphrases and non-paraphases, it needs to be filtered for paraphrases only. Next, after packing it into a Pandas DataFrame, the necessary table headers had to be created. Next, you split the resulting training samples into test, train, and validation set. Find the related Jupyter Notebook [here](#).

![Imgur](https://i.imgur.com/MTM6apI.png)

### Step 3: Fine-tune T5-base with PAWS

Next, following these [training instructions](https://towardsdatascience.com/paraphrase-any-question-with-t5-text-to-text-transfer-transformer-pretrained-model-and-cbb9e35f1555), in which they used the Quora dataset, we use the PAWS dataset and feed into T5. Central is the following code to ensure that T5 understands that it has to _paraphrase_. The adapted version can be found [here](https://github.com/seduerr91/pawraphrase_public/blob/master/t5_pawraphrase_training.ipynb).

![Imgur](https://i.imgur.com/uAd0bVo.png)

Additionally, it is helpful to force the old versions of _torch==1.4.0, transformers==2.9.0_ and *pytorch_lightning==0.7.5*, since the newer versions break (trust me, I am speaking from experience). However, when doing such training, it is straightforward to start with the smallest architecture (here, _T5-small_) and a small version of your dataset (e.g., 100 paraphrase examples) to quickly identify where the training may fail or stop. 

### Step 4: Start Inference by yourself.

Next, you can use the fine-tuned T5 Architecture to create paraphrases from every input. As seen in the introductory image. The corresponding code can be found [here](https://github.com/seduerr91/pawraphrase_public/blob/master/t5_pawraphrase_inference.ipynb).

### Step 5: Using the fine-tuning through a GUI

Finally, to make the service useful we can provide it as an API as done with the infilling model [here](https://seduerr91.github.io/blog/ilm-fastapi) or with this [frontend](https://github.com/renatoviolin/T5-paraphrase-generation) which was prepared by Renato. Kudos!

Thank you for reading this article. I'd be curious about your opinion.

#### Who am I?

I am Sebastian an NLP Deep Learning Research Scientist (M.Sc. in IT and Business). In my former life, I was a manager at Austria's biggest bank. In the future, I want to work remotely flexibly & in the field of NLP.

Drop me a message on [LinkedIn](https://www.linkedin.com/in/sebastianduerr/) if you want to get in touch!