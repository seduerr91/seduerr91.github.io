---
title: Dynamic Programming
tags: [Coding]
style: fill
color: secondary
description: A primer on DP inspired by CS Imposter Handbook
---

# Demystifying Dynamic Programming: A Practical Guide

Dynamic programming (DP) is a powerful technique for solving optimization problems by breaking them down into simpler subproblems. While the name might sound intimidating, the concept is straightforward and incredibly useful for both interviews and real-world coding challenges.

## What is Dynamic Programming?

Dynamic programming is a method for solving complex problems by dividing them into subproblems, solving each subproblem just once, and storing their solutions. The next time the same subproblem occurs, you simply look up the answer instead of recomputing it—this is called **memoization**.

### When Should You Use Dynamic Programming?
To use dynamic programming, your problem should:
- **Be an optimization problem.** (e.g., finding the best, shortest, or most efficient solution)
- **Be divisible into subproblems.** (You can break it down recursively)
- **Have optimal substructure.** (The solution to the overall problem depends on the solutions to its subproblems)
- **Be reducible to P time through memoization.** (You can cache subproblem results to avoid redundant work)

## A Brief History

The term "dynamic programming" was coined by Richard Bellman in the 1950s. Interestingly, the name was chosen not for its technical meaning, but to make the research sound appealing (and non-threatening) to government officials who disliked the word "research." The technique, however, is behind some of the most powerful algorithms in computer science.

## A Classic Example: Fibonacci Numbers

The Fibonacci sequence is a classic example for understanding dynamic programming. Each number in the sequence is the sum of the two preceding numbers:

```
1, 1, 2, 3, 5, 8, 13, ...
```

### The Naive Recursive Approach

```js
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
```

This approach is simple but inefficient. Calculating `fib(10)` results in hundreds of function calls, and `fib(32)` takes millions! The time complexity is exponential.

### The Dynamic Programming Approach (Memoization)

```js
function fibDP(n) {
  const memo = [0, 1];
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}
```

This version stores the results of subproblems, so each Fibonacci number is only calculated once. The time and space complexity are both O(n).

## Key Takeaways

- **Dynamic programming** is about breaking problems into subproblems, solving each once, and reusing solutions.
- **Memoization** (caching) is the heart of DP, turning exponential-time problems into polynomial-time ones.
- Use DP for optimization problems with overlapping subproblems and optimal substructure.
- Mastering DP will help you ace interviews and tackle real-world challenges efficiently.

Next time you face a tough optimization problem, ask yourself: can I break this down into subproblems and reuse their solutions? If so, dynamic programming might be your best friend! 