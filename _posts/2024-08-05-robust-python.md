---
title: My Takeaways from 'Robust Python'
tags: [Coding, Python, Best Practices]
style: fill
color: secondary
description: Elevating your Python code to new levels of robustness and reliability.
---

![Robust Python](https://unsplash.com/photos/RtMeaovyPTM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cHl0aG9ufGVufDB8fHx8MTcyMzE0MDIzOHww&force=true&w=640)

In the ever-evolving landscape of software development, writing reliable and maintainable Python code is a continuous journey marked by the constant adoption of improved tools and best practices. "Robust Python" by Patrick Viafore offers a treasure trove of insights and techniques designed to bolster the quality of Python projects. This article delves into the key takeaways and indispensable tools discussed in the book, providing a roadmap to fortify a Python codebase.

## The Law of Least Surprise: A Cornerstone of Robust Code

At the heart of "Robust Python" is the Law of Least Surprise, a principle that suggests a program should always respond in a way that minimizes user astonishment. Viafore emphasizes this concept, stating, "Surprising behavior leads to confusion. Confusion leads to misplaced assumptions. Misplaced assumptions lead to bugs. And that is how you get unreliable software."

This principle serves as a guiding light for developers, encouraging them to create code that behaves predictably and intuitively. By adhering to this law, developers can:

1. Reduce cognitive load for other developers (including future you) who may work with the code.
2. Minimize the likelihood of bugs caused by misunderstandings or incorrect assumptions.
3. Improve the overall user experience, whether the users are other developers or end-users of the software.

To implement the Law of Least Surprise effectively:

- Use clear and descriptive naming conventions for variables, functions, and classes.
- Follow established Python idioms and patterns.
- Document any behavior that might be considered non-standard or surprising.
- Design APIs and interfaces that behave consistently across different use cases.
- Consult LLMs for naming improvements and suggestions.

## Annotating Your Code: The Power of Types

Types in Python are more than just annotations—they form the backbone of reliable, self-documenting code. By leveraging Python's type system, developers can catch errors early, improve code readability, and enhance IDE support.

### Embracing Type Checkers: Your First Line of Defense

Type checkers are powerful tools that can catch type errors before runtime, significantly enhancing the reliability and predictability of your code. Let's explore some popular options:

- **Mypy**: As one of the most widely-used static type checkers, `mypy` deserves special attention. It checks type annotations in your code and alerts you to potential type errors.
  - **Setting Up**: Install using `pip install mypy` and configure by setting up a `mypy.ini` or `setup.cfg` file in your project root.
  - **Coverage Reporting**: Use the `--html-report` option to generate a detailed HTML report that visualizes type coverage. This report helps identify which parts of your code are type-checked and which areas might need more attention.

  Example usage:
  ```bash
  mypy --html-report ./mypy_report ./my_project
  ```

- **Alternative Tools**:
  - **Pyre**: Developed by Facebook, Pyre offers high-performance type checking and is particularly well-suited for large codebases.
  - **Pyright**: Created by Microsoft, Pyright is known for its fast and accurate type validation, making it an excellent choice for projects where speed is crucial.
  - **Pysa**: A static analyzer focused on security, Pysa can help identify potential vulnerabilities in your code.
  - **Pytype**: Google's static analyzer not only checks types but also infers them, which can be particularly useful when working with legacy codebases.

### Creating Your Own Types: Enhancing Code Expressiveness

Utilizing custom types can make your code more expressive, self-documenting, and robust. Python offers several ways to create custom types:

- **Enumerations**: Enumerations (enums) define a set of named values, making code more readable and reducing errors associated with using arbitrary values.
  - **Example Use**: 
    ```python
    from enum import Enum, auto

    class Color(Enum):
        RED = auto()
        GREEN = auto()
        BLUE = auto()

    def paint(color: Color):
        if color == Color.RED:
            print("Painting in red")
        # ... and so on
    ```
  - **Benefits**: Enums provide type safety, self-documentation, and can be used in switch statements (Python 3.10+) for cleaner code.

- **Data Classes**: Introduced in Python 3.7, data classes provide a clear and concise way to define classes primarily used for storing state and data.
  - **Advantages**: Data classes differ from dictionaries by offering type safety and from namedtuples by providing mutability options and easy comparability.
  - **Example**: 
    ```python
    from dataclasses import dataclass

    @dataclass(frozen=True, order=True)
    class Point:
        x: int
        y: int

    p1 = Point(1, 2)
    p2 = Point(1, 2)
    print(p1 == p2)  # True
    ```
  - **Use Cases**: Ideal for representing simple data structures, configuration objects, or as return types for functions that need to return multiple values.

- **Classes**: For more complex relationships and invariants, standard classes remain the go-to solution.
  - **Invariants**: Properties that must remain unchanged throughout the lifecycle of an instance. It's crucial to enforce these in the `__init__` method via assertions.
    ```python
    class Circle:
        def __init__(self, radius: float):
            assert radius > 0, "Radius must be positive"
            self._radius = radius

        @property
        def radius(self) -> float:
            return self._radius

        @radius.setter
        def radius(self, value: float):
            assert value > 0, "Radius must be positive"
            self._radius = value
    ```
  - **Benefits**: Custom classes allow for fine-grained control over object behavior, encapsulation, and the implementation of complex business logic.

### Leveraging Protocols: Duck Typing with Safety

Protocols, introduced in Python 3.8, provide a way to define a set of methods and properties that a class must implement. They bridge the gap between static type hinting and Python's dynamic duck typing system.

- **Example**: Define a protocol for "splittable" objects.
    ```python
    from typing import Protocol, runtime_checkable

    @runtime_checkable
    class Splittable(Protocol):
        cost: int
        name: str

        def split_in_half(self) -> tuple[float, float]:
            ...

    class Pizza:
        def __init__(self, cost: int, name: str):
            self.cost = cost
            self.name = name

        def split_in_half(self) -> tuple[float, float]:
            return (self.cost / 2, self.cost / 2)

    def process_splittable(item: Splittable):
        print(f"Processing {item.name}")
        left, right = item.split_in_half()
        print(f"Split into {left} and {right}")

    pizza = Pizza(10, "Margherita")
    process_splittable(pizza)  # This works!
    ```

- **Benefits**: 
  - Protocols enable structural subtyping, allowing for more flexible and reusable code.
  - They provide static type checking benefits without requiring explicit inheritance.
  - The `@runtime_checkable` decorator allows for runtime type checking using `isinstance()`.

### Pydantic for Data Validation: Ensuring Data Integrity

Pydantic is a powerful library for creating data models with built-in validation. It seamlessly integrates with Python's type hinting system to provide runtime data validation.

- **Key Features**:
  - Automatic validation of input data
  - Customizable error messages
  - Serialization and deserialization to various formats (JSON, YAML, etc.)
  - Integration with popular web frameworks like FastAPI

- **Example**:
  ```python
  from pydantic import BaseModel, Field, ValidationError
  from typing import List

  class User(BaseModel):
      id: int
      name: str = Field(..., min_length=1, max_length=50)
      email: str
      scores: List[int] = Field(default_factory=list, ge=0, le=100)

  try:
      user = User(id=1, name="John Doe", email="john@example.com", scores=[95, 87, 102])
  except ValidationError as e:
      print(e.json())
  ```

- **Benefits**:
  - Reduces boilerplate code for data validation
  - Improves code reliability by catching data inconsistencies early
  - Provides clear and informative error messages for invalid data

By leveraging these type-related features and tools, you can significantly enhance the robustness and reliability of your Python code. These practices not only catch errors early but also serve as living documentation, making your code more maintainable and easier to understand for other developers (including your future self).

| Tool/Library | Installation Command | Basic Setup/Usage |
|--------------|----------------------|-------------------|
| mypy | `pip install mypy` | Create `mypy.ini` or add to `setup.cfg`. Run with `mypy your_project/` |
| Pyre | `pip install pyre-check` | Initialize with `pyre init`, then run with `pyre check` |
| Pyright | `npm install -g pyright` | Create `pyrightconfig.json`. Run with `pyright` |
| Pysa | Part of Pyre | Run with `pyre analyze` |
| Pytype | `pip install pytype` | Run with `pytype your_project/` |
| Pylint | `pip install pylint` | Create `.pylintrc`. Run with `pylint your_project/` |
| Flake8 | `pip install flake8` | Create `.flake8`. Run with `flake8 your_project/` |
| Black | `pip install black` | Run with `black your_project/` |
| McCabe | `pip install mccabe` | Usually used as part of Flake8 |
| pytest | `pip install pytest` | Create test files prefixed with `test_`. Run with `pytest` |
| hypothesis | `pip install hypothesis` | Import in test files and use `@given` decorator |
| behave | `pip install behave` | Create `.feature` files and step definitions |
| mutmut | `pip install mutmut` | Run with `mutmut run` |
| coverage | `pip install coverage` | Run with `coverage run -m pytest` then `coverage html` |
| Bandit | `pip install bandit` | Run with `bandit -r your_project/` |
| PyDeps | `pip install pydeps` | Run with `pydeps your_module.py` |
| Poetry | `pip install poetry` | Initialize with `poetry init`, manage deps with `poetry add` |
| Pydantic | `pip install pydantic` | Import and use in your code |
| pre-commit | `pip install pre-commit` | Create `.pre-commit-config.yaml`, then run `pre-commit install` |

This table provides a quick reference for setting up and using the various tools and libraries discussed in the article. Remember to consult the official documentation for each tool for more detailed configuration options and advanced usage.