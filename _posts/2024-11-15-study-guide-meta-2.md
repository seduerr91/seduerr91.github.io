---
title: Meta Leetcode Study Guide 2
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

### Problem 138: Copy List with Random Pointer (Medium)

**Problem Statement:**

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list.

**Example:**

Input: A complex linked list with additional random pointers.
Output: A deep-copied list resembling the original list.

**Solution - Using Hash Map:**

```python
class Node:
    def __init__(self, x, next=None, random=None):
        self.val = int(x)
        self.next = next
        self.random = random

def copyRandomList(head: 'Node') -> 'Node':
    if not head:
        return None
        
    old_to_new = {}

    current = head
    while current:
        old_to_new[current] = Node(current.val)
        current = current.next
        
    current = head
    while current:
        if current.next:
            old_to_new[current].next = old_to_new[current.next]
        if current.random:
            old_to_new[current].random = old_to_new[current.random]
        current = current.next
    
    return old_to_new[head]

# O-Notation: O(n)
# - Utilize O(n) additional space for the hash map of nodes.

```

**Explanation:**
By leveraging a hash map to map original nodes to their copies, the algorithm constructs copies of each node first, forming next and random links in a second pass.

---

### Problem 680: Valid Palindrome II (Medium)

**Problem Statement:**

Given a string `s`, return `true` if `s` can be a palindrome after deleting at most one character from it.

**Example:**

Input: `s = "abca"`
Output: `True` (remove 'c', 'b')

**Solution:**

```python
def validPalindrome(s: str) -> bool:
    def is_palindrome_range(i, j):
        return all(s[k] == s[j-k+i] for k in range(i, j))
    
    i, j = 0, len(s) - 1
    while i < j:
        if s[i] != s[j]:
            return is_palindrome_range(i + 1, j) or is_palindrome_range(i, j - 1)
        i, j = i + 1, j - 1
    return True

# O-Notation: O(n)
# n = length of the string s
# - Examine the string with at most two full passes (one forward, one range check).

```

**Explanation:**
The two-pointer technique compares matching ends until a discrepancy prompts a check for palindromes from either removing the current left or right character, ensuring a single permissible change.

---

### Problem 528: Random Pick with Weight (Easy)

**Problem Statement:**

Implement the `Solution` class: `Solution(int[] w)` and `int pickIndex()` that picks an index in proportion to its weight in `w`.

**Example:**

Input: `w = [1,3,4]`
Output: probabilistic (most likely index 2 because weight is highest)

**Solution:**

```python
import random

class Solution:
    def __init__(self, w: list):
        self.prefix_sums = []
        current_sum = 0
        for weight in w:
            current_sum += weight
            self.prefix_sums.append(current_sum)
        self.total_sum = current_sum

    def pickIndex(self) -> int:
        target = self.total_sum * random.random()
        low, high = 0, len(self.prefix_sums) - 1
        
        while low < high:
            mid = (low + high) // 2
            if target > self.prefix_sums[mid]:
                low = mid + 1
            else:
                high = mid
        
        return low

# O-Notation: O(n) for init, O(log n) for pickIndex
# - The initialization precomputes prefix sums, allowing O(log n) binary search.
```

**Explanation:**
Constructing a cumulative (prefix) sum array transforms the problem into selecting random numbers across a range, with binary search supporting efficient index resolution, balanced by probability.

---

### Problem 71: Simplify Path (Medium)

**Problem Statement:**

Given a string path, which is an absolute path starting with a slash '/' for a file in a Unix-style file system, convert it to the simplified canonical path.

**Example:**

Input: `path = "/home//foo/"`
Output: `"/home/foo"`

**Solution:**

```python
def simplifyPath(path: str) -> str:
    stack = []
    parts = path.split('/')
    
    for part in parts:
        if part == '' or part == '.':
            continue
        elif part == '..':
            if stack:
                stack.pop()
        else:
            stack.append(part)
    
    return '/' + '/'.join(stack)

# O-Notation: O(n)
# n = length of the path string, processing each part once
```

**Explanation:**
Splitting the path by `"/"` simplifies processing each component for special cases: `.` (current directory), `..` (parent directory), and ignoring extra slashes. A stack efficiently manages directory state through pushes and pops representing navigation.

---

### Problem 791: Custom Sort String (Medium)

**Problem Statement:**

You are given two strings `order` and `str`. All characters of `order` are unique and were sorted in some custom order previously. Permute the characters of `str` so that they match the order given in `order`. Return any permutation of `str` that respects this custom order.

**Example:**

Input: `order = "cba", str = "abcd"`
Output: `"cbad"`

**Solution:**

```python
def customSortString(order: str, s: str) -> str:
    order_index = {char: i for i, char in enumerate(order)}
    return ''.join(sorted(s, key=lambda x: order_index.get(x, len(order))))

# O-Notation: O(n log n)
# n = length of string s
# - The sorted function dominates with O(n log n) complexity, as we sort `s` based on custom keys.
```

**Explanation:**
Create a mapping of characters to their indices from `order`. Utilize Python's sorting with a custom key that assigns a position to each character from `s` for determining their order.

---

### Problem 56: Merge Intervals (Medium)

**Problem Statement:**

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**Example:**

Input: `intervals = [[1,3],[2,6],[8,10],[15,18]]`
Output: `[[1,6],[8,10],[15,18]]`

**Solution:**

```python
def merge(intervals: list) -> list:
    if not intervals:
        return []
    
    intervals.sort(key=lambda x: x[0])
    merged = [intervals[0]]

    for current in intervals[1:]:
        last = merged[-1]
        if current[0] <= last[1]:  # Overlapping
            last[1] = max(last[1], current[1])
        else:
            merged.append(current)
    
    return merged

# O-Notation: O(n log n)
# n = number of intervals
# - Sorting dominates with O(n log n) complexity, followed by a single pass through the sorted list.
```

**Explanation:**
First, sort intervals by their starting value to linearize the merge process. Iteratively compare and merge overlapped intervals while forming the result list of merged intervals.

---

### Problem 543: Diameter of Binary Tree (Medium)

**Problem Statement:**

Given the `root` of a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree, which may or may not pass through the root.

**Example:**

Input: Binary Tree `[1,2,3,4,5]`
Output: `3` (The diameter path is [4,2,1,3] or [5,2,1,3])

**Solution:**

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def diameterOfBinaryTree(root: TreeNode) -> int:
    diameter = 0

    def depth(node):
        nonlocal diameter
        if not node:
            return 0
        left_depth = depth(node.left)
        right_depth = depth(node.right)
        diameter = max(diameter, left_depth + right_depth)
        return 1 + max(left_depth, right_depth)

    depth(root)
    return diameter

# O-Notation: O(n)
# n = number of nodes in the tree
# - Single DFS traversal of the tree computes depths and calculates the diameter.
```

**Explanation:**
The depth-first search (DFS) traverses each branch computing the longest path (diameter) by accumulating left and right depths for each node. The nonlocal `diameter` stores the maximum sum of depths encountered during traversal.

---

### Problem 670: Maximum Swap (Easy)

**Problem Statement:**

Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

**Example:**

Input: `num = 2736`
Output: `7236`

**Solution:**

```python
def maximumSwap(num: int) -> int:
    num = list(str(num))
    last = {int(x): i for i, x in enumerate(num)}
    
    for i, x in enumerate(num):
        for d in range(9, int(x), -1):
            if d in last and last[d] > i:
                num[i], num[last[d]] = num[last[d]], num[i]
                return int(''.join(num))
    return int(''.join(num))

# O-Notation: O(n)
# n = number of digits in num
# - Pass through the number with a scan to construct the last occurrence index map.
```

**Explanation:**
The solution creates a map to track the last positions of each digit, iteratively attempting swaps starting with the leftmost digit for the largest possible outcome. Efficiently determines what swap would yield the highest number by pre-analyzing digits' order.

---

### Problem 921: Minimum Add to Make Parentheses Valid (Medium)

**Problem Statement:**

Determine the minimum number of parenthesis addtions to make a given string valid (all open braces have a corresponding close and vice versa).

**Example:**

Input: `"())"`
Output: `1`

**Solution:**

```python
def minAddToMakeValid(S: str) -> int:
    balance = 0
    unmatched_close = 0

    for char in S:
        if char == '(':
            balance += 1
        else:
            balance -= 1
            if balance < 0:
                unmatched_close += 1
                balance = 0
    
    return balance + unmatched_close

# O-Notation: O(n)
# n = length of the string S
# - Single pass solution counting unmatched parentheses
```

**Explanation:**
Track open/close balance as you iterate through `S`. Every unmatched closing parenthesis encountered is counted for needed additions. Remaining balance post-iteration indicates any unmatched opening braces requiring closure.

---

### Problem 987: Vertical Order Traversal of a Binary Tree (Medium)

**Problem Statement:**

Given the `root` of a binary tree, return its vertical order traversal. From top to bottom and within each vertical column (top to bottom, left to right if same level).

**Example:**

Input:
```plaintext
    3
   / \
  9  20
    /  \
   15   7
```
Output: `[[9], [3, 15], [20], [7]]`

**Solution:**

```python
from collections import defaultdict, deque

def verticalTraversal(root: TreeNode) -> list:
    column_map = defaultdict(list)
    
    queue = deque([(root, 0, 0)])  # root, column, row
    while queue:
        node, column, row = queue.popleft()
        
        if node is not None:
            column_map[column].append((row, node.val))
            queue.append((node.left, column - 1, row + 1))
            queue.append((node.right, column + 1, row + 1))
    
    result = []
    for col in sorted(column_map.keys()):
        column_nodes = sorted(column_map[col], key=lambda x: (x[0], x[1]))
        result.append([val for row, val in column_nodes])
    
    return result

# O-Notation: O(n log n)
# n = number of nodes in the tree
# - Sorting the nodes by columns and rows, each column storing nodes in sorted order.
```

**Explanation:**
Utilizing breadth-first traversal (BFS) along with columns to map node positions, track nodes by their respective grid positions. The resultant data is sorted and grouped by columns with second-order sorting on rows and values for lexicographic order within the vertical slice.

Each solution employs intuitive approaches and appropriate algorithms aimed at simplifying complex operations with a focus on leveraging data structures effectively, thereby optimizing performance.

---

### Problem 1: Two Sum (Hard misunderstood as Easy)

**Problem Statement:**

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. Assume each input would have exactly one solution.

**Example:**

Input: `nums = [2,7,11,15], target = 9`
Output: `[0,1]`

**Solution:**

```python
def twoSum(nums: list, target: int) -> list:
    num_to_index = {}
    for i, num in enumerate(nums):
        if target - num in num_to_index:
            return [num_to_index[target - num], i]
        num_to_index[num] = i
    return []

# O-Notation: O(n)
# n = length of the nums array
# - Each element is visited once, employing hash map for constant-time checks.
```

**Explanation:**
This solution employs a hash map for efficient lookup of each number's complement. It tracks indices and only performs one pass through the list, storing elements indexed positionally as you explore, relying on complement matches for outcomes.

---

### Problem 88: Merge Sorted Array (Easy)

**Problem Statement:**

You are given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array. The number of elements initialized in `nums1` and `nums2` are `m` and `n`, respectively.

**Example:**

Input: `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3`
Output: `nums1 = [1,2,2,3,5,6]`

**Solution:**

```python
def merge(nums1: list, m: int, nums2: list, n: int) -> None:
    last = m + n - 1
    m -= 1
    n -= 1

    while m >= 0 and n >= 0:
        if nums1[m] > nums2[n]:
            nums1[last] = nums1[m]
            m -= 1
        else:
            nums1[last] = nums2[n]
            n -= 1
        last -= 1
    
    while n >= 0:
        nums1[last] = nums2[n]
        n -= 1
        last -= 1

# O-Notation: O(m + n)
# - Process each array element only once, from back to front, maintaining sorted order step-by-step.
```

**Explanation:**
Reverse-fill `nums1` from the back where there's room to place the elements of `nums2` alongside the existing elements. This process ensures merging in-place without requiring additional storage, leveraging sorted order properties.

---

### Problem 125: Valid Palindrome (Easy)

**Problem Statement:**

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Example:**

Input: `s = "A man, a plan, a canal: Panama"`
Output: `True`

**Solution:**

```python
def isPalindrome(s: str) -> bool:
    cleaned = [char.lower() for char in s if char.isalnum()]
    return cleaned == cleaned[::-1]

# O-Notation: O(n)
# n = length of cleaned string
# - Split into clean and reversed comparison, linear work driven by string length.
```

**Explanation:**
The solution filters the input string to include only alphanumerics, then compares it with its reverse to determine if it reads the same forward and backward, ensuring case-insensitive and format-neutral checks.
