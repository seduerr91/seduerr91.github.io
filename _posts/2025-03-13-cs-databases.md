---
title: Databases
tags: [Coding]
style: fill
color: secondary
description: A primer on databases inspired by CS Imposter Handbook
---

# Databases: Normalization, Real-World Tradeoffs, and Why Rules Get Broken

Databases are the backbone of most applications, but designing them well is both an art and a science. The Imposter Handbook offers a practical, story-driven introduction to the core ideas of database normalization and the real-world reasons why these rules are sometimes bent or broken.

## What is Database Normalization?

Normalization is the process of structuring a relational database to reduce redundancy and improve data integrity. The goal is to turn a big, messy spreadsheet into a set of related tables, each with a clear purpose.

### First Normal Form (1NF): Atomic Values
- **Rule:** Each value in a table should be atomic (not a list or set).
- **Example:** Instead of storing a comma-separated list of items in one cell, create a new row for each item.

### Second Normal Form (2NF): Columns Depend on a Single Primary Key
- **Rule:** Every non-key column must depend on the whole primary key, not just part of it.
- **Example:** Split your data into separate tables so that each table describes one thing (e.g., customers, orders).

### Third Normal Form (3NF): Non-keys Describe the Key and Nothing Else
- **Rule:** Every non-key column must describe the primary key, and nothing else.
- **Example:** Move product prices out of the orders table and into a products table.

After applying these rules, you might end up with several tables:
- `customers` (customer data)
- `orders` (order metadata)
- `order_items` (items in each order)
- `products` (product details)

## Real-World Tradeoffs: When to Break the Rules

Normalization is great in theory, but in practice, highly normalized databases can be slow and hard to work with. Every extra table means more joins, which can make queries complex and slow.

**Denormalization** is the process of intentionally breaking normalization rules for performance or simplicity. For example, you might store a `total` field in the orders table, even though it can be calculated from the order items, just to make queries faster.

Many large systems (like StackOverflow) denormalize their databases to avoid slow queries and complex joins. You'll often see fields like `view_count` or `owner_display_name` stored directly in a table, even though they could be calculated or referenced elsewhere.

## Key Takeaways

- **Normalization** helps keep your data clean and consistent.
- **Denormalization** is sometimes necessary for performance and simplicity.
- The best database design balances theory with the practical needs of your application.

Next time you design a database, remember: start with normalization, but don't be afraid to break the rules when real-world needs demand it! 