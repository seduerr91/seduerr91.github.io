---
title: My Takeaways from Robust Python
tags: [Coding]
style: fill
color: secondary
description: Getting your code more robust.
---

WIP

"Robust Python" by Patrick Viafore covers various tools and techniques to write more reliable and maintainable Python code. Here's a summary of some of the key tools mentioned in the book:

Main idea: You want to adhere to the Law of Least Surprise which "states that a program shoudl always respond to the user int he way that astonishes them the least. Surprising behavior leads to confusion. Confusion leads to misplaced assumptions. Misplaced assumptions lead to bugs. And that is how your get unreliable software", Patrick Viafore. 

## Annotating your code

Type Checkers: Install a type checker and make sure you set it up correctly. Using a type over another communicates something.
- **Mypy:** A static type-checking tool that checks type annotations in your Python code, helping to catch type errors before runtime.
- Set a mypy config file
- print out the mypy converage --html-report
- Alternatives: pyre (Facebook), Pyright (Microsoft), Pysa
- Pytype as a static analyzer written by Google

Building own types: 
- Enumerations: restricted set of values. Usage: automatic values, integer conversion, unique
- Data classes: relationship between concepts.
  - Usage over dict: only use dict if datatypes are homogenous (all are int).
  - Usage over namedTuple: explicit type annotations, control of immutabilty (frozen=True), comparability (eq=True, order=True)
- Classes: relationships + invariant that needs to be preserved.
  - Invariants: property that remains unchanged throughtout the lifetime of the entity.
  - Put these invariants into the constructur __init__ of a class with assertions.
  - Invariants are often business rules - do A before B
  - Use inheritance: Inheriting everything from superclass in a is-a relationship; not only for code-reusability.
  - Use composition: If you have a has-a relationship; when you put member variables inside a type.
- Protocols:
  - Using mixins (Splittable, Shareable, PickUpAble) allow to change functionality but they are not perfect either.
  - Protocols close gap between type hinting and the runtime type system.
  - from typing import Protocol; class Splittable(Protocol): cost: int; name:str; def split_in_half(self) -> tuple['Splittable', 'Splittable']
  - Now you can use that on a dish (splitting it) but therefore it needs to have cost and name, and then you implment split_in_half(self) there 
  - The protocol is that it needs to have the types COST and NAME and the typechecker will detect that a dish is splittable just by virtue of the fields and method it has defined.
  - While using inheritance makes a lot of sense for nominal subtyping (passing functionality around) it is to heavy for structural subtyping (splitable or not) where you want to uphold a contract (have cost and name as int and str)
- Pydantic: 
  - has a ton of built in validators to use

## Extensibility

1. **Linters:**
   - **Pylint, Flake8, Black:** These are code linters and formatters to ensure code consistency and adherence to style guidelines, improving code readability and reducing bugs.

2. **Testing:**
   - **Unittest, Pytest:** Frameworks for writing and running tests to ensure your code behaves as expected.
   - **Hypothesis:** A property-based testing tool that generates test cases based on specifications, uncovering edge cases you might not think to test.

3. **Code Coverage:**
   - **Coverage.py:** A tool to measure how much of your code is tested, helping identify untested parts of your codebase.

4. **Static Analysis:**
   - **Bandit:** A tool designed to find common security issues in Python code.

5. **Dependency Management:**
   - **Pip-tools, Poetry:** Tools for managing dependencies more effectively, allowing for virtual environments and precise control over package versions.

6. **Build Tools:**
   - **Tox:** A tool to automate testing in multiple environments, ensuring compatibility across different Python versions and dependencies.

These tools are integral in creating robust Python applications by enhancing code quality, maintainability, and reliability.