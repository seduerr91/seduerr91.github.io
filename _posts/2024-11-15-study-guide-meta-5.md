---
title: Meta Leetcode Study Guide 5
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

### Problem 121: Best Time to Buy and Sell Stock (Medium but actually Easy)

**Problem Statement:**

Given an integer array `prices`, where `prices[i]` is the price of a given stock on the i-th day, calculate the max profit from completing one transaction. If no profit is possible, return 0.

**Example:**

Input: `prices = [7,1,5,3,6,4]`
Output: `5`

**Solution:**

```python
def maxProfit(prices: list) -> int:
    min_price = float('inf')
    max_profit = 0
    
    for price in prices:
        if price < min_price:
            min_price = price
        elif price - min_price > max_profit:
            max_profit = price - min_price
    
    return max_profit

# O-Notation: O(n)
# n = number of price entries
# - Single traversal for continuous update of min and profit calculations.
```

**Explanation:**
Track lowest prices so far with iterative scanning to determine feasible sale and purchase moments. Incrementally adjust max potential profit based on minute differences observed, ensuring captured results.

---

### Problem 249: Group Shifted Strings (Easy)

**Problem Statement:**

Group strings that belong to the same shifting sequence, where shifting a letter means moving from 'a' to 'b', 'b' to 'c', ..., and 'z' to 'a'.

**Example:**

Input: `strings = ["abc","bcd","acef","xyz","az","ba","a","z"]`
Output: `[["abc","bcd","xyz"],["acef"],["az","ba"],["a","z"]]`

**Solution:**

```python
from collections import defaultdict

def groupStrings(strings: list) -> list:
    def shift_key(s):
        return tuple(((ord(char) - ord(s[0])) % 26) for char in s)
    
    groups = defaultdict(list)
    
    for string in strings:
        groups[shift_key(string)].append(string)
    
    return list(groups.values())

# O-Notation: O(n * k)
# n = number of strings, k = average length of Strings
# - Constructs a unique key for each string, grouping them by shifts.
```

**Explanation:**
Key strings by constructing tuples representing character shifts from a base position. Use tuple keys to aggregate strings within the same shifting frame, thus aligning them into groups of shifted sequence equivalence.

---

### Problem 253: Meeting Rooms II (Medium)

**Problem Statement:**

Given an array of meeting time intervals, implement an algorithm to determine the minimum number of conference rooms required.

**Example:**

Input: `intervals = [[0, 30],[5, 10],[15, 20]]`
Output: `2`

**Solution using Heap:**

```python
import heapq

def minMeetingRooms(intervals: list) -> int:
    if not intervals:
        return 0
    
    intervals.sort(key=lambda x: x[0])
    
    heap = []
    heapq.heappush(heap, intervals[0][1])
    
    for i in range(1, len(intervals)):
        if intervals[i][0] >= heap[0]:
            heapq.heappop(heap)
        
        heapq.heappush(heap, intervals[i][1])
    
    return len(heap)

# O-Notation: O(n log n)
# n = number of intervals
# - Sorting with concurrent heap adjustments for resource efficient assignments.
```

**Explanation:**
Sort intervals by start time, using a min-heap to track end time of meetings. As meetings complete, free up corresponding rooms, maintaining a count of active meetings overlapping or newly started.

---

### Problem 283: Move Zeroes (Medium but actually Easy)

**Problem Statement:**

Given an array `nums`, write a function to move all `0`s to the end while maintaining relative order of non-zero elements.

**Example:**

Input: `nums = [0,1,0,3,12]`
Output: `[1,3,12,0,0]`

**Solution:**

```python
def moveZeroes(nums: list) -> None:
    last_non_zero_found_at = 0
    
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero_found_at], nums[i] = nums[i], nums[last_non_zero_found_at]
            last_non_zero_found_at += 1

# O-Notation: O(n)
# n = number of elements in nums
# - Linear traversal efficiently positions non-zero elements upfront.
```

**Explanation:**
Utilize two pointers, anchoring non-zero transfers as one iterator processes the entire list. This efficiently rearranges in-place, retaining ordered sequencing as zeroes transition backward.

---

### Problem 378: Kth Smallest Element in a Sorted Matrix (Medium but actually Hard)

**Problem Statement:**

Given a `n x n` matrix sorted in ascending order both row-wise and column-wise, return the k-th smallest element.

**Example:**

Input: `matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8`
Output: `13`

**Solution using Min-Heap:**

```python
import heapq

def kthSmallest(matrix: list, k: int) -> int:
    n = len(matrix)
    min_heap = [(matrix[i][0], i, 0) for i in range(n)]
    heapq.heapify(min_heap)
    
    for _ in range(k - 1):
        value, row, col = heapq.heappop(min_heap)
        if col + 1 < n:
            heapq.heappush(min_heap, (matrix[row][col + 1], row, col + 1))
    
    return heapq.heappop(min_heap)[0]

# O-Notation: O(k log n)
# Where `k` is k-th element browsing, and `n` is the number of rows.
```

**Explanation:**
Leveraging the property of the sorted matrix, initialize a min-heap with the first element of each row. Extract and replenish the heap until the desired k-th element arises, effectively traversed via min-heap properties.

---

### Problem 381: Insert Delete GetRandom O(1) - Duplicates allowed (Medium)

**Problem Statement:**

Implement a data structure that supports inserting, removing, and getting random elements in average O(1) time. It should support duplicates.

**Solution:**

```python
import random
from collections import defaultdict

class RandomizedCollection:
    def __init__(self):
        self.nums = []
        self.indices = defaultdict(set)

    def insert(self, val: int) -> bool:
        self.indices[val].add(len(self.nums))
        self.nums.append(val)
        return len(self.indices[val]) == 1
    
    def remove(self, val: int) -> bool:
        if not self.indices[val]:
            return False
        remove_idx = self.indices[val].pop()
        last_val = self.nums[-1]
        self.nums[remove_idx] = last_val
        if self.indices[last_val]:
            self.indices[last_val].add(remove_idx)
            self.indices[last_val].remove(len(self.nums) - 1)
        self.nums.pop()
        return True
    
    def getRandom(self) -> int:
        return random.choice(self.nums)

# O-Notation:
# - Insert: Average O(1) due to list append and hash map key insertion.
# - Remove: Average O(1) because of index swapping tactic.
# - Get Random: O(1) due to random choice operation.
```

**Explanation:**
The `RandomizedCollection` effectively manages duplicates using a set for indices to quickly access element positions. Insertions are straightforward, while removals involve clever swaps with the last element, thereby maintaining O(1) time complexity.

---

### Problem 708: Insert into a Sorted Circular Linked List (Hard)

**Problem Statement:**

Given a node from a sorted circular linked list, insert a new integer into the list such that it remains sorted.

**Example:**

Input: A linked list and a value to insert.

**Solution:**

```python
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

def insert(head: Node, insertVal: int) -> Node:
    new_node = Node(insertVal)

    if not head:
        new_node.next = new_node
        return new_node
    
    cur = head
    while True:
        if (cur.val <= insertVal <= cur.next.val) or \
           (cur.val > cur.next.val and (insertVal < cur.next.val or insertVal > cur.val)) or \
           cur.next == head:
            new_node.next = cur.next
            cur.next = new_node
            break
        cur = cur.next

    return head

# O-Notation: O(n)
# n = number of nodes in the list
# - Traversing the list once ensures the correct insertion.
```

**Explanation:**
The insertion checks various cases: standard insertion between two values, or at the start/end of negligibly wrapped sequences. Special care is given when providing insertion at list boundary or entirely new list scenarios.

---

### Problem 934: Shortest Bridge (Medium)

**Problem Statement:**

Given a 2D grid of 0's and 1's where two islands (1's) are separated by water (0's), return the shortest distance to connect the two islands.

**Example:**

Input: `[[0,1],[1,0]]`
Output: `1`

**Solution using BFS:**

```python
from collections import deque

def shortestBridge(A: list) -> int:
    def get_island():
        for r in range(len(A)):
            for c in range(len(A[0])):
                if A[r][c]:
                    return r, c
        return None

    def dfs(r, c):
        if 0 <= r < len(A) and 0 <= c < len(A[0]) and A[r][c] == 1:
            A[r][c] = -1
            queue.append((r, c))
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

    def bfs():
        while queue:
            r, c, dist = queue.popleft()
            for dr, dc in ((1, 0), (0, 1), (-1, 0), (0, -1)):
                nr, nc = r + dr, c + dc
                if 0 <= nr < len(A) and 0 <= nc < len(A[0]):
                    if A[nr][nc] == 1:
                        return dist
                    elif A[nr][nc] == 0:
                        A[nr][nc] = -1
                        queue.append((nr, nc, dist + 1))
        return -1

    start = get_island()
    queue = deque()
    dfs(start[0], start[1])
    return bfs()

# O-Notation: O(n^2)
# n = dimension size in the grid
# - DFS and BFS are both potentially performing complete grid traversals.
```

**Explanation:**
Firstly, identify one island using DFS to mark its members. Subsequently, leverage BFS to calculate minimal steps from this island's edge towards another, navigating across labeled water paths efficiently.

---

### Problem 1004: Max Consecutive Ones III (Medium)

**Problem Statement:**

Given a binary array `A` and a `K`, return the maximum number of consecutive 1's that can be formed if you can flip at most `K` 0's.

**Example:**

Input: `A = [1,1,0,0,1,1,1,0], K = 2`
Output: `6`

**Solution using Sliding Window:**

```python
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        l = 0
        max_length = 0
        for r in range(len(nums)):
            if nums[r] == 0:
                k -= 1
            while k < 0:
                if nums[l] == 0:
                    k += 1
                l += 1
            max_length = max(max_length, r - l + 1)
        return max_length
        
# O-Notation: O(n)
# n = number of elements in A
# - Single pass with a shifting window boundary operates over the array.
```

**Explanation:**
Expand right window edge continually incorporating 1's and permitted 0 flips until constraints demand a leftward slide. Calculate maximum window emerging during traversal allowing for optimal consecution.

---

### Problem 1011: Capacity To Ship Packages Within D Days (Medium)

**Problem Statement:**

Given weights array for packages and a number of days `D`, find the package-ship capacity to ensure all packages can be shipped within `D` days following constant capacities daily shipment constraint.

**Example:**

Input: `weights = [1,2,3,4,5,6,7,8,9,10], D = 5`
Output: `15`

**Solution:**

```python
def canShip(weights, D, capacity):
    days = 1
    total = 0
    for weight in weights:
        total += weight
        if total > capacity:
            days += 1
            total = weight
    return days <= D

def shipWithinDays(weights: list, D: int) -> int:
    left, right = max(weights), sum(weights)
    
    while left < right:
        mid = (left + right) // 2
        if canShip(weights, D, mid):
            right = mid
        else:
            left = mid + 1
    
    return left

# O-Notation: O(n log sum(weights))
# n = number of weights
# - Binary search over capacity, checking feasibility per step.
```

**Explanation:**
Using binary search, iteratively evaluate midpoints to judge if given capacities suffice the defined day boundary utilizing a summed daily weight bound. This ensures minimal necessary shipment capacity outcome.

---

### Problem 1331: Rank Transform of an Array (Medium)

**Problem Statement:**

Transform an integer array into its rank-featured equivalent by translating each unique element into its position when sorted, starting at 1.

**Example:**

Input: `arr = [40, 10, 20, 30]`
Output: `[4, 1, 2, 3]`

**Solution:**

```python
def arrayRankTransform(arr: list) -> list:
    rank = {}
    for i, num in enumerate(sorted(set(arr))):
        rank[num] = i + 1
    return [rank[num] for num in arr]

# O-Notation: O(n log n)
# n = number of elements in arr
# - Sorting dominates proceedings, with hashmap lookups being direct and quick.
```

**Explanation:**
Transform initial array into a sorted, unique variant to compute ranks which are then mapped back onto original elements generating rank-transformed results swiftly.

---

### Problem 1539: Kth Missing Positive Number (Easy)

**Problem Statement:**

Given a sorted integer array `arr` and an integer `k`, return the k-th missing positive integer.

**Example:**

Input: `arr = [2,3,4,7,11], k = 5`
Output: `9`

**Solution:**

```python
def findKthPositive(arr: list, k: int) -> int:
    missing = []
    current = 1
    i = 0
    while len(missing) < k:
        if i < len(arr) and arr[i] == current:
            i += 1
        else:
            missing.append(current)
        current += 1
    return missing[-1]

# O-Notation: O(n + k)
# n = length of arr
# - Continues till the k-th number is found even while skipping through arr.
```

**Explanation:**
Track sequential checks against the array and accumulate missing entries until the desired K-th one is finalizing the result accordantly.

---

### Problem 1644: Lowest Common Ancestor of a Binary Tree II (Easy)

**Problem Statement:**

Find the lowest common ancestor of two given nodes in a binary tree with the stipulation nodes may not both exist in the tree.

**Example:**

Input: A binary tree and nodes `p` and `q`
Output: Lowest Common Ancestor or Error if either doesn't exist

**Solution:**

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode) -> TreeNode:
    def findLCA(node):
        if not node:
            return None
        if node == p or node == q:
            return node
        
        left = findLCA(node.left)
        right = findLCA(node.right)
        
        if left and right:
            return node
        return left if left else right
    
    lca = findLCA(root)
    
    def exists(node, target):
        if not node:
            return False
        if node == target:
            return True
        return exists(node.left, target) or exists(node.right, target)
    
    if (exists(root, p) and exists(root, q)):
        return lca
    return None

# O-Notation: O(n)
# n = number of nodes in the binary tree
# - Traverses tree twice - once for LCA computation and the second time for node verification.
```

**Explanation:**
This solution enhances standard LCA determination with additional validation to ensure existence of both nodes, safeguarding accurate result delivery even amidst absent node contexts.

---

### Problem 1757: Recyclable and Low Fat Products (Medium)

**Problem Statement:**

Write a SQL query to find products that are both `recyclable` and `low fat`. The `Products` table has columns `product_id`, `low_fats` and `recyclable`. 

**SQL Solution:**

```sql
SELECT product_id
FROM Products
WHERE low_fats = 'Y' AND recyclable = 'Y';
```

**Explanation:**
This SQL query efficiently filters rows based on dual conditions against specified columns in the `Products` table, returning those fully meeting criteria. The relational framework ensures optimal result extraction aligned with structured columnar queries.