---
title: Real-Time News Analysis for Investment Professionals with Cerebras and GPT-OSS
tags: [AI, Finance, Real-Time, Cerebras, GPT]
style: fill
color: secondary
description: A high-speed news analysis pipeline using Cerebras and GPT-OSS for real-time investment insights.
---

In today’s markets, speed isn’t a feature; it’s the floor. Opportunities appear and vanish in tens of milliseconds, and the firms that consistently win are the ones that translate fresh information into orders before prices fully absorb it. In this article, we’ll walk through a production-grade pipeline that turns raw news into structured, investor-ready signals in well under a second—using Cerebras for inference, GPT-OSS 120B for reasoning, and an async FastAPI backend for orchestration. The goal is practical: understand what to build, why it matters, and how to operate it reliably.

## From Headline to Signal: A Guided Flow

Let’s begin with the end in mind. We’re building a loop that takes breaking headlines and returns machine-actionable insights your trading and risk systems can consume.

- First, we ingest. A lightweight fetcher polls sources like Google News RSS, normalizes entries, and queues them.  
- Second, we analyze. Each queued item is passed to GPT-OSS 120B on Cerebras, which returns a strict JSON payload with sentiment, entities, impact direction and magnitude, KPIs, risks, opportunities, and a concise summary.  
- Third, we deliver. Results stream over WebSockets or an API to dashboards, OMS/EMS integrations, and alerting.  
- Finally, we operate. We monitor latency and throughput, scale horizontally when volatility spikes, and build resilience for failover.

By structuring the system this way, you minimize time-to-first-insight and maintain a clean separation between ingest, intelligence, delivery, and operations.

## Why This Stack: The Case for Cerebras, GPT-OSS, and Async FastAPI

Before we get into code, it’s worth understanding the choices.

First, Cerebras. Wafer-scale inference reduces memory bottlenecks and accelerates large-model decoding. Reported output speeds reach thousands of tokens per second with time-to-first-token around a few hundred milliseconds in vendor and third-party tests, showing dramatic speedups versus GPU-centric setups at similar scales [2][12][18]. In practice, that means more articles analyzed before prices move.

Second, GPT-OSS 120B. Its mixture-of-experts design activates only a small subset of parameters (about 5.1B) per forward pass while maintaining strong reasoning performance [8][9][10]. For finance, this efficiency translates to faster, more consistent outputs without sacrificing depth.

Third, FastAPI with asyncio. Async I/O fits naturally with a pipeline that fetches feeds, calls an inference service, and streams results. Under proper tuning, FastAPI’s async stack can handle thousands of lightweight requests per second, allowing you to scale workers for peak market hours without rewriting the core.

None of these choices is decorative. Together, they move you from seconds to hundreds of milliseconds—often the difference between capturing alpha and chasing it.

## How to Think About Latency

Traders love a single number, but real-world latencies are composite: network round trips, model inference, parsing, serialization, and publish/subscribe overheads. Instead of fixating on any one figure, measure end-to-end time from “headline fetched” to “signal delivered.” With this architecture, sub-second results are realistic for short articles and structured outputs, and that’s the envelope that matters for decisioning during volatile windows [1][2][3][12][18].

## The Intelligence Layer: GPT-OSS 120B in Finance

The model’s MoE architecture is particularly useful here. Different experts can specialize—earnings, macro, regulatory events—while the router activates only what’s relevant, keeping latency in check [8][9][10]. To make results immediately usable by downstream systems, we enforce a strict schema at the output boundary.

### Prompting and Structure

We keep the prompt focused on investor concerns and require a JSON schema. This removes guesswork for downstream consumers (risk, portfolio construction, execution).

Prompts (backend/src/prompts.py)

```python
SYSTEM_PROMPT = """
You are a world-class financial analyst working for institutional investors.
You must analyze the following news article and extract structured, investor-focused insights.

Your output should identify sentiment, impacted companies/sectors, likely direction and magnitude of financial impact, key performance indicators, risks, opportunities, time horizon relevance, and a concise summary.

Be precise, fact-based, and avoid speculation that is not grounded in the article text.
"""

def get_user_prompt(content: str) -> str:
    return f"""
    Analyze the following news article for investors:

    Article:
    {content}

    Please return your analysis strictly in the JSON schema format provided.
    """
```

Schema (backend/src/schemas.py)

```python
class NewsAnalysis(BaseModel):
    sentiment: Literal['Bullish', 'Bearish', 'Neutral'] = Field(...)
    confidence: float = Field(..., ge=0.0, le=1.0)
    affected_entities: List[str] = Field(...)
    impact_direction: Dict[str, Literal['Positive', 'Negative', 'Neutral']] = Field(...)
    magnitude: Dict[str, Literal['Low', 'Medium', 'High']] = Field(...)
    key_indicators: List[str] = Field(...)
    risks: List[str] = Field(...)
    opportunities: List[str] = Field(...)
    time_horizon: Literal['Short-term', 'Medium-term', 'Long-term'] = Field(...)
    sector_context: Dict[str, Literal['Bullish', 'Bearish', 'Neutral']] = Field(...)
    summary_explanation: str = Field(...)
```

### Putting It to Work: Calling the Model

Next, we call the model via an OpenAI-compatible endpoint and ask for a JSON Schema response. This ensures consistent, parseable results under load.

backend/src/llm.py

```python
client = AsyncOpenAI(
    api_key=config.CEREBRAS_API_KEY,
    base_url=config.CEREBRAS_API_BASE,
)

async def get_llm_analysis(content: str) -> schemas.NewsAnalysis:
    news_schema = schemas.NewsAnalysis.model_json_schema()
    start = time.time()
    completion = await client.chat.completions.create(
        model=config.MODEL_NAME,  # e.g., "gpt-oss-120b"
        messages=[
            {"role": "system", "content": prompts.SYSTEM_PROMPT},
            {"role": "user", "content": prompts.get_user_prompt(content)},
        ],
        response_format={"type": "json_schema", "json_schema": {"name": "news_analysis", "schema": news_schema}},
        max_tokens=2048,
        temperature=config.TEMPERATURE,
    )
    elapsed = time.time() - start
    payload = completion.choices[0].message.content
    parsed = json.loads(payload)
    analysis = schemas.NewsAnalysis.model_validate(parsed)

    if completion.usage and completion.usage.completion_tokens and elapsed > 0:
        tps = completion.usage.completion_tokens / elapsed
        logger.info(f"LLM throughput ~{tps:.2f} tokens/sec")

    return analysis
```

## Ingest and Orchestration: Simple, Fast, Deduplicated

Now we wire the rest of the loop. We start with RSS because it’s easy to get running. Later, you can add premium feeds and filings. The key is to keep the producer thin: fetch, dedupe, and hand off to a queue.

backend/src/news_fetcher.py

```python
def fetch_google_news(topic: str) -> list:
    logger.info(f"Fetching news for topic: {topic}")
    query = f'{topic} when:1h'
    encoded = quote_plus(query)
    url = f"https://news.google.com/rss/search?q={encoded}&hl={config.NEWS_LANG}&gl={config.NEWS_COUNTRY}&ceid={config.NEWS_COUNTRY}_{config.NEWS_LANG}"
    feed = feedparser.parse(url)
    if feed.bozo:
        logger.warning(f"Error parsing RSS feed: {feed.bozo_exception}")
        return []
    return feed.entries
```

## Why Cerebras for Inference

At this point, the value of Cerebras becomes tangible. The wafer-scale architecture reduces memory traffic and communication overhead that can slow large-model inference on traditional GPU clusters. In published and third-party measurements, Cerebras reports high token throughput (e.g., ~2,100 tokens/sec on 70B-class models) and time-to-first-token around 240ms for certain configurations [2][12][18]. For a news pipeline, the practical effect is straightforward: faster first tokens and higher throughput mean more content analyzed in the critical window when prices are still adjusting.

## What Performance Looks Like End-to-End

Under realistic loads—short article summaries, structured outputs, persistent connections—teams have observed the following profile:

- Throughput on the order of millions of items per hour during peak cycles
- Average latency per article around a few hundred milliseconds (ingest + inference + publish)  
- 99th percentile under roughly a second and a half
- Uptime in the high 99s with automatic restart and backoff

Your actual numbers will depend on prompt length, article size, model selection, and network conditions. The point is that sub-second decision latency is not theoretical; with careful engineering it’s achievable in production.

## Extending Beyond RSS

Once the loop is stable, expand coverage. Add premium real-time wires (e.g., Reuters, Bloomberg) alongside public sources like CNBC, Yahoo Finance, and Investing.com [14][16][17][20]. Pull in company artifacts—earnings releases, 8-K/10-K/10-Q summaries—and transcripts. Fuse in market context (price and volume) to check whether the news is already priced. Finally, build entity resolution across tickers, ISINs, and sectors so duplicates from different sources collapse to a single canonical item.

## Power Mode: Parallelizing When Volatility Spikes

There are days when one worker isn’t enough. A simple “Power Mode” endpoint can start multiple consumers on demand and scale back later. The snippet below shows how to kick off a producer and a variable number of workers.

```python
@app.post("/start")
async def start_processing(topic: str = Query("Technology"), power_mode: bool = Query(False)):
    if not app_state.is_running:
        app_state.is_running = True
        app_state.processed_articles = []
        while not app_state.article_queue.empty():
            app_state.article_queue.get_nowait()

        app_state.background_tasks = []
        producer_task = asyncio.create_task(article_producer(topic))
        app_state.background_tasks.append(producer_task)

        num_agents = 5 if power_mode else 1
        for i in range(num_agents):
            task = asyncio.create_task(news_worker(i + 1))
            app_state.background_tasks.append(task)

        await manager.broadcast(json.dumps({"status": "running"}))
        return {"status": "News feed started"}
    return {"status": "News feed is already running"}
```

## Getting Started: A Short Path to a Working Demo

First, set up your environment. You’ll need Python 3.10+, FastAPI, Uvicorn, Pydantic v2, feedparser, loguru, and the OpenAI Python client. You’ll also need access to a Cerebras endpoint that speaks the OpenAI API.

Second, configure your variables: CEREBRAS_API_KEY, CEREBRAS_API_BASE, MODEL_NAME (for example, gpt-oss-120b), TEMPERATURE (e.g., 0.2), and NEWS_LANG/NEWS_COUNTRY for your locale.

Third, run the API:

```
uvicorn backend.main:app --host 0.0.0.0 --port 8000
```

Then, start streaming by calling:

```
POST /start?topic=Semiconductors&power_mode=true
```

Finally, connect a WebSocket client to receive structured JSON in real time and render it in your dashboard. The demo GIF shows the pipeline ingesting an article and emitting a schema-compliant analysis with sentiment, entities, and impact.

![Demo GIF](..assets/gifs/cerebras_realtime_analysis.gif)

## How This Compares in Practice

Cerebras and independent sources report that, on certain model scales, wafer-scale inference delivers thousands of tokens per second with sub-300ms time-to-first-token [2][12][18]. In short, it moves you from “after the move” to “during the move.” Treat these as directional, not guarantees; your actual performance will depend on model choice, prompt and article length, and network placement. Measure end-to-end latency from ingest to delivery and optimize that path.

## Looking Ahead: Keeping the Edge

After the basics, optimization never stops. Pre-warm connections and cache embeddings for recurring entities. Quantize if it preserves accuracy for your workload. Push workers closer to your inference service and news sources to trim round-trip times. Scale ahead of known catalysts with volatility-aware rules. And when you outgrow simple polling, move to event-driven stream processing with topics, ordering, replay, and exactly-once semantics.

## Why This Matters

Research continues to show that media sentiment and timely interpretation affect prices and volumes [4][5][6]. The constraint has always been latency: excellent models don’t help if signals arrive after the market moves. Combining GPT-OSS’s reasoning with Cerebras’s inference speeds gives you a rare combination—quality and speed—so that news becomes a tradable signal while it still matters.


Walkthrough video: https://www.youtube.com/watch?v=4Jx_DJMgUTI  

---

## Selected Sources

- [1] Latency standards in trading systems: https://www.luxalgo.com/blog/latency-standards-in-trading-systems/  
- [2] Cerebras inference performance overview: https://www.cerebras.ai/blog/cerebras-inference-3x-faster  
- [3] Why milliseconds matter: https://laresalgotech.com/latency-in-trading-why-every-millisecond-matters/  
- [4] Financial news horizons and holding periods: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4605587  
- [5] LLMs for stock prediction from news: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5181105  
- [6] Media sentiment and market effects: https://pmc.ncbi.nlm.nih.gov/articles/PMC9751914/  
- [7] Async FastAPI patterns: https://www.nucamp.co/blogcoding-bootcamp-backend-with-python-2025-python-in-the-backend-in-2025-leveraging-asyncio-and-fastapi-for-highperformance-systems  
- [8] Introducing GPT-OSS: https://openai.com/index/introducing-gpt-oss/  
- [9] GPT-OSS 120B model card: https://huggingface.co/openai/gpt-oss-120b  
- [10] GPT-OSS model details: https://cdn.openai.com/pdf/419b6906-9da6-406c-a19d-1bb078ac7637/oai_gpt-oss_model_card.pdf  
- [12] Cerebras inference benchmarks: https://www.cerebras.ai/press-release/cerebras-inference-llama-405b  
- [13] Google News RSS parameters: https://www.newscatcherapi.com/blog/google-news-rss-search-parameters-the-missing-documentaiton  
- [15] GPT-OSS on OpenAI-compatible endpoints: https://console.groq.com/docs/model/openai/gpt-oss-120b  
- [18] Industry commentary on Cerebras inference speed: https://www.forbes.com/sites/karlfreund/2024/11/18/cerebras-now-the-fastest-llm-inference-processor--its-not-even-close/  

Final note: This article is for informational purposes and does not constitute investment or legal advice. Measure, iterate, and let the data tell you where the real edge is.