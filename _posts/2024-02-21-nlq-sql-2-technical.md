---
tags: [Coding]
title: Step 2 - Technical Implementation Details
description: An exhaustive explanation of the service
style: fill
color: secondary
---

## Article 2 - Technical 

TODO — -Write introductions where we give a high level overview over the individual steps. 

Info: Makefile: We have make comments everywhere. They help to run the code faster. 

## Step 0. Package Dependencies and Virtual Environment

Let us put the makefile commands to use, immediately. As an initial step, we will have to make a few setups. First, we will open the `.env.template` file in the root folder of the repository, and insert our OpenAI ApiKey. We will need to use OpenAI during every API Call. 
Next, we will create a virtual environment with the comment: `make shell` and once this is running, we will install our dependencies (in `src.requirements.text`) with `make install`. This minimal setup ensures, that we have everything we need to execute the following steps:
## Step 1. Data Preparation & Ingestion

In service/src/data, we can find the ingest.py file, which we use to do three things:
We ingest the Netflix data to the SQLite database.
We ingest the vector store with sample SQL queries.
We download the natural language toolkit (NLTK) dependencies.
We will perform three tasks because we will later run our queries against the SQLite database with sql queries that we generate with a few shot learning approach to our LLM. 
According to a famous SQL query challenges named SPIDER by Yale University, the best current open-sourced way of running successful sequel queries is building prompts like this:
#### Generate a sqlite conform query only and with no explanation

/* Schema & Types: CREATE TABLE "Netflix" (uuid VARCHAR NOT NULL, week DATE, category VARCHAR, weekly_rank INTEGER, show_title VARCHAR, season_title VARCHAR, weekly_hours_viewed INTEGER, runtime FLOAT, weekly_views INTEGER, cumulative_weeks_in_top_10 INTEGER, is_staggered_launch BOOLEAN, episode_launch_detail TEXT, PRIMARY KEY (uuid)
) */


/* Some example questions and corresponding SQL queries are provided based on similar
problems:


/* Answer the following: What was the most popular position at tryouts? */
SELECT pPos FROM tryout GROUP BY pPos ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What is the most used instrument? */
SELECT instrument FROM instruments GROUP BY instrument ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What is the most popular first name of the actors? */
SELECT first_name FROM actor GROUP BY first_name ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What are the teams with the most technicians? */
SELECT Team FROM technician GROUP BY Team ORDER BY COUNT(*) DESC LIMIT 1
/* Answer the following: What is the most popular full name of the actors? */
SELECT first_name ,  last_name FROM actor GROUP BY first_name ,  last_name ORDER BY count(*) DESC
LIMIT 1
/* Answer the following: What was the most popular show? */

In this prompt that we will eventually send to GPT-4, we first list the schema of the table we will query (the Netflix table), then we will show GPT-4 a few examples of similar questions and queries that we extract from the SPIDER dataset by identifying the most similar questions to our main question, that can be found in the very end. Finally, we ask the main question, and this setup scores an impressive 86% on the SPIDER leadership board. 
To achieve this high success rate, we take the question of the user (user_question), and then use NLTK to mask a question, and then look for similar masked questions, to identify examples for our SQL query generation. This sounds a bit complex for now, but we actually follow the published state-of-the-art approach written in this paper. Later, once we are at the respective code snippets, we will dive more into this functionality (Section Step 2, C-2. So stay tuned. 
Now let us prepare for this setup!

### A. Preparing the Netflix data

We will use the Netflix viewership dataset (we could have used any other really, try more you can find them easily on Kaggle or Google Dataset search) to ask human language questions to it. In order to use the dataset, we have to get it into SQLite database. 
Therefore, we first set up our netflix model (service/src/data/ingestion_helpers/netflix_model.py) in order to define the columns, column types, and primary key.
class Netflix(Base):
   __tablename__ = "Netflix"
  
   uuid = Column(String, nullable=False, primary_key=True)
   week = Column(Date, nullable=True)
   category = Column(String, nullable=True)
   weekly_rank = Column(Integer, nullable=True)
   show_title = Column(String, nullable=True)
   season_title = Column(String, nullable=True)
   weekly_hours_viewed = Column(Integer, nullable=True)
   runtime = Column(Float, nullable=True)
   weekly_views = Column(Integer, nullable=True)
   cumulative_weeks_in_top_10 = Column(Integer, nullable=True)
   is_staggered_launch = Column(Boolean, nullable=True)
   episode_launch_detail = Column(Text, nullable=True)
service/src/data/ingestion_helpers/netflix_model.py
Next, we transform the data as done in the file: 
def ingest_netflix_data():
   engine = create_engine("sqlite:///src/data/databases/netflix.db", echo=True)
   Netflix.metadata.create_all(bind=engine)
   Session = sessionmaker(bind=engine)
   session = Session()
   netflix_data = transform_netflix_data()
   session.bulk_insert_mappings(Netflix, netflix_data.to_dict(orient="records"))
   session.commit()
   session.close()
service/src/data/ingestion_helpers/netflix.py
However, before ingesting (bulk_insert_mappings) the Netflix data, you can see that we run a `transform_netflix_data()` function, in which we read the file with pandas, and make minor adjustments (like transforming the data and introducing a unique primary key (we use UUID) as required by SQLite). The best way to learn which adaptations are required is to start and then being told by SQLite what it needs (like a unique primary key) when you try to "bulk insert" the data.
def transform_netflix_data():
   netflix_data = "src/data/datasets/netflix/all-weeks-global.csv"
   df = pd.read_csv(netflix_data, delimiter=',', encoding='ISO-8859-1', index_col=None)
   df['week'] = pd.to_datetime(df['week'])
   df['uuid'] = [uuid.uuid4() for _ in range(len(df))]
   df['uuid'] = df['uuid'].astype(str)
   return df
service/src/data/ingestion_helpers/netflix.py

### B. Ingest Vectorstore

Next, we are going to use a lot of SQL queries to allow GPT-4 to learn from similar examples as in the prompt we introduced in section Step 1.We borrow this questions from the SPIDER dataset. This dataset has three files full of queries: `dev.json`, `train_others.json` and `train_spider.json`. You can download the dataset here (https://yale-lily.github.io/spider), and then put the files into this folder and run the file service/src/data/datasets/spider/prepare_spider.py by running `make spider`
to prepare the data for this tool. However, we don't go into detail and refer to the script that I left in this folder, in which we transform the .json files into a tsv (similar to a csv, but tab-separated rather than comma-separated) - resulting in the spider_queries.tsv file.
In the ingest_vectorstore function, we only read in the spider_queries file and ingest a FAISS in-memory vectorstore. The rationale for doing so is that we will later look for the top 5 similar questions to a user question, and then retrieve them from the vectorstore.

```python
def ingest_vectorstore():
   print("## Ingesting vectorstore. ##")
   df = pd.read_csv('src/data/datasets/spider/spider_queries.tsv', sep='\t', index_col=0)
   loader = DataFrameLoader(df, page_content_column="Masked Questions")
   documents = loader.load()
   embeddings = OpenAIEmbeddings()
   vectorstore = FAISS.from_documents(documents, embeddings)
   with open("src/data/databases/vectorstore.pkl", "wb") as f:
       pickle.dump(vectorstore, f)
   print("## Completed ingestion of vectorstore. ##")
service/src/data/ingestion_helpers/vector_ingest.py
```

We save the in-memory vectorstore as a .pkl file, which is a way to serialize Python data. Since, the serialization is dependent and only compatible within similar Python versions it is important that we run this transformation always on a new system. The best way to execute this is via the `make ingest` command. 

### C. Downloading the NLTK Dependencies

We will use masking to identify similar vectors based on the logic of similarity, Therefore, we will use masking (more on that later in section Step 2). So don't worry about it for now. Only realize that we need these following dependencies. 

```python
def download_nltk_packages():
   nltk.download('averaged_perceptron_tagger')
   nltk.download('wordnet')
   nltk.download('punkt')
   nltk.download('stopwords')
```


While these steps are necessary, and rather data science tasks, let's now dive into the engineering part of the service.

## Step 2. Setup of FastAPI Service & LangChain Agent

In this step, we will set up a FastAPI service with two endpoints, and integrate a LangChain agent with one endpoint. FastAPI is a popular framework to develop lean and performant web servers, and LangChain is a go-to Open Source project which helps to improve and democratizes strategies to integrate generative AI into systems. Since both are critically perceived, we will also address some shortcomings, particularly of LangChain later in the section Limitations & Improvements.

### A. FastAPI Set up

Our service is a simple file with a startup and a shutdown event to connect the SQLite database while running. You could connect an external or different database to the service during this startup and shutdown. 
We also instantiate the `/schema/` and `/user_question/` endpoints. We will utilize the "schema" to build the context to the LLM in the prompt, and we use the user_question to query to talk to the LangChain agent. 

```python
@app.on_event("startup")
async def startup():
   await database.connect()


@app.on_event("shutdown")
async def shutdown():
   await database.disconnect()
  
@app.get("/", include_in_schema=False)
async def docs_redirect():
   return RedirectResponse(url="/docs")


@app.get("/schema/")
async def get_schema():
   try:
       query = "SELECT * FROM sqlite_master WHERE type='table'"
       schema = await database.fetch_all(query=query)
       return {'schema': [dict(row)['sql'] for row in schema]}
   except Exception as e:
       raise HTTPException(status_code=500, detail=str(e))


@app.post("/user_question", response_model=QueryResponseModel)
async def process_user_question(user_question: UserQuestion):
   response = process_user_question_with_agent(user_question.question)
   if not response:
       raise HTTPException(status_code=400, detail="Invalid query or database error.")
   return response
```
service/src/main.py

We also have schemas that we need to make sure our requests and responses to the web server are complete. They are pretty simple and straightforward. In essence, we will have to send a dictionary with a 'question' as a key, and our actual question as a 'value', and we'll get the dominant (more on that in section Step 2C3) generated sql query, and the most consistent (more on that in section Step 2C4) result of the query returned.

```python
class UserQuestion(BaseModel):
   question: str


class QueryResponseModel(BaseModel):
   sql_query: str
   query_result: List[List[Any]]
```
service/src/schemas.py 

### B. LangChain Agents and the Intrinsic Knowledge Tool

Hitting the `user_question` endpoint with the right schema input will invoke the process_user_question_with_agent function:

```python
from langchain.llms import OpenAI
from langchain.agents import AgentType, initialize_agent
from src.tools import query_database, query_intrinsic

tools = [query_database, query_intrinsic]
llm = OpenAI(temperature=0)
agent = initialize_agent(tools, llm, agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION)

def process_user_question_with_agent(user_question):
   user_input_dict = {}
   user_input_dict['input'] = user_question
   user_input_dict['request_format'] = user_question
   agent_result = agent.run(user_input_dict)
   return agent_result
```
service/src/__init__.py

Read from bottom to top: In this function, we use the LangChain agent, to route the user_question via a dictionary to the agent. While this looks redundant, it is the only sound way to prevent the agent from altering the input question to another text, and makes sure that it arrives safely at our sql query tool. Speaking of which, you can see in the upper part of the snippet that we invoke two tools (query_database, and query_intrinsic), and pass them during the agent initialization to the agent. The agent, then uses the `STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION` framework to route the input to either of the tools. The decision criteria for this are the actual tool descriptions in the tools/__init__.py file:

```python
@tool("query_database", return_direct=True)
def query_database(user_question) -> str:
   """Database tool is used for querying specific information about movies on Netflix."""
   return use_sql_database_search_tool(user_question['title'])


@tool("query_intrinsic", return_direct=True)
def query_intrinsic(user_question: str) -> str:
   """GPT-4's intrinsic knowledge is used to answer any questions that do not pertain to Netflix movies and series. Use this even for Oscar questions."""
   return use_intrinsic_search_tool(user_question)
```
service/src/tools/__init__.py 

The agent uses an OpenAI model to routes the question to the database tool if the question contains netflix / movies, or to plain GPT-4 if the question does not pertain to Netflix data (you can read the exact phrasing in the DocStrings of the tool functions. These functions become actual tools through the LangChain `@tool` decorator. Whenever, you use an agent try to make the tools as mutually exclusive and collectively exhaustive (MECE) as possible in order to reduce complexity for the LLM as much as we can. Experimenting a lot with how to phrase and use LLMs, I learnt that it is always best to 

Let us take a closer look at the very simple but powerful `query_intrinsic` tool:
```python
def use_intrinsic_search_tool(user_question):
   prompt = f"""
   Please try to answer the following question: {user_question} briefly and succinctly:\n\n
   """
   chat_completion = openai.ChatCompletion.create(model="gpt-4-1106-preview", messages=[{"role": "user", "content": prompt}], temperature=0)
   return {"sql_query": chat_completion.choices[0].message.content, "query_result": []}
```
service/src/tools/intrinsic_search.py

The approach is straightforward: We ask GPT-4-1106 with knowledge up to March 2023 to answer a question. With this approach, we can get responses to everything that GPT-4 has seen in training, which is almost the entirety of the public internet. Most likely it will even be able to answer questions regarding our Netflix dataset too, but we are using the Netflix data to illustrate how to connect and query SQL databases. Let us investigate how to do carefully do this:

### C. Human Question to SQL Translation Tool

In the following piece of code, we see the general process of very successful querying of sql databases. In order to arrive at this approach, we conducted a brief literature review (see section Insights from Text-to-SQL research) of modern LLM-SQL approaches as of Q4/2023. Utilizing the best approaches to achieve our results. However, after having tried different approaches, the best way was to do the following steps:
As a start, we will use the vector store that we ingested in Step 1B, hence we initialize it here.  Then, we check the question for potential dimensions, like does it contain any timestamps when it comes to time series data. If so, we compose a comprehensive prompt. Thirdly, we send the prompt asynchronously to GPT-4 and hope to generate differing queries that express the question. Lastly, we query the SQLite database with the different queries, and look for the most consistent result, which we will, in addition to a sql query that produced it, return to the user.

```python
# Step 0: Identify the vector store
vectorstore = init_vectorstore()


def use_sql_database_search_tool(user_question) -> str:
   # Step 1: Qualify the User Question
   response = qualify_user_question(user_question)
   if response: return response
   # Step 2: Compose a prompt using similar queries
   prompt = compose_prompt(user_question, vectorstore)
   # Step 3: Generate multiple SQL queries
   sql_queries = async_generate_sql_queries(prompt)
   # Step 4: Identifying and returning the most consistent result
   sql_query, query_result = async_call_sql_endpoint(sql_queries)
   return {"sql_query": sql_query, "query_result": query_result}
```
This was quite brief so let us elaborate a bit more, and justify why we did what we did.

1. Qualify Question
The `qualify_user_question()` is a first quick check to identify whether the question a user poses can actually be answered. 
It is very brief and, therefore, shall respond quickly. The function checks the input query for five different dimensions: temporal,table, specific, aggregate, and quantity. The respective code is quite straightforward, hence we let it speak what the respective features do:

```python
def qualify_user_question(user_question):
   # Enable the following dimensions to check for them.
   dimension_checks = {
       "temporal": f"Check if the question '{user_question}' contains any dates (like 2023, 2023-11) or a data range (e.g. Jan 1 - Sep 2023, 3. Quarter 2021). Respond with 'Yes' or 'No'.",
       "table": f"Check if the question '{user_question}' mentions a table (like check the table orders). Respond with 'Yes' or 'No'.",
       "specific": f"Check if the question '{user_question}' specifies column names and distinct criteria for the data search. Respond with 'Yes' or 'No'.",
       "aggregate": f"Identify if the question '{user_question}' requires data aggregation such as totals, averages, or counts. Provide the type of aggregation requested if implicitly stated.",
       "quantity": f"Check if the question '{user_question}' mandates a precise quantity or limit for the list of data items needed. Respond with 'Yes' or 'No'."
   }


   follow_ups = {
       "temporal": "Please indicate specific dates or time ranges for the data request, formatted as 'YYYY-MM-DD' or denoted by periods like 'From April 1, 2023 to April 30, 2023'.",
       "table": f"Please indicate a specific table in which we shall look for your data like 'in the Orders table'.",
       "specific": "Please include precise criteria for filtering data, like 'Status = 'Confirmed'' or 'AgeRange = '30-40'.",
       "aggregate": "Please articulate if the query necessitates aggregated data, such as 'Total Number of Sales', 'Average Rating', or 'Sum of Profits'.",
       "quantity": "Please state the quantity of items needed for list queries, for instance, 'Top 10 best selling products' or '5 most recent user reviews'.",
   }


   response_string = ""
   for key, message in dimension_checks.items():
       chat_completion = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": message}], temperature=0)
       response_content = chat_completion.choices[0].message.content
       if response_content.strip().lower() == "no":
           response_string += follow_ups[key] + " "


   return response_string.strip()
```

service/src/tools/database_search/qualify_user_question.py

Depending on the use case and dataset you might want to consider to activate or deactivate some of the dimensions, so that the questions make it to the next step: composing a prompt.

### 2. Compose Prompt

The compose_prompt function takes the user_question, and the vector store. The function combines two concepts in order to achieve a high success rate of generating relevant queries.

```python
def compose_prompt(question: str, vectorstore) -> str:
   masked_human_question = mask_human_question(question)
   similar_query_context = vectorstore.similarity_search(query=masked_human_question, k=5, score_threshold=.95)
   related_queries = "\n".join([Document.metadata['Pairs'] for Document in similar_query_context])
   schema =  "CREATE TABLE \"Netflix\" (\n\tuuid VARCHAR NOT NULL, \n\tweek DATE, \n\tcategory VARCHAR, \n\tweekly_rank INTEGER, \n\tshow_title VARCHAR, \n\tseason_title VARCHAR, \n\tweekly_hours_viewed INTEGER, \n\truntime FLOAT, \n\tweekly_views INTEGER, \n\tcumulative_weeks_in_top_10 INTEGER, \n\tis_staggered_launch BOOLEAN, \n\tepisode_launch_detail TEXT, \n\tPRIMARY KEY (uuid)\n)"
   prompt = f"""
   #### Generate a sqlite conform query only and with no explanation\n
   /* Schema & Types: {schema}*/
   /* Some example questions and corresponding SQL queries are provided based on similar problems:\n
   {related_queries}\n
   /* Answer the following: {question} */\n
   """
   from rich import print; print(prompt)
   return prompt
```
service/src/tools/database_search/compose_prompt.py

Firstly, we provide the schema of our netflix table (and potential other tables), meaning we provide the different column headers and their respective types. We could even provide examples of the table, so that the LLM has a higher chance of understanding the context. However, mind that every additional input extends the time for the LLM to generate queries and increases the cost. Hence, we keep it lean and generate this part of the prompt with the schema that we receive through querying our /'schema/` endpoint:

#### Generate a sqlite conform query only and with no explanation

```python
/* Schema & Types: CREATE TABLE "Netflix" (uuid VARCHAR NOT NULL, week DATE, category VARCHAR, weekly_rank INTEGER, show_title VARCHAR, season_title VARCHAR, weekly_hours_viewed INTEGER, runtime FLOAT, weekly_views INTEGER, cumulative_weeks_in_top_10 INTEGER, is_staggered_launch BOOLEAN, episode_launch_detail TEXT, PRIMARY KEY (uuid)
) */
```
Schema and types for the LLM sql generation prompt 

Next, we mask the human question by replacing any Noun or Noun-type word with a `<mask>` token and numbers with the <unk> token. 

For example:  "What was the best movie in 2023?"
We want to get: "What was the best <mask> in <unk>?"

We do this in accordance with the paper by Alibaba to achieve a high success rate of generating queries that return correct answers. Our vectorstore has about 6800 triplets of masked questions, corresponding unmasked questions and sql queries. Our goal is to identify the 5 most similar masked questions to our masked question "What was the best <mask> in <unk>?", and then to take the corresponding unmasked questions and queries to generate examples for the LLM in order to show it how to write sql for these questions. This approach, where you show the LLM a few examples, and then let it figure out how it works for other contexts is called few-shot learning. The approach of identifying similar masked questions happens through calculating semantic similarity between all masked questions, and selecting those with the highest similarity. The rationale for masking is that it allows us to filter out semantic meaning of nouns which are usually quite high in a question in order to distill the actual stopwords and ensure a high degree of similarity. 
The result looks as follows: 

```python
/* Some example questions and corresponding SQL queries are provided based on similar
problems:


/* Answer the following: What was the most popular position at tryouts? */
SELECT pPos FROM tryout GROUP BY pPos ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What is the most used instrument? */
SELECT instrument FROM instruments GROUP BY instrument ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What is the most popular first name of the actors? */
SELECT first_name FROM actor GROUP BY first_name ORDER BY count(*) DESC LIMIT 1
/* Answer the following: What are the teams with the most technicians? */
SELECT Team FROM technician GROUP BY Team ORDER BY COUNT(*) DESC LIMIT 1
/* Answer the following: What is the most popular full name of the actors? */
SELECT first_name ,  last_name FROM actor GROUP BY first_name ,  last_name ORDER BY count(*) DESC
LIMIT 1
/* Answer the following: What was the most popular show? */
Question query pairs for the LLM sql generation prompt 
```

This structure efficiently provides enough context for the LLM to understand which columns elements it can use when generating a query, and provides relatable and appropriate examples so that the LLM has an easy time to conclude a query. The specific punctuation was inspired by the DAIL paper (TODO link the article) which extensively researched on how to query such information.

## 1. Asynchronous SQL Query Generations

As a third step, we generate three sql queries from the prompt using a temperature of 1.1 which shall give us some diversity in the queries produced. Then, we consolidate the queries, if they still are the same after having been generated, and save them to a list of unique sql_query strings.

```python
def openai_generate_sql_query(prompt: str) -> str:   
   chat_completion = openai.ChatCompletion.create(model="gpt-4-1106-preview", messages=[{"role": "user", "content": prompt}], temperature=1.1)
   sql_query = chat_completion.choices[0].message.content
   cleaned_sql_query = sql_query.replace('`', '').replace('sql\n', '')
   return cleaned_sql_query


def async_openai_generate_sql_queries(prompt, num_runs=3):
   queries = []
   with concurrent.futures.ThreadPoolExecutor(max_workers=num_runs) as executor:
       futures = [executor.submit(openai_generate_sql_query, prompt) for _ in range(num_runs)]
       for future in concurrent.futures.as_completed(futures):
           try:
               query = future.result()
               queries.append(query)
           except Exception as exc:
               print(f'Generated an exception: {exc}')


   return queries


def find_unique_queries_sorted_by_frequency(queries):
   result_frequency = {}
   for query in queries:
       normalized_query = " ".join(query.lower().strip().split())
       result_frequency[normalized_query] = result_frequency.get(normalized_query, 0) + 1
   sorted_queries = sorted(result_frequency.items(), key=lambda x: (-x[1], x[0]))
   return [query for query, freq in sorted_queries]
service/src/tools/database_search/async_generate_sql_queries.py
4. Asynchronous SQLite API Calls
Fourth in this process, we will use the unique queries and run them against the SQLite database. Again, we do this asynchronously to save time:

def call_sql_endpoint(sql_query: str):
   try:
       with sqlite3.connect(DATABASE_URL) as connection:
           cursor = connection.cursor()
           cursor.execute(sql_query)
           columns = [desc[0] for desc in cursor.description]
           rows = cursor.fetchall()
           cursor.close()
           return columns, rows
  
   except Exception as e:
       print(f"Unexpected error: {e}")
       raise RuntimeError("An unexpected error occurred. Please contact support if the problem persists.") from e


def async_query_sql_endpoint(queries, num_runs=3):
   query_results_pairs = []
   with concurrent.futures.ThreadPoolExecutor(max_workers=num_runs) as executor:
       futures = {executor.submit(call_sql_endpoint, query): query for query in queries}
       for future in concurrent.futures.as_completed(futures):
           query = futures[future]
           try:
               columns, rows = future.result()  # Unpack the two items returned by call_sql_endpoint
               query_results_pairs.append((query, (columns, rows)))  # Store them in the list as a tuple
           except Exception as exc:
               print(f'Generated an exception: {exc} for query: {query}')
               query_results_pairs.append((query, (None, None)))  # Represent both columns and rows as None in case of an exception
   queries_list, results_list = zip(*query_results_pairs)
   return list(queries_list), list(results_list)


def find_most_consistent_result(queries, results):
   result_frequency = {}
   for i, (query, result_pair) in enumerate(zip(queries, results)):
       if result_pair is None: 
           print(f"No results for query: {query}")
           continue
       if len(result_pair) != 2:
           print(f"Unexpected result structure for query: {query}, result_pair: {result_pair}")
           continue
       columns, rows = result_pair
       tuple_key = (tuple(columns), tuple(map(tuple, rows)))
       if tuple_key in result_frequency:
           result_frequency[tuple_key]['count'] += 1
       else:
           result_frequency[tuple_key] = {'count': 1, 'query': query}


   most_consistent = max(result_frequency.items(), key=lambda x: x[1]['count']) if result_frequency else (None, None)
   if most_consistent[0] is not None:
       most_consistent_columns, most_consistent_rows = most_consistent[0]
       most_consistent_query = result_frequency[most_consistent[0]]['query']
       return most_consistent_query, (list(most_consistent_columns), list(map(list, most_consistent_rows)))
   else:
       return (None, (None, None))
``` 
service/src/tools/database_search/async_call_sql_database.py

To do so, we query the sql database, and then we evaluate the results of the query for their consistency. Meaning given the diverse queries, we use them all to query the sql database, and then compare the results, and take the result that has been returned the most times. This is our winning result and query, and will be returned to the user.
In the next step, we will run the code, and query the API to see the results.

## Step 3. Run & Query the FastAPI Endpoints

This step briefly explains how we can put above's code to work. Make sure, if you haven't done so yet, to run the `make shell`, `make install`, and `make ingest` commands as described in section Step 0 and Step 1 of this article. 

### A. Make `run`

Next, let us start the API with `make run`. If it all worked out well, then we shall see the following:
```bash
INFO:     Will watch for changes in these directories: ['/Users/seb/code/github/nlq-to-sql/service']
INFO:     Uvicorn running on http://0.0.0.0:8000 (Press CTRL+C to quit)
INFO:     Started reloader process [64473] using WatchFiles
Vectorstore successfully loaded.
INFO:     Started server process [64481]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
```
Next, we learn how to test if our API is working. 
A. Make `query`
In a separate terminal, we now execute the following command: `make query`, and should get these results:

```python
### Question: What was the most popular show?

### Response: {"sql_query":"select show_title from netflix group by show_title order by sum(weekly_hours_viewed) desc limit 1;","query_result":[["show_title"],[["Stranger Things"]]]}
 ```
### B. API Testing with Swagger Docs

You can also check the FastAPI server running in your browser at `http://localhost:8000/docs` and check the API endpoint interactively as depicted in this screenshot:

### C. Frontend testing
Furthermore, we could build a simple Streamlit app to make the chat quickly available for non-technical users without much frontend code work.

## Step 4. Deployment

The next step in an organizational setting is to deploy such a service. For this, we gonna look at how to run the service in a docker container locally. An easy way to follow these steps is to download Docker Desktop: https://www.docker.com/products/docker-desktop.
A. Run Service locally as a Docker container
Besides just running it for deployment purposes, if the code doesn't seem to run on your local machine, then you can also execute the Dockerfile and run it locally in a Docker container by running: `make docker`. This looks as this in the Docker app:

The actual steps to do so are: 
```yaml
docker:
   cd service
   # docker rm aichat-service
   docker build -t 'aichat-service' .
   docker run -d --name aichat-service -p 8000:8000 --env-file .env aichat-service
```
Makefile
First, we navigate into the service with change directory `cd` and then, we build the container (this will take a moment) in accordance with the Dockerfile, and then we run the container. The Dockerfile is really simple:

```dockerfile
FROM tiangolo/uvicorn-gunicorn-fastapi:python3.11


EXPOSE 8501


WORKDIR /app


COPY requirements.txt ./


ENV PYTHONUNBUFFERED=TRUE
ENV PYTHONDONTWRITEBYTECODE=TRUE
ENV LANG C.UTF-8


RUN pip install --no-cache-dir --upgrade -r requirements.txt
COPY . .


COPY /. /app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```
service/Dockerfile

Essentially, we are loading Python 3.11, install the dependencies, run the ingestion, and then run the server. Everything that we also did throughout this guide.
B. Deploy this Service to AWS
Lastly, we would deploy this service on AWS with the AWS framework Copilot via CLI. This guide illustrates how to do this specifically. I won't go into detail for this last step, but I made sure I provide the respective files and ideas to do so: 

```yaml
# Your service name will be used in naming your resources like log groups, ECS services, etc.
name: aichat
type: Load Balanced Web Service
env_file: .env
# Distribute traffic to your service.
http:
 # Requests to this path will be forwarded to your service.
 path: '/'


# Configuration for your containers and service.
image:
 # Docker build arguments. For additional overrides: https://aws.github.io/copilot-cli/docs/manifest/lb-web-service/#image-build
 build: service/Dockerfile
 # Port exposed through your container to route traffic to it.
 port: 8501


cpu: 4096       # Number of CPU units for the task.
memory: 8192    # Amount of memory in MiB used by the task.
platform: linux/x86_64  # See https://aws.github.io/copilot-cli/docs/manifest/lb-web-service/#platform
count: 1       # Number of tasks that should be running in your service.
exec: true     # Enable running commands in your container.
network:
 connect: true # Enable Service Connect for intra-environment traffic between services.
```
copilot/aichat/manifest.yml  

Essentially, you want to sign into your corporate AWS account (what out this service costs quite some money and shall rather be used in a professional setup), and host a Load Balanced Web Service. Next, you make sure to provide the `.env` file for the secrets, and provide the dockerfile, port, and also make sure that the cpu and memory are sufficient enough to run the operations. The guide I used suggested the above values. The pages on https://aws.github.io/copilot-cli/ really help a lot with setting the service up in different scenarios, and I can recommend them. Please hit me up, if you are interested in getting this step done! 
Step 5. Validation - Do we still need Data Analysts?
The last crucial step is to validate how close our results are to the actual truth. In order to do so, we suggest generating or manually creating three example questions per column. For instance: 

```python
questions = [
   #In the Netflix data,  For column 'week'
   'In the Netflix data, What is the earliest week?',
   'In the Netflix data, What is the latest week?',
   'In the Netflix data, How many unique weeks are there?',
]
tests/test_validations.py
```

Then, we write queries or Python pandas code to identify the correct answer. 

```python
solutions = [   # Answers for 'week'
   netflix['week'].min(),   netflix['week'].max(),   netflix['week'].nunique(),]
 tests/test_validations.py
```

Lastly, we simply check if sending the question to the API endpoint yields the same response as the pandas code, as done here:

```python
for question, expected_solution in zip(questions, solutions):
   payload = {'question': question}
   start_time = time.time()
   response = requests.post(url=api_endpoint, json=payload)
   response_time = time.time() - start_time
   stats['response_times'].append(response_time)


   if response.status_code == 200 and 'query_result' in response.json():
       answer = response.json()['query_result'][1][0][0]
       if json.dumps(answer) == json.dumps(expected_solution):
           stats['correct_answers'] += 1
       else:
           stats['incorrect_answers'] += 1
   else:
       print(f"Error for question '{question}': {response.text}")
 tests/test_validations.py
```
This approach allows us to identify weaknesses, spaces for rephrasing, iteration and to ultimate achieve 100%. We are certainly aware that we will never reach 100% but we can get really close and the best contender at the SPIDER dataset even reached 91.2% which is almost human level. Our plane stats running this naive approach without any improvements is:

```yaml
Total Questions: 33
Correct Answers: 18
Incorrect Answers: 6
Not all questions were answered correctly, please review the responses.
Average Response Time: 3.1469 seconds
```

That means we achieved a 75% correct response, if we received one, but our service only worked 55% of the time. This is a great result but looking at the errors, we can conclude that LangChain Agent behaves quite inconsistently accounting for a bunch of internal errors of the server. Triangulating the test data, test queries and generated queries will allow us to spot potential for changes in the code, data column header titles or elsewhere, and will allow us to improve the results quickly. However, we also ideated a comprehensive list of limitations and how to address them in the section "Limitations and Next Steps".

Step 5 readdresses the question whether we still need business analysts or not. The answer is most likely 'yes'. Our results and lack of some of them illustrates how critical it is to understand the business context to clean and properly use the data. This will be tremendously improved if the complexity of the data and number of tables increases and a NLP engineer would take too long to get the full context. 

## Congratulations!

Wow! We did a lot and congrats you followed all the way until here. I hope you appreciate some of the ideas we covered, particularly around ingestion, prompting, and generation. It's been fun and fulfilling to develop this project and guide. However, code never stops, so here is some brain food for moving on.
