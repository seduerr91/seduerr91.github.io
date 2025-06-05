---
title: FastAgency
tags: [Coding, Agents]
style: fill
color: secondary
description: From Prototype to Production
---


# FastAgency: Accelerating Multi-Agent AI Workflows from Prototype to Production

In the rapidly evolving landscape of AI, orchestrating complex, multi-agent workflows and deploying them to production can be a daunting challenge. **FastAgency** is an open-source framework designed to bridge the gap between rapid prototyping and robust, production-ready deployment for agentic AI systems. Built with flexibility and developer experience in mind, FastAgency provides a unified programming interface, seamless API integration, and powerful deployment tools—all with minimal code changes.

## What Makes FastAgency Unique?

Unlike traditional agentic frameworks, FastAgency is not just another tool for building agents. Instead, it acts as a **deployment accelerator** for workflows written in frameworks like [AG2 (formerly AutoGen)](https://github.com/ag2ai/ag2), allowing you to scale from Jupyter notebook prototypes to distributed, production-grade applications with ease.

### Key Features at a Glance

- **Unified Programming Interface**: Write your workflow logic once and deploy it across both console and web UIs.
- **Seamless API Integration**: Effortlessly connect external APIs to your agents using OpenAPI specifications.
- **CLI for Orchestration**: Manage, run, and debug workflows directly from the terminal.
- **(Planned) Testing Framework**: Automated workflow testing and CI integration for robust deployments.
- **Flexible Deployment**: From local devcontainers to Docker and cloud platforms like Fly.io.

---

## Quick Start: From Zero to Running Workflow

### Project Setup with Cookiecutter

FastAgency recommends using [Cookiecutter](https://github.com/ag2ai/cookiecutter-fastagency) for project scaffolding. This tool sets up the folder structure, installs dependencies, and even creates a devcontainer for VS Code.

```bash
pip install cookiecutter
cookiecutter https://github.com/ag2ai/cookiecutter-fastagency.git
```

You'll be prompted to select your app type, Python version, and authentication method. Once generated, set your LLM API key (e.g., for OpenAI):

```bash
export OPENAI_API_KEY=your_openai_api_key
```

Open the project in VS Code and run the provided tests:

```bash
pytest -s
```

If everything is set up correctly, you should see all tests passing.

---

### Defining a Multi-Agent Workflow

At the heart of FastAgency is the workflow definition. Here's a minimal example of a student-teacher chat workflow:

```python
import os
from autogen import ConversableAgent, LLMConfig
from fastagency import UI
from fastagency.runtimes.ag2 import Workflow

llm_config = LLMConfig(
    model="gpt-4o-mini",
    api_key=os.getenv("OPENAI_API_KEY"),
    temperature=0.8,
)

wf = Workflow()

@wf.register(name="simple_learning", description="Student and teacher learning chat")
def simple_workflow(ui: UI, params: dict[str, Any]) -> str:
    initial_message = ui.text_input(
        sender="Workflow",
        recipient="User",
        prompt="I can help you learn about mathematics. What subject you would like to explore?",
    )
    with llm_config:
        student_agent = ConversableAgent(
            name="Student_Agent",
            system_message="You are a student willing to learn.",
        )
        teacher_agent = ConversableAgent(
            name="Teacher_Agent",
            system_message="You are a math teacher.",
        )
    response = student_agent.run(
        teacher_agent,
        message=initial_message,
        summary_method="reflection_with_llm",
        max_turns=3,
    )
    return ui.process(response)
```

This code sets up two agents and orchestrates a short learning conversation, demonstrating how easy it is to define agent interactions.

---

## User Interfaces: Console and Web

FastAgency supports multiple UIs for interacting with your workflows:

- **ConsoleUI**: A command-line interface for rapid prototyping and testing.
- **MesopUI**: A web-based interface for interactive, user-friendly experiences.

You can run your MesopUI app locally with:

```bash
gunicorn my_fastagency_app.local.main_mesop:app
```

Then, open [http://localhost:8000](http://localhost:8000) in your browser to interact with your agents.

---

## Orchestrating Workflows with the CLI

The FastAgency CLI streamlines development and deployment:

- **Development Mode** (with live reload):

    ```bash
    fastagency dev path/to/app.py
    ```

- **Run a Specific Workflow**:

    ```bash
    fastagency run path/to/app.py --workflow simple_workflow
    ```

- **Set an Initial Message**:

    ```bash
    fastagency run path/to/app.py --initial_message "Hello, let's start!"
    ```

This flexibility allows you to test, debug, and deploy workflows efficiently.

---

## Seamless API Integration

FastAgency makes it trivial to connect external APIs to your agents. By importing OpenAPI specifications, you can auto-generate functions that agents can call, complete with proper security (API keys, OAuth, etc.).

**Dependency Injection** ensures sensitive data (like tokens) is never exposed to the LLM, maintaining security and privacy.

---

## Deployment: From Local to Cloud

- **Build Docker Image**:

    ```bash
    ./scripts/build_docker.sh
    ```

- **Run Docker Container**:

    ```bash
    ./scripts/run_docker.sh
    ```

- **Deploy to Fly.io**:

    ```bash
    ./scripts/deploy_to_fly_io.sh
    ```

This makes it easy to go from local development to scalable, cloud-based deployments.

---

## (Planned) Testing and CI Integration

A comprehensive testing framework is in the works, promising:

- Automated workflow testing
- CI pipeline integration
- Mocking of external APIs

This will ensure your multi-agent systems remain robust as they scale.

---

## Conclusion

FastAgency is purpose-built to accelerate the journey from prototype to production for multi-agent AI workflows. With its unified interface, seamless API integration, and flexible deployment options, it empowers developers to focus on innovation rather than infrastructure.

**Stay up to date** with new features and join the community on [Discord](https://discord.gg/kJjSGWrknU). Explore the [GitHub repository](https://github.com/ag2ai/fastagency/) and give it a star if you find it useful!

---

*FastAgency: The fastest way to bring multi-agent workflows to production.*

---

If you need more detailed code examples or want to explore specific features, the documentation is structured with guides on UI, API integration, CLI usage, and more, all designed to help you deploy AI-driven applications quickly and reliably. 