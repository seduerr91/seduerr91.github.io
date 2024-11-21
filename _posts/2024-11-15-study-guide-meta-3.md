---
title: Meta Leetcode Study Guide 3
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

### Problem 398: Random Pick Index (Easy)

**Problem Statement:**

Given an integer array `nums` with possible duplicates, randomly output the index of a given target number. You can assume that the numbers in the array are non-negative and that at least one index will satisfy the request.

**Example:**

```plaintext
Input: nums = [1,2,3,3,3], target = 3
Output: Randomly one of [2,3,4] due to probabilities
```

**Solution:**

```python
import random

class Solution:
    def __init__(self, nums: list):
        self.nums = nums

    def pick(self, target: int) -> int:
        indices = [i for i, num in enumerate(self.nums) if num == target]
        return random.choice(indices)

# O-Notation: O(n) for each pick call
# n = number of elements in nums
# - Needs to enumerate and collect indices in worst-case.
```

**Explanation:**
Using a list comprehension, it first collects all indices for the target. Each call to `pick` randomly selects one index from this list, producing uniformly random outcomes as required.

---

### Problem 973: K Closest Points to Origin (Medium)

**Problem Statement:**

Given an array of points `points` and an integer `K`, return the `K` closest points to the origin `(0, 0)`.

**Example:**

Input: `points = [[1,3],[-2,2]], K = 1`
Output: `[[-2,2]]`

**Solution using Heap:**

```python
import heapq

def kClosest(points: list, K: int) -> list:
    return heapq.nsmallest(K, points, key=lambda point: point[0]**2 + point[1]**2)

# O-Notation: O(n log K)
# - Heap solution offering better performance with intrinsic heap operations on k-sized data.
```

**Explanation:**
Leverage `heapq.nsmallest` with a distance-squared lambda key to efficiently retrieve the K smallest (closest) points. The heap regulates the collection size, ensuring optimal memory utilization even with possible large input data sizes.

---

### Problem 23: Merge k Sorted Lists (Medium)

**Problem Statement:**

Merge `k` sorted linked lists into one sorted linked list and return it.

**Example:**

Input: `lists = [[1,4,5],[1,3,4],[2,6]]`
Output: Merged list `[1,1,2,3,4,4,5,6]`

**Solution using Heap:**

```python
from heapq import heappush, heappop, heapify

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: list) -> ListNode:
    min_heap = []
    for index, node in enumerate(lists):
        if node:
            heappush(min_heap, (node.val, index, node))
    
    dummy = ListNode(None)
    current = dummy
    
    while min_heap:
        val, idx, node = heappop(min_heap)
        current.next = ListNode(val)
        current = current.next
        if node.next:
            heappush(min_heap, (node.next.val, idx, node.next))
    
    return dummy.next

# O-Notation: O(N log k)
# N = total number of nodes, k = number of linked lists
# - Manage heap for k list entries, pushing and popping elements.
```

**Explanation:**
The solution uses a min-heap (priority queue) to always merge the smallest element from the heap's top. Each list's current smallest entry is maintained in this maxed-out heap, ensuring logarithmic effort per insertion.

---

### Problem 146: LRU Cache (Hard)

**Problem Statement:**

Design and implement a data structure for Least Recently Used (LRU) cache. It should support `get` and `put` operations in O(1) time complexity.

**Example:**

- `LRUCache cache = new LRUCache(2)`
- `cache.put(1, 1)`
- `cache.put(2, 2)`
- `cache.get(1)` returns `1`
- `cache.put(3, 3)` evicts key `2`
- `cache.get(2)` returns `-1`

**Solution using OrderedDict:**

```python
from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity: int):
        self.cache = OrderedDict()
        self.capacity = capacity

    def get(self, key: int) -> int:
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

# O-Notation: O(1)
# - Both put and get operations run in constant time supported by OrderedDict's optimizations.
```

**Explanation:**
This utilizes Python's `OrderedDict` which retains insertion order while allowing quick reordering with `move_to_end`. It's perfectly suited for implementing the LRU invariant given its easy access and maintainability, effectively dual-managing keys and ordering revocations.

---

### Problem 153: Find Minimum in Rotated Sorted Array (Medium)

**Problem Statement:**

Given a rotated sorted array `nums` (in ascending order), find the minimum element. Assume no duplicate exists in the array.

**Example:**

Input: `nums = [3, 4, 5, 1, 2]`
Output: `1`

**Solution:**

```python
def findMin(nums: list) -> int:
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    
    return nums[left]

# O-Notation: O(log n)
# n = length of nums
# - Binary search is applied by adapting to the rotation.
```

**Explanation:**
Use binary search logic on the sorted array; adjust bounds based on comparison of middle element with the tail element, efficiently converging to the minimum value instead of a linear scan.

---

### Problem 162: Find Peak Element (Medium)

**Problem Statement:**

A peak element in a given array is an element that is greater than its neighbors. Return any peak element's index. Assume elements at each boundary are comparably low.

**Example:**

Input: `nums = [1,2,3,1]`
Output: `2` (Index of peak number `3`)

**Solution:**

```python
def findPeakElement(nums: list) -> int:
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    
    return left

# O-Notation: O(log n)
# n = length of nums
# - Binary search achieves efficient locating through strategic elimination.
```

**Explanation:**
Binary search adapts via evaluating mid-index elements against their neighbors. Appropriate directional shifts inside logically maintain peak vicinity, arriving efficiently at a peak point by termination.

---

### Problem 523: Continuous Subarray Sum (Medium)

**Problem Statement:**

Given a list of integers `nums` and an integer `k`, return `True` if the array has a continuous subarray of size at least two whose elements sum up to a multiple of `k`, otherwise `False`.

**Example:**

Input: `nums = [23, 2, 4, 6, 7], k = 6`
Output: `True`

**Solution:**

```python
def checkSubarraySum(nums: list, k: int) -> bool:
    prefix_sum = 0
    mods = {0: -1}

    for i, num in enumerate(nums):
        prefix_sum += num
        if k != 0:
            mod = prefix_sum % k
        else:
            mod = prefix_sum
        
        if mod in mods and i - mods[mod] > 1:
            return True
        
        if mod not in mods:
            mods[mod] = i
    
    return False

# O-Notation: O(n)
# n = length of nums
# - Traverse with constant-time hash operations per element.
```

**Explanation:**
Utilize cumulative sum mod operations stored in a hash map to record earlier positions. This rapidly identifies a sum divisible by `k` by handling duplicates with spacing checks.

---

### Problem 636: Exclusive Time of Functions (Medium)

**Problem Statement:**

Given `n` functions, which are logged as start or end in a list. Calculate each function's exclusive execution time.

**Example:**

Input: `logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]`
Output: `[3, 4]`

**Solution:**

```python
def exclusiveTime(n: int, logs: list) -> list:
    result = [0] * n
    stack = []
    prev_time = 0
    
    for log in logs:
        fn_id, type, timestamp = log.split(':')
        fn_id, timestamp = int(fn_id), int(timestamp)
        
        if type == 'start':
            if stack:
                result[stack[-1]] += timestamp - prev_time
            stack.append(fn_id)
            prev_time = timestamp
        else:
            result[stack.pop()] += timestamp - prev_time + 1
            prev_time = timestamp + 1
    
    return result

# O-Notation: O(l)
# l = number of logs
# - Each log entry is processed, with stack operations yielding linear performance.
```

**Explanation:**
Using a stack, the solution tracks active function calls. Each timestamp adjustment and stack interaction are managed to account for nested operations logically, ensuring exclusive time accounting.

---

### Problem 766: Toeplitz Matrix (Medium)

**Problem Statement:**

A matrix is Toeplitz if every diagonal from top left to bottom right has the same elements. Check if the matrix is Toeplitz.

**Example:**

Input: `matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]`
Output: `True`

**Solution:**

```python
def isToeplitzMatrix(matrix: list) -> bool:
    for r in range(1, len(matrix)):
        for c in range(1, len(matrix[0])):
            if matrix[r][c] != matrix[r-1][c-1]:
                return False
    return True

# O-Notation: O(m * n)
# m and n are the rows and columns numbers in the matrix.
# - Each element is checked against its predecessor in the prior diagonal.
```

**Explanation:**
Toeplitz matrix verification necessitates confirming each element maintains consistent diagonal sequencing checked against its upper left neighbor. This codifies diagonal continuity effectively.

---

### Problem 1868: Product of Two Run-Length Encoded Arrays (Easy)

**Problem Statement:**

Given two run-length encoded arrays, return their run-length product.

**Example:**

Input: `encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]`
Output: `[[6,3],[6,3]]`

**Solution:**

```python
def findRLEProduct(encoded1: list, encoded2: list) -> list:
    i = j = 0
    res = []
    
    while i < len(encoded1) and j < len(encoded2):
        val1, count1 = encoded1[i]
        val2, count2 = encoded2[j]
        product = val1 * val2
        min_count = min(count1, count2)
        
        if res and res[-1][0] == product:
            res[-1][1] += min_count
        else:
            res.append([product, min_count])
        
        encoded1[i][1] -= min_count
        encoded2[j][1] -= min_count
        
        if encoded1[i][1] == 0:
            i += 1
        if encoded2[j][1] == 0:
            j += 1
    
    return res

# O-Notation: O(m + n)
# m and n are the lengths of encoded1 and encoded2.
# - Traverse each list concurrently based on element counts.
```

**Explanation:**
The approach processes both encoded arrays concurrently by matching and extending common runs or branching terminators, leveraging each encoded sequence's count attribute for correct accumulation.

---

### Problem 15: 3Sum (Medium)

**Problem Statement:**

Find all unique triplets in the array which gives the sum of zero.

**Example:**

Input: `nums = [-1, 0, 1, 2, -1, -4]`
Output: `[[-1, -1, 2], [-1, 0, 1]]`

**Solution:**

```python
def threeSum(nums: list) -> list:
    nums.sort()
    result = []
    
    for i in range(len(nums)):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]: left += 1
                while left < right and nums[right] == nums[right - 1]: right -= 1
                left += 1
                right -= 1
    
    return result

# O-Notation: O(n^2)
# n = number of elements in nums
# - Sorting then leveraging two-pointers for pairs results in quadratic complexity.
```

**Explanation:**
By sorting the array initially, efficiency is gained in managing paired scans via two pointers. Sorting means triplet formation naturally progresses around potential zero sums, ensuring distinct results by order manipulation.

---

### Problem 124: Binary Tree Maximum Path Sum (Medium)

**Problem Statement:**

Given a non-empty binary tree, find the maximum path sum. A path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections (it can be any node to any other node and doesn't have to pass through the root).

**Example:**

Input: Binary Tree `[1,2,3]`
Output: `6`

**Solution:**

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxPathSum(root: TreeNode) -> int:
    max_sum = float('-inf')
    
    def max_gain(node):
        nonlocal max_sum
        if not node:
            return 0
        
        # Recursively call max_gain on the node's children.
        left_gain = max(max_gain(node.left), 0)
        right_gain = max(max_gain(node.right), 0)
        
        # Profit if path includes the current node
        price_newpath = node.val + left_gain + right_gain
        
        # Update global max_sum if the new path's profit is higher
        max_sum = max(max_sum, price_newpath)
        
        return node.val + max(left_gain, right_gain)
    
    max_gain(root)
    return max_sum

# O-Notation: O(n)
# n = number of nodes in the binary tree
# - Each node visited once for computation of gains.
```

**Explanation:**
This solution employs a post-order traversal using recursion to determine the maximum gain obtainable from any given node. The maximum path sum is continually updated by considering potential maximum paths that both include and extend from each node.

---

### Problem 129: Sum Root to Leaf Numbers (Hard assumed to be Hard but Medium)

**Problem Statement:**

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number. Find the total of all root-to-leaf numbers.

**Example:**

Input: A tree `[1,2,3]` produces the sum of `12 + 13 = 25`.

**Solution:**

```python
def sumNumbers(root: TreeNode) -> int:
    def dfs(node, current_sum):
        if not node:
            return 0
        current_sum = current_sum * 10 + node.val
        
        if not node.left and not node.right:  # if it's a leaf
            return current_sum
        
        # Otherwise check both subtrees
        return dfs(node.left, current_sum) + dfs(node.right, current_sum)
    
    return dfs(root, 0)

# O-Notation: O(n)
# n = number of nodes in the binary tree
# - Visit each node once, sum contributions of leaf paths.
```

**Explanation:**
The recursive solution calculates accumulated sums along paths by progressively building numbers through digit multiplication and addition, then returns totals only from leaf endpoints.