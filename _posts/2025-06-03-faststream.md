---
title: FastStream
tags: [Coding, Agents]
style: fill
color: secondary
description: From Prototype to Massively Scaling Production
---

# FastStream: Effortless Event Stream Integration for Modern Python Services

**FastStream** is a powerful, developer-friendly framework designed to simplify the integration of event streams and message brokers into Python services. Whether you're building microservices that communicate via Kafka, RabbitMQ, NATS, Redis, or Confluent, FastStream provides a unified, type-safe, and extensible API that streamlines both development and operations.

## Why FastStream?

FastStream was born from the lessons learned in projects like FastKafka and Propan, combining their best ideas into a single, cohesive framework. Its mission is to make streaming microservices accessible to all developers—junior and senior alike—while offering advanced features for complex, data-centric systems.

### Key Features

- **Unified API for Multiple Brokers:** Work seamlessly with Kafka, RabbitMQ, NATS, Redis, and Confluent using a consistent interface.
- **Pydantic Validation:** Leverage Pydantic for robust message serialization and validation.
- **Automatic AsyncAPI Documentation:** Generate up-to-date, machine-readable docs for your event-driven APIs.
- **Powerful Dependency Injection:** Inspired by FastAPI and pytest, FastStream's DI system makes service composition and testing a breeze.
- **In-Memory Testing:** Test your producers and consumers without running a real broker.
- **Extensible and Integrable:** Use with any HTTP framework (FastAPI, Aiohttp, Litestar, etc.) and extend with custom middleware or serialization.

## Getting Started

### Installation

FastStream supports Linux, macOS, Windows, and most Unix-like systems. Install the broker-specific extras you need:

```sh
pip install 'faststream[kafka]'      # For Kafka (AIOKafka)
pip install 'faststream[confluent]'  # For Confluent Kafka
pip install 'faststream[rabbit]'     # For RabbitMQ
pip install 'faststream[nats]'       # For NATS
pip install 'faststream[redis]'      # For Redis
```

> **Tip:** By default, FastStream uses Pydantic v2 (Rust-based), but you can downgrade to v1 if needed for compatibility.

### Writing Your First App

FastStream uses decorators to define message consumers and producers. Here's a minimal example for Kafka:

```python
from faststream.kafka import KafkaBroker

broker = KafkaBroker("localhost:9092")

@broker.subscriber("input_topic")
async def handle_message(msg: dict):
    print("Received:", msg)

@broker.publisher("output_topic")
async def publish_message(data: dict):
    return data

if __name__ == "__main__":
    broker.run()
```

With Pydantic, you can define structured message schemas:

```python
from pydantic import BaseModel

class UserEvent(BaseModel):
    user_id: int
    action: str

@broker.subscriber("user_events")
async def process_event(event: UserEvent):
    print(f"User {event.user_id} performed {event.action}")
```

### Testing Your Service

FastStream's `TestBroker` context manager allows you to test your logic in-memory, without a running broker:

```python
import pytest
from faststream.kafka import TestKafkaBroker

@pytest.mark.asyncio
async def test_handle_message():
    async with TestKafkaBroker(broker) as test_broker:
        await test_broker.publish("input_topic", {"foo": "bar"})
        # Assert your logic here
```

### Running the Application

Install the CLI:

```sh
pip install "faststream[cli]"
```

Run your service:

```sh
faststream run mymodule:app
```

For hot reload during development:

```sh
faststream run mymodule:app --reload
```

For horizontal scaling:

```sh
faststream run mymodule:app --workers 3
```

## Advanced Features

### Automatic AsyncAPI Documentation

FastStream generates [AsyncAPI](https://www.asyncapi.com/) documentation for your services, making it easy for teams to understand and integrate with your event-driven APIs. The docs include all channels, message formats, and schemas, and can be served as a web page for your team.

### Dependency Injection

Inspired by FastAPI and pytest, FastStream's DI system lets you declare dependencies as function arguments:

```python
from faststream import Depends

async def get_db():
    # ... return a database connection
    pass

@broker.subscriber("topic")
async def handler(msg: dict, db=Depends(get_db)):
    # Use db in your handler
    pass
```

### HTTP Framework Integrations

You can use FastStream brokers independently or integrate them with popular HTTP frameworks:

#### With FastAPI

```python
from fastapi import FastAPI
from faststream.kafka.fastapi import KafkaRouter

app = FastAPI()
router = KafkaRouter("localhost:9092")

@router.subscriber("input_topic")
async def handle(msg: dict):
    ...

app.include_router(router)
```

#### With Other Frameworks

FastStream supports integration with Litestar, Aiohttp, Quart, Sanic, Falcon, and more. Just start and stop the broker according to your app's lifecycle.

### Task Scheduling

While FastStream doesn't include a scheduler by default (to keep the core focused), you can easily integrate with [Taskiq](https://github.com/taskiq-python/taskiq) for distributed task scheduling:

```python
from taskiq_faststream import BrokerWrapper

taskiq_broker = BrokerWrapper(broker)

taskiq_broker.task(
    message={"user": "John", "user_id": 1},
    topic="input_topic",
    schedule=[{"cron": "* * * * *"}],
)
```

Run the scheduler with:

```sh
taskiq scheduler mymodule:scheduler
```

## Community and Contribution

FastStream is backed by a vibrant community and a team of experts specializing in each supported broker (Kafka, RabbitMQ, NATS, Redis). Contributions are welcome—check out the [contribution guide](./getting-started/contributing/CONTRIBUTING.md) and join the [GitHub issues](https://github.com/ag2ai/faststream/issues) to get started.

---

**FastStream** is the modern, Pythonic way to build robust, scalable, and well-documented event-driven services. Whether you're prototyping or running in production, FastStream's intuitive API, strong typing, and extensibility will help you deliver faster and with confidence.

---

*For more details, code samples, and advanced usage, explore the full documentation and join the FastStream community!* 