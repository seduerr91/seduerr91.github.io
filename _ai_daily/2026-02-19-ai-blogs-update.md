---
title: OpenAI Boosts Efficiency with New Prompt Caching Features
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 02-19"
---
Recent announcements highlight significant advancements in OpenAI’s Prompt Caching capabilities, enabling reduced latency and input costs—offering up to 90% savings for some models. New features include automatic caching for large prompts, support for multiple input types, and extended retention for cached data. Best practices and tooling—such as response-specific APIs and improved routing via cache keys—are emphasized to help maximize caching efficiency. Collectively, these enhancements reflect OpenAI’s focus on efficiency, scalability, and improved developer experience through smarter infrastructure and better cache optimization strategies.

## New Cookbook Recipes

### [Prompt_Caching_201.ipynb](https://github.com/openai/openai-cookbook/blob/51007543e801567b553e3184860ec39bbc8e6224/examples/Prompt_Caching_201.ipynb)
**Source:** openai/openai-cookbook

The blog post discusses enhancements in OpenAI's Prompt Caching feature, which allows the reuse of previously computed model prompts, significantly reducing latency and input costs. Key features include automatic caching for prompts over 1024 tokens, the ability to cache various input types (messages, images, etc.), and substantial cost savings—up to 90% for certain models. The post emphasizes strategies to improve cache hit rates, such as stabilizing prefixes, using the `prompt_cache_key` for enhanced routing, and leveraging the Responses API over Chat Completions for better cache utilization. Additionally, extended prompt caching could drastically increase retention time for cached data, improving hit rates even further. Lastly, it addresses potential pitfalls that lead to lower caching efficiency, including changes to input formats and context management strategies.