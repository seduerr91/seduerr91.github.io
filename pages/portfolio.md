---
layout: page
title: Portfolio
permalink: /public/
image: /assets/seb-hero.webp
description: Selected AI engineering work, open-source contributions, product outcomes, research, and talks by Seb Duerr.
---

# Portfolio

I build AI products at the boundary between models and real software: provider integrations, evaluation systems, production services, developer examples, and the infrastructure that makes fast inference useful.

<div class="portfolio-actions">
  <a class="btn btn-primary" href="mailto:{{ site.author.email }}">Get in touch</a>
  <a class="btn btn-outline-primary" href="{{ '/cv/' | relative_url }}">View CV</a>
  <a class="btn btn-outline-primary" href="https://github.com/{{ site.author.github }}">GitHub</a>
</div>

## Selected Projects

<div class="portfolio-case-grid">
  <article class="portfolio-case">
    <p class="portfolio-case-label">Developer ecosystem · Cerebras</p>
    <h3>Fast inference where developers already work</h3>
    <p>Built and maintained integrations across LangChain, Pydantic AI, Flowise, Dify, Cline, Kilo Code, and OpenCode.</p>
    <p><strong>Outcome:</strong> native Cerebras support, model discovery, reasoning controls, and production-oriented examples across major AI tooling ecosystems.</p>
    <a href="https://github.com/langchain-ai/langchain-cerebras/releases">See LangChain releases</a>
  </article>

  <article class="portfolio-case">
    <p class="portfolio-case-label">AI product platform · Cordial</p>
    <h3>From first service to evaluated product capability</h3>
    <p>Built the company's first production Python AI service and connected it to the core PHP platform under a tight evaluation deadline.</p>
    <p><strong>Outcome:</strong> the resulting AI product capabilities earned a 5 out of 5 score in the 2024 Forrester Wave evaluation.</p>
  </article>

  <article class="portfolio-case">
    <p class="portfolio-case-label">Enterprise retrieval · Corteva</p>
    <h3>Conversational access to a large data catalog</h3>
    <p>Helped build a GPT-4 retrieval system across roughly 200 enterprise data sources.</p>
    <p><strong>Outcome:</strong> a knowledge interface designed to serve 21,000 employees.</p>
  </article>

  <article class="portfolio-case">
    <p class="portfolio-case-label">AI automation · Cordial</p>
    <h3>Generation, agents, voice, and optimization</h3>
    <p>Developed customer-facing capabilities for message generation, audience building, agent automation, outbound voice workflows, and send-time optimization.</p>
    <p><strong>Outcome:</strong> send-time optimization increased clicks by 30%.</p>
  </article>
</div>

## Open-Source Engineering

- **Cerebras Inference Cookbook:** created production-oriented notebooks for an [academic research agent](https://github.com/Cerebras/Cerebras-Inference-Cookbook/pull/11), [real-time voice translation](https://github.com/Cerebras/Cerebras-Inference-Cookbook/pull/12), and [hyper-personalized content generation](https://github.com/Cerebras/Cerebras-Inference-Cookbook/pull/13).
- **Pydantic AI:** contributed the native [`CerebrasModel`](https://github.com/pydantic/pydantic-ai/pull/3486) provider integration.
- **Flowise:** expanded [ChatCerebras](https://github.com/FlowiseAI/Flowise/pull/5508) with model discovery, integration metadata, and improved configuration.
- **Dify:** created an open-source [Cerebras model provider plugin](https://github.com/sebastiand-cerebras/dify-cerebras).
- **AI coding ecosystems:** contributed provider support across [Cline](https://github.com/cline/cline/pulls?q=is%3Apr+author%3Asebastiand-cerebras), [Kilo Code](https://github.com/Kilo-Org/kilocode/pulls?q=is%3Apr+author%3Asebastiand-cerebras), and [OpenCode](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+author%3Asebastiand-cerebras).

## Other Product Work

- **Message understanding:** shipped services that analyzed millions of marketing messages, including insights from roughly one billion emails sent during the Black Friday and Cyber Monday period.
- **Amazon listing optimization:** designed keyword, title, and product-listing scoring systems using Amazon Search Query Performance data, and upgraded supporting AI services written in Go.
- **Founder work:** built Persuaide, Resonaid, and Kindest AI, a suite of products focused on persuasive writing and communication and supported by German and European startup scholarships.

## Scholarly Contributions

- __What Makes a Message Persuasive? Identifying Adaptations Towards Persuasiveness in Nine Exploratory Case Studies__ on _arXiv.org · Apr 24, 2021_ - [Link to Article](https://arxiv.org/pdf/2104.12454.pdf)
- __Persuasive Natural Language Generation - A Literature Review__ on _arXiv.org · Jan 1, 2021_ - [Link to Article](https://arxiv.org/abs/2104.12454)
- __Eurythmic Dancing with Plants: Measuring Plant Response to Human Body Movement in an Anthroposophic Environment__ on _arXiv.org · Dec 25, 2020_ - [Link to Article](https://arxiv.org/abs/2012.12978)
- __What is Digital Organizational Culture? Insights from Exploratory Case Studies__ in _Proceedings of the Hawaii International Conference on System Sciences 2018 (HICSS-51) · Sep 1, 2017_ - [Link to Article](https://scholarspace.manoa.hawaii.edu/items/eb0597d6-e165-4088-8d78-9417b9e91ce8)
- __Navigating Digital Innovation - The Complementary Effect of Organizational and Knowledge Recombination__ in _Proceedings of the 13th International Conference on Wirtschaftsinformatik, St. Gallen, CH · Feb 1, 2017_ - [Link to Article](https://www.semanticscholar.org/paper/Navigating-Digital-Innovation-The-Complementary-of-D%C3%BCrr-Wagner/950046ef8199275ec97b10222786d9cb7dece7d1)
- __A Temptation to Stalk: The Impact of Curiosity on User Acceptance of Social Networking Sites__ in _Proceedings of the Proceedings of the 22nd Americas Conference on Information Systems (AMCIS), San Diego (CA) Aug 1, 2016_ - [Link to Article](https://aisel.aisnet.org/amcis2016/Adoption/Presentations/16/)
- __A Literature Review on Enterprise Social Media Collaboration in Virtual Teams: Challenges, Determinants, Implications and Impacts__ in _Proceedings of the ACM SIGMIS CPR Conference, Washington, D.C._ - [Link to Article](https://dl.acm.org/doi/10.1145/2890602.2890611)

## Thought Leadership Pieces
- [Transforming a 10-k report into actionable insights with DPR and extractiveQA: A 5-step guide using Haystack by deepset.ai](https://medium.com/@duerr.sebastian/gain-valuable-corporate-insights-from-a-10-k-report-in-5-easy-steps-with-dense-passage-retrieval-8e0cac743c7d)
- [Creating Synthetic Datasets Effortlessly: A Practical Guide Using T5, PAWS and Your Text Corpus](https://medium.com/@duerr.sebastian/4-steps-to-create-synthetic-datasets-with-t5-paws-and-your-text-corpus-fc48bd9fc901)
- [Hosting your Microservice for Text-Generating and Infilling on GCP with FastAPI: A Comprehensive Guide](https://medium.com/analytics-vidhya/hosting-your-text-generating-infilling-micro-service-with-fastapi-on-gcp-ecf92f9d3c0f)
- [Defining Persuasive Messages: Merging Perceptions and Communication](https://medium.com/@duerr.sebastian/what-makes-a-message-persuasive-4c04322df929)
- Ongoing essays and practical notes on this [personal blog](/blog/), now comprising more than 100 articles.

## Conference Engagements

- **Speaker, "Evaluation Is All You Need"** at [PyData Seattle 2025](https://pydata.org/seattle2025/schedule) in Bellevue, WA, on November 8, 2025: [watch the recording](https://youtu.be/smUeNnB6Xbs).
- Attended SciPy Conference in Tacoma, WA, 2025.
- Attended NeurIPS Conference in Vancouver, BC, 2024.
- Attended PyTorch Conference in San Francisco, 2024.
- Attended PyData Conference in Redmond, WA, 2023.
- [Speaker](https://www.youtube.com/watch?v=myXANO-Mvo4&t=1s&pp=ygUYc2ViYXN0aWFuIGR1ZXJyIGRhdGFsaWZ0) at #Datalift prequel and presentation, remote, 2022 and 2021.
- Mini Track Chair at American Conference on Information Systems in Boston, MA, 2017.
- Speaker at WI Conference in St. Gallen, Switzerland, 2017.
- Speaker at American Conference on Information Systems in San Diego, CA, 2016.
- Attended International Conference of Information Systems, Dublin, Ireland, 2016.
- Delegate at the Model United Nations Conference, New York City, NY, 2015.

## HuggingFace Models

Proud contributor of 36 unique models to the open-source NLP library, [HuggingFace](https://huggingface.co/seduerr).

## University Teaching

Over the years, I've had the pleasure of transferring knowledge to over 840 students in 21 different university classes.

- 2011: Foundation course on Information Systems
- 2012: Mathematics for Economists 1 & 2, Refreshed course on Information Systems
- 2013: Double-semester course on Mathematics for Economists 1 & 2, Introduction to Algorithms & Data Structures
- 2014: Mathematics for Economists 1 & 2, Basic Excel Tutorials
- 2015: Mathematics for Economists 1 & 2, Additional Excel Tutorials, and Information Systems Management II: Business Process Management
- 2016: Elaborate course on Information Systems Management I: Standardization and Networks along with Business Process Management, and Continuation of Excel Tutorials
- 2017: Thorough course on Information Systems Management I: Standardization and Networks alongside Business Process Management, Excel Tutorials.
