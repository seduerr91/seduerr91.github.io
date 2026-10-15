---
title: OTel Integration: Elevate Your Observability Game
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-15"
---
The latest blog posts highlight the beta release of OpenTelemetry (OTel) integration for tracing both Claude API and Managed Agents activities, bringing enhanced end-to-end observability across SDK and API interactions. Key trends include comprehensive support for distributed tracing via standardized OpenTelemetry GenAI semantic conventions, simplifying backend integration and cross-environment compatibility. Users benefit from tagged requests with `traceparent` headers, unifying trace visibility for improved monitoring and debugging. The documentation provides guidance for initial setup, and future updates are anticipated as the feature evolves.

## New Cookbook Recipes

### [opentelemetry_tracing.ipynb](https://github.com/anthropics/claude-cookbooks/blob/b2b0aa1ff7d8980b005b225d3802969c87bedad5/observability/opentelemetry_tracing.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post announces the integration of OpenTelemetry (OTel) for tracing Claude API requests and Managed Agents sessions. Key features include the ability to emit spans from both the Claude SDK (which runs within a user’s process) and the Claude API (which runs on Anthropic's servers). Each request is tagged with a `traceparent` header, enabling a comprehensive view across both SDK and API spans in a single trace.

Additionally, the post highlights the beta nature of this feature, indicating potential changes to span names and attributes in future versions. It outlines the differences in how spans are emitted, their coverage, and the methods to receive them. The use of OpenTelemetry GenAI semantic conventions facilitates backend integration without custom mapping.

Documentation links are also provided for setting up and utilizing this tracing feature effectively in various programming environments.