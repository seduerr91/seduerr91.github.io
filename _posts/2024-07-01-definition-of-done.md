---
title: Definition of Done
tags: [Coding]
style: fill
color: secondary
description: My take on when to call something done.
---

# Definition of Done Manifesto: Ensuring Quality and Maintainability in Software Development

In the fast-paced world of software development, ensuring that our code not only functions as expected but is also of the highest possible quality and maintainability is crucial. To this end, I created a stringent Definition of Done (DoD) Manifesto. This manifesto outlines the criteria a feature must meet before it can be considered "done." Below, we delve into each criterion and explain its importance in achieving our goals. Here is the list in brief:

- [ ] > 90% coverage with unit tests.
- [ ] > 80 % coverage with integration tests.
- [ ] All external dependencies are mocked.
- [ ] Two rounds of refactor (with LLM) with focus on coding principles as presented in A Philosophy of Software Design.
- [ ] ESD is updated after tests have been written.
- [ ] Test data available in repositories.
- [ ] Documentation on how to run code with Makefile etc.
- [ ] 


## 1. Testing Requirements

### Unit and Integration Tests
Ensuring robust test coverage is paramount. Our goal is to achieve over 90% test coverage for each feature. This is not just a number to strive for; it's a means to ensure our code is resilient to changes and less prone to bugs. To maintain isolation, tests should employ mocks for external dependencies, allowing us to execute them without connecting to external systems.

### End-to-End Testing Documentation
Clear and replicable end-to-end testing procedures must be documented. This includes detailed commands used in terminal and authentication steps. This documentation ensures that anyone on the team can reproduce the tests and verify that the system works as intended from start to finish.

### Test Data Provision
Providing test data is crucial. By illustrating what the data should look like, we enable more effective and meaningful tests. Test data serves as a reference point, ensuring consistency across different testing phases and environments.

## 2. Documentation

### Technical Documentation
Comprehensive technical documentation is essential. It should explain how to modify or extend the code, making it easier for new team members to get up to speed and for existing members to collaborate more efficiently.

### Proper Readme.md
A well-crafted `Readme.md` file is invaluable. It should guide consumers through the codebase and provide detailed instructions on getting started, including steps for installation, setting up AWS accounts, and modifying `.env` templates. Links to Engineering Solution Documents (ESDs) and Product Requirement Documents (PRDs) should also be included for further context.

### Rendered Documentation
Leveraging tools like Sphinx to create rendered documentation that platforms like GitLab can display enhances accessibility and comprehension. At a previous company, this approach significantly improved our documentation quality and usability.

## 3. Validation and Verification

### Test Results Documentation
Providing evidence that features work across various environments—local, Docker, development/staging, production, and Snowflake—reassures us that our code is reliable. This can include screenshots or other forms of documentation demonstrating successful tests and environments' validation.

## 4. Code Quality

### Pre-Commit Checks
Our code must pass all pre-commit checks, which cover aspects like code complexity analysis, formatting, and import sorting. Tools like `isort` help automate these checks, ensuring consistent code quality and reducing the likelihood of errors.

### Code Review
Peer reviews are mandatory. This process focuses on challenging assumptions about data load and code complexity. A second pair of eyes can catch potential issues early and enhance the overall quality of the codebase.

## 5. Best Practices

### Environment Management
Proper environment management is key to a smooth development process. Utilizing a virtual environment and a dependency management tool, such as Python Poetry, helps manage project dependencies and environments effectively, reducing conflicts and setup time.

### Ticket Tracking
Using a JIRA ticket number as a prefix (e.g., CP24888_XXX) for every merge request ensures traceability and accountability. If a ticket doesn't exist, one must be created to keep track of changes and their context.

### Improve Code Quality with LLMs
Leveraging AI tools like Large Language Models (LLMs) can significantly improve code readability and maintainability. Tools like GitHub Copilot can suggest better variable names and improvements, enhancing the overall code quality.

By adhering to these criteria, we can confidently declare a feature complete and ready for deployment. Implementing a rigorous Definition of Done not only improves our code's reliability but also fosters a culture of quality and accountability within the team.

In conclusion, my Definition of Done Manifesto is more than just a checklist—it's a holistic approach to software development that ensures we consistently deliver high-quality, maintainable features. By following these guidelines, we can meet our goals and uphold our commitment to excellence.