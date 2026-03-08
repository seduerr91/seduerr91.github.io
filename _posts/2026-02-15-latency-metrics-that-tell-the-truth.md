---
title: Latency Metrics That Actually Tell the Truth
tags: [Performance, Monitoring, Engineering, APIs]
style: fill
color: secondary
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
