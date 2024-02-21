---
title: Dense Passage Retrieval of 10-k Reports with Haystack
tags: [Instructions]
style: fill
color: primary
description: Gaining valuable insights by questioning a 10-k report
---

# An Account Executives Approach to Cold Calling

[Ben Riall](https://www.linkedin.com/in/ben-riall-ab24a246) works for Adobe as an executive account manager. He has started and successfully excited a company, has written a book, and currently creates an online course. 

With thirty big accounts a year, he is very very careful on who to engage with. And he makes sure he know everything. Therefore, he reads business and annual reports ([10-k](https://www.investopedia.com/terms/1/10-k.asp)), and looks for certain aspects such as: ’Does the target company grow in digital experiences (or is this a strategic initiative)?’, because then he has a reason to contact someone in that enterprise. In such a target company there are 10 people that are relevant to contact.

Yet, Ben believes in cold calling. While mail and LinkedIn messages don’t really work since they are too impersonal. He would only benefit from a tool that could find key insights for him in business plans or on the LinkedIn profiles or answer certain questions. So let us tackling his situation!

Questions he would ask are: 

- Are there digital experiences are they doing that ?
- What are the strategic priorities?
- Is the company growing ? 
- Do they have cash or not? 
- Is there things I have not thought about yet?

So how can we parse and get answers to these questions? 

# Better Retrieval via "Dense Passage Retrieval"

The Retriever has a huge impact on the performance of our overall search pipeline. It can be sparse or dense.

#### Sparse
Family of algorithms based on counting the occurrences of words (bag-of-words) resulting in very sparse vectors with length = vocab size.

**Examples**: BM25, TF-IDF

**Pros**: Simple, fast, well explainable

**Cons**: Relies on exact keyword matches between query and text

#### Dense
These retrievers use neural network models to create "dense" embedding vectors. Within this family there are two different approaches: 

a) Single encoder: Use a **single model** to embed both query and passage.  
b) Dual-encoder: Use **two models**, one to embed the query and one to embed the passage

Recent work suggests that dual encoders work better, likely because they can deal better with the different nature of query and passage (length, style, syntax ...). 

**Examples**: REALM, DPR, Sentence-Transformers

**Pros**: Captures semantinc similarity instead of "word matches" (e.g. synonyms, related topics ...)

**Cons**: Computationally more heavy, initial training of model

Results:

__Answers to: What are efforts regarding digital experiences?__

| Rank | Answer                                                                                                            |
| ---- | ----------------------------------------------------------------------------------------------------------------- |
| 1    | eCommerce efforts and innovation                                                                                  |
| 2    | investments in eCommerce, technology, acquisitions, joint ventures, store remodels and other customer initiatives |
| 3    | Same Day Pickup and Same Day Delivery                                                                             |
| 4    | social media, online advertising, and email                                                                       |
| 5    | security of our digital platforms and keep them operating within acceptable parameters                            |

__Answers to: What are the strategic priorities?__

| Rank | Answer                                                                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | improving our customer-facing initiatives in stores and clubs and creating a seamless omni-channel experience for our customers                     |
| 2    | Price transparency, assortment of products, customer experience, convenience, ease and the speed and cost of shipping                               |
| 3    | to make every day easier for busy families, operate with discipline, sharpen our culture and become digital, and make trust a competitive advantage |
| 4    | improving our customer-facing initiatives in stores and clubs and creating a seamless omni-channel experience for our customers                     |
| 5    | strategic capital allocation                                                                                                                        |

__Answers to: What is the company's growth?__

| Rank | Answer                            |
| ---- | --------------------------------- |
| 1    | ticket and transaction growth     |
| 2    | net sales                         |
| 3    | fiscal 2019                       |
| 4    | $2.8 billion or 2.3%              |
| 5    | 23% of our consolidated net sales |

