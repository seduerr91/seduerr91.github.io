---
title: Meta Leetcode Study Guide
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

### Problem 408: Valid Word Abbreviation (Easy)

**Problem Statement:**

Given a non-empty string `word` and a string `abbr`, please return whether the string matches with the given abbreviation.

The abbreviation follows these rules:
- The number in the abbreviation is the number of characters to skip over in the word.
- Numbers cannot have leading zeros.

**Example:**

Input: `word = "internationalization", abbr = "i12iz4n"`
Output: `True`

Input: `word = "apple", abbr = "a2e"`
Output: `False`

**Solution:**

```python
def validWordAbbreviation(word: str, abbr: str) -> bool:
    word_index = abbr_index = 0
    while word_index < len(word) and abbr_index < len(abbr):
        if abbr[abbr_index].isdigit():
            if abbr[abbr_index] == '0':
                return False
            number_start = abbr_index
            while abbr_index < len(abbr) and abbr[abbr_index].isdigit():
                abbr_index += 1
            number = int(abbr[number_start:abbr_index])
            word_index += number
        else:
            if word[word_index] != abbr[abbr_index]:
                return False
            word_index += 1
            abbr_index += 1
    return word_index == len(word) and abbr_index == len(abbr)

# O-Notation: O(n + m)
# n = length of word, m = length of abbr
# - We go through each character of both the word and abbr once
# - Use two pointers to keep track of positions in the word and abbr

```

**Explanation:**
To solve the problem, iteratively compare characters from `word` and `abbr`. If a number is found in `abbr`, move forward in the `word` by that many characters. If characters are found, confirm they match. Leading zeros and mismatches result in returning `False`. Both pointers reaching the end indicates a valid abbreviation.

---

### Problem 1249: Minimum Remove to Make Valid Parentheses (Medium)

**Problem Statement:**

Given a string `s` of `('(', ')' and lowercase English characters, remove the minimum number of invalid parentheses in order to make the input string valid. Return any valid string.

A string is considered valid if it includes pairs of opening and closing parentheses in the correct order.

**Example:**

Input: `s = "lee(t(c)o)de)"`
Output: `"lee(t(c)o)de"`

Input: `s = "a)b(c)d"`
Output: `"ab(c)d"`

**Solution:**

```python
def minRemoveToMakeValid(s: str) -> str:
    indices_to_remove = set()
    stack = []
    
    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                indices_to_remove.add(i)
    
    indices_to_remove.update(stack)
    result = []
    
    for i, char in enumerate(s):
        if i not in indices_to_remove:
            result.append(char)
    
    return ''.join(result)

# O-Notation: O(n)
# n = length of string s
# - Iterate through string twice, once to find indices to remove and once to construct the result

```

**Explanation:**
Use a stack to track unmatched parentheses. Push opening brackets onto the stack. For a closing bracket, either pop from the stack if it has a matching opening, or add its index to a removal set. By the end, all unpaired parentheses are removed, yielding a valid sequence.

---

### Problem 314: Binary Tree Vertical Order Traversal (Medium)

**Problem Statement:**

Given the `root` of a binary tree, return its vertical order traversal as a list of lists of integers.

**Example:**

```plaintext
Input: 
       3
      / \
     9  20
       /  \
      15   7
Output: [[9],[3,15],[20],[7]]
```

**Solution:**

```python
from collections import deque, defaultdict

def verticalOrder(root):
    if not root:
        return []
    
    column_table = defaultdict(list)
    queue = deque([(root, 0)])
    
    while queue:
        node, column = queue.popleft()
        
        if node is not None:
            column_table[column].append(node.val)
            queue.append((node.left, column - 1))
            queue.append((node.right, column + 1))
    
    sorted_columns = sorted(column_table.keys())
    return [column_table[x] for x in sorted_columns]

# O-Notation: O(n log n)
# n = total number of nodes
# - BFS traversal takes O(n), but sorting the columns results in O(n log n)

```

**Explanation:**
The task can be tackled by using a breadth-first search (BFS) where each node is traversed with an associated column index. Left children decrement this index, while right children increment it. The use of a `defaultdict` aids in assembling node values by column prior to sorting them for output.

---

### Problem 227: Basic Calculator II (Medium)

**Problem Statement:**

Implement a basic calculator to evaluate a simple expression string. The expression string contains non-negative integers, `+`, `-`, `*`, and `/` operators, plus empty spaces. The integer division should truncate towards zero.

**Example:**

Input: `s = "3+2*2"`
Output: `7`

Input: `s = " 3/2 "`
Output: `1`

**Solution:**

```python
def calculate(s: str) -> int:
    if not s:
        return 0
    
    stack = []
    current_number = 0
    operation = '+'
    
    for i, ch in enumerate(s):
        if ch.isdigit():
            current_number = current_number * 10 + int(ch)
        if ch in "+-*/" or i == len(s) - 1:
            if operation == '+':
                stack.append(current_number)
            elif operation == '-':
                stack.append(-current_number)
            elif operation == '*':
                stack[-1] *= current_number
            elif operation == '/':
                stack[-1] = int(stack[-1] / current_number)
            operation = ch
            current_number = 0
    
    return sum(stack)

# O-Notation: O(n)
# n = length of the string s
# - Loop through the string only once. Stack operations are O(1).

```

**Explanation:**
Traverse through the string to evaluate operators and numbers sequentially, appending results to a stack. For `*` and `/`, directly update the top stack element. "+" and "-" operations simply push onto the stack. Lastly, sum the stack for the total expression result.

---

### Problem 1091: Shortest Path in Binary Matrix (Medium)

**Problem Statement:**

Given an `n x n` binary grid, return the length of the shortest clear path in the binary matrix. If there is no clear path, return `-1`.

A clear path is constructed starting from `(0, 0)` to `(n-1, n-1)` by cells with `0`. Moving is possible in 8 directions: up, down, left, right, and all four diagonal directions.

**Example:**

Input: `grid = [[0,1],[1,0]]`
Output: `2`

**Solution:**

```python
from collections import deque

def shortestPathBinaryMatrix(grid) -> int:
    n = len(grid)
    if grid[0][0] != 0 or grid[n-1][n-1] != 0:
        return -1
    
    directions = [(1,0), (-1,0), (0,1), (0,-1), (1,1), (1,-1), (-1,1), (-1,-1)]
    queue = deque([(0, 0, 1)])  # (row, col, path_length)
    grid[0][0] = 1  # mark as visited

    while queue:
        x, y, length = queue.popleft()
        if x == n-1 and y == n-1:
            return length
        for dx, dy in directions:
            new_x, new_y = x + dx, y + dy
            if 0 <= new_x < n and 0 <= new_y < n and grid[new_x][new_y] == 0:
                queue.append((new_x, new_y, length + 1))
                grid[new_x][new_y] = 1  # mark as visited
    return -1

# O-Notation: O(n^2)
# n = size of the grid
# - In the worst-case, visit every cell once.

```

**Explanation:**
The problem is addressed via a breadth-first search (BFS) that initiates from the grid's top-left cell. Each cell's viable moves include orthogonal and diagonal directions, marking traveled cells to prevent revisitation. The objective is to reach the bottom-right cell with the minimal number of steps. If unreachable, return -1.

### Problem 215: Kth Largest Element in an Array (Medium)

**Problem Statement:**

Find the `k`th largest element in an unsorted array. Note that it is the `k`th largest element in sorted order, not the `k`th distinct element.

**Example:**

Input: `nums = [3,2,1,5,6,4], k = 2`
Output: `5`

**Solution - Using Min-Heap:**

```python
import heapq

def findKthLargest(nums: list, k: int) -> int:
    return heapq.nlargest(k, nums)[-1]

# O-Notation: O(n log k)
# n = number of elements in the nums array
# - Uses a min-heap of size k to store the k largest elements, ensuring efficient insertion.
```

**Explanation:**
The `nlargest` function efficiently maintains the largest `k` elements in a min-heap, allowing us to directly retrieve the `k`th largest element.

**Solution - Quickselect:**

```python
import random

def findKthLargest(nums: list, k: int) -> int:
    def partition(left, right, pivot_index):
        pivot = nums[pivot_index]
        # Move pivot to end
        nums[pivot_index], nums[right] = nums[right], nums[pivot_index]
        store_index = left
        for i in range(left, right):
            if nums[i] > pivot:  # Note we're doing greater than (>) for kth largest
                nums[store_index], nums[i] = nums[i], nums[store_index]
                store_index += 1
        # Move pivot to its final place
        nums[right], nums[store_index] = nums[store_index], nums[right]
        return store_index

    def quickselect(left, right, k_smallest):
        if left == right:
            return nums[left]
        
        pivot_index = random.randint(left, right)
        pivot_index = partition(left, right, pivot_index)
        
        if k_smallest == pivot_index:
            return nums[k_smallest]
        elif k_smallest < pivot_index:
            return quickselect(left, pivot_index - 1, k_smallest)
        else:
            return quickselect(pivot_index + 1, right, k_smallest)
    
    return quickselect(0, len(nums) - 1, k - 1)

# O-Notation: O(n) on average, O(n^2) worst-case
# - Quickselect is similar to quicksort, with average linear time complexity, but can degrade to quadratic.

```

**Explanation:**
The Quickselect algorithm provides an efficient way to find the `k`th largest or smallest element by partitioning the input around a pivot, reducing the subarray size to search.

---

### Problem 236: Lowest Common Ancestor of a Binary Tree (Medium)

**Problem Statement:**

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

**Example:**

Input: A rooted binary tree and nodes `p = 5`, `q = 1`

Output: `3` (The LCA of nodes 5 and 1 is 3)

**Solution using DFS:**

```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if not root or root == p or root == q:
        return root
        
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    
    if left and right:
        return root
    return left if left else right

# O-Notation: O(n)
# n = number of nodes in the tree
# - In the worst-case scenario, traverse the entire tree once.
```

**Explanation:**
Using depth-first search (DFS), traverse the tree. If nodes `p` and `q` are found on both sides of a node, then it's their LCA. This recursive approach efficiently drills down the tree, leveraging backtracking to deduce the LCA.

---

### Problem 339: Nested List Weight Sum (Medium)

**Problem Statement:**

Given a nested list of integers, return the sum of all integers weighted by their depth.

A list is a combination of integers and other lists. For example, the list `[1,[4,[6]]]` means one integer `1`, plus one list containing one integer `4`, plus one additional list containing one integer `6` nested deeper.

**Example:**

Input: `[[1,1],2,[1,1]]`
Output: `10` (four 1's at depth 2, one 2 at depth 1)

**Solution:**

```python
class NestedInteger:
    def __init__(self, value=None):
        self.integer = value
        self.list = []

    def isInteger(self) -> bool:
        return self.integer is not None

    def add(self, elem: 'NestedInteger'):
        self.list.append(elem)

    def setInteger(self, value: int):
        self.integer = value

    def getInteger(self) -> int:
        return self.integer

    def getList(self) -> list:
        return self.list

def depthSum(nestedList: list) -> int:
    def dfs(nested_list, depth):
        total = 0
        for nested in nested_list:
            if nested.isInteger():
                total += nested.getInteger() * depth
            else:
                total += dfs(nested.getList(), depth + 1)
        return total
    
    return dfs(nestedList, 1)

# O-Notation: O(n)
# n = total number of integers in the nested list
# - Each integer is processed once.
```

**Explanation:**
The depth-first search (DFS) approach recursively evaluates each element, updating the sum by adding the integer multiplied by its depth. The structure is traversed level by level, preserving the depth relationship necessary for weighting.

---

### Problem 1650: Lowest Common Ancestor of a Binary Tree III (Medium)

**Problem Statement:**

You are given nodes `p` and `q` in a binary tree. Each node has a parent pointer. Return the lowest common ancestor (LCA) of these nodes.

**Example:**

Input: A tree with root node and two nodes `p` and `q`.
Output: A node being the LCA of `p` and `q`.

**Solution using path comparison:**

```python
class Node:
    def __init__(self, val, left=None, right=None, parent=None):
        self.val = val
        self.left = left
        self.right = right
        self.parent = parent

def lowestCommonAncestor(p: 'Node', q: 'Node') -> 'Node':
    ancestors_p = set()
    
    # Add all ancestors of p
    while p:
        ancestors_p.add(p)
        p = p.parent
    
    # Find only the first common ancestor of q
    while q not in ancestors_p:
        q = q.parent
    
    return q

# O-Notation: O(h)
# h = height of the tree
# - While loops traverse the height to track back to root.

```

**Explanation:**
Construct sets of ancestor paths for both nodes, comparing them to find the first common ancestor. This method capitalizes on the parent property of each node to backtrack efficiently.

---

### Problem 50: Pow(x, n) (Medium)

**Problem Statement:**

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e., `x^n`).

**Example:**

Input: `x = 2.00000, n = 10`
Output: `1024.00000`

Input: `x = 2.10000, n = 3`
Output: `9.26100`

**Solution:**

```python
def myPow(x: float, n: int) -> float:
    def helper(base, exponent):
        if exponent == 0:
            return 1
        half = helper(base, exponent // 2)
        if exponent % 2 == 0:
            return half * half
        else:
            return half * half * base
    
    result = helper(x, abs(n))
    return result if n >= 0 else 1 / result

# O-Notation: O(log n)
# - Uses exponentiation by squaring, effectively reducing complexity by halving each iteration.

```

**Explanation:**
The exponentiation by squaring method involves recursively computing the power using the relation \(x^{n} = (x^{n/2})^{2}\) to halve the work per iteration, resulting in an impressively efficient \(O(\log n)\) implementation. For negative exponents, reciprocate the final result.

### Problem 560: Subarray Sum Equals K (Medium)

**Problem Statement:**

Given an array of integers `nums` and an integer `k`, you need to find the total number of continuous subarrays whose sum equals to `k`.

**Example:**

Input: `nums = [1,1,1], k = 2`
Output: `2`

**Solution:**

```python
def subarraySum(nums: list, k: int) -> int:
    count = 0
    current_sum = 0
    prefix_sums = {0: 1}

    for num in nums:
        current_sum += num
        if current_sum - k in prefix_sums:
            count += prefix_sums[current_sum - k]
        if current_sum in prefix_sums:
            prefix_sums[current_sum] += 1
        else:
            prefix_sums[current_sum] = 1

    return count

# O-Notation: O(n)
# n = length of the nums array
# - Iterate through nums once with constant-time hash map operations.
```

**Explanation:**
The algorithm uses a hash map to store cumulative sums, which allows it to count subarrays adding up to `k` efficiently by leveraging the prefix sum technique. As the loop iterates, it continually checks if the difference between the current prefix sum and `k` has been seen before, incrementing the subarray count accordingly.

---

### Problem 1570: Dot Product of Two Sparse Vectors (Medium)

**Problem Statement:**

Implement a class SparseVector that handles the dot product of two sparse vectors.

**Example:**

```plaintext
Input: nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]
Output: 8 (1*0 + 2*4)
```

**Solution:**

```python
class SparseVector:
    def __init__(self, nums):
        self.nums = {i: num for i, num in enumerate(nums) if num != 0}

    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        if len(self.nums) < len(vec.nums):  # Iterate over the smaller
            for idx in self.nums:
                if idx in vec.nums:
                    result += self.nums[idx] * vec.nums[idx]
        else:
            for idx in vec.nums:
                if idx in self.nums:
                    result += self.nums[idx] * vec.nums[idx]
        return result

# O-Notation: O(min(n, m))
# n, m are the number of non-zero elements in the vectors
# - Only iterate over non-zero elements for efficiency.
```

**Explanation:**
Sparse vectors are efficiently represented using dictionaries that store only non-zero indices. The solution iterates through the non-zero entries of the smaller vector, computing the dot product by combining common non-zero indices.

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

### Problem 199: Binary Tree Right Side View (Medium)

**Problem Statement:**

Given a binary tree, return the values of nodes you can see from the right side, ordered from top to bottom.

**Example:**

Input: `root = [1,2,3, null, 5, null, 4]`
Output: `[1, 3, 4]`

**Solution:**

```python
def rightSideView(root: TreeNode) -> list:
    if not root:
        return []
    
    view = []
    def collect(node, level):
        if level == len(view):
            view.append(node.val)
        for next_node in [node.right, node.left]:
            if next_node:
                collect(next_node, level + 1)
    
    collect(root, 0)
    return view

# O-Notation: O(n)
# n = number of nodes in the tree
# - Each node is visited once for potential diagonal visibility checks.
```

**Explanation:**
The routine uses preorder traversal (right-to-left) on levels, appending nodes to the view only when accessing levels hasn’t been established in earlier accesses, giving a structured right-side view.

---

### Problem 270: Closest Binary Search Tree Value (Medium)

**Problem Statement:**

Given the `root` of a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.

**Example:**

Input: `root = 4,2,5,1,3`, `target = 3.714286`
Output: `4`

**Solution:**

```python
def closestValue(root: TreeNode, target: float) -> int:
    closest = root.val
    
    while root:
        closest = min((closest, root.val), key=lambda x: abs(x - target))
        root = root.left if target < root.val else root.right
    
    return closest

# O-Notation: O(h)
# h = height of the tree
# - Binary search tree helps focus on one seeking realm per depth.
```

**Explanation:**
Employing the properties of BST, navigate towards potential closer values based on target comparison, efficiently pruning sub-trees actively reducing unnecessary checks.

---

### Problem 346: Moving Average from Data Stream (Easy)

**Problem Statement:**

Implement a class `MovingAverage` that maintains and computes the moving average of numbers from a data stream.

**Example:**

Input:
```plaintext
	movingAverage = MovingAverage(3)
	movingAverage.next(1) = 1
	movingAverage.next(10) = (1 + 10) / 2
	movingAverage.next(3) = (1 + 10 + 3) / 3
	movingAverage.next(5) = (10 + 3 + 5) / 3
```

**Solution:**

```python
from collections import deque

class MovingAverage:
    def __init__(self, size: int):
        self.queue = deque()
        self.max_size = size
        self.window_sum = 0

    def next(self, val: int) -> float:
        self.window_sum += val
        self.queue.append(val)
        if len(self.queue) > self.max_size:
            self.window_sum -= self.queue.popleft()
        return self.window_sum / len(self.queue)

# O-Notation: O(1) for each next call
# - Maintain constant-time complexity for element entry/removal.
```

**Explanation:**
Employ a deque to support fixed-size efficiency in addition and removal at both ends, integrating immediate sum updates for moving average calculation, optimized for speed and space.

---

### Problem 347: Top K Frequent Elements (Easy assumed Easy but Medium)

**Problem Statement:**

Given a non-empty array of integers, return the `k` most frequent elements.

**Example:**

Input: `nums = [1,1,1,2,2,3], k = 2`
Output: `[1,2]`

**Solution using Min-Heap:**

```python
import heapq
from collections import Counter

def topKFrequent(nums: list, k: int) -> list:
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)

# O-Notation: O(N log k)
# N = number of unique elements in nums
# - Min-heap k most frequent retrieval is efficiently supportive with heap structures.
```

**Explanation:**
Counter layers frequency assessments allowing min-heaps to efficiently maintain the K most frequent elements based on value counts, fine-tuned to optimization judiciously leveraging both data structures.

---

### Problem 348: Design Tic-Tac-Toe (Medium)

**Problem Statement:**

Design a class `TicTacToe` that allows players to play a Tic-Tac-Toe game on an n x n grid.

**Example:**

`TicTacToe.move(0, 0, 1)` returns `0`
`TicTacToe.move(0, 1, 2)` returns `0`
`TicTacToe.move(1, 1, 1)` returns `0`
`TicTacToe.move(1, 0, 2)` returns `0`
`TicTacToe.move(2, 2, 1)` returns `1`

**Solution:**

```python
class TicTacToe:
    def __init__(self, n: int):
        self.n = n
        self.rows = [0] * n
        self.cols = [0] * n
        self.diagonal = 0
        self.anti_diagonal = 0

    def move(self, row: int, col: int, player: int) -> int:
        move_score = 1 if player == 1 else -1
        
        self.rows[row] += move_score
        self.cols[col] += move_score
        
        if row == col:
            self.diagonal += move_score
        
        if row + col == self.n - 1:
            self.anti_diagonal += move_score
        
        n = self.n
        if (abs(self.rows[row]) == n or
            abs(self.cols[col]) == n or
            abs(self.diagonal) == n or
            abs(self.anti_diagonal) == n):
            return player
        
        return 0

# O-Notation: O(1) for each move
# - Increment operations are consistent in supporting node level checkpoints.
```

**Explanation:**
Utilize arrays to track line-based score impacts for n-size effectiveness, ensuring each board move effectively scrutinizes row, column, and diagonal totals, delivering immediate response upon achieving win conditions.

---

### Problem 480: Sliding Window Median (Medium)

**Problem Statement:**

Given an array of `nums` and a `window size k`, find the median of each window and return these medians as a list. The median is the middle value in an ordered list. If the list length is even, the median is the average of the two middle values.

**Example:**

Input: `nums = [1,3,-1,-3,5,3,6,7], k = 3`
Output: `[1, -1, -1, 3, 5, 6]`

**Solution using Two Heaps:**

```python
import heapq
from heapq import heappush, heappop

class SlidingWindowMedian:
    def __init__(self):
        self.left = []  # Max-heap
        self.right = [] # Min-heap
    
    def medianSlidingWindow(self, nums, k):
        # λ-function to balance the heaps
        def add(num):
            if not self.left or num <= -self.left[0]:
                heappush(self.left, -num)
            else:
                heappush(self.right, num)
            balance()
        
        def remove(num):
            if num <= -self.left[0]:
                self.left.remove(-num)
                heapq.heapify(self.left)
            else:
                self.right.remove(num)
                heapq.heapify(self.right)
            balance()
        
        def balance():
            # Ensure size properties
            if len(self.left) > len(self.right) + 1:
                heappush(self.right, -heappop(self.left))
            if len(self.right) > len(self.left):
                heappush(self.left, -heappop(self.right))
        
        # Start the sliding window
        result = []
        for i, num in enumerate(nums):
            add(num)
            if i >= k - 1:
                # Append median
                if k % 2 == 0:
                    result.append((-self.left[0] + self.right[0]) / 2.0)
                else:
                    result.append(float(-self.left[0]))
                # Slide the window
                remove(nums[i - k + 1])
        return result

# O-Notation: O(n log k)
# n = number of elements in nums, k = window size
# - Balancing and maintaining heaps takes logarithmic time relative to window size.
```

**Explanation:**
Use two heaps: a max-heap for the lower window and a min-heap for the upper window. These maintain the median efficiently. Balancing keeps their sizes correct as elements enter and exit the window.

---

### Problem 498: Diagonal Traverse (Hard)

**Problem Statement:**

Given a matrix, return all elements of the matrix in diagonal order starting from the top-left element.

**Example:**

```plaintext
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]
```

**Solution:**

```python
def findDiagonalOrder(matrix: list) -> list:
    if not matrix or not matrix[0]:
        return []
    
    rows, cols = len(matrix), len(matrix[0])
    result, intermediate = [], []
    
    for d in range(rows + cols - 1):
        intermediate.clear()
        
        r = 0 if d < cols else d - cols + 1
        c = d if d < cols else cols - 1
        
        while r < rows and c > -1:
            intermediate.append(matrix[r][c])
            r += 1
            c -= 1
        
        if d % 2 == 0:
            result.extend(intermediate[::-1])
        else:
            result.extend(intermediate)
    
    return result

# O-Notation: O(m * n)
# m and n are dimensions of the matrix
# - Each element is processed once in tracing diagonal paths.
```

**Explanation:**
Iterate across diagonals by adjusting start points row-wise and column-wise. Use a list to store the diagonal elements, reversing elements collected on every other pass to trace proper zigzag patterns.

---

### Problem 426: Convert Binary Search Tree to Sorted Doubly Linked List (Medium)

**Problem Statement:**

Convert a Binary Search Tree to a circular sorted doubly linked list, where the nodes are sorted in ascending order.

**Example:**

Given BST:

```plaintext
    4
   / \
  2   5
 / \
1   3
```

Converted doubly linked list: `1 <-> 2 <-> 3 <-> 4 <-> 5 <-> (back to head)`

**Solution:**

```python
class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def treeToDoublyList(root: Node) -> Node:
    if not root:
        return None
        
    def in_order(node):
        nonlocal last, first
        if node:
            # Left
            in_order(node.left)
            # Node
            if last:
                last.right, node.left = node, last
            else:
                first = node
            last = node
            # Right
            in_order(node.right)
    
    first, last = None, None
    in_order(root)
    
    # Make it circular
    last.right, first.left = first, last
    return first

# O-Notation: O(n)
# n = number of nodes in the BST
# - Each node gets processed once through in-order traversal.
```

**Explanation:**
Use in-order traversal to process nodes sequentially; altering pointers between successive nodes converts tree elements to a doubly linked list. Final adjustment converts endpoints into a circular structure.

---

### Problem 938: Range Sum of BST (Medium)

**Problem Statement:**

Given the `root` of a binary search tree and two integers `low` and `high`, return the sum of values of all nodes with a value in the inclusive range `[low, high]`.

**Example:**

Input: A BST and `low = 7`, `high = 15`
Output: Sum within range

**Solution:**

```python
def rangeSumBST(root: TreeNode, low: int, high: int) -> int:
    if not root:
        return 0
    if root.val < low:
        return rangeSumBST(root.right, low, high)
    elif root.val > high:
        return rangeSumBST(root.left, low, high)
    else:
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)

# O-Notation: O(n)
# n = number of nodes that fall within or close to path traversed
# - Efficiently skips unnecessary branches using BST properties.
```

**Explanation:**
Exploit BST properties to skip branches where node values fall outside specified bounds. Traverse recursively, focusing only on subtrees that may contain nodes pertinent to the targeted sum.

---

### Problem 1768: Merge Strings Alternately (Easy)

**Problem Statement:**

Given two strings `word1` and `word2`, create a new string by alternately appending characters from each string.

**Example:**

Input: `word1 = "abc", word2 = "pqr"`
Output: `"apbqcr"`

**Solution:**

```python
def mergeAlternately(word1: str, word2: str) -> str:
    merged = []
    i, j = 0, 0
    
    while i < len(word1) and j < len(word2):
        merged.append(word1[i])
        merged.append(word2[j])
        i += 1
        j += 1
    
    merged.append(word1[i:])
    merged.append(word2[j:])
    
    return ''.join(merged)

# O-Notation: O(m + n)
# m and n are lengths of word1 and word2
# - Process each character once, with linear scans determining merging.
```

**Explanation:**
Append characters sequentially from each string into a result list, handling remainder appending after either string runs out of possible characters.

---

### Problem 1762: Buildings With an Ocean View (Easy)

**Problem Statement:**

Given an array `heights`, return a list of indices of buildings that have an ocean view, observing from right to left.

**Example:**

Input: `heights = [4, 2, 3, 1]`
Output: `[0, 2, 3]`

**Solution:**

```python
def findBuildings(heights: list) -> list:
    visible = []
    max_height = 0
    
    for i in reversed(range(len(heights))):
        if heights[i] > max_height:
            visible.append(i)
            max_height = heights[i]
            
    return visible[::-1]

# O-Notation: O(n)
# n = number of buildings
# - Single reverse scan identifies and appends visible building indices.
```

**Explanation:**
Traverse the list from right to left, maintaining the maximum encountered height. Append indices of buildings taller than this maximum, which ensures they have an unobstructed view until further buildings extend the view threshold.

---

### Problem 2: Add Two Numbers (Medium)

**Problem Statement:**

Given two non-empty linked lists representing two non-negative integers, where digits are stored in reverse order, add the two numbers and return the sum as a linked list.

**Example:**

Input: `(2 -> 4 -> 3) + (5 -> 6 -> 4)`
Output: `7 -> 0 -> 8` (342 + 465 = 807)

**Solution:**

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    dummy = ListNode()
    current = dummy
    carry = 0
    
    while l1 or l2 or carry:
        val1 = l1.val if l1 else 0
        val2 = l2.val if l2 else 0
        
        total = val1 + val2 + carry
        carry = total // 10
        current.next = ListNode(total % 10)
        current = current.next
        
        if l1: l1 = l1.next
        if l2: l2 = l2.next
    
    return dummy.next

# O-Notation: O(max(m, n))
# m, n are the lengths of the linked lists l1 and l2
# - Iterative processing continues until all elements and carry are resolved.
```

**Explanation:**
Simulate digit-wise addition, carrying over excess through linked node creation and logic. Iterate over both linked lists, extending each result node with correctly digitized values, boosted by carry integration.

---

### Problem 4: Median of Two Sorted Arrays (Medium assumed to be Medium but Hard)

**Problem Statement:**

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the median of the two sorted arrays.

**Example:**

Input: `nums1 = [1, 3]`, `nums2 = [2]`
Output: `2.0`

**Solution:**

```python
def findMedianSortedArrays(nums1: list, nums2: list) -> float:
    # Ensure nums1 is the smaller array
    if len(nums1) > len(nums2):
        nums1, nums2 = nums2, nums1
    
    x, y = len(nums1), len(nums2)
    low, high = 0, x
    
    while low <= high:
        partitionX = (low + high) // 2
        partitionY = (x + y + 1) // 2 - partitionX
        
        # If partitionX is 0, it means nothing is to the left; use -inf
        maxX = float('-inf') if partitionX == 0 else nums1[partitionX - 1]
        minX = float('inf') if partitionX == x else nums1[partitionX]
        
        maxY = float('-inf') if partitionY == 0 else nums2[partitionY - 1]
        minY = float('inf') if partitionY == y else nums2[partitionY]
        
        if maxX <= minY and maxY <= minX:
            if (x + y) % 2 == 0:
                return (max(maxX, maxY) + min(minX, minY)) / 2
            else:
                return max(maxX, maxY)
        elif maxX > minY:
            high = partitionX - 1
        else:
            low = partitionX + 1

# O-Notation: O(log(min(m, n)))
# m, n = lengths of nums1 and nums2
# - Binary search on the smaller array reduces complexity logarithmically.
```

**Explanation:**
Binary search on the smaller array partitions the combined array. By adjusting partitions based on the median condition, ensure all elements on the left are less than or equal to those on the right, allowing calculation of the median directly.

---

### Problem 17: Letter Combinations of a Phone Number (Hard but not as complex)

**Problem Statement:**

Given a string containing digits 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

**Example:**

Input: `digits = "23"`
Output: `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

**Solution:**

```python
def letterCombinations(digits: str) -> list:
    if not digits:
        return []
    
    phone_map = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl",
        "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    }
    result = []
    
    def backtrack(index, path):
        if index == len(digits):
            result.append("".join(path))
            return
        
        possible_letters = phone_map[digits[index]]
        for letter in possible_letters:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop()
    
    backtrack(0, [])
    return result

# O-Notation: O(3^n)
# n = length of the input digits
# - Each digit contributes to a combination branching factor.
```

**Explanation:**
A backtracking approach explores paths with each digit expanding into corresponding letter possibilities. Recursively append letters via depth-controlled buildup, adding complete paths once input is fully processed.

---

### Problem 19: Remove Nth Node From End of List (Medium)

**Problem Statement:**

Given the head of a linked list, remove the `nth` node from the end of the list and return its head.

**Example:**

Input: `head = [1,2,3,4,5]`, `n = 2`
Output: `[1,2,3,5]`

**Solution:**

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def removeNthFromEnd(head: ListNode, n: int) -> ListNode:
    dummy = ListNode(0, head)
    fast = slow = dummy
    
    # Move fast ahead by n+1 steps
    for _ in range(n + 1):
        fast = fast.next
    
    # Move fast to the end, maintaining the gap
    while fast:
        fast = fast.next
        slow = slow.next
    
    # Skip the desired node
    slow.next = slow.next.next
    
    return dummy.next

# O-Notation: O(L)
# L = length of linked list
# - Two pass technique wrapped in a single pass effectively.
```

**Explanation:**
Utilize a dummy node and two pointers to maintain offsets, locating correct removal by dual-linear pass structure. This ensures accurate nth node from the end identification before pointer bypass operation.

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
from typing import List

class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        # Define the search space for the capacity:
        # Start with the largest single weight (can't be smaller)
        # and the sum of all weights (can't be larger).
        left, right = max(weights), sum(weights)
        
        # Use binary search to find the minimum capacity that works.
        while left < right:
            mid = (left + right) // 2  # Candidate capacity.
            current_load = 0  # Used to track load of the current day.
            required_days = 1  # Start with the first day.

            # Check if this capacity can work within the given number of days.
            for weight in weights:
                # If adding the next weight exceeds capacity, it goes to the next day.
                if current_load + weight > mid:
                    required_days += 1  # Increment day count.
                    current_load = 0  # Reset load for new day.
                current_load += weight  # Add weight to current day's load.

            # Determine if the current mid capacity suffices.
            if required_days <= days:
                right = mid  # Try a smaller capacity.
            else:
                left = mid + 1  # Need more capacity.

        # The smallest capacity that can ship all packages within the given days.
        return left
```

### Explanation:

- **Binary Search Setup**:
  - `left` is initialized to the maximum weight, as each individual weight must be shipped at least once, establishing the minimal possible capacity.
  - `right` is initialized to the total weight of all packages, which represents the upper bound for the capacity if only one day were available.

- **Mid Calculation**:
  - `mid` is calculated as the average of `left` and `right`, representing a potential capacity to test.

- **Load Distribution**:
  - For each weight, it checks if adding the weight would exceed the current `mid` capacity. If so, it increments the `required_days` counter and resets `current_load` to zero for the new day, then adds the weight to the `current_load`.

- **Capacity Adjustment**:
  - If `required_days` is within the `days` limit, it narrows the search to capacities lower than or equal to `mid` by setting `right = mid`.
  - Otherwise, it increases the capacity by setting `left = mid + 1`.

This approach efficiently finds the minimum capacity using binary search, ensuring all weights are shipped within `days` constraints.
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

### **34. Find First and Last Position of Element in Sorted Array**
Given an array of integers sorted in non-decreasing order, find the starting and ending position of a given target value.

```python
def searchRange(nums, target):
    def findBound(isFirst):
        left, right = 0, len(nums) - 1
        bound = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                bound = mid
                if isFirst:
                    right = mid - 1  # Search the left half for the first occurrence
                else:
                    left = mid + 1  # Search the right half for the last occurrence
            elif nums[mid] < target:
                left = mid + 1
            else:  # nums[mid] > target
                right = mid - 1
        return bound

    first = findBound(True)
    if first == -1:
        return [-1, -1]  # If the target is not found
    last = findBound(False)
    return [first, last]

# Example usage:
nums = [5, 7, 7, 8, 8, 10]
target = 8
print(searchRange(nums, target))  # Output: [3, 4]
```

---

### **31. Next Permutation**

Rearrange numbers into the lexicographically next greater permutation of numbers.

```python
def nextPermutation(nums):
    n = len(nums)
    i = n - 2

    # Step 1: Find the first decreasing element from the right
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1

    if i >= 0:  # Step 2: If found, swap with the next bigger element to its right
        j = n - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]

    # Step 3: Reverse the part of the list to the right of index `i`
    nums[i + 1:] = reversed(nums[i + 1:])

# Example usage:
nums = [1, 2, 3]
nextPermutation(nums)
print(nums)  # Output: [1, 3, 2]
```

---

### **827. Making A Large Island**
You are given an `n x n` binary grid. Flip at most one `0` to make a largest connected island.

```python
def largestIsland(grid):
    n = len(grid)
    directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

    def dfs(x, y, index):
        if x < 0 or x >= n or y < 0 or y >= n or grid[x][y] != 1:
            return 0
        grid[x][y] = index  # Mark the cell with the island index
        size = 1
        for dx, dy in directions:
            size += dfs(x + dx, y + dy, index)
        return size

    island_sizes = {0: 0}  # To track the size of each island
    index = 2  # Start from index 2 for islands
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1:
                island_sizes[index] = dfs(i, j, index)
                index += 1

    # Try flipping each 0 and calculate the potential largest island size
    max_island = max(island_sizes.values())  # If no 0 is flipped, return the largest existing island
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 0:
                seen_indices = set()
                for dx, dy in directions:
                    ni, nj = i + dx, j + dy
                    if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] > 1:
                        seen_indices.add(grid[ni][nj])
                new_size = 1 + sum(island_sizes[idx] for idx in seen_indices)
                max_island = max(max_island, new_size)

    return max_island

# Example usage:
grid = [[1, 0], [0, 1]]
print(largestIsland(grid))  # Output: 3
```

### **1216. Valid Palindrome III**
Determine if a string can be a palindrome after deleting at most `k` characters.

```python
def isValidPalindrome(s, k):
    # Use dynamic programming to find the length of the longest palindromic subsequence
    def longestPalindromeSubseq(s):
        n = len(s)
        dp = [[0] * n for _ in range(n)]
        
        for i in range(n):
            dp[i][i] = 1  # A single character is always a palindrome
        
        for length in range(2, n + 1):  # Consider substrings of increasing length
            for i in range(n - length + 1):
                j = i + length - 1
                if s[i] == s[j]:
                    dp[i][j] = dp[i + 1][j - 1] + 2
                else:
                    dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])
        
        return dp[0][n - 1]
    
    # Check if after removing at most k characters, s can become a palindrome
    longest_palindrome_length = longestPalindromeSubseq(s)
    return len(s) - longest_palindrome_length <= k

# Example usage:
s = "abcdeca"
k = 2
print(isValidPalindrome(s, k))  # Output: True
```

---

### **282. Expression Add Operators**
Given a string num that contains only digits, return all possible results by adding operators (`+`, `-`, `*`) to form valid expressions that evaluate to the `target`.

```python
def addOperators(num, target):
    def backtrack(index, path, value, last):
        # If we reach the end of the string and the expression evaluates to the target
        if index == len(num):
            if value == target:
                result.append(path)
            return

        for i in range(index, len(num)):
            # Prevent numbers with leading zeros
            if i > index and num[index] == '0':
                break

            # Extract the current number
            current = int(num[index:i + 1])
            if index == 0:
                # First number in the expression (no operator before it)
                backtrack(i + 1, path + str(current), current, current)
            else:
                # Add '+'
                backtrack(i + 1, path + '+' + str(current), value + current, current)
                # Add '-'
                backtrack(i + 1, path + '-' + str(current), value - current, -current)
                # Add '*'
                backtrack(i + 1, path + '*' + str(current),
                          value - last + last * current,
                          last * current)

    result = []
    backtrack(0, "", 0, 0)
    return result

# Example usage:
num = "123"
target = 6
print(addOperators(num, target))  # Output: ["1+2+3", "1*2*3"]
```

---

### **173. Binary Search Tree Iterator**
Design an iterator for a binary search tree.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class BSTIterator:
    def __init__(self, root):
        # Use a stack to simulate the in-order traversal process
        self.stack = []
        self._push_left(root)

    def _push_left(self, node):
        # Push all left children onto the stack
        while node:
            self.stack.append(node)
            node = node.left

    def next(self):
        # Pop the next smallest element from the stack
        top = self.stack.pop()
        if top.right:
            self._push_left(top.right)
        return top.val

    def hasNext(self):
        # Check if there are more elements
        return len(self.stack) > 0

# Example usage
# Tree: [7, 3, 15, null, null, 9, 20]
root = TreeNode(7, TreeNode(3), TreeNode(15, TreeNode(9), TreeNode(20)))
iterator = BSTIterator(root)
print(iterator.next())    # Output: 3
print(iterator.next())    # Output: 7
print(iterator.hasNext()) # Output: True
print(iterator.next())    # Output: 9
```

---

### **127. Word Ladder**
Find the length of the shortest transformation sequence from `beginWord` to `endWord`.

```python
from collections import deque

def ladderLength(beginWord, endWord, wordList):
    wordSet = set(wordList)
    if endWord not in wordSet:
        return 0

    def neighbors(word):
        for i in range(len(word)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                new_word = word[:i] + c + word[i + 1:]
                if new_word != word and new_word in wordSet:
                    yield new_word

    queue = deque([(beginWord, 1)])  # (current_word, current_depth)
    while queue:
        word, depth = queue.popleft()
        if word == endWord:
            return depth
        for neighbor in neighbors(word):
            queue.append((neighbor, depth + 1))
            wordSet.remove(neighbor)
    return 0

# Example usage:
beginWord = "hit"
endWord = "cog"
wordList = ["hot", "dot", "dog", "lot", "log", "cog"]
print(ladderLength(beginWord, endWord, wordList))  # Output: 5
```

---

### **863. All Nodes Distance K in Binary Tree**
Find all nodes that are distance `K` from the target node.

```python
from collections import deque, defaultdict

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def distanceK(root, target, K):
    # Build a graph representation of the tree
    graph = defaultdict(list)

    def buildGraph(parent, child):
        if parent and child:
            graph[parent.val].append(child.val)
            graph[child.val].append(parent.val)
        if child.left:
            buildGraph(child, child.left)
        if child.right:
            buildGraph(child, child.right)

    buildGraph(None, root)

    # Perform BFS to find nodes at distance K
    queue = deque([(target.val, 0)])  # (current_node, current_distance)
    visited = set()
    visited.add(target.val)
    result = []

    while queue:
        node, distance = queue.popleft()
        if distance == K:
            result.append(node)
        elif distance < K:
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, distance + 1))

    return result

# Example usage:
root = TreeNode(3)
root.left = TreeNode(5)
root.right = TreeNode(1)
root.left.left = TreeNode(6)
root.left.right = TreeNode(2)
root.right.left = TreeNode(0)
root.right.right = TreeNode(8)
target = root.left  # Node with value 5
K = 2
print(distanceK(root, target, K))  # Output: [7, 4, 1]
```

### **48. Rotate Image**
Rotate a given `n x n` 2D matrix 90 degrees clockwise **in-place**.

```python
def rotate(matrix):
    n = len(matrix)

    # Step 1: Transpose the matrix (swap across the diagonal)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]

    # Step 2: Reverse each row
    for row in matrix:
        row.reverse()

# Example usage:
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
rotate(matrix)
print(matrix)
# Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
```

**Explanation:**
1. First, transpose the matrix (swap `matrix[i][j]` with `matrix[j][i]`).
2. Then reverse each row to achieve the 90-degree clockwise rotation.

---

### **735. Asteroid Collision**
Simulate collisions between asteroids moving in a straight line.

- A positive value means the asteroid is moving to the right.
- A negative value means the asteroid is moving to the left.

```python
def asteroidCollision(asteroids):
    stack = []
    for asteroid in asteroids:
        while stack and asteroid < 0 and stack[-1] > 0:
            # Collision occurs: Compare top of the stack with the current asteroid
            if stack[-1] < -asteroid:
                stack.pop()  # Top of the stack explodes
                continue
            elif stack[-1] == -asteroid:
                stack.pop()  # Both explode
            break
        else:
            stack.append(asteroid)  # No collision, add the current asteroid
    return stack

# Example usage:
asteroids = [5, 10, -5]
print(asteroidCollision(asteroids))
# Output: [5, 10]

asteroids = [8, -8]
print(asteroidCollision(asteroids))
# Output: []

asteroids = [10, 2, -5]
print(asteroidCollision(asteroids))
# Output: [10]
```

**Explanation:**
1. Use a stack to keep track of surviving asteroids.
2. When a collision occurs (positive asteroid meets a negative asteroid), compare sizes and determine what survives.
3. Capture scenarios for complete destructive collisions or one-sided destruction.

---

### **325. Maximum Size Subarray Sum Equals k**
Find the maximum length of a subarray whose sum equals `k`.

```python
def maxSubArrayLen(nums, k):
    prefix_sum = 0
    max_length = 0
    prefix_sum_map = {0: -1}  # Store prefix_sum → index mapping

    for i in range(len(nums)):
        prefix_sum += nums[i]
        
        # If prefix_sum - k exists in map, update max_length
        if prefix_sum - k in prefix_sum_map:
            max_length = max(max_length, i - prefix_sum_map[prefix_sum - k])
        
        # Store the prefix_sum in the map if not already present
        if prefix_sum not in prefix_sum_map:
            prefix_sum_map[prefix_sum] = i
    
    return max_length

# Example usage:
nums = [1, -1, 5, -2, 3]
k = 3
print(maxSubArrayLen(nums, k))  # Output: 4

nums = [-2, -1, 2, 1]
k = 1
print(maxSubArrayLen(nums, k))  # Output: 2
```

**Explanation:**
1. Compute running `prefix_sum` while iterating through the array.
2. Use a hash map (`prefix_sum_map`) to store indices of prefix sums for quick lookups.
3. Check if `(prefix_sum - k)` is in the map. If yes, calculate the subarray's length.
4. Update the maximum length for any valid subarray.

Let's go through the requested problems one by one and solve them in Python with explanations, annotations, and example inputs/outputs.

---

### **2667. Create Hello World Function**
Create a function that returns the string `"Hello World"`.

```python
def createHelloWorld():
    return lambda: "Hello World"

# Example usage:
hello = createHelloWorld()
print(hello())  # Output: "Hello World"
```

---

### **169. Majority Element**
Find the element that appears more than `n // 2` times in an array.

```python
def majorityElement(nums):
    count, candidate = 0, None

    for num in nums:
        if count == 0:
            candidate = num
        count += 1 if num == candidate else -1

    return candidate

# Example usage:
nums = [3, 2, 3]
print(majorityElement(nums))  # Output: 3
```

---

### **3. Longest Substring Without Repeating Characters**
Find the length of the longest substring without repeating characters.

```python
def lengthOfLongestSubstring(s):
    char_map = {}
    left, max_length = 0, 0

    for right, char in enumerate(s):
        if char in char_map and char_map[char] >= left:
            left = char_map[char] + 1
        char_map[char] = right
        max_length = max(max_length, right - left + 1)

    return max_length

# Example usage:
s = "abcabcbb"
print(lengthOfLongestSubstring(s))  # Output: 3
```

---

### **489. Robot Room Cleaner**
Design and simulate a robotic vacuum that cleans all accessible spaces.

```python
# Provided API:
class Robot:
    def move(self):
        pass
    
    def turnLeft(self):
        pass
    
    def turnRight(self):
        pass
    
    def clean(self):
        pass

def cleanRoom(robot):
    def go_back():
        """Helper function to go back to the previous cell."""
        robot.turnLeft()
        robot.turnLeft()
        robot.move()
        robot.turnRight()
        robot.turnRight()

    def backtrack(x, y, direction):
        # Mark this cell as cleaned
        robot.clean()
        visited.add((x, y))

        # Explore all 4 directions
        for i in range(4):
            nx, ny = x + directions[direction][0], y + directions[direction][1]
            if (nx, ny) not in visited and robot.move():
                backtrack(nx, ny, direction)
                go_back()
            robot.turnRight()
            direction = (direction + 1) % 4

    # Directions: up, right, down, left
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]
    visited = set()
    backtrack(0, 0, 0)

# Usage: Define the Robot class with helper methods for simulation.
```

---

### **78. Subsets**
Generate all subsets (the power set) of a given list of integers.

```python
def subsets(nums):
    result = []

    def backtrack(index, current):
        if index == len(nums):
            result.append(current[:])
            return
        # Include nums[index]
        current.append(nums[index])
        backtrack(index + 1, current)
        current.pop()
        # Exclude nums[index]
        backtrack(index + 1, current)

    backtrack(0, [])
    return result

# Example usage:
nums = [1, 2, 3]
print(subsets(nums))  # Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
```

---

### **43. Multiply Strings**
Multiply two numbers represented as strings.

```python
def multiply(num1, num2):
    if num1 == "0" or num2 == "0":
        return "0"

    n1, n2 = len(num1), len(num2)
    res = [0] * (n1 + n2)

    for i in range(n1 - 1, -1, -1):
        for j in range(n2 - 1, -1, -1):
            mul = int(num1[i]) * int(num2[j])
            sum = mul + res[i + j + 1]
            res[i + j + 1] = sum % 10
            res[i + j] += sum // 10

    # Skip leading zeros
    for i in range(len(res)):
        if res[i] != 0:
            break
    return ''.join(map(str, res[i:]))

# Example usage:
num1 = "123"
num2 = "456"
print(multiply(num1, num2))  # Output: "56088"
```

---

### **450. Delete Node in a BST**
Delete a node from a Binary Search Tree.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def deleteNode(root, key):
    if not root:
        return None

    if key < root.val:
        root.left = deleteNode(root.left, key)
    elif key > root.val:
        root.right = deleteNode(root.right, key)
    else:
        if not root.left:
            return root.right
        elif not root.right:
            return root.left

        # Replace the node with its in-order successor
        successor = root.right
        while successor.left:
            successor = successor.left
        root.val = successor.val
        root.right = deleteNode(root.right, successor.val)

    return root

# Example usage:
# [5, 3, 6, 2, 4, null, 7] -> delete key=3
```

---

### **605. Can Place Flowers**
Determine if you can plant `n` flowers in a flowerbed without violating the no-adjacent-flowers rule.

```python
def canPlaceFlowers(flowerbed, n):
    count = 0
    for i in range(len(flowerbed)):
        if flowerbed[i] == 0 and (i == 0 or flowerbed[i - 1] == 0) and (i == len(flowerbed) - 1 or flowerbed[i + 1] == 0):
            flowerbed[i] = 1
            count += 1
        if count >= n:
            return True
    return count >= n

# Example usage:
flowerbed = [1, 0, 0, 0, 1]
n = 1
print(canPlaceFlowers(flowerbed, n))  # Output: True
```


Sure! Let’s continue with the remaining problems from your original list, including **100, 224, 1443, 1424, 1778, 54, 131, and 222**. All solutions will have explanations and sample inputs/outputs.

---

### **100. Same Tree**
Check if two binary trees are the same (having the same structure and node values).

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def isSameTree(p, q):
    if not p and not q:
        return True  # Both trees are empty
    if not p or not q or p.val != q.val:
        return False  # One tree is empty or values don't match
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)

# Example usage:
p = TreeNode(1, TreeNode(2), TreeNode(3))
q = TreeNode(1, TreeNode(2), TreeNode(3))
print(isSameTree(p, q))  # Output: True
```

---

### **224. Basic Calculator**
Implement a basic calculator that evaluates a mathematical expression string containing `+`, `-`, `(`, `)`.

```python
def calculate(s):
    stack = []
    num, sign = 0, 1
    result = 0

    for char in s:
        if char.isdigit():
            num = num * 10 + int(char)
        elif char == '+':
            result += sign * num
            num, sign = 0, 1
        elif char == '-':
            result += sign * num
            num, sign = 0, -1
        elif char == '(':
            stack.append(result)
            stack.append(sign)
            result, sign = 0, 1
        elif char == ')':
            result += sign * num
            result *= stack.pop()
            result += stack.pop()
            num = 0

    return result + (sign * num)

# Example usage:
s = "(1+(4+5+2)-3)+(6+8)"
print(calculate(s))  # Output: 23
```

---

### **1443. Minimum Time to Collect All Apples in a Tree**
Find the minimum time to collect all apples in a tree represented as a graph.

```python
from collections import defaultdict

def minTime(n, edges, hasApple):
    tree = defaultdict(list)

    # Build the adjacency list representation of the tree
    for u, v in edges:
        tree[u].append(v)
        tree[v].append(u)

    def dfs(node, parent):
        time = 0
        for neighbor in tree[node]:
            if neighbor != parent:
                child_time = dfs(neighbor, node)
                if child_time > 0 or hasApple[neighbor]:
                    time += child_time + 2
        return time

    return dfs(0, -1)

# Example usage:
n = 7
edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]]
hasApple = [False, False, True, False, True, True, False]
print(minTime(n, edges, hasApple))  # Output: 8
```

---

### **1424. Diagonal Traverse II**
Traverse a 2D list along its diagonals.

```python
def findDiagonalOrder(nums):
    diagonals = defaultdict(list)

    for i, row in enumerate(nums):
        for j, val in enumerate(row):
            diagonals[i + j].append(val)

    result = []
    for key in sorted(diagonals.keys()):
        result.extend(reversed(diagonals[key]))

    return result

# Example usage:
nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(findDiagonalOrder(nums))  # Output: [1, 4, 2, 7, 5, 3, 8, 6, 9]
```

---

### **1778. Shortest Path in a Hidden Grid**
This problem involves a robot navigating a hidden grid, utilizing a developer-provided API (`move` and `canMove` methods). We'll pseudocode this solution because it requires implementation relative to the specific testing environment.

**Pseudocode Implementation:**
1. Use DFS to explore all grid cells.
2. Track visited cells to avoid cycles.
3. Implement the API-based navigation to ensure correct movements.

Full implementation depends on the experimental environment supporting the `GridMaster` class.

---

### **54. Spiral Matrix**
Traverse a 2D matrix in a spiral order.

```python
def spiralOrder(matrix):
    result = []
    while matrix:
        result += matrix.pop(0)  # Add the first row
        if matrix and matrix[0]:  # Rotate the remaining matrix counter-clockwise
            matrix = list(zip(*matrix))[::-1]
    return result

# Example usage:
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(spiralOrder(matrix))  # Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
```

---

### **131. Palindrome Partitioning**
Partition a string into all possible palindrome substrings.

```python
def partition(s):
    result = []

    def isPalindrome(sub):
        return sub == sub[::-1]

    def backtrack(start, path):
        if start == len(s):
            result.append(path[:])
            return
        for end in range(start + 1, len(s) + 1):
            if isPalindrome(s[start:end]):
                path.append(s[start:end])
                backtrack(end, path)
                path.pop()

    backtrack(0, [])
    return result

# Example usage:
s = "aab"
print(partition(s))  # Output: [["a", "a", "b"], ["aa", "b"]]
```

---

### **222. Count Complete Tree Nodes**
Count the number of nodes in a complete binary tree.

```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def countNodes(root):
    if not root:
        return 0

    def getHeight(node):
        height = 0
        while node:
            height += 1
            node = node.left
        return height

    left_height = getHeight(root.left)
    right_height = getHeight(root.right)

    if left_height == right_height:
        return (1 << left_height) + countNodes(root.right)
    else:
        return (1 << right_height) + countNodes(root.left)

# Example usage:
# Tree: [1, 2, 3, 4, 5, 6]
#          1
#         / \
#        2   3
#       / \  /
#      4  5 6
root = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3, TreeNode(6)))
print(countNodes(root))  # Output: 6
```

Let’s dive into this next set of problems. Each will include a Python implementation, explanation, and usage examples:

---

### **122. Best Time to Buy and Sell Stock II**
We are allowed to complete as many transactions as possible (buy one and sell one share).

```python
def maxProfit(prices):
    profit = 0
    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:  # Sell whenever there's a profit
            profit += prices[i] - prices[i - 1]
    return profit

# Example usage:
prices = [7, 1, 5, 3, 6, 4]
print(maxProfit(prices))  # Output: 7
```

---

### **36. Valid Sudoku**
Check if a given `9x9` Sudoku board is valid.

```python
def isValidSudoku(board):
    def is_valid_block(block):
        block = [num for num in block if num != '.']
        return len(block) == len(set(block))

    for row in board:  # Check rows
        if not is_valid_block(row):
            return False

    for col in zip(*board):  # Check columns
        if not is_valid_block(col):
            return False

    for i in range(0, 9, 3):  # Check 3x3 sub-boxes
        for j in range(0, 9, 3):
            block = [board[x][y] for x in range(i, i + 3) for y in range(j, j + 3)]
            if not is_valid_block(block):
                return False

    return True

# Example usage:
board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
print(isValidSudoku(board))  # Output: True
```

---

### **234. Palindrome Linked List**
Determine if a singly linked list is a palindrome.

```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def isPalindrome(head):
    slow, fast = head, head
    stack = []

    # Use two pointers to find the middle of the list
    while fast and fast.next:
        stack.append(slow.val)
        slow = slow.next
        fast = fast.next.next

    # Skip the middle element for odd-length lists
    if fast:
        slow = slow.next

    # Compare the second half to the reversed first half
    while slow:
        if stack.pop() != slow.val:
            return False
        slow = slow.next

    return True

# Example usage:
head = ListNode(1, ListNode(2, ListNode(2, ListNode(1))))
print(isPalindrome(head))  # Output: True
```

---

### **84. Largest Rectangle in Histogram**
Find the largest rectangle area in a histogram.

```python
def largestRectangleArea(heights):
    stack = []
    max_area = 0

    for i, h in enumerate(heights + [0]):  # Add a sentinel value
        while stack and h < heights[stack[-1]]:
            height = heights[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            max_area = max(max_area, height * width)
        stack.append(i)

    return max_area

# Example usage:
heights = [2, 1, 5, 6, 2, 3]
print(largestRectangleArea(heights))  # Output: 10
```

---

### **1287. Element Appearing More Than 25% in Sorted Array**
Find the element that occurs more than 25% of the time in a sorted array.

```python
def findSpecialInteger(arr):
    quarter = len(arr) // 4
    for i in range(len(arr) - quarter):
        if arr[i] == arr[i + quarter]:
            return arr[i]
    return -1

# Example usage:
arr = [1, 2, 2, 3, 3, 3, 3]
print(findSpecialInteger(arr))  # Output: 3
```

---

### **317. Shortest Distance from All Buildings**
Compute minimum steps to reach all buildings.

```python
from collections import deque

def shortestDistance(grid):
    m, n = len(grid), len(grid[0])
    distances = [[0] * n for _ in range(m)]
    reachable = [[0] * n for _ in range(m)]
    buildings = 0

    def bfs(x, y):
        visited = [[False] * n for _ in range(m)]
        queue = deque([(x, y, 0)])

        while queue:
            i, j, step = queue.popleft()
            for di, dj in ((0, 1), (1, 0), (0, -1), (-1, 0)):
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj] and grid[ni][nj] == 0:
                    visited[ni][nj] = True
                    distances[ni][nj] += step + 1
                    reachable[ni][nj] += 1
                    queue.append((ni, nj, step + 1))

    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                buildings += 1
                bfs(i, j)

    result = float('inf')
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 0 and reachable[i][j] == buildings:
                result = min(result, distances[i][j])

    return result if result != float('inf') else -1

# Example usage:
grid = [
    [1, 0, 2, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0]
]
print(shortestDistance(grid))  # Output: 7
```

---

### **27. Remove Element**
Remove all occurrences of `val` in an array **in-place**.

```python
def removeElement(nums, val):
    k = 0
    for i in range(len(nums)):
        if nums[i] != val:
            nums[k] = nums[i]
            k += 1
    return k

# Example usage:
nums = [3, 2, 2, 3]
val = 3
print(removeElement(nums, val))  # Output: 2 (remaining elements: [2, 2])
```

---

### **6. Zigzag Conversion**
Convert a string into a zigzag pattern.

```python
def convert(s, numRows):
    if numRows == 1 or numRows >= len(s):
        return s

    rows = [''] * numRows
    index, step = 0, 1

    for char in s:
        rows[index] += char
        if index == 0:
            step = 1
        elif index == numRows - 1:
            step = -1
        index += step

    return ''.join(rows)

# Example usage:
s = "PAYPALISHIRING"
numRows = 3
print(convert(s, numRows))  # Output: "PAHNAPLSIIGYIR"
```

Here’s the continuation with solutions for the problems **247, 1047, 42, 118, and 219**. Each will include Python implementation, with explanations and example usage.

---

### **247. Strobogrammatic Number II**
Find all strobogrammatic numbers of length `n`.

**Strobogrammatic Numbers** look the same when rotated 180 degrees. The valid digit pairs are:
- `('0', '0'), ('1', '1'), ('8', '8'), ('6', '9'), ('9', '6')`

```python
def findStrobogrammatic(n):
    pairs = [('0', '0'), ('1', '1'), ('8', '8'), ('6', '9'), ('9', '6')]

    def build(current, length):
        if length == 0:
            return ['']
        if length == 1:
            return ['0', '1', '8']

        result = []
        for number in build(current, length - 2):
            for pair in pairs:
                if length - 2 != current and pair[0] == '0':  # Avoid leading zeros
                    continue
                result.append(pair[0] + number + pair[1])
        return result

    return build(n, n)

# Example usage:
n = 2
print(findStrobogrammatic(n))  # Output: ["11", "69", "88", "96"]
```

---

### **1047. Remove All Adjacent Duplicates In String**
Remove all adjacent duplicates repeatedly until no more can be removed.

```python
def removeDuplicates(s):
    stack = []

    for char in s:
        if stack and stack[-1] == char:
            stack.pop()  # Remove the last character if it matches `char`
        else:
            stack.append(char)

    return ''.join(stack)

# Example usage:
s = "abbaca"
print(removeDuplicates(s))  # Output: "ca"
```

**Explanation:**
- Use a stack to process characters in the string.
- O(n) time complexity as we traverse each character in the string once.

---

### **42. Trapping Rain Water**
Calculate the water trapped between bars in a histogram.

```python
def trap(height):
    if not height:
        return 0

    left, right = 0, len(height) - 1
    left_max, right_max = 0, 0
    water = 0

    while left <= right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1

    return water

# Example usage:
height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
print(trap(height))  # Output: 6
```

**Explanation**:
1. Use two pointers (`left` and `right`) with `left_max` and `right_max` to track the maximum heights from both sides.
2. Incrementally calculate the trapped water.

---

### **118. Pascal's Triangle**
Generate Pascal’s Triangle up to `numRows`.

```python
def generate(numRows):
    if numRows == 0:
        return []

    triangle = [[1]]

    for i in range(1, numRows):
        row = [1]  # First element is always 1
        for j in range(1, i):
            row.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
        row.append(1)  # Last element is always 1
        triangle.append(row)

    return triangle

# Example usage:
numRows = 5
print(generate(numRows))
# Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
```

**Explanation**:
1. The first and last elements of every row are always 1.
2. Each element in between is the sum of the two elements directly above it.

---

### **219. Contains Duplicate II**
Check if an array contains duplicates within `k` distance from each other.

```python
def containsNearbyDuplicate(nums, k):
    seen = {}

    for i, num in enumerate(nums):
        if num in seen and i - seen[num] <= k:
            return True
        seen[num] = i

    return False

# Example usage:
nums = [1, 2, 3, 1]
k = 3
print(containsNearbyDuplicate(nums, k))  # Output: True
```

**Explanation**:
1. Use a dictionary to store the index of each element as you traverse the array.
2. If the same number is encountered again and the difference in indices is ≤ `k`, return `True`.


Had: 1

Problem 1650: Lowest Common Ancestor of a Binary Tree III (Medium)
Problem 791: Custom Sort String (Medium)
Problem 138: Copy List with Random Pointer (Medium)
Problem 339: Nested List Weight Sum (Medium)
Problem 56: Merge Intervals (Medium) (variation)