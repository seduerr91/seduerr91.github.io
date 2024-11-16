---
title: Jane Street Leetcode Study Guide
tags: [Coding, Jane Street]
style: fill
color: secondary
description: A few problems from Leetcode
---

---
title: Citadel Leetcode Study Guide
tags: [Coding, Citadel]
style: fill
color: secondary
description: A few problems from Leetcode
---

### 2085. Count Common Words With One Occurrence (Easy)

#### Problem Statement
Given two string arrays `words1` and `words2`, return the number of strings that appear exactly once in both arrays.

#### Sample Input and Output
- Input: `words1 = ["a", "ab"], words2 = ["a", "a", "a", "ab"]`
- Output: `1`

#### Solution Explanation
```python
def countWords(words1: list[str], words2: list[str]) -> int:
    from collections import Counter

    count1 = Counter(words1)
    count2 = Counter(words2)

    return sum(1 for word in count1 if count1[word] == 1 and count2.get(word, 0) == 1)

# Complexity Analysis
# - Time Complexity: O(n + m), where n and m are the lengths of words1 and words2.
# - Space Complexity: O(n + m), for storing counts.
```

- Use counters to examine the frequency of each word.
- Identify words that appear exactly once in each list and count them.

### 874. Walking Robot Simulation (Medium)

#### Problem Statement
A robot on an infinite grid starts at position (0, 0) facing north. The robot can receive commands - an array of integers indicating forward steps or turns left/right, and obstacles as 2D array. Find the maximum Euclidean distance squared from the origin it reaches after executing all commands.

#### Sample Input and Output
- Input: `commands = [4,-1,3], obstacles = []`
- Output: `25`

#### Solution Explanation
```python
def robotSim(commands, obstacles):
    dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]  # North, East, South, West
    x = y = direction = 0
    obstacle_set = set(map(tuple, obstacles))
    max_distance = 0

    for command in commands:
        if command == -2:  # turn left
            direction = (direction - 1) % 4
        elif command == -1:  # turn right
            direction = (direction + 1) % 4
        else:
            for _ in range(command):
                if (x + dx[direction], y + dy[direction]) not in obstacle_set:
                    x += dx[direction]
                    y += dy[direction]
                    max_distance = max(max_distance, x * x + y * y)

    return max_distance

# Complexity Analysis
# - Time Complexity: O(n+k), where n is the number of commands and k the number of obstacles.
# - Space Complexity: O(k), space for obstacles.
```

- Use arrays to track direction changes.
- Iterate commands to adjust robot movements while checking obstacles.

### 2809. Minimum Time to Make Array Sum At Most x (Hard)

#### Problem Statement
We don't have the exact statement available yet.

### 1032. Stream of Characters (Hard)

#### Problem Statement
Design and implement the `StreamChecker` class that checks if a string word from a list of words is a suffix of the last few characters entered with a streaming input of characters.

#### Sample Input and Output
- Input: `StreamChecker(["cd","f","kl"]); query("a"), query("b"), query("c")...`
- Output: `[false, false, true]`

#### Solution Explanation
```python
from collections import defaultdict

class StreamChecker:
    def __init__(self, words: list[str]):
        self.trie = {}
        self.stream = []
        for word in words:
            node = self.trie
            for char in reversed(word):
                if char not in node:
                    node[char] = {}
                node = node[char]
            node['#'] = True

    def query(self, letter: str) -> bool:
        self.stream.append(letter)
        node = self.trie
        for char in reversed(self.stream):
            if char in node:
                node = node[char]
                if '#' in node:
                    return True
            else:
                break
        return False

# Complexity Analysis
# - Time Complexity: O(q * l), where q is the number of queries and l average length of words.
# - Space Complexity: O(t), where t is the total length of all words for trie building.
```

- Construct a reversed trie to allow quick lookup.
- Check if any suffix forms a valid word using the trie.

### 2235. Add Two Integers (Easy)

#### Problem Statement
Given two integers, return their sum.

#### Solution Explanation
```python
def add(num1: int, num2: int) -> int:
    return num1 + num2

# Complexity Analysis
# - Time Complexity: O(1), constant time operation.
# - Space Complexity: O(1), no extra space.
```

- Straightforward addition operation leveraging Python's handling of integer arithmetic effectively.

### 14. Longest Common Prefix (Easy)

#### Problem Statement
Write a function to find the longest common prefix among a list of strings.

#### Sample Input and Output
- Input: `strs = ["flower","flow","flight"]`
- Output: `"fl"`

#### Solution Explanation
```python
def longestCommonPrefix(strs: list[str]) -> str:
    if not strs:
        return ""

    prefix = strs[0]
    for s in strs:
        while s[:len(prefix)] != prefix:
            prefix = prefix[:-1]
            if not prefix:
                return ""

    return prefix

# Complexity Analysis
# - Time Complexity: O(n * m), where n is the number of strings and m is the length of the shortest string.
# - Space Complexity: O(1), constant space used for comparisons.
```

- Incrementally reduce the prefix if it doesn't match others.
- Adjust efficiency to snap to the shortest common sequence required.

These solutions demonstrate algorithmic design to solve each problem effectively, using appropriate data structures and operations for the constraints provided.

### 399. Evaluate Division (Medium)

#### Problem Statement
You are given equations in the format `A / B = k`, where `A` and `B` are variables represented as strings, and `k` is a real number (floating-point number). Given some queries, return the answers to the division computations.

#### Sample Input and Output
- Input: `equations = [ ["a", "b"], ["b", "c"] ]`, `values = [2.0, 3.0]`, `queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]`
- Output: `[6.0, 0.5, -1.0, 1.0, -1.0]`

#### Solution Explanation
```python
from collections import defaultdict
import collections

def calcEquation(equations, values, queries):
    graph = defaultdict(dict)

    # Build the graph
    for (dividend, divisor), value in zip(equations, values):
        graph[dividend][divisor] = value
        graph[divisor][dividend] = 1 / value

    def bfs(src, dst):
        if src not in graph or dst not in graph:
            return -1.0
        queue = collections.deque([(src, 1.0)])
        visited = set([src])
        while queue:
            current_node, current_product = queue.popleft()
            if current_node == dst:
                return current_product
            for neighbor, value in graph[current_node].items():
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append((neighbor, current_product * value))
        return -1.0

    results = []
    for dividend, divisor in queries:
        results.append(bfs(dividend, divisor))
    return results

# Complexity Analysis
# - Time Complexity: O(N * Q), where N is the number of equations and Q is the number of queries.
# - Space Complexity: O(N), for storing the graph.
```

- Build a graph representation where nodes are variables and edges are division relationships.
- Use BFS or DFS to evaluate each query by traversing the graph.

### 415. Add Strings (Easy)

#### Problem Statement
Given two non-negative integers `num1` and `num2` represented as strings, return the sum of `num1` and `num2` as a string.

#### Sample Input and Output
- Input: `num1 = "11"`, `num2 = "123"`
- Output: `"134"`

#### Solution Explanation
```python
def addStrings(num1: str, num2: str) -> str:
    i, j = len(num1) - 1, len(num2) - 1
    carry, result = 0, []
    
    while i >= 0 or j >= 0 or carry:
        n1 = int(num1[i]) if i >= 0 else 0
        n2 = int(num2[j]) if j >= 0 else 0
        carry, digit = divmod(n1 + n2 + carry, 10)
        result.append(str(digit))
        i, j = i - 1, j - 1
    
    return ''.join(reversed(result))

# Complexity Analysis
# - Time Complexity: O(max(n, m)), where n and m are the lengths of the strings.
# - Space Complexity: O(max(n, m)), for storing the result.
```

- Simulate the addition manually, digit-by-digit, handling carry at each step.
- Convert characters to integers and back, constructing the result in reverse order for efficiency.

### 679. 24 Game (Hard)

#### Problem Statement
Given four cards as integers between 1 to 9, using the operators `+`, `-`, `*`, `/`, determine if you can operate through these to create the value 24.

#### Sample Input and Output
- Input: `[4, 1, 8, 7]`
- Output: `true` (e.g., because `(8-4) * (7-1) = 24`)

#### Solution Explanation
```python
def judgePoint24(cards):
    if len(cards) == 1:
        return abs(cards[0] - 24) < 1e-6
    
    for i in range(len(cards)):
        for j in range(len(cards)):
            if i != j:
                next_cards = [cards[k] for k in range(len(cards)) if k != i and k != j]
                for op in ('+', '-', '*', '/'):
                    if op in ('+', '*') and j > i:
                        continue
                    if op == '+':
                        next_cards.append(cards[i] + cards[j])
                    elif op == '-':
                        next_cards.append(cards[i] - cards[j])
                    elif op == '*':
                        next_cards.append(cards[i] * cards[j])
                    elif op == '/' and cards[j]:
                        next_cards.append(cards[i] / cards[j])
                    
                    if judgePoint24(next_cards):
                        return True
                    next_cards.pop()
                    
    return False

# Complexity Analysis
# - Time Complexity: factorial time complexity due to permutations and operations, around O(N!)
# - Space Complexity: O(N), where N is the depth of recursion tree (inherently bound by constants here)
```

- Implement recursive backtracking to explore permutations using arithmetic operations.
- Check for precision issues when approaching target 24 within a tolerance range.

These solutions involve constructing efficient representations, utilizing traversal methods, and recursively exploring combination scenarios to solve complex constraints.

