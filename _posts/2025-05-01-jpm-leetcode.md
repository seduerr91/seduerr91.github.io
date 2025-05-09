---
title: Leetcode Solutions JPM
tags: [Coding, Leetcode, Algorithms]
style: fill
color: secondary
description: JP Morgan Leetcode Solutions
---

### **12. Integer to Roman**
#### Problem
Convert an integer to a Roman numeral. Roman numerals are represented using letters such as `I, V, X, L, C, D, M`.

The rules are:
1. Larger values precede smaller values.
2. Subtraction is used for numbers such as 4 (`IV`) and 9 (`IX`).

#### Approach
This problem can be solved by using a greedy algorithm:
- Create a list of values and their respective Roman symbols.
- Start from the largest value in the list, repeatedly subtract it from the input number, and append its Roman symbol to the result.
- Continue until the number becomes 0.

```python
def intToRoman(num: int) -> str:
    symbols = [
        (1000, 'M'), (900, 'CM'), 
        (500, 'D'), (400, 'CD'), 
        (100, 'C'), (90, 'XC'), 
        (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), 
        (5, 'V'), (4, 'IV'), 
        (1, 'I')
    ]
    
    result = []
    for value, roman in symbols:
        while num >= value:
            result.append(roman)
            num -= value
    return ''.join(result)
```

#### Complexity
- Time Complexity: \(O(N)\), where \(N\) is the number size.
- Space Complexity: \(O(1)\).

---

### **1010. Pairs of Songs With Total Durations Divisible by 60**
#### Problem
Given an array of song durations, find the number of (i, j) pairs where the sum of `duration[i] + duration[j]` is divisible by 60.

#### Approach
We observe that two numbers \(a\) and \(b\) are divisible by 60 if their remainders with 60 add up to 60 (or 0 when the remainder is already 0). Using this insight:
1. Calculate the remainder for each duration modulo 60.
2. Use a frequency count to track how many durations have a specific remainder.
3. For each remainder \(r\) in the array, find the needed complement to make a sum divisible by 60 (\((60 - r) \% 60\)) and use the frequency map to count valid pairs.

```python
from collections import defaultdict

def numPairsDivisibleBy60(time: List[int]) -> int:
    freq = defaultdict(int)
    count = 0
    
    for t in time:
        remainder = t % 60
        complement = (60 - remainder) % 60
        count += freq[complement]  # Add the count of songs with the needed complement
        freq[remainder] += 1  # Update the frequency map
        
    return count
```

#### Complexity
- Time Complexity: \(O(N)\), where \(N\) is the size of the input.
- Space Complexity: \(O(60) \sim O(1)\), for the frequency map.

---

### **39. Combination Sum**
#### Problem
Given an array of distinct integers `candidates` and a target integer `target`, find all unique combinations of numbers from `candidates` that sum up to `target`. A number can be used multiple times.

#### Approach
This problem is typically solved using backtracking:
1. Start with an empty list and explore adding each candidate to the current combination.
2. If the total matches the target, add the combination to the result.
3. If the total exceeds the target, stop exploring the current path.
4. Use recursion to generate combinations, ensuring not to revisit explored paths.

```python
def combinationSum(candidates: List[int], target: int) -> List[List[int]]:
    def backtrack(start, target, comb):
        if target == 0:  # Base case: exact sum is achieved
            result.append(list(comb))
            return
        for i in range(start, len(candidates)):
            if candidates[i] > target:
                continue
            comb.append(candidates[i])
            backtrack(i, target - candidates[i], comb)  # Allow reuse of the same number
            comb.pop()  # Backtrack step
    
    result = []
    candidates.sort()  # Optional: can optimize early stopping
    backtrack(0, target, [])
    return result
```

#### Complexity
- Time Complexity: \(O(2^N)\) (exponential, as it explores all combinations).
- Space Complexity: \(O(N)\), for the recursion stack.

---

### **49. Group Anagrams**
#### Problem
Given an array of strings, group the input strings into anagrams (strings that consist of the same characters in possibly different orders).

#### Approach
The key observation is that anagrams have the same sorted characters. 
1. Sort the characters in each string and use that as the key in a dictionary.
2. Group strings with the same key.

```python
from collections import defaultdict

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagrams = defaultdict(list)
    
    for s in strs:
        key = ''.join(sorted(s))  # Key is the sorted string
        anagrams[key].append(s)
    
    return list(anagrams.values())
```

#### Complexity
- Time Complexity: \(O(N \cdot K \log K)\), where \(N\) is the number of strings, and \(K\) is the average string length.
- Space Complexity: \(O(N)\).

---

### **53. Maximum Subarray**
#### Problem
Find the contiguous subarray (containing at least one number) with the largest sum in an integer array.

#### Approach
We use Kadane’s algorithm, which is an efficient and simple O(N) approach:
1. Traverse the array while keeping track of the current subarray sum (`currentSum`).
2. If `currentSum` becomes negative, reset it to 0.
3. Track the maximum sum found so far.

```python
def maxSubArray(nums: List[int]) -> int:
    maxSum = float('-inf')
    currentSum = 0
    
    for n in nums:
        currentSum = max(n, currentSum + n)
        maxSum = max(maxSum, currentSum)
    
    return maxSum
```

#### Complexity
- Time Complexity: \(O(N)\).
- Space Complexity: \(O(1)\).

---

### **67. Add Binary**
#### Problem
Given two binary strings, return their sum as a binary string.

#### Approach
Starting from the least significant digit:
1. Add binary digits from right to left, keeping track of carry.
2. If carry exists at the end, include it in the result.

```python
def addBinary(a: str, b: str) -> str:
    result = []
    carry = 0
    
    i, j = len(a) - 1, len(b) - 1
    
    while i >= 0 or j >= 0 or carry:
        sum = carry
        if i >= 0:
            sum += int(a[i])
            i -= 1
        if j >= 0:
            sum += int(b[j])
            j -= 1
        carry = sum // 2
        result.append(str(sum % 2))
    
    return ''.join(reversed(result))
```

#### Complexity
- Time Complexity: \(O(\max(M, N))\), where \(M, N\) are the lengths of the input strings.
- Space Complexity: \(O(\max(M, N))\).

---

### **91. Decode Ways**
#### Problem
Given a string of digits, count the number of ways to decode it, where:
- `'1' to '26'` correspond to letters `'A to Z'`.

#### Approach
Dynamic Programming (DP) can solve this efficiently:
1. Create a DP array of size \(N+1\) (where \(N\) is the string length).
2. `dp[i]` represents the number of ways to decode the first \(i\) digits.
3. Use transitions:
   - If a single digit is valid, add \(dp[i-1]\).
   - If the last two digits form a valid number (10–26), add \(dp[i-2]\).

```python
def numDecodings(s: str) -> int:
    if not s or s[0] == '0':
        return 0

    dp = [0] * (len(s) + 1)
    dp[0], dp[1] = 1, 1  # Empty string and first char

    for i in range(2, len(s) + 1):
        if s[i-1] != '0':  # Single digit
            dp[i] += dp[i-1]
        if 10 <= int(s[i-2:i]) <= 26:  # Two digits
            dp[i] += dp[i-2]
    
    return dp[-1]
```

#### Complexity
- Time Complexity: \(O(N)\), where \(N\) is the string length.
- Space Complexity: \(O(N)\). Can be optimized to \(O(1)\).

### **2038. Remove Colored Pieces if Both Neighbors are the Same Color**
#### Problem
You are given a string of colors (`A` and `B`), representing a row of colored pieces. Alice and Bob alternately remove a piece of their color (`A` for Alice and `B` for Bob) if it's possible; a piece can be removed if it has the same color as both of its neighbors.

Determine if Alice will have more pieces removed than Bob.

#### Approach
1. Traverse the string and count the number of removable sequences of size `AAA` (Alice) and `BBB` (Bob).
2. Count the number of moves available to Alice and Bob based on these sequences.
3. Compare the counts; Alice wins if her count is greater than Bob's.

```python
def winnerOfGame(colors: str) -> bool:
    a_count = 0
    b_count = 0

    for i in range(1, len(colors) - 1):
        # Check for "AAA" patterns
        if colors[i - 1:i + 2] == "AAA":
            a_count += 1
        # Check for "BBB" patterns
        elif colors[i - 1:i + 2] == "BBB":
            b_count += 1

    return a_count > b_count
```

#### Complexity
- **Time Complexity**: \(O(N)\), where \(N\) is the length of the string.
- **Space Complexity**: \(O(1)\).

---

### **1167. Minimum Cost to Connect Sticks**
#### Problem
You are given a list of stick lengths, where you can combine two sticks into one stick with a cost equal to the sum of their lengths. Your goal is to minimize the total cost of combining all the sticks into one.

#### Approach
This problem is solved using a **min-heap** (priority queue):
1. Add all stick lengths to a min-heap.
2. Repeatedly extract the two smallest sticks, compute their sum, and add the sum back to the heap.
3. Track the total cost incurred during this process.

```python
import heapq

def connectSticks(sticks: List[int]) -> int:
    heapq.heapify(sticks)  # Create a min-heap
    total_cost = 0

    while len(sticks) > 1:
        # Pop the two smallest sticks
        stick1 = heapq.heappop(sticks)
        stick2 = heapq.heappop(sticks)
        cost = stick1 + stick2
        total_cost += cost
        heapq.heappush(sticks, cost)  # Push the new stick back into the heap

    return total_cost
```

#### Complexity
- **Time Complexity**: \(O(N \log N)\), where \(N\) is the number of sticks.
- **Space Complexity**: \(O(N)\).

---

### **118. Pascal's Triangle**
#### Problem
Generate the first `numRows` of Pascal's Triangle:
- The first row is `[1]`.
- Each subsequent row is constructed using the sum of adjacent elements from the previous row.

#### Approach
1. Initialize the first row as `[1]`.
2. For each row, generate the current row by adding adjacent elements from the previous row.

```python
def generate(numRows: int) -> List[List[int]]:
    result = []

    for i in range(numRows):
        row = [1] * (i + 1)  # Initialize row with 1s
        for j in range(1, i):
            row[j] = result[i - 1][j - 1] + result[i - 1][j]  # Sum of adjacent elements
        result.append(row)

    return result
```

#### Complexity
- **Time Complexity**: \(O(N^2)\), where \(N\) is the number of rows.
- **Space Complexity**: \(O(1)\) (excluding the output list).

---

### **122. Best Time to Buy and Sell Stock II**
#### Problem
Given an array of stock prices, determine the maximum profit you can achieve by buying and selling multiple times. You cannot hold more than one stock at a time.

#### Approach
This problem can be solved greedily:
1. Add the profit for every increase in stock prices (i.e., when `prices[i] > prices[i-1]`).
2. This ensures that you capture the total profit from all upward trends.

```python
def maxProfit(prices: List[int]) -> int:
    profit = 0

    for i in range(1, len(prices)):
        if prices[i] > prices[i - 1]:
            profit += prices[i] - prices[i - 1]

    return profit
```

#### Complexity
- **Time Complexity**: \(O(N)\).
- **Space Complexity**: \(O(1)\).

---

### **2068. Check Whether Two Strings are Almost Equivalent**
#### Problem
Two strings are "almost equivalent" if no character's frequency differs by more than 3.

#### Approach
1. Count the frequency of characters in both strings using collections.Counter.
2. Compare the frequency differences for each character.

```python
from collections import Counter

def checkAlmostEquivalent(word1: str, word2: str) -> bool:
    freq1 = Counter(word1)
    freq2 = Counter(word2)

    # Combine all unique characters
    all_chars = set(freq1.keys()).union(freq2.keys())

    # Check if any frequency difference exceeds 3
    for char in all_chars:
        if abs(freq1[char] - freq2[char]) > 3:
            return False

    return True
```

#### Complexity
- **Time Complexity**: \(O(M + N)\), where \(M\) and \(N\) are lengths of the two strings.
- **Space Complexity**: \(O(U)\), where \(U\) is the number of unique characters.

---

### **2104. Sum of Subarray Ranges**
#### Problem
For every subarray of an array, calculate the difference between its maximum and minimum values and return the sum of those differences.

#### Approach
1. For each element in the array, calculate how many subarrays it is the **maximum** and **minimum** for.
   - Use monotonic stacks to efficiently calculate left and right bounds for both max and min conditions.
2. Calculate the contribution of each element as a maximum and as a minimum, and sum the results.

```python
def subArrayRanges(nums: List[int]) -> int:
    n = len(nums)
    
    def countBounds(isMin):
        stack = []
        left = [0] * n
        right = [0] * n
        
        # Left bound
        for i in range(n):
            while stack and (nums[stack[-1]] > nums[i] if isMin else nums[stack[-1]] < nums[i]):
                stack.pop()
            left[i] = i - (stack[-1] if stack else -1)
            stack.append(i)
        
        stack = []
        # Right bound
        for i in range(n - 1, -1, -1):
            while stack and (nums[stack[-1]] >= nums[i] if isMin else nums[stack[-1]] <= nums[i]):
                stack.pop()
            right[i] = (stack[-1] if stack else n) - i
            stack.append(i)
        
        return [l * r for l, r in zip(left, right)]
    
    maxBounds = countBounds(False)
    minBounds = countBounds(True)
    
    return sum(nums[i] * (maxBounds[i] - minBounds[i]) for i in range(n))
```

#### Complexity
- **Time Complexity**: \(O(N)\), due to the use of monotonic stacks.
- **Space Complexity**: \(O(N)\).

---

### **202. Happy Number**
#### Problem
A number is happy if repeatedly transforming it into the sum of the squares of its digits eventually equals 1. Determine if a number is happy.

#### Approach
1. Use a set to detect cycles in the transformation process.
2. Repeatedly calculate the square-sum until the number equals 1 or loops back to a value we've seen before.

```python
def isHappy(n: int) -> bool:
    def getNext(num):
        total = 0
        while num > 0:
            digit = num % 10
            total += digit * digit
            num //= 10
        return total
    
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = getNext(n)
    
    return n == 1
```

#### Complexity
- **Time Complexity**: \(O(\log N)\), where \(N\) is the input number.
- **Space Complexity**: \(O(\log N)\), for the set.

---

### **1328. Break a Palindrome**

#### Problem
Given a palindrome string, replace exactly one character to make the string **not** a palindrome and lexicographically smallest. If the string length is `1`, return an empty string because it's impossible.

#### Approach
1. Traverse the string. Replace the first non-`'a'` character in the first half of the palindrome with `'a'`.
2. If the string is still a palindrome after traversing, change the last character to `'b'`, which is lexicographically larger.
3. Return the modified string.

#### Solution
```python
def breakPalindrome(palindrome: str) -> str:
    if len(palindrome) == 1:
        return ""

    chars = list(palindrome)
    for i in range(len(chars) // 2):  # Only look at the first half of the palindrome
        if chars[i] != 'a':
            chars[i] = 'a'  # Break the palindrome by replacing with 'a'
            return ''.join(chars)
    
    # If all characters are 'a', replace the last character with 'b'
    chars[-1] = 'b'
    return ''.join(chars)
```

#### Complexity
- **Time Complexity**: \(O(N)\), where \(N\) is the length of the string.
- **Space Complexity**: \(O(N)\), for the modified string.

---

### **263. Ugly Number**

#### Problem
A number is "ugly" if it is greater than `0` and its prime factors only include `2`, `3`, and `5`. Determine if a number is ugly.

#### Approach
Repeatedly divide the number by `2`, `3`, or `5` (if divisible) and check if the resulting number is reduced to `1`.

#### Solution
```python
def isUgly(n: int) -> bool:
    if n <= 0:
        return False
    for factor in [2, 3, 5]:
        while n % factor == 0:
            n //= factor
    return n == 1
```

#### Complexity
- **Time Complexity**: \(O(\log N)\), due to repeated division.
- **Space Complexity**: \(O(1)\).

---

### **1200. Minimum Absolute Difference**

#### Problem
Given an array of integers, find all pairs of elements with the smallest absolute difference.

#### Approach
1. Sort the array.
2. Traverse the sorted array and calculate differences between consecutive elements.
3. Track the smallest difference, and store all pairs with that difference.

#### Solution
```python
def minimumAbsDifference(arr: List[int]) -> List[List[int]]:
    arr.sort()
    min_diff = float('inf')
    result = []

    for i in range(1, len(arr)):
        diff = arr[i] - arr[i - 1]
        if diff < min_diff:
            min_diff = diff
            result = [[arr[i - 1], arr[i]]]
        elif diff == min_diff:
            result.append([arr[i - 1], arr[i]])
    
    return result
```

#### Complexity
- **Time Complexity**: \(O(N \log N)\), for sorting the array.
- **Space Complexity**: \(O(N)\), for the result list.

---

### **287. Find the Duplicate Number**

#### Problem
Given an array of integers containing numbers `1` to `n` (inclusive), with **one duplicate**, find the duplicate without modifying the array.

#### Approach
Use the **Floyd's Tortoise and Hare (Cycle Detection)** algorithm:
1. Treat the array as a linked list where each position points to the next number as its index.
2. Use two pointers (slow and fast) to detect a cycle.
3. Once a cycle is found, use two pointers to find the duplicate.

#### Solution
```python
def findDuplicate(nums: List[int]) -> int:
    # Phase 1: Detect cycle using two pointers
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break

    # Phase 2: Find the starting point of the cycle (duplicate)
    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    
    return slow
```

#### Complexity
- **Time Complexity**: \(O(N)\), where \(N\) is the length of the array.
- **Space Complexity**: \(O(1)\).

---

### **2283. Check if Number Has Equal Digit Count and Digit Value**

#### Problem
Given a string `num` where `num[i]` represents the count of digit `i` in the number, check if this condition is satisfied.

#### Approach
1. Count the frequency of digits in the string using `collections.Counter`.
2. For each position `i`, check if the frequency matches the integer value of `num[i]`.

#### Solution
```python
from collections import Counter

def digitCount(num: str) -> bool:
    freq = Counter(num)
    for i, count in enumerate(num):
        if freq[str(i)] != int(count):
            return False
    return True
```

#### Complexity
- **Time Complexity**: \(O(N)\), where \(N\) is the length of the string.
- **Space Complexity**: \(O(1)\).

---

### **2273. Find Resultant Array After Removing Anagrams**

#### Problem
Given a list of strings, remove consecutive anagrams, keeping only the first occurrence.

#### Approach
1. Use sorted strings to identify anagrams.
2. Traverse the list and compare each string with the sorted version of the previous string to skip anagrams.

#### Solution
```python
def removeAnagrams(words: List[str]) -> List[str]:
    result = [words[0]]  # Always keep the first word
    for i in range(1, len(words)):
        if sorted(words[i]) != sorted(result[-1]):  # Check if it’s different from the previous
            result.append(words[i])
    return result
```

#### Complexity
- **Time Complexity**: \(O(N \cdot K \log K)\), where \(N\) is the number of strings, and \(K\) is the average string length.
- **Space Complexity**: \(O(N \cdot K)\).

---

### **349. Intersection of Two Arrays**

#### Problem
Return the intersection of two arrays, with each element appearing only once.

#### Approach
Use Python `set` operations to compute the intersection.

#### Solution
```python
def intersection(nums1: List[int], nums2: List[int]) -> List[int]:
    return list(set(nums1) & set(nums2))
```

#### Complexity
- **Time Complexity**: \(O(M + N)\), where \(M\) and \(N\) are the lengths of the two arrays.
- **Space Complexity**: \(O(M + N)\), for the sets.


Here are clear and concise solutions, along with explanations, for each of the requested problems:

---

### **1356. Sort Integers by The Number of 1 Bits**
#### Problem
Sort an array of integers by the number of `1` bits in their binary representation. For equal counts of `1` bits, integers should be sorted numerically.

#### Approach
1. Count the number of `1`s in the binary representation using the `bin(x).count('1')` function.
2. Use a custom sort key: (number of `1`s, integer value).

#### Solution
```python
def sortByBits(arr: List[int]) -> List[int]:
    return sorted(arr, key=lambda x: (bin(x).count('1'), x))
```

#### Complexity
- **Time Complexity**: \(O(N \log N \cdot K)\), where \(N\) is the size of the array, and \(K\) is the number of bits in the largest number.
- **Space Complexity**: \(O(N)\).

---

### **435. Non-overlapping Intervals**
#### Problem
Given a list of intervals, find the minimum number of intervals to remove so that the remaining intervals do not overlap.

#### Approach
1. Sort the intervals by their end times.
2. Traverse the intervals, keeping the last included interval's end. Skip overlapping intervals.

#### Solution
```python
def eraseOverlapIntervals(intervals: List[List[int]]) -> int:
    intervals.sort(key=lambda x: x[1])  # Sort by end time
    non_overlapping = 0
    last_end = float('-inf')
    
    for start, end in intervals:
        if start >= last_end:  # Non-overlapping, update last_end
            last_end = end
        else:  # Overlapping, increment removals
            non_overlapping += 1
    
    return non_overlapping
```

#### Complexity
- **Time Complexity**: \(O(N \log N)\), for sorting.
- **Space Complexity**: \(O(1)\).

---

### **2415. Reverse Odd Levels of Binary Tree**
#### Problem
Given a binary tree, reverse the nodes at all odd levels (starting from level `1` as the root).

#### Approach
1. Perform a level-order traversal using a queue.
2. For nodes at odd levels, reverse the values before proceeding to the next level.

#### Solution
```python
def reverseOddLevels(root: TreeNode) -> TreeNode:
    from collections import deque
    queue = deque([root])
    level = 0

    while queue:
        n = len(queue)
        values = [node.val for node in queue]

        # Reverse values at odd levels
        if level % 2 == 1:
            for i in range(n):
                queue[i].val = values[n - 1 - i]

        # Continue with BFS
        for _ in range(n):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)

        level += 1

    return root
```

#### Complexity
- **Time Complexity**: \(O(N)\), where \(N\) is the number of nodes.
- **Space Complexity**: \(O(D)\), where \(D\) is the maximum level width.

---

### **1353. Maximum Number of Events That Can Be Attended**
#### Problem
You are given `events` with start and end days. Attend as many events as possible (1 per day).

#### Approach
1. Sort events by starting day.
2. Use a min-heap to track ongoing events and pick meetings as early as possible.

#### Solution
```python
import heapq

def maxEvents(events: List[List[int]]) -> int:
    events.sort()  # Sort by start time
    min_heap = []
    day = 0
    count = 0
    i = 0
    n = len(events)

    while i < n or min_heap:
        if not min_heap and i < n:
            day = max(day, events[i][0])

        while i < n and events[i][0] <= day:
            heapq.heappush(min_heap, events[i][1])  # Push end day
            i += 1

        while min_heap and min_heap[0] < day:
            heapq.heappop(min_heap)  # Remove expired events

        if min_heap:
            heapq.heappop(min_heap)  # Attend current event
            count += 1

        day += 1

    return count
```

#### Complexity
- **Time Complexity**: \(O(N \log N)\), where \(N\) is the number of events.
- **Space Complexity**: \(O(N)\), for the heap.

---

### **2393. Count Strictly Increasing Subarrays**
#### Problem
Count the number of strictly increasing contiguous subarrays in an array `nums`.

#### Approach
1. Use a variable `count` to track the length of consecutive increasing elements.
2. For every subarray ending at index `i`, the count of increasing subarrays contributed is `count`.

#### Solution
```python
def countSubarrays(nums: List[int]) -> int:
    total = 0
    count = 1

    for i in range(1, len(nums)):
        if nums[i] > nums[i - 1]:
            count += 1
        else:
            count = 1
        total += count

    return total
```

#### Complexity
- **Time Complexity**: \(O(N)\).
- **Space Complexity**: \(O(1)\).

---

### **2448. Minimum Cost to Make Array Equal**
#### Problem
You are given two arrays: values and `cost`. For every possible target value, compute the cost of making all array elements equal to it. Minimize this cost.

#### Approach
1. Use binary search to find the optimal target value.
2. Evaluate the cost at `mid`, `mid+1`, and adjust the search range accordingly.

#### Solution
```python
def minCost(nums: List[int], cost: List[int]) -> int:
    def compute_cost(target):
        return sum(abs(num - target) * c for num, c in zip(nums, cost))
    
    left, right = min(nums), max(nums)
    while left < right:
        mid = (left + right) // 2
        if compute_cost(mid) < compute_cost(mid + 1):
            right = mid
        else:
            left = mid + 1
    return compute_cost(left)
```

#### Complexity
- **Time Complexity**: \(O(N \log T)\), where \(T\) is the range of numbers.
- **Space Complexity**: \(O(1)\).

---

### **1418. Display Table of Food Orders in a Restaurant**
#### Problem
Given a list of food orders, display a table showing food items ordered per table in lexicographical order.

#### Approach
1. Use a dictionary to map table numbers to a counter of food items.
2. Sort the table numbers and food items for output.

#### Solution
```python
from collections import defaultdict, Counter

def displayTable(orders: List[List[str]]) -> List[List[str]]:
    table_data = defaultdict(Counter)
    food_items = set()

    for _, table, food in orders:
        table_data[int(table)][food] += 1
        food_items.add(food)

    food_items = sorted(food_items)
    result = [["Table"] + food_items]

    for table in sorted(table_data.keys()):
        result.append([str(table)] + [str(table_data[table].get(food, 0)) for food in food_items])

    return result
```

#### Complexity
- **Time Complexity**: \(O(N + T \cdot M)\), where \(N\) is the number of orders, \(T\) is the number of tables, and \(M\) is the number of food items.
- **Space Complexity**: \(O(T \cdot M)\), for storing order data.

---

### **1481. Least Number of Unique Integers after K Removals**
#### Problem
Remove `k` elements to minimize the number of unique integers.

#### Approach
1. Count the frequency of each number.
2. Remove numbers with the lowest frequency first.

#### Solution
```python
from collections import Counter

def findLeastNumOfUniqueInts(arr: List[int], k: int) -> int:
    freq = Counter(arr)
    freq_values = sorted(freq.values())
    
    for count in freq_values:
        if k >= count:
            k -= count
        else:
            break
    return len(freq_values) - freq_values.index(count)
```

---

---

### **752. Open the Lock**
#### Problem
You start at `"0000"` on a lock with 4 dials and need to unlock it to a target combination. Each dial can turn up or down. Given a list of "deadends" (combinations that cannot be used), find the minimum number of turns required to open the lock, or return `-1` if it's impossible.

#### Approach
1. Use Breadth-First Search (BFS) to explore the shortest path:
   - Treat the lock as a graph where each node represents a lock combination.
   - Each node has up to 8 neighbors (turning each dial up or down).
2. Use a `queue` to track combinations to explore and a `set` to store visited nodes and deadends.

#### Solution
```python
from collections import deque

def openLock(deadends: List[str], target: str) -> int:
    dead_set = set(deadends)
    
    if "0000" in dead_set or target in dead_set:
        return -1

    def get_neighbors(node):
        neighbors = []
        for i in range(4):
            digit = int(node[i])
            for diff in [-1, 1]:
                new_digit = (digit + diff) % 10
                neighbors.append(node[:i] + str(new_digit) + node[i+1:])
        return neighbors
        
    queue = deque([("0000", 0)])
    visited = set(["0000"])
    
    while queue:
        node, steps = queue.popleft()
        if node == target:
            return steps
        
        for neighbor in get_neighbors(node):
            if neighbor not in visited and neighbor not in dead_set:
                visited.add(neighbor)
                queue.append((neighbor, steps + 1))
    
    return -1
```

#### Complexity
- **Time Complexity**: \(O(10^4)\), for all 4-digit combinations.
- **Space Complexity**: \(O(10^4)\).

---

### **780. Reaching Points**
#### Problem
From a starting point `(sx, sy)`, determine if it's possible to reach `(tx, ty)` by repeatedly applying the operations:
1. `(x, y) -> (x + y, y)` or `(x, y) -> (x, x + y)`

#### Approach
1. Work **backwards** from `(tx, ty)` to determine if `(sx, sy)` could have generated the target.
2. Reduce one of `tx` or `ty` by taking modulo operations on the larger value (as only the remainder matters).

#### Solution
```python
def reachingPoints(sx: int, sy: int, tx: int, ty: int) -> bool:
    while tx >= sx and ty >= sy:
        if tx == sx and ty == sy:
            return True
        if tx > ty:
            if ty > sy:
                tx %= ty
            else:
                return (tx - sx) % ty == 0
        else:
            if tx > sx:
                ty %= tx
            else:
                return (ty - sy) % tx == 0
    return False
```

#### Complexity
- **Time Complexity**: \(O(\log(\max(tx, ty)))\).
- **Space Complexity**: \(O(1)\).

---

### **1710. Maximum Units on a Truck**
#### Problem
You are given `boxTypes`, where each entry is `[numberOfBoxes, numberOfUnitsPerBox]`. You have a limited truck capacity, `truckSize`. Find the maximum number of units that can be carried.

#### Approach
1. **Greedy Strategy**: Sort `boxTypes` by `numberOfUnitsPerBox` in descending order, and use as many boxes as possible until the truck is full.

#### Solution
```python
def maximumUnits(boxTypes: List[List[int]], truckSize: int) -> int:
    boxTypes.sort(key=lambda x: -x[1])  # Sort by units per box (descending)
    total_units = 0

    for boxes, units_per_box in boxTypes:
        if truckSize <= 0:
            break
        count = min(boxes, truckSize)  # Use only as many boxes as the truck can take
        total_units += count * units_per_box
        truckSize -= count

    return total_units
```

#### Complexity
- **Time Complexity**: \(O(N \log N)\), for sorting.
- **Space Complexity**: \(O(1)\).

---

### **1812. Determine Color of a Chessboard Square**
#### Problem
Given a chessboard square (e.g., `"a1"`), determine whether it is black or white.

#### Approach
1. Convert the letter to a column index and the number to a row index.
2. A square is black if `(row + column) % 2 != 0`.

#### Solution
```python
def squareIsWhite(coordinates: str) -> bool:
    column = ord(coordinates[0]) - ord('a')
    row = int(coordinates[1]) - 1
    return (row + column) % 2 != 0
```

#### Complexity
- **Time Complexity**: \(O(1)\).
- **Space Complexity**: \(O(1)\).

---

### **696. Count Binary Substrings**
#### Problem
Count the number of substrings containing equal and consecutive groups of `0`s and `1`s.

#### Approach
1. Traverse and count the lengths of consecutive `0`s and `1`s.
2. The result is the sum of the minimum counts of every pair of consecutive groups.

#### Solution
```python
def countBinarySubstrings(s: str) -> int:
    groups = [1]  # Count lengths of consecutive groups
    
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            groups[-1] += 1
        else:
            groups.append(1)
    
    count = 0
    for i in range(1, len(groups)):
        count += min(groups[i - 1], groups[i])
    
    return count
```

#### Complexity
- **Time Complexity**: \(O(N)\).
- **Space Complexity**: \(O(N)\).

---

### **48. Rotate Image**
#### Problem
Given an \(N \times N\) matrix, rotate it 90 degrees clockwise **in-place**.

#### Approach
1. **Transpose the matrix**: Swap elements along the diagonal.
2. **Reverse each row** to achieve the 90-degree rotation.

#### Solution
```python
def rotate(matrix: List[List[int]]) -> None:
    n = len(matrix)
    
    # Transpose the matrix
    for i in range(n):
        for j in range(i + 1, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # Reverse each row
    for row in matrix:
        row.reverse()
```

#### Complexity
- **Time Complexity**: \(O(N^2)\).
- **Space Complexity**: \(O(1)\).

---

### **167. Two Sum II - Input Array Is Sorted**
#### Problem
Find two numbers in a sorted array that add up to a target.

#### Approach
1. Use the **two-pointer technique**:
   - Start with a pointer at the beginning (`low`) and another at the end (`high`).
   - Adjust the pointers based on the sum value.

#### Solution
```python
def twoSum(numbers: List[int], target: int) -> List[int]:
    low, high = 0, len(numbers) - 1
    
    while low < high:
        current_sum = numbers[low] + numbers[high]
        if current_sum == target:
            return [low + 1, high + 1]  # 1-based indexing
        elif current_sum < target:
            low += 1
        else:
            high -= 1
```

#### Complexity
- **Time Complexity**: \(O(N)\).
- **Space Complexity**: \(O(1)\).
