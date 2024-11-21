---
title: Meta Leetcode Study Guide 1 
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
