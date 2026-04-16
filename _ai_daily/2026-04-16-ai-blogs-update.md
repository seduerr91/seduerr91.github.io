---
title: Streamlined Migration to the New Responses API
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 04-16"
---
Across these blog posts, the dominant trend is the systematic migration of legacy services from the OpenAI Chat Completions API to the newer Responses API, with a strong emphasis on maintaining backward compatibility—function signatures and core behaviors remain unchanged. Migration procedures are guided by detailed, reproducible steps and strict editing protocols confined to designated directories, ensuring minimal disruption and preserving codebase integrity. Testing plays a central role throughout, with an offline approach that leverages fake data and ensures validation pipelines for baseline, compilation, and final checks. The adoption of sandboxed environments and the Agents SDK architecture enables modular, auditable, and parallel migration workflows. This approach provides flexibility, clear audit trails, and a controlled, task-sized migration process, paving the way for scalable modernization of internal tooling and customer-facing bots.

## New Cookbook Recipes

### [AGENTS.md](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/migration_agent/AGENTS.md)
**Source:** openai/openai-cookbook

The blog post outlines a systematic approach for migrating a repository located under `repo/`, as per instructions detailed in `repo/MIGRATION.md`. Key objectives include preserving public function signatures and behavior throughout the migration process. Users are required to execute baseline, check, and final test commands from the migration brief, with strict adherence to editing rules: maintaining a narrow scope for changes, utilizing `apply_patch`, and keeping edits confined to the `repo/` directory without external package installations or network calls in tests. The migration procedure involves inspecting the migration guide, applying necessary patches to the code and tests, and compiling a structured output that details commands executed, outcomes, modified files, and a Markdown report. The post emphasizes the importance of returning clear and organized migration information while ensuring minimal disruption to the existing codebase.

---

### [MIGRATION.md](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/repo_fixtures/case_summary_service/MIGRATION.md)
**Source:** openai/openai-cookbook

The blog post outlines the migration of the case summary service from the legacy Chat Completions API to the new Responses API. Key updates include changes to the client wrapper and summary prompt creation processes. Specifically, the `client.responses.create(...)` method will replace `client.chat.completions.create(...)`, while the `messages` argument will be replaced with `input_items`. The function signature for `summarize_case` will remain unchanged, and the summary service will continue to use a temperature setting of zero. The transition also involves modifying tests to support the new API without utilizing the actual OpenAI client, ensuring all tests remain offline. A required validation pipeline has been outlined, including running baseline, compile/check, and final tests to ensure system integrity before and after the migration.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/repo_fixtures/case_summary_service/README.md)
**Source:** openai/openai-cookbook

The blog post introduces a case summary service designed for a sandboxed migration cookbook. This service utilizes Chat Completions to effectively summarize internal case notes while ensuring that tests employ fake data to avoid network calls. The emphasis on a small offline fixture highlights the service's integration into existing workflows without external dependencies.

---

### [MIGRATION.md](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/repo_fixtures/support_reply_service/MIGRATION.md)
**Source:** openai/openai-cookbook

The blog post outlines a migration plan for transitioning from the legacy Chat Completions API to the Responses API in a customer support bot. Key changes include updating the OpenAI client wrapper in `client.py` to use `client.responses.create(...)` instead of `client.chat.completions.create(...)`, while preserving the model argument. The messages argument will be replaced with input_items, which will be used to pass system/user conversation data. The function signature for `draft_reply` will remain unchanged, but the response handling will be modified to return `response.output_text`. Additionally, modifications to the testing framework will ensure that it fakes the Responses API, maintaining offline testing without real client integration. A required validation pipeline has also been specified for baseline testing, compilation checks, and final validation post-editing.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/repo_fixtures/support_reply_service/README.md)
**Source:** openai/openai-cookbook

The blog post introduces the "Customer Support Reply Bot," a lightweight package designed to assist in drafting replies for support agents using the OpenAI Python client. The current setup employs Chat Completions, managed through a compact wrapper located in `customer_support_bot/client.py`. Additionally, the post mentions a migration target outlined in `MIGRATION.md`, indicating future plans for development or enhancements to the bot's functionality.

---

### [sandboxed_code_migration_agent.ipynb](https://github.com/openai/openai-cookbook/blob/9e0a00db04c7b2732554f114df437b7b1169c573/examples/agents_sdk/sandboxed-code-migration/sandboxed_code_migration_agent.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses the process of modernizing a legacy codebase using a code-migration agent facilitated by sandbox environments. It emphasizes a controlled, task-sized approach to migration, allowing for easier inspection, edits, and validation. Key features of the method include keeping the agent harness separate from the execution environment, validating each task with thorough tests and maintaining an audit log.

The architecture uses the Agents SDK, enabling orchestrated workflows where each service runs in its own sandbox, allowing the simultaneous migration of multiple services. The example provided illustrates migrating an OpenAI client from Chat Completions to the Responses API while ensuring proper testing and compliance with a structured output.

End-users are guided on setting up the environment and running the migration tasks, with interchangeable sandbox providers like Docker, E2B, and Cloudflare, facilitating flexibility in execution.