---
name: Study Leave aka Bildungskarenz
tools: [Python, PyTorch]
image: https://i.imgur.com/XQI4dXz.jpg
description: I publish my major achievements per week here.
---

# Bildungskarenz Progress Overview

### Feedback Persuai.de 23. March 2021

Feedback to Persuai.de Colleagues

Teddy:
- Positives: 
    - does all the tasks that are so important but non-technical (YC), 
    - awesome business expertise
- Optimization: 
    - take care about yourself (take breaks for walks, swims, etc), 
    - read what got you here won’t get you there> sometime very stressed

Krzysiek: 
- Positives: 
    - so proactive and helpful, 
    - explains so much and has experience (git cola)
- Optimization: 
    - Communication what you are working on
    - Coordination (tense switcher)

Feedback from Persuai.de Colleagues
Teddy:
Positives:
- 80/20 will do attitude
- involved in biz and tech to understand the company

Optimization:
- forget perspective of other people + take a breath
- not showing gratitude of being in certain situations

Krzysiek:

Positives:
- always kind & careful
- great energy for projects

Optimization:
- be more direct regarding directions


### Narrativa Call, 16.03.2021

#### Topics:
- Fuser
- Aggregation
- Narrativa from May 2021

#### Fuser Online:
- Return only the group of token that create the nexus (concatenation). »> So not the whole retype is being used. Just return the concat value.
- Try to use it in English on the soccer data (register for this weird dropbox thing again): use soccer/football examples, long complex sentences.
- [Fuser](https://colab.research.google.com/drive/1Je9lRaZiVljlXf8MQI5uCJUgEc8ijMCt#scrollTo=CBvGdmXRjmW7) trained on sports with loss:
  - INFO:__main__:loss = tensor(0.0639, device='cuda:0')
  - INFO:__main__:train_loss = tensor(0.0639, device='cuda:0')
  - INFO:__main__:val_loss = tensor(0.0651, device='cuda:0')
- Sample sentence: The team has a bad defence they already received 25 goals. The forwards shot few goals in total 5.

I added two folders with both models to the gitlab repo: nrt_rd_sandbox.

### Call Results:

- Focus on Sentence Aggregation
- Make the git work but try a simpler table
- Try the Google Tapas Table Approach

##### Sample Value Fuser General Response

![Imgur](https://i.imgur.com/eoyV56k.png)

##### Sample Value Fuser Soccer Response

![Imgur](https://i.imgur.com/ODQBFoy.png)

#### Sentence Aggregation

Research related articles:

- Use T5-summarizing feature to aggregate statements as provided in the example. A test return was: 
  - Input: John's bicycle is red. Mary's bicycle is yellow. Tom’s bicycle is blue. Tom’s bicycle is red.
  - Output: John's bicycle is red. Mary's bicycle is yellow.
- Use Q&A feature to aggregate statements as provided in the example on [HuggingFace](https://huggingface.co/bert-large-cased-whole-word-masking-finetuned-squad?text=Where+do+I+live%3F). A test return was: 
  - Input: Context: John's bicycle is red. Mary's bicycle is yellow. Tom’s bicycle is blue. Tom’s bicycle is red. Question: Which people have a red bicycle?
  - Output: John. 
- [Table based approach that seems very promising](https://github.com/persuaide/LogicNLG), test the [prototype](https://wenhuchen.github.io/logicnlg.github.io/).
- [Nice paper from 2011](https://www.aclweb.org/anthology/R11-1012.pdf): Efficient Algorithm for Context Sensitive Aggregation in Natural Language Generation. Forward Search did not score significant results. Implement that?
-[Sentence Aggregation Dataset](https://www.aclweb.org/anthology/C16-1101.pdf)


### Narrativa Call, 26.02.2021

Narrativa Call

- Video on the Datalift #3 will be there in a few weeks.
- Thank you for the quarantine possibility.
- What is the status quo on the investments
- What will I do at Narrativa?
- What will I earn?
- What valuation does Narrativa have? What share (ESOP) would I be eligible for? 
- Raiffeisen wage net 3600 EUR / month
- Can I become fully remote and Digital Nomad on a freelance setup?
- What are the next steps? What is the perspective? 

Honesty

- Status Quo: I really like what I do at Narrativa and I want to learn how a work agreement looks like. 
- I wanted to ask you for options since I need to know what to tell to Raiffeisen. I will quit my job, and work on unemployment benefits for a little while. 
- Register a company in Estonia. :)
- I am working with two friends now on persuasive AI tool, and we are moving quickly. Much quicker than I thought. Prototype live since last week.
- I still do the things for Narrativa (except last week bc of death of Javiers dad), because I really love my tasks and everything. 
- Maybe I shall try for another 2 - 3 months and then I message you? We can continue to work in the meantime?

Status Quo

- Location: 
- Working as a Freelance: Employee, Contract, Payment, Not eligible for ESOP. He wants that!
- Question: Salary; net is higher.
- Cost average: 4-5 years of experience payment. 
- 30 - 35k gross; as freelance 40-42k (3k / month).
- Will increase salary. 

### Narrativa Call, 24.02.2021

* Message by Darina from Bayes Esports: 
    * Bayes Esports is a company that specialised in esports data and analysis. A potential project is to provide analysts with interesting insights about the match while the match is going on. 
    * These can be facts like “player X just broke the record for the most gold farmed in the first 10 mins of the game” or “team X has had its longest killing streak in history”. 
    * Eventually we want to progress to things like “if player X gets one more kill, they will break the record for the longest streak in history”. 
    * We have a large amount of historical data to build this upon and receive high-resolution live data during the match. We also have access to what historically has been considered interesting facts by analysts to learn from. 
    * My task is to create the machinery that would filter the historical data and find whatever is interesting, and then wrap it in a sentence.
    * WRITE DIRECTLY TO INFO@NARRATIVA.COM > Message David / make a quick demo.

Regarding: “player X just broke the record for the most gold farmed in the first 10 mins of the game” or “team X has had its longest killing streak in history”. 
        * We can create queries, but they may be better equipped at doing this. 
        * We are able to usually write texts based on the data, and to generate. That is our strength. 

* Pai Fuser Online: 
    * Return only the group of token that create the nexus (concatenation). >>> So not the whole retype is being used. Just return the concat value.
    * Try to use it in English on the soccer data (register for this weird dropbox thing again): use soccer/football examples, long complex sentences.
    * Otherwise use approach with special tokens (to identify the separator). 
    * Make the task potentially/somehow simpler for the model.

* Tense Switcher with example by GSK.
    * Integrate marks of tense; create a dictionary)

* Think of How to Make Sentence Aggregation happen: Q&A Datasets? Google TAPAS?



### Call with Peter Gloor, 18.02.2021

- Concept / Technology [Slides](https://docs.google.com/presentation/d/1BcBGVxVkE43Dc5fhU41Zo0UAaL1AW_zC4G2s_muqTWY/edit#slide=id.gb2fc198945_0_8)
- Prototype [Persuai.de](https://persuaide.github.io/)
- Poster Session at [Persuasive2021](https://persuasive2021.bournemouth.ac.uk/)
- Next Steps: Need for related articles for a inter-rater experiment setup & questionnaire design.

### Narrativa Call, 17.02.2021

- [Pai Fuser Online](https://paifuser-zfz6md3z3q-wl.a.run.app/)
- [Tense Switcher](https://colab.research.google.com/drive/1CC1YohzpFp5JbF5KqCu_B9n1AC4IqD9m#scrollTo=j5rH6r2l0DXE) with example by GSK.
- Loss on T5 Training [here on paraphrasing task](https://colab.research.google.com/drive/1z_Ho0n1pEiHWkIyEEI7jwz6E438o3sP-#scrollTo=LC4Pk4c89V0W) 
- Message by Darina from Bayes Esports: Bayes Esports is a company that specialised in esports data and analysis. A potential project is to provide analysts with interesting insights about the match while the match is going on. These can be facts like "player X just broke the record for the most gold farmed in the first 10 mins of the game" or "team X has had its longest killing streak in history". Eventually we want to progress to things like "if player X gets one more kill, they will break the record for the longest streak in history".
We have a large amount of historical data to build this upon and receive high-resolution live data during the match. We also have access to what historically has been considered interesting facts by analysts to learn from. My task is to create the machinery that would filter the historical data and find whatever is interesting, and then wrap it in a sentence.

### Narrativa Call, 03.02.2021

- Implementation of demo for [Tense Switcher](https://colab.research.google.com/drive/1CC1YohzpFp5JbF5KqCu_B9n1AC4IqD9m#scrollTo=j5rH6r2l0DXE)
- Contrast Model see chat is stored here on [HuggingFace](https://huggingface.co/seduerr/pai_con)

### Narrativa Call, 25.01.2021

- Sentence Fusion: Deep Dive Analysis what Wiki Dataset can do. 
- Presentation: Go through slides.
- Truecaser: Does not work with Narrativa obviously. 

### Narrativa Call, 20.01.2021

- Sentence Fusion Model.
- Presentation with 1000 peeps, 29.01. Review / Integration.
- Sentence-casing / true-casing.
- Look at the data again which are good improvement.
- Simple NLG
- Two calls with two Pharma companies: text2text; transform a sentence from future tense to past tense.


### Narrativa, 11.01.2021

- Linguistic Realizer: Pronouns yes, verbs not, works better with text2text; 
    - masked model
    - verb conjugator nlp

- Sentence fusion next
    - Paper
    - Linking sentences but keeping them entirely with connectives
    - Check BERT2BERT

- AI Guild Speech coordination with David

- Persuasive NLG: 
    - Literature review
    - Style transfer, politeness transfer, shortener
    - Editor tool?


### Narrativa, 21.12.2020

[X] Train on verbs first person singular (he, she, it) > Extract both the pron and the verb
[X] Write a Blog Article about it
[X] Test mT5 German with 5 iterations on mT5 base; test T5 German, too.

Narrativa, Call 04.01.2021
To Do:
- Find a syntax to indicate which word to change: sentence = "He live[VERB] in a new country."
- Use space top 10-100 alternatives, with highest probability > check for lemma (infinitive) and compare.
- Consider using NLTK right away.
- Test against other masked models (e.g., BERT/AlBERTa) and try just using plain T5 again without fine-tuning.
- First identify them in HuggingFace; then try them in HuggingFace (e.g., BERT is quite old by now).

Next task ‘Creative but Correct Sentence Joiner’
- Check out BERT2BERT (decoder - encoder): for paraphrasing etc. aka Sentence Fusion
- Related article
- Join two sentences, and join then with a conjunctions: “He loves soccer. He plays every day.” >> “He loves soccer and plays it every day.”; so far Narrativa does with comma & and as a conjunction. >> Check for the term of doing this; it could be in the HuggingFace overview.

### Narrativa, 14.12.2020

Talking Points 
- mT5 Paraphrasing in Spanish Inference, Model on huggingface.co/seduerr
- Linguistic Realizer is pretty damn good.
- Further Aspects:
    - JavaScript React
    - BigBird official code and pretrained models are out

To Do Until Next Time
- Try mT5 German with 5 iterations, on mT5 base
- Train on verbs first person singular (he, she, it) > Extract both the pron and the verb
- Refine Linguistic Realizer? Set a .90 limit?
- Write a Blog Article about it

Appointments
- Next Appointment: 21.12.2020
- Then: 04.01.2020

### Narrativa, 30.11.2020

What I did: 
- Testing of T5 with German
- Testing of mT5 with Spanish (only small worked, base seems to have an issue with the tokeniser) > does not do inference
- Working on the Linguistic realiser -> making it masked_sentence > solutions; took me forever.. :(


What I will do next:
- Approach to continue with Linguistic Realizer: _ file used on GDrive is linguistic_targets
- Make a pronoun dict and only return pronouns that are in that lookup dictionary (cola these for quality!)
- Integrate code snippet from Javier for getting the probabilities for pronouns (define a confidence interval, if possible, under which all others are rejected)
- Make mt5 work with Spanish and transformers 4.0.0rc

https://huggingface.co/seduerr/mt5-paraphrases-espanol?text=paraphrase%3A+Es+un+buen+d%C3%ADa.

## September 2020

### Results of week 20: September 14-September 18

- Experiments in Zurich/Rheinau

### Results of week 19: September 7-September 11

- Successful interview with Narrativa.
- Summary of NLP Deep Learning Chapter 2.

## August 2020

### Results of week 18: August 31-September 4

- Successful interview with Narrativa.
- Summary of NLP Deep Learning

### Results of week 17: August 24-August 28

- Worked in Math Faculty of Uni Vienna with Paul. Certificate in Deep Learning NLP.
- Trip to Ireland to spend birthday with Evgeniya.

### Results of week 16: August 17-August 21

- Worked in Math Faculty of Uni Vienna with Paul. Certificate in Deep Learning.
- Weekend in Budapest with David and Albert.

### Results of week 15: August 10-August 14

- Vacay in Montenegro.

### Results of week 14: August 3-August 7

- MIT Projects: Dedicated major work this week.
- Project: Paused until after MIT, worked on quarterly review on Travel day on Wednesday.
- Public Voice: No new article because of vacay next week.
- Leisure: Worked for days from Monte. Did quarterly review for Q1.

## July 2020

### Results of week 13: July 27-July 31

- MIT Projects: Call with Peter on Tuesday. He loved the basil and citizen science approach.
- DL-Scientist: This week only MIT is a priority.  
- Project: Paused until after MIT, worked on quarterly review on Travel day on Wednesday.
- Public Voice: Blog article on MIT project part 2.
- Leisure: Nice time at home with Parents/AMS.

### Results of week 12: July 20-July 24

- MIT Projects: Dedicated major work this week. Currently issues with correct tracking. Will work through weekend convinced I will achieve proper results. Writing a paper on the side. Will be counted as this week's blog article and published there.
- DL-Scientist: This week only MIT is a priority.  
- Project: Paused until after MIT, worked on quarterly review on Travel day on Wednesday.
- Public Voice: Blog article on MIT project.
- Leisure: Amazing trip through West Ireland last weekend, hiccups with G. reduced this week's output. Weekend will be used to support progress.

### Results of week 11: July 10-July 17

- MIT Project: Almost my entire contributions went into the project see below, which is why I will only do MIT from Monday until July 28, and only a blog next Friday.
- DL-Scientist: Learnt a lot through project this week including, API design, API calls, caching of queries, setting up async communication on a web socket with a Channels layer.
- Project: Worked also Saturday and Sunday on the book Django by Example 3, and finished all the 14 chapters / 550 pages, having implemented a full blog, social network, web shop, and e-learning platform. This was necessary to get thorough understanding of today's basic software production processes.
- Public Voice: This weeks blog article is on investment banking, a legacy of my wishes to get into private equity two years ago.
- Leisure: I ran significant distances this week, had some nice BBQs with Evgeniya, and will be traveling the whole weekend.

### Results of week 10: July 03-July 10

- MIT Project: Worked on the OpenCV algorithm this week but due to Web Shop that I also developed in this week, I ran into a temporal shortage. Hence, Josephine and I agreed to postpone next meeting with Peter from July 14 to July 28. MIT and Harvard sued the USDHS this week.
- DL-Scientist: I learnt a lot this week through the Django 3 by Design Book which took roughly my whole Monday (9-midnight), Tuesday (9-mdidnight), and large junks of Wednesday.
- Project: See above.
- Public Voice: Blog article on introduction to deep neural networks.
- Leisure: Had only two runs: Monday and Thursday, saw G. on Monday, Wednesday, Thursday. Rained for 50 hours straight. This was quite depressing. Booked a flight to Germany to counter my Irish experience.

## June 2020

### Results of week 9: June 29-July 03

- MIT Project: On Tuesday there was the fourth coordination call with Peter. He was positive again and Josephine was perceiving it very positively. I worked both days at the weekend for some hours, and on Monday until Midnight.
- DL-Scientist: This week, I did not get a big chance to look into Fluent Python because of the MIT and then some other side topics but I will focus on it again today. Yet, I learnt a lot about OpenCV4.
- Project: I worked through two chapters of the book Django 3 by Example (Chapter 5 and 6), and made a roadmap for it. It is very useful as I now learnt about the In-Memory database Redis, and I am looking forward to the next chapters.
- Public Voice: I submitted seven blog articles on my web page and a few more on the MIT project within the last week.
- Leisure: Had a serious talk with G. Did run 3x, and did Yoga again twice in a long time.

### Results of week 8: June 22-26

- MIT Project: This week I did have quite some internet issues but could progress on five out of eight sprint goals. I will work on one this weekend to make up. Also the executive order made me look into alternative geographical locations. Tuesday was a non-productive day.
- DL-Scientist: I worked on the *Fluent Python* book and made quite some progress. It is a lot of information but important to get into it.
- Project: Solid progress on the book *Django 3 by Example* by finishing three chapters. It is a lot but very helpful. Tuesday was non productive.
- Public Voice: Blog article on the data manipulation is out. Not my best but it is like this week ;).
- Leisure: This week, I ran 33 km in three days to mentally deal with the executive order that may prevent me from physically relocating to Boston. Luckily, I can do all of my projects remotely.

Overall, this was not my most satisfying week but I made up some alternative plans, consulted some important people, and still progressed. Thank you Ted for the call. Keep it up bro! Yet, I concluded that I will make a skill list, get these skills together in the upcoming weeks, and then solely go for projects using these skills in the second part of my Karenz.

### Results of week 7: June 15-19

- MIT Project: On Tuesday, there was the third coordination call with Peter and he was again very happy with our results. He now started producing more and more videos and he seems to like our project a lot as he sends out mails every day. Also, the MIT started sending out mails about the Fall term, and I was informed this week that the semester will start in Boston. Currently, I cannot say if this means that I can also move over to the states as the Vice Provost of Research needs to invite Visiting Grad Students again but, so far, I can continue remotely. Ultimately, opening up is better than everything virtual.
- DL-Scientist: I am constantly working on the fundamentals book 'Fluent Python' which has a very detailed and comprehensive approach to the functionality of coding. This is a go-to literature to become deeply knowledgeable. I am happy to take time and to summarize the whole book these weeks.
- Project: This week, I was looking into different Django books and - honestly - caught myself skimming them to superficially. I am doing this to deeply understand the technologies I need for my service. It does not make sense to follow books word by word, yet, I have to be more rigour in my research because in a year's time I do not want to be proud on the fact that I finished 300 books and did not rmb anything but I want to have worked through 10 good ones, and really learnt something. Hence, ___Django 3 By Example____ is now my book of choice to work on. It has 14 chapters, and I will have to finish a chapter every working day (Monday through Thursday), otherwise: 50 EURs to the charity I do not like. I made an [overview of the dates and the chapters to finish timely](https://i.imgur.com/zJWMIUs.png). Additionally, I submitted my application to become an e-resident in Estonia. For this, I called the embassy of Estonia to make sure they are open and provide me with the service before America (i.e. within the next two months).
- Public Voice: This week, I wrote on developing banking products in highly complex organizations which was my main job at the bank. I tried to make it as tangible by using storytelling. The whole idea is to try a different writing style. Additionally, I firstly shared my works on the MIT project with both German and English speaking friends and evaluated the behaviour of my readers thoroughly on my site. It was interesting to see, how people are interacting with my content, and it quickly made me change some phrases. On Wednesday, I had 50 people on my page.
- Leisure: This Monday, I met with my four friends here to play volleyball as it was a very beautiful evening. Also, I did some nice cooking for G. Sport-wise, I did workouts every day, and finally some yoga again yesterday, but I really have to go for an extensive run soon! Yesterday night, I continued with learning Russian. It is such an interesting experience to learn a new alphabet.

Reflections of the week: ___More focus on the few & keeping my mind fit are essential.___ I really have to focus more on a few excellent inputs (*Fluent Python* and *Django 3 by Example*) are excellent choices. Also, I am starting to feel that my memory capacity decreases. To counter that, I will make more calls and talk about the projects and what I learnt (aunts, interested friends, developers), and continue to learn Russian to stimulate the building of fresh synapses in my brain continuously.

_Heads up: I will take my first two days off on July 2 and July 3 to have an extended weekend in Belfast, Northern Ireland._

### Results of week 6: June 8-12

- MIT Project: Worked particularly on data processing and data visualization. I am very happy with what I achieved but it also used a lot of time during this week. Yesterday, I worked until 10pm on it.
- DL-Scientist: I did work on the Python Fundamentals book on Tuesday evening and Wednesday morning. Progress is there, but a bit slow. However, I am quite busy in any way and can't blame myself.
- Project: Finished with the Websocket book (and running it), continued with Django Microservices book.
- Public Voice: Wrote an extensive blog article on MIT project and its current status, also added tracking and a Datenschutz page to the webpage.
- Leisure: Starting to learn Russian. Evgeniya got me in touch with a learning platform. Cooked a lot with my flat mate Peter, worked out a lot with Youtube videos and Karo. Had a double date with Yvette, Geniya, Peter, and me. Also, a crazy Hungarian night last week.


### Results of week 5: June 1-5

- MIT project: Another presentation with Peter was due. He mentioned twice that there was quite a progress on the project. Aside, he wanted to have access to the code and to try it himself. That makes me confident that I am on a good way. He is such a strong and inspiring mentor.
- DL-Scientist: I learnt a lot from the MIT project this week on data science topics specifically when it comes to dealing with messy data. Next week, I will focus more on the fundamentals of Python again.
- Project: I hosted my first Websocket server and I will continue with this project next Monday. Also, I will become an e-resident of Estonia.
- Public Voice: Blog article on traveling, but also I published the results from talking to interview experts in the field of Data Science, Machine Learning and Deep Learning.
- Leisure: Enjoyed beautiful long weekend in Dublin and found friends from Rotaract and have a super funny flat mate now. I am arriving in this country. The week with G. was hard for her but we made the best out of it. I like being with her a lot.

## May 2020

### Review of Month 1 of Bildungskarenz

- Projects: On track but I find it sometimes difficult to switch between practice (active coding) and studying (e.g., following a Datacamp session or a book). Remedy: Start with basics via 'Fluent Python'.
- Interesting findings: Ireland has surprisingly nice weather. Working totally remotely works fine, and your longterm companions are just a call away. Lunch calls work perfectly fine.
- Roadmap alterations: Geographically, I move to the US is rather possible from the beginning of September 2020. Aside, I enjoy my time in Ireland a lot. Get away from Datacamp and high-level books and more into particular Medium publications, conference proceedings and video blogs on NLP (e.g., HuggingFace).
- What I liked: Being with G., virtually meeting my friends also long-term ones (e.g., Ralf, Garima), cooking a lot, calls with experts in the field.
- What I did not like: Sometimes feeling a bit dependent on G because I do not know anyone here; Reading 'lord of the flies' > stop it, u German. You do not have to finish it.
- Optimization potential: Social hacking interventions started (relocation, local Rotaract club, join Meetups), focus more on fields you want to grow in (like deep learning) rather than ML through Datacamp. Follow plan by experts (Shouvik & Jude) - which will be incorporated in new roadmap for Month 2.

### Results of week 4: May 25-29

- MIT project: Video (regions of interest) and audio (MFCCs) extraction of relevant features functioning. Using Pandas DataFrames for that. Next step is trying different hyper params and correlation analysis. Worked on book Fluent Python to become a Python expert. Very amazing ground work. Will continue summarizing it.
- DL-Scientist: TimeSeries certificate earned. Won't continue with DataCamp or only interesting projects as it is too highlevel by now.
- Project: Got project running with Microservices by external dude. Investment of 300 EUR not reasonable at this moment. Reading into relevant books on concurrency, django projects, websockets, redis in memory databases, and JavaScript. Considering doing a JavaScript training.
- Public Voice: Blog article on decision-making and willpower. Consider taking a blog afternoon, next week.
- Leisure: Enjoyed beautiful weather in Dublin this week. Live music twice. Ran 30+ km in last 7 days, and will go for an extended run tonight (25km+); followed up on my HIIT workouts and Yoga thoroughly, cooked and prepared breakfast for G.

### Results of week 3: May 18-22

- MIT project: Got the infrastructure live which was a pain in the ass. However, delivered on time. Peter was very satisfied. Read about it here [Leaf Identifier](https://plantions.github.io/project/2020/05/21/infrastructure.html).
- DL-Scientist: Worked on TimeSeries skill, and finished half a certificate but find constant difficulties of continuing to do these exercises. Will need special review to get more productive.
- Project: Had to scale down because of MIT deadline but found an interesting book on my project. Hence, I will finish this book this week, and I commit to spend EUR 300 on Google Cloud Platform to get my product started next week.
- Public Voice: Blog article is written on coding, yet I want to take time to improve.
- Leisure: Difficult week for this angel but did my best to help. I followed up on my HIIT workouts and Yoga thoroughly, cooked nicely, and enjoyed the end of my quarantine by running. Can't complain from my side.

### Results of week 2: May 11-15

- MIT project: Worked on the first 6 chapters of Computer Vision with OpenCV 4, will need to continue until chapter 9. Deadline for current submission, Thursday 21, 2020, EoD.
- DL-Scientist: Finished skill track [Image Processing](https://learn.datacamp.com/skill-tracks/image-processing), continued with "Website Scraping with Python"; rather satisfied in this week, prior weeks weekend work did succeed. The next skill to study will be time series analysis. I also watched FastAI lecture 4.
- Project: Further looked into writeup.ai. Understanding the infrastructure with technologies like concurrency, web sockets, APIs, Django Channels, etc. Will need to get it live on a docker container to see it fail :smile: and improve on it. Maybe consider looking in a book. However, I had to move to slots to the future (probably the weekend, because of the MIT deadline). Further postponing after the deadline of May 21 considerable.
- Public Voice: worked on the roadmap blog post which was concluded from strategy, committed to GitHub every day, tweeted, published plantios.net. Works gut.
- Leisure: Another fantastic week in this country. I loved our date night. Started reading Lord of the flies. Did workouts every weekday, and yoga every day. Cooked a lot.

### Results of week 1: May 4-8

- MIT project: set up sounds for the experiment, worked on plantios.github.io, had onboarding call with Josepine my project colleague, launched Google Colab infrastucture.
- DL-Scientist: Started with skill track [Image Processing](https://learn.datacamp.com/skill-tracks/image-processing), started reading through "Website Scraping with Python"; not entirely satisfied > going to work on Friday afternoon, and Sunday.
- Project: Found amazing open source project going into my direction. Started with understanding it [here](www.writeup.ai).
- Public Voice: worked on this blog post, committed to github every day, tweeted, plantios.net.
- Leisure: Had an amazing week with G. She is so adorable.
- Extracurricular: helped Ted with the webpage of covidvoices.
