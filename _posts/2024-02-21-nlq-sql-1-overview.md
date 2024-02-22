---
tags: [Coding]
title: Leveraging Large Language Models for Intuitive SQL Queries
description: An Overview Article
style: fill
color: secondary
---


The realm of data analytics is burgeoning, with LinkedIn citing an impressive count of over 170,000 data analyst positions in the United States as of November 15, 2023. These data stewards traditionally convert intricate business questions into SQL queries, unraveling the narratives held within vast data landscapes. However, the emergence of Large Language Models (LLMs) poses a potential pivot in their professional trajectory.

Our exploration here provides insight into a revolutionary synergy where natural language queries are artfully translated into SQL, leveraging the formidable capabilities of LLMs. This advancement is a stride towards simplifying data analysis for those who may not possess in-depth SQL proficiency.
How does this work?
Here's an illustration of applying this approach:

Consider the example depicted at the outset of this article: A user asks, "What was the most popular show on Netflix?" Quickly and efficiently, the LLM formalizes this into a SQL query:

```sql
SELECT show_title FROM netflix GROUP BY show_title ORDER BY SUM(weekly_views) DESC LIMIT 1
```
Upon executing the query, the model presents the crisp result: `{"show_title":"Extraction 2"}`.
The Advantages of LLMs in SQL Analytics
The transition from text to SQL brings undeniable benefits. It democratizes data analytics by enabling those without technical backgrounds to peer into and manipulate databases. This methodology is not only a boon to data processing efficiency but also enhances the capabilities of intelligent database services.
Our Vision: Crafting a Natural Language to SQL Interface

In the following sections, we'll walk through the process that made this data analysis task happen:
Step 1. Data Preparation: We will dissect how to gather pertinent Netflix data, along with several thousand SQL query examples from the SPIDER dataset.
Step 2. Intelligent Routing with LangChain Agents: Setting up an agent to direct our everyday questions either to a SQL database for specific inquiries or to tap into the knowledge of OpenAI's GPT-4 for broader questions.
Step 3. Building a FastAPI Service: We navigate through the infrastructure that connects both the vector and SQL databases to the service.
Step 4. Hosting the API Endpoint: Lastly, we explore how to wrap the service into a Docker container. 
By the end of this read, you'll be equipped with not just the know-how but also the code to elevate your data interactions with LLMs. The code is available here for you to follow along.
Prepare to transform the landscape of data analysis by embracing LLMs in your SQL endeavors. Let's tackle the complexity and bring the power of natural language to the forefront of data querying.
