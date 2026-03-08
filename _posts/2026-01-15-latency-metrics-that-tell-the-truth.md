---
title: Latency Metrics That Actually Tell the Truth
tags: [Performance, Monitoring, Engineering, APIs]
style: fill
color: success
description: A practical guide to latency metrics that reflect real user experience - p50, p95, p99, and why averages lie.
---

# Latency Metrics That Actually Tell the Truth

![analytics](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

*Photo by [Luke Chesser](https://unsplash.com/@lukechesser) on [Unsplash](https://unsplash.com)*

When you're running an API or AI inference service, latency is the user‑visible part of performance. If the system feels slow, nothing else matters.

Most teams start by tracking "average response time." It's easy to compute and it looks good on a dashboard. It's also dangerously misleading.

This article is a practical guide to latency metrics that actually reflect user experience: p50, p95, p99, p99.9, and the shape of your latency distribution. It explains why you can't average percentiles, why pre‑averaging destroys your tails, and how to avoid common measurement traps like coordinated omission.

## 1. Latency as a distribution, not a number

Every request has its own latency. Over time, you don't get "the latency" of your service, you get a distribution of latencies.

For example, imagine you have 100 delivery times:
- Most deliveries take 2 minutes.
- A few rare deliveries take 30 minutes because the driver got lost.

You can summarize this distribution in many ways:
- Minimum (fastest delivery)
- Maximum (slowest delivery)
- Average (mean) delivery time
- Median (p50) and other percentiles (p90, p95, p99…)

The average can look great even when a meaningful fraction of users has a terrible experience. A p99 graph, on the other hand, will show you the ugly truth.

### Quick mental model for percentiles

Take all your latencies in a time window, sort them from fastest to slowest, and then:
- **p50 (median)**: the value in the middle. 50% faster, 50% slower.
- **p95**: 95% of requests are faster than this; 5% are slower.
- **p99**: 99% of requests are faster than this; 1% are slower.

For web and API workloads, p95/p99 represent what "typical worst‑case" and "rare, but real" user experiences look like.

## 2. Why averages lie about latency

The problem with averages is simple: they smear out both the good and the bad. A small fraction of very slow requests can be completely obscured by a large number of fast ones.

From Aerospike's p99 article:
- A service might have an average latency of 50 ms.
- But the p99 spikes to ~1 s under load.
- That means 1% of requests are 20× slower than the average; users will definitely feel that spike at least once in a session.

Igor's "latency: a primer" shows this nicely: plotting average latency looks smooth, but plotting p99 immediately exposes spikes toward 1 s that many users actually hit at some point in their session.

**Key takeaway**: Averages are fine for capacity planning and coarse checks. For user experience, error budgets, and SLOs, you care about percentiles and the overall shape of the distribution.

## 3. The "aggregation problem": why you can't average percentiles

Here's the principle in plain English, using that delivery‑time story:

Imagine you have 100 delivery times. Most are 2 minutes, but a few are 30 minutes (pizza got lost).

**Mean first, then percentile (the old broken way)**:
You group deliveries into 10‑minute windows and average each window. Those few 30‑minute outliers get blended into their window's average — maybe it becomes 5 minutes instead of 30. Now when you ask "what's the p99?", the worst window looks like 5 minutes. You think everything's fine.

**Percentile on raw data (the correct way)**:
You look at all 100 individual deliveries and ask "what's the p99?" The answer is 30 minutes — because that's what 1% of your customers actually experienced.

**The principle**: Pre‑averaging destroys the tails of your distribution. The more you average before computing percentiles, the more you hide the worst‑case experience.

Gil Tene is the person most associated with this topic. Multiple talks and blog posts summarize his position bluntly: "You can't average percentiles. Period."

### Why not?

- A percentile is a property of a population of samples.
- To compute the p99 over a whole day, you need all the individual latencies (or at least a lossless histogram of them).
- If you only have per‑minute p99s, and you average those across an hour, there's no meaningful interpretation of that number—it is not the true hourly p99.
- Similarly, p99 of per‑minute averages is not the same as "p99 of per‑request latencies," because pre‑averaging erased the outliers before you ever looked.

### TL;DR

You cannot:
- Average p99s across time windows and call it a p99.
- Average p99s across hosts/shards and call it a cluster p99.
- Take the p99 of per‑window averages and call it a p99 of user experience.

If you want correct percentiles at larger scopes, you must keep either:
- The raw samples, or
- A proper histogram data structure (e.g., HDR Histogram) that can be merged across windows and hosts.

## 4. Coordinated omission: when your tools lie to you

Even if you compute percentiles the right way, you can still end up with nice‑looking numbers that are completely wrong because of **coordinated omission**.

Coordinated omission happens when your load generator or monitoring tool stops sending requests when the system is slow, then resumes once it recovers. The result:
- You only measure fast requests (service time).
- You "omit" the long periods where nothing was being served because of backpressure or queuing.

Gil Tene's talks (especially the "How NOT to Measure Latency" series) walk through this with animated graphs and examples; he argues that many classic benchmark tools suffer from this unless explicitly designed otherwise.

**Key takeaway**: If your load generator or metrics pipeline backs off when the system is slow, your percentiles are lying. Design tests and instrumentation that keep sending requests at the intended rate, or compensate explicitly.

## 5. Practical metrics to track (beyond averages)

Putting this together, here is a practical latency metric set for APIs and AI inference services.

### Core latency metrics

Track, per endpoint/model:
- **p50, p90/p95, p99, and sometimes p99.9 latency** — Use raw latencies or histograms, not pre‑averaged windows.
- **Time to first byte / time to first token (TTFB/TTFT)** — For LLMs or streaming APIs, TTFT is often more important to UX than total latency.

### Latency by component

If possible, break down into:
- network / load balancer
- application
- database / cache
- model inference (for AI services)

### Request volume alongside percentiles

P99 with only 20 requests is not actionable; always plot volume next to percentiles.

### Reliability metrics

- Error rate and timeout rate
- SLOs framed as:
  - "99% of requests under 300 ms over 30 days"
  - "99.9% of inference requests finish under 2 s"
- Burn rate for SLO violations (how fast you're burning the error budget).

### Capacity and saturation

- Queue depth / in‑flight requests
- CPU/GPU utilization, memory usage
- Tokens/sec or requests/sec for LLMs and APIs

When you plot these next to p99, you can see classic patterns: p99 spikes when utilization crosses a threshold or queue length grows.

### Recording the right raw data

To avoid the "p99 of averages" trap, you want either:
- Raw latency samples (per request), logged to a store like Postgres or a logging system, and/or
- Latency histograms (e.g., HDR Histogram) per time window, which you export to your metrics backend.

HDR Histogram is a well‑studied data structure for recording high‑dynamic‑range latency distributions at controlled precision, with efficient merges across threads, processes, and hosts.

## 6. Key resources worth reading

### Core conceptual primers

- **"Latency: a primer"** – Igor Ostrovsky: Simple, visual introduction to average vs p99 vs max, with real graphs.
- **"Latency is the new downtime"** – Last9: Explains why latency is as critical as availability, with percentiles front and center.
- **"p90 vs p99: Why Not Both?"** – Akita Software: Clear primer on latency metrics and why multiple percentiles are useful.
- **"What Is P99 Latency?"** – Aerospike: Deep explanation of p99, its compounding in distributed systems, and how to reduce it.

### Why averages and percentile aggregation are broken

- **"Everything You Know About Latency Is Wrong"** – Brave New Geek: Summarizes Gil Tene's ideas, explains why you can't average percentiles, and why histograms matter.
- **"Why Percentiles Don't Work the Way You Think"** – SolarWinds: Shows how naive TSDB rollups and zooming can make percentile graphs lie.
- **"Some latency measurement pitfalls"** – Dan Luu: Real‑world examples of misleading latency metrics, especially when aggregating across shards or services.

### Coordinated omission and correct measurement

- **Gil Tene – "How NOT to Measure Latency"** (talks): Multiple conference recordings (QCon, USI, Strange Loop) covering why averages are useless for latency, why percentiles matter, and how coordinated omission corrupts your data.
- **"Your Load Generator is Probably Lying to You"** – High Scalability: Great blog explaining coordinated omission with graphs and examples.
- **"Coordinated Omission"** – Red Hat Perf Team: Deep dive into what coordinated omission is and how to avoid it in benchmark design.

## 7. Pulling it together in your own dashboards

Armed with these concepts, your dashboards should:

1. **Plot percentiles, not just averages** — Show p50, p95, p99 together so you see both "normal" and "tail" behavior.
2. **Compute percentiles on raw samples or histograms** — Avoid pre‑averaging (e.g., mean per 10‑second window) before percentiles. Don't average percentiles across hosts or windows.
3. **Avoid coordinated omission in tests** — Use open‑loop or compensated load generation; don't let your tools stop sending traffic when the system is slow.
4. **Show volume and saturation next to latency** — Latency metrics only make sense in the context of load and capacity.
5. **Align metrics with SLOs** — Define SLOs on ratios like "99% of requests under 300 ms" and make sure your graphs make burn rates visible.

If you apply the pizza‑delivery story to every metric choice—"does this reflect what 1% of our users actually saw, or does it hide it?"—you'll end up with latency dashboards that tell the truth instead of telling a comforting story.

## 8. Real-world implementation: From theory to practice

Understanding the theory is one thing; implementing it correctly is another. Here's how to put these concepts into practice across different parts of your stack.

### Instrumentation at the application layer

The most accurate latency measurements come from instrumenting your application code directly. This means:

**Measure wall-clock time, not CPU time.** Users experience wall-clock latency—the actual elapsed time from request to response. CPU time might be lower if your service is waiting on I/O, but the user doesn't care about that distinction.

**Measure at the edges.** Capture latency as close to the user as possible. If you measure inside your application server, you miss load balancer overhead, TLS handshake time, and network latency. If you can instrument at the client or at an edge proxy, do it.

**Include queue time.** Many services have a request queue before processing begins. If you only measure processing time, you miss the time requests spend waiting. This is especially important under load, where queue time often dominates.

```python
# Example: Measuring full request latency including queue time
import time
from prometheus_client import Histogram

REQUEST_LATENCY = Histogram(
    'http_request_duration_seconds',
    'HTTP request latency in seconds',
    ['method', 'endpoint', 'status'],
    buckets=[0.005, 0.01, 0.025, 0.05, 0.1, 0.25, 0.5, 1.0, 2.5, 5.0, 10.0]
)

def handle_request(request):
    start_time = time.perf_counter()  # High-resolution timer
    try:
        response = process_request(request)
        status = response.status_code
    except Exception as e:
        status = 500
        raise
    finally:
        duration = time.perf_counter() - start_time
        REQUEST_LATENCY.labels(
            method=request.method,
            endpoint=request.path,
            status=status
        ).observe(duration)
    return response
```

### Choosing histogram buckets wisely

If you're using Prometheus-style histograms, bucket selection matters enormously. Poor bucket choices can make your percentiles inaccurate.

**Guidelines for bucket selection:**
- **Cover your expected range.** If your service typically responds in 10-500ms, don't start buckets at 1s.
- **Use more buckets where precision matters.** For SLO boundaries (e.g., 300ms), have buckets close to that threshold.
- **Include buckets for outliers.** Even if 99% of requests are under 1s, you need buckets for the 10s+ outliers to see them.
- **Consider logarithmic spacing.** Buckets at 10ms, 25ms, 50ms, 100ms, 250ms, 500ms, 1s, 2.5s, 5s, 10s cover a wide range with reasonable precision.

**Common mistake:** Using linear buckets (100ms, 200ms, 300ms, ...) wastes precision at the low end and lacks resolution at the high end.

### Aggregation across services and hosts

In a distributed system, you often need to aggregate latency data across multiple services or hosts. This is where the "can't average percentiles" rule becomes critical.

**The right way: Merge histograms, then compute percentiles.**

If each host maintains a histogram (like HDR Histogram or Prometheus histogram), you can merge those histograms and compute percentiles on the merged result. This preserves the distribution.

**The wrong way: Compute percentiles per host, then average.**

If Host A has p99 = 100ms and Host B has p99 = 500ms, the average (300ms) is meaningless. The true cluster p99 depends on the actual distribution of requests across hosts.

**Practical approach with Prometheus:**

```promql
# Correct: Compute p99 across all instances
histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))

# Wrong: Average of per-instance p99s (don't do this)
avg(histogram_quantile(0.99, rate(http_request_duration_seconds_bucket[5m])))
```

### Time-series database considerations

Your choice of TSDB affects what's possible:

**Prometheus / Thanos / Cortex:** Native histogram support with `histogram_quantile()`. Aggregation works correctly if you sum buckets before computing quantiles. Watch out for cardinality explosion with high-dimensional labels.

**InfluxDB:** Supports percentile functions, but be careful about how data is downsampled. Pre-aggregated data loses tail information.

**Datadog / New Relic / Dynatrace:** Commercial APM tools generally handle this correctly, but verify their aggregation behavior. Some compute percentiles on sampled data, which can miss outliers.

**ClickHouse / TimescaleDB:** SQL-based systems can compute exact percentiles if you store raw samples, or approximate percentiles with quantile functions on aggregated data.

## 9. Common pitfalls and how to avoid them

Even teams that understand the theory make implementation mistakes. Here are the most common pitfalls I've seen:

### Pitfall 1: Sampling bias

**The problem:** To reduce storage costs, you sample 1% of requests. But your sampling is random, so you're unlikely to capture the rare slow requests that define your p99.

**The fix:** Use stratified sampling or reservoir sampling that preserves outliers. Alternatively, store full histograms (which are compact) rather than sampled raw data.

### Pitfall 2: Clock skew in distributed tracing

**The problem:** Your distributed tracing system shows impossible timelines—child spans that start before parent spans, or total latency that doesn't match the sum of parts.

**The fix:** Use monotonic clocks for duration measurement (not wall clocks). Synchronize clocks with NTP, but don't rely on cross-host clock agreement for latency calculation. Measure durations locally and propagate them, rather than computing durations from timestamps.

### Pitfall 3: Ignoring client-side latency

**The problem:** Your server metrics look great, but users complain about slowness. You're not measuring what users actually experience.

**The fix:** Instrument the client. For web applications, use the Navigation Timing API and Resource Timing API. For mobile apps, measure from the moment the user initiates an action to when they see a result. For APIs, provide client SDKs that report latency back to your telemetry system.

### Pitfall 4: Alert fatigue from noisy percentiles

**The problem:** Your p99 alert fires constantly because p99 is inherently noisy with low request volumes. You start ignoring it.

**The fix:** 
- Alert on SLO burn rate, not raw percentiles. "We're burning error budget 10x faster than sustainable" is more actionable than "p99 spiked."
- Use longer windows for alerting (e.g., p99 over 1 hour) while keeping shorter windows for dashboards.
- Require minimum request volume before alerting.

### Pitfall 5: Confusing latency with throughput

**The problem:** You optimize for throughput (requests per second) and assume latency will follow. It doesn't—you've just moved the bottleneck.

**The fix:** Always measure both. High throughput with high latency means you're batching or queuing aggressively. Low latency with low throughput means you have capacity headroom. Understand the tradeoff you're making.

### Pitfall 6: Not segmenting by request type

**The problem:** Your overall p99 looks fine, but one endpoint is terrible and it's hidden by the volume of fast requests to other endpoints.

**The fix:** Always segment latency metrics by endpoint, operation type, or other relevant dimensions. A single "service latency" metric is almost never sufficient.

## 10. Latency optimization strategies

Once you're measuring correctly, you can start optimizing. Here are strategies that actually work:

### Reduce tail latency, not just median

Most optimization effort focuses on the common case. But tail latency often comes from different causes:
- **Garbage collection pauses** — Use GC-friendly allocation patterns or languages with better GC.
- **Lock contention** — Profile under load, not just in isolation.
- **Cold caches** — Warm caches proactively; don't let the first user pay the cost.
- **Retry storms** — Implement exponential backoff with jitter.
- **Noisy neighbors** — Isolate latency-sensitive workloads.

### Hedge your bets

For critical paths, send redundant requests to multiple backends and use the first response. This sounds wasteful, but it dramatically reduces tail latency when backends have variable performance.

Google's "The Tail at Scale" paper describes this in detail. The key insight: if each backend has 1% chance of being slow, sending to two backends reduces your chance of a slow response to 0.01%.

### Set aggressive timeouts

Long timeouts let slow requests consume resources and queue behind them. Short timeouts fail fast and let the system recover.

**Rule of thumb:** Set timeouts at your p99 + small buffer. If p99 is 200ms, a 500ms timeout is reasonable. A 30s timeout is almost never correct for a synchronous API call.

### Shed load gracefully

When overloaded, it's better to reject some requests quickly than to accept all requests and serve them slowly. Implement:
- **Admission control** — Reject requests when queue depth exceeds threshold.
- **Deadline propagation** — If a request has already exceeded its deadline, don't process it.
- **Priority queues** — Serve high-priority requests first when capacity is constrained.

## 11. Building a latency-aware culture

Technical solutions only work if the organization values latency. Here's how to build that culture:

### Make latency visible

Put latency dashboards on TVs in the office. Include latency in deployment checklists. Review latency trends in team meetings. What gets measured and displayed gets attention.

### Set explicit SLOs

"Our API should be fast" is not an SLO. "99% of requests complete in under 300ms, measured over a rolling 30-day window" is an SLO. Make it specific, measurable, and tied to user experience.

### Create accountability

Someone should own latency. Not in a blame sense, but in a "this is my responsibility to monitor, understand, and improve" sense. Without ownership, latency degrades through accumulated small regressions.

### Celebrate improvements

When someone reduces p99 by 50ms, make it visible. Latency improvements are often invisible to users (they just experience "it works") but represent real engineering effort. Recognize that effort.

## 12. Conclusion: The truth is in the tails

Latency measurement is not a solved problem. It requires ongoing attention, correct tooling, and organizational commitment. But the payoff is substantial: systems that actually feel fast to users, not just systems that look fast on dashboards.

The core principles are simple:
1. **Measure distributions, not averages.**
2. **Preserve raw data or histograms; don't pre-aggregate.**
3. **Avoid coordinated omission in your measurement tools.**
4. **Segment by meaningful dimensions.**
5. **Alert on SLO violations, not raw metrics.**
6. **Optimize for tails, not just medians.**

If you remember nothing else, remember the pizza delivery story: your metrics should reflect what your worst-served customers actually experienced, not a comfortable average that hides the truth.

The goal isn't perfect metrics—it's metrics that tell you when users are suffering, so you can fix it before they leave.
