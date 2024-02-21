---
tags: [Coding]
title: Where to go from here
description: Where to go from here
style: fill
color: danger
---

In this section, we critically review what we did and provide a lot of avenues for further development and integrations. We also try to highlight shortcomings and how to address them.

## Helping the User More

Given our setup, we also can help a potential user more by explaining the queries to him, and explaining the results so that users get a feel whether the questions have been translated accurately. Besides, we can even visualize the results in interactive graphs to give the user a feel for how the results will look. Another idea would be to improve the qualification of the question by returning the columns that might be relevant to the user, and verifying that this is what they are looking for.

## Not Supporting Join Queries

Our setup is not supporting JOIN queries. We also only have one database, hence, it would not make too much sense to use multiple ones. Currently, we filter out all SPIDER queries that have joins in them, but in order to combine queries, we would stop that filter, ingest those queries, too.

## Query an actual Database

You can query an actual SQL database like RDS in the AWS space or a data warehouse if you work for a large organization. We used SQLite to quickly host a database in-memory but there are many many different SQL versions out there that can be used with this approach. In case you have a specific dialect like Oracle SQL, then it may make sense to hard-code a few basic rules of that specific dialect to the prompt to make sure the LLM knows that it needs to behave in a certain way.

## Dependency Ingestion on Startup

Usually you want to load/ingest the vector store dependency on startup but the LangChain agent version that I used to craft this code does not intuitively allow to pass objects like the vector store from function to function, hence, I ingest it only when calling that part of the function. A way to address that could be to get rid of LangChain as an agent framework, and use another. 

## Using Different Technologies

Currently, we use OpenAI's GPT-4, the LangChain framework to route our questions, docker for deployment, and Meta's FAISS vectorstore for similarity search. Please note that there are a myriad of other packages, products that could have been used. I focused on this approach since it shall be generally free, except for GPT-4. However, according to the studies I read it is the best performing model for now. This might change soon.
Furthermore, we currently use the old way of LangChain disregarding their new LangChain Expression Language (LCEL) and could integrate this. However, OpenAI also just released GPTs in November 2023, and it could be a good idea to use these as agents.

## Deployment with a Frontend

An obvious next step would be to develop a professional front-end, e.g. generated AWS Amplify, and to run queries through an actual UI hosted in the Cloud. While this approach shall not be too hard, it would make the system much easier to use for non-technical folk.

## Tracking Feedback

Another idea is to track the interactions of the users, so that you understand what, if anything, goes wrong and to address these instances.

## Extending the Agent

There are so many more features to integrate, like Zapier to interact with Gmail or Google SERAPI to retrieve live data, and to write those to the database. Given the growth of LLMs and the increasing integration with many systems, there are quite a few use cases to consider. 

## Improve Code

The code could also be improved by writing tests for each function, checking for complexity and other software best practices like sorting dependencies (iSort) and breaking lines with a formatter like Black. However, to reduce complexity we only outline those ideas here.
