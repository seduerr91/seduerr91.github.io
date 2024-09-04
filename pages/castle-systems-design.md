## Dynamic Programming SRTBOT

- Subproblem: for sequence try prefixes s[:i], suffixes s[i:] or substrings [i:j]; for non-negative int k, try [0:k]; add subproblems and constraints to remember "state"
- Relate subproblem solutions recursively: identify question about subproblem that if you knew the answer it would reduce to a smaller problem; locally brute-force all answers; think of 'correct guessing' answer, then loop
- Topological order on subproblem: DAG b needs a
- Base case of relation
- Original problem: solve via subproblem(s)
- Time analysis: sum(recursive work) + sum(non-recursive work) + worked to solve original

## Design System Delivery

- Functional Req: Users should be able to ... post tweets/follow users/see feed
- Non-Functional Req: The system should ... avail > consistency, scale to 100M DAU, render < 200ms
- Core Entities: Nouns of requirements
- API: Restful endpoints POST /v1/tweet -> 200 body: {"text": str}
- Data Flow: as a simple list
- High-level Design: sketch of systems
- Deep Dives: adaptions or conversations

## Core Concepts

- `Guard` - Security: 
  - do not send unencrypted data (SSL, HTTPS) & protect data
  - Load Balancer handles authorization & authentication
- `Side Desk` - Monitoring: 
  - Infrastructure: CPU, memory, load -> Datadog
  - Service-level: request latency, error rate
  - Application-level: Google Analytics or Mixpanel
- `Finger Printer` - Indexing: basic approach is a hash (writing takes time, search is in O(1)) or keep as a sorted list O(logn)
  - most relational databases support indexing by column or group of columns
  - specialized: geospatial indexes or vector databases or full-text indices via inverted index
  - postgres & elastic with CDC: change data capture where elastic cluster listens to changes from PG DB
- `Toilets` - Locking: ensuring that only one client can access a shared resource at a time (inventory counter, draw bridge)
  - granularity: lock as little as needed (user for an update, not entire user table)
  - duration: as little as needed
  - bypassing: avoid locking via "optimistic concurrency" - do work w/o locking & retry if it did not work being under the assumption that mostly we won't have contention (multiple updating same resource)
- `Donut Box` - Protocols: 
  - internal: HTTP or RPC for internal comms
  - external: REST (stateless scaling behind load balancer), server sent events (client reqs, server sends multiple responses), websockets (real time communication or a message broker like Kafka)
- `Coffee` - Consistency: how much users can tolerate stale data
  - strongly consistent: after data write, all subsequent reads reflect that write (e.g. with financial data, blockchain)
  - eventually consistent: period of time where data is stale (e.g. most systems)
- `Cheese Cake Slices` - Scaling: 
  - work distribution: in sync via load balancer w/ round robin/least connections/utilization-based; async via job queues
  - data distribution: keep data in memory (caching) or in database shared across all nodes

## Patterns

- `Bread` - Simple DB-backed CRUD w/ caching: client -> API gateway -> LB -> service -> Cache -> DB
- `Berries` - Async worker job pool: lots of processing w/ accepted delay, use queue (SQS or Kafka) and EC2 / lambdas for workers
- `Avocado` - Two stage architecture: for complex algos use augmented retrieval (vector-db and ranking service)
- `Salmon` - Event-driven arch: componetns are producers/routers/brokers and consumers (Kafka, AWS Eventbridge)
  - failure handling: process durable log of events if something goes wrong
  - e.g. order in ecommerce: order event -> order processing/inventory update/notification/book keeping
- `Steak` - Durable job processing: periodically checkpoint data in case of crashes
- `Frozen Fries` - Proximity-based services: use specific extensions like PostGIS, usually divide area into manageable regions and indexing entities w/in those

## Key Technologies

- `Eggs` - relational DB: often used for records and transactions
  - joins: combining data on columns
  - indexes: storing data e.g. sorted by name or more indexes for fast look-up with hash
  - transactions: grouping multiple operations (new user + new post) -> fail or suceed together
- `Milk` - No-SQL DB: stores for key value, documents, column_families or graph databases
  - use for evolving data models
  - scaling via consistent hashing or sharding
- `Beer` - Blob Storage: large unstructured data like videos or images
  - security & durability, encrypted during data storing & transfer are built in
  - uploading & downloading via presigned-urls
  - chunking & calculating fingerprint while maintaining metadata in sql db for large files
- `Wine` - Elastic: uses inverted indices, i.e. mapping from word to documents that contain them
  - leveraging tokenization, stemming and fuzzy logic

- `Cheddar` - API Gateway: responsible for routing incoming traffic, auth, rate limiting and logging
- `Hot Bar` - Load Balancer: balancing load like Kubernetes, AWS Elastic LB
- `Salad Bar` - Queue: Serves as a buffer for bursty traffic or just distribution of work (burst: Uber, distribution: Youtube video preperation); SQS and Kafka
  - resource sends message and forgets, pool of workers work on messages -> will break <500 ms latency requirement
  - message ordering mostly FIFO, retries can improve processing, dead letter queues collect unprocessable data
  - backpressure: when queue is full you return error / waiting screen to user
- `Burritos` - Streams/Event Sourcing: changes in application state are stored as a sequence of events (Kafka, Kinesis)
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
- `Self-Checkout` - Distributed Lock: locking a resource for a short time (e.g. like a ticket reservation)
  - tradtional dbs: not designed for timed locking (e.g. 10 mins) <-> key value store in Redis.
  - use cases: checkout systems, uber driver alloc, auction bidding
  - facts: 
    - locking with Redlock (Redis Lock) which uses multiple instances of Redis
    - lock expiry: ensures locks don't get stuck
    - lock granularity: single or group of resources
    - deadlock: mulitple resources lock each other
- `Lunch Corner` - Distributed cache: server cluster that stores data in memory helping w/ scaling and latency
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
- `Amazon Dropoff` - CDN: cache using distributed servers to deliver static context globally & dynamic context that's popular
  - can be used to cache API responses
  - eviction policy: also set a TTL (time to live)

## Robust Python

- `Homeless` - type checkers like mypy: check coverage with `mypy --html-report ./mypy_report ./my_project`
- `Traffic Lights` - enums: define a set of named values `from enum import Enum; class Color(Enum): RED; GREEN; BLUE
- `Barrys` - classes: for invariants - properties taht must remain unchanged throughout the lifecycle of an instance (e.g., connection to S3)
- `Asian Door` - protocols: provide a way to define a set of methods and properties that a class must implement
- `Guard` - pydantic: integrated data validation 
- `Food` - test coverage: test the coverage
- `Checkout` - pydeps: get a dependency graph
- `French Bakery` - Poetry & Precommit

## High Performance Python

- `Steep` - timeit, cProfile, line_profiler, memory_profiler, memit
- `Seattle Times` - generators, numpy, pandas, numexpr
- `Race Cars` - compiling to C: cython, Numba, PyPy
- `Movable Doors` - async: do different things at the same time
- `Garage` - multiprocessing: doings same thing in parallel
- `Flowers` - bloom filters: tests whether an element is part of a set, with a possibility of false positives but no false negatives
- `Onni Bell` - tries & dawg: storing many strings very efficiently

## Deep Dives

### Redis 
- `` - Definition: data structure store w/ very readable commands
- `` - Config: single-node "main", replicated "main -> secondary", cluster "client -> main 1/2/3 -> secondary 1/2/3"
- `` - Performance: handles O(100k) writes per second, reads in microsecs
- `` - Use Case:
  - as cache: key & vals map to Redis, use a TTL to keep size manageable; hot-key issue
  - distributed locks: use atomic increment (incr.) + TTL; increment if you acquire lock; else retry later
  - leaderboards: Redis sorted sets can be queried in log time, e.g. for keyword search in tweets
  - rate limiting: e.g. fixed-window limiting where number of requests shall not exceed N in time W
  - proximity search: geodadd & georadius runs in O(N + log(M))
  - event sourcing: Redis streams are append only and can be used as a queue
- `` - shortcomings: hot key issue: too much load on one popular item
- `` - remedy: 
  - add in-memory cache in clients to reduce load on Redis
  - store same data in mutliple keys & randomize reqs
  - add read replica instances

### Kafka
- `` - elements:
  - producer: puts events (soccer goals, substitutions etc) in queue
  - consumer: server that reads events off queue
  - distribution strategy: required to structure messages sent & received & use consumer groups to scale
  - topics: make consumers only listen to updates on soccer vs. basketball
- `` - architecture: 
  - cluster has multiple brokers: responsible for storing data & serving clients
  - each borker has n partitions: ordered, immutable sequence of messages (like a logfile)
  - every event is appended to logfile which is immutable, efficient and scalable
  - offset is used to keep track of messages (events) in a partition
- `` - model: consumers read from Kafka topics either as the arrive (push) or by polling in intervals (pull)
- `` - use cases:
  - async processing: Youtube video processing, orderly reservation processing (Ticketmaster), decouple prod from condumrt
  - streaming: continued immediate processing (ad click generator), messages need to be processed by multiple consumers
- `` - facts: 
  - only store less than 1MB per event
  - horizontal scaling w/ more brokers & right amount of partitions
  - scale topics (soccer is busy so many partitions while few for chess)
- `` - hot partitions handling: 
  - random partitioning w/o key: guarantees even distribution
  - random salting: adda a timestamp to partition key
  - compound key: use combo of id, region, etc.
  - back pressure: slow down service if load too high -> UBER, Ticketmaster waiting rooms

### Dynamo DB
- `` - data model:
  - tables: top-level structure w/ mandatory primary keys
  - items: row in a RDBMS
  - attributes:key-value pair within item
- `` - keys:
  - primary key and optional sort key for partitioning on range queries (chatID as pk, and timestamp as sort key)
  - primary keys & partition keys use consistent hashing function
  - sort keys: use B-trees, a self-balancing tree
  - GSI: global secondary key to query different cols when you need more efficiency
- `` - data access:
  - scan: reads every item & reponds paginated -> expensive
  - query: retrieves based on pk or secondary key using GraphQL
  - under hood: secondary indexes are implemented as separate tables
- `` - CAP:
  - eventual consistency: highest avail and lowest latency but reads can be stale
  - strong consistency: all reads reflect most recent write but have higher latency
- `` - security: encrypted at rest, IAM allows finegrained roles, VPC provides access limit
- `` - pricing: 
  - on-demand for unpredictable load
  - provisioned for constant load billed hourly
- `` - extension:
  - DAX is in-memory db
  - Streams as a built-in support for change data capture (CDC)
  - Consistency w/ ElasticSearch (building full text search on top)
- `` - limits:
  - cost: expensive if many reads/writes
  - complex queries not feasible
  - data modeling constraints
  - vendor lock-in
