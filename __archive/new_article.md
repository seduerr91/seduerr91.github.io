Create a new blog post with the following contents. Please look at a previous artcile in the _posts directory to identify how the header, file_name and location of the blog article shall be fit into the template of this blog.
Also, try to find a relevant image from unsplash to use in the article to make it look nice, and make sure to credit the image. You can use today's date.

Here are the contents: 

Latency Metrics That Actually Tell the Truth
When you’re running an API or AI inference service, latency is the user‑visible part of performance. If the system feels slow, nothing else matters.
Most teams start by tracking “average response time.” It’s easy to compute and it looks good on a dashboard. It’s also dangerously misleading.
This article is a practical guide to latency metrics that actually reflect user experience: p50, p95, p99, p99.9, and the shape of your latency distribution. It explains why you can’t average percentiles, why pre‑averaging destroys your tails, and how to avoid common measurement traps like coordinated omission. It also links out to the best videos and articles if you want to go deeper.

1. Latency as a distribution, not a number
Every request has its own latency. Over time, you don’t get “the latency” of your service, you get a distribution of latencies.
For example, imagine you have 100 delivery times:
Most deliveries take 2 minutes.
A few rare deliveries take 30 minutes because the driver got lost.
You can summarize this distribution in many ways:
Minimum (fastest delivery)
Maximum (slowest delivery)
Average (mean) delivery time
Median (p50) and other percentiles (p90, p95, p99…)
The average can look great even when a meaningful fraction of users has a terrible experience. A p99 graph, on the other hand, will show you the ugly truth.[1][2]
Quick mental model for percentiles
Take all your latencies in a time window, sort them from fastest to slowest, and then:
p50 (median): the value in the middle. 50% faster, 50% slower.
p95: 95% of requests are faster than this; 5% are slower.
p99: 99% of requests are faster than this; 1% are slower.[3][4]
For web and API workloads, p95/p99 represent what “typical worst‑case” and “rare, but real” user experiences look like. A detailed primer from Aerospike walks through how to compute and interpret p90/p95/p99 with concrete examples.[2][3]
Akita’s “p90 vs p99: Why Not Both?” post is a nice short read that explains why different teams look at different percentiles, and why p95/p99/p99.9 often matter more than p90 for debugging real slowness.[5]
OneUptime’s guide to p50 vs p95 vs p99 has a great list of what makes p99 hard to improve—things like cold starts, GC pauses, cache misses, and lock contention.[1]

2. Why averages lie about latency
The problem with averages is simple: they smear out both the good and the bad. A small fraction of very slow requests can be completely obscured by a large number of fast ones.[2][1]
From Aerospike’s p99 article:
A service might have an average latency of 50 ms.
But the p99 spikes to ~1 s under load.
That means 1% of requests are 20× slower than the average; users will definitely feel that spike at least once in a session.[3]
Igor’s “latency: a primer” shows this nicely: plotting average latency looks smooth, but plotting p99 immediately exposes spikes toward 1 s that many users actually hit at some point in their session.[2]
Last9’s “Latency is the new downtime” drives home the same point: in distributed systems with fan‑out and retries, the user’s experience is determined by the slowest link in the chain, not by the average of all links.[6]
Key takeaway: Averages are fine for capacity planning and coarse checks. For user experience, error budgets, and SLOs, you care about percentiles and the overall shape of the distribution.

3. The “aggregation problem”: why you can’t average percentiles
Here’s the principle in plain English, using that delivery‑time story:
Imagine you have 100 delivery times. Most are 2 minutes, but a few are 30 minutes (pizza got lost).
Mean first, then percentile (the old broken way):
You group deliveries into 10‑minute windows and average each window. Those few 30‑minute outliers get blended into their window’s average — maybe it becomes 5 minutes instead of 30. Now when you ask “what’s the p99?”, the worst window looks like 5 minutes. You think everything’s fine.
Percentile on raw data (the correct way):
You look at all 100 individual deliveries and ask “what’s the p99?” The answer is 30 minutes — because that’s what 1% of your customers actually experienced.
The principle: Pre‑averaging destroys the tails of your distribution. The more you average before computing percentiles, the more you hide the worst‑case experience.
Gil Tene is the person most associated with this topic. Multiple talks and blog posts summarize his position bluntly:
“You can’t average percentiles. Period.”[7][8]
Why not?
A percentile is a property of a population of samples.
To compute the p99 over a whole day, you need all the individual latencies (or at least a lossless histogram of them).
If you only have per‑minute p99s, and you average those across an hour, there’s no meaningful interpretation of that number—it is not the true hourly p99.
Similarly, p99 of per‑minute averages is not the same as “p99 of per‑request latencies,” because pre‑averaging erased the outliers before you ever looked.
Brave New Geek’s “Everything You Know About Latency is Wrong” is the best long‑form explanation of this. It walks through:[7]
How monitoring systems often store pre‑aggregated metrics.
Why this makes their “p95/p99 over a day” views mathematically wrong.
Why you need histograms or raw event data to answer “what did my users actually see?”
SolarWinds’ “Why Percentiles Don’t Work the Way You Think” applies this directly to time‑series databases: zooming and downsampling often involves averaging or resampling percentiles, which breaks their meaning. The article explicitly warns:[9]
“Averaging percentiles doesn’t work… an average of a percentile is meaningless.”[9]
Dan Luu’s “Some latency measurement pitfalls” demonstrates the same issue in distributed systems: if you have shard‑local p99s and try to fudge a cluster‑wide p99 by aggregating them, you get values that can be wildly misaligned with actual end‑to‑end behavior.[10]
TL;DR:
You cannot:
Average p99s across time windows and call it a p99.
Average p99s across hosts/shards and call it a cluster p99.
Take the p99 of per‑window averages and call it a p99 of user experience.
If you want correct percentiles at larger scopes, you must keep either:
The raw samples, or
A proper histogram data structure (e.g., HDR Histogram) that can be merged across windows and hosts.

4. Coordinated omission: when your tools lie to you
Even if you compute percentiles the right way, you can still end up with nice‑looking numbers that are completely wrong because of coordinated omission.
Coordinated omission happens when your load generator or monitoring tool stops sending requests when the system is slow, then resumes once it recovers. The result:
You only measure fast requests (service time).
You “omit” the long periods where nothing was being served because of backpressure or queuing.[11][12]
High Scalability’s “Your Load Generator is Probably Lying to You” has a great explanation and graphs where latency distributions look perfect simply because the tool skipped measuring the worst parts.[11]
Red Hat’s performance team has a thorough write‑up of coordinated omission, why it arises, and how to design load tests that avoid it or compensate for it.[12]
ScyllaDB’s “On Coordinated Omission” gives a nice, non‑network analogy (coffee runs delayed by a closed road) and emphasizes that coordinated omission effectively converts a response‑time measurement into a service‑time measurement, hiding the actual delay seen by callers.[13]
Gil Tene’s talks (especially the “How NOT to Measure Latency” series) walk through this with animated graphs and examples; he argues that many classic benchmark tools suffer from this unless explicitly designed otherwise.[14][15]
Hyperfoil’s blog on “Compensation for coordinated omission” shows how to compute “compensated” latencies that estimate what you would have seen if you had kept firing requests on schedule, which is much closer to the real user experience under load.[16]
Key takeaway:
If your load generator or metrics pipeline backs off when the system is slow, your percentiles are lying. Design tests and instrumentation that keep sending requests at the intended rate, or compensate explicitly.

5. Practical metrics to track (beyond averages)
Putting this together, here is a practical latency metric set for APIs and AI inference services.
Core latency metrics
Track, per endpoint/model:
p50, p90/p95, p99, and sometimes p99.9 latency
Use raw latencies or histograms, not pre‑averaged windows.[5][1][3]
Time to first byte / time to first token (TTFB/TTFT)
For LLMs or streaming APIs, TTFT is often more important to UX than total latency.[17][18]
Latency by component
If possible, break down into:
network / load balancer
application
database / cache
model inference (for AI services)[19][20]
Request volume alongside percentiles
P99 with only 20 requests is not actionable; always plot volume next to percentiles.[1][5]
Reliability metrics
Error rate and timeout rate
SLOs framed as:
“99% of requests under 300 ms over 30 days”
“99.9% of inference requests finish under 2 s”[21][22]
Burn rate for SLO violations (how fast you’re burning the error budget).
OneUptime’s guide to latency percentiles and SLOs gives concrete examples of using p50/p95/p99 metrics and defining SLOs around them.[21][1]
Capacity and saturation
Queue depth / in‑flight requests
CPU/GPU utilization, memory usage
Tokens/sec or requests/sec for LLMs and APIs[20][17]
When you plot these next to p99, you can see classic patterns: p99 spikes when utilization crosses a threshold or queue length grows.[6][3]
Recording the right raw data
To avoid the “p99 of averages” trap, you want either:
Raw latency samples (per request), logged to a store like Postgres or a logging system, and/or
Latency histograms (e.g., HDR Histogram) per time window, which you export to your metrics backend.
HDR Histogram is a well‑studied data structure for recording high‑dynamic‑range latency distributions at controlled precision, with efficient merges across threads, processes, and hosts. Many modern tools and libraries implement it out of the box.[23][24]
OneUptime’s latency‑metrics guide makes the recommendation explicit:
“Store latency as a histogram, not a counter of rolled‑up percentiles.”[1]
This allows you to compute correct percentiles after the fact at whatever scope and time window you need.

6. Books, talks, and blogs worth reading
Here’s a curated list of “best of” resources you can link from your blog or internal docs.
Core conceptual primers
“Latency: a primer” – Igor Ostrovsky
Simple, visual introduction to average vs p99 vs max, with real graphs.[2]
“Latency is the new downtime” – Last9
Explains why latency is as critical as availability, with percentiles front and center.[6]
Akita Software – “p90 vs p99: Why Not Both?”
Clear primer on latency metrics and why multiple percentiles are useful.[5]
Aerospike – “What Is P99 Latency?”
Deep explanation of p99, its compounding in distributed systems, and how to reduce it.[3]
Why averages and percentile aggregation are broken
“Everything You Know About Latency Is Wrong” – Brave New Geek
Summarizes Gil Tene’s ideas, explains why you can’t average percentiles, and why histograms matter.[7]
“Why Percentiles Don’t Work the Way You Think” – SolarWinds
Shows how naive TSDB rollups and zooming can make percentile graphs lie if they’re built on aggregated stats instead of distributions.[9]
“Some latency measurement pitfalls” – Dan Luu
Real‑world examples of misleading latency metrics, especially when aggregating across shards or services.[10]
“How much information is retained in an average of percentiles?” – Kirkpatrick
A more mathematical take on why average‑of‑percentiles throws away most of the information you care about.[8]
Coordinated omission and correct measurement
Gil Tene – “How NOT to Measure Latency” (talks)
Multiple conference recordings (QCon, USI, Strange Loop) that cover:
Why averages are useless for latency.
Why percentiles matter.
How coordinated omission corrupts your data.[15][14]
“Your Load Generator is Probably Lying to You – Take the Red Pill” – High Scalability
Great blog explaining coordinated omission with graphs and examples.[11]
“Coordinated Omission” – Red Hat Perf Team
Deep dive into what coordinated omission is and how to avoid it in benchmark design.[12]
“On Coordinated Omission” – ScyllaDB
Clear definition, intuitive analogy, and references to Gil’s P99 Conf material.[13]
Hyperfoil – “Compensation for coordinated omission”
Shows how to compute “compensated” latencies that approximate what you’d see with an open‑loop load generator.[16]
Data structure and implementation
HDR Histogram site and blog posts
Official docs and explanations of a histogram structure built for latency measurement.[24][23]
Language bindings (e.g., Rust’s hdrhistogram crate, Go’s hdrhistogram-go) if you want to wire it into your services.[25][26]

7. Pulling it together in your own dashboards
Armed with these concepts, your dashboards should:
Plot percentiles, not just averages.
Show p50, p95, p99 together so you see both “normal” and “tail” behavior.[5][1]
Compute percentiles on raw samples or histograms.
Avoid pre‑averaging (e.g., mean per 10‑second window) before percentiles. Don’t average percentiles across hosts or windows.[8][7][9]
Avoid coordinated omission in tests.
Use open‑loop or compensated load generation; don’t let your tools stop sending traffic when the system is slow.[12][16][11]
Show volume and saturation next to latency.
Latency metrics only make sense in the context of load and capacity.[3][6]
Align metrics with SLOs.
Define SLOs on ratios like “99% of requests under 300 ms” and make sure your graphs make burn rates visible.[22][21]
If you apply the pizza‑delivery story to every metric choice—“does this reflect what 1% of our users actually saw, or does it hide it?”—you’ll end up with latency dashboards that tell the truth instead of telling a comforting story.
Sources [1] P50 vs P95 vs P99 Latency Explained: What Each Percentile Tells You https://oneuptime.com/blog/post/2025-09-15-p50-vs-p95-vs-p99-latency-percentiles/view [2] latency: a primer https://igor.io/latency/ [3] What Is P99 Latency? Understanding the 99th ... - Aerospike https://aerospike.com/blog/what-is-p99-latency/ [4] What is P99 latency? [closed] - Stack Overflow https://stackoverflow.com/questions/12808934/what-is-p99-latency [5] p90 vs p99: Why Not Both? - Akita Software https://www.akitasoftware.com/blog-posts/p90-vs-p99-why-not-both [6] Latency is the new downtime | Last9 https://last9.io/blog/latency-primer/ [7] Everything You Know About Latency Is Wrong - Brave New Geek https://bravenewgeek.com/everything-you-know-about-latency-is-wrong/ [8] How much information is retained in an average of percentiles? https://kirkpatricktech.org/2021/09/02/averages-of-percentiles/ [9] Why Percentiles Don't Work the Way You Think - SolarWinds Blog https://www.solarwinds.com/blog/why-percentiles-dont-work-the-way-you-think [10] Some latency measurement pitfalls - Dan Luu https://danluu.com/latency-pitfalls/ [11] Your Load Generator is Probably Lying to You - Take the Red Pill ... https://highscalability.com/your-load-generator-is-probably-lying-to-you-take-the-red-pi/ [12] Coordinated Omission - Red Hat App Services Performance Team https://redhatperf.github.io/post/coordinated-omission/ [13] On Coordinated Omission - ScyllaDB https://www.scylladb.com/2021/04/22/on-coordinated-omission/ [14] How NOT to measure latency - Gil Tene at USI - YouTube https://www.youtube.com/watch?v=6Rs0p3mPNr0 [15] "How NOT to Measure Latency" by Gil Tene - YouTube https://www.youtube.com/watch?v=lJ8ydIuPFeU [16] Compensation for coordinated omission - Hyperfoil https://hyperfoil.io/blog/news/2020-12-9-compensation/ [17] Defining LLM Performance Metrics (Latency, Throughput) https://apxml.com/courses/mlops-for-large-models-llmops/chapter-5-llm-monitoring-observability-maintenance/llm-performance-metrics [18] Metrics That Matter for LLM Inference - Compute with Hivenet https://compute.hivenet.com/post/llm-inference-metrics-ttft-tps [19] How to Monitor Fraud Detection Model Inference Latency in Real ... https://oneuptime.com/blog/post/2026-02-06-monitor-fraud-detection-inference-latency-opentelemetry/view [20] Serving Machine Learning Models at Scale: A Guide to Inference ... https://sealos.io/blog/serving-machine-learning-models-at-scale-a-guide-to-inference-optimization [21] How to Build Latency Percentile SLOs - OneUptime https://oneuptime.com/blog/post/2026-01-30-latency-percentile-slos/view [22] Monitoring ML systems in production. Which metrics should you track? https://www.evidentlyai.com/blog/ml-monitoring-metrics [23] HdrHistogram by giltene https://hdrhistogram.github.io/HdrHistogram/ [24] HdrHistogram: A better latency capture method http://psy-lob-saw.blogspot.com/2015/02/hdrhistogram-better-latency-capture.html [25] hdrhistogram - Rust - Docs.rs https://docs.rs/hdrhistogram/ [26] A pure Go implementation of Gil Tene's HDR Histogram. - GitHub https://github.com/HdrHistogram/hdrhistogram-go [27] 4 Tips to Improve P99 Latency - Control Plane https://controlplane.com/blog/post/4-tips-to-improve-p99-latency [28] P50 vs P95 vs P99 Latency: What These Percentiles Actually Mean ... https://www.reddit.com/r/sre/comments/1nhlltm/p50_vs_p95_vs_p99_latency_what_these_percentiles/ [29] Understanding p50 p75 p90 p95 and p99 latency metrics - LinkedIn https://www.linkedin.com/pulse/understanding-p50-p75-p90-p95-p99-latency-metrics-rizwan-ahmed-osoqc [30] Effective Tips to Improve P99 Latency - PingCAP https://www.pingcap.com/article/effective-tips-to-improve-p99-latency/ [31] Coordinated Omission - Google Groups https://groups.google.com/g/mechanical-sympathy/c/icNZJejUHfE/m/BfDekfBEs_sJ Below is a draft blog article you could publish internally (or externally) that explains latency metrics, why percentiles matter, why “p99 of averages” is wrong, and points readers to the best resources on the topic.
You can drop in your own product examples and code snippets where it makes sense.

Latency Metrics That Actually Tell the Truth
When you’re running an API or AI inference service, latency is the user‑visible part of performance. If the system feels slow, nothing else matters.
Most teams start by tracking “average response time.” It’s easy to compute and it looks good on a dashboard. It’s also dangerously misleading.
This article is a practical guide to latency metrics that actually reflect user experience: p50, p95, p99, p99.9, and the shape of your latency distribution. It explains why you can’t average percentiles, why pre‑averaging destroys your tails, and how to avoid common measurement traps like coordinated omission. It also links out to the best videos and articles if you want to go deeper.

1. Latency as a distribution, not a number
Every request has its own latency. Over time, you don’t get “the latency” of your service, you get a distribution of latencies.
For example, imagine you have 100 delivery times:
Most deliveries take 2 minutes.
A few rare deliveries take 30 minutes because the driver got lost.
You can summarize this distribution in many ways:
Minimum (fastest delivery)
Maximum (slowest delivery)
Average (mean) delivery time
Median (p50) and other percentiles (p90, p95, p99…)
The average can look great even when a meaningful fraction of users has a terrible experience. A p99 graph, on the other hand, will show you the ugly truth.[1][2]
Quick mental model for percentiles
Take all your latencies in a time window, sort them from fastest to slowest, and then:
p50 (median): the value in the middle. 50% faster, 50% slower.
p95: 95% of requests are faster than this; 5% are slower.
p99: 99% of requests are faster than this; 1% are slower.[3][4]
For web and API workloads, p95/p99 represent what “typical worst‑case” and “rare, but real” user experiences look like. A detailed primer from Aerospike walks through how to compute and interpret p90/p95/p99 with concrete examples.[2][3]
Akita’s “p90 vs p99: Why Not Both?” post is a nice short read that explains why different teams look at different percentiles, and why p95/p99/p99.9 often matter more than p90 for debugging real slowness.[5]
OneUptime’s guide to p50 vs p95 vs p99 has a great list of what makes p99 hard to improve—things like cold starts, GC pauses, cache misses, and lock contention.[1]

2. Why averages lie about latency
The problem with averages is simple: they smear out both the good and the bad. A small fraction of very slow requests can be completely obscured by a large number of fast ones.[2][1]
From Aerospike’s p99 article:
A service might have an average latency of 50 ms.
But the p99 spikes to ~1 s under load.
That means 1% of requests are 20× slower than the average; users will definitely feel that spike at least once in a session.[3]
Igor’s “latency: a primer” shows this nicely: plotting average latency looks smooth, but plotting p99 immediately exposes spikes toward 1 s that many users actually hit at some point in their session.[2]
Last9’s “Latency is the new downtime” drives home the same point: in distributed systems with fan‑out and retries, the user’s experience is determined by the slowest link in the chain, not by the average of all links.[6]
Key takeaway: Averages are fine for capacity planning and coarse checks. For user experience, error budgets, and SLOs, you care about percentiles and the overall shape of the distribution.

3. The “aggregation problem”: why you can’t average percentiles
Here’s the principle in plain English, using that delivery‑time story:
Imagine you have 100 delivery times. Most are 2 minutes, but a few are 30 minutes (pizza got lost).
Mean first, then percentile (the old broken way):
You group deliveries into 10‑minute windows and average each window. Those few 30‑minute outliers get blended into their window’s average — maybe it becomes 5 minutes instead of 30. Now when you ask “what’s the p99?”, the worst window looks like 5 minutes. You think everything’s fine.
Percentile on raw data (the correct way):
You look at all 100 individual deliveries and ask “what’s the p99?” The answer is 30 minutes — because that’s what 1% of your customers actually experienced.
The principle: Pre‑averaging destroys the tails of your distribution. The more you average before computing percentiles, the more you hide the worst‑case experience.
Gil Tene is the person most associated with this topic. Multiple talks and blog posts summarize his position bluntly:
“You can’t average percentiles. Period.”[7][8]
Why not?
A percentile is a property of a population of samples.
To compute the p99 over a whole day, you need all the individual latencies (or at least a lossless histogram of them).
If you only have per‑minute p99s, and you average those across an hour, there’s no meaningful interpretation of that number—it is not the true hourly p99.
Similarly, p99 of per‑minute averages is not the same as “p99 of per‑request latencies,” because pre‑averaging erased the outliers before you ever looked.
Brave New Geek’s “Everything You Know About Latency is Wrong” is the best long‑form explanation of this. It walks through:[7]
How monitoring systems often store pre‑aggregated metrics.
Why this makes their “p95/p99 over a day” views mathematically wrong.
Why you need histograms or raw event data to answer “what did my users actually see?”
SolarWinds’ “Why Percentiles Don’t Work the Way You Think” applies this directly to time‑series databases: zooming and downsampling often involves averaging or resampling percentiles, which breaks their meaning. The article explicitly warns:[9]
“Averaging percentiles doesn’t work… an average of a percentile is meaningless.”[9]
Dan Luu’s “Some latency measurement pitfalls” demonstrates the same issue in distributed systems: if you have shard‑local p99s and try to fudge a cluster‑wide p99 by aggregating them, you get values that can be wildly misaligned with actual end‑to‑end behavior.[10]
TL;DR:
You cannot:
Average p99s across time windows and call it a p99.
Average p99s across hosts/shards and call it a cluster p99.
Take the p99 of per‑window averages and call it a p99 of user experience.
If you want correct percentiles at larger scopes, you must keep either:
The raw samples, or
A proper histogram data structure (e.g., HDR Histogram) that can be merged across windows and hosts.

4. Coordinated omission: when your tools lie to you
Even if you compute percentiles the right way, you can still end up with nice‑looking numbers that are completely wrong because of coordinated omission.
Coordinated omission happens when your load generator or monitoring tool stops sending requests when the system is slow, then resumes once it recovers. The result:
You only measure fast requests (service time).
You “omit” the long periods where nothing was being served because of backpressure or queuing.[11][12]
High Scalability’s “Your Load Generator is Probably Lying to You” has a great explanation and graphs where latency distributions look perfect simply because the tool skipped measuring the worst parts.[11]
Red Hat’s performance team has a thorough write‑up of coordinated omission, why it arises, and how to design load tests that avoid it or compensate for it.[12]
ScyllaDB’s “On Coordinated Omission” gives a nice, non‑network analogy (coffee runs delayed by a closed road) and emphasizes that coordinated omission effectively converts a response‑time measurement into a service‑time measurement, hiding the actual delay seen by callers.[13]
Gil Tene’s talks (especially the “How NOT to Measure Latency” series) walk through this with animated graphs and examples; he argues that many classic benchmark tools suffer from this unless explicitly designed otherwise.[14][15]
Hyperfoil’s blog on “Compensation for coordinated omission” shows how to compute “compensated” latencies that estimate what you would have seen if you had kept firing requests on schedule, which is much closer to the real user experience under load.[16]
Key takeaway:
If your load generator or metrics pipeline backs off when the system is slow, your percentiles are lying. Design tests and instrumentation that keep sending requests at the intended rate, or compensate explicitly.

5. Practical metrics to track (beyond averages)
Putting this together, here is a practical latency metric set for APIs and AI inference services.
Core latency metrics
Track, per endpoint/model:
p50, p90/p95, p99, and sometimes p99.9 latency
Use raw latencies or histograms, not pre‑averaged windows.[5][1][3]
Time to first byte / time to first token (TTFB/TTFT)
For LLMs or streaming APIs, TTFT is often more important to UX than total latency.[17][18]
Latency by component
If possible, break down into:
network / load balancer
application
database / cache
model inference (for AI services)[19][20]
Request volume alongside percentiles
P99 with only 20 requests is not actionable; always plot volume next to percentiles.[1][5]
Reliability metrics
Error rate and timeout rate
SLOs framed as:
“99% of requests under 300 ms over 30 days”
“99.9% of inference requests finish under 2 s”[21][22]
Burn rate for SLO violations (how fast you’re burning the error budget).
OneUptime’s guide to latency percentiles and SLOs gives concrete examples of using p50/p95/p99 metrics and defining SLOs around them.[21][1]
Capacity and saturation
Queue depth / in‑flight requests
CPU/GPU utilization, memory usage
Tokens/sec or requests/sec for LLMs and APIs[20][17]
When you plot these next to p99, you can see classic patterns: p99 spikes when utilization crosses a threshold or queue length grows.[6][3]
Recording the right raw data
To avoid the “p99 of averages” trap, you want either:
Raw latency samples (per request), logged to a store like Postgres or a logging system, and/or
Latency histograms (e.g., HDR Histogram) per time window, which you export to your metrics backend.
HDR Histogram is a well‑studied data structure for recording high‑dynamic‑range latency distributions at controlled precision, with efficient merges across threads, processes, and hosts. Many modern tools and libraries implement it out of the box.[23][24]
OneUptime’s latency‑metrics guide makes the recommendation explicit:
“Store latency as a histogram, not a counter of rolled‑up percentiles.”[1]
This allows you to compute correct percentiles after the fact at whatever scope and time window you need.

6. Books, talks, and blogs worth reading
Here’s a curated list of “best of” resources you can link from your blog or internal docs.
Core conceptual primers
“Latency: a primer” – Igor Ostrovsky
Simple, visual introduction to average vs p99 vs max, with real graphs.[2]
“Latency is the new downtime” – Last9
Explains why latency is as critical as availability, with percentiles front and center.[6]
Akita Software – “p90 vs p99: Why Not Both?”
Clear primer on latency metrics and why multiple percentiles are useful.[5]
Aerospike – “What Is P99 Latency?”
Deep explanation of p99, its compounding in distributed systems, and how to reduce it.[3]
Why averages and percentile aggregation are broken
“Everything You Know About Latency Is Wrong” – Brave New Geek
Summarizes Gil Tene’s ideas, explains why you can’t average percentiles, and why histograms matter.[7]
“Why Percentiles Don’t Work the Way You Think” – SolarWinds
Shows how naive TSDB rollups and zooming can make percentile graphs lie if they’re built on aggregated stats instead of distributions.[9]
“Some latency measurement pitfalls” – Dan Luu
Real‑world examples of misleading latency metrics, especially when aggregating across shards or services.[10]
“How much information is retained in an average of percentiles?” – Kirkpatrick
A more mathematical take on why average‑of‑percentiles throws away most of the information you care about.[8]
Coordinated omission and correct measurement
Gil Tene – “How NOT to Measure Latency” (talks)
Multiple conference recordings (QCon, USI, Strange Loop) that cover:
Why averages are useless for latency.
Why percentiles matter.
How coordinated omission corrupts your data.[15][14]
“Your Load Generator is Probably Lying to You – Take the Red Pill” – High Scalability
Great blog explaining coordinated omission with graphs and examples.[11]
“Coordinated Omission” – Red Hat Perf Team
Deep dive into what coordinated omission is and how to avoid it in benchmark design.[12]
“On Coordinated Omission” – ScyllaDB
Clear definition, intuitive analogy, and references to Gil’s P99 Conf material.[13]
Hyperfoil – “Compensation for coordinated omission”
Shows how to compute “compensated” latencies that approximate what you’d see with an open‑loop load generator.[16]
Data structure and implementation
HDR Histogram site and blog posts
Official docs and explanations of a histogram structure built for latency measurement.[24][23]
Language bindings (e.g., Rust’s hdrhistogram crate, Go’s hdrhistogram-go) if you want to wire it into your services.[25][26]

7. Pulling it together in your own dashboards
Armed with these concepts, your dashboards should:
Plot percentiles, not just averages.
Show p50, p95, p99 together so you see both “normal” and “tail” behavior.[5][1]
Compute percentiles on raw samples or histograms.
Avoid pre‑averaging (e.g., mean per 10‑second window) before percentiles. Don’t average percentiles across hosts or windows.[8][7][9]
Avoid coordinated omission in tests.
Use open‑loop or compensated load generation; don’t let your tools stop sending traffic when the system is slow.[12][16][11]
Show volume and saturation next to latency.
Latency metrics only make sense in the context of load and capacity.[3][6]
Align metrics with SLOs.
Define SLOs on ratios like “99% of requests under 300 ms” and make sure your graphs make burn rates visible.[22][21]
If you apply the pizza‑delivery story to every metric choice—“does this reflect what 1% of our users actually saw, or does it hide it?”—you’ll end up with latency dashboards that tell the truth instead of telling a comforting story.
If you’d like, a next step could be to adapt this article into a concrete “Latency Playbook” for your team: include your Influx measurement names, Postgres schema, and 2–3 example query snippets (Flux/SQL) that compute p95/p99 the right way.
Sources [1] P50 vs P95 vs P99 Latency Explained: What Each Percentile Tells You https://oneuptime.com/blog/post/2025-09-15-p50-vs-p95-vs-p99-latency-percentiles/view [2] latency: a primer https://igor.io/latency/ [3] What Is P99 Latency? Understanding the 99th ... - Aerospike https://aerospike.com/blog/what-is-p99-latency/ [4] What is P99 latency? [closed] - Stack Overflow https://stackoverflow.com/questions/12808934/what-is-p99-latency [5] p90 vs p99: Why Not Both? - Akita Software https://www.akitasoftware.com/blog-posts/p90-vs-p99-why-not-both [6] Latency is the new downtime | Last9 https://last9.io/blog/latency-primer/ [7] Everything You Know About Latency Is Wrong - Brave New Geek https://bravenewgeek.com/everything-you-know-about-latency-is-wrong/ [8] How much information is retained in an average of percentiles? https://kirkpatricktech.org/2021/09/02/averages-of-percentiles/ [9] Why Percentiles Don't Work the Way You Think - SolarWinds Blog https://www.solarwinds.com/blog/why-percentiles-dont-work-the-way-you-think [10] Some latency measurement pitfalls - Dan Luu https://danluu.com/latency-pitfalls/ [11] Your Load Generator is Probably Lying to You - Take the Red Pill ... https://highscalability.com/your-load-generator-is-probably-lying-to-you-take-the-red-pi/ [12] Coordinated Omission - Red Hat App Services Performance Team https://redhatperf.github.io/post/coordinated-omission/ [13] On Coordinated Omission - ScyllaDB https://www.scylladb.com/2021/04/22/on-coordinated-omission/ [14] How NOT to measure latency - Gil Tene at USI - YouTube https://www.youtube.com/watch?v=6Rs0p3mPNr0 [15] "How NOT to Measure Latency" by Gil Tene - YouTube https://www.youtube.com/watch?v=lJ8ydIuPFeU [16] Compensation for coordinated omission - Hyperfoil https://hyperfoil.io/blog/news/2020-12-9-compensation/ [17] Defining LLM Performance Metrics (Latency, Throughput) https://apxml.com/courses/mlops-for-large-models-llmops/chapter-5-llm-monitoring-observability-maintenance/llm-performance-metrics [18] Metrics That Matter for LLM Inference - Compute with Hivenet https://compute.hivenet.com/post/llm-inference-metrics-ttft-tps [19] How to Monitor Fraud Detection Model Inference Latency in Real ... https://oneuptime.com/blog/post/2026-02-06-monitor-fraud-detection-inference-latency-opentelemetry/view [20] Serving Machine Learning Models at Scale: A Guide to Inference ... https://sealos.io/blog/serving-machine-learning-models-at-scale-a-guide-to-inference-optimization [21] How to Build Latency Percentile SLOs - OneUptime https://oneuptime.com/blog/post/2026-01-30-latency-percentile-slos/view [22] Monitoring ML systems in production. Which metrics should you track? https://www.evidentlyai.com/blog/ml-monitoring-metrics [23] HdrHistogram by giltene https://hdrhistogram.github.io/HdrHistogram/ [24] HdrHistogram: A better latency capture method http://psy-lob-saw.blogspot.com/2015/02/hdrhistogram-better-latency-capture.html [25] hdrhistogram - Rust - Docs.rs https://docs.rs/hdrhistogram/ [26] A pure Go implementation of Gil Tene's HDR Histogram. - GitHub https://github.com/HdrHistogram/hdrhistogram-go [27] 4 Tips to Improve P99 Latency - Control Plane https://controlplane.com/blog/post/4-tips-to-improve-p99-latency [28] P50 vs P95 vs P99 Latency: What These Percentiles Actually Mean ... https://www.reddit.com/r/sre/comments/1nhlltm/p50_vs_p95_vs_p99_latency_what_these_percentiles/ [29] Understanding p50 p75 p90 p95 and p99 latency metrics - LinkedIn https://www.linkedin.com/pulse/understanding-p50-p75-p90-p95-p99-latency-metrics-rizwan-ahmed-osoqc [30] Effective Tips to Improve P99 Latency - PingCAP https://www.pingcap.com/article/effective-tips-to-improve-p99-latency/ [31] Coordinated Omission - Google Groups https://groups.google.com/g/mechanical-sympathy/c/icNZJejUHfE/m/BfDekfBEs_sJ


