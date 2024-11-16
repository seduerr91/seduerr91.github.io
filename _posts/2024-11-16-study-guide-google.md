---
title: Google Leetcode Study Guide
tags: [Coding, Google]
style: fill
color: secondary
description: A few problems from Leetcode
---

### 13. Roman to Integer (Easy)

#### Problem Statement
Convert a Roman numeral to an integer. Roman numerals are represented by seven different symbols: `I`, `V`, `X`, `L`, `C`, `D`, and `M`, with values 1, 5, 10, 50, 100, 500, and 1000 respectively.

#### Sample Input and Output
- Input: `s = "III"`
- Output: `3`

- Input: `s = "IV"`
- Output: `4`

#### Solution Explanation
```python
def romanToInt(s: str) -> int:
    roman_to_int = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50,
        'C': 100, 'D': 500, 'M': 1000
    }
    total = 0
    prev_value = 0
    for char in reversed(s):
        value = roman_to_int[char]
        if value < prev_value:
            total -= value
        else:
            total += value
        prev_value = value
    return total

# Complexity Analysis
# - Time Complexity: O(n), where n is the length of the string.
# - Space Complexity: O(1), constant space usage.
```

- Traverse the Roman numeral from right to left.
- Add values unless a smaller numeral precedes a larger numeral, indicating a subtraction pair.

### 359. Logger Rate Limiter (Easy)

#### Problem Statement
Implement a logging system that receives a stream of messages and returns when each unique message should be printed. Each message can only be printed every 10 seconds — duplicate messages arriving in less than 10 seconds should be ignored.

#### Sample Input and Output
- Input: Calls to `Logger` using `shouldPrintMessage(timestamp: 1, message: "foo")`, `shouldPrintMessage(timestamp: 2, message: "bar")`, `shouldPrintMessage(timestamp: 3, message: "foo")`...
- Output: For each `shouldPrintMessage`, return `true` or `false`.

#### Solution Explanation
```python
class Logger:
    def __init__(self):
        self.message_timestamp_map = {}

    def shouldPrintMessage(self, timestamp: int, message: str) -> bool:
        if message not in self.message_timestamp_map or timestamp - self.message_timestamp_map[message] >= 10:
            self.message_timestamp_map[message] = timestamp
            return True
        return False

# Complexity Analysis
# - Time Complexity: O(1), average time for dictionary operations.
# - Space Complexity: O(n), where n is the number of unique messages logged.
```

- Use a hash map to store the last timestamp for each message.
- Check incoming message timestamps against stored values to decide printing.

### 2. Add Two Numbers (Medium)

#### Problem Statement
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.

#### Sample Input and Output
- Input: `(2 -> 4 -> 3) + (5 -> 6 -> 4)`
- Output: `7 -> 0 -> 8` (because 342 + 465 = 807)

#### Solution Explanation
```python
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def addTwoNumbers(l1: ListNode, l2: ListNode) -> ListNode:
    dummy_head = ListNode(0)
    current, carry = dummy_head, 0

    while l1 or l2:
        x = l1.val if l1 else 0
        y = l2.val if l2 else 0
        sum = carry + x + y
        carry = sum // 10
        current.next = ListNode(sum % 10)
        current = current.next
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next

    if carry:
        current.next = ListNode(carry)

    return dummy_head.next

# Complexity Analysis
# - Time Complexity: O(max(m, n)), where m and n are the lengths of the two input lists.
# - Space Complexity: O(max(m, n)), for the linked list storage.
```

- Traverse both lists, summing corresponding values along with any carry.
- Create nodes for each digit of the resulting sum with carry handled.

With these solutions, efficient traversal and operations on linked lists, dictionaries, and numeral comparisons are demonstrated, effectively managing problem requirements and constraints.

### 300. Longest Increasing Subsequence (Medium)

#### Problem Statement
Given an integer array `nums`, return the length of the longest strictly increasing subsequence.

#### Sample Input and Output
- Input: `nums = [10,9,2,5,3,7,101,18]`
- Output: `4` (because the LIS is `[2,3,7,101]`)

#### Solution Explanation
```python
def lengthOfLIS(nums: list[int]) -> int:
    if not nums:
        return 0

    dp = [1] * len(nums)

    for i in range(1, len(nums)):
        for j in range(0, i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

# Complexity Analysis
# - Time Complexity: O(n^2), where n is the length of nums, due to nested loops for comparisons.
# - Space Complexity: O(n), for the dp array storing lengths of subsequence up to each element.
```

- Use dynamic programming to store the length of LIS ending at each index.
- Compare each number with all previous ones to extend increasing subsequences where possible.

### 2663. Lexicographically Smallest Beautiful String (Hard)

This is a theoretical problem not yet available on LeetCode; therefore, a solution cannot be provided. Once an official problem statement is available, a solution can be constructed accordingly.

### 5. Longest Palindromic Substring (Medium)

#### Problem Statement
Given a string `s`, return the longest palindromic substring in `s`.

#### Sample Input and Output
- Input: `s = "babad"`
- Output: `"bab"` (or `"aba"`)

#### Solution Explanation
```python
def longestPalindrome(s: str) -> str:
    if len(s) < 2:
        return s

    start, max_length = 0, 1

    def expand_from_center(left: int, right: int) -> int:
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return right - left - 1

    for i in range(len(s)):
        len1 = expand_from_center(i, i)
        len2 = expand_from_center(i, i + 1)
        max_len = max(len1, len2)
        
        if max_len > max_length:
            max_length = max_len
            start = i - (max_len - 1) // 2

    return s[start:start + max_length]

# Complexity Analysis
# - Time Complexity: O(n^2), where n is the length of the string due to expanding around centers.
# - Space Complexity: O(1), no extra space besides variables.
```

- Use expansion from centers to identify palindromes efficiently.
- Compare longest palindrome length as the string is scanned centerwise.

For problems already solved previously, refer to earlier responses for detailed explanations and solutions. Each problem involves distinctive data structures and algorithmic techniques suited to constraints and objectives, ensuring robust and correct solutions.

### 14. Longest Common Prefix (Easy)

#### Problem Statement
Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string `""`.

#### Sample Input and Output
- Input: `strs = ["flower","flow","flight"]`
- Output: `"fl"`

- Input: `strs = ["dog","racecar","car"]`
- Output: `""`

#### Solution Explanation
```python
def longestCommonPrefix(strs: list[str]) -> str:
    if not strs:
        return ""
    
    prefix = strs[0]
    for s in strs[1:]:
        while s.find(prefix) != 0:
            prefix = prefix[:-1]
            if not prefix:
                return ""
    return prefix

# Complexity Analysis
# - Time Complexity: O(n * m), where n is the number of strings and m is the length of the shortest string. 
# - Space Complexity: O(1), constant additional space.
```

- Start with the first string as the prefix and iteratively shorten it until it matches all strings.

### 16. 3Sum Closest (Medium)

#### Problem Statement
Given an array `nums` of n integers and an integer `target`, find three integers in `nums` such that the sum is closest to `target`. Return the sum of the three integers.

#### Sample Input and Output
- Input: `nums = [-1,2,1,-4], target = 1`
- Output: `2`

#### Solution Explanation
```python
def threeSumClosest(nums: list[int], target: int) -> int:
    nums.sort()
    closest_sum = float('inf')
    
    for i in range(len(nums) - 2):
        left, right = i + 1, len(nums) - 1
        while left < right:
            current_sum = nums[i] + nums[left] + nums[right]
            if abs(current_sum - target) < abs(closest_sum - target):
                closest_sum = current_sum
            if current_sum < target:
                left += 1
            elif current_sum > target:
                right -= 1
            else:
                return target
    
    return closest_sum

# Complexity Analysis
# - Time Complexity: O(n^2), for sorting and two-pointer approach.
# - Space Complexity: O(1), excluding input space.
```

- Sort the array; for each element, use two pointers to find the closest sum to the target.

### 70. Climbing Stairs (Easy)

#### Problem Statement
You are climbing a staircase. It takes `n` steps to reach the top. Each time you can climb 1 or 2 steps. Compute how many distinct ways you can climb to the top.

#### Sample Input and Output
- Input: `n = 3`
- Output: `3`

#### Solution Explanation
```python
def climbStairs(n: int) -> int:
    if n <= 2:
        return n

    first, second = 1, 2
    for _ in range(3, n + 1):
        first, second = second, first + second
    
    return second

# Complexity Analysis
# - Time Complexity: O(n), single pass for step computation.
# - Space Complexity: O(1), only two variables needed.
```

- Use iterative Fibonacci sequence computation to find the solutions.

### 179. Largest Number (Medium)

#### Problem Statement
Given a list of non-negative integers, arrange them such that they form the largest number.

#### Sample Input and Output
- Input: `nums = [10,2]`
- Output: `"210"`

- Input: `nums = [3,30,34,5,9]`
- Output: `"9534330"`

#### Solution Explanation
```python
import functools

def largestNumber(nums: list[int]) -> str:
    str_nums = list(map(str, nums))
    compare = lambda x, y: (1 if x + y < y + x else -1)
    str_nums.sort(key=functools.cmp_to_key(compare))
    largest = ''.join(str_nums).lstrip('0')
    return largest or '0'

# Complexity Analysis
# - Time Complexity: O(n log n), due to sorting.
# - Space Complexity: O(n), for storing string representations.
```

- Sort numbers based on custom string comparison to find the largest concatenation.

### 198. House Robber (Medium)

#### Problem Statement
Given an integer array `nums` representing the amount of money of each house, return the maximum amount of money you can rob without robbing two adjacent houses.

#### Sample Input and Output
- Input: `nums = [2,7,9,3,1]`
- Output: `12`

#### Solution Explanation
```python
def rob(nums: list[int]) -> int:
    if not nums:
        return 0
    if len(nums) < 3:
        return max(nums)
    
    rob1, rob2 = 0, 0
    for n in nums:
        new_rob = max(rob2, rob1 + n)
        rob1 = rob2
        rob2 = new_rob
    
    return rob2

# Complexity Analysis
# - Time Complexity: O(n), single iteration over house values.
# - Space Complexity: O(1), constant space usage with two variables.
```

- Use dynamic programming to track maximum money up to each house.
- Transition relies on maximizing either robbing the current house or skipping it.

These solutions involve leveraging sorting, dynamic programming, custom comparisons, and iterative strategies to handle various problem types efficiently within constraints.

### 217. Contains Duplicate (Easy)

#### Problem Statement
Given an integer array `nums`, determine if any value appears at least twice in the array. Return `true` if any value appears twice, and `false` if every element is distinct.

#### Sample Input and Output
- Input: `nums = [1,2,3,1]`
- Output: `True`

- Input: `nums = [1,2,3,4]`
- Output: `False`

#### Solution Explanation
```python
def containsDuplicate(nums: list[int]) -> bool:
    return len(nums) != len(set(nums))

# Complexity Analysis
# - Time Complexity: O(n), where n is the number of elements in nums (average case for set operations).
# - Space Complexity: O(n), space needed to store elements in the set.
```

- Convert the list to a set to eliminate duplicates, then compare lengths.
- If the set's length is less than the original list, duplicates exist.

### 230. Kth Smallest Element in a BST (Medium)

#### Problem Statement
Given a binary search tree, write a function to find the kth smallest element in it.

#### Sample Input and Output
- Input: Root of BST `[3,1,4,null,2]`, `k = 1`
- Output: `1`

#### Solution Explanation
```python
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def kthSmallest(root: TreeNode, k: int) -> int:
    stack = []
    while True:
        while root:
            stack.append(root)
            root = root.left
        root = stack.pop()
        k -= 1
        if k == 0:
            return root.val
        root = root.right

# Complexity Analysis
# - Time Complexity: O(H + k), where H is the tree's height.
# - Space Complexity: O(H), stack space required for iterative in-order traversal.
```

- Perform in-order traversal iteratively to retrieve elements in sorted order.
- Traverse until the kth element is found.

### 332. Reconstruct Itinerary (Hard)

#### Problem Statement
Given a list of airline tickets represented by pairs of departure and arrival airports, reconstruct the itinerary in order. All of the tickets form a travel path, with `JFK` as the starting point.

#### Sample Input and Output
- Input: `tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]`
- Output: `["JFK", "MUC", "LHR", "SFO", "SJC"]`

#### Solution Explanation
```python
from collections import defaultdict, deque

def findItinerary(tickets: list[list[str]]) -> list[str]:
    graph = defaultdict(deque)
    for src, dst in sorted(tickets):
        graph[src].append(dst)
    
    itinerary = []
    def dfs(airport):
        dests = graph[airport]
        while dests:
            dfs(dests.popleft())
        itinerary.append(airport)
    
    dfs('JFK')
    return itinerary[::-1]

# Complexity Analysis
# - Time Complexity: O(E log E), sorting the tickets and traversing each edge in the graph.
# - Space Complexity: O(E), storing the tickets in a graph.
```

- Construct a graph and perform a depth-first search to satisfy all edges.
- Postorder graph traversal to reconstruct the itinerary.

### 552. Student Attendance Record II (Hard)

#### Problem Statement
With n days, return the number of possible attendance records such that:
- An attendance record is a string composed of 'A' (Absent), 'L' (Late), and 'P' (Present).
- No more than one 'A' can be part of the record.
- More than two consecutive 'L's cannot be present.

#### Solution Explanation
```python
def checkRecord(n: int) -> int:
    MOD = int(1e9+7)
    # dp[i][a][l] means on the i-th day, with `a` A's and `l` continuous L's
    dp = [[[0] * 3 for _ in range(2)] for _ in range(n + 1)]
    dp[0][0][0] = 1
    
    for i in range(1, n + 1):
        for a in range(2):
            for l in range(3):
                dp[i][a][0] = (dp[i][a][0] + dp[i-1][a][l]) % MOD  # P
                if a > 0:
                    dp[i][a][0] = (dp[i][a][0] + sum(dp[i-1][a-1][l] for l in range(3))) % MOD  # A
                if l < 2:
                    dp[i][a][l+1] = (dp[i][a][l+1] + dp[i-1][a][l]) % MOD  # L

    return sum(dp[n][a][l] for a in range(2) for l in range(3)) % MOD

# Complexity Analysis
# - Time Complexity: O(n), need to fill n*2*3 table.
# - Space Complexity: O(n), space for the dp table.
```

- Use dynamic programming to solve counting problem with constraints.
- Store states with tracking absent and late conditions in a DP table.

### 695. Max Area of Island (Medium)

#### Problem Statement
Given a 2D grid map of `1`s (land) and `0`s (water), find the maximum area of an island in the grid. An island is formed by connecting adjacent lands horizontally or vertically.

#### Sample Input and Output
- Input: 
  ```
  grid = [
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 1]
  ]
  ```
- Output: `5`

#### Solution Explanation
```python
def maxAreaOfIsland(grid: list[list[int]]) -> int:
    if not grid:
        return 0
        
    def dfs(r, c):
        if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] == 0:
            return 0
        grid[r][c] = 0
        return (1 + dfs(r + 1, c) + dfs(r - 1, c) + 
                dfs(r, c + 1) + dfs(r, c - 1))

    max_area = 0
    for r in range(len(grid)):
        for c in range(len(grid[0])):
            if grid[r][c] == 1:
                max_area = max(max_area, dfs(r, c))

    return max_area

# Complexity Analysis
# - Time Complexity: O(m * n), traverse the entire grid.
# - Space Complexity: O(m * n), which is the max size of the recursion stack.
```

- Use DFS to find connected `1`s and calculate area.
- Track and compare the maximum found island area.

These problems use a variety of data structure algorithms, graph traversal techniques, and dynamic programming strategies to solve efficiently while adhering to problem constraints.


### 818. Race Car (Hard)

#### Problem Statement
Your car starts at position 0 and speed +1 on an infinite number line. It can perform two actions:
- `"A"`: Accelerate, which increases the car's position and speed by adding the speed to the position and doubling the speed.
- `"R"`: Reverse, which makes the car's speed negative after a turn.
  
Given a target position, return the minimum number of instructions to reach the target.

#### Sample Input and Output
- Input: `target = 3`
- Output: `2` (Explanation: "AA" -> position 3)

#### Solution Explanation
```python
from collections import deque

def racecar(target: int) -> int:
    queue = deque([(0, 0, 1)])  # (steps, position, speed)
    visited = set((0, 1))

    while queue:
        steps, position, speed = queue.popleft()
        
        # Move the car
        new_pos = position + speed
        new_speed = speed * 2
        if new_pos == target:
            return steps + 1
        if (new_pos, new_speed) not in visited:
            queue.append((steps + 1, new_pos, new_speed))
            visited.add((new_pos, new_speed))
        
        # Reverse the car (change direction)
        if (position, -1 if speed > 0 else 1) not in visited:
            queue.append((steps + 1, position, -1 if speed > 0 else 1))
            visited.add((position, -1 if speed > 0 else 1))

# Complexity Analysis
# - Time Complexity: O(T log T), where T is the target.
# - Space Complexity: O(T), due to the queue and visited set.
```

- Use BFS to explore minimal path needed to reach the target with system states.
- Each state considers acceleration and optional reverse.

### 843. Guess the Word (Hard)

#### Problem Statement
Guess a secret word from a list of words, where each guess results in a count of matching positions including characters from a function call. Implement a strategy to efficiently guess the word with the minimum queries.

#### Sample Input and Output
- Input: A hidden secret word is guessed through interactive querying.
- Output: (The correct strategy guesses without error.)

#### Solution Explanation
```python
import random

def findSecretWord(words: list[str], master: 'Master') -> None:
    def match(s1, s2):
        return sum(c1 == c2 for c1, c2 in zip(s1, s2))
    
    for _ in range(10):
        guess = random.choice(words)
        x = master.guess(guess)
        words = [word for word in words if match(guess, word) == x]

# Complexity Analysis
# - Time Complexity: O(n), with n words depending on guess efficiency.
# - Space Complexity: O(n), maintaining lists of words.
```

- Randomly guess to filter the possibilities based on the match from previous attempts.
- Reduce logic scope after each query by aligning matched conditions.

### 939. Minimum Area Rectangle (Medium)

#### Problem Statement
Given a set of points in the xy-plane, determine the minimum area of any rectangle formed by these points, with sides parallel to the x and y axes.

#### Sample Input and Output
- Input: `points = [[1,1],[1,3],[3,1],[3,3],[2,2]]`
- Output: `4`

#### Solution Explanation
```python
def minAreaRect(points: list[list[int]]) -> int:
    points_set = set(map(tuple, points))
    min_area = float('inf')

    for i, p1 in enumerate(points):
        for j in range(i):
            p2 = points[j]
            if (p1[0] != p2[0] and p1[1] != p2[1] and (p1[0], p2[1]) in points_set and (p2[0], p1[1]) in points_set):
                min_area = min(min_area, abs(p1[0] - p2[0]) * abs(p1[1] - p2[1]))
    
    return min_area if min_area != float('inf') else 0

# Complexity Analysis
# - Time Complexity: O(n^2), finding rectangles by point comparison.
# - Space Complexity: O(n), storing points in a set.
```

- Use point coordinates to determine possible rectangles.
- Compare diagonal points to identify rectangles and compute the minimal area.

### 1106. Parsing A Boolean Expression (Hard)

#### Problem Statement
Given a boolean expression, parse it and return the computation result. The expression contains only `('!', '&', '|')` operators and uses boolean variables (`'t'` or `'f'`).

#### Sample Input and Output
- Input: `"!(f)"` 
- Output: `True`

#### Solution Explanation
```python
def parseBoolExpr(expression: str) -> bool:
    def evaluate(exp):
        if exp == "t":
            return True
        if exp == "f":
            return False
        ops = {
            '|': any,
            '&': all,
            '!': lambda x: not x[0]
        }
        op = exp[0]
        op_func = ops[op]
        inside = []
        bal = 0
        last = 0
        for i, char in enumerate(exp[2:], 2):
            if char == '(':
                bal += 1
            elif char == ')':
                bal -= 1
            if char in "tf&|!," and bal == 0:
                if last != i:
                    res = evaluate(exp[last:i])
                    last = i + 1
                    inside.append(res)
        return op_func(inside)

    return evaluate(expression)

# Complexity Analysis
# - Time Complexity: O(n), processing expression symbols.
# - Space Complexity: O(n), storing intermediate evaluations.
```

- Functionally evaluate parsed expressions using recursive logic.
- Implement boolean logic as functions handling specific operator tasks.

Each solution implements effective use of algorithms and structures designed to handle both finite and complex dynamic structures, optimizing computations through efficient system explorations and logical reductions.

### 1233. Remove Sub-Folders from the Filesystem (Medium)

#### Problem Statement
Given a list of folders in a filesystem in the form of a path like `/a`, `/a/b`, find and remove all the sub-folders. Return the remaining folders in lexicographical order.

#### Sample Input and Output
- Input: `folder = ["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]`
- Output: `["/a", "/c/d", "/c/f"]`

#### Solution Explanation
```python
def removeSubfolders(folder: list[str]) -> list[str]:
    folder.sort()
    result = []
    prev = ""

    for f in folder:
        if not prev or not f.startswith(prev + '/'):
            result.append(f)
            prev = f
    
    return result

# Complexity Analysis
# - Time Complexity: O(n log n), for sorting the folders.
# - Space Complexity: O(n), space for the result list.
```

- Sort folders lexicographically.
- Append a folder to the result list if it isn't a subfolder of the previous folder appended.

### 1526. Minimum Number of Increments on Subarrays to Form a Target Array (Hard)

#### Problem Statement
Given a target array of non-negative numbers, calculate the minimum number of operations needed to form the target array where each operation consists of increasing a subarray by 1.

#### Sample Input and Output
- Input: `target = [3,1,5,4]`
- Output: `7`

#### Solution Explanation
```python
def minNumberOperations(target: list[int]) -> int:
    operations = target[0]
    for i in range(1, len(target)):
        if target[i] > target[i - 1]:
            operations += target[i] - target[i - 1]
    return operations

# Complexity Analysis
# - Time Complexity: O(n), where n is the number of elements in the target.
# - Space Complexity: O(1), constant space usage.
```

- Calculate required operations by measuring differences going forward between higher subsequent target elements.
- Focus only on increment intensity change.

### 1768. Merge Strings Alternately (Easy)

#### Problem Statement
Given two strings `word1` and `word2`, merge them by alternating characters from each word, starting with `word1`. If one string is longer, append the remainder.

#### Sample Input and Output
- Input: `word1 = "abc", word2 = "pqr"`
- Output: `"apbqcr"`

#### Solution Explanation
```python
def mergeAlternately(word1: str, word2: str) -> str:
    merged = []
    i = 0

    while i < len(word1) or i < len(word2):
        if i < len(word1):
            merged.append(word1[i])
        if i < len(word2):
            merged.append(word2[i])
        i += 1

    return ''.join(merged)

# Complexity Analysis
# - Time Complexity: O(n + m), where n and m are lengths of word1 and word2.
# - Space Complexity: O(n + m), space for merged result.
```

- Traverse both strings simultaneously, appending characters in alternating fashion.
- Append any remaining characters from the longer string.

### 1757. Recyclable and Low Fat Products (Easy)

#### Problem Statement
Given a database with product information, write a SQL query to find products that are recyclable and have low fat as attributes.

#### Solution Explanation (SQL)
```sql
SELECT product_id
FROM Products
WHERE recyclable = 'Yes' AND low_fat = 'Yes';
```

- Filter directly based on attributes using SQL.
- Simple AND condition for combined attribute requirements.

### 1825. Finding MK Average (Hard)

#### Problem Statement
Implement a data structure that calculates the MKAverage for a given stream of integers, where only the latest `m` integers are considered, dropping the smallest `k` integers and the largest `k` integers.

#### Solution Explanation (Conceptual)
```python
import collections
import sortedcontainers

class MKAverage:
    def __init__(self, m: int, k: int):
        self.m = m
        self.k = k
        self.stream = collections.deque()
        self.sorted_window = sortedcontainers.SortedList()

    def addElement(self, num: int) -> None:
        self.stream.append(num)
        if len(self.stream) > self.m:
            oldest = self.stream.popleft()
            self.sorted_window.remove(oldest)
        self.sorted_window.add(num)

    def calculateMKAverage(self) -> int:
        if len(self.sorted_window) < self.m:
            return -1  # Not enough data
        effective_window = self.sorted_window[self.k:self.m - self.k]
        return sum(effective_window) // len(effective_window)

# Complexity Analysis
# - Time Complexity for addElement: O(log m) due to insertion in a sorted list.
# - Time Complexity for calculateMKAverage: O(m) for summing central elements.
# - Space Complexity: O(m), space to store elements in the window.
```

- Utilize a deque and sorted list to efficiently manage the data window.
- Compute the MKAverage by omitting first and last `k` elements from the sorted slicing.

### 2620. Counter (Easy)

#### Problem Statement
Implement a simple counter starting from a given value without using existing library functions.

#### Solution Explanation
```python
def createCounter(start: int = 0):
    def counter():
        nonlocal start
        start += 1
        return start
    return counter

# Usage:
# counter_instance = createCounter()
# print(counter_instance())  # 1
# print(counter_instance())  # 2
```

- Use closure to maintain state over increments.
- Each call to the counter function internally manages and updates the count.

Each solution leverages appropriate data handling and computational paradigms — from SQL for filtering tasks, leveraging sorted data structures for complex calculations, to closures for stateful counters — aimed at problem-specific applications to ensure both functionality and efficiency.