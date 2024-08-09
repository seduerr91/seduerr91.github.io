---
title: My Takeaways from 'Robust Python'
tags: [Coding]
style: fill
color: secondary
description: Getting your code more robust.
---

![Robust Python](https://unsplash.com/photos/RtMeaovyPTM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cHl0aG9ufGVufDB8fHx8MTcyMzE0MDIzOHww&force=true&w=640)

Writing reliable and maintainable Python code is a continuous journey marked by the constant adoption of improved tools and best practices. "Robust Python" by Patrick Viafore offers a treasure trove of insights and techniques designed to bolster the quality of Python projects. Here's an in-depth look at the key takeaways and indispensable tools discussed in the book, which can help fortify your Python codebase.

## The Law of Least Surprise

At the heart of "Robust Python" is the Law of Least Surprise, which suggests that a program should always respond in a way that minimizes user astonishment. According to Viafore, "Surprising behavior leads to confusion. Confusion leads to misplaced assumptions. Misplaced assumptions lead to bugs. And that is how you get unreliable software." Hence, our goal is to make the code as predictable and clear as possible.

## Annotating Your Code: The Power of Types

Types are more than just annotations—they form the backbone of reliable, self-documenting code.

### Embracing Type Checkers

Type checkers can catch type errors before runtime, enhancing the reliability and predictability of your code.

- **Mypy**: One of the most popular static type checkers, `mypy` checks type annotations in your code and alerts you to potential type errors.
  - **Setting Up**: Install using `pip install mypy` and configure by setting up a `mypy` config file.
  - **Coverage Reporting**: Use `--html-report` to generate an HTML report that visualizes type coverage, revealing which parts of your code are type-checked and which are not.
- **Alternative Tools**:
  - **Pyre**: Developed by Facebook, offering high-performance type checking.
  - **Pyright**: Created by Microsoft, known for fast and accurate type validation.
  - **Pysa**: A static analyzer for security.
  - **Pytype**: A static analyzer by Google that infers types and checks for errors.

### Creating Your Own Types

Utilizing custom types can make your code more expressive and robust.

- **Enumerations**: Enumerations (enums) define a set of named values, making code more readable and reducing errors.
  - **Example Use**: `from enum import Enum`

    ```python
    class Color(Enum):
        RED = 1
        GREEN = 2
        BLUE = 3
    ```

- **Data Classes**: Data classes provide a clear and concise way to define classes primarily used for storing state and data.
  - **Advantages**: Differ from dicts by offering type safety and from namedtuples by providing immutability options and comparability amongst other.
  - **Example**: `from dataclasses import dataclass`

    ```python
    @dataclass(frozen=True, order=True)
    class Point:
        x: int
        y: int
    ```

- **Classes**: For more complex relationships and invariants, standard classes are the way to go.
  - **Invariants**: Properties that remain unchanged throughout the lifecycle of an instance. It's crucial to enforce these in the `__init__` method via assertions.

    ```python
    class Circle:
        def __init__(self, radius: float):
            assert radius > 0, "Radius must be positive"
            self.radius = radius
    ```

### Leveraging Protocols

Protocols provide a way to define a set of methods and properties that a class must implement, bridging the gap between type hinting and runtime type systems.

- **Example**: Define a protocol for "splittable" objects.

    ```python
    from typing import Protocol

    class Splittable(Protocol):
        cost: int
        name: str

        def split_in_half(self) -> tuple:
            ...
    ```

- **Implementation**: Any object adhering to this protocol must have the specified attributes and methods, ensuring consistency and reducing runtime errors.

### Pydantic for Data Validation

Pydantic is an incredibly powerful library for creating data models with validation. It offers a plethora of built-in validators, making it easier to enforce data constraints and consistency.

## Extensibility: Policies and Mechanisms

To achieve extensibility, it’s important to divide your code into policies and mechanisms. Policies dictate what should be done (e.g., logging), while mechanisms define how to do it (e.g., setting log levels). This separation makes it easier to adapt and extend the codebase in the future.

## Linters and Code Formatting

Using linters and code formatters ensures consistency and adherence to coding standards. Setting them up with Precommit hooks ensures that code checks are done before any changes are committed.

- **Pylint**: Checks for syntactic errors and enforces coding standards.
- **Flake8**: Combines PyFlakes, pycodestyle, and Ned Batchelder’s McCabe script for comprehensive linting and complexity measuring.
- **Black**: An uncompromising code formatter ensuring uniform style.
- **McCabe**: Measures the complexity of your codebase, helping to identify overly complex functions and classes.

## Comprehensive Testing

### Writing and Running Tests

- **Unit Testing**: `unittest` and `pytest` are two widely-used frameworks for writing and running tests to ensure your code behaves as expected.
  - **Setup**: Install using `pip install unittest pytest`.

### Advanced Testing Strategies

- **Property-Based Testing**: Utilize `hypothesis` to generate test cases and uncover edge cases.
  - **Installation**: `pip install hypothesis`.

### Special Testing Techniques

- **Boundary Testing**: Employ tools like `behave` to test edge cases.
- **Mutation Testing**: Use `mutmut` to identify weak tests. It modifies (mutates) your code and runs tests to see if they catch the modifications.
  - **Installation**: `pip install mutmut`.

### Test Coverage

- **Coverage**: Measure the extent to which your tests cover your code using the `coverage` tool and create an HTML report to visualize it.
  - **Installation**: `pip install coverage`.

## Static Analysis

Static analysis tools can preemptively find security and dependency issues.

- **Bandit**: A security-oriented static analysis tool that identifies common security issues.
- **PyDeps**: Helps visualize your project's dependencies, providing an overview of your project's structure.

## Dependency Management with Poetry

Effective dependency management ensures reproducible builds and simplifies virtual environment handling. Poetry is a modern tool that excels in these domains.
- **Setup**: `pip install poetry`
- **Usage**: Ideal for managing dependencies and virtual environments, ensuring that your project remains both reproducible and isolated.

## Summary: Implementation Checklist

To quickly integrate these practices into your projects, consider the following checklist:

1. **Setup Type Checkers**
   - Install and configure `mypy`.
   - Experiment with Pyre, Pyright, Pysa, or Pytype as needed.

2. **Define Custom Types**
   - Use enumerations and data classes where appropriate.
   - Implement classes with invariants and consider protocols for structural typing.
   - Leverage Pydantic for data validation.

3. **Implement Linters and Formatters**
   - Set up Pylint, Flake8, Black, and McCabe with Precommit.

4. **Ensure Comprehensive Testing**
   - Write tests using `unittest` or `pytest`.
   - Incorporate `hypothesis` for property-based testing.
   - Utilize boundary testing tools like `behave`.
   - Employ mutation testing with `mutmut`.
   - Measure and visualize test coverage using `coverage`.

5. **Conduct Static Analysis**
   - Use Bandit for security checks.
   - Visualize dependencies with PyDeps.

6. **Manage Dependencies**
   - Use Poetry for effective dependency management.

## Conclusion

By adhering to the Law of Least Surprise and employing these tools and techniques, you can significantly enhance the robustness of your Python code. "Robust Python" provides a wealth of knowledge to make your software development journey more predictable, reliable, and maintainable. Incorporate these practices into your workflow to transition from merely functional code to robust, enduring software.

Harness the power of these strategies and tools to build resilient Python projects that stand the test of time.