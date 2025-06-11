---
title: AI Evaluations
tags: [Coding, AI]
style: fill
color: secondary
description: Comprehensive guide to AI evaluation methods
---

# AI Evaluation Methodology Study Guide

## Introduction to AI Evaluation

Evaluation has become the biggest hurdle in bringing AI applications to reality. The more AI is used, the more opportunity there is for catastrophic failure. Without proper quality control of AI outputs, the risk of AI might outweigh its benefits for many applications.

**Key Challenges:**
- Evaluation can take up the majority of development effort
- Many teams settle for inadequate methods like "eyeballing results"
- Systematic evaluation is needed to make results reliable

## Why Foundation Models Are Hard to Evaluate

### Core Challenges

1. **Intelligence Paradox**: The more intelligent AI models become, the harder they are to evaluate
   - Easy to spot gibberish, harder to validate coherent but wrong summaries
   - Evaluation becomes time-consuming for sophisticated tasks

2. **Open-ended Nature**: Undermines traditional ground truth evaluation
   - Multiple correct responses possible for any input
   - Impossible to curate comprehensive lists of correct outputs

3. **Black Box Problem**: Most foundation models lack transparency
   - No access to architecture, training data, or training process details
   - Can only evaluate by observing outputs

4. **Benchmark Saturation**: Public benchmarks become obsolete quickly
   - GLUE (2018) → SuperGLUE (2019)
   - MMLU (2020) → MMLU-Pro (2024)

5. **Expanded Scope**: General-purpose models require broader evaluation
   - Must assess performance on known tasks
   - Must discover new capabilities
   - May extend beyond human capabilities

## Language Modeling Metrics

### Core Concepts

**Entropy**: Measures information content per token
- Higher entropy = more information per token
- More predictable languages have lower entropy

**Cross Entropy**: Measures how difficult it is for a model to predict next tokens
- Formula: H(P,Q) = H(P) + D_KL(P||Q)
- Where P = true distribution, Q = learned distribution

**Perplexity**: Exponential of cross entropy
- Measures uncertainty when predicting next token
- Lower perplexity = better prediction ability
- Common values: as low as 3 for good models

**Bits-per-Character (BPC) and Bits-per-Byte (BPB)**: Standardized measures
- BPC accounts for different tokenization methods
- BPB provides cross-encoding standardization

### Practical Applications
- Proxy for model capabilities
- Data contamination detection
- Training data deduplication
- Abnormal text detection
- Compression efficiency measurement

### Important Notes
- Perplexity may not reflect post-training performance (SFT, RLHF)
- Post-training typically increases perplexity while improving task performance
- Quantization can affect perplexity unexpectedly

## Exact Evaluation Methods

### Functional Correctness
**Definition**: Evaluating whether system performs intended functionality

**Applications**:
- Code generation (execution accuracy)
- Text-to-SQL generation
- Game bots with measurable scores
- Tasks with clear success criteria

**Metrics**:
- Pass@k: Fraction of problems solved with k attempts
- Execution accuracy for code
- Success rates for task completion

### Similarity Measurements Against Reference Data

#### Exact Match
- Binary scoring (match or no match)
- Works for short, exact responses
- Variations allow containing reference response
- Limited applicability for complex tasks

#### Lexical Similarity
**Methods**:
- Token overlap counting
- Fuzzy matching (edit distance)
- N-gram similarity

**Common Metrics**: BLEU, ROUGE, METEOR++, TER, CIDEr

**Limitations**:
- Requires comprehensive reference sets
- Higher similarity ≠ better responses
- Sensitive to reference data quality

#### Semantic Similarity
**Process**:
1. Transform text to embeddings
2. Compute similarity (e.g., cosine similarity)
3. Score based on semantic closeness

**Metrics**: BERTScore, MoverScore

**Advantages**:
- Captures meaning over appearance
- Less dependent on exact phrasing

**Limitations**:
- Quality depends on embedding algorithm
- Requires computational resources

### Introduction to Embeddings

**Definition**: Numerical representations capturing data meaning

**Key Properties**:
- Vector format (typically 100-10,000 dimensions)
- Similar content → closer embeddings
- Can be cross-modal (text, images, audio)

**Popular Models**:
- BERT, CLIP, Sentence Transformers
- Specialized vs. general-purpose embeddings
- Joint embedding spaces for multiple modalities

## AI as a Judge

### Overview
**Definition**: Using AI models to evaluate other AI models' outputs

**Advantages**:
- Fast and relatively cheap
- Works without reference data
- Flexible evaluation criteria
- Can provide explanations
- Strong correlation with human evaluators (up to 85% agreement)

### Implementation Approaches

1. **Quality Assessment**: Evaluate response quality independently
2. **Reference Comparison**: Compare against ground truth
3. **Pairwise Comparison**: Compare two responses directly

### Prompting Best Practices

**Essential Components**:
- Clear task description
- Detailed evaluation criteria
- Scoring system specification
- Examples with justifications

**Scoring Systems**:
- Classification (good/bad, relevant/irrelevant)
- Discrete numerical (1-5 scale)
- Continuous numerical (0-1 range)

**Tips**:
- Language models work better with text than numbers
- Discrete scoring outperforms continuous
- Narrower ranges (1-5) work better than wider ranges
- Include examples for better performance

### Limitations and Biases

#### Inconsistency Issues
- Probabilistic nature leads to varying outputs
- Same judge, same input can produce different scores
- Reproducibility challenges

#### Criteria Ambiguity
- No standardized metrics across tools
- Different tools use different scoring systems
- Scores not comparable between judges
- Evolution over time complicates monitoring

#### Cost and Latency Concerns
- Doubles API calls if same model generates and evaluates
- Multiple criteria multiply costs
- Production guardrails add latency
- Mitigation: weaker judge models, spot-checking

#### Common Biases
- **Self-bias**: Models favor their own responses
- **Position bias**: Favor first option in comparisons
- **Verbosity bias**: Prefer longer responses regardless of quality
- **Recency bias**: Humans prefer last option (opposite of AI)

### Judge Model Selection

**Stronger Models as Judges**:
- Better judgment quality
- Can guide weaker model improvement
- Challenges: cost, latency, no judge for strongest model

**Self-Evaluation**:
- Useful for sanity checks
- Can prompt self-improvement
- Subject to self-bias

**Weaker Models as Judges**:
- Judgment may be easier than generation
- Cost-effective option
- Specialized judges can outperform general ones

**Specialized Judge Types**:
- **Reward Models**: Score (prompt, response) pairs
- **Reference-based Judges**: Compare against ground truth
- **Preference Models**: Predict user preferences between options

## Ranking Models with Comparative Evaluation

### Approaches to Model Ranking

**Pointwise Evaluation**: Evaluate each model independently, rank by scores

**Comparative Evaluation**: Direct model comparisons, compute ranking from results

### Why Comparative Evaluation?

**Advantages**:
- Easier to compare than assign absolute scores
- Captures subjective quality preferences
- Harder to game than benchmark training
- Never becomes saturated
- Provides discriminating signals

**Applications**:
- LMSYS Chatbot Arena leaderboard
- Production model selection
- A/B testing alternative

### Implementation Process

1. **Match Generation**: Select model pairs for comparison
2. **Evaluation**: Human or AI judges pick winners
3. **Rating Algorithm**: Compute rankings from match results
4. **Popular Algorithms**: Elo, Bradley-Terry, TrueSkill

### Challenges and Limitations

#### Scalability Issues
- Quadratic growth in comparisons (n models = n² pairs)
- Data-intensive requirements
- New model evaluation affects existing rankings
- Private model evaluation difficulties

#### Quality Control Problems
- Crowdsourcing lacks standardization
- Volunteer evaluators may lack expertise
- Simple prompts dominate ("hello" accounts for 0.55% of data)
- Malicious voting can pollute rankings

#### Interpretation Limitations
- Relative vs. absolute performance confusion
- Win rate doesn't predict actual performance improvement
- Cost-benefit analysis requires absolute metrics
- Multiple scenarios possible for same ranking

### Future Considerations

**Promising Aspects**:
- Scales with model capability improvements
- Captures human preference directly
- Resistant to gaming
- Complements other evaluation methods

**Improvement Areas**:
- Better matching algorithms
- Quality control mechanisms
- Standardization efforts
- Integration with absolute performance metrics

## Summary and Best Practices

### Key Takeaways

1. **Multi-Modal Approach**: Use combination of exact, subjective, and comparative evaluation
2. **Context Awareness**: Evaluation must consider the whole system, not just individual components
3. **Systematic Methods**: Move beyond ad-hoc approaches like eyeballing results
4. **Understand Limitations**: Each method has specific biases and constraints
5. **Iterative Improvement**: Evaluation methods should evolve with applications

### Evaluation Strategy Framework

1. **Identify Failure Points**: Design evaluation around likely system failures
2. **Choose Appropriate Methods**: Match evaluation approach to task characteristics
3. **Implement Multiple Measures**: Combine exact and subjective evaluation
4. **Monitor and Adapt**: Track evaluation reliability over time
5. **Cost-Benefit Balance**: Optimize between evaluation thoroughness and resource constraints

### Future Directions

- Standardization of AI judge criteria
- Development of specialized evaluation models
- Better integration of evaluation into development workflows
- Improved handling of evolving model capabilities
- Enhanced quality control for comparative evaluation

This comprehensive approach to AI evaluation provides the foundation for building reliable, systematic evaluation pipelines that can handle the complexity and open-ended nature of modern foundation models.