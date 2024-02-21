---
title: Algorithms and Data Structures
tags: [Mental Castle]
style: fill
color: secondary
description: Vienna
---

A Walk through beautiful Vienna

## District 1: Systems Design (Senacor Office)

- Design Steps: 
- `Senacor Office`: Scope the problem: build what interviewer wants: what, who, where, when
- `Japanese Embassy`: Make reasonable assumptions
- `Votivkirche`: Draw major components
- `Fancy Spar`: Identify key issues (bottlenecks)
- `U5 Site`: Redesign key issues
- `Town Hall`: Concepts: Horizontal scaling: adding additional resources 
- `Burgtheater`: Vertical scaling: propping up existing resources, easier
- `Parliament Cupola`: Load Balancing: distribute server load so it doesn't crash by cloning
- `Law Palace`: Denormalization: adding redundant info to speed up reads (because joints are slow)
- `VOGA Club`: NoSQL: does not support joints
- `Parliament`: Sharding: splitting data across multiple machines
- `Volksgarten`: vertical: by function, e.g. one table for profiles, one for messages
- `Hofburg`: key-based: some part of data, m mod N (N: number of servers)
- `Kanzleramt`: directory-based: maintain a look-up table
- `Hofburg`: Caching: provide simple key-value pairing (query & result) between application, and data store
- `Hofreiterschule`: Async processing: for slow operations (like top forum posts, loading DNN)
- `Raiba @ Graben`: Network metrics: 
- `Full Square`: bandwidth: max amount of data in t
- `Real Square`: latency: time from start to end
- `Time to Raiba`: throughput: actually amount of data in t
- `Meinl`: Map/reduce: map takes data & returns key: value, reduce takes key:value and reduces it e.g., key: sum(values)
- `Brunnen`: Considerations: Failure: plan for test cases
- `Green Habsburghouse`: Availability: % system is operational
- `Do & Co`: Reliability: % that systems is operational
- `Stephansdom`: Read-heavy: consider caching
- `Tower queue of Dom`: Write-heavy: consider queuing writes
- `Security Peeps at Dom`: Security: plan for test cases


## District 2: Object-Oriented Design (Salztor-Bridge)

- `Salztorbruecke`: Approach: Handle ambiguity: who is going to use system & how, when, what, where, why
- `RLB`: Define core objects: mostly nouns
- `eforce`: Analyze relationships: 1-to-1, 1-to-many, many-to-many
- `IBM`: Identify actions: mostly verbs of object
- `Uniqa`: Design Patterns: Singleton: ensures that a class has only one instance (e.g. restaurant)
- `Sternwarte`: Factory: offers interface for creating instance of a class with subclass deciding which class to instantiate (e.g. pipeline)
  
## District 2: API Calls (RDG)

- `coffee`: Get: retrieve resource
- `my office`: Post: create new resource
- `Susanne`: Put: edit / update
- `Dietmar`: Delete: remove resource
- `Harald & Seb`: Object orientation: Difference of state & function
- `Marcus Presich`: Everything is an object in Python


## District 3: Sorting & Searching Algorithms (Stadtpark)

- `Enter`: Bubble Sort: swap element "previous" and "current" if current < previous, continue
- `Go to Statue`: Selection Sort: find smallest element, and swap with first element
- `Leave to U4`: Merge Sort: divide arrays in half, sort halves, merge back
- `German Music Hall`: Quick Sort: pick "random" element, divide array so that smaller numbers left "random", and great numbers right
- `Trump Hotel`: Radix Sort: for ints, group digits of numbers
- `Ice-Skating Rink`: BST: in sorted array, compare x to mid, left if lower, right if higher

## District 3: Stacks and Queues (Landstrasse )

- `S7`: Stack: dishes - : LIFO - pop (get first item), push (add item to top)
- `Billa`: Queue: queue - : FIFO - add (add last item), remove (delete first item)

## District 4: LinkedList, Stack and Queue (Belvedere)

- `Belevedere`: LinkedList: represents sequence of nodes (singly or doubly linked)
- `Russian Monument`: class Node: val, next; 
- `French Embassy`: class Node runner technique: Have two runners, one much faster

## District 5: Math & Logic (Paul's home)

- `Paul's old flat`: Prime numbers: iterate from 2 to sqrt(n)
- `Pilgramgasse`: Probability of A&B: P(A and B) = P(B given A) * P(A) (Buenos Aires Airport)
- `Unemployment Center`: Probability of A or B: P(A) + P(B) - : P (A and B)
- `Naschmarkt Foods`: Independence: one happening tells you nothing about the other
- `Naschmarkt Restaurants`: Mutual exclusivity: if one happens, the other cannot happen

## District 6: Recursion (Chili & Tofu)

- `Chili & Tofu`: Recursion: solutions are build off smaller solutions
- `Karo flat up`: Bottom-up: solve problems for simple case
- `Karo flat down`: Top-down: divide problem for case N into subproblems
- `Gumpendorfer Stop`: Half-half: divide data in half, binary search
- `AIDS Hilfe`: Dynamic programming: cache repeated calls from recursive algos

## District 7: Trees, Heaps and Graphs (Ring)

- `Ring`: Tree - data structure composed of nodes
- `Volkstheater`: Every tree has a root node
- `Stiftsgasse`: With zero or more child nodes
- `Siebenstern`: Tree cannot contain cycles
- `Neubaugasse`: A binary tree's nodes have each up to two children, ternary trees have three
- `Zieglergase`: A node is a leaf if it has no children
- `Kaiserstrasse`: Binary search tree: has all left descendants <= n < all right descendants

- `Felzl`: Balanched vs. unbalanced: red-black vs AVL trees.
- `Billa`: Complete binary tree: every level (except perhaps last) is fully filled
- `Denn's`: Full binary tree: no nodes have only one child (0 or 2)
- `Prosi`: Perfect binary tree: full & complete

- `Burggasse` : Traversal: in-order : left > current node > right branch
  - `-> Heiligenstadt` pre-order: current node before children
  - `-> Schoenbrunn` post-order: root node is last visited

- `Polizei` : Min-Heap: complete binary tree & each node is smaller than its children -> root is minimum
- `55/3` : Graphs: Collection of nodes with edges
- `Bell` : Directed or undirected
- `Entrance` : Acyclic graph has no circle
- `Door (to trashes)` : Adjacency list: every vertex (node) stores its adjacent vertices
- `Trash` : Adjacency matrix: NxN bool matrix
- `Steps` : Graph search: DFS: start at root, and explore each node completely > visit every node
- `Postal boxes` : BFS: start at root, and explore each neighbor completely > find shortest path
- `Bell 2` : Bidirectional search: using to BFS to find the shortest path

## District 8: Testing (Fethi)

- `Fethi`: Interviewer looks for:
- `Felzl`: Test cases: Normal, extreme, null/illegal, strange
- `Hummel Cafe`: Big picture: Amazon's priority is not to charge twice
- `Hammerling-Park`: Piece integration: Google sheets integration with mail
- `Volkskundemuseum`: Organization: Break into categories
- `Altes AKH`: Practicality: Create a testing plan
  
- `Tunnel`: Real world object - : Paperclip:
- Who will use it? Teacher
- What are the use cases? exams of students
- What are the usage bands? temperature, 30 pages
- Stress / failure condition? 60 + pages
- How to perform testing? Can't sit 5 years
  
- `Polizei Fuhrmann`: Software - : Parental Control:
- Who will use it? Children, parents
- What are the use cases? blocking porn, gambling
- What are the usage bands? Block more
- Stress / failure condition? Child has access
- How to perform testing? Black or Whitebox, break into components

- `Theater Josefstadt`: Troubleshooting: 
  - Understand scenario: how long, which version, consistently, error report
  - Problem breakdown: break into testable steps
  - Create specific tests: think of walking a customer through

## District 10: Arrays & Strings (Train Station)

- `Bahnhof`: Hash tables: key mod 13
- `Erste Bank`: Array list: size is defined upon creation
- `Tennis Arsenal`: Stringbuilder: creates resizable array of small strings

## District 13: O-Notation (Grig's flat)

- `Elevator`: Runtime efforts: logN: binary search
- `Door`: NlogN
- `Living room`: N
- `Kitchen`: N^2
- `Toilet`: 2^N, recursion if f(n-1) + f(n-2)
- `Children`: O(branches ^ depth)
- `Hallway`Cost: big O (upper limit)
- `Grigs room`: big Omega (lower limit)
- `Bathroom`: big Theta (bands)
- `Police in 13th`: Rules: Drop constant: O(2N) > O(N)
- `Billa`: Drop non-dominant terms: O(N^2 + N) > O(N^2)
- `Spar`: Multipart algos: Add runtimes: for a in a, for b in b > O(A+B) > O(N)
- `Kebab`: Multiply runtimes: for a (for b in b) in a > O(A * B) > O(N^2)

## District 14: Pull Requests (Haralds Home)

- `Entrance`: Fork project
- `Kitchen`: Clone locally
- `Eating`: Create a branch
- `Couch`: Make changes
- `Grass`: Push back to repo
- `Office`: Click 'compare & pull request'

## District 19: Threads & Locks

- `U4 Heiligenstadt`: Threads: in a process share same memory space
- `Bakery`: Sync: restrict access to shared resources
- `Billa`: Locks: sync access to data by associating resources with a lock
- `RBI`: Deadlock: one threat waits for object lock to be released while others do the same
- `RSG Main`: conditions: mutual exclusion: there is limited access to one resource
- `Posch New`: hold & wait: processing holding resources can request more
- `Posch Old`: no preemption: one process cannot function without the other
- `Mensa`: circular wait: two ore more processes form a circular chain


## Additional Concepts

- Difference between RDD and DataFrame
    - RDD (resilient distributed data set): each record is an independent entity/object | row-wise
    - Data frame (DF): perform transformations on columns | column-wise
- Spark: 
    - Analytics factory: gains capacity by scaling horizontally
    - Instructed by a master, executors perform the work
    - Cluster manager plans the capacity when receiving the driver programme 
    - Lazy evaluation: Spark only works when it needs to report results .show()
