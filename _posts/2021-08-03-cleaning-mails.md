---
title: Introducing the Dataset Creation Blog Series in Natural Language Processing
tags: [Persuaide, engineering]
style: fill
color: secondary
description: Creating own datasets with SpaCy, PanDas based on Research.
---

In April 2021, Andrew Ng - *the primus maximus of Machine Learning* - was presenting a talk about the trends of machine and deep learning. Captivating and inspring, his soothing voice  create goose bumps on my skin by letting everybody in the webinar know that all of can deliver successful AI products. The magic? Get the data right! In this blog series, we will walk through an extensive data creation process. 

## Introduction

Back in his days at University, Andrew was working on a project in a team. They had to develop a software. In order to speed up the process, they were working sequentially whenever Andrew's team could. Imagine that after he would test a finished feature and before taking a break, he would attach the code to an email and send it over to his colleague, so that this colleague could proceed as Andrew would have a run or so. Fast forward, the git-framework came and it became easier to work on code collaboratively. 

Relating this to today, we got recently hands on a lot of datasets in our product development, and we literally were getting these send via mail. A good dataset does not even consist of thousands of gigabytes, often a few are enough (the amazing Google PAWS-X dataset has a few hundred MB). Why are we, as humans, repeating ourselves?

## Why are we not sharing our data?

There are three fundamental reasons why companies, and also you as an aspiring NLP product builder, should not share your data. 
Firstly, it provides defensibility to your product. With the right data you can train new features and capabilities to a Neural net that no one else has ever done before. How can you create a try sustainable competitor advantage from this? Learn in it in this blog series. 
Secondly, the process of creating a dataset is laborious, and almost impossible to automatize: You need to be or become an expert in a given domain (often linguistics paired with whatever data you are processing). For example, you are working on a financial text excerping service. Let us assume that you will need to extract all knowledge related to IBAN and addresses to create a certain score. It may be that you have the required texts, but which data do you need to get out and how do you leverage them? 
We will dive into this in our blog series a lot!
Lastly, ethical concerns often play a role. It is hard to find relevant and real datasets, because they carry personal information. When the emails of Hillary Clinton got leaked you could instantly read about her life and her professional behavior. I am sure that Mrs. Clinton was not happy about it. Would you be? Hence, there is a certain decency needed to avoid being able to trace back to humans, or to simply not publish any personal data. The issue is that personal data will help humans so much better to help.

## The blog series on Dataset Creation

In this blog series, we will walk through an extensive example from finding a dataset, to changing it in a way that it can have a whole new capability. 
All parts of code will be published so that you can follow along. I will annotate the code and highlight alternatives. 

Please find the article overview hereafter:

|#|Title|Publication Date|
|---|---|---|
|1|Finding a dataset and getting started|August 4, 2021|
|2|Cleaning the data|August 5, 2021|
|3|Ensure Data Quality with Ginger-it & CoLA|August 6, 2021|
|4|Conduct Research to Prepare for Manual Transformations|August 9, 2021|
|5|Manipulating Large Scale Data with SpaCy|August 10, 2021|
|6|Finetuning a Neural Net|August 11, 2021|
|7|Testing and Sharing the Neural Net on Huggingface.co|August 12, 2021|
|8|Packaging your Feature in a GitLab Repository|August 13, 2021|
|9|Deploying to Google Cloud Platform|August 16, 2021|
|10|Ethical Aspects on Data Manipulation|August 17, 2021|

## This is going to be exciting.

Please let me know what you think and get in touch with me. 

Sebastian

---

Hi, I am Sebastian from Persuaide. Our mission is to improve how the world communicates and persuades for the good with Natural Language Processing. __Our ask__: Please support us on our journey by joining our waiting list (www.persuai.de). Thank you!