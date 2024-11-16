---
title: Meta Leetcode Study Guide
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

### 1249. Minimum Remove to Make Valid Parentheses (Medium)

#### Problem Statement
Given a string `s` of `(`, `)`, and lowercase English characters, return *the minimum number of parenthesis deletions required such that the remaining string contains only valid parentheses*. Valid parentheses require every opening parenthesis `(` to be matched with a closing parenthesis `)`.

#### Sample Input and Output
- Input: `s = "lee(t(c)o)de)"` 
- Output: `"lee(t(c)o)de"`

- Input: `s = "a)b(c)d"`
- Output: `"ab(c)d"`

#### Solution Explanation
```python
def minRemoveToMakeValid(s: str) -> str:
    # Stack to keep track of the indices of unmatched '('
    stack = []
    # Set to record the indices of misplaced ')'
    to_remove = set()
    
    # First pass to find unmatched ')' and collect unmatched '('
    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()  # Match one '(' from the stack
            else:
                to_remove.add(i)  # No matching '(' found, mark for removal
    
    # Add remaining unmatched '(' to the set of indices to remove
    to_remove = to_remove.union(set(stack))
    
    # Build the result string without the indices in `to_remove`
    result = []
    for i, char in enumerate(s):
        if i not in to_remove:
            result.append(char)
    
    return ''.join(result)

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the string. We traverse the string twice.
# - Space Complexity: O(n), space is used to store indices in the stack and set.
```

- The algorithm utilizes a stack to record indices of unmatched `(`.
- A set is used to store indices of unmatched `)` and leftover `(` from the stack.
- The constructed result string skips indices present in the `to_remove` set.

### 408. Valid Word Abbreviation (Easy)

#### Problem Statement
Given a string `word` and an abbreviation `abbr`, return whether the abbreviation matches the word. The abbreviation should consist of words and numeric characters, where a number denotes how many characters to skip in matching the original word.

#### Sample Input and Output
- Input: `word = "internationalization", abbr = "i12iz4n"`
- Output: `True`

- Input: `word = "apple", abbr = "a2e"`
- Output: `False`

#### Solution Explanation
```python
def validWordAbbreviation(word: str, abbr: str) -> bool:
    i = 0  # Pointer for word
    j = 0  # Pointer for abbr
    
    while i < len(word) and j < len(abbr):
        if abbr[j].isdigit():
            if abbr[j] == '0':  # Leading zeros are invalid
                return False
            
            # Get the number from the abbreviation
            num = 0
            while j < len(abbr) and abbr[j].isdigit():
                num = num * 10 + int(abbr[j])
                j += 1
            i += num
        else:
            if word[i] != abbr[j]:
                return False
            i += 1
            j += 1
    
    # Both pointers should reach the end for a valid abbreviation
    return i == len(word) and j == len(abbr)

# Complexity Analysis
# - Time Complexity: O(n + m), where n is length of word and m is length of abbr.
# - Space Complexity: O(1), no additional space needed besides input variables.
```

- Traverse both the `word` and `abbr` with two pointers.
- Convert numbers in `abbr` to skip characters in `word`.
- Compare non-digit characters directly.

### 680. Valid Palindrome II (Easy)

#### Problem Statement
Given a non-empty string `s`, determine if you can make it a palindrome by removing at most one character.

#### Sample Input and Output
- Input: `s = "abca"`
- Output: `True`

- Input: `s = "racecar"`
- Output: `True`

#### Solution Explanation
```python
def validPalindrome(s: str) -> bool:
    def is_palindrome_range(i, j):
        return all(s[k] == s[j-k+i] for k in range(i, (i+j)//2 + 1))

    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            # Check by removing one character
            return is_palindrome_range(left+1, right) or is_palindrome_range(left, right-1)
        left, right = left + 1, right - 1
    return True

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of string s.
# - Space Complexity: O(1), constant space used for pointers and helper function.
```

- Use two pointers to check if the string is a palindrome.
- On mismatch, check potential palindrome by skipping one character either from the left or the right.
- Only one recursive call is checked for removal, ensuring O(n) complexity.

In simple terms, the problems involve checking valid conditions either as parentheses, abbreviation, or palindrome and use efficient linear scans and pointers to ensure we make minimal computations and decisions effectively through conditions and helper functions.

### 314. Binary Tree Vertical Order Traversal (Medium)

#### Problem Statement
Given the root of a binary tree, return its nodes' values in **vertical order traversal**. If two nodes are in the same row and column, the order should be from left to right.

#### Sample Input and Output
- Input: `root = [3,9,20,null,null,15,7]`
- Output: `[[9],[3,15],[20],[7]]`

#### Solution Explanation
```python
from collections import defaultdict, deque

def verticalOrder(root):
    if not root:
        return []

    column_table = defaultdict(list)
    queue = deque([(root, 0)])
    
    while queue:
        node, column = queue.popleft()
        
        if node:
            column_table[column].append(node.val)
            queue.append((node.left, column - 1))
            queue.append((node.right, column + 1))

    # Extract columns in order sorted by column index
    return [column_table[x] for x in sorted(column_table)]

# Complexity Analysis
# - Time Complexity: O(N), where N is the number of nodes in the tree. Breadth-first search visits every node once.
# - Space Complexity: O(N), additional space for the column table and queue.
```

- The tree is traversed using a breadth-first search (BFS).
- Nodes are grouped in columns using a queue, maintaining an order on horizontal distance.

### 227. Basic Calculator II (Medium)

#### Problem Statement
Implement a basic calculator to evaluate a simple expression string. The expression will contain non-negative integers, `+`, `-`, `*`, `/` operators and empty spaces.

#### Sample Input and Output
- Input: `"3+2*2"`
- Output: `7`

- Input: `" 3/2 "`
- Output: `1`

#### Solution Explanation
```python
def calculate(s: str) -> int:
    stack, num, sign = [], 0, '+'
    
    for i, char in enumerate(s):
        if char.isdigit():
            num = num * 10 + int(char)
        if char in "+-*/" or i == len(s) - 1:
            if sign == '+':
                stack.append(num)
            elif sign == '-':
                stack.append(-num)
            elif sign == '*':
                stack.append(stack.pop() * num)
            elif sign == '/':
                stack.append(int(stack.pop() / num))
            
            sign = char
            num = 0
    
    return sum(stack)

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the string. Scan through the string with nested operations bounded by length.
# - Space Complexity: O(n), for the stack that stores numbers.
```

- Use a stack to interact with precedence of operations.
- Evaluate the expression by processing each character, applying operations on precedence, and resolving at the end.

### 339. Nested List Weight Sum (Medium)

#### Problem Statement
You have a nested list of integers, each integer or list can have its own weight, which is its depth in the structure. Return the sum of all integers in the list weighted by their depth.

#### Sample Input and Output
- Input: `[[1,1],2,[1,1]]`
- Output: `10`

- Input: `[1,[4,[6]]]`
- Output: `27`

#### Solution Explanation
```python
class NestedInteger:
    def isInteger(self) -> bool:
        pass

    def getInteger(self) -> int:
        pass

    def getList(self) -> list['NestedInteger']:
        pass

def depthSum(nestedList: list[NestedInteger], depth=1) -> int:
    total = 0
    for nested in nestedList:
        if nested.isInteger():
            total += nested.getInteger() * depth
        else:
            total += depthSum(nested.getList(), depth + 1)
    return total

# Complexity Analysis
# - Time Complexity: O(n), where n is the total number of NestedInteger elements.
# - Space Complexity: O(d), recursion stack space where d is the maximum depth.
```

- Perform a depth-first search (DFS) on the nested list.
- Calculate the sum while incorporating the depth at each element.

### 215. Kth Largest Element in an Array (Medium)

#### Problem Statement
Find the kth largest element in an unsorted array. Note that it is the kth largest element in sorted order, not the kth distinct element.

#### Sample Input and Output
- Input: `nums = [3,2,1,5,6,4], k = 2`
- Output: `5`

#### Solution Explanation (Heap)
```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    # Use a min-heap of size k
    min_heap = []
    for num in nums:
        heapq.heappush(min_heap, num)
        if len(min_heap) > k:
            heapq.heappop(min_heap)
    return min_heap[0]

# Complexity Analysis
# - Time Complexity: O(n log k), heap operations for n elements to maintain a size k.
# - Space Complexity: O(k), heap size to store the k largest elements.
```

- Maintain a min-heap of size k to store the largest elements.
- Efficiently replaces smallest element once k elements are processed.

#### Solution Explanation (Quickselect)
```python
import random

def partition(nums, left, right, pivot_index):
    pivot_value = nums[pivot_index]
    nums[pivot_index], nums[right] = nums[right], nums[pivot_index]
    store_index = left

    for i in range(left, right):
        if nums[i] > pivot_value:
            nums[store_index], nums[i] = nums[i], nums[store_index]
            store_index += 1

    nums[right], nums[store_index] = nums[store_index], nums[right]
    return store_index

def quickselect(nums, left, right, k):
    if left == right:
        return nums[left]

    pivot_index = random.randint(left, right)
    pivot_index = partition(nums, left, right, pivot_index)

    if k == pivot_index:
        return nums[k]
    elif k < pivot_index:
        return quickselect(nums, left, pivot_index - 1, k)
    else:
        return quickselect(nums, pivot_index + 1, right, k)

def findKthLargest(nums, k):
    return quickselect(nums, 0, len(nums) - 1, len(nums) - k)

# Complexity Analysis
# - Average Time Complexity: O(n), where n is the number of elements.
# - Worst-case Time Complexity: O(n^2), rare, using random pivot reduces this risk.
# - Space Complexity: O(1), in-place operations.
```

- Quickselect method efficiently partitions the array.
- Random pivot selection reduces risk of worst-case times.

### 1650. Lowest Common Ancestor of a Binary Tree III (Medium)

#### Problem Statement
Given two nodes of a binary tree, find their lowest common ancestor (LCA). Nodes contain a pointer to their parent.

#### Sample Input and Output
- Input: `A = 3, B = 5` in tree `[1, 2, 3, 4, 5]`
- Output: `2`

#### Solution Explanation
```python
class Node:
    def __init__(self, val: int, left: 'Node' = None, right: 'Node' = None, parent: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.parent = parent

def lowestCommonAncestor(p: Node, q: Node) -> Node:
    a, b = p, q
    while a != b:
        a = a.parent if a else q 
        b = b.parent if b else p 
    return a

# Complexity Analysis
# - Time Complexity: O(h), where h is the height of the tree or depth of the nodes.
# - Space Complexity: O(1), constant space used for node references.
```

- Follow parents upwards, if node reaches end, swap to other node’s path.
- Ensures convergence at common ancestor by cycling longer.

In simple terms, each solution revolves around understanding the underlying data structures and effectively navigating them with algorithms tailored to extract the desired elements or properties, like using a heap for largest elements or stacks for expression evaluation.

### 528. Random Pick with Weight (Medium)

#### Problem Statement
Given an array `w`, where `w[i]` describes the weight of index `i`, implement an algorithm to randomly pick an index in proportion to its weight.

#### Sample Input and Output
- Input: `w = [1, 3]`
- Output: Randomly returns `0` with probability `0.25` and `1` with probability `0.75`.

#### Solution Explanation
```python
import random

class Solution:
    def __init__(self, w: list[int]):
        self.prefix_sums = []
        prefix_sum = 0
        for weight in w:
            prefix_sum += weight
            self.prefix_sums.append(prefix_sum)
        self.total_sum = prefix_sum
        
    def pickIndex(self) -> int:
        target = self.total_sum * random.random()
        low, high = 0, len(self.prefix_sums)
        while low < high:
            mid = (low + high) // 2
            if target < self.prefix_sums[mid]:
                high = mid
            else:
                low = mid + 1
        return low

# Complexity Analysis
# - Initialization Time Complexity: O(n), where n is the length of weights array.
# - Pick Time Complexity: O(log n), binary search for index.
# - Space Complexity: O(n), for storing prefix sums.
```

- A prefix sum array is created to accumulate weights.
- Use binary search to choose an index based on a uniformly random target.

### 236. Lowest Common Ancestor of a Binary Tree (Medium)

#### Problem Statement
Given the root of a binary tree and two nodes `p` and `q`, find their lowest common ancestor (LCA).

#### Sample Input and Output
- Input: Root of binary tree `[3,5,1,6,2,0,8,null,null,7,4]`, `p = 5`, `q = 1`
- Output: `3`

#### Solution Explanation
```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
    if root is None or root == p or root == q:
        return root
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)
    if left and right:
        return root
    return left if left else right

# Complexity Analysis
# - Time Complexity: O(n), since each node is visited once.
# - Space Complexity: O(n), where n is the height of tree for recursive call stack.
```

- Perform a depth-first search (DFS).
- Return the node if current or one of the children returns valid.

### 1091. Shortest Path in Binary Matrix (Medium)

#### Problem Statement
Given an `n x n` binary matrix `grid`, return the length of the shortest clear path from the top-left corner to the bottom-right corner.

#### Sample Input and Output
- Input: `[[0,1],[1,0]]`
- Output: `2`

#### Solution Explanation
```python
from collections import deque

def shortestPathBinaryMatrix(grid: list[list[int]]) -> int:
    if grid[0][0] != 0 or grid[-1][-1] != 0:
        return -1

    n = len(grid)
    directions = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]
    queue = deque([(0, 0, 1)]) # (row, col, distance)

    while queue:
        row, col, dist = queue.popleft()
        if row == n - 1 and col == n - 1:
            return dist
        for dr, dc in directions:
            nr, nc = row + dr, col + dc
            if 0 <= nr < n and 0 <= nc < n and grid[nr][nc] == 0:
                grid[nr][nc] = 1  # Mark as visited
                queue.append((nr, nc, dist + 1))
    
    return -1

# Complexity Analysis
# - Time Complexity: O(n^2), iterating over entire matrix.
# - Space Complexity: O(n^2), space for queue storage.
```

- Utilize breadth-first search (BFS) due to shortest path requirement.
- Traverse 8 directions, handling boundaries and visited check.

### 1570. Dot Product of Two Sparse Vectors (Medium)

#### Problem Statement
Implement a sparse vector class with a method to compute the dot product of two sparse vectors.

#### Sample Input and Output
- Input: `nums1 = [1,0,0,2,3], nums2 = [0,3,0,4,0]`
- Output: `8`

#### Solution Explanation
```python
class SparseVector:
    def __init__(self, nums: list[int]):
        self.mapping = {i: num for i, num in enumerate(nums) if num != 0}

    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        # Iterate over non-zero elements in this vector
        for i, v in self.mapping.items():
            if i in vec.mapping:
                result += v * vec.mapping[i]
        return result

# Complexity Analysis
# - Time Complexity: O(n), effectively iterate over non-zero elements.
# - Space Complexity: O(L), where L is the number of non-zero elements.
```

- Store indices of non-zero elements to reduce unnecessary calculations.
- Only matching the non-zero indices between vectors is necessary.

### 71. Simplify Path (Medium)

#### Problem Statement
Given the path string of a Unix-style file system `path`, simplify it. 

#### Sample Input and Output
- Input: `"/home//foo/"`
- Output: `"/home/foo"`

#### Solution Explanation
```python
def simplifyPath(path: str) -> str:
    stack = []
    components = path.split('/')
    
    for component in components:
        if component == '' or component == '.':
            continue
        if component == '..':
            if stack:
                stack.pop()
        else:
            stack.append(component)
    
    return '/' + '/'.join(stack)

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of path.
# - Space Complexity: O(n), for the stack storing valid path components.
```

- Use a stack to manage directory components.
- Skip redundant markers and manage up-navigation using `..`.

In simple terms, these problems require effectively handling data structures by managing scope, employing strategies like DFS/BFS for traversal, reducing operations on zero-values, or using stacks to simplify path operations. The solutions typically involve leveraging existing standard libraries or basic data structures in Python to maintain performance and readability.

### 162. Find Peak Element (Medium)

#### Problem Statement
A peak element in an array is one that is greater than its neighbors. Given an input array `nums`, find a peak element and return its index. The array may contain multiple peaks, and you can return the index of any of them. Assume `nums[-1] = nums[n] = -∞`.

#### Sample Input and Output
- Input: `nums = [1,2,3,1]`
- Output: `2`

- Input: `nums = [1,2,1,3,5,6,4]`
- Output: `1` or `5`

#### Solution Explanation
```python
def findPeakElement(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[mid + 1]:
            # We are in a descending sequence
            right = mid
        else:
            # We are in an ascending sequence
            left = mid + 1
    
    return left

# Complexity Analysis
# - Time Complexity: O(log n), binary search for peak.
# - Space Complexity: O(1), constant extra space.
```

- The problem is solved using a binary search to efficiently find a peak.
- By comparing mid and mid+1 elements, decide to explore the descending or ascending side.

### 88. Merge Sorted Array (Easy)

#### Problem Statement
Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array. Assume `nums1` has sufficient space to hold additional elements.

#### Sample Input and Output
- Input: `nums1 = [1,2,3,0,0,0]`, `m = 3`, `nums2 = [2,5,6]`, `n = 3`
- Output: `[1,2,2,3,5,6]`

#### Solution Explanation
```python
def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    last = m + n - 1  # last position of merged array
    while m > 0 and n > 0:
        if nums1[m - 1] > nums2[n - 1]:
            nums1[last] = nums1[m - 1]
            m -= 1
        else:
            nums1[last] = nums2[n - 1]
            n -= 1
        last -= 1

    # Fill nums1 with leftover nums2 elements
    while n > 0:
        nums1[last] = nums2[n - 1]
        n, last = n - 1, last - 1

# Complexity Analysis
# - Time Complexity: O(m + n), traversing both arrays.
# - Space Complexity: O(1), in-place merging.
```

- Start merging from the end to accommodate space in-place.
- Compare elements of both arrays iteratively and place accordingly.

### 50. Pow(x, n) (Medium)

#### Problem Statement
Implement `pow(x, n)`, which computes `x` raised to the power `n` (i.e., `x^n`).

#### Sample Input and Output
- Input: `x = 2.0, n = 10`
- Output: `1024.0`

- Input: `x = 2.1, n = 3`
- Output: `9.261`

#### Solution Explanation
```python
def myPow(x: float, n: int) -> float:
    if n == 0:
        return 1
    if n < 0:
        x = 1 / x
        n = -n
    result = 1
    while n:
        if n % 2:
            result *= x
        x *= x
        n //= 2
    return result

# Complexity Analysis
# - Time Complexity: O(log n), exponentiation by squaring.
# - Space Complexity: O(1), constant space.
```

- Use exponentiation by squaring to repeatedly square the base.
- For odd exponents, multiply the result by `x` once before reducing `n`.

### 199. Binary Tree Right Side View (Medium)

#### Problem Statement
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

#### Sample Input and Output
- Input: `[1,2,3,null,5,null,4]`
- Output: `[1,3,4]`

#### Solution Explanation
```python
from collections import deque

def rightSideView(root: 'TreeNode') -> list[int]:
    if not root:
        return []
    view = []
    queue = deque([root])
    while queue:
        level_size = len(queue)
        for i in range(level_size):
            node = queue.popleft()
            if i == level_size - 1:
                view.append(node.val)
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    return view

# Complexity Analysis
# - Time Complexity: O(n), where n is number of nodes in tree.
# - Space Complexity: O(d), where d is maximum width (i.e., leaves) of the tree.
```

- Perform level-order traversal using a queue.
- For each level, capture the last node, which is the visible node from the right view.

### 938. Range Sum of BST (Easy)

#### Problem Statement
Given the root of a Binary Search Tree and two integers `low` and `high`, return the sum of values of all nodes with value in the range `[low, high]`.

#### Sample Input and Output
- Input: `root = [10,5,15,3,7,null,18], low = 7, high = 15`
- Output: `32`

#### Solution Explanation
```python
def rangeSumBST(root: 'TreeNode', low: int, high: int) -> int:
    if not root:
        return 0
    if root.val < low:
        return rangeSumBST(root.right, low, high)
    if root.val > high:
        return rangeSumBST(root.left, low, high)
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)

# Complexity Analysis
# - Time Complexity: O(n), where n is the number of nodes in the BST.
# - Space Complexity: O(h), where h is the height of the tree.
```

- Use DFS to explore nodes within the desired range.
- Utilize the BST property to skip unnecessary nodes.

In general, these problems leverage properties of data structures (binary search tree properties, binary heap) and efficient algorithms (binary search, recursion with memoization where necessary) to achieve optimal solutions.

### 56. Merge Intervals (Medium)

#### Problem Statement
Given a collection of intervals, merge all overlapping intervals.

#### Sample Input and Output
- Input: `[[1,3],[2,6],[8,10],[15,18]]`
- Output: `[[1,6],[8,10],[15,18]]`

#### Solution Explanation
```python
def merge(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    merged = []
    
    for interval in intervals:
        # If the list of merged intervals is empty or if the current
        # interval does not overlap with the previous, append it.
        if not merged or merged[-1][1] < interval[0]:
            merged.append(interval)
        else:
            # Otherwise, there is overlap, so merge the current and previous intervals.
            merged[-1][1] = max(merged[-1][1], interval[1])
    
    return merged

# Complexity Analysis
# - Time Complexity: O(n log n), due to sorting.
# - Space Complexity: O(n), additional space for merged intervals.
```

- Sort the intervals based on start times.
- Traverse them to merge overlapping intervals into the merged list.

### 560. Subarray Sum Equals K (Medium)

#### Problem Statement
Given an integer array `nums` and an integer `k`, return the total number of continuous subarrays whose sum equals to `k`.

#### Sample Input and Output
- Input: `nums = [1,1,1], k = 2`
- Output: `2`

#### Solution Explanation
```python
def subarraySum(nums: list[int], k: int) -> int:
    count = 0
    sum_dict = {0: 1}
    current_sum = 0

    for num in nums:
        current_sum += num
        if current_sum - k in sum_dict:
            count += sum_dict[current_sum - k]
        
        sum_dict[current_sum] = sum_dict.get(current_sum, 0) + 1

    return count

# Complexity Analysis
# - Time Complexity: O(n), single pass through array.
# - Space Complexity: O(n), to store prefix sums in a dictionary.
```

- Utilize a hashmap to store cumulative sums and their occurrences.
- Efficiently determine subarrays with sum `k` using the prefix sum approach.

### 1. Two Sum (Easy)

#### Problem Statement
Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

#### Sample Input and Output
- Input: `nums = [2,7,11,15], target = 9`
- Output: `[0,1]`

#### Solution Explanation
```python
def twoSum(nums: list[int], target: int) -> list[int]:
    num_to_index = {}
    
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_to_index:
            return [num_to_index[complement], i]
        num_to_index[num] = i
    
    return []

# Complexity Analysis
# - Time Complexity: O(n), single pass to find complement.
# - Space Complexity: O(n), space for hash map to store indices.
```

- Use a hashmap to store numbers and their indices as you iterate the array.
- Check if the complement of the current number exists in the hashmap.

### 543. Diameter of Binary Tree (Easy)

#### Problem Statement
Given a binary tree, return the length of the diameter of the tree. The diameter is the length of the longest path between any two nodes in a tree.

#### Sample Input and Output
- Input: `[1,2,3,4,5]`
- Output: `3`

#### Solution Explanation
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def diameterOfBinaryTree(root: TreeNode) -> int:
    diameter = 0
    
    def depth(node: TreeNode) -> int:
        nonlocal diameter
        if not node:
            return 0
        left_depth = depth(node.left)
        right_depth = depth(node.right)
        # Update the diameter
        diameter = max(diameter, left_depth + right_depth)
        return max(left_depth, right_depth) + 1
    
    depth(root)
    return diameter

# Complexity Analysis
# - Time Complexity: O(n), traverse each node.
# - Space Complexity: O(h), where h is the height of the tree (recursion stack).
```

- Use DFS to find depths of subtrees.
- The longest path passes through the root by combining the depths of the left and right subtrees.

### 138. Copy List with Random Pointer (Medium)

#### Problem Statement
A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null. Return a deep copy of the list.

#### Sample Input and Output
- Input: `head = [[7,null],[13,0],[11,4],[10,2],[1,0]]`
- Output: Deep copied list with the same random pointer configuration.

#### Solution Explanation
```python
class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = x
        self.next = next
        self.random = random

def copyRandomList(head: 'Node') -> 'Node':
    if not head:
        return None

    # Creating a mapping from old nodes to new nodes
    old_to_new = {}

    # First pass to copy all the nodes
    current = head
    while current:
        copy = Node(current.val)
        old_to_new[current] = copy
        current = current.next

    # Second pass to assign next and random pointers
    current = head
    while current:
        if current.next:
            old_to_new[current].next = old_to_new[current.next]
        if current.random:
            old_to_new[current].random = old_to_new[current.random]
        current = current.next

    return old_to_new[head]

# Complexity Analysis
# - Time Complexity: O(n), where n is the number of nodes.
# - Space Complexity: O(n), for the hashmap of nodes.
```

- Create deep copy nodes in the first pass, storing them in a map to link them correctly in a second pass.
- Handle `next` and `random` pointers based on mappings.

In each solution, the problem is approached by taking advantage of a suitable data structure or algorithm design (e.g., hashmaps for unique access to indices or nodes, recursion for tree structures) to achieve the desired outcomes effectively and efficient computation.

### 973. K Closest Points to Origin (Medium)

#### Problem Statement
Given an array of points where `points[i] = [xi, yi]` represents a point on the XY plane, return the `k` closest points to the origin (0, 0).

#### Sample Input and Output
- Input: `points = [[1,3],[-2,2]], k = 1`
- Output: `[[-2,2]]`

#### Solution Explanation (Using a Heap)
```python
import heapq

def kClosest(points: list[list[int]], k: int) -> list[list[int]]:
    # Create a min-heap based on the negative of distance
    # (since we want the smallest distances)
    heap = []
    for (x, y) in points:
        dist = -(x * x + y * y)  # negative for max heap simulation
        if len(heap) < k:
            heapq.heappush(heap, (dist, (x, y)))
        else:
            heapq.heappushpop(heap, (dist, (x, y)))
    
    return [point for (_, point) in heap]

# Complexity Analysis
# - Time Complexity: O(n log k) for pushing elements into the heap.
# - Space Complexity: O(k), space used for the heap.
```

- Utilize a max-heap to keep only the k smallest distance points.
- Push and pop elements while traversing to ensure O(n log k) time.

### 31. Next Permutation (Medium)

#### Problem Statement
Implement the function to rearrange numbers into the lexicographically next greater permutation of numbers. If such an arrangement is not possible, rearrange it to the lowest possible order (i.e., sorted in ascending order).

#### Sample Input and Output
- Input: `nums = [1,2,3]`
- Output: `[1,3,2]`

#### Solution Explanation
```python
def nextPermutation(nums: list[int]) -> None:
    if len(nums) <= 1:
        return
    
    # Step 1: Identify first decreasing element from the end
    i = len(nums) - 2
    while i >= 0 and nums[i] >= nums[i + 1]:
        i -= 1
    
    # Step 2: If found, swap with next larger element
    if i >= 0:
        j = len(nums) - 1
        while nums[j] <= nums[i]:
            j -= 1
        nums[i], nums[j] = nums[j], nums[i]
    
    # Step 3: Reverse sequence from element following i to end
    nums[i + 1:] = reversed(nums[i + 1:])

# Complexity Analysis
# - Time Complexity: O(n), linear scan and reverse operations.
# - Space Complexity: O(1), in-place swap and reverse.
```

- Find the breakpoint where order descends, swap with immediate larger, and reverse remainder.

### 125. Valid Palindrome (Easy)

#### Problem Statement
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

#### Sample Input and Output
- Input: `"A man, a plan, a canal: Panama"`
- Output: `True`

#### Solution Explanation
```python
def isPalindrome(s: str) -> bool:
    l, r = 0, len(s) - 1
    while l < r:
        while l < r and not s[l].isalnum():
            l += 1
        while l < r and not s[r].isalnum():
            r -= 1
        if s[l].lower() != s[r].lower():
            return False
        l, r = l + 1, r - 1
    return True

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the string.
# - Space Complexity: O(1), no extra space used aside from input.
```

- Two pointers verify character by character ignoring non-alphanumerics.
- Handle upper and lower case using `lower()` comparison.

### 1762. Buildings With an Ocean View (Medium)

#### Problem Statement
Given a list of integers representing building heights in a straight line, some buildings have an ocean view if all buildings to their right are shorter in height. Return indices of buildings with an ocean view.

#### Sample Input and Output
- Input: `heights = [4,2,3,1]`
- Output: `[0,2,3]`

#### Solution Explanation
```python
def findBuildings(heights: list[int]) -> list[int]:
    n = len(heights)
    result = []
    max_height = 0
    
    for i in range(n - 1, -1, -1):
        if heights[i] > max_height:
            result.append(i)
            max_height = heights[i]
    
    return result[::-1]

# Complexity Analysis
# - Time Complexity: O(n), a single pass through buildings.
# - Space Complexity: O(1), no extra space apart from the result.
```

- Traverse from right to left, maintaining a max height found.
- Collect indices in list for those exceeding max heights observed.

### 146. LRU Cache (Medium)

#### Problem Statement
Design a data structure that represents a Least Recently Used (LRU) cache with capacity for accessing keys. Implement `get` and `put`.

#### Sample Input and Output
- No specific examples; involve creating functionality claims.

#### Solution Explanation
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

# Complexity Analysis
# - Time Complexity: O(1) for both get and put due to OrderedDict features.
# - Space Complexity: O(capacity), space utilized for store dictionary items.
```

- Manage state using an OrderedDict to represent LRU operations efficiently.
- Keep cache within capacity by utilizing pop from the OrderedDict’s front.

With each solution, effective data handling methods like heap, dictionary and linked list adapt techniques for efficient computation, leveraging data structural properties to streamline operations like permutation searching or cache management.

### 283. Move Zeroes (Easy)

#### Problem Statement
Given an integer array `nums`, move all the zeros to the end while maintaining the relative order of the non-zero elements.

#### Sample Input and Output
- Input: `nums = [0,1,0,3,12]`
- Output: `[1,3,12,0,0]`

#### Solution Explanation
```python
def moveZeroes(nums: list[int]) -> None:
    last_non_zero = 0  # the index of the last non-zero found
    
    # Traverse the list, moving non-zero values to the front as you go
    for i in range(len(nums)):
        if nums[i] != 0:
            nums[last_non_zero], nums[i] = nums[i], nums[last_non_zero]
            last_non_zero += 1

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the array.
# - Space Complexity: O(1), in-place operation.
```

- Traverse the array maintaining the last non-zero index.
- Swap elements to bring non-zero values forward.

### 921. Minimum Add to Make Parentheses Valid (Medium)

#### Problem Statement
Given a string consisting of `(` and `)`, determine the minimum number of parentheses that need to be added to make the string valid.

#### Sample Input and Output
- Input: `"())"`
- Output: `1`

#### Solution Explanation
```python
def minAddToMakeValid(s: str) -> int:
    left_balance = 0
    right_balance = 0

    for char in s:
        if char == '(':
            right_balance += 1
        elif char == ')':
            if right_balance > 0:
                right_balance -= 1
            else:
                left_balance += 1

    return left_balance + right_balance

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the string.
# - Space Complexity: O(1), constant space usage.
```

- Utilize two counters to balance `(` and `)`.
- Track unmatched parentheses to calculate the number needed.

### 986. Interval List Intersections (Medium)

#### Problem Statement
Given two lists of closed intervals, `firstList` and `secondList`, find their intersections.

#### Sample Input and Output
- Input: `firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]`
- Output: `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`

#### Solution Explanation
```python
def intervalIntersection(firstList: list[list[int]], secondList: list[list[int]]) -> list[list[int]]:
    intersections = []
    i, j = 0, 0

    while i < len(firstList) and j < len(secondList):
        start_max = max(firstList[i][0], secondList[j][0])
        end_min = min(firstList[i][1], secondList[j][1])

        if start_max <= end_min:
            intersections.append([start_max, end_min])

        if firstList[i][1] < secondList[j][1]:
            i += 1
        else:
            j += 1
            
    return intersections

# Complexity Analysis
# - Time Complexity: O(n + m), where n is the length of the first list and m is the length of the second list.
# - Space Complexity: O(n + m), for the result storage.
```

- Use two pointers to traverse interval lists.
- Check and record overlaps while progressing the pointer of the exhausted interval.

### 347. Top K Frequent Elements (Medium)

#### Problem Statement
Given a non-empty array of integers `nums`, return the `k` most frequent elements.

#### Sample Input and Output
- Input: `nums = [1,1,1,2,2,3], k = 2`
- Output: `[1,2]`

#### Solution Explanation
```python
from collections import Counter
import heapq

def topKFrequent(nums: list[int], k: int) -> list[int]:
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)

# Complexity Analysis
# - Time Complexity: O(n log k) for heap operations.
# - Space Complexity: O(n), store element frequencies.
```

- Count frequencies using a hashmap.
- Use a heap to retrieve top `k` elements efficiently.

### 791. Custom Sort String (Medium)

#### Problem Statement
You have a string `order` and a string `s`. Sort `s` such that the characters appear in the order they appear in `order`. Characters not in `order` can be in any order.

#### Sample Input and Output
- Input: `order = "cba", s = "abcd"`
- Output: `"cbad"`

#### Solution Explanation
```python
def customSortString(order: str, s: str) -> str:
    order_index = {char: i for i, char in enumerate(order)}
    return ''.join(sorted(s, key=lambda x: order_index.get(x, len(order))))

# Complexity Analysis
# - Time Complexity: O(n log n), due to sort operation on `s`.
# - Space Complexity: O(n), to store sorted version of `s`.
```

- Create a priority dictionary based on the custom order.
- Sort `s` customly using order priorities.

In each of these problems, effective data handling and efficient use of standard library data structures (like heaps, dictionaries, and sets) help achieve desired outcomes. Each solution revolves around understanding the constraints and utilizing appropriate algorithms or methods to provide efficient and readable code.

### 426. Convert Binary Search Tree to Sorted Doubly Linked List (Medium)

#### Problem Statement
Convert a Binary Search Tree (BST) into a sorted circular doubly-linked list in-place, where the left pointer is used as the previous pointer and the right pointer as the next pointer.

#### Sample Input and Output
- Input: BST where the inorder traversal is `[1,2,3,4,5,6,7]`
- Output: Circular doubly-linked list: `1 <-> 2 <-> 3 <-> 4 <-> 5 <-> 6 <-> 7`

#### Solution Explanation
```python
class Node:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def treeToDoublyList(root: 'Node') -> 'Node':
    if not root:
        return None
    
    def inorder(node):
        nonlocal last, first
        if node:
            # Left
            inorder(node.left)
            # Node
            if last:
                last.right = node
                node.left = last
            else:
                first = node
            last = node
            # Right
            inorder(node.right)
    
    first, last = None, None
    inorder(root)
    
    # Connect the first and last nodes to make it circular
    last.right = first
    first.left = last
    
    return first

# Complexity Analysis
# - Time Complexity: O(n), where n is the number of nodes in the BST.
# - Space Complexity: O(h), where h is the height of the tree (stack space due to recursion).
```

- Use in-order traversal to link nodes in sequence.
- Adjust the start and end of the list to be circular.

### 129. Sum Root to Leaf Numbers (Medium)

#### Problem Statement
Given a binary tree where each node contains a single digit from `0` to `9`, each root-to-leaf path represents a number. Return the sum of these numbers.

#### Sample Input and Output
- Input: `[1,2,3]`
- Output: `25` (since the paths are `12` and `13`)

#### Solution Explanation
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sumNumbers(root: TreeNode) -> int:
    def dfs(node, current_number):
        if not node:
            return 0
        current_number = current_number * 10 + node.val
        if not node.left and not node.right:  # If it's a leaf
            return current_number
        return dfs(node.left, current_number) + dfs(node.right, current_number)
    
    return dfs(root, 0)

# Complexity Analysis
# - Time Complexity: O(n), visit all nodes once.
# - Space Complexity: O(h), corresponding to the height of the tree.
```

- Perform DFS accumulating path sums.
- Return sum when a leaf node is reached.

### 670. Maximum Swap (Medium)

#### Problem Statement
Given a non-negative integer, you are allowed to swap two digits at most once to get the maximum possible number. Return the maximum possible number.

#### Sample Input and Output
- Input: `num = 2736`
- Output: `7236`

#### Solution Explanation
```python
def maximumSwap(num: int) -> int:
    num_str = list(str(num))
    last = {int(x): i for i, x in enumerate(num_str)}

    for i, x in enumerate(num_str):
        for d in range(9, int(x), -1):
            if last.get(d, -1) > i:
                num_str[i], num_str[last[d]] = num_str[last[d]], num_str[i]
                return int(''.join(num_str))
    
    return num

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the number.
# - Space Complexity: O(1), modification is in-place besides auxiliary data.
```

- Use a hash map to record last occurrence of each digit.
- Execute a single swap with the largest possible digit.

### 1004. Max Consecutive Ones III (Medium)

#### Problem Statement
Given a binary array `nums` and an integer `k`, return the maximum number of consecutive `1`s in the array if you can flip at most `k` `0`s.

#### Sample Input and Output
- Input: `nums = [1,1,0,0,1,1,1,0,1,1], k = 2`
- Output: `7`

#### Solution Explanation
```python
def longestOnes(nums: list[int], k: int) -> int:
    left = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            k -= 1
        while k < 0:
            if nums[left] == 0:
                k += 1
            left += 1
    return right - left + 1

# Complexity Analysis
# - Time Complexity: O(n), single pass with sliding window.
# - Space Complexity: O(1), no extra space beyond input.
```

- Utilize a sliding window approach.
- Expand to include more 1s and contract when zeros exceed allowed.

### 346. Moving Average from Data Stream (Easy)

#### Problem Statement
Given a stream of integers, calculate the moving average of all integers in the sliding window of size `size`.

#### Sample Input and Output
- Input: Sequence `1, 10, 3, 5` with size `3`
- Output: Moving averages `[1.0, 5.5, 4.6667, 6.0]`

#### Solution Explanation
```python
from collections import deque

class MovingAverage:
    def __init__(self, size: int):
        self.window = deque()
        self.size = size
        self.window_sum = 0

    def next(self, val: int) -> float:
        if len(self.window) == self.size:
            self.window_sum -= self.window.popleft()
        
        self.window.append(val)
        self.window_sum += val
        return self.window_sum / len(self.window)

# Complexity Analysis
# - Time Complexity: O(1), readjustments and average calculation are constant time.
# - Space Complexity: O(n), where n is the size of the window.
```

- Utilize a deque to maintain the window.
- Adjust the sum with each new number and calculate the average efficiently.

Each of these problems uses simple but effective linear scans and structures like sliding windows, deques, or depth-first search (DFS) to manage dynamic constraints or traverse structured data. Using these approaches ensures optimal performance for the operations.

### 987. Vertical Order Traversal of a Binary Tree (Hard)

#### Problem Statement
Given a binary tree, return the vertical order traversal of its nodes' values. Nodes from top to bottom, and nodes on the same row level from left to right.

#### Sample Input and Output
- Input: `root = [3,9,20,null,null,15,7]`
- Output: `[[9],[3,15],[20],[7]]`

#### Solution Explanation
```python
from collections import defaultdict, deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def verticalTraversal(root: TreeNode) -> list[list[int]]:
    if not root:
        return []

    node_map = defaultdict(list)
    queue = deque([(root, 0, 0)])  # (node, column, row)
    
    while queue:
        node, col, row = queue.popleft()
        node_map[col].append((row, node.val))
        
        if node.left:
            queue.append((node.left, col - 1, row + 1))
        if node.right:
            queue.append((node.right, col + 1, row + 1))
    
    results = []
    for col in sorted(node_map.keys()):
        results.append([val for row, val in sorted(node_map[col])])
    
    return results

# Complexity Analysis
# - Time Complexity: O(n log n), mainly due to sorting the nodes.
# - Space Complexity: O(n), to store nodes in the hashmap.
```

- Use a BFS approach to traverse, noting down row and column indices.
- Sort nodes column-wise, and then row/val-wise within the column.

### 15. 3Sum (Medium)

#### Problem Statement
Given an integer array `nums`, find all unique triplets that sum to zero.

#### Sample Input and Output
- Input: `nums = [-1,0,1,2,-1,-4]`
- Output: `[[-1,-1,2],[-1,0,1]]`

#### Solution Explanation
```python
def threeSum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    result = []
    
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i-1]:  # Avoid duplicates
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left+1]:  # Avoid duplicates
                    left += 1
                while left < right and nums[right] == nums[right-1]:  # Avoid duplicates
                    right -= 1
                left += 1
                right -= 1
            elif total < 0:
                left += 1
            else:
                right -= 1

    return result

# Complexity Analysis
# - Time Complexity: O(n^2), as sorting + two-pointer scan for each element.
# - Space Complexity: O(log n) or O(n), depending on sorting implementation.
```

- Sort the array, then use pointers from both ends adjusting to zero sum.
- Consider duplicates carefully to ensure unique triplets.

### 1539. Kth Missing Positive Number (Easy)

#### Problem Statement
Return the `k`-th missing positive integer from a sorted list of unique integers.

#### Sample Input and Output
- Input: `arr = [2,3,4,7,11], k = 5`
- Output: `9`

#### Solution Explanation
```python
def findKthPositive(arr: list[int], k: int) -> int:
    missing = 0
    current = 1
    index = 0
    while missing < k:
        if index < len(arr) and arr[index] == current:
            index += 1
        else:
            missing += 1
        if missing == k:
            return current
        current += 1
    return current

# Complexity Analysis
# - Time Complexity: O(n + k), where n is length of list.
# - Space Complexity: O(1), constant space usage.
```

- Increment through list counting missing numbers until reaching `k`.
- Return the correct number once the missing count matches `k`.

### 23. Merge k Sorted Lists (Hard)

#### Problem Statement
Merge `k` sorted linked lists and return it as one sorted list.

#### Sample Input and Output
- Input: `lists = [[1,4,5],[1,3,4],[2,6]]`
- Output: `[1,1,2,3,4,4,5,6]`

#### Solution Explanation
```python
from heapq import heappush, heappop

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: list[ListNode]) -> ListNode:
    min_heap = []
    for head in lists:
        if head:
            heappush(min_heap, (head.val, head))
    
    dummy = ListNode(0)
    current = dummy
    
    while min_heap:
        value, node = heappop(min_heap)
        current.next = ListNode(value)
        current = current.next
        if node.next:
            heappush(min_heap, (node.next.val, node.next))
    
    return dummy.next

# Complexity Analysis
# - Time Complexity: O(n log k), with `n` being all nodes and `k` being lists.
# - Space Complexity: O(k), heap usage.
```

- Use a priority queue (min-heap) to maintain smallest elements.
- Continuously extract and attach until exhausted.

### 133. Clone Graph (Medium)

#### Problem Statement
Clone a graph represented by a node's connections list and return the clone of the node. The graph is connected and undirected.

#### Sample Input and Output
- Input: `node` which represents connections in adjacency
- Output: Cloned graph starting from given node

#### Solution Explanation
```python
class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []

def cloneGraph(node: Node) -> Node:
    if not node:
        return None
    
    node_map = {}
    
    def clone(node):
        if node in node_map:
            return node_map[node]
        
        copy = Node(node.val)
        node_map[node] = copy
        
        for neighbor in node.neighbors:
            copy.neighbors.append(clone(neighbor))
        
        return copy

    return clone(node)

# Complexity Analysis
# - Time Complexity: O(n), each node and edge processed once.
# - Space Complexity: O(n), hash map for clones.
```

- Use DFS to reach each node, cloning and copying neighbors.
- Utilize a hashmap to store visited clones to avoid cycles.

Each solution leverages data structures, such as heaps, queues, and recursive approaches to efficiently solve diverse problems ranging from tree and linked list manipulations to graph cloning.

### 636. Exclusive Time of Functions (Medium)

#### Problem Statement
Given the `n` functions running on a single-threaded CPU, find the exclusive time of each function. Functions are run in a log series, where each log is formatted `function_id: start_or_end: timestamp`.

#### Sample Input and Output
- Input: `n = 2`, `logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]`
- Output: `[3,4]`

#### Solution Explanation
```python
def exclusiveTime(n: int, logs: list[str]) -> list[int]:
    result = [0] * n
    stack = []
    prev_time = 0

    for log in logs:
        fn_id, typ, time = log.split(':')
        fn_id, time = int(fn_id), int(time)
        
        if stack:
            result[stack[-1]] += time - prev_time
        
        if typ == 'start':
            stack.append(fn_id)
            prev_time = time
        else:
            result[stack.pop()] += 1
            prev_time = time + 1

    return result

# Complexity Analysis
# - Time Complexity: O(m), where m is the number of logs.
# - Space Complexity: O(n), related to the number of functions with ongoing execution tracks.
```

- Use a stack to manage ongoing function calls.
- Accumulate timestamps and handle transitions between start and end for exclusive computation.

### 498. Diagonal Traverse (Medium)

#### Problem Statement
Given a `m x n` matrix, return all elements of the matrix in a diagonal order.

#### Sample Input and Output
- Input: `matrix = [[1,2,3],[4,5,6],[7,8,9]]`
- Output: `[1,2,4,7,5,3,6,8,9]`

#### Solution Explanation
```python
def findDiagonalOrder(matrix: list[list[int]]) -> list[int]:
    if not matrix or not matrix[0]:
        return []
    
    m, n = len(matrix), len(matrix[0])
    result = []
    diagonals = {}

    for i in range(m):
        for j in range(n):
            if i + j not in diagonals:
                diagonals[i + j] = []
            diagonals[i + j].append(matrix[i][j])
    
    for key in range(m + n - 1):
        if key % 2 == 0:
            result.extend(reversed(diagonals[key]))
        else:
            result.extend(diagonals[key])
    
    return result

# Complexity Analysis
# - Time Complexity: O(m * n), where m is row and n is column count.
# - Space Complexity: O(m * n), space for diagonal groups.
```

- Use a dictionary to categorize elements by their diagonal sum.
- Collect and interleave organized elements based on order requirements.

### 766. Toeplitz Matrix (Easy)

#### Problem Statement
A matrix is Toeplitz if every diagonal from top-left to bottom-right contains the same element. Determine whether the given matrix is Toeplitz.

#### Sample Input and Output
- Input: `matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]`
- Output: `True`

#### Solution Explanation
```python
def isToeplitzMatrix(matrix: list[list[int]]) -> bool:
    m, n = len(matrix), len(matrix[0])
    for r in range(m - 1):
        for c in range(n - 1):
            if matrix[r][c] != matrix[r + 1][c + 1]:
                return False
    return True

# Complexity Analysis
# - Time Complexity: O(m * n), iterate through all elements.
# - Space Complexity: O(1), no extra space beyond input manipulation.
```

- Verify equality in each diagonal in one traversal.
- Ensure each element only compares to its diagonal successor.

### 163. Missing Ranges (Easy)

#### Problem Statement
Find the missing ranges given a sorted integer array where the range of elements is in the inclusive range `[lower, upper]`.

#### Sample Input and Output
- Input: `nums = [0,1,3,50,75]`, `lower = 0`, `upper = 99`
- Output: `["2", "4->49", "51->74", "76->99"]`

#### Solution Explanation
```python
def findMissingRanges(nums: list[int], lower: int, upper: int) -> list[str]:
    def format_range(start, end):
        return str(start) if start == end else f"{start}->{end}"

    result = []

    # Start with a previous value outside of the given range
    prev = lower - 1

    # Traverse all numbers including the upper limit as a final pass
    for num in nums + [upper + 1]:
        if num - prev >= 2:
            result.append(format_range(prev + 1, num - 1))
        prev = num

    return result

# Complexity Analysis
# - Time Complexity: O(n), iterate over list and end boundary.
# - Space Complexity: O(1), excluding result storage.
```

- Use a previous pointer starting just below the lower bond.
- Append ranges between previous and current elements, iterating through the array with a stop beyond the upper limit.

Each problem illustrates effective traversal and data handling within constraints. Techniques vary from utilizing stacks for state management, diagonal grouping for ordered traversal, and simple checks and formats for continuous evaluations.

### 200. Number of Islands (Medium)

#### Problem Statement
Given a 2D grid map of `'1's` (land) and `'0's` (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

#### Sample Input and Output
- Input: 
  ```
  grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]
  ```
- Output: `3`

#### Solution Explanation
```python
def numIslands(grid: list[list[str]]) -> int:
    if not grid:
        return 0

    def dfs(r, c):
        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == '0':
            return
        grid[r][c] = '0'  # Mark the land as visited by sinking the island
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)

    num_islands = 0

    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == '1':
                dfs(r, c)
                num_islands += 1

    return num_islands

# Complexity Analysis
# - Time Complexity: O(m * n), where m is the number of rows and n is the number of columns.
# - Space Complexity: O(m * n), recursion stack space in the worst case where grid is filled with `1`.
```

- Use DFS to explore each discovered island, marking parts as visited.
- Count islands as you progressively explore new unvisited land.

### 17. Letter Combinations of a Phone Number (Medium)

#### Problem Statement
Given a string containing digits from `2-9`, return all possible letter combinations that the number could represent. Follow standard mapping of digits to letters found on telephone buttons.

#### Sample Input and Output
- Input: `digits = "23"`
- Output: `["ad","ae","af","bd","be","bf","cd","ce","cf"]`

#### Solution Explanation
```python
def letterCombinations(digits: str) -> list[str]:
    if not digits:
        return []

    phone_map = {
        "2": "abc", "3": "def", "4": "ghi", 
        "5": "jkl", "6": "mno", "7": "pqrs", 
        "8": "tuv", "9": "wxyz"
    }

    def backtrack(index, path):
        if index == len(digits):
            combinations.append("".join(path))
            return
        possible_letters = phone_map[digits[index]]
        for letter in possible_letters:
            path.append(letter)
            backtrack(index + 1, path)
            path.pop()

    combinations = []
    backtrack(0, [])
    return combinations

# Complexity Analysis
# - Time Complexity: O(4^n), where n is the length of the digits string.
# - Space Complexity: O(n), where n is the depth of recursion (path length).
```

- Perform backtracking exploration using digit-character mapping.
- Build combinations by appending mapped letters recursively.

### 708. Insert into a Sorted Circular Linked List (Medium)

#### Problem Statement
Given a node from a sorted circular linked list, insert a value into the list such that it remains a sorted circular list.

#### Sample Input and Output
- Input: Sorted circular linked list `3 -> 4 -> 5 -> 1 -> 2 -> (back to 3)`, insert `0`
- Output: Sorted circular linked list with inserted node: `3 -> 4 -> 5 -> 0 -> 1 -> 2 -> (back to 3)`

#### Solution Explanation
```python
class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next

def insert(head: Node, insertVal: int) -> Node:
    if not head:
        new_node = Node(insertVal)
        new_node.next = new_node
        return new_node

    prev, curr = head, head.next
    to_insert = False

    while True:
        if prev.val <= insertVal <= curr.val:
            to_insert = True
        elif prev.val > curr.val:
            if insertVal >= prev.val or insertVal <= curr.val:
                to_insert = True
        
        if to_insert:
            prev.next = Node(insertVal, curr)
            return head
        
        prev, curr = curr, curr.next

        if prev == head:
            break

    prev.next = Node(insertVal, curr)
    return head

# Complexity Analysis
# - Time Complexity: O(n), n is the number of nodes in the linked list.
# - Space Complexity: O(1), no additional space used aside from new node.
```

- Traverse the list to identify a correct insert position by checking boundaries.
- Handle edge cases for insert outside current max/min values and into head region. 

Each solution illustrates efficient traversal or algorithmic adaptation in various data forms, focusing on problem-specific constraints and leveraging basic operations for desired outcomes.