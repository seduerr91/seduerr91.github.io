---
title: Finding a base datasets 
tags: [Persuaide, engineering]
style: fill
color: primary
description: Finding a dataset for your purpose.
---

The following statement is not quite an invention but by now even you may have realized: 'data is the new gold'. Still, let us try to understand why?

## Why data is gold

It is quite philosophical but in a world where most of us live in abundance of cheap food and water, it is information that may give you an asymetric advantages over others. This information can be investment tips or persuasion techniques, guidelines or nasty information about a person. All of this information, or data, allows you to either become richer, potentially get that lady or guy to like you, or to actually blackmail someone else. 

The dominating large & successful companies from California, you name them, understood this quite a while ago, and created a lot of wealth by compiling datasets based on psychological means to place the perfect ads to users. It is good for humanity, if they are careful with these datasets because in the wrong hands ("Cambridge Analytica"), there can be quite some abuse be happening. Yet, you inspiring deep learner may wonder: how can I then get hands on data to learn new capabilities? For that, let us figure out where to find some of the open source datasets.

## Research Approach for new Features

Before looking for the creation of a new dataset, make sure that what you looking for is not already out there on the market. Hence, scan Google Search (mostly on Medium.com) for related problems. 
If not successful research on Google Scholar for related scientific articles, and see if anyone else faced your challenge. 

Then there are - more or less official databases ot search for datasets such as 
- Google Dataset Search.
- Kaggle.com datasets.
- Huggingface datasets.

that all have some more or less good and annotated datasets.
Pro Tip: I love to checkout Github Repository Search  because people tend to upload a lot of data there. 

## What to watch out for

Usually, I am working on sequence-to-sequence modeling, hence it is important to get simple transformations, i.e. moving from input statement to output statement in an understandable manner. For instance, a transition can be having two sentences being combined into one:

Input: "The sun is shining. I want to go to the beach."
Output: "The sun is shining, therefore I want to go to the beach."

If you find enough of such example in a wide range of different capabilities. This one is called sentence fusing, and in the DiscoFuse dataset by Google, you got a couple of million of thesee combinations. That is the perfect playground to fine tune neural nets and teach them how to fuse sentences.

## Coming up with new capabilities is different

However, when you want to create new capabilities you have to try a whole lotta different approach. If you want to create a dataset that no one ever has created before you have to put in quite some research and work. Yet, you will need a base dataset that represents your domain most. For instance, if you are working on emails, then it is good to have emails as a base.

In this blog series, we gonna focus on the scenario of making extroverted messages more introverted in an email context, and the other way round. Therefore, we have to start with a email dataset (there is not many but try the Enron dataset) in order to have a solid base. Up in the next article, we gonna focus on cleaning our base dataset.

Please let me know what you think and get in touch with me. 

Sebastian

---

Hi, I am Sebastian from Persuaide. Our mission is to improve how the world communicates and persuades for the good with Natural Language Processing. __Our ask__: Please support us on our journey by joining our waiting list (www.persuai.de). Thank you!