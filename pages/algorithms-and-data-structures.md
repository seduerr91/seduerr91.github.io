---
title: Algorithms and Data Structures
tags: [Mental Castle]
style: fill
color: danger
description: Vienna
---



## District 1: Systems Design (Senacor Office)

- : Steps: 
- : Scope the problem: build what interviewer wants: what, who, where, when
- : Make reasonable assumptions
- : Draw major components
- : Identify key issues (bottlenecks)
- : Redesign key issues
- : Concepts: 
- : Horizontal scaling: adding additional resources 
- : Vertical scaling: propping up existing resources, easier
- : Load Balancing: distribute server load so it doesn't crash by cloning
- : Denormalization: adding redundant info to speed up reads (because joints are slow)
- : NoSQL: does not support joints
- : Sharding: splitting data across multiple machines
- : vertical: by function, e.g. one table for profiles, one for messages
- : key-based: some part of data, m mod N (N: number of servers)
- : directory-based: maintain a look-up table
- : Caching: provide simple key-value pairing (query & result) between application, and data store
- : Async processing: for slow operations (like top forum posts, loading DNN)
- : Network metrics: 
- : bandwidth: max amount of data in t
- : latency: time from start to end
- : throughput: actually amount of data in t
- : Map/reduce: map takes data & returns key: value, reduce takes key:value and reduces it e.g., key: sum(values)
- : RDD (resilient distributed data set): each record is an independent entity/object | row-wise
- : Data frame (DF): perform transformations on columns | column-wise

- : Spark: 
- : Analytics factory: gains capacity by scaling horizontally
- : Instructed by a master, executors perform the work
- : Cluster manager plans the capacity when receiving the driver programme 
- : Lazy evaluation: Spark only works when it needs to report results .show()

- : Considerations:
- : Failure: plan for test cases
- : Availability: % system is operational
- : Reliability: % that systems is operational
- : Read-heavy: consider caching
- : Write-heavy: consider queuing writes
- : Security: plan for test cases


## District 2: Object-Oriented Design (Salztor-Bridge)

- : Approach: 
- : Handle ambiguity: who is going to use system & how, when, what, where, why
- : Define core objects: mostly nouns
- : Analyze relationships: 1-to-1, 1-to-many, many-to-many
- : Identify actions: mostly verbs of object
- : Design Patterns:
- : Singleton: ensures that a class has only one instance (e.g. restaurant)
- : Factory: offers interface for creating instance of a class with subclass deciding which class to instantiate (e.g. pipeline)
  
## District 2: API Calls (RDG)

- : Get: retrieve resource
- : Post: create new resource
- : Put: edit / update
- : Delete: remove resource

## District 3: Sorting & Searching Algorithms (Stadtpark)

- : Bubble Sort: swap element "previous" and "current" if current < previous, continue
- : Selection Sort: find smallest element, and swap with first element
- : Merge Sort: divide arrays in half, sort halves, merge back
- : Quick Sort: pick "random" element, divide array so that smaller numbers left "random", and great numbers right
- : Radix Sort: for ints, group digits of numbers
- : BST: in sorted array, compare x to mid, left if lower, right if higher

## District 4: LinkedList, Stack and Queue (Belvedere)

- : LinkedList: 
- : val, next; 
- : runner technique
- : Stack: dishes - : LIFO
- : pop (get first item), push (add item to top)
- : Queue: queue - : FIFO
- : add (add last item), remove (delete first item)

## District 5: Math & Logic (Paul's home)

- : Prime numbers: iterate from 2 to sqrt(n)
- : Probability of A&B: P(A and B) = P(B given A) * P(A) (Buenos Aires Airport)
- : Probability of A or B: P(A) + P(B) - : P (A and B)
- : Independence: one happening tells you nothing about the other
- : Mutual exclusivity: if one happens, the other cannot happen

## District 6: Recursion (Chili & Tofu)

- : Recursion: solutions are build off smaller solutions
- : Bottom-up: solve problems for simple case
- : Top-down: divide problem for case N into subproblems
- : Half-half: divide data in half, binary search
- : Dynamic programming: cache repeated calls from recursive algos

## District 7: Trees, Heaps and Graphs

- : Tree
- : Every tree has a root node
- : With one or more child nodes
- : A leaf is a node without children
- : Binary search tree: has all left descendants <= n < all right descendants
- : Traversal: in- : / pre- : / post-order
- : Binary trees:
- : Complete: every level is fully filled (except for last)
- : Full: no nodes have only one child
- : Perfect: complete & full 
- : Min-Heap: complete binary tree & each node is smaller than its children -> root is minimum
- : Graphs: 
- : Collection of nodes with edges
- : Directed or undirected
- : Acyclic graph has no circle
- : Adjacency list: every vertex (node) stores its adjacent vertices
- : Adjacency matrix: NxN bool matrix
- : Graph search: 
- : DFS: start at root, and explore each node completely > visit every node
- : BFS: start at root, and explore each neighbor completely > find shortest path
- : Bidirectional search: using to BFS to find the shortest path

## District 8: Testing

- : Look for:
- : Test cases: Normal, extreme, null/illegal, strange
- : Big picture: Amazon's priority is not to charge twice
- : Piece integration: Google sheets integration with mail
- : Organization: Break into categories
- : Practicality: Create a testing plan
  
- : Real world object - : Paperclip:
- : Who will use it? Teacher
- : What are the use cases? exams of students
- : What are the usage bands? temperature, 30 pages
- : Stress / failure condition? 60 + pages
- : How to perform testing? Can't sit 5 years
  
- : Software - : Parental Control:
- : Who will use it? Children, parents
- : What are the use cases? blocking porn, gambling
- : What are the usage bands? Block more
- : Stress / failure condition? Child has access
- : How to perform testing? Black or Whitebox, break into components

## District 10: Arrays & Strings (Train Station)

- : Hash tables: key mod 13
- : Array list: size is defined upon creation
- : Stringbuilder: creates resizable array of small strings

## District 13: Big O (Grig's flat)

- : Efforts:
- : logN: binary search
- : NlogN
- : N
- : N^2
- : 2^N, recursion if f(n-1) + f(n-2)
- : O(branches ^ depth)
- : Rules: 
- : Drop constant: O(2N) > O(N)
- : Drop non-dominant terms: O(N^2 + N) > O(N^2)
- : Multipart algos: 
- : Add runtimes: for a in a, for b in b > O(A+B) > O(N)
- : Multiply runtimes: for a (for b in b) in a > O(A * B) > O(N^2)

## District 14: Pull Requests (Haralds Home)

- : Fork project
- : Clone locally
- : Create a branch
- : Make changes
- : Push back to repo
- : Click 'compare & pull request'

## District 19: Threads & Locks

- : Threads: in a process share same memory space
- : Sync: restrict access to shared resources
- : Locks: sync access to data by associating resources with a lock
- : Deadlock: one threat waits for object lock to be released while others do the same
- : conditions: 
- : mutual exclusion
- : hold & wait
- : no preemption
- : circular wait


## U6 to Donauinsel: Clean Code - : Meaningful names

- : Use intention-revealing names: e.g., elapsedTimeinDays = 6
- : Avoid disinformation: grouping of accounts shouldn't refer to AccountsList
- : Make meaningful distinctions: use source and target, don't use noise words, don't use variable, list
- : Use pronounceable names: dtarcrd > datarecord
- : Use searchable names: Work_Days_Per_Week = 5
- : Avoid mental mapping: i, j,k is fine, not more tho
- : Class names: should have noun phrase like Customer
- : Method names: should be a verb or verb phrase like createAccount
- : Pick one per concept: instead of get/retrieve/fetch only use get if same concept
- : Use solution domain: use computer science, ML terms
- : Use problem domain: use problem space if you don't have terms
- : Add meaningful context: create a class Address for street, state, name, firstName

## U1 to HBF: Functions

- : Small: 20 - : 30 lines
- : Blocks: code within if/else/while should be one line long
- : Do one thing: if you can extract a sub-function with a diff name, you do more
- : Arguments: 
- : Monadic: fileExists('file.csv')
- : Flag arguments: don't pass bool values
- : Dyadic/Triads: try to avoid
- : Objects: reduce number by creating objects
- : Command-Query separation: should either do something or answer something
- : Extract try-catch blocks: outsource to own funcs
- : Don't repeat yourself: bloats code & creates spaces for errors
  
## U4 to Schönbrunn: Comments

- : Don't comment on bad code.
- : Explain yourself in code: if(employee.isElligibleForFullBenefits())
- : Good comments: 
- : legal comments: copyright, authorship
- : informative comments: explaining regex
- : explanation of intent
- : warning of consequences: Don't run until you want to wait
- : ToDo comments
- : Avoid nonlocal info: put comment to place where it happens

