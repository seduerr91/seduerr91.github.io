---
title: Meta Leetcode Study Guide 4
tags: [Coding, Meta]
style: fill
color: secondary
description: A few problems from Leetcode
---

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