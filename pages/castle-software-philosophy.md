---
title: Software Philosophy
tags: [Mental Castle]
style: fill
color: danger
description: Mental castle on Software Engineering Philosophy inpired by the book by Ousterhout
---

- `Mercer Island`: **The Nature of Complexity**
  - Complexity increases costs by complicating modifications and error handling. Manifestations:
    - `Water Bridge` Change amplification: Simple changes requiring widespread modifications.
    - `Seward Park` Cognitive load: Needing extensive knowledge to complete tasks.
    - `Exit 2C` Unknown unknowns: Lack of clarity in solutions or outcomes.

- **Causes of Complexity**
  - `Lumen Field`: Dependencies between components and 
  - `T-Mobile Park`: Obscurity of important information.

- `Parking Lot`: **Tactical vs. Strategic Programming**
  - `Showbox Sodo`: Tactical programming is fast programming without iterations. Bad idea.
  - `Enter 99 Tunnel`: Strategic programming advocates for investment in design, beyond just developing working code.

- `99 Tunnel`: **Code for the Reader, Not the Writer**
  - Code should be obvious to those reading it, not just to the writer.

- `99 Tunnel End`: **Deep Modules vs. Shallow Modules**
  - Deep modules with powerful functionality and simple interfaces are preferred over shallow modules with complex interfaces and less functionality.
  - `Dexter Ave`: Unix file I/O is cited as an example of a deep module.
  - `Apple`: A misconception is to focus on small components in order rather than creating deep components, leading to more complexity.

- `Harrison Street`: **General-purpose Modules**
  - A somewhat general-purpose approach is ideal, providing simpler interfaces.
  - Reducing the number of methods without losing capability leads to general-purpose methods.

- `Museum of Pop Culture`: **Avoid Pass-through Variables**: They add complexity by forcing awareness in intermediate methods.
  - Context objects are used to store global state and reduce method signature complexity, despite having disadvantages.

- `Space Needle`: **Pass-through Methods**
  - Such methods increase interface complexity without adding functionality.
  - New methods should only be added if they contribute significant functionality.

- `DIDO Concert Venue`: **Pull Complexity Downwards**
  - A simple module interface is more critical than a simple implementation.
  - Complexities should be brought into the module’s implementation to simplify interfaces.

- `Climate Pledge Arena`: **Define Errors Out of Existence**
  - Exception handling is a significant complexity source.
  - Automatically handle certain cases to minimize error handling.

- `McCaw Hall Nutcracker`: **Thoughtful Approach to Code Comments**
  - Comments should capture information not obvious from the code and should be written with system design in mind for higher quality.
  - Different types of comments should be written clearly and maintain consistency with code updates.

- `Monorail`: **Naming and Whitespace in Code**
  - Good naming is crucial for clarity and reduces complexity.
  - Whitespace helps segment code logically for better readability.

- `Westlake Station`: **Test-Driven Development (TDD) Limitations**
  - TDD might focus too much on specific features rather than on sound design and abstractions.

- `The Nest Rooftop`: **Importance of Consistency**
  - Consistency across naming, style, interfaces, and design patterns reduces learning time and error rates.
  - Conventions should be documented and enforced, sometimes automatically.

- `Pike Place Starbucks`: **Issues with Implementation Inheritance**
  - Implementation inheritance complicates dependencies and information leakage between classes.
  - Composition may be an alternative with less complexity.

- `Wet Market`: **Challenges with Event-driven Programming**
  - The indirect nature of event-driven programming can obscure control flow, increasing complexity.

- `Gum wall`: **Adopting a 'Design It Twice' Approach**
  - Considering multiple design options for each decision is likely to yield better solutions.