---
title: How to Use the Generative Text Infilling Model based on Artificial Intelligence
tags: [Coding]
style: fill
color: light
description: This micro-service allows infilling multiple words into a context. This article explains how to use it.
---

The following snippet shows how Artificial Intelligence was used in the fielf of NLP. The neural net was trained for infilling different sentences for a given context. Text infilling is the task of predicting missing spans of text which are consistent with the preceding and subsequent text.

![Imgur](https://i.imgur.com/Qh0FFjN.png)

This article is based on the works of the Infilling Language Model (ILM) framework outlined in the ACL 2020 paper [Enabling language models to fill in the blanks](https://arxiv.org/abs/2005.05339) by Donahue et al. 2020. In this article, it is explained how to use this simple microservice. Use the resulting API [here](https://ilmapi.uc.r.appspot.com/docs).

You can use this model by following a few simple steps:

##### 1. Go to the [micro service](https://ilmapi.uc.r.appspot.com/docs) web page, and click the infilling you want to use.

![Imgur](https://i.imgur.com/6qahkrz.png)

##### 2. Next, press the button: Try it out. In the upper right corner.

![Imgur](https://i.imgur.com/ZEFlPMo.png)

##### 3. Edit the input part of the request. Make sure you add a little underscore sign ('_') where you want to infill.

![Imgur](https://i.imgur.com/PKLDThM.png)

##### 4. Click the button execute in the lower part of the service.

![Imgur](https://i.imgur.com/bpa8iFq.png)

##### 5. Check the response body for different infillings. 

![Imgur](https://i.imgur.com/O7D5ulg.png)

##### Additional Perks: Test the other two services for infilling only words or multiple words (so called n-grams).

![Imgur](https://i.imgur.com/3QrIP7R.png)

There is also the possibility to test the service locally or to get a console-based output. Drop me a line if you are interested in any of these.

#### Acknolegdements

Thanks to Javier and the team of Narrativa who suggested me to find a solution to this problem. Also a big thanks to HuggingFace, the Team from Stanford around Mr. Donahue, and WifiTribe with which I am currently living as a Digital Nomad. I am doing my research and education remotely.

#### Who am I?

I am Sebastian an NLP Deep Learning Research Scientist (M.Sc. in IT and Business). In my former life, I was a manager at Austria's biggest bank. In the future, I want to work remotely whenever I want to & in the field of NLP.

Drop me a message on [LinkedIn](https://www.linkedin.com/in/sebastianduerr/) if you want to get in touch.