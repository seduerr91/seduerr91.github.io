---
title: Finding a base datasets 
tags: [Persuaide, engineering]
style: fill
color: primary
description: Finding a dataset for your purpose.
---

## 🔎 Dataset Search

In order to teach new downstream tasks to deep neural network models like T5, we need to find datasets that are in line with the input and output the model is used for. 
T5 is a text-to-text model which means that it has seen a lot of inputs, and a lot  of outputs, and infers the differences between them. 
A sample data point from the exemplary Google's PAWS dataset looks as follows, where the label determines whether Sentence 1 and 2 are paraphrasing each other: 

![Screenshot-2021-09-12-at-21-59-00.png](https://postimg.cc/mcgRM6DB)

Some additional datasets that are suitable to teach new downstream tasks / functionality to T5 are:
Google’s DiscoFuse which is a dataset that fuses two sentences into one. It consists of more than 60 million pairs.
Google’s Wikisplit which focuses on the splitting of sentences and inverses the idea of DiscoFuse. 
This presentation at datalift #3 exemplifies how above datasets can be used for fine-tuning Google’s T5 on PAWS (including the corresponding code).

## 👨🏼‍💻 Sources for Task-related Datasets

Oftentimes, datasets are already available, and as you will learn in the course of this manuscript, the compilation of a custom dataset is tedious at first. Hence, a few best practices to search if there is not already a dataset for the purpose of your task are:
Google for related problems. I find results from particularly Medium.com oftentimes very helpful since there is usually some comprehensible instructions and the corresponding code provided.
A more academic search the scanning of Google Scholar for related scientific articles. Here, you have to digest the academic narrative, and it frankly may involve a solid amount of reengineering (and reverting to old Python dependencies) to be able to run the code (authors also tend to not export the versions of their dependencies.
Furthermore, searching Github Repositories allows you to combine the works of different companies such as Facebook AI Research or other outfits. 
Lastly, Kaggle.com holds many NLP datasets, too.
The Google dataset searchbase has not been to useful for me in the past.
Once, you have checked all these sources without success, you may want to consider to compile your own dataset. This also involves some considerations.

💁🏼‍♂️ Considerations in the Absence of Appropriate Datasets

If searching the databases presented before did not score any results, then the need may arise to compile an own dataset for a particular task that has to be solved. In this case, consider the following aspects of any raw dataset that can be used as a base dataset from which we will compile the actual dataset. These are:

- The type needs to be fitting: Texts come in the form of mail, chat, wikipedia articles, forum contribution, or debate or speech transcripts which may be more or less appropriate to your custom use case. Consider for instance, that wikipedia articles are usually written in third person and very objectively, whereas the exchange of humans in mail or chat increasingly involve first and second person (singular). 
- Large scale data is important: Training epochs can be set high but specifically in texts a deep neural net should have seen a variety of different sentence structures to be able to generalize to a maximum number of textual scenarios, Hence, my minimum of training samples is 50 thousands of sentence pairs in a 80:20:20 data split.
Length of individual data point: Another consideration is the length of a given text, as, for instance, T5 is limited to a token length of 512. Yet, more contemporary architectures such as Pegasus or Longformer are able to process up to 1 million tokens. This equates to the length of an ordinary book. 
- Cleanliness of dataset (‘garbage in, garbage out’): Last but not least it is crucial to feed the deep neural network with clean data in the process of fine-tuning. Certainly  some errors may help to allow the deep neural network to generalize also to erroneous writing. However, it shall not learn certain bad styles which is why I recommend to use APIs such as GingerIT to augment the data and avoid traditional pitfalls like wrong inflections of verbs or an incorrect number of a nouns ;).  

In the course of this case study, we will work with mail data to be able to change the character of a text from introvert to extrovert an the reverse. Therefore, we will need a dataset composed oof mails as a base.

 