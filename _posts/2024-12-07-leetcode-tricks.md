---
title: Leetcode Ideas
tags: [Coding, Leetcode, Algorithms]
style: fill
color: secondary
description: Ideas behind solving Leetcode problems
---

1.   Basic Calculator II (Med): Use a stack to evaluate the expression. Traverse the string, parsing numbers and operators. On encountering an operator (+, -, *, /), decide whether to push or operate with the top of the stack based on operator precedence.

2.    Minimum Remove to Make Valid Parentheses (Med): Traverse the string to determine invalid parentheses using a stack to track indices. Traverse again to construct a valid string by skipping invalid indices.

3.   Binary Tree Vertical Order Traversal (Med): Use BFS traversal and a dictionary to track column indices. Assign and group node values by their position, maintaining order with the vertical index.

4.   Valid Word Abbreviation (Easy): Use two pointers to traverse both the word and abbreviation. Handle numeric abbreviation by converting to number and skipping characters in the word while checking character matches.

5.   Kth Largest Element in an Array (Med): Use a min-heap of size k to keep track of the k largest elements. Alternatively, use the quickselect algorithm to achieve faster average performance.

6.    Shortest Path in Binary Matrix (Med): Use BFS to find the shortest path. Start from the top-left corner and explore all possible moves in 8 directions, marking cells as visited to avoid cycles.

7.   Nested List Weight Sum (Med): Use DFS to recursively calculate the sum. For each nested list, add the value multiplied by its depth, iteratively for all elements inside.

8.   Lowest Common Ancestor of a Binary Tree (Med): Use recursion to traverse the tree. Return the node when either of the targets or their ancestors are found; LCA is where both targets diverge.

9.   Valid Palindrome II (Easy): Use two pointers to check for palindrome. On mismatch, skip one of the mismatched characters and verify if the resulting substring is a palindrome.

10.   Lowest Common Ancestor of a Binary Tree III (Med): Traverse from each node to the root, storing visited ancestors. Find the first common node from the ancestors of the two given nodes.

11.  Copy List with Random Pointer (Med): Create a deep copy using a hashmap to track original-to-copy node mapping. First pass to clone nodes, second pass to assign random pointers.

12.  Subarray Sum Equals K (Med): Use a hashmap to store the cumulative sum and its frequency. Traverse and check if cumulative sum minus k exists in the hashmap to determine subarray count.

13.   Dot Product of Two Sparse Vectors (Med): Store non-zero indices and values for each vector, then iterate through common indices to calculate the dot product, optimizing space and time complexity.

14. Pow(x, n) (Med): Use fast exponentiation (exponentiation by squaring) to reduce the time complexity. Recursively halve the exponent and multiply results for both even and odd powers.

15. Simplify Path (Med): Use a stack to process each part of the Unix-style path string. Push valid directories, and pop the stack for ".." to simulate navigating to the parent directory.

16.  Random Pick with Weight (Med): Use a prefix sum array and binary search. Generate a random number and find its position in the prefix sums to determine which index to pick.

17. Merge Sorted Array (Easy): Use three pointers starting from the end of both arrays and the perimeter of the destination. Iteratively add larger elements to the back of the result array.

18.  Custom Sort String (Med): Use a hash map to start with an empty result, storing custom order priorities. Sort the input string based on this custom order and append remaining items without priority. 

19. Merge k Sorted Lists (Hard): Use a min-heap to merge lists efficiently. Push the head of each list into the heap, extract the smallest, and push the next node from the same list into the heap.

20.  Valid Palindrome (Easy): Use two pointers to filter and compare alphanumeric characters while ignoring case. Traverse towards the center to verify palindrome conditions.

21.  Diameter of Binary Tree (Easy): Use a recursive depth-first search (DFS) to calculate the height of each subtree. Track the maximum path length through both children for the diameter.

22.  Maximum Swap (Med): Traverse the number to identify the first decrease and swap with the largest possible digit after it. Use a map to track the last seen index of each digit.

23.  LRU Cache (Med): Implement using an ordered dictionary/doubly linked list and a hash map to maintain order and access elements in constant time while adhering to capacity constraints.

24.  Binary Tree Right Side View (Med): Use BFS or DFS level-wise traversal. Capture the last node at each level, representing the visible nodes in a right side view.

25.  Convert Binary Search Tree to Sorted Doubly Linked List (Med): Perform an in-order traversal, linking nodes as you go, to maintain BST order in a doubly linked list format. 

26.  Minimum Add to Make Parentheses Valid (Med): Use a counter to track unmatched open parentheses. Increment on '(' and decrement on ')'. Count balance misses which signal added parentheses needed for validity.

27.  K Closest Points to Origin (Med): Use a max-heap to maintain the k smallest distances as you iterate through the points. Alternatively, apply quickselect to partition and find the kth closest point.

28. Two Sum (Easy): Use a hashmap to store the complement of each element required to reach the target sum. Check while traversing if the current element is the complement of a previous element.

29. Merge Intervals (Med): Sort intervals by start time. Then, iterate through each interval, merge overlapping intervals as you go, forming a new list of non-overlapping intervals.

30.  Sum Root to Leaf Numbers (Med): Use DFS to traverse each path from root to leaf. Accumulate values along the path, adding the resulting sum when a leaf node is reached.

31.  Find Peak Element (Med): Implement binary search for logarithmic efficiency. In each step, check the middle element and adjust the search range towards the higher neighbor to find a peak.

32.  Closest Binary Search Tree Value (Easy): Use BST properties to narrow down potential closest values as you traverse from root to leaf, adjusting the closest value according to the difference.

33.  Random Pick Index (Med): Use reservoir sampling to randomly select an index from possible occurrences. Given the same number, maintain a buffer to ensure each index has an equal pick chance.

34.  Exclusive Time of Functions (Med): Use a stack to keep track of function calls. As each function starts or ends, calculate the exclusive time using timestamps, and update the result list.

35.  Vertical Order Traversal of a Binary Tree (Hard): Use DFS with coordinates, creating a map sorted by x-axis, then by depth, and finally node value. Traverse the map to generate the order list.

36.  Best Time to Buy and Sell Stock (Easy): Track the minimum price seen so far and calculate possible profits at each day. Update the maximum profit accordingly during the single-pass loop.

37.  Moving Average from Data Stream (Easy): Utilize a queue to maintain a window of the last n elements. On adding new elements, compute the average using the cumulative sum kept in sync with the queue.

38.  Top K Frequent Elements (Med): Count element frequencies using a hash map, then utilize a min-heap to retain only the k highest frequencies, providing efficient extraction of top k elements.

39.  Toeplitz Matrix (Easy): Check all diagonals starting from each element in the first row and column. Verify that elements in each diagonal are the same, ensuring matrix unity across diagonals.

40.   Buildings With an Ocean View (Med): Traverse the list from right to left, keeping track of the tallest building so far. If a building is taller than all to its right, it has an ocean view.

41. 3Sum (Med): First, sort the array. Use a nested loop with two pointers to find unique triplets that sum to zero. Skip duplicates by adjusting pointers strategically to avoid repeated calculations.

42. Valid Number (Hard): Implement a state machine or regex to handle different parts of a valid number (integer, decimal, scientific notation), addressing edge cases like signs and exponents.

43.  Clone Graph (Med): Use BFS or DFS with a hash map to copy each node and its neighbors. Ensure that each original node maps to its clone to manage graph structure and avoid cycles.

44.  Design Tic-Tac-Toe (Med): Maintain row, column, and diagonal counters for each player to track their progression on the board. Check these counters on each move to determine if there's a winner.

45.  Kth Smallest Element in a Sorted Matrix (Med): Use a min-heap to efficiently access sorted elements, or apply binary search on element range by counting possible placements up to mid value.

46.  Sliding Window Median (Hard): Use two heaps to manage a sliding window (min and max heap). Balance contents to dynamically track the median as the window progresses through the array.

47.  Accounts Merge (Med): Use union-find or DFS for graph-based account merging. Connect accounts by their email, then group and merge connected components using the shared email addresses.

48.  Range Sum of BST (Easy): Use DFS or BFS to traverse the tree. Sum node values only when they fall within the given range, leveraging BST properties to skip unnecessary branches.

49.   Kth Missing Positive Number (Easy): Iterate through the sorted array, counting gaps between expected numbers and actual numbers present, addressing missing counts to locate the kth missing number.

50.   Product of Two Run-Length Encoded Arrays (Med): Implement two-pointer traversal along with the RLE structure, calculating contributions to the product once lengths align or exhaust values.

51. Longest Common Prefix (Easy): Sort strings, then compare characters of the first and last strings in the sorted list until they mismatch. The prefix is the substring up to this mismatch point.

52. Remove Nth Node From End of List (Med): Use two pointers with a gap of n nodes to locate the nth node from the end. Skip this node by adjusting pointers to preserve list continuity.

53. Minimum Window Substring (Hard): Use a sliding window with two pointers, expanding to include required characters and contracting to maintain minimal length while satisfying all constraints.

54.  Binary Tree Maximum Path Sum (Hard): Use DFS to track the maximum path crossing each node. Update global max path sum while computing max one-arm paths to ensure all possibilities are considered.

55.  Number of Islands (Med): Use DFS or BFS to explore each discovered island fully, marking visited nodes. Count instances where new islands are detected during traversal.

56.  Lowest Common Ancestor of a Binary Search Tree (Med): Utilize BST properties. Traverse starting from the root, searching in left or right child based on value comparison to locate the LCA.

57.  Group Shifted Strings (Med): Compare distance patterns between characters in each string. Use these patterns as keys to group similar shifting sequences in a dictionary for comparison.

58.  Meeting Rooms II (Med): Use a min-heap to track ongoing meetings' end times. As intervals are processed by their start time, allocate or release rooms based on available heap slots.

59.  Insert Delete GetRandom O(1) - Duplicates allowed (Hard): Merge a hash map and a list to support fast insertion, deletion, and random access. Update map entries and list indices as needed.

60.  Diagonal Traverse (Med): Use two nested loops to collect matrix elements by their sum of indices, then alternate sorting directions while constructing the output from these diagonal groups.

61.  Continuous Subarray Sum (Med): Use prefix sum and a hashmap to detect if a subarray summing to a multiple of k exists. Track cumulative sums' modulo k and check for repeated values.

62.  Boundary of Binary Tree (Med): Traverse the tree to collect left boundary, leaves, and right boundary using three distinct DFS traversals. Combine these edge paths to define the entire boundary.

63.  Add Bold Tag in String (Med): Use a boolean array to mark bold intervals. Merge these intervals into tags while constructing the string with embedded bold boundaries wherever required.

64.  Sliding Puzzle (Hard): Use BFS to simulate tile swapping. Apply a heuristic to prioritize optimal paths and precompute adjacent moves based on the current empty tile position.

65.  Robot Room Cleaner (Hard): Use DFS and a recursive backtracking algorithm to clean accessible areas. Utilize sensor feedback to navigate and return the robot ensuring all cells are cleaned.

66.  All Nodes Distance K in Binary Tree (Med): Use BFS from the target node, expanding outward to the kth layer. Track visited nodes to prevent revisiting and count unique distance layers.

67.  Shortest Bridge (Med): Use BFS to find and mark one island, then expand layer by layer until the second island is reached, giving the minimum bridge length.

68.  Minimum Cost For Tickets (Med): Use dynamic programming to track minimum travel costs on each day. Consider optimizing for daily, weekly, or monthly passes based on travel patterns.

69.  Interval List Intersections (Med): Use two pointers to iterate through both interval lists, checking for overlaps and advancing pointers based on interval end times to determine intersections.

70.   Max Consecutive Ones III (Med): Use a sliding window to translate indices, counting flips when a zero is encountered. Adjust window size based on allowed flip limit to reach maximum consecutive ones. 

71.   Capacity To Ship Packages Within D Days (Med): Use binary search to determine the minimal valid shipping capacity. Check feasibility by simulating daily ship operations using the current capacity.

72.   Lowest Common Ancestor of a Binary Tree II (Med): Extend LCA logic to handle situations where nodes might not exist. Traverse the tree, counting occurrences to validate both nodes' presence before deciding.

73.   Recyclable and Low Fat Products (Easy): Filter a data stream according to labels depicting recyclable and low-fat conditions. Apply checks iteratively to qualify entries for the final list.

74.   Create a DataFrame from List (Easy): Convert a list of data into a structured DataFrame object, typically using Python libraries like pandas to achieve formatted tabular representation and manipulation.