---
title: Create Synthetic Textual Datasets with T5, PAWs, and Custom Text Corpora 
tags: [Coding]
style: fill
color: primary
description: Extending T5's features by paraphrasing for synthetic dataset creation.
---

Learn how to bring paraphrasing to Google's T5 & fine tuning it with custom textual data sets for synthetic dataset creation.

![Imgur](https://i.imgur.com/j84X9pQ.gif)

This project was concluded with the help of Javier of [Narrativa](www.narrativa.com) a Spanish deep learning company that helps companies, such as the Wall Street Journal, to create texts with the help of AI. Among the many challenges of supervised machine learning, their dependency on large labeled datasets ranks as the highest. 
Compiling high-quality datasets is expensive and hard to scale. That problem is more accentuated for smaller organizations. Our generative method allows generating fake datasets that match the distribution of labeled datasets, making it possible to accelerate the training of machine learning models. 

The process of creating such a synthetic data set is illustrated hereafter (all the used code can be found in the following [Github Repository](https://github.com/seduerr91/synthetic_pub). In the following, we will discuss these steps individually.

![Imgur](https://i.imgur.com/Z4iZ1Aj.jpg)


### (1) Fine tune T5 with PAWS data set to teach ‘paraphrase: ‘(T5-P)

Since Google's [T5](https://ai.googleblog.com/2020/02/exploring-transfer-learning-with-t5.html) has been trained on multiple tasks (e.g., text summarization, question-answering, sentence correctness (cola), and sentence similarity (stsb)) solely through Text-to-Text tasks, it is useful for extension. We benefit from this capability by fine tuning it with the [PAWS dataset](https://github.com/google-research-datasets/paws) which consists of approximately 50.000 labeled paraphrases. 

![Imgur](https://i.imgur.com/oga2G7V.jpg)

After that, we created a T5-P(araphrase) which is able to create paraphrases from texts with no specific context. However, this one is not optimally suited for our business journal context. Hence, we need a text corpus that makes sound more _biz_.


### (2) Fine tune T5-P with Custom Data to Create Synthetic Data

![Imgur](https://i.imgur.com/PlUg2jG.jpg)

As a next step, we use our custom data (i.e., an business text corpora) to create paraphrases with our new capability of T5-P(araphrase), i.e. __paraphrasing__. Although, we only have a very small corpora (330 samples), we use these to create a data set from it. The resulting synthetic data set has the original 330 samples in the first column, and the created paraphrases in a second column. 


### (3) Use T5 to Ensure Synthetic Data’s Syntatical & Semantical Quality

![Imgur](https://i.imgur.com/X9U1jN8.jpg)

Before, enabling our T5-P to create business paraphrases, we want to ensure that we only fine tune it with semantically congruent and syntatically correct samples. Hence, we have to evaluate our newly created synthetic data set. Evaluation techniques like ROUGE and BLEU are not useful in contexts since they look for similar words. However, we want paraphrases. 

Therefore, we use  a trick: Google's T5 is also trained for similarity (feature: 'stsb sentence 1: [...]sentence2: [...]) which we can use to ensure that our original sentence and its corresponding paraphrase have the same semantic meaning. _In our project, 95% of sentences had a similarity score above 4.0 which we considered further._ considered them further). 

Yet, our sentences can still be syntactically incorrect which we, again, can evaluate with T5 itself. Checking for correctness is being done by using 'cola: [sentence]' which we apply to the synthetic paraphrases. _Only three out of 313 samples were rejected._ 


### (4) Fine tune T5-P with Qualified Synthetic Data for Custom Paraphrases

![Imgur](https://i.imgur.com/VQNLBNq.jpg)

Finally, we fine tune our T5-P(araphrase) model with our synthetically created data set (that is both syntacitally and semantically correct). After that, we are able to create very authentic paraphrases sounding like our business corpora (cf. introductory image). You can use this [Colab](https://github.com/seduerr91/pawraphrase_public/blob/master/t5_pawraphrase_inference.ipynb) for inference to create your own.


### (Optional) Using the fine-tuning through a GUI or FastAPI

Finally, to make the service interactive, we can provide it as an API with FastAPI [(see this examaple)](https://seduerr91.github.io/blog/ilm-fastapi) or with a flask [frontend (as seen in above)](https://github.com/renatoviolin/T5-paraphrase-generation) which was adapted from the works of Renato (Kudos!).

Thank you for reading this article. I'd be curious about your opinion.

#### Hi there! I want to work in NLP.

I am Sebastian (M.Sc. in IT and Business) an NLP Deep Learning Engineer. In my former life, I was a manager at Austria's biggest banking group. In the future, I want to work remotely flexibly & in the field of NLP. I help organization to use artificial intelligence with natural language processing.

[Contact me](https://www.linkedin.com/in/sebastianduerr/) to get in touch!