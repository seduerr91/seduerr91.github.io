---
title: Machine Learning System Design
tags: [Coding]
style: fill
color: secondary
description: 9 Steps formula
---

### Designing ML systems for production

Deploying deep learning models in production can be challenging, and it is beyond training models with good performance. Several distinct components need to be designed and developed in order to deploy a production level deep learning system.

Approaching an ML system design problem follows a similar logical flow to the generic software system design. (
For more insight on general system design interview you can e.g. check out [Grokking the System Design Interview
](https://www.educative.io/courses/grokking-the-system-design-interview)
and [System design primer](https://github.com/donnemartin/system-design-primer).). However, there are certain components in the design of an ML based system that needs to be addressed and need special attention, as you will see below in ML System Design Flow.

### ML System Design Interview 

| | |
| --- | ---|
| Step 1| [Problem Formulation](#1-problem-formulation) |
| Step 2 |[Metrics (Offline and Online)](#2-metrics-offline-and-online) |
| Step 3 |[Architectural Components (MVP Logic)](#3-architectural-components-mvp-logic)|
| Step 4 |[Data Collection and Preparation](#4-data-collection-and-preparation) |
| Step 5 |[Feature Engineering](#5-feature-engineering) |
| Step 6 |[Model Development and Offline Evaluation](#6-model-development-and-offline-evaluation) |
| Step 7 |[Prediction Service](#7-prediction-service) |
| Step 8 |[Online Testing and Deployment](#8-online-testing-and-model-deployment)  |
| Step 9 |[Scaling, Monitoring, and Updates](#9-scaling-monitoring-and-updates) |
| | |

## 1. Problem Formulation

- Clarifying questions
- Use case(s) and business goal
- Requirements
  - Scope (features needed), scale, and personalization
  - Performance: prediction latency, scale of prediction
  - Constraints
  - Data: sources and availability  
- Assumptions

- Translate an abstract problem into an ML problem
  - ML objective,
  - ML I/O,
  - ML category (e.g.  binary classification, multi-classification, unsupervised learning, etc)
- Do we need ML to solve this problem?
  - Trade off between impact and cost
    - Costs: Data collection, data annotation, compute
    - if Yes, we choose an ML system to design. If No, follow a general system design flow.  
    - Note: in an ML system design interview we can assume we need ML.

## 2. Metrics (Offline and Online)

- Offline metrics (e.g. classification, relevance metrics)  
  - Classification metrics
    - Precision, Recall, F1, ROC AUC, P/R AUC, mAP, log-loss, etc
      - Imbalanced data
  - Retrieval and ranking metrics
    - Precision@k, Recall@k (do not consider ranking quality)
    - mAP, MRR, nDCG
  - Regression metrics: MSE, MAE, 
  - Problem specific metrics
    - Language: BLEU, BLEURT, GLUE, ROUGE, etc 
    - ads: CPE, etc  
  - Latency
  - Computational cost (in particular for on-device)
- Online metrics
  - CTR
  - Task/session success/failure rate,
  - Task/session total (e.g. watch) times, 
  - Engagement rate (like rate, comment rate)
  - Conversion rate
  - Revenue lift 
  - Reciprocal rank of first click, etc,
  - Counter metrics: direct negative feedback (hide, report)
- Trade-offs b/w metrics

## 3. Architectural Components (MVP Logic)

- High level architecture and main components
  - Non-ML components:
    - user, app server, DBs, KGs, etc and their interactions
  - ML components:
    - Modeling modules (e.g. candidate generator, ranker, ect)
    - Train data generator  
    ... 
- Modular architecture design
    - Model 1 architecture  (e.g. candidate generation)
    - Model 2 architecture (e.g. ranker, filter)
    - ...



## 4. Data Collection and Preparation  

- Data needs
  - target variable
  - big actors in signals (e.g. users, items, etc)
  - type (e.g. image, text, video, etc) and volume
- Data Sources
  - availability and cost
  - implicit (logging), explicit (e.g. user survey)
- Data storage
- ML Data types
  - structured 
    - numerical (discrete, continuous)
    - categorical (ordinal, nominal),
  - unstructured(e.g. image, text, video, audio)
- Labelling (for supervised)
  - Labeling methods
    - Natural labels (extracted from data e.g. clicks, likes, purchase, etc)
      - Missing negative labels (not clicking is not a negative label):
        - Negative sampling
    - Explicit user feedback
    - Human annotation (super costly, slow, privacy issues)
  - Handling lack of labels
  - Programmatic labeling methods (noisy, pros: cost, privacy, adaptive)
    - Semi-supervised methods (from an initial smaller set of labels e.g. perturbation based)
    - Weak supervision (encode heuristics e.g. keywords, regex, db, output of other ML models)
  - Transfer learning:
    - pre-train on cheap large data (e.g. GPT-3),
    - zero-shot or fine-tune for downstream task  
  - Active learning
  - Labeling cost and trade-offs
- Data augmentation
- Data Generation Pipeline 
  - Data collection/ingestion (offline, online)
  - Feature generation (next)
  - Feature transform
  - Label generation
  - Joiner

## 5. Feature Engineering

- Choosing features
  - Define big actors (e.g. user, item, document, query, ad, context),
  - Define actor specific features (current, historic)
    - Example user features: user profile, user history, user interests 
    - Example text features: n-grams (uni,bi), intent, topic, frequency, length, embeddings   
  - Define cross features (e.g. user-item, or query-document features)
    - Example query-document features: tf-idf
    - Example user-item features: user-video watch history, user search history, user-ad interactions(view, like)
  - Privacy constraints
- Feature representation
  - One hot encoding
  - Embeddings
    - e.g. for text, image, graphs, users (how), stores, etc
    - how to generate/learn?
    - pre-compute and store
  - Encoding categorical features (one hot, ordinal, count, etc)
  - Positional embeddings
  - Scaling/Normalization (for numerical features)
- Preprocessing features 
  - Needed for unstructured data 
    - Text: Tokenize (Normalize, pre-tokenize, tokenizer model (ch/word/subword level), post-process (add special tokens))
    - Images: Resize, normalize
    - Video: Decode frames, sample, resize, scale and normalize
- Missing Values
- Feature importance
- Featurizer (raw data -> features)
- Static (from feature store) vs dynamic (computed online) features 
  
## 6. Model Development and Offline Evaluation

- Model selection (MVP)
  - Heuristics -> simple model -> more complex model -> ensemble of models
    - Pros and cons, and decision
    - Note: Always start as simple as possible (KISS) and iterate over
    <!-- - More on Model Selection (TODO) -->
  - Typical modeling choices: 
    - Logistic Regression 
    - Decision tree variants
      - GBDT (XGBoost) and RF 
    <!-- - SVM -->
    - Neural networks 
      - FeedForward 
      - CNN
      - RNN 
      - Transformers
  - Decision Factors 
    - Complexity of the task 
    - Data: Type of data (structured, unstructured), amount of data, complexity of data 
    - Training speed 
    - Inference requirements: compute, latency, memory 
    - Continual learning  
    - Interpretability 
  - [Popular NN architectures](./mlsd-modeling-popular-archs.md)
    
- Dataset 
  - Sampling
    - Non-probabilistic sampling
    - Probabilistic sampling methods
      - random, stratified, reservoir, importance sampling
  - Data splits (train, dev, test)
    - Portions
    - Splitting time-correlated data (split by time)
      - seasonality, trend  
    - Data leakage:
      - scale after split,
      - use only train split for stats, scaling, and missing vals

  - Class Imbalance 
    - Resampling
    - weighted loss fcn
    - combining classes  

- Model training 
  - Loss functions 
    - MSE, Binary/Categorical CE, MAE, Huber loss, Hinge loss, Contrastive loss, etc
  - Optimizers
    - SGD, AdaGrad, RMSProp, Adam, etc
  - Model training 
    - Training from scratch or fine-tune  
  - Model validation  
  - Debugging <!-- - More on Debugging (TODO) -->
  - Offline vs online training  

  - Model offline evaluation

  - Hyper parameter tuning 
    - Grid search 

  - Iterate over MVP model
      - Model Selection
      - Data augmentation
      - Model update frequency
  - Model calibration

## 7. Prediction Service

- Data processing and verification
- Web app and serving system
- Prediction service
- Batch vs Online prediction
  - Batch: periodic, pre-computed and stored, retrieved as needed - high throughput
  - Online: predict as request arrives - low latency
  - Hybrid: e.g. Netflix: batch for titles, online for rows
- Nearest Neighbor Service
  - Approximate NN 
    - Tree based, LSH, Clustering based 
- ML on the Edge (on-device AI)
  - Network connection/latency, privacy, cheap
  - Memory, compute power, energy constraints  
  - Model Compression
    - Quantization
    - Pruning
    - Knowledge distillation
    - Factorization

## 8. Online Testing and Model Deployment

- A/B Experiments
  - How to A/B test?
    - what portion of users?
    - control and test groups
    - null hypothesis
- Bandits
- Shadow deployment
- Canary release

## 9. Scaling, Monitoring, and Updates

- Scaling for increased demand (same as in distributed systems)
  - Scaling general SW system (distributed servers, load balancer, sharding, replication, caching, etc)
    - Train data / KB partitioning
  - Scaling ML system
    - Distributed ML 
      - Data parallelism (for training)
      - Model parallelism (for training, inference)
        - Asynchronous SGD 
        - Synchronous SGD 
    - [Distributed training]()
      - Data parallel DT, RPC based DT   
    - Scaling data collection 
      - [MT for 1000 languages](https://arxiv.org/abs/2205.03983)
      - [NLLB](https://research.facebook.com/publications/no-language-left-behind/)
    - Monitoring, failure tolerance, updating (below)
    - Auto ML (soft: HP tuning, hard: arch search (NAS))
- Monitoring:
  - Logging
    - Features, predictions, metrics, events
  - Monitoring metrics
    - SW system metrics
    - ML metrics (accuracy related, predictions, features)
      - Online and offline metric dashboards  
  - Monitoring data distribution shifts
    - Types: Covariate, label and concept shifts
    - Detection (stats, hypothesis testing)
    - Correction
- System failures
  - SW system failure
    - dependency, deployment, hardware, downtime
  - ML system failure
    - data distribution difference (test vs online)
    - feedback loops
    - edge cases (e.g. invalid/junk input)
    - data distribution changes
  - Alarms
    - failures (data pipeline, training, deployment), low metrics, etc
- Updates: Continual training
  - Model updates
    - train from scratch or a base model
    - how often? daily, weekly, monthly, etc
  - Auto update models 
  - Active learning 
  - Human in the loop ML  
