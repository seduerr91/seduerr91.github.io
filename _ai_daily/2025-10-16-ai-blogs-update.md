---
title: Empower Developers - Streamlining Claude Contributions and Customization
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from anthropics/claude-cookbooks on 10-16"
---
The recent blog posts focus on empowering developers and contributors within the Claude ecosystem through practical guidance and clear standards. Key trends include an emphasis on well-structured workflows: contributors are provided with detailed setup requirements, quality checks, and best practices for maintaining high-quality contributions using automated tools and intelligent reviews. Contribution processes are streamlined via structured Git workflows, standardized commit messages, and dedicated support channels. On the technical side, new resources highlight step-by-step instructions for advanced model customization, specifically finetuning the Claude 3 Haiku model using Amazon Bedrock, guiding users through dataset preparation, job configuration, and deployment. Overall, there is a strong focus on facilitating effective contribution and model customization while ensuring security, quality, and ease of use.

## New Cookbook Recipes

### [CONTRIBUTING.md](https://github.com/anthropics/claude-cookbooks/blob/83882c6bc103b8f841e192ecb0fd493a1337f515/CONTRIBUTING.md)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for potential contributors to the Claude Cookbooks. Key announcements include the requirements for setting up a development environment, such as using Python 3.11 or higher and the recommended package manager, uv. 

The post highlights the importance of adhering to quality standards through features like automated code validation using tools like nbconvert and ruff, alongside intelligent reviews via Claude. It introduces useful slash commands for validating notebooks and managing model usage.

Additionally, it outlines specific contribution guidelines, including best practices for notebooks and a structured Git workflow. Contributors are urged to perform quality checks and follow conventional commit messages before initiating pull requests. For support, contributors can utilize GitHub issues, discussions, and the Anthropic Discord channel. Lastly, contributors must ensure the security of sensitive data by using environment variables.

---

### [finetuning_on_bedrock.ipynb](https://github.com/anthropics/claude-cookbooks/blob/3114f66a3f1dbd3c9f555dff9a4a23fffeea6003/finetuning/finetuning_on_bedrock.ipynb)
**Source:** anthropics/claude-cookbooks

The blog post provides a comprehensive guide for finetuning the Claude 3 Haiku model using Amazon Bedrock. Key requirements include an AWS account, a dataset in JSONL format, and a service role with access to the relevant S3 bucket. The guide outlines the necessary steps, starting from dataset preparation, which must follow a specific JSON structure, to uploading the dataset to S3. It details the configuration and initiation of a finetuning job using Boto3, specifying parameters such as job name, model identifier, and hyperparameters. Finally, it explains how to host the finetuned model with Provisioned Throughput in Amazon Bedrock and offers a usage example via the Bedrock API. Overall, it serves as a practical resource for developers looking to customize and deploy their models effectively.