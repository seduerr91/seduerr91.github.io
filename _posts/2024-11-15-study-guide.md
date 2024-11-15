---
title: Leetcode Study Guide
tags: [Coding]
style: fill
color: secondary
description: A few problems from Leetcode

---

### 1. Minimum Remove to Make Valid Parentheses

**Problem Statement:**
Given a string `s` of `'('`, `')'`, and lowercase English characters, remove the minimum number of parentheses to make the string valid. Return any valid string.

**Sample Input:**
```python
s = "lee(t(c)o)de)"
```

**Solution in Python:**
```python
def minRemoveToMakeValid(s: str) -> str:
    # Initialize a stack to keep track of the indices of unmatched '('
    stack = []
    # Set to track indices of characters to remove
    index_to_remove = set()

    # First pass: Identify unmatched parentheses
    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()  # Found a match
            else:
                index_to_remove.add(i)  # Unmatched ')'

    # Add any remaining unmatched '(' indices to the removal set
    index_to_remove = index_to_remove.union(set(stack))

    # Second pass: Build the result
    result = []
    for i, char in enumerate(s):
        if i not in index_to_remove:
            result.append(char)
    
    return ''.join(result)
```

**Explanation:**
- **Stack Usage:** Use a stack to keep track of the indices of open parentheses that don't have a matching close parenthesis.
- **First Pass:** Traverse the string and build a set of indices to remove, consisting of unmatched close parentheses and any remaining open ones.
- **Second Pass:** Construct the output string by ignoring characters at the indices marked for removal.

---

### 2. Kth Largest Element in an Array

**Problem Statement:**
Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array.

***Sample Input:**
```python
nums = [3,2,1,5,6,4]
k = 2
```

**Solution in Python:**
```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    # Use a heap to efficiently find the kth largest element
    return heapq.nlargest(k, nums)[-1]
```

**Explanation:**
- **Heap Usage:** The `heapq.nlargest` function efficiently finds the k largest elements in `nums`. The last element in this collection is the k-th largest.
- **Min-Heap:** A min-heap is a binary heap where the parent node is always less than or equal to its child nodes. This property ensures that the smallest element is always at the root of the heap.
- **How Min-Heap is Used:** In the `heapq.nlargest` function, a min-heap of size `k` is maintained. As elements from `nums` are processed, they are added to the heap. If the heap exceeds size `k`, the smallest element (the root of the heap) is removed. This way, the heap always contains the `k` largest elements seen so far.
- **Time Complexity:** The `heapq.nlargest` function maintains a min-heap of the largest `k` elements scanned so far. This is efficient for the selection of k-th largest elements, with a time complexity of O(n log k), where `n` is the number of elements in `nums`.
---

### 3. Basic Calculator II

**Problem Statement:**
Implement a basic calculator to evaluate a simple expression string containing non-negative integers, '+', '-', '*', '/', and spaces.

**Sample Input:**
```python
s = "3+2*2"
```

**Solution in Python:**
```python
def calculate(s: str) -> int:
    if not s:
        return 0
    
    # Use a stack to store intermediate computations
    stack = []
    current_number = 0
    operation = '+'
    
    for i, char in enumerate(s):
        if char.isdigit():
            current_number = current_number * 10 + int(char)
        
        # If current character is an operator or it's the end of the string
        if char in '+-*/' or i == len(s) - 1:
            if operation == '+':
                stack.append(current_number)
            elif operation == '-':
                stack.append(-current_number)
            elif operation == '*':
                stack.append(stack.pop() * current_number)
            elif operation == '/':
                # Integer division towards zero
                stack.append(int(stack.pop() / current_number))
                
            # Update operation and reset number
            operation = char
            current_number = 0
    
    # Sum all elements in the stack to get the result
    return sum(stack)
```

**Explanation:**
- **Stack:** Use a stack to keep track of numbers to add/subtract.
- **Operators:** On encountering an operator or the end, push the computed result from the stack for operations and continue parsing.
- **Division Handling:** Use `int()` to handle truncation towards zero when performing division.

---

### 4. Binary Tree Vertical Order Traversal

**Problem Statement:**
Given a binary tree, return the vertical order traversal of its nodes' values.

**Sample Input:**
```python
# Tree structure
#     3
#    / \
#   9   20
#      /  \
#     15   7

# Create the TreeNode class for representing nodes in the binary tree
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(3)
root.left = TreeNode(9)
root.right = TreeNode(20, TreeNode(15), TreeNode(7))
```

**Solution in Python:**
```python
from collections import defaultdict, deque

def verticalOrder(root):
    if not root:
        return []
    
    # Column table stores node values grouped by their column index
    column_table = defaultdict(list)
    # Deque for BFS; stores tuples of (node, column index)
    queue = deque([(root, 0)])
    
    while queue:
        node, column = queue.popleft()
        
        if node:
            column_table[column].append(node.val)
            # Add left child to the queue with column index decremented
            queue.append((node.left, column - 1))
            # Add right child to the queue with column index incremented
            queue.append((node.right, column + 1))
    
    # Extract columns in order of their index from left to right
    return [column_table[i] for i in sorted(column_table.keys())]
```

**Explanation:**
- **BFS and Columns:** Use a queue for BFS traversal with an associated column number for each node, storing the nodes in a column-based dictionary.
- **Column Traversal:** Process nodes left to right by sorting keys, reflecting vertical slices of the tree in output order.

---

### 5. Valid Word Abbreviation

**Problem Statement:**
Given a non-empty string `word` and an abbreviation `abbr`, return whether the string matches the given abbreviation.

**Sample Input:**
```python
word = "internationalization"
abbr = "i12iz4n"
```

**Solution in Python:**
```python
def validWordAbbreviation(word: str, abbr: str) -> bool:
    i = 0 # Pointer for word
    j = 0 # Pointer for abbreviation
    
    while i < len(word) and j < len(abbr):
        if abbr[j].isdigit():
            if abbr[j] == '0':  # Leading zero is invalid
                return False
            num = 0
            # Parse number
            while j < len(abbr) and abbr[j].isdigit():
                num = num * 10 + int(abbr[j])
                j += 1
            i += num  # Move i ahead by the number of characters
        else:
            if word[i] != abbr[j]:
                return False
            i += 1
            j += 1
            
    return i == len(word) and j == len(abbr)
```

**Explanation:**
- **Abbreviation Parsing:** Parse the number parts in `abbr` to skip characters in `word` and move forward.
- **Boundary Checks:** End up with both word and abbreviation fully consumed to confirm a match.

---

### 6. Shortest Path in Binary Matrix

**Problem Statement:**
Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix from top-left to bottom-right.

**Sample Input:**
```python
grid = [[0, 1], [1, 0]]
```

**Solution in Python:**
```python
from collections import deque

def shortestPathBinaryMatrix(grid):
    if grid[0][0] != 0 or grid[-1][-1] != 0:
        return -1
    
    n = len(grid)
    directions = [(1, 0), (0, 1), (1, 1), (-1, 0), (0, -1), (-1, -1), (-1, 1), (1, -1)]
    queue = deque([(0, 0, 1)])  # (x, y, path length)
    grid[0][0] = 1  # mark as visited by setting to 1
    
    while queue:
        x, y, path_length = queue.popleft()
        if x == n - 1 and y == n - 1:
            return path_length
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 <= nx < n and 0 <= ny < n and grid[nx][ny] == 0:
                queue.append((nx, ny, path_length + 1))
                grid[nx][ny] = 1
    
    return -1
```

**Explanation:**
- **BFS for Shortest Path:** Use BFS to explore all possible paths from the top-left, utilizing level-order traversal.
- **Visiting Cells:** Mark visited cells to prevent re-processing and avoid infinite loops.

---

### 7. Nested List Weight Sum

**Problem Statement:**
Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

**Sample Input:**
```python
nestedList = [1, [4, [6]]]
```

**Solution in Python:**
```python
def depthSum(nestedList):
    def dfs(nlist, depth):
        total_sum = 0
        for element in nlist:
            if isinstance(element, int):
                total_sum += element * depth
            else:
                total_sum += dfs(element, depth + 1)
        return total_sum
        
    return dfs(nestedList, 1)
```

**Explanation:**
- **DFS Traversal:** Recursively explore each level of the nested structure and compute the cumulative weighted sum.
- **Depth Tracking:** Increase the weight (depth) with each recursive call to reflect the current nesting level.

---

### 8. Valid Palindrome

**Problem Statement:**
Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Sample Input:**
```python
s = "A man, a plan, a canal: Panama"
```

**Solution in Python:**
```python
def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1

    while left < right:
        # Skip non-alphanumeric characters from the left
        while left < right and not s[left].isalnum():
            left += 1
        # Skip non-alphanumeric characters from the right
        while left < right and not s[right].isalnum():
            right -= 1
        
        # Compare characters in a case-insensitive manner
        if s[left].lower() != s[right].lower():
            return False
        
        # Move pointers inward
        left += 1
        right -= 1

    return True
```

**Explanation:**
- **Two-pointer Technique:** Use two pointers starting at opposite ends moving towards the center, ignoring non-alphanumeric characters.
- **Case-insensitivity:** Compare characters in lowercase to determine palindrome properties.

### 9. Copy List with Random Pointer

**Problem Statement:**
A linked list is given where each node contains an additional random pointer which could point to any node in the list or `null`. You need to create a deep copy of the list.

**Sample Input:**
```python
# Example list: A -> B -> C with random pointers
# A's random -> C, B's random -> A, C's random -> B

# Node structure
class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

# Creating nodes
A = Node(1)
B = Node(2)
C = Node(3)

A.next = B
B.next = C

A.random = C
B.random = A
C.random = B
```

**Solution in Python:**
```python
class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val
        self.next = next
        self.random = random

def copyRandomList(head):
    if not head:
        return None

    # Step 1: Create new nodes interleaved with the original list
    current = head
    while current:
        new_node = Node(current.val, current.next)
        current.next = new_node
        current = new_node.next

    # Step 2: Assign random pointers for the new nodes
    current = head
    while current:
        if current.random:
            current.next.random = current.random.next
        current = current.next.next

    # Step 3: Separate the new list from the original list
    dummy = Node(0)
    current, copy_current = head, dummy

    while current:
        # Advance original current nodes and copy current nodes in-sync
        next_origin = current.next.next
        copy_current.next = current.next
        copy_current = copy_current.next
        current.next = next_origin
        current = next_origin
    
    return dummy.next
```

**Explanation:**
- **Interleave Nodes:** Create new nodes inserted immediately after each original node. This insertion helps set up random pointers in the copied nodes without additional space.
- **Assign Random Links:** Utilize the current node's random link and its next pointer to set the copied node’s random link.
- **Decouple Lists:** Re-link the original list while extracting the copied list using a dummy node for clean separation.

Let's break down the problem and solution using simple language.

#### Problem Summary:

You have a special kind of list called a linked list. This list is made up of nodes. Each node has:

1. A value (like a number or a letter).
2. A pointer to the next node in the list (which tells you who comes next).
3. A "random pointer," which can point to any other node or can be empty (null).

The goal is to create a complete copy (or "clone") of this list. Importantly, the connections made by the "next" pointers and the "random" pointers need to be exactly the same in the new list as in the original.

#### Solution Explanation:

We'll do this in three main steps. Think of a step-by-step journey to clone the list.

##### Step 1: Make Duplicate Nodes

We first create a new node for each existing node in the list. We place these new nodes right after each original node, creating a "sandwich" pattern. So, for an original node A followed by B like:

`A -> B -> C`

The list will temporarily look like this:

`A -> A' -> B -> B' -> C -> C'`

(A' is a copy of A, B' is a copy of B, etc.)

##### Step 2: Copy Random Pointers

In this step, we make sure the random pointers in the copy list (A', B', C', etc.) point to the right places:

- We look at each original node's random pointer and set the copied node's random pointer to point to the copied version of whatever the original node's random pointer points to.

##### Step 3: Detach the New List from the Old

Now that the "next" and "random" pointers in the copied nodes are correctly set up, we separate the copied nodes from the originals to create a standalone list.

We'll use a dummy node (a helper starting point) to help collect all copied nodes into a new list, while restoring the original list to its initial state.

In the end, you get a completely independent and accurate copy of the original linked list.

#### Code Breakdown:

```python
class Node:
    def __init__(self, val, next=None, random=None):
        self.val = val            # Store value of the node
        self.next = next          # Store reference to the next node
        self.random = random      # Store reference to the random node

def copyRandomList(head):
    if not head:                  # If the list is empty, return None
        return None

    # Step 1
    current = head
    while current:
        # Create a new node (copy of current node)
        new_node = Node(current.val, current.next)
        current.next = new_node  # Insert new node just after the current
        current = new_node.next  # Move to the next original node

    # Step 2
    current = head
    while current:
        if current.random:
            # Update the random pointer for the copy node
            current.next.random = current.random.next
        current = current.next.next  # Skip to the next original node

    # Step 3
    dummy = Node(0)  # A new starting node for the copied list
    current, copy_current = head, dummy
    while current:
        next_origin = current.next.next  # Where the next original node is
        # Fix the next link of the copied nodes
        copy_current.next = current.next
        copy_current = copy_current.next  # Move to the next node in copy
        current.next = next_origin        # Restore the original link
        current = next_origin             # Move to the next original node

    return dummy.next  # Return the head of the copied list
```

This code carefully handles creating the copied list while ensuring all connections mirror those in the original list, using smart re-linking and handling of nodes.

---

### 10. Lowest Common Ancestor of a Binary Tree

**Problem Statement:**
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes.

**Sample Input:**
```python
# Example binary tree:
#         3
#        / \
#       5   1
#      /|   |\
#     6 2   0 8
#       |\
#       7 4

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

# Build tree nodes
root = TreeNode(3)
node5 = TreeNode(5)
node1 = TreeNode(1)
node6 = TreeNode(6)
node2 = TreeNode(2)
node0 = TreeNode(0)
node8 = TreeNode(8)
node7 = TreeNode(7)
node4 = TreeNode(4)

# Assign relationships
root.left = node5
root.right = node1
node5.left = node6
node5.right = node2
node1.left = node0
node1.right = node8
node2.left = node7
node2.right = node4
```

**Solution in Python:**
```python
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def lowestCommonAncestor(root, p, q):
    if not root or root == p or root == q:
        return root
    
    # Search nodes in left and right subtrees
    left_lca = lowestCommonAncestor(root.left, p, q)
    right_lca = lowestCommonAncestor(root.right, p, q)

    # If a node is found in both left and right subtrees, root is LCA
    if left_lca and right_lca:
        return root
    
    # Otherwise, return the non-null node
    return left_lca if left_lca else right_lca
```

**Explanation:**
- **Recursive Approach:** At each node, recursively look for nodes `p` and `q` in its left and right subtrees.
- **Base Case:** Immediately return the current node if it matches either `p` or `q`.
- **Determine LCA:** If both left and right recursive calls return non-null nodes, the current node is the LCA. If only one side returns a non-null, propagate that upwards.

---

### 11. Maximum Swap

**Problem Statement:**
Given a non-negative integer, swap two digits at most once to obtain the maximum value possible.

**Sample Input:**
```python
num = 2736
# Output is 7236 by swapping '7' and '2'
```

**Solution in Python:**
```python
def maximumSwap(num: int) -> int:
    num_list = list(str(num))
    last = {int(x): i for i, x in enumerate(num_list)}

    for i, x in enumerate(num_list):
        for d in range(9, int(x), -1):
            if last.get(d, -1) > i:
                num_list[i], num_list[last[d]] = num_list[last[d]], num_list[i]
                return int(''.join(num_list))
                
    return num
```

**Explanation:**
- **Use of Dictionary:** Record the last occurrence of each digit.
- **Optimal Swap Detection:** For each digit starting from the left, find a larger digit to the right and swap for potential maximum value.
- **Single Iteration:** Perform a valid swap once and terminate, as only one swap is allowed.

---

### 12. Valid Palindrome II

**Problem Statement:**
Return `True` if a given string can become a palindrome by deleting at most one character.

**Sample Input:**
```python
s = "abca"
# Output is True because you can remove 'c' to make "aba"
```

**Solution in Python:**
```python
def validPalindrome(s: str) -> bool:
    def is_palindrome_range(start, end):
        return all(s[i] == s[end - i + start] for i in range(start, (start + end) // 2 + 1))
    
    start, end = 0, len(s) - 1
    while start < end:
        if s[start] != s[end]:
            return is_palindrome_range(start+1, end) or is_palindrome_range(start, end-1)
        start += 1
        end -= 1
    return True
```

**Explanation:**
- **Two-pointer Technique:** Identify mismatch and verify left and right ignore scenarios separately for palindrome status.
- **Sub-Palindrome Check:** Use a helper function to verify if a partial string forms a palindrome.
- **Time Efficiency:** Optimally handle mismatches in one pass with additional checks for deletion scenarios.

---

### 13. Lowest Common Ancestor of a Binary Tree III

**Problem Statement:**
In a binary tree where each node has a pointer to its parent, find the lowest common ancestor of two given nodes.

**Sample Input:**
```python
# Assuming all nodes have a parent pointer:
# Structure similar to previous binary tree example with added `parent` attributes

# Nodes as an example
node5.parent = root
node1.parent = root
node6.parent = node5
node2.parent = node5
node0.parent = node1
node8.parent = node1
node7.parent = node2
node4.parent = node2
```

**Solution in Python:**
```python
def lowestCommonAncestor(p, q):
    ancestors = set()
    
    # Traverse from p to the root, adding all ancestors to set
    while p:
        ancestors.add(p)
        p = p.parent
    
    # Traverse from q to the root; return the first common ancestor found
    while q:
        if q in ancestors:
            return q
        q = q.parent
```

**Explanation:**
- **Ancestor Trace:** Use a set to track all ancestors of one node (say `p`), then walk up the tree from the other node (`q`).
- **Find First Match:** Return when finding the first ancestor that appears in both paths.
- **Shared Parent:** This efficiently finds where two paths meet in their upward traversal.

---

### 14. Sum Root to Leaf Numbers

**Problem Statement:**
In a binary tree where each path from the root to leaf represents a number, return the sum of all numbers.

**Sample Input:**
```python
# Example Tree:
#     1
#    / \
#   2   3
# Paths are: 12 (root to leaf) and 13, sum is 25

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
```

**Solution in Python:**
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def sumNumbers(root: TreeNode) -> int:
    def dfs(node, current_sum):
        if not node:
            return 0
        current_sum = current_sum * 10 + node.val
        if not node.left and not node.right:
            return current_sum
        return dfs(node.left, current_sum) + dfs(node.right, current_sum)
    
    return dfs(root, 0)
```

**Explanation:**
- **Recursive DFS:** Keep track of cumulative number formed by the node values down each path.
- **Leaf Node Sum:** Add path sums only when a leaf is reached.
- **Paths Accumulation:** Accumulate sums progressively by traversing the tree recursively.

---

### 15. Custom Sort String

**Problem Statement:**
Reorder the characters of `s` according to `order`, and place characters not in `order` arbitrarily.

**Sample Input:**
```python
order = "cba"
s = "abcd"
# Output can be "cbad", "cbda", etc.
```

**Solution in Python:**
```python
def customSortString(order: str, s: str) -> str:
    # Map characters of `order` to their index
    order_map = {c: i for i, c in enumerate(order)}
    # Sort `s` based on defined order map; default to a large index if not found
    return ''.join(sorted(s, key=lambda x: order_map.get(x, len(order))))
```

**Explanation:**
- **Custom Sorting:** A dictionary is used to map each character in `order` to its position.
- **Sorting with Key:** Python's `sorted()` exploits this map to order `s` by these indices, assigning default order to unlisted characters.
- **Arbitrary Tail:** Unspecified characters in `order` gain arbitrary placement post sorting.

---

### 16. Random Pick with Weight

**Problem Statement:**
Given an array `w` of integers, implement a function `pickIndex` that picks an index with probability proportional to its weight.

**Sample Input:**
```python
w = [1, 3, 1]
# Index 1 (weight 3) should be picked more often than 0 and 2 (weight 1 each).
```

**Solution in Python:**
```python
import random

class Solution:
    def __init__(self, w: list[int]):
        self.prefix_sums = []
        total = 0
        for weight in w:
            total += weight
            self.prefix_sums.append(total)
        self.total = total

    def pickIndex(self) -> int:
        # Randomly choose a value from 1 to total
        target = random.randint(1, self.total)
        low, high = 0, len(self.prefix_sums) - 1
        # Binary search to find the appropriate index
        while low < high:
            mid = (low + high) // 2
            if self.prefix_sums[mid] < target:
                low = mid + 1
            else:
                high = mid
        return low
```

**Explanation:**
- **Prefix Sum Array:** Construct it to give a cumulative sum corresponding to areas of proportional weights.
- **Binary Search by Target:** Use binary search for efficient lookup of the target weight, providing logarithmic time complexity for random selection.
- **Weighted Randomization:** Ensures each index is chosen relative to its weight's magnitude, giving more selection frequency to higher weights.

****### 17. Minimum Add to Make Parentheses Valid

**Problem Statement:**
Given a string of parentheses `s`, add the minimum number of parentheses so the string becomes valid. Return the count of added parentheses.

**Solution in Python:**
```python
def minAddToMakeValid(s: str) -> int:
    balance = 0
    additions = 0

    for char in s:
        if char == '(':
            balance += 1
        else:
            balance -= 1
            if balance < 0:
                additions += 1
                balance = 0

    return additions + balance
```

**Time Complexity:** O(n), where n is the length of the string.

**Explanation:**
A balanced measure is maintained to track unmatched parentheses. Negative balance indicates excess closing brackets, resolved by additions. Remaining open parentheses by the end need closing, yielding effective correction additions.

---

### 17. Product of Two Run-Length Encoded Arrays

**Problem Statement:**
Given two run-length encoded arrays, return their product in run-length encoded form.

**Sample Input:**
```python
encoded1 = [[1,3],[2,2],[3,1]]
encoded2 = [[2,3],[3,3]]
# Output will be [2,3] (1*2=2) and [6,2] (3*2=6)
```

**Solution in Python:**
```python
def findRLEArray(encoded1, encoded2):
    i, j = 0, 0
    result = []
    
    while i < len(encoded1) and j < len(encoded2):
        val1, freq1 = encoded1[i]
        val2, freq2 = encoded2[j]
        product = val1 * val2
        min_freq = min(freq1, freq2)
        
        # Append the product and its frequency to the result
        if result and result[-1][0] == product:
            # Merge if the last product in the result is the same
            result[-1][1] += min_freq
        else:
            result.append([product, min_freq])
        
        # Decrement the used frequencies
        encoded1[i][1] -= min_freq
        encoded2[j][1] -= min_freq
        
        # Move to the next run-length encoded chunk if the current frequency is exhausted
        if encoded1[i][1] == 0:
            i += 1
        if encoded2[j][1] == 0:
            j += 1
    
    return result
```

**Explanation:**
- **Two-Pointer Technique:** Traverse both encoded arrays with two pointers, managing the products for overlapping frequency segments.
- **Merge Products:** Carefully append products, merging cumulative frequencies when consecutive elements have the same product.
- **Complexity:** Linear in terms of input size, as each transition through an encoded block involves constant-time operations.

---

### 18. K Closest Points to Origin

**Problem Statement:**
Given an array of points and an integer `k`, find the k closest points to the origin `(0, 0)`.

**Sample Input:**
```python
points = [[1,3],[-2,2],[2,-2]]
k = 2
# Closest to origin are [-2,2] and [2,-2]
```

**Solution in Python:**
```python
import heapq

def kClosest(points, k: int):
    # Calculate distances and use heap to find closest points
    return heapq.nsmallest(k, points, key=lambda x: x[0]**2 + x[1]**2)
```

**Explanation:**
- **Heap Usage:** Leverages a heap-based approach with `nsmallest` to efficiently determine the k smallest distance points based on Euclidean distance (squared).
- **Complexity:** Utilizes heap properties for `O(n log k)` performance, optimal for ensuring closest point selection without full sorting.

---

### 19. Dot Product of Two Sparse Vectors

**Problem Statement:**
Given two sparse vectors, compute their dot product.

**Sample Input:**
```python
v1 = [1, 0, 0, 2, 3]
v2 = [0, 3, 0, 4, 0]
# Non-zero indices are [0,3,4] and only index 3 overlaps, so dot product is 2*4=8
```

**Solution in Python:**
```python
class SparseVector:
    def __init__(self, nums: list[int]):
        # Use a dictionary to store non-zero values
        self.non_zero = {i: v for i, v in enumerate(nums) if v != 0}

    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        for i, v in self.non_zero.items():
            if i in vec.non_zero:
                result += v * vec.non_zero[i]
        return result
```

**Explanation:**
- **Sparse Representation:** Store only non-zero elements in a dictionary, allowing efficient dot product computation by iterating over non-zero entries.
- **Complexity:** The computation is minimized to operate on only non-zero indices, providing substantial optimization for sparsity.

---

### 20. Merge k Sorted Lists

**Problem Statement:**
Given an array of linked lists, each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return it.

**Sample Input:**
```python
# For lists [[1,4,5],[1,3,4],[2,6]], merged list will be [1,1,2,3,4,4,5,6].
```

**Solution in Python:**
```python
from heapq import heappop, heappush
from typing import List, Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeKLists(lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    min_heap = []
    for index, node in enumerate(lists):
        if node:
            heappush(min_heap, (node.val, index, node))
    
    dummy = ListNode()
    current = dummy
    
    while min_heap:
        _, index, node = heappop(min_heap)
        current.next = node
        current = current.next
        if node.next:
            heappush(min_heap, (node.next.val, index, node.next))
    
    return dummy.next
```

**Explanation:**
- **Priority Queue (Heap):** Min-heap ensures efficient smallest element extraction across list heads.
- **Sequential Insertion:** Streamlines node selections and updates based on extracted minimums, maintaining sorted order seamlessly.
- **Complexity:** Optimal `O(N log k)` due to controlled heap size, where N is total nodes, k is the number of lists.

---

### 21. Pow(x, n)

**Problem Statement:**
Implement a function to calculate `x` raised to the power `n` (i.e., \(x^n\)).

**Sample Input:**
```python
x = 2.0
n = 10
# Output should be 1024.0
```

**Solution in Python:**
```python
def myPow(x: float, n: int) -> float:
    if n == 0:
        return 1.0
    if n < 0:
        x = 1 / x
        n = -n
    
    half = myPow(x, n // 2)
    if n % 2 == 0:
        return half * half
    else:
        return half * half * x
```

**Explanation:**
- **Exponentiation by Squaring:** Divides the power into halves recursively, economizing computation through reuse of half-calculated results.
- **Negatives and Zeros:** Handles negative powers by inverting `x`, ensuring zero power baseline correctly returns 1.
- **Complexity:** Logarithmic, due to iterative division concisely narrowing down computations.

---

### 22. Merge Sorted Array

**Problem Statement:**
Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.

**Sample Input:**
```python
nums1 = [1,2,3,0,0,0]
m = 3
nums2 = [2,5,6]
n = 3
# Merged array should be [1,2,2,3,5,6]
```

**Solution in Python:**
```python
def merge(nums1, m, nums2, n):
    i, j, k = m - 1, n - 1, m + n - 1
    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1
        k -= 1
```

**Explanation:**
- **Backfill Approach:** Utilize reverse pointers pushing larger values into `nums1` from the back, safeguarding existing data.
- **In-Place Merging:** Efficiently executes in-place operations by leveraging available space at the end of `nums1`.

---

### 23. Binary Tree Right Side View

**Problem Statement:**
Given a binary tree, imagine standing on its right side. Return the values of the visible nodes from top to bottom.

**Sample Input:**
```python
# Tree:
#     1
#    / \
#   2   3
#    \   \
#     5   4
# Output should be [1,3,4]
```

**Solution in Python:**
```python
from collections import deque

def rightSideView(root):
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
```

**Explanation:**
- **Level-Order Traversal:** BFS through using a queue captures nodes level-wise with the rightmost node at each level.
- **Visible Nodes:** Extract last node's value of each level for constructing the view visible from the right side.

---

### 24. Buildings With an Ocean View

**Problem Statement:**
Given an array representing heights of buildings, determine which buildings have an ocean view (last or taller than subsequent buildings).

**Sample Input:**
```python
heights = [4,2,3,1]
# Output should be [0,2,3] indicating buildings at indices with ocean view
```

**Solution in Python:**
```python
def findBuildings(heights):
    result = []
    max_height = 0
    
    # Traverse from end to start
    for i in range(len(heights) - 1, -1, -1):
        if heights[i] > max_height:
            result.append(i)
            max_height = heights[i]
    
    # Reverse to maintain order
    return result[::-1]
```

**Explanation:**
- **Right-to-Left Evaluation:** Contextualizes ocean views by effectively determining visibility based on rightwards checks.
- **Output Order:** Reversal of final list reinstates left-to-right order according to original indices, maintaining logical consistency with the input.

---

### 25. Meeting Rooms II

**Problem Statement:**
Given an array of meeting time intervals, determine the minimum number of conference rooms required to accommodate all meetings.

**Sample Input:**
```python
intervals = [[0, 30], [5, 10], [15, 20]]
# Output should be 2
```

**Solution in Python:**
```python
import heapq

def minMeetingRooms(intervals):
    if not intervals:
        return 0

    # First, sort the intervals by start time
    intervals.sort(key=lambda x: x[0])
    
    # Initialize a min-heap to track the end times of meetings
    heap = []

    for start, end in intervals:
        # If the meeting with the earliest end time is finished before the current meeting starts, remove it
        if heap and heap[0] <= start:
            heapq.heappop(heap)
        # Add the current meeting's end time to the heap
        heapq.heappush(heap, end)

    # The size of the heap will tell us the minimum number of rooms required
    return len(heap)
```

**Explanation:**
- **Sorting and Heap Usage:** Sort meetings by start time, maintaining a min-heap of ongoing meeting end times. As new meetings start, check for and remove completed ones, dynamically allocating rooms.
- **Complexity:** Sorting takes `O(n log n)` and each heap operation takes `O(log n)`, yielding an efficient solution.

---

### 26. Moving Average from Data Stream

**Problem Statement:**
Implement a class that calculates the moving average of the last `n` numbers from a stream of integers.

**Sample Operation:**
```python
m = MovingAverage(3)
m.next(1)  # returns 1.0
m.next(10) # returns 5.5
m.next(3)  # returns 4.66667
m.next(5)  # returns 6.0
```

**Solution in Python:**
```python
from collections import deque

class MovingAverage:
    def __init__(self, size: int):
        self.size = size
        self.queue = deque()
        self.current_sum = 0

    def next(self, val: int) -> float:
        if len(self.queue) == self.size:
            self.current_sum -= self.queue.popleft()
        self.queue.append(val)
        self.current_sum += val
        return self.current_sum / len(self.queue)
```

**Explanation:**
- **Queue Management:** Utilize a fixed-size queue to maintain window elements. On every new element, adjust the current sum by identifying outdated values to stabilize the computation within constant space and time complexity for each input.

---

### 27. Top K Frequent Elements

**Problem Statement:**
Return the `k` most frequent elements from a given array of integers.

**Sample Input:**
```python
nums = [1,1,1,2,2,3]
k = 2
# Output should be [1,2]
```

**Solution in Python:**
```python
from collections import Counter
import heapq

def topKFrequent(nums, k):
    count = Counter(nums)  # Count frequency of each element
    return heapq.nlargest(k, count.keys(), key=count.get)
```

**Explanation:**
- **Counter and Heap Combination:** Frequency counts are stored in a counter, then the most frequent elements are identified using a heap. The heap efficiently finds the k largest frequencies, ensuring optimal selection.

---

### 28. Kth Smallest Element in a Sorted Matrix

**Problem Statement:**
Given a sorted `n x n` matrix (sorted by rows and columns), find the k-th smallest element.

**Sample Input:**
```python
matrix = [[1,5,9],[10,11,13],[12,13,15]]
k = 8
# Output should be 13
```

**Solution in Python:**
```python
import heapq

def kthSmallest(matrix, k):
    n = len(matrix)
    min_heap = []

    # Push the first element of each row in a heap
    for r in range(min(k, n)):
        heapq.heappush(min_heap, (matrix[r][0], r, 0))
    
    count, number = 0, 0
    while min_heap:
        number, r, c = heapq.heappop(min_heap)
        count += 1
        if count == k:
            break
        if c + 1 < n:
            heapq.heappush(min_heap, (matrix[r][c+1], r, c+1))
    
    return number
```

**Explanation:**
- **Heap Management:** Push each row's first element to a min-heap to simulate "sorted order." Continuously pop from the heap, pushing consecutive entries from rows, resulting in efficient retrieval.

---

### 29. Random Pick Index

**Problem Statement:**
Randomly pick an index of a given target number in an array containing possible duplicates.

**Sample Input:**
```python
nums = [1, 2, 3, 3, 3]
target = 3
# Random outputs can be 2, 3, or 4
```

**Solution in Python:**
```python
import random
from collections import defaultdict

class Solution:
    def __init__(self, nums: list[int]):
        # Map each number to its indices
        self.positions = defaultdict(list)
        for index, num in enumerate(nums):
            self.positions[num].append(index)

    def pick(self, target: int) -> int:
        return random.choice(self.positions[target])
```

**Explanation:**
- **Index Mapping:** Use a dictionary to record indices of each value. Randomly select among stored indices for desired target numbers, enabling fast and unbiased selection.

---

### 30. Diagonal Traverse

**Problem Statement:**
Return the elements of a matrix in diagonal order.

**Sample Input:**
```python
matrix = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
]
# Output should be [1,2,4,7,5,3,6,8,9]
```

**Solution in Python:**
```python
def findDiagonalOrder(mat):
    if not mat or not mat[0]:
        return []

    diagonals = {}
    # Organize matrix elements into diagonals
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            if i + j not in diagonals:
                diagonals[i + j] = []
            diagonals[i + j].append(mat[i][j])

    result = []
    # Extract in the required zigzag order
    for k in sorted(diagonals.keys()):
        if k % 2 == 0:
            result.extend(reversed(diagonals[k]))
        else:
            result.extend(diagonals[k])

    return result
```

**Explanation:**
- **Diagonal Bucketing:** Group by sums of indices (`i+j`) to collate diagonal elements. Alternate extraction orders ensure zigzag pattern conforming to diagonal requirements.

---

### 31. Diameter of Binary Tree

**Problem Statement:**
Determine the diameter of a binary tree, defined by the longest path between any two nodes.

**Sample Input:**
```python
# Example tree:
#     1
#    / \
#   2   3
#  / \     
# 4   5   
# Diameter is the path 4 -> 2 -> 1 -> 3 or 5 -> 2 -> 1 -> 3
```

**Solution in Python:**
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
        # Update the diameter at this node
        diameter = max(diameter, left_depth + right_depth)
        return max(left_depth, right_depth) + 1
    
    depth(root)
    return diameter
```

**Explanation:**
- **Recursive Depth Calculation:** Recursively compute depth at each node, simultaneously computing potential path lengths (left depth + right depth) that inform the current longest diameter.

---

### 32. Subarray Sum Equals K

**Problem Statement:**
Find total number of continuous subarrays with a sum equal to `k`.

**Sample Input:**
```python
nums = [1,1,1]
k = 2
# There are 2 subarrays that sum to 2: [1,1] at (0,1) and (1,2)
```

**Solution in Python:**
```python
def subarraySum(nums, k):
    count = 0
    sum_count = {0: 1}
    total = 0
    
    for num in nums:
        total += num
        if total - k in sum_count:
            count += sum_count[total - k]
        sum_count[total] = sum_count.get(total, 0) + 1
    
    return count
```

**Explanation:**
- **Cumulative Subtotals:** Maintain a running total and utilize a hashmap to record counts of subtotals. By identifying a previous cumulative value that when offset by `k` results in the current subtotal, quick verifications achieve linear time complexity.

### 33. Toeplitz Matrix

**Problem Statement:**
Determine if a matrix is Toeplitz. A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

**Sample Input:**
```python
matrix = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [9, 5, 1, 2]
]
# Output should be True
```

**Solution in Python:**
```python
def isToeplitzMatrix(matrix):
    # Check each element with its bottom-right neighbor
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[0]) - 1):
            if matrix[i][j] != matrix[i+1][j+1]:
                return False
    return True
```

**Explanation:**
- **Diagonal Consistency:** For each element `(i, j)`, compare it with the element `(i+1, j+1)`. A mismatch indicates the matrix is not Toeplitz.
- **Complexity:** `O(m * n)` due to checking all but the last row and column.

---

### 34. Range Sum of BST

**Problem Statement:**
Calculate the sum of node values within a specific range in a binary search tree.

**Sample Input:**
```python
# Binary search tree:
#       10
#      / \
#     5   15
#    / \    \
#   3   7    18
# low = 7, high = 15
# Output should be 32 (7+10+15)
```

**Solution in Python:**
```python
def rangeSumBST(root, low, high):
    if not root:
        return 0

    # Values greater than high are only possible on the left
    if root.val < low:
        return rangeSumBST(root.right, low, high)
    # Values less than low are only possible on the right
    elif root.val > high:
        return rangeSumBST(root.left, low, high)
    else:
        # root value is within [low, high]
        return (root.val + 
                rangeSumBST(root.left, low, high) + 
                rangeSumBST(root.right, low, high))
```

**Explanation:**
- **Pruning with BST properties:** Traverse only necessary branches using BST characteristics. If a node's value is outside the given range, prune search accordingly.
- **Complexity:** Effectively `O(n)` in the worst case, i.e., unbalanced trees.

---

### 35. Vertical Order Traversal of a Binary Tree

**Problem Statement:**
Return the vertical order traversal of nodes in a binary tree. If nodes are in the same row and column, sort them by value.

**Sample Input:**
```python
# Example binary tree:
#     3
#    / \
#   9   20
#      /  \
#     15   7
# Output should be [[9],[3,15],[20],[7]]
```

**Solution in Python:**
```python
from collections import defaultdict
import heapq

def verticalTraversal(root):
    if not root:
        return []

    # List to store values with positions (column, row, value)
    node_list = []
    
    # Helper DFS function to populate node_list
    def dfs(node, row, col):
        if node:
            heapq.heappush(node_list, (col, row, node.val))
            # Go left (row+1, col-1)
            dfs(node.left, row + 1, col - 1)
            # Go right (row+1, col+1)
            dfs(node.right, row + 1, col + 1)

    dfs(root, 0, 0)
    
    # Sort node_list; sorting by col first, then row, then value
    node_list.sort()
    result, col_index = [], float('-inf')
    
    for col, row, value in node_list:
        if col != col_index:
            col_index = col
            result.append([])
        result[-1].append(value)
    
    return result
```

**Explanation:**
- **Node Coordinates in Heap:** Use a priority queue to track node positions, leveraging sorting to distinguish nodes' positions in order.
- **Complexity:** `O(n log n)` due to sorting; `n` nodes lists and structure manipulation.

---

### 36. Lowest Common Ancestor of a Binary Tree II

**Problem Statement:**
Given nodes with parent pointers, find the lowest common ancestor (LCA).

**Sample Input:**
```python
# Tree example:
#     3
#    / \
#   5   1
#  / \ / \
# 6  2 0  8
# For nodes 5 and 1, LCA = 3
```

**Solution in Python:**
```python
def lowestCommonAncestor(p, q):
    # Set of ancestors for one node
    ancestors_p = set()
    
    # Traverse from p to the root, marking all ancestors
    while p:
        ancestors_p.add(p)
        p = p.parent

    # Traverse from q to the root, returning the first common ancestor
    while q:
        if q in ancestors_p:
            return q
        q = q.parent
```

**Explanation:**
- **Tracking Ancestry:** Navigate upward from two nodes using parent pointers, intersecting ancestries at the lowest common point stored in a set.
- **Complexity:** LCA search punctuates within `O(h)`, where `h` is the tree height, using efficient memory set operations.