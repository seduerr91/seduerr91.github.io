
---
title: Systems Design and Algorithms
tags: [Mental Castle]
style: fill
color: secondary
description: From HelloInterview and MIT Class on Algorithms
---

## Dynamic Programming SRTBOT
- `` - Subproblem: for sequence try prefixes s[:i], suffixes s[i:] or substrings [i:j]; for non-negative int k, try [0:k]; add subproblems and constraints to remember "state"
- `` - Relate subproblem solutions recursively: identify question about subproblem that if you knew the answer it would reduce to a smaller problem; locally brute-force all answers; think of 'correct guessing' answer, then loop
- `` - topological order on subproblem: DAG b needs a
- `` - base case of relation
- `` - original problem: solve via subproblem(s)
- `` - time analysis: sum(recursive work) + sum(non-recursive work) + worked to solve original

## Design System Delivery

- `` - Functional Req: Users should be able to ... post tweets/follow users/see feed
- `` - Non-Functional Req: The system should ... avail > consistency, scale to 100M DAU, render < 200ms
- `` - Core Entities: Nouns of requirements
- `` - API: Restful endpoints POST /v1/tweet -> 200 body: {"text": str}
- `` - Data Flow: as a simple list
- `` - High-level Design: sketch of systems
- `` - Deep Dives: adaptions or conversations

## Core Concepts

- `` - Scaling: 
  - work distribution: in sync via load balancer w/ round robin/least connections/utilization-based; async via job queues
  - data distribution: keep data in memory (caching) or in database shared across all nodes
- `` - Consistency: how much users can tolerate stale data
  - strongly consistent: after data write, all subsequent reads reflect that write (e.g. with financial data, blockchain)
  - eventually consistent: period of time where data is stale (e.g. most systems)
- `` - Locking: ensuring that only one client can access a shared resource at a time (inventory counter, draw bridge)
  - granularity: lock as little as needed (user for an update, not entire user table)
  - duration: as little as needed
  - bypassing: avoid locking via "optimistic concurrency" - do work w/o locking & retry if it did not work being under the assumption that mostly we won't have contention (multiple updating same resource)
- `` - Indexing: basic approach is a hash (writing takes time, search is in O(1)) or keep as a sorted list O(logn)
  - most relational databases support indexing by column or group of columns
  - specialized: geospatial indexes or vector databases or full-text indices via inverted index
  - postgres & elastic with CDC: change data capture where elastic cluster listens to changes from PG DB
- `` - Protocols: 
  - internal: HTTP or RPC for internal comms
  - external: REST (stateless scaling behind load balancer), server sent events (client reqs, server sends multiple responses), websockets (real time communication or a message broker like Kafka)
- `` - Security: 
  - do not send unencrypted data (SSL, HTTPS) & protect data
  - Load Balancer handles authorization & authentication
- `` - Monitoring: 
  - Infrastructure: CPU, memory, load -> Datadog
  - Service-level: request latency, error rate
  - Application-level: Google Analytics or Mixpanel

## Key Technologies

- `` - relational DB: often used for records and transactions
  - joins: combining data on columns
  - indexes: storing data e.g. sorted by name or more indexes for fast look-up with hash
  - transactions: grouping multiple operations (new user + new post) -> fail or suceed together
- `` - No-SQL DB: stores for key value, documents, column_families or graph databases
  - use for evolving data models
  - scaling via consistent hashing or sharding
- `` - Blob Storage: large unstructured data like videos or images
  - security & durability, encrypted during data storing & transfer are built in
  - uploading & downloading via presigned-urls
  - chunking & calculating fingerprint while maintaining metadata in sql db for large files
- `` - Elastic: uses inverted indices, i.e. mapping from word to documents that contain them
  - leveraging tokenization, stemming and fuzzy logic

- `` - API Gateway: responsible for routing incoming traffic, auth, rate limiting and logging
- `` - Load Balancer: balancing load like Kubernetes, AWS Elastic LB
- `` - Queue: Serves as a buffer for bursty traffic or just distribution of work (burst: Uber, distribution: Youtube video preperation); SQS and Kafka
  - resource sends message and forgets, pool of workers work on messages -> will break <500 ms latency requirement
  - message ordering mostly FIFO, retries can improve processing, dead letter queues collect unprocessable data
  - backpressure: when queue is full you return error / waiting screen to user
- `` - Streams/Event Sourcing: changes in application state are stored as a sequence of events (Kafka, Kinesis)
  - Unlike queues, streams keep data for configurable amount of time
  - Use for: 
    - real time procssing of large data (like user analytics) w/ Apache Flink or Spark Streaming
    - complex processing: event source w/ Kafka in baking where transactions can be stored, processed and replayed
    - support multiple consumers: Whatsapp where message is pushed in stream of a chat room
  - Features: 
    - scale w/ partitioning: define partition key & then process by different consumer
    - multiple consumer groups: read from some stream but do different things (update dashboard vs. store event)
    - replication: can be used across multiple servers to protect against failing
    - windowing: batch events together based on time or count
- `` - Distributed Lock: locking a resource for a short time (e.g. like a ticket reservation)
  - tradtional dbs: not designed for timed locking (e.g. 10 mins) <-> key value store in Redis.
  - use cases: checkout systems, uber driver alloc, auction bidding
  - facts: 
    - locking with Redlock (Redis Lock) which uses multiple instances of Redis
    - lock expiry: ensures locks don't get stuck
    - lock granularity: single or group of resources
    - deadlock: mulitple resources lock each other
- `` - Distributed cache: server cluster that stores data in memory helping w/ scaling and latency
  - use cases: 
    - save aggregation metrics: save results of calculation rather than recomputing them
    - reduce number of db queries: user sessions are often cached
    - speed up queries: calculated complex queries ahead of time
  - know:
    - eviction policy: when is data removed & how? least recently used (LRU), FIFO, least frequently used (LFU)
    - cache invalidation strategy: strategy to remove data; if venue for concert is updated -> invalidate cache (Ticketmaster)
    - cache write strategy: 
      - write through: to both cache and db -> slower but safe
      - write around: only to db: increases fetch time
      - write back: to cache and async db -> faster write but data risk
- `` - CDN: cache using distributed servers to deliver static context globally & dynamic context that's popular
  - can be used to cache API responses
  - eviction policy: also set a TTL (time to live)

## Patterns
- `` - Simple DB-backed CRUD w/ caching: client -> API gateway -> LB -> service -> Cache -> DB
- `` - Async worker job pool: lots of processing w/ accepted delay, use queue (SQS or Kafka) and EC2 / lambdas for workers
- `` - Two stage architecture: for complex algos use augmented retrieval (vector-db and ranking service)
- `` - Event-driven arch: componetns are producers/routers/brokers and consumers (Kafka, AWS Eventbridge)
  - failure handling: process durable log of events if something goes wrong
  - e.g. order in ecommerce: order event -> order processing/inventory update/notification/book keeping
- `` - Durable job processing: periodically checkpoint data in case of crashes
- `` - Proximity-based services: use specific extensions like PostGIS, usually divide area into manageable regions and indexing entities w/in those

## Deep Dives

### Redis 
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :

### Kafka
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :

### Dynamo DB
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
- `` - :
