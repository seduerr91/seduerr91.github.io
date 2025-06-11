---
title: AI Engineering Architecture and User Feedback
tags: [AI, Engineering, Architecture, Feedback]
style: fill
color: secondary
description: Building AI systems with monitoring and feedback
---

# AI Engineering Architecture and User Feedback Study Guide

## Overview
This chapter explores how to combine various AI engineering techniques into production-ready applications. It covers system architecture design and user feedback collection for continuous improvement through data flywheels.

## AI Engineering Architecture

### Core Principle
Start simple and gradually add complexity. The basic flow: **Query → Model → Response**, then progressively enhance based on needs.

### Step 1: Enhance Context
**Purpose**: Give models necessary information to produce quality outputs

**Components**:
- **Retrieval mechanisms**: Text, image, tabular data retrieval
- **Tool integration**: Web search, APIs, external data sources
- **Context construction**: Feature engineering for foundation models

**Implementation considerations**:
- Provider limitations (document types, upload limits)
- Retrieval algorithms and configurations
- Chunk sizes and retrieval quality

### Step 2: Implement Guardrails
**Purpose**: Mitigate risks and protect users/systems

#### Input Guardrails
**Protect against**:
- Private information leaks to external APIs
- Malicious prompt injection attacks
- System compromise through bad prompts

**Sensitive data detection**:
- Personal information (IDs, phone numbers, bank accounts)
- Human faces
- Intellectual property keywords
- Company privileged information

**Mitigation strategies**:
- Block entire queries
- Mask sensitive data with placeholders
- Use PII reverse dictionaries for unmasking

#### Output Guardrails
**Quality failures**:
- Malformatted responses (invalid JSON)
- Factual inconsistencies/hallucinations
- Generally poor outputs

**Security failures**:
- Toxic content (racist, sexual, illegal)
- Private information exposure
- Remote code execution triggers
- Brand risk responses

**Handling strategies**:
- Simple retry logic for probabilistic failures
- Parallel calls to reduce latency
- Human fallback for complex cases
- Sentiment-based escalation

**Trade-offs**:
- Reliability vs latency
- Stream completion compatibility
- Self-hosted vs API requirements

### Step 3: Add Model Router and Gateway

#### Router Functions
**Intent classification**:
- Route queries to specialized models
- Cost optimization through model selection
- Out-of-scope conversation prevention
- Ambiguous query clarification

**Implementation**:
- Smaller models (GPT-2, BERT, Llama 7B)
- Fast and cheap operation
- Context adjustment for varying model limits

#### Gateway Benefits
**Unified interface**: Single point for multiple model APIs
**Access control**: Centralized security and cost management
**Fallback policies**: Handle rate limits and API failures
**Additional features**: Load balancing, logging, analytics

**Popular solutions**: Portkey, MLflow, Wealthsimple, TrueFoundry, Kong, Cloudflare

### Step 4: Reduce Latency with Caches

#### Exact Caching
- **Use case**: Identical query matching
- **Implementation**: In-memory storage, databases (PostgreSQL, Redis)
- **Eviction policies**: LRU, LFU, FIFO
- **Considerations**: User-specific vs generic queries, time-sensitivity

**Warning**: Improper caching can cause data leaks between users

#### Semantic Caching
- **Mechanism**: Vector similarity matching
- **Process**: Query embedding → vector search → similarity threshold
- **Requirements**: Quality embeddings, functional vector search, reliable similarity metrics
- **Trade-offs**: Higher hit rates vs accuracy risks and computational overhead

### Step 5: Add Agent Patterns
**Complex workflows**: Loops, parallel execution, conditional branching
**Write actions**: Email composition, order placement, bank transfers
**Risk considerations**: Significantly increased system exposure

## Monitoring and Observability

### Key Performance Indicators
- **MTTD**: Mean Time to Detection
- **MTTR**: Mean Time to Response  
- **CFR**: Change Failure Rate

### Metrics Categories

#### Format Failures
- JSON validation errors
- Expected key presence
- Output structure compliance

#### Quality Metrics
- Factual consistency
- Conciseness, creativity, positivity
- AI judge evaluations

#### Safety Metrics
- Toxicity detection
- PII exposure
- Guardrail trigger rates
- Refusal rate monitoring

#### User Behavior Metrics
- Generation stop frequency
- Conversation turn averages
- Token usage patterns (input/output)
- Response diversity measures

#### Performance Metrics
- **TTFT**: Time to First Token
- **TPOT**: Time Per Output Token
- **Total latency**: Complete response time
- **TPS**: Tokens Per Second
- **Cost tracking**: API usage and rate limits

### Logs and Traces
**Comprehensive logging**:
- All configurations and settings
- Complete query transformation pipeline
- Intermediate outputs and tool calls
- Component start/end times and crashes

**Trace requirements**:
- Step-by-step query transformation
- Failure point identification
- Time and cost attribution per step

### Drift Detection
**Monitor changes in**:
- System prompts and templates
- User behavior patterns
- Model API versions
- Performance metrics over time

## AI Pipeline Orchestration

### Two-Step Process
1. **Component definition**: Models, databases, tools, evaluation/monitoring systems
2. **Chaining**: Function composition and data flow specification

### Design Considerations
- **Parallel processing**: Minimize latency through concurrent operations
- **Data format compatibility**: Ensure step-to-step data flow
- **Error handling**: Component failure and data mismatch management

### Popular Tools
LangChain, LlamaIndex, Flowise, Langflow, Haystack

### Evaluation Criteria
- **Component support**: Current and future model/framework compatibility
- **Advanced features**: Branching, parallel processing, error handling
- **User experience**: API intuitiveness, documentation, community support
- **Performance**: No hidden API calls or latency introduction

## User Feedback Systems

### Strategic Importance
- **Evaluation**: Application performance monitoring
- **Development**: Future model training data
- **Personalization**: User-specific adaptations
- **Competitive advantage**: Proprietary data collection

### Feedback Types

#### Explicit Feedback
- Thumbs up/down, star ratings
- Yes/no problem resolution
- Direct user responses to feedback requests

#### Implicit Feedback
- User action inference
- Application-specific behavioral patterns
- Conversational interface advantages

### Natural Language Feedback Signals

#### Early Termination
- Response generation stops
- App exits during interaction
- Voice assistant interruption
- User abandonment

#### Error Correction
- "No, ..." or "I meant, ..." responses
- Query rephrasing attempts
- Specific correction instructions
- Confirmation requests ("Are you sure?")

#### User Edits
- Direct response modifications
- Strong preference signal generation
- Preference data creation (original vs edited)

#### Complaints
**Eight categories** (from FITS dataset):
- Accuracy issues
- Relevance problems
- Toxicity concerns
- Length complaints
- Detail deficiencies
- General quality issues

#### Sentiment Analysis
- Frustration, disappointment expressions
- Conversation sentiment tracking
- Voice volume analysis (call centers)
- Model refusal rate monitoring

### Conversational Action Feedback

#### Regeneration Signals
- Response dissatisfaction indication
- Multiple option comparison desire
- Consistency checking behavior
- Usage-based billing considerations

#### Conversation Organization
- **Delete**: Strong negative signal
- **Rename**: Good conversation, poor auto-title
- **Share**: Context-dependent positive/negative
- **Bookmark**: Positive retention signal

#### Conversation Metrics
- **Length**: Application-dependent interpretation
- **Diversity**: Token/topic variety measurement
- **Turn patterns**: Efficiency vs engagement indicators

### Feedback Collection Design

#### Timing Strategies
**Initial calibration**: Optional preference setting
**Failure moments**: Error reporting and recovery options
**Low confidence**: Uncertainty-driven feedback requests
**Success moments**: Optional positive feedback collection

#### Collection Best Practices
- **Seamless integration**: Workflow non-disruption
- **Easy provision**: Minimal user effort
- **Ignorable design**: Optional participation
- **Clear incentives**: Explained usage and benefits

#### Design Examples
- **Midjourney**: Action-based implicit feedback
- **GitHub Copilot**: Tab acceptance/typing continuation
- **Comparative evaluation**: Side-by-side response selection

### Feedback Limitations

#### Common Biases
- **Leniency bias**: Overly positive ratings to avoid conflict
- **Random feedback**: Unmotivated user responses
- **Position bias**: First option preference
- **Length bias**: Longer response preference
- **Recency bias**: Last-seen option preference

#### Degenerate Feedback Loops
**Mechanism**: Predictions influence feedback, which influences next model iteration
**Examples**: 
- Video recommendation popularity reinforcement
- Content type amplification (cat photos example)
- Sycophancy development in models

**Mitigation**: Understand feedback limitations and potential biases before implementation

## Key Takeaways

1. **Progressive complexity**: Start simple, add components as needed
2. **System thinking**: Problems often require multi-component solutions
3. **Observability first**: Design for failure detection and debugging
4. **User feedback value**: Critical for competitive advantage and improvement
5. **Bias awareness**: Understand and design around feedback limitations
6. **Product-engineering convergence**: AI engineering increasingly involves product considerations
7. **Safety considerations**: Each component addition increases potential failure modes