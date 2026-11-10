---
title: AI Voice Agents Transforming Workflows - Insights and Innovations
tags: [AI, Blogs, Cookbooks]
style: fill
color: primary
description: "A summary of new posts from openai/openai-cookbook on 11-10"
---
**Meta-Summary:**

The collection of blog posts highlights significant advancements in AI-powered voice agents, particularly through the GPT-Live platform. Key trends include the focus on enabling voice systems to manage structured workflows (like customer support and interview processes) while maintaining natural, low-latency conversations that respect standard operating procedures (SOPs). Demonstrations, benchmarks, and practical guides emphasize the integration of backend systems for accurate order management, applicant tracking, and customer requests—including credits and replacements—showcasing real-world applications such as the Blossom Store. Notably, comparisons between backend models (Terra and Luna) reveal progress in response accuracy and efficiency, with an emphasis on customer consent and robust SOP adherence. Overall, these posts underscore the increasing procedural reliability, flexibility, and evaluative rigor of modern voice agent technology in operational contexts.

## New Cookbook Recipes

### [sop_to_voice_agent_builder.md](https://github.com/openai/openai-cookbook/blob/2658c92cd4cd562504571b9d7491fc51524a7dc9/articles/sop_to_voice_agent_builder.md)
**Source:** openai/openai-cookbook

The blog post introduces GPT-Live, a platform that enables the development of voice agents capable of managing structured workflows while ensuring natural conversation flow. The system supports low-latency responses and can accommodate interruptions. It emphasizes the need for applications to adhere to standard operating procedures (SOPs) during such interactions. Key features include recordings of nine short calls demonstrating various scenarios, visual flow diagrams, and runnable examples that provide practical guidance on setup and execution. The post highlights two specific workflows: an e-commerce customer service scenario and a scheduling assistant, illustrating how GPT-Live efficiently handles different customer requests through clear delegation and back-end verification processes. Details on prerequisites and setup instructions are also provided, along with examples showcasing the handling of service inquiries, such as damage reports and credit negotiations.

---

### [README.md](https://github.com/openai/openai-cookbook/blob/2658c92cd4cd562504571b9d7491fc51524a7dc9/examples/audio/sop_voice_workflows/README.md)
**Source:** openai/openai-cookbook

The blog post outlines the setup and features of voice agents designed to follow a standard operating procedure (SOP) for tasks such as order support and interviews. The key applications discussed include the Blossom Store, which executes order inquiries and replacements using a local applicant tracking system (ATS) for interview processes.

Users are guided through the installation process, including running a virtual environment and installing necessary dependencies. The Blossom Store captures customer interactions for order replacements, while the ATS collects applicant responses. Key functionalities include offline replay and microphone input for real-time interactions.

Additionally, the post provides insights on inspecting audio recordings of these interactions and running local application tests to evaluate performance. It emphasizes the importance of ensuring proper configuration for microphone calls and logging outcomes for review. Overall, it highlights the integration of GPT-Live technology in enhancing procedural efficiency in voice applications.

---

### [REPORT.md](https://github.com/openai/openai-cookbook/blob/2658c92cd4cd562504571b9d7491fc51524a7dc9/examples/audio/sop_voice_workflows/delivery/REPORT.md)
**Source:** openai/openai-cookbook

The blog post conducts a benchmark comparison of two backend models, Terra and Luna, assessing their effectiveness in handling store procedures through simulated caller interactions. Terra successfully completed all tasks in 68 trials, while Luna managed 65, with discrepancies noted in credit requests and operational errors. The updated evaluation framework highlighted key differences: Terra maintained superior performance metrics, executing tasks more efficiently, while Luna occasionally misinterpreted customer consent. The analysis unearthed various cases, such as topic changes and credit amounts, revealing both models' strengths and weaknesses, particularly in their interpretation of customer requests. Ultimately, Terra outperformed Luna in overall accuracy and response time, emphasizing the importance of clear customer consent in automated processes. The post encourages readers to run the same cases independently for further examination.

---

### [SOP.md](https://github.com/openai/openai-cookbook/blob/2658c92cd4cd562504571b9d7491fc51524a7dc9/examples/audio/sop_voice_workflows/delivery/SOP.md)
**Source:** openai/openai-cookbook

The blog post provides a detailed procedure for customer support related to Blossom Store orders. Key points include:

1. **Order Retrieval**: Support staff must verify the correct order before providing updates or compensation, directing customers to support if discrepancies arise.
   
2. **Delivery Status**: Only share updates from carriers; resolve disputes about delivery through support.

3. **Late-Delivery Credits**: Customers are eligible for compensation if delivery is delayed over 24 hours, with a credit up to $20 based on the order total.

4. **Damaged Items**: Confirm the item and damage details before offering replacements, ensuring the item is in stock.

5. **Approval and Confirmation**: Clearly present offers to customers and confirm acceptance before processing, keeping communication open if a decision is delayed. Direct unresolved issues to support. 

The post emphasizes careful verification and customer communication to enhance service effectiveness.