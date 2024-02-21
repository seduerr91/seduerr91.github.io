---
title: Software Philosophy
tags: [Mental Castle]
style: fill
color: secondary
description: Mental castle on Software Engineering Philosophy inpired by the book by Ousterhout
---

This mental castle is a walk through Onni, SLU, from the Pickleball Gym to the Fairview Postboxes.

# Design Principles

- `Pickleball Gym` Complexity is incremental: you have to sweat the small stuff.
- `You need players` Working code isn’t enough.
- `Shitty net` Make continual small investments to improve system design.
- `Serve deep` Modules should be deep.
- `Couch area` Interfaces should be designed to make the most common usage as simple as possible.
- `Music/Toilet/Main Door` Different layers should have different abstractions.
- `Hallway -1 Outside Gym` Pull complexity downward.
- `Non-closing door under Stairs` Define errors (and special cases) out of existence.
- `Stairs` Design it twice.
- `Token` Comments should describe things that are not obvious from the code.

# Red Flags

- `Onni Hallway` Shallow Module: the interface for a class or method isn’t much simpler than its implementation.
- `Renters Office` Information Leakage: a design decision is reflected in multiple modules.
- `Seattle Times` Temporal Decomposition: the code structure is based on the order in which operations are executed, not on information hiding.
- `Hotel Lobby` Overexposure: An API forces callers to be aware of rarely used features in order to use commonly used features.
- `Cycle Room` Repetition: a nontrivial piece of code is repeated over and over.
- `Gym Room` Pass-Through Method: a method does almost nothing except pass its arguments to another method with a similar signature.
- `Swimming Pool` Special-General Mixture: special-purpose code is not cleanly separated from general purpose code.
- `Conference Rooms` Conjoined Methods: two methods have so many dependencies that its hard to understand the implementation of one without understanding the implementation of the other.
- `Tapping Token Twice to get to Fairview` Comment Repeats Code: all of the information in a comment is immediately obvious from the code next to the comment.
- `Front Desk Lady` Vague Name: the name of a variable or method is so imprecise that it doesn’t convey much useful information.
- `Entrance to Fairview` Hard to Describe: in order to be complete, the documentation for a variable or method must be long.
- `Postbox Name Tag Trick` Nonobvious Code: the behavior or meaning of a piece of code cannot be understood easily.