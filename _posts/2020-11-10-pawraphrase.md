---
title: Invoking more Creativity with Pawraphrases based on T5 
tags: [Coding]
style: fill
color: dark
description: This micro-service allows to find paraphrases for a given text based on T5.
---

In this article, I show how to invoke creativity in your text generation through using paraphrases.

![Imgur](https://i.imgur.com/v6DFBE0.png)


This project was concluded with the help of Javier of [Narrativa](www.narrativa.com) a Spanish deep learning company that helps companies, such as the Wallstreet Journal, to create texts with the help of AI. In this article, we explain how we finetune the architecture T5 with the dataset PAWS (both from Google) to get the capability of creating paraphrases (or pawphrases since we are using the PAWS dataset :smile:). With it, we then, extend an existing dataset to have more creativity in our database, i.e. creating synthetic data. Synthetic data is the compiling high-quality datasets.

Try the service here: [link](www.google.com)

In order to create Synthetic Data with Pawphrasphrase follow the following five steps. 

### Step 1: Find a Useful Architecture and Datasets

Since Google's [T5](https://ai.googleblog.com/2020/02/exploring-transfer-learning-with-t5.html) has been trained on multiple tasks (e.g., text summarization, question-answering) and it is solely based on Text-to-Text tasks it is pretty useful for extending its task-base through finetuning it with paraphrases. 

Luckily, the (PAWS)[https://github.com/google-research-datasets/paws] dataset consists of approximately 50.000 labeled paraphrases that can be used to fine-tune T5.

### Step 2: Prepare the PAWS Dataset for the T5 Architecture

Once identified, it is crucial to prepare the PAWS dataset to feed it into the T5 architecture for finetuning. Since PAWS is coming both with paraphrases and non-paraphases, it needed to be filtered for paraphrases only. Next, after packing it into a Pandas DataFrame, the necessary table headers had to be created. Now, you can split the resulting training samples into test, train, and validation set. 

![Imgur](https://i.imgur.com/MTM6apI.png)

### Step 3: Fine-tune T5-base with PAWS

Next, following these [training instructions](https://towardsdatascience.com/paraphrase-any-question-with-t5-text-to-text-transfer-transformer-pretrained-model-and-cbb9e35f1555), in which they used the Quora dataset, the PAWS dataset was fed into the T5 Attention-based deep neural net. Crucial was the following code snippet to make sure, T5 understands that it has to paraphrase.

![Imgur](https://i.imgur.com/uAd0bVo.png)

Additionally, it is necessary to force the old versions of torch==1.4.0, transformers==2.9.0 and pytorch_lightning==0.7.5, since the newer versions break (Trust me, I tried multiple times). However, when doing such trials it is always smart to start with the smallest architecture (here, T5-small) and a small version of your dataset (like 100 paraphrases only) to quickly spot where the training may fail. 

Lastly, once you manage to fine-tune T5 with the PAWS paraphrases, you evaluate them with the script. The respective github code, can be found [here](#tbd). 

### Step 4: Start Inference to Create a New Dataset Based on Your Corpus

Next, you can use the fine-tuned T5 Architecture to create paraphrases from every input. As seen in the introductory image. Next, we used the following code to run a client proprietary corpus through the fine-tuned archtecture to get paraphrases based on their given text samples. The code can be found [here](#btd) and looks as follows: 

![Imgur](https://i.imgur.com/x4uAPMT.png)

Again, we evaluate how the paraphrases compare to the original input on bleu. The results were pretty interesting. 

### Step 5: Using the fine-tuning with a GUI

Finally, to make the service useful we can provide it as an API as we did with the infilling model [here](#tbd) or with this frontend which is also included in the [github](https://github.com/renatoviolin/T5-paraphrase-generation).


Thank you for reading this article. I'd be curious about your opinion.

#### Who am I?

I am Sebastian an NLP Deep Learning Research Scientist (M.Sc. in IT and Business). In my former life, I was a manager at Austria's biggest bank. In the future, I want to work remotely whenever I want to & in the field of NLP.

Drop me a message on [LinkedIn](https://www.linkedin.com/in/sebastianduerr/) if you want to get in touch.