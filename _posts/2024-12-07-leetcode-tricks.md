---
title: Leetcode Ideas
tags: [Coding, Leetcode, Algorithms]
style: fill
color: secondary
description: Ideas behind solving Leetcode problems
---

**227. Basic Calculator II (Med):** Use a stack to evaluate the expression. Traverse the string, parsing numbers and operators. Perform operations based on precedence, pushing to the stack when necessary.

**1249. Minimum Remove to Make Valid Parentheses (Med):** Use a stack to track unmatched parentheses indices. Traverse the string twice: first to find invalid ones, then reconstruct a valid string without them.

**314. Binary Tree Vertical Order Traversal (Med):** Use BFS and a dictionary to store nodes based on their vertical (column) index. Traverse row by row, collecting nodes in vertical order.

**408. Valid Word Abbreviation (Easy):** Use two pointers to traverse the word and abbreviation. For numeric parts in the abbreviation, increment the word pointer accordingly and compare letters.

**215. Kth Largest Element in an Array (Med):** Use a min-heap for efficient kth element retrieval or quickselect partitioning method to achieve optimal average-case time performance.

**1091. Shortest Path in Binary Matrix (Med):** Apply BFS from the start point, checking all eight possible directions. Use a queue to manage cells and ensure shortest path tracking.

**339. Nested List Weight Sum (Med):** Use DFS to compute the weighted sum of values. Traverse lists, multiplying each value by its depth and summing up the results recursively.

**236. Lowest Common Ancestor of a Binary Tree (Med):** Use recursion to navigate tree nodes, returning when either target or null is found. Use return path to determine the LCA node.

**680. Valid Palindrome II (Easy):** Use two pointers to traverse towards the center, allowing one character removal on mismatch. Check resultant substring for palindrome properties.

**1650. Lowest Common Ancestor of a Binary Tree III (Med):** Trace ancestors of both nodes using parent pointers, recording visited nodes. The first common node traced from both paths is the LCA.

**138. Copy List with Random Pointer (Med):** Use a hashmap to map original nodes to their copies. First, clone nodes and then assign random pointers while traversing the list again.

**560. Subarray Sum Equals K (Med):** Use a hashmap to track cumulative sums and their frequency. For each element, check if current sum minus k exists in the hashmap to identify valid subarrays.

**1570. Dot Product of Two Sparse Vectors (Med):** Store non-zero elements with their indices. Compute dot product by iterating only over common indices, reducing unnecessary calculations.

**50. Pow(x, n) (Med):** Implement fast exponentiation through recursive squaring. Optimize computation for both positive and negative powers, ensuring logarithmic time complexity.

**71. Simplify Path (Med):** Use a stack to simplify Unix path strings by processing directory names, "." and "..". Construct the canonical path by concatenating stack contents.

**528. Random Pick with Weight (Med):** Compute prefix sums and use binary search to find the index corresponding to a random weighted pick, balancing probabilities among indices.

**88. Merge Sorted Array (Easy):** Apply three-pointer technique from the end of both arrays and the destination. Efficiently place larger elements into the resultant merged array.

**791. Custom Sort String (Med):** Use a custom order dictated by a hashmap to sort the given string. Append characters not present in the custom order list at the end.

**23. Merge k Sorted Lists (Hard):** Employ a min-heap or priority queue to merge lists efficiently by always extracting the smallest node and inserting the next node from its list.

**125. Valid Palindrome (Easy):** Utilize two pointers to filter and compare alphanumeric characters, converting everything to a common case to ensure uniform comparison.

**543. Diameter of Binary Tree (Easy):** Use DFS to calculate subtree heights and update the maximum diameter found during exploration based on left and right child path sums.

**670. Maximum Swap (Med):** Identify the first decreasing pair of digits and swap the smaller digit with the largest possible digit after it to maximize the number.

**146. LRU Cache (Med):** Implement using a doubly linked list and hashmap to store cache entries, maintaining access order and enabling constant time eviction and retrieval.

**199. Binary Tree Right Side View (Med):** Use BFS or DFS to examine each tree level. Record the last node in each level, reflecting the rightmost node view from each perspective.

**426. Convert Binary Search Tree to Sorted Doubly Linked List (Med):** Perform an in-order traversal, linking nodes in order to form a circular doubly linked list respecting BST properties.

**921. Minimum Add to Make Parentheses Valid (Med):** Track unmatched parentheses using two counters for open and close balances. Adjust these balances to calculate the minimal additions needed.

**973. K Closest Points to Origin (Med):** Use a max-heap to maintain the k smallest distances or apply quickselect to partition around the kth distance, enhancing efficiency.

**1. Two Sum (Easy):** Use a hashmap to track complementary numbers. During each iteration, check hashmap for the required complement and return indices if found.

**56. Merge Intervals (Med):** Sort list by intervals' start values. Sequentially merge overlapping intervals into new combined intervals to simplify and condense the list.

**129. Sum Root to Leaf Numbers (Med):** Use DFS to collect root-to-leaf path sums. Accumulate values recursively, multiplying current values by 10 as you traverse deeper.

**162. Find Peak Element (Med):** Use binary search to identify a peak by examining neighboring elements, directing the search to the higher neighboring side for maxima.

**270. Closest Binary Search Tree Value (Easy):** Traverse the tree using its ordered properties to adjust the closest tracked value based on absolute value differences.

**398. Random Pick Index (Med):** Apply reservoir sampling for random index selection, ensuring equal probability for each index when values repeat in the list.

**636. Exclusive Time of Functions (Med):** Use a stack to handle start and end logs, computing exclusive function execution times based on correct level processing.

**987. Vertical Order Traversal of a Binary Tree (Hard):** Execute DFS to record nodes by column and depth. Compile and order results by depth and value per vertical strip.

**121. Best Time to Buy and Sell Stock (Easy):** Track the lowest price seen and compute the maximum profit at each subsequent price, updating the best profit incrementally.

**346. Moving Average from Data Stream (Easy):** Employ a fixed-size queue to maintain the moving average, updating as new numbers are added and old numbers removed.

**347. Top K Frequent Elements (Med):** Utilize a hashmap for frequency counts, and a min-heap to extract the k most frequent elements efficiently.

**766. Toeplitz Matrix (Easy):** Traverse the matrix diagonally from each element of the first row and column, ensuring uniformity of elements across each diagonal strip.

**1762. Buildings With an Ocean View (Med):** Traverse the array from right to left, tracking the tallest building so far. Buildings taller than this become eligible for an ocean view.

**15. 3Sum (Med):** Sort the input array and apply a combination of two pointers with an outer loop to locate unique triplets, incrementing and decrementing pointers to avoid duplicates.

**65. Valid Number (Hard):** Implement state machine or regex solutions to parse numeric validity. Handle edge cases surrounding decimals, exponents, and signs strictly.

**133. Clone Graph (Med):** Use BFS or DFS with a hashmap mapping originals to clones, ensuring nodes and edges from the original graph are mirrored accurately.

**348. Design Tic-Tac-Toe (Med):** Keep counters for rows, columns, and diagonals per player. On each move, update counters and check for victory conditions in constant time.

**378. Kth Smallest Element in a Sorted Matrix (Med):** Use a min-heap to extract elements efficiently or apply binary search on the values, counting placement fittings at each midpoint.

**480. Sliding Window Median (Hard):** Balance two heaps (min and max) to track the median across a sliding window, adjusting balances as elements enter and leave the window efficiently.

**721. Accounts Merge (Med):** Use union-find data structure or DFS to find connected email components across accounts, merging them based on common ownership for optimal grouping.

**938. Range Sum of BST (Easy):** Use DFS or BFS to sum node values that lie within the specified range, pruning branches using the ordered properties of the BST for efficiency.

**1539. Kth Missing Positive Number (Easy):** Track missing positive numbers as you iterate, adjusting for differences between expected and actual numbers, until finding the kth missing.

**1868. Product of Two Run-Length Encoded Arrays (Med):** Use two pointers to iterate over both encoded arrays, adjusting counts to compute products once lengths synchronize.

**14. Longest Common Prefix (Easy):** Sort strings and compare the first and last strings character by character, determining the longest matching prefix.

**19. Remove Nth Node From End of List (Med):** Use a two-pointer technique with a delay to locate the nth node from the end, connecting the previous node to the next of the target.

**76. Minimum Window Substring (Hard):** Implement a sliding window and hashmaps to handle character inclusion and exclusion for maintaining and minimizing required window length.

**124. Binary Tree Maximum Path Sum (Hard):** Use DFS to calculate potential maximum paths at each node, updating the global max path sum while recursing over child subtrees.

**200. Number of Islands (Med):** Use DFS or BFS iterative traversal, marking visited components to count distinct enclosed land areas (islands) in a binary grid matrix.

**235. Lowest Common Ancestor of a Binary Search Tree (Med):** Utilize BST properties to traverse from root, narrowing down nodes based on value comparison to find the correct ancestor.

**249. Group Shifted Strings (Med):** Compute transformation patterns for each string and use these as keys to group strings that undergo similar character shifts.

**253. Meeting Rooms II (Med):** Use a min-heap to track end times of ongoing meetings, allocating rooms by pushing new meetings start times in sorted order and releasing as they conclude.

**381. Insert Delete GetRandom O(1) - Duplicates allowed (Hard):** Use a combination of list and map data structures to achieve O(1) complexity for insert, delete, and getRandom operations with duplicates.

**498. Diagonal Traverse (Med):** Traverse matrix diagonally by calculating diagonal indices (sum of coordinates). Adjust traversal direction alternately to correctly configure resulting ordering.

**523. Continuous Subarray Sum (Med):** Maintain a prefix sum and its modulo with k in a hashmap to detect valid subarrays, spotting repeated modulo values that signify valid cycles.

**545. Boundary of Binary Tree (Med):** Traverse for left boundary, right boundary, and leaves separately using DFS, collecting nodes in order to form the full boundary path collection.

**616. Add Bold Tag in String (Med):** Track bold intervals in a boolean array while sorting and merging overlapping regions, appending corresponding tags within indicated indices.

**773. Sliding Puzzle (Hard):** Apply BFS to model the sliding puzzle steps, using position states and adjacency to determine valid moves and shortest resolution path.

**489. Robot Room Cleaner (Hard):** Use DFS/backtracking and a recursive approach to explore and clean the space within bounds, handling direction changes and previously visited tiles.

**863. All Nodes Distance K in Binary Tree (Med):** Use BFS to explore nodes, starting from the target node, ensuring each distance level is correct through tracking visited nodes.

**934. Shortest Bridge (Med):** Perform DFS to identify and mark all components of the first island, then use BFS to expand outwards to discover and bridge the second island.

**983. Minimum Cost For Tickets (Med):** Use dynamic programming to minimize travel costs, evaluating the cost effectiveness of different ticket types (daily, weekly, monthly).

**986. Interval List Intersections (Med):** Use dual pointers to traverse both interval lists, identifying and recording overlaps by reviewing current end and start values.

**1004. Max Consecutive Ones III (Med):** Manage a window with two pointers, expanding when encountering zeros but adjusting for allowed flips, maximizing consecutive ones outcome.

**1011. Capacity To Ship Packages Within D Days (Med):** Binary search for the minimum capacity, iteratively verifying potential solutions using a simulated weighted load process.

**1644. Lowest Common Ancestor of a Binary Tree II (Med):** Validate node existence before determination by traversing and counting hits, ensuring correct contextual ancestor analysis.

**1757. Recyclable and Low Fat Products (Easy):** Filter and qualify data entries based on product attributes, enforcing conditions for inclusion by iterating over the dataset.

**2877. Create a DataFrame from List (Easy):** Convert input lists to structured tabular data using a library like pandas to encapsulate and manipulate data through DataFrame objects effectively.