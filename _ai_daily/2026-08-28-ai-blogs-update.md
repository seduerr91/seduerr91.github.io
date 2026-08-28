---
title: Streamlined Access Management for SharePoint in ChatGPT Workspaces
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 08-28"
---
The blog posts collectively announce new functionalities allowing administrators to efficiently manage and restrict SharePoint site access within ChatGPT workspaces using the ChatGPT Admin API. Key trends include enhanced governance tools, such as Python-based scripts for maintaining and updating allowlists, safeguards for safe modification, and support for idempotent operations. Requirements and detailed troubleshooting guidance are provided, underscoring a broader move toward streamlined, secure, and configurable access management across integrated enterprise platforms.

## New Cookbook Recipes

### [sharepoint_site_access.md](https://github.com/openai/openai-cookbook/blob/86af94f494ee4680f883252d65fa256132d77c27/examples/chatgpt/sharepoint_site_access/sharepoint_site_access.md)
**Source:** openai/openai-cookbook

The blog post introduces functionalities for managing SharePoint site access via the ChatGPT Admin API. Administrators can restrict the SharePoint app to specific site collections, utilizing a Python script that deduplicates entries and maintains the existing allowlist. Key prerequisites include Python 3.10 or later, a ChatGPT workspace ID, and relevant API keys, including permissions for `chatgpt.enterprise.apps.write` and Microsoft Graph.

The script enables users to inspect site URLs, prepare a list of sites using a CSV file, read the current allowlist, and add or remove site collections efficiently, with safeguards against accidental deletions. It also discusses the management of idempotency keys to safely retry operations. Troubleshooting tips are provided for common HTTP status errors. Overall, the enhancements offer better governance over SharePoint access within ChatGPT workspaces.