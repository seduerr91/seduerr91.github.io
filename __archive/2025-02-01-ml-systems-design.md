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

---
1. PROBLEM FORMULATION
---

1.1 Clarifying Questions
• Confirm the overall use case(s) and business goals.  
• Identify constraints on data, timeline, budget, and resources.

1.2 Requirements
• Scope: Which features are needed? At what scale? Will personalization be required?  
• Performance: Desired prediction latency and throughput (e.g., 100 ms latency for real-time inference).  
• Constraints: Legal, privacy, compute, budget, and compliance constraints.  
• Data: Availability and reliability of data sources.

1.3 Assumptions
• ML Category: Binary classification, multi-class classification, regression, unsupervised learning, etc.  
• Feasibility: Are business goals and data constraints realistic for the ML approach?

---
2. METRICS (OFFLINE AND ONLINE)
---

2.1 Offline Metrics
Used to measure how well a model performs on validation or test data, before a live deployment.

2.1.1 Classification Metrics  
• Precision  
  – Definition: Proportion of predicted positives that are truly positive.  
  – Example: In spam detection, high precision means fewer legitimate emails incorrectly labeled as spam.  
  – Code (sklearn): precision_score(y_true, y_pred)

• Recall  
  – Definition: Proportion of actual positives that the model correctly identifies.  
  – Example: In medical diagnosis, high recall means fewer diseased patients missed.  
  – Code (sklearn): recall_score(y_true, y_pred)

• F1 Score  
  – Definition: Harmonic mean of precision and recall.  
  – Example: Useful for imbalanced data (e.g., rare diseases).  
  – Code (sklearn): f1_score(y_true, y_pred)

• ROC AUC  
  – Definition: Ability of the classifier to rank positive samples higher than negatives.  
  – Range: 0.0 to 1.0 (higher is better).  
  – Code (sklearn): roc_auc_score(y_true, prob_pred)

• Log Loss  
  – Definition: Measures the penalty for incorrect probabilistic predictions.  
  – Code (sklearn): log_loss(y_true, prob_preds)

2.1.2 Retrieval and Ranking Metrics  
• Precision@k  
  – Definition: Precision of the top k returned results.  
  – Example: Evaluating the top-10 retrieval results in a search engine.

• Mean Average Precision (mAP)  
  – Definition: Computes average precision across multiple cutoff points (k).  
  – Example: Commonly used for information retrieval and recommendation tasks.

• Normalized Discounted Cumulative Gain (nDCG)  
  – Definition: Accounts for ranking quality by penalizing relevant items placed lower.  
  – Code (sklearn): ndcg_score(y_true, y_pred)

2.1.3 Regression Metrics  
• Mean Squared Error (MSE)  
  – Definition: Average of squared differences between predictions and labels.  
  – Code (sklearn): mean_squared_error(y_true, y_pred)

• Mean Absolute Error (MAE)  
  – Definition: Uses absolute differences instead of squared errors.

2.2 Online Metrics
Used to measure performance in a live environment.  
• CTR (Click-Through Rate)  
• Engagement Rate (likes, comments)  
• Conversion Rate  
• Revenue Lift  
• Reciprocal Rank of First Click  
• Negative feedback (e.g., hides, reports)

---
3. ARCHITECTURAL COMPONENTS (MVP LOGIC)
---

3.1 High-Level Architecture
• Non-ML Components:  
  – User, front-end app server, databases, knowledge graphs.  
• ML Components:  
  – Candidate generators, rankers, filtering modules.  
  – Training-data generator.

3.2 Modular Architecture Design
• Model 1 (e.g., Candidate Generation)  
• Model 2 (e.g., Ranker or Filter)  

---
4. DATA COLLECTION AND PREPARATION
---

4.1 Data Needs
• Target variables.  
• Major entities or “actors” (e.g., users, items).  
• Data types (image, text, video, etc.) and volumes.

4.2 Data Sources
• Availability and costs.  
• Implicit Signals (e.g., user logs) vs. Explicit Labels (e.g., user surveys).

4.3 Data Storage
• Appropriate storage solutions (databases, data lakes, etc.).

4.4 ML Data Types
• Structured  
  – Numerical (discrete, continuous)  
  – Categorical (ordinal, nominal)  
• Unstructured  
  – Images, text, video, audio

4.5 Labeling (For Supervised Learning)
• Natural Labels: e.g., clicks, likes, purchases.  
  – Caveat: Missing negatives (non-click ≠ negative). Often requires negative sampling.  
• Explicit User Feedback  
• Human Annotation: Expensive, slow, privacy concerns.  
• Lack of Labels: Programmatic labeling, semi-supervised, weak supervision, etc.  
• Transfer Learning: Pre-training on large data (GPT-3), then fine-tuning.  
• Active Learning: Iteratively label critical samples.  
• Labeling Cost/Trade-Offs

4.6 Data Augmentation
• Especially for image, text, or when data is limited.

4.7 Data Generation Pipeline
• Collection / Ingestion (offline, online).  
• Feature generation and transformation.  
• Label generation.  
• Joining datasets into a training-ready format.

---
5. FEATURE ENGINEERING
---

5.1 Choosing Features
• Identify “actors” (user, item, document, query, ad, context).  
• Actor-specific features (current behavior, historical data).  
• Cross Features (user-item, query-document).  
• Privacy constraints and compliance.

5.2 Feature Representation
• One-Hot Encoding for categorical variables.  
• Embeddings: For text, images, users, etc.  
• Scaling & Normalization for numerical features.

5.3 Preprocessing for Unstructured Data
• Text: Tokenization, normalization.  
• Images: Resizing, normalizing.  
• Video: Frame sampling, resizing.

5.4 Handling Missing Values

5.5 Feature Importance
• Identifying which features significantly affect your model.

5.6 Featurizer: Transforms raw data (logs, images, text) into structured features.

5.7 Static vs. Dynamic Features
• Static: Generated periodically and stored in a feature store.  
• Dynamic: Computed in real-time or near-real-time.

---
6. MODEL DEVELOPMENT AND OFFLINE EVALUATION
---

6.1 Model Selection (MVP)
• Start Simple: Heuristics → Simple model (logistic regression) → More complex models → Ensembles.  
• Typical Choices:  
  – Logistic Regression  
  – Decision Trees, Random Forest, GBDT (XGBoost)  
  – Neural Networks (CNN, RNN, Transformers)

6.2 Decision Factors
• Complexity of the task.  
• Type and amount of data (structured vs. unstructured).  
• Training speed vs. inference speed.  
• Interpretability requirements.

6.3 Dataset Preparations
• Sampling (random, stratified, reservoir).  
• Splits (train, dev, test).  
  – Watch out for time correlation and data leakage.  
• Class Imbalance Handling: Oversampling, undersampling, or weighted loss.

6.4 Model Training
• Common Loss Functions: MSE, Cross-Entropy, Huber, etc.  
• Optimizers: SGD, Adam, Adagrad, RMSProp.  
• Training Approach: From scratch or fine-tuned from pre-trained models.  
• Offline Evaluation: Validate with offline metrics (precision, recall, etc.).  
• Hyperparameter Tuning: Grid search, random search, Bayesian optimization.  
• Model Calibration

---
7. PREDICTION SERVICE
---

7.1 Deployment Architecture
• Data processing and verification pipelines.  
• Web app or API-based serving system.  
• Prediction endpoints.

7.2 Batch vs. Online Prediction
• Batch Inference: Periodic, high throughput, results stored for later lookup.  
• Online Inference: Low latency, real-time predictions.  
• Hybrid Approaches: E.g., Netflix uses batch for generating row recommendations, online for personalizing item ranks.

7.3 Nearest Neighbor Service
• Approximate Nearest Neighbor (ANN):  
  – Tree-based, Locality-Sensitive Hashing (LSH), Clustering-based methods.

7.4 ML on the Edge
• On-device AI for lower latency, privacy, offline scenarios.  
• Model Compression: Quantization, pruning, distillation, factorization.

---
8. ONLINE TESTING AND MODEL DEPLOYMENT
---

8.1 A/B Testing
• Partition users into control vs. test groups.  
• Track metrics (CTR, conversion, etc.) to validate improvement.

8.2 Bandits
• Adaptive approach to serving variations based on reward signals.

8.3 Shadow Deployment
• Release model in parallel with production, but not influencing live outputs.

8.4 Canary Release
• Roll out to a small percentage of traffic first; expand if successful.

---
9. SCALING, MONITORING, AND UPDATES
---

9.1 Scaling the System
• General Software Scaling: Distributed servers, load balancing, caching, etc.  
• ML-Specific Scaling:  
  – Distributed Training (Data Parallelism, Model Parallelism).  
  – Large-scale data ingestion.  
  – AutoML: Hyperparameter tuning, neural architecture search.

9.2 Monitoring
• Logging: Store metadata on features, predictions, events, latencies.  
• Monitoring Metrics:  
  – System Metrics: CPU, memory, network usage.  
  – ML Metrics: Online CTR, offline accuracy, drift detection, etc.  
• Data Distribution Shifts:  
  – Covariate shift, label shift, concept drift.  
  – Detection: Statistical methods, hypothesis testing.  
  – Remediation: Retraining, updating data pipelines.

9.3 System Failures
• Software Failures: Dependency issues, hardware downtime, deployment failures.  
• ML Failures: Distribution mismatch, feedback loops, invalid inputs, changing data.  
• Alerting: Automated alarms when pipelines fail or metrics degrade.

9.4 Model Updates and Continual Training
• Frequency of retraining (daily, weekly, monthly).  
• Auto-updating models and active learning strategies.  
• Human-in-the-Loop ML to verify edge cases or correct model drift.

---
SUMMARY
---
• Start each project by clarifying the problem, data, and constraints.  
• Choose and monitor appropriate offline/online metrics.  
• Keep the architecture modular—separate candidate generation, ranking, and filtering.  
• Ensure reliable data pipelines and a robust feature engineering process.  
• Validate models rigorously offline, then deploy carefully with A/B tests, canary releases, and ongoing monitoring.  
• Scale the system to handle large data and traffic, using distributed training/inference and robust devops practices.  
• Continuously monitor for model drift or failures and plan for regular model updates.

This structure offers an end-to-end blueprint for building and sustaining a modern, effective ML system, from initial framing to post-deployment maintenance and iteration.