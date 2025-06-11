---
title: AI Evaluations Pipeline
tags: [Coding, AI]
style: fill
color: secondary
description: Techniques to evaluate AI systems effectively
---

# AI Evaluation Pipeline Study Guide

## Overview

AI application success depends on the ability to differentiate good outcomes from bad outcomes. This requires a reliable evaluation pipeline. This guide covers comprehensive evaluation techniques for open-ended AI tasks.

## Step 1: Evaluate All System Components

### Multi-Level Evaluation
- **Component-level**: Evaluate each system component independently
- **End-to-end**: Evaluate complete system output
- **Turn-based**: Evaluate quality of individual responses
- **Task-based**: Evaluate whether system completes entire tasks

### Example: Resume Parser Application
1. **PDF-to-text extraction** - Evaluate using text similarity
2. **Employer extraction** - Evaluate using accuracy metrics

### Turn vs Task Evaluation
- **Turn-based**: Quality of each individual output
- **Task-based**: Whether system accomplishes the goal (more important for users)
- Challenge: Determining task boundaries in conversations

### Benchmark Example
- **Twenty Questions**: One AI instance chooses concept, another guesses through yes/no questions
- Scored on success rate and number of questions needed

## Step 2: Create Evaluation Guidelines

### Define What Good Means
- Specify what application **should** do
- Specify what application **shouldn't** do  
- Define scope boundaries and out-of-scope responses

### Evaluation Criteria Development
Average applications use 2.3 different feedback criteria:

**Example Customer Support Criteria:**
1. **Relevance**: Response addresses user's query
2. **Factual Consistency**: Response aligns with context
3. **Safety**: Response isn't toxic

### Create Scoring Rubrics
- Choose scoring system (binary, 1-5 scale, 0-1 range)
- Provide examples for each score level
- Validate rubrics with human reviewers
- Ensure unambiguous guidelines

### Business Metric Alignment
Map evaluation metrics to business impact:
- 80% factual consistency → automate 30% of support requests
- 90% factual consistency → automate 50% of support requests  
- 98% factual consistency → automate 90% of support requests

**Key Business Metrics:**
- Stickiness: DAU, WAU, MAU
- Engagement: Conversations per month, session duration

## Step 3: Define Methods and Data

### Select Evaluation Methods
- **Specialized classifiers** for toxicity detection
- **Semantic similarity** for relevance measurement
- **AI judges** for factual consistency
- **Mixed approaches** for cost/quality balance

### Leverage Logprobs
- Measure model confidence in predictions
- Useful for classification tasks
- Calculate perplexity for fluency assessment

### Human Evaluation
- Use as North Star metric
- Evaluate subset of daily outputs (e.g., 500 conversations)
- Detect performance changes and usage patterns

### Data Annotation Strategy
- Use actual production data when possible
- Leverage natural labels if available
- Create clear annotation guidelines
- Reuse guidelines for future fine-tuning

### Data Slicing Techniques
Separate data into subsets for granular analysis:
- **Bias detection**: Avoid discrimination against minority groups
- **Debugging**: Identify performance issues in specific data types
- **Improvement opportunities**: Find areas needing enhancement
- **Simpson's paradox prevention**: Avoid aggregate score misleading

### Evaluation Set Types
- **Production representative**: Matches actual usage distribution
- **User tier based**: Paying vs free users
- **Platform based**: Mobile vs web traffic
- **Error-prone examples**: Known failure cases
- **Typo-containing**: Common user input errors  
- **Out-of-scope**: Inappropriate inputs

### Sample Size Guidelines
- **Minimum**: 300 examples (absolute minimum)
- **Preferred**: 1,000+ examples
- **Benchmark median**: 1,000 examples
- **Benchmark average**: 2,159 examples

**Score Difference vs Sample Size (OpenAI guidelines):**
- For every 3× decrease in score difference, need 10× more samples

### Bootstrap Validation
1. Draw samples with replacement from evaluation set
2. Evaluate model on bootstrapped samples
3. Repeat multiple times
4. Check for consistent results across bootstraps

## Evaluation Pipeline Quality Assessment

### Key Quality Questions
- Do better responses receive higher scores?
- Do better metrics correlate with business outcomes?
- Is the pipeline reproducible across runs?
- What's the variance across different datasets?

### Reliability Improvements
- Set consistent configurations (e.g., temperature = 0 for AI judges)
- Track metric correlations
- Remove redundant perfectly correlated metrics
- Investigate uncorrelated metrics

### Cost and Latency Considerations
- Balance evaluation thoroughness with performance
- Don't skip evaluation to reduce latency
- Consider async evaluation where possible

## Iteration and Maintenance

### Continuous Improvement
- Update criteria as needs change
- Modify scoring rubrics based on learnings  
- Add/remove examples as patterns emerge
- Maintain consistency while evolving

### Experiment Tracking
Log all variables that could affect evaluation:
- Evaluation data versions
- Scoring rubrics
- AI judge prompts and configurations
- Sampling parameters

## Model Selection Considerations

### Host vs API Decision Factors
Evaluate across seven axes:
1. **Data Privacy**: Control over sensitive information
2. **Data Lineage**: Tracking data flow and usage
3. **Performance**: Speed and reliability requirements
4. **Functionality**: Feature availability and limitations
5. **Control**: Customization and configuration options
6. **Cost**: Total cost of ownership
7. **Maintenance**: Ongoing operational requirements

### Public Benchmark Limitations
- Help eliminate bad models but don't identify best for specific use cases
- Likely contaminated with training data
- Aggregation methodologies often unclear
- Should complement, not replace, private evaluation

## Key Takeaways

1. **No perfect evaluation method exists** - combine multiple approaches
2. **Evaluation is ongoing** - continue throughout development and production  
3. **Clear guidelines are crucial** - ambiguous criteria lead to unreliable results
4. **Business alignment matters** - connect evaluation metrics to business outcomes
5. **Component-level evaluation** - test each system part independently
6. **User feedback integration** - leverage production user interactions
7. **Continuous iteration** - evolve evaluation as requirements change

This evaluation pipeline framework provides the foundation for reliable AI system assessment, enabling risk reduction, performance improvement opportunities, and progress benchmarking throughout the development lifecycle.