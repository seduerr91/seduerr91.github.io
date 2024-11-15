---
title: Leetcode Study Guide
tags: [Coding]
style: fill
color: secondary
description: A few problems from Leetcode

---

### 1. Minimum Remove to Make Valid Parentheses

**Problem Statement:**
Given a string `s` of `'('`, `')'`, and lowercase English characters, remove the minimum number of parentheses to make the string valid. Return any valid string. A string is valid if open brackets are closed by the same type of brackets, and open brackets are closed in the correct order.

**Solution in Python:**
```python
def minRemoveToMakeValid(s: str) -> str:
    stack = []
    index_to_remove = set()

    for i, char in enumerate(s):
        if char == '(':
            stack.append(i)
        elif char == ')':
            if stack:
                stack.pop()
            else:
                index_to_remove.add(i)

    index_to_remove = index_to_remove.union(set(stack))

    result = []
    for i, char in enumerate(s):
        if i not in index_to_remove:
            result.append(char)
            
    return ''.join(result)
```

**Time Complexity:** O(n), where n is the length of the string.

**Explanation:**
The trick is to use a stack to track the indices of unmatched open parentheses. Traverse the string once to identify indices of unmatched parentheses. In a second pass, construct the result by ignoring characters at those indices. This ensures all parentheses are paired correctly.

---

### 2. Kth Largest Element in an Array

**Problem Statement:**
Given an integer array `nums` and an integer `k`, return the `k`th largest element in the array. Note that it is the `k`th largest element in sorted order, not the `k`th distinct element.

**Solution in Python:**
```python
import heapq

def findKthLargest(nums: list[int], k: int) -> int:
    return heapq.nlargest(k, nums)[-1]
```

**Time Complexity:** O(n log k), where n is the number of elements in the array.

**Explanation:**
Using a min-heap of size `k` is the trick. This keeps the k largest elements in the heap while processing the entire array. The top of this heap will be the `k`th largest element due to the efficient property of heaps.

---

### 3. Basic Calculator II

**Problem Statement:**
Implement a basic calculator to evaluate a simple expression string containing non-negative integers, '+', '-', '*', '/', and `spaces`. The integer division should truncate toward zero.

**Solution in Python:**
```python
def calculate(s: str) -> int:
    if not s:
        return 0
    
    stack = []
    current_number = 0
    operation = '+'
    
    for i, char in enumerate(s):
        if char.isdigit():
            current_number = current_number * 10 + int(char)
        
        if char in '+-*/' or i == len(s) - 1:
            if operation == '+':
                stack.append(current_number)
            elif operation == '-':
                stack.append(-current_number)
            elif operation == '*':
                stack.append(stack.pop() * current_number)
            elif operation == '/':
                stack.append(int(stack.pop() / current_number))
                
            operation = char
            current_number = 0
    
    return sum(stack)
```

**Time Complexity:** O(n), where n is the length of the expression.

**Explanation:**
The approach is to pre-process numbers and defer arithmetic operations by storing intermediate results in a stack. Evaluate each number based on its prior operator, updating the stack for multiplication/division directly. Finally, sum the stack for the result.

---

### 4. Binary Tree Vertical Order Traversal

**Problem Statement:**
Given a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).

**Solution in Python:**
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
    
    return [column_table[i] for i in sorted(column_table.keys())]
```

**Time Complexity:** O(n), where n is the number of nodes in the tree.

**Explanation:**
Using a dictionary to map column indices to node values is the trick. A level-order traversal (BFS) with column tracking allows grouping nodes and maintaining correct order. Sorting dictionary keys at the end ensures output is from leftmost to rightmost column.

---

### 5. Valid Word Abbreviation

**Problem Statement:**
Given a non-empty string `word` and an abbreviation `abbr`, return whether the string matches the given abbreviation.

**Solution in Python:**
```python
def validWordAbbreviation(word: str, abbr: str) -> bool:
    i = 0
    j = 0
    while i < len(word) and j < len(abbr):
        if abbr[j].isdigit():
            if abbr[j] == '0':  # Leading zero is invalid
                return False
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
    return i == len(word) and j == len(abbr)
```

**Time Complexity:** O(n + m), where n is the length of `word` and m is the length of `abbr`.

**Explanation:**
The key is efficiently processing numeric parts of the abbreviation with careful index management. Progress the indices of `word` and `abbr` in parallel, treating numeric substrings as jump instructions. Ensure boundary conditions by verifying both indices reach their respective lengths.

### 6. Shortest Path in Binary Matrix

**Problem Statement:**
Given an `n x n` binary matrix `grid`, return the length of the shortest clear path in the matrix. If there is no clear path, return `-1`. A clear path in a binary matrix is a path from the top-left cell to the bottom-right cell where each cell on the path is `0`.

**Solution in Python:**
```python
from collections import deque

def shortestPathBinaryMatrix(grid):
    if grid[0][0] != 0 or grid[-1][-1] != 0:
        return -1
    
    n = len(grid)
    directions = [(1, 0), (0, 1), (1, 1), (-1, 0), (0, -1), (-1, -1), (-1, 1), (1, -1)]
    queue = deque([(0, 0, 1)])  # (x, y, path_length)
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

**Time Complexity:** O(n^2), where n is the size of the matrix.

**Explanation:**
This problem is solved via Breadth-First Search (BFS) because it finds the shortest path in an unweighted grid. By starting from the top-left, you explore all possible directions while tracking path length. The BFS ensures that when the bottom-right corner is reached, it is along the shortest path.

---

### 7. Nested List Weight Sum

**Problem Statement:**
Given a nested list of integers, return the sum of all integers in the list weighted by their depth. For example, `one` is weighted by `depth 1`, `two` is `depth 2`, etc.

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

**Time Complexity:** O(n), where n is the total number of nested elements.

**Explanation:**
This problem uses Depth-First Search (DFS) to compute the sum of nested integers multiplied by their depths. The recursive approach allows traversing each nested level, progressively increasing the depth and accumulating the weighted sum.

---

### 8. Valid Palindrome

**Problem Statement:**
Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Solution in Python:**
```python
def isPalindrome(s: str) -> bool:
    left, right = 0, len(s) - 1

    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        
        if s[left].lower() != s[right].lower():
            return False
        
        left += 1
        right -= 1

    return True
```

**Time Complexity:** O(n), where n is the length of the string.

**Explanation:**
To identify a palindrome, use two pointers from either end of the string. By advancing pointers inward while skipping non-alphanumeric characters and comparing characters case-insensitively, you can efficiently check palindrome status.

---

### 9. Copy List with Random Pointer

**Problem Statement:**
A linked list with each node having an additional pointer, `random`, needs to be cloned. The `random` pointer can point to any node or be null.

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

    # Step 1: Create new nodes in between existing nodes
    current = head
    while current:
        next_node = current.next
        new_node = Node(current.val, next_node)
        current.next = new_node
        current = next_node
    
    # Step 2: Assign random pointers to new nodes
    current = head
    while current:
        current.next.random = current.random.next if current.random else None
        current = current.next.next

    # Step 3: Extract the new list
    current = head
    new_head = head.next
    while current:
        new_node = current.next
        current.next = new_node.next
        current = current.next
        new_node.next = current.next if current else None
    
    return new_head
```

**Time Complexity:** O(n), where n is the number of nodes in the list.

**Explanation:**
The solution interleaves nodes of the new and original list, using this formation to establish `random` links correctly, with a second pass to restore original node connections. This results in an efficient cloning process without extra space for mapping nodes.

---

### 10. Lowest Common Ancestor of a Binary Tree

**Problem Statement:**
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

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
    
    left = lowestCommonAncestor(root.left, p, q)
    right = lowestCommonAncestor(root.right, p, q)

    if left and right:
        return root
    return left if left else right
```

**Time Complexity:** O(n), where n is the number of nodes in the tree.

**Explanation:**
To find the LCA, a recursive approach checks subtrees at each node to find both target nodes. If both nodes appear in different subtrees of the same node, that node is the LCA. Otherwise, return the side where both nodes reside.

---

### 11. Maximum Swap

**Problem Statement:**
Given a non-negative integer, you are allowed to swap two digits at most once to get the maximum valued number. Return the maximum valued number you can get.

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

**Time Complexity:** O(n), where n is the number of digits in the number.

**Explanation:**
The key is to record the last occurrence of each digit and check if a larger digit later in the string can be swapped to an earlier position. By checking digits from 9 down to the current digit, an optimal swap can be identified and executed quickly for maximum gain.

### 12. Valid Palindrome II

**Problem Statement:**
Given a string `s`, return `True` if the string can be a palindrome by deleting at most one character from it.

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

**Time Complexity:** O(n), where n is the length of the string.

**Explanation:**
The trick is maintaining a two-pointer technique, addressing mismatches by checking if the remainder of the string can form a palindrome upon removing either mismatched character. This check is efficiently run on both possibilities to maintain performance.

---

### 13. Lowest Common Ancestor of a Binary Tree III

**Problem Statement:**
Given a binary tree where each node has a pointer to its parent, find the lowest common ancestor of two given nodes.

**Solution in Python:**
```python
def lowestCommonAncestor(p, q):
    ancestors = set()
    
    while p:
        ancestors.add(p)
        p = p.parent
    
    while q:
        if q in ancestors:
            return q
        q = q.parent
```

**Time Complexity:** O(h), where h is the height of the tree.

**Explanation:**
The key here is to traverse up the tree from one node (using the parent pointers) and store visited ancestors. Then, use the path from the second node, checking each node against this ancestory set to find the lowest common ancestor.

---

### 14. Sum Root to Leaf Numbers

**Problem Statement:**
Given a binary tree, where each path root-to-leaf represents a number, return the sum of all numbers.

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

**Time Complexity:** O(n), where n is the number of nodes.

**Explanation:**
Utilize Depth-First Search (DFS) to traverse the tree, keeping a running total of the number formed by the path. When a leaf is reached, add the current number to the total sum, effectively capturing numbers formed root-to-leaf.

---

### 15. Custom Sort String

**Problem Statement:**
Given two strings `order` and `s`, reorder the characters of `s` so that they match the order in `order`. Characters not present in `order` can be placed arbitrarily.

**Solution in Python:**
```python
def customSortString(order: str, s: str) -> str:
    order_map = {c: i for i, c in enumerate(order)}
    return ''.join(sorted(s, key=lambda x: order_map.get(x, len(order))))
```

**Time Complexity:** O(n log n), where n is the length of `s`.

**Explanation:**
This solution leverages custom sorting by mapping characters in `order` to their respective indices. The provided `s` string is then sorted based on these positions, with a fallback position for characters not in `order`.

---

### 16. Random Pick with Weight

**Problem Statement:**
You have an array `w` of positive integers, where `w[i]` describes the weight of index `i`. Implement the function `pickIndex` that randomly picks an index proportionally to its weight.

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
        target = random.randint(1, self.total)
        low, high = 0, len(self.prefix_sums) - 1
        while low < high:
            mid = (low + high) // 2
            if self.prefix_sums[mid] < target:
                low = mid + 1
            else:
                high = mid
        return low
```

**Time Complexity:** O(log n) for `pickIndex()`; O(n) preprocessing.

**Explanation:**
The efficient approach is to create a prefix sum array representing cumulative weights. With random targeting between weights, binary search quickly locates the index proportional to its weight, affording logarithmic query efficiency.

---

### 17. Minimum Add to Make Parentheses Valid

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

### 18. K Closest Points to Origin

**Problem Statement:**
Given an array of points and an integer `k`, find the k closest points to the origin `(0, 0)`.

**Solution in Python:**
```python
import heapq

def kClosest(points, k: int):
    return heapq.nsmallest(k, points, key=lambda x: x[0]**2 + x[1]**2)
```

**Time Complexity:** O(n log k), where n is the number of points.

**Explanation:**
The problem can be simplified via heap operations by maintaining a max-heap of size `k`. By always measuring the Euclidean distance (or its square), the most correct entries are centralized through efficient heap property management.

---

### 19. Dot Product of Two Sparse Vectors

**Problem Statement:**
Given two sparse vectors, compute their dot product.

**Solution in Python:**
```python
class SparseVector:
    def __init__(self, nums: list[int]):
        self.non_zero = {i: v for i, v in enumerate(nums) if v != 0}

    def dotProduct(self, vec: 'SparseVector') -> int:
        result = 0
        for i, v in self.non_zero.items():
            if i in vec.non_zero:
                result += v * vec.non_zero[i]
        return result
```

**Time Complexity:** O(n) for initialization, O(min(non-zero elements of two vectors)) for dotProduct.

**Explanation:**
This solution capitalizes on the sparsity of vectors by utilizing dictionary storage for non-zero values. Only overlapping indices are mated in the dot product, minimizing computations to significantly fewer operations than densely represented vectors require.

### 20. Merge k Sorted Lists

**Problem Statement:**
Given an array of linked lists, each linked list is sorted in ascending order. Merge all the linked lists into one sorted linked list and return it.

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

**Time Complexity:** O(N log k), where N is the total number of nodes across all lists, and k is the number of linked lists.

**Explanation:**
Using a min-heap to efficiently merge the linked lists optimizes the process. The heap keeps track of the smallest current node across each list, quickly integrating nodes into the resulting merged list.

---

### 21. Pow(x, n)

**Problem Statement:**
Implement a function that calculates `x` raised to the power `n` (i.e., \(x^n\)).

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

**Time Complexity:** O(log n), as the exponentiation is done using a divide-and-conquer strategy called "Exponentiation by Squaring."

**Explanation:**
By recursively dividing the power in half and using results of smaller subproblems, this method achieves efficient computation through squared multiplications and conditional extra multiplications for odd powers.

---

### 22. Merge Sorted Array

**Problem Statement:**
Given two sorted integer arrays `nums1` and `nums2`, merge `nums2` into `nums1` as one sorted array.

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

**Time Complexity:** O(m + n).

**Explanation:**
The approach here is to fill `nums1` from the back, prioritizing larger values to avoid overwriting useful data. This requires three pointers: one for each array and one for the current merge position.

---

### 23. Binary Tree Right Side View

**Problem Statement:**
Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

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

**Time Complexity:** O(n), where n is the number of nodes in the tree.

**Explanation:**
This solution employs a level-order traversal (BFS), capturing the last node's value at each depth level, thus representing what is visible from the right side.

---

### 25. Meeting Rooms II

**Problem Statement:**
Given an array of meeting time intervals with start and end times, return the minimum number of conference rooms required.

**Solution in Python:**
```python
import heapq

def minMeetingRooms(intervals):
    if not intervals:
        return 0

    intervals.sort(key=lambda x: x[0])

    heap = []  # min-heap to track end time of meetings

    for start, end in intervals:
        if heap and heap[0] <= start:
            heapq.heappop(heap)
        heapq.heappush(heap, end)

    return len(heap)
```

**Time Complexity:** O(n log n).

**Explanation:**
By utilizing a heap to keep track of the soonest meeting end time, we are able to allocate or release meeting rooms dynamically, arranging requests in a sorted manner conducive to effective room management.

---

### 26. Moving Average from Data Stream

**Problem Statement:**
Given a stream of integers and a window size, compute the moving average of all integers in the sliding window.

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

**Time Complexity:** O(1) per `next` operation.

**Explanation:**
Using a queue to track the components of the moving average with efficient addition and removal operations ensures constant time computation for each new input.

---

### 27. Top K Frequent Elements

**Problem Statement:**
Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. 

**Solution in Python:**
```python
from collections import Counter
import heapq

def topKFrequent(nums, k):
    count = Counter(nums)
    return heapq.nlargest(k, count.keys(), key=count.get)
```

**Time Complexity:** O(n log k).

**Explanation:**
The approach leverages a counter for frequency counting and a min-heap (via `nlargest`) to efficiently identify and retrieve the most frequent elements.

---

### 28. Kth Smallest Element in a Sorted Matrix

**Problem Statement:**
Given an `n x n` matrix where each row and column is sorted in ascending order, return the kth smallest element in the matrix.

**Solution in Python:**
```python
import heapq

def kthSmallest(matrix, k):
    n = len(matrix)
    min_heap = []

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

**Time Complexity:** O(k log n).

**Explanation:**
By using a heap initialized with the first column of the matrix, this method effectively pops the smallest available option until reaching the kth smallest, minimizing computational burdens.

---

### 29. Random Pick Index

**Problem Statement:**
Given an array of integers with possible duplicates, write a function to randomly pick an index of a given target number.

**Solution in Python:**
```python
import random
from collections import defaultdict

class Solution:
    def __init__(self, nums: list[int]):
        self.positions = defaultdict(list)
        for index, num in enumerate(nums):
            self.positions[num].append(index)

    def pick(self, target: int) -> int:
        return random.choice(self.positions[target])
```

**Time Complexity:** O(1) on average for picking; O(n) for initialization.

**Explanation:**
By mapping each number to its list of indices, random picking is made efficient by directly choosing from stored locations rather than searching the list anew.

---

### 30. Diagonal Traverse

**Problem Statement:**
Given a `m x n` matrix, return all elements of the matrix in a diagonal order.

**Solution in Python:**
```python
def findDiagonalOrder(mat):
    if not mat or not mat[0]:
        return []

    diagonals = {}
    for i in range(len(mat)):
        for j in range(len(mat[0])):
            if i + j not in diagonals:
                diagonals[i + j] = []
            diagonals[i + j].append(mat[i][j])

    result = []
    for k in sorted(diagonals.keys()):
        if k % 2 == 0:
            result.extend(reversed(diagonals[k]))
        else:
            result.extend(diagonals[k])

    return result
```

**Time Complexity:** O(m * n).

**Explanation:**
The approach organizes elements by their diagonal indices `i + j`. When retrieving stored values by these indices, even sums are reversed to achieve the necessary zigzag pattern for diagonal traversing.

### 31. Diameter of Binary Tree

**Problem Statement:**
Given a binary tree, return the length of the diameter. The diameter is the longest path between any two nodes, where the path may or may not pass through the root.

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
        diameter = max(diameter, left_depth + right_depth)
        return max(left_depth, right_depth) + 1
    
    depth(root)
    return diameter
```

**Time Complexity:** O(n), where n is the number of nodes in the tree.

**Explanation:**
A recursive function calculates the depth of each node and updates the diameter by considering the sum of depths from both left and right children at each step. This ensures all potential longest paths are evaluated efficiently.

---

### 32. Subarray Sum Equals K

**Problem Statement:**
Given an array of integers and an integer `k`, return the total count of subarrays whose sum equals `k`.

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

**Time Complexity:** O(n), where n is the length of the array.

**Explanation:**
The trick is using a cumulative sum approach with a hashmap to track how many times each cumulative sum has been seen. This allows finding any subtotal that adds up to `k` efficiently by checking against the required difference at every step.

---

### 33. Toeplitz Matrix

**Problem Statement:**
Given an `m x n` matrix, return `true` if the matrix is Toeplitz; that is, every diagonal from top-left to bottom-right has the same element.

**Solution in Python:**
```python
def isToeplitzMatrix(matrix):
    for i in range(len(matrix) - 1):
        for j in range(len(matrix[0]) - 1):
            if matrix[i][j] != matrix[i+1][j+1]:
                return False
    return True
```

**Time Complexity:** O(m * n).

**Explanation:**
The solution checks each element against the element diagonally down-right. If any pair doesn't match, the matrix isn't Toeplitz. This straightforward approach ensures each diagonal is verified in linear time.

---

### 34. Range Sum of BST

**Problem Statement:**
Given the root of a binary search tree and boundaries `low` and `high`, return the sum of all values of nodes with values in the inclusive range `[low, high]`.

**Solution in Python:**
```python
def rangeSumBST(root, low, high):
    if not root:
        return 0

    if root.val < low:
        return rangeSumBST(root.right, low, high)
    elif root.val > high:
        return rangeSumBST(root.left, low, high)
    else:
        return (root.val + 
                rangeSumBST(root.left, low, high) + 
                rangeSumBST(root.right, low, high))
```

**Time Complexity:** O(n), where n is the number of nodes.

**Explanation:**
The solution efficiently traverses relevant branches only, based on BST properties. Recursion dives into the tree, summing values within the set bounds while pruning unnecessary branches quickly.

---

### 35. Vertical Order Traversal of a Binary Tree

**Problem Statement:**
Given a binary tree, return its vertical order traversal. If two nodes are in the same row and column, the lower-valued node should appear first.

**Solution in Python:**
```python
from collections import defaultdict
import heapq

def verticalTraversal(root):
    if not root:
        return []

    node_list = []
    
    def dfs(node, row, col):
        if node:
            heapq.heappush(node_list, (col, row, node.val))
            dfs(node.left, row + 1, col - 1)
            dfs(node.right, row + 1, col + 1)

    dfs(root, 0, 0)
    node_list.sort()
    result, col_index = [], float('-inf')
    
    for col, row, value in node_list:
        if col != col_index:
            col_index = col
            result.append([])
        result[-1].append(value)
    
    return result
```

**Time Complexity:** O(n log n), where n is the number of nodes.

**Explanation:**
This solution records nodes with their positions, sorting by column, then row, then value. A heap naturally maintains order preference cleanly, ensuring precise vertical ordering regardless of tree complexity.

---

### 36. Lowest Common Ancestor of a Binary Tree II

**Problem Statement:**
Given a binary tree and two nodes in it, return the lowest common ancestor (LCA) in the form of `TreeNode`. Each node has a parent pointer.

**Solution in Python:**
```python
def lowestCommonAncestor(p, q):
    ancestors_p = set()
    
    while p:
        ancestors_p.add(p)
        p = p.parent

    while q:
        if q in ancestors_p:
            return q
        q = q.parent
```

**Time Complexity:** O(h), where h is the height of the tree.

**Explanation:**
This solution uses parent pointers to traverse back to the root, storing the ancestry for one node. Next, explore the second node upwards until you find a common ancestor, ensuring an efficient path to the LCA.

---