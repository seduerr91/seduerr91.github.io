---
title: ML Engineering Concepts
tags: [Coding]
style: fill
color: secondary
description: Metrics, and other concepts in ML Engineering
---

# Offline Metrics 

These offline metrics are commonly used in search, information retrieval, and recommendation systems to evaluate the quality of results or recommendations:

### Recall@k:
  - Definition: Recall@k evaluates the fraction of relevant items retrieved among the top k recommendations over total relevant items. It measures the system's ability to find all relevant items in a fixed-sized list.
  - Use Case: In information retrieval and recommendation systems, Recall@k is crucial when it's essential to ensure that no relevant items are missed in the top k recommendations.

### Precision@k:

  - Definition: Precision@k assesses the fraction of retrieved items that are relevant among the top k recommendations. It measures the system's ability to provide relevant content at the top of the list.
  - Use Case: Precision@k is vital when there's a need to present users with highly relevant content in the initial recommendations. It helps in reducing user frustration caused by irrelevant suggestions.

### Mean Reciprocal Rank (MRR):

  - Definition: MRR measures the effectiveness of a system in ranking the most relevant items at the top of a list. It calculates the average of reciprocal ranks of the first correct item found in each ranked list of results: 
  MRR = 1/m \Sum(1/rank_i)
  - Use Case: MRR is often used in search and recommendation systems to assess how quickly users find relevant content. It's particularly useful when there is only one correct answer or when the order of results matters.

### Mean Average Precision (mAP):

  - Definition: mAP computes the average precision across multiple queries or users. Precision is calculated for each query, and the mean of these precisions is taken to provide a single performance score.
  - Use Case: mAP is valuable in scenarios where there are multiple users or queries, and you want to assess the overall quality of recommendations or search results across a diverse set of queries. mAP works well for binary relevances. For continues scores, we use nDCG. 

### Discounted Cumulative Gain (DCG):
  - Definition: Discounted Cumulative Gain (DCG) is a widely used evaluation metric primarily applied in the fields of information retrieval, search engines, and recommendation systems.
    - DCG quantifies the quality of a ranked list of items or search results by considering two key aspects:
      1. Relevance: Each item in the list is associated with a relevance score, which indicates how relevant it is to the user's query or preferences. Relevance scores are typically on a scale, with higher values indicating greater relevance.
      2. Position: DCG takes into account the position of each item in the ranked list. Items appearing higher in the list are considered more important because users are more likely to interact with or click on items at the top of the list.
    - DCG calculates the cumulative gain by summing the relevance scores of items in the ranked list up to a specified position.
    - To reflect the decreasing importance of items further down the list, DCG applies a discount factor, often logarithmic in nature.
  - Use case: 
    - DCG is employed to evaluate how effectively a system ranks and presents relevant items to users.
    - It is instrumental in optimizing search and recommendation algorithms, ensuring that highly relevant items are positioned at the top of the list for user engagement and satisfaction.

### Normalized Discounted Cumulative Gain (nDCG):

  - Definition: nDCG measures the quality of a ranked list by considering the graded relevance of items. It discounts the relevance of items as they appear further down the list and normalizes the score. It is calculated as the fraction of DCG over the Ideal DCG(IDCG) for an ideal ranking. 
  - Use Case: nDCG is beneficial when relevance is not binary (i.e., there are degrees of relevance), and you want to account for the diminishing importance of items lower in the ranking.

## Cross Entropy and Normalized Cross Entropy 
- The CE (also a loss function), measures how well the predicted probabilities align with the true class labels. It's defined as:

    - For binary classification:
    CE = - [y * log(p) + (1 - y) * log(1 - p)]
    
    - For multi-class classification:
    CE = - Σ(y_i * log(p_i))
    
    Where:
    - y is the true class label (0 or 1 for binary, one-hot encoded vector for multi-class).
    - p is the predicted probability assigned to the true class label.
    - The negative sign ensures that the loss is minimized when the predicted probabilities match the true labels. (the lower the better)
- NCE: CE(ML model) / CE(simple baseline)

### Ranking:
* Precision @k and Recall @k not a good fit (not consider ranking quality of out) 
* MRR, mAP, and nDCG good: 
  * MRR: focus on rank of 1st relevant item 
  * nDCG: relevance b/w user and item is non-binary 
  * mAP: relevance is binary 
* Ads ranking: NCE 
  
# Online metrics 
* CTR 


- Definition:

    - Click-Through Rate (CTR) is a metric that quantifies user engagement with a specific item or element, such as an advertisement, a search result, a recommended product, or a link.
    - It is calculated by dividing the number of clicks on the item by the total number of impressions (or views) it received.
    - Formula for CTR:
      CTR= Number of Clicks/Number of Impressions ×100%

    - Impressions: Impressions refer to the total number of times the item was displayed or viewed by users. For ads, it's the number of times the ad was shown to users. For recommendations, it's the number of times an item was recommended to users.

- Use Cases:
  - Online Advertising campaigns: widely used to assess how well ads are performing. A high CTR indicates that the ad is compelling and relevant to the target audience.
  - Recommendation Systems: CTR is used to measure how effectively recommended items attract user clicks.
- Search Engines: CTR is used to evaluate the quality of search results. High CTR for a search result indicates that it was relevant to the user's query.

* Conversion Rate: Conversion Rate measures the percentage of users who take a specific desired action after interacting with an item, such as making a purchase, signing up for a newsletter, or filling out a form. It helps assess the effectiveness of a call to action.

* Bounce Rate: Bounce Rate calculates the percentage of users who visit a webpage or view an item but leave without taking any further action, such as navigating to another page or interacting with additional content. A high bounce rate may indicate that users are not finding the content engaging.

* Engagement Rate: Engagement Rate evaluates the level of user interaction and participation with content or ads. It can include metrics like comments, shares, likes, or time spent on a webpage. A high engagement rate suggests that users are actively involved with the content.

* Time on Page: Time on Page measures how long users spend on a webpage or interacting with a specific piece of content. It helps evaluate user engagement and the effectiveness of content in holding user attention.

* Return on Investment (ROI): ROI assesses the financial performance of an advertising or marketing campaign by comparing the costs of the campaign to the revenue generated from it. It's crucial for measuring the profitability of marketing efforts.

# Feature Engineering


## Feature preprocessing 

### Text preprocessing 
normalization -> tokenization -> token to ids
* normalization 
* tokenization 
  * Word tokenization 
  * Subword tokenization 
  * Character tokenization 
* token to ids
  * lookup table 
  * Hashing 


### Text encoders: 
Text -> Vector (Embeddings) 
Two approaches: 
  - Statistical 
    - BoW: converts documents into word frequency vectors, ignoring word order and grammar
    - TF-IDF: evaluates the importance of a word (term) in a document relative to a collection of documents. It is calculated as the product of two components:

      - Term Frequency (TF): This component measures how frequently a term occurs in a specific document and is calculated as the ratio of the number of times a term appears in a document (denoted as "term_count") to the total number of terms in that document (denoted as "total_terms"). The formula for TF is:

        TF(t, d) = \frac{\text{term_count}}{\text{total_terms}}

      - Inverse Document Frequency (IDF): This component measures the rarity of a term across the entire collection of documents and is calculated as the logarithm of the ratio of the total number of documents in the collection (denoted as "total_documents") to the number of documents containing the term (denoted as "document_frequency"). The formula for IDF is:

        IDF(t) = \log\left(\frac{\text{total_documents}}{\text{document_frequency}}\right)

      The final TF-IDF score for a term "t" in a document "d" is obtained by multiplying the TF and IDF components:
      TF-IDF(t,d)=TF(t,d)×IDF(t)
  
  - ML encoders 
    - Embedding (look up) layer:  a trainable layer that converts categorical inputs, such as words or IDs, into continuous-valued vectors, allowing the network to learn meaningful representations of these inputs during training.
    - Word2Vec: based on shallow neural networks and consists of two main approaches: Continuous Bag of Words (CBOW) and Skip-gram.

      - CBOW (Continuous Bag of Words):

        In CBOW, the model predicts a target word based on the context words (words that surround it) within a fixed window.
        It learns to generate the target word by taking the average of the embeddings of the context words.
        CBOW is computationally efficient and works well for smaller datasets.
      - Skip-gram:

        In Skip-gram, the model predicts the context words (surrounding words) given a target word.
        It learns to capture the relationships between the target word and its context words.
        Skip-gram is particularly effective for capturing fine-grained semantic relationships and works well with large datasets.
      
      Both CBOW and Skip-gram use shallow neural networks to learn word embeddings. The resulting word vectors are dense and continuous, making them suitable for various NLP tasks, such as sentiment analysis, language modeling, and text classification. 

    - transformer based e.g. BERT: consider context, different embeddings for same words in different context  


### Video preprocessing 
Frame-level: 
Decode frames -> sample frames -> resize -> scale, normalize, color correction 
#### Video encoders: 
  - Video-level
    - process whole video to create an embedding 
    - 3D convolutions or Transformers used 
    - more expensive, but captures temporal understanding
    - Example: ViViT (Video Vision Transformer)
  - Frame-level (from sampled frames and aggregate frame embeddings)
    - less expensive (training and serving speed, compute power) 
    - Example: ViT (Vision Transformer)
      - by dividing images into non-overlapping patches and processing them through a self-attention mechanism, enabling it to analyze image content; it differs from the original Transformer, which was initially designed for sequential data, like text, and relied on 1D positional encodings.

# Building Efficient ML Training Pipelines: Best Practices and Strategies

Designing an efficient and scalable Machine Learning (ML) training pipeline is crucial for handling large datasets and achieving optimal performance. This blog delves into various key components, such as data formats, partitioning strategies, handling imbalanced labels, generating labeled datasets, train/test splits, and continuous retraining. 

---

### **1. Training Pipeline Design: Cost-Efficiency with Scalable Data Formats**

Large-scale ML training pipelines often deal with **high data volumes**, necessitating efficient data processing and storage solutions. Column-oriented formats like **Parquet**, **Avro**, and **ORC** are popular because they provide high throughput and cost-effectiveness. Here’s why they work:

- **Column-Based Designs**: Ideal for both analytics and ML tasks since only relevant columns are read during computation, speeding up query times significantly compared to row-based formats like CSV.
- **Low Storage Costs**: Efficient compression techniques save storage costs.
- **Use Case-Specific Formats**: For TensorFlow, the `tfrecord` format stores data sequences as binary records, making it optimized for TensorFlow-based workflows.

---

### **2. Data Partitioning: Organizing Big Data for Speed and Scalability**

Data partitioning optimizes model training and accelerates queries. Common partitioning practices include:

- **Time-Based Partitioning**: Datasets are split by attributes (e.g. year, month). For example, Parquet and ORC files are commonly partitioned in directory structures like `year=2020/month=01` as shown in the image above.
  
Advantages of time-partitioning include:
- **Efficiency**: Reduces unnecessary scans within irrelevant partitions.
- **Parallelism**: Facilitates distributed and parallel training workflows.

In AWS environments, services such as **Amazon Athena** and **Redshift** natively support optimized querying on Parquet and ORC, making data analysis up to **30x faster** while reducing **99% of costs** in comparison to CSV.

---

### **3. Tackling Imbalanced Class Distributions**

Several ML problems, such as **fraud detection** or **spam filtering**, grapple with highly imbalanced class distributions (e.g., 0.2% positive labels). This can result in models heavily biased towards the majority class. Key solutions include:

#### **a. Class Weights in Loss Functions**
- Adjust the loss function to penalize the majority class more heavily. For example, this encourages models to focus on minority classes in imbalanced classification problems.

#### **b. Resampling Approaches**
- **Naive Resampling**: Downsampling the dominant class or upsampling the minority class. Testing/validation datasets should remain intact.
- **Synthetic Resampling (SMOTE)**: Synthesizing new samples for the minority class by interpolating between nearest neighbors. Though effective, SMOTE may not scale well for industrial-scale datasets.

#### **c. Downsampling in Practice**
Large-scale companies (like Facebook and Google) often downsample the majority class for faster training while maintaining accurate model calibration by *upweighting* the majority-class samples post-training.

---

### **4. Generating Label Data for ML Models**

The lack of labeled data often poses a challenge, especially in new systems. Several strategies to generate labels include:

- **Implicit User Signals**: In recommendation systems, signals like clicks or views are used as implicit feedback to model user behavior.
- **Cold Start Solutions**: For example, users onboarding to **LinkedIn Learning** may be surveyed about their preferred skills. Alternatively, leveraging existing user profile data can provide a foundation for generating relevance scores between users and items.

### **Example: LinkedIn Course Recommendations**
For LinkedIn Learning, a **skill-based model** maps members' skills with courses by:
1. Mapping users and courses to skills via profile descriptions and manually labeled categories.
2. Computing an affinity score that predicts the relevance between a user's skills and a course's content.

By integrating supervised learning and skill correlations into semi-supervised models, systems achieve wider course coverage and reliable performance.

---

### **5. Structuring Train/Test Splits**

Proper data splitting ensures robust model evaluation. Key considerations include:
- **Chronological Splits**: Time-sensitive use cases (like forecasting) require preserving the chronological order of events. It’s ineffective to use future data to predict past behaviors.
- **Sliding/Expanding Windows**: For time series models, incremental training windows (e.g., every 10 days) help simulate real-world forecasting scenarios.

#### **Case Study: Uber's Sliding and Expanding Windows**
Models are evaluated across overlapping time windows to ensure predictions align with recent trends in user behavior.

---

### **6. Retraining: Coping with Non-stationary Data**

Data distribution shifts over time, necessitating continuous retraining for ML systems to remain effective. Retraining pipelines should balance complexity with training time. Retraining strategies include:

#### **a. Four Levels of Retraining**
- **Level 0: Train and Forget**: Useful for static problems with unchanging data distributions.
- **Level 1: Cold-Start Retraining**: Periodically rebuilding the model from a batch dataset.
- **Level 2: Near-Line Retraining**: Incorporates newer data in streaming pipelines for key components asynchronously.
- **Level 3: Warm-Start Retraining**: Applies to personalized systems by tuning user-specific components once sufficient data is accumulated.

#### **b. Practical Examples**
AdTech and recommendation systems frequently retrain models multiple times daily to reflect changes in user preferences and trending content on platforms.

---

### **Conclusion**

Efficient ML pipelines demand robust data management, balancing scale with cost, and carefully engineering strategies like partitioning, resampling, feature generation, and retraining. By adopting these methods, organizations can ensure their models are adaptable, scalable, and optimized for real-world challenges. 

Whether you're dealing with data partitioning for distributed training or proactively addressing class imbalances, the insights shared here reflect best industrial practices for building machine learning solutions at scale.

# Loss Functions and Metrics Evaluation in Machine Learning: A Comprehensive Guide

Machine learning (ML) success heavily depends on selecting appropriate **loss functions** and **evaluation metrics**. These choices significantly impact model training, optimization, and performance interpretation across regression, classification, and forecasting tasks. Here's a detailed guide to some key loss functions and evaluation metrics, along with insights on practical applications.

---

## **1. Understanding Regression Loss**

### **1.1 Mean Squared Error (MSE) vs. Mean Absolute Error (MAE): Choosing the Right Metric**

#### **Mean Squared Error (MSE)**  
MSE assesses the average squared differences between actual values (`target`) and model predictions.  

\[
MSE = \frac{1}{n} \sum_{i=1}^{n} (\text{target}_i - \text{prediction}_i)^2
\]

Example:  
- A dataset has four predictions: `[30, 32, 31, 35]` and actuals: `[30, 29, 33, 36.8]`.  
  - **MSE** = `4.06`.  

> **Insight**: MSE amplifies errors, making it sensitive to outliers. It’s suitable for applications where large deviations must be heavily penalized.

#### **Mean Absolute Error (MAE)**  
MAE calculates the average of absolute differences between actual values and predictions.

\[
MAE = \frac{1}{n} \sum_{i=1}^{n} |\text{target}_i - \text{prediction}_i|
\]

Example:  
- Same dataset yields **MAE** = `1.7`.  

> **Insight**: Unlike MSE, MAE is robust to outliers. As a result, it works better in datasets with anomalies.

---

### **1.2 Huber Loss: A Smoother Alternative**

Huber loss combines the best of MSE and MAE, with lower sensitivity to outliers and a differentiable gradient.

\[
L = 
\begin{cases} 
\frac{1}{2} (\text{target} - \text{prediction})^2 &\text{if } |target - prediction| \leq \delta \\
\delta |target - prediction| - \frac{1}{2} \delta^2 & \text{otherwise} 
\end{cases}
\]

> **Insight**: Ideal for problems with moderate outliers where `\delta` (a tunable parameter) determines the trade-off between MSE and MAE.

---

### **1.3 Quantile Loss: Handling Asymmetry**

Used where **overestimation** and **underestimation** carry different costs (e.g., predicting arrival times).

\[
\text{Quantile Loss} = 
\begin{cases} 
\lambda |y - p| & \text{if } y < p \\
(1 - \lambda) |y - p| & \text{if } y \geq p
\end{cases}
\]

| **Application**: In scenarios like logistics predictions, where underestimating is more critical than overestimating.|  

---

## **2. Popular Classification Losses**

### **2.1 Cross-Entropy Loss**
Common in binary classification tasks, like **ad click prediction**, cross-entropy penalizes confident but incorrect predictions.

\[
CE = -\frac{1}{N} \sum_{i}^{N} \left( y_i \log(\hat{y_i}) + (1 - y_i) \log(1 - \hat{y_i}) \right)
\]

- Facebook leverages **Normalized Cross-Entropy (NCE)**, where the loss is normalized by the background click-through rate (CTR).

### **2.2 Focal Loss**
When handling class-imbalanced datasets (e.g., fraud detection), focal loss focuses the model on **hard-to-classify examples**.

\[
\text{FL}(p_t) = -(1-p_t)^\gamma \log(p_t)
\]

> **Insight**: Setting `\gamma = 0` converts focal loss back to regular cross-entropy.

### **2.3 Hinge Loss**
Popular in **binary classification** using Support Vector Machines (SVMs), hinge loss penalizes correct predictions that lie close to the decision boundary.

\[
\text{Hinge Loss} = \max(0, 1 - y_i \hat{y_i})
\]

Used by companies like **Uber** for building recommendation engines.

---

## **3. Evaluation Metrics for Forecasting and Regression**

### **3.1 Mean Absolute Percentage Error (MAPE)**

\[
MAPE = \frac{1}{n} \sum_{i=1}^{n} \left| \frac{A_t - F_t}{A_t} \right|
\]

- **Pro**: Scale-independent and interpretable as a percentage.  
- **Con**: Sensitive to large outliers and can take undefined values when `A_t=0`.

---

### **3.2 Symmetric Mean Absolute Percentage Error (SMAPE)**

\[
\text{SMAPE} = \frac{100}{n} \sum_{i=1}^{n} \frac{|F_t - A_t|}{(|A_t| + |F_t|)/2}
\]

- **Pro**: Doesn’t penalize over-forecasting more than under-forecasting; bounded between 0% and 200%.  
- **Con**: Unstable when `A_t ≈ F_t ≈ 0`.  

---

## **4. Model Evaluation for Classification and Recommendation**

### **4.1 Area Under the Curve (AUC)**
The **ROC-AUC** score assesses a classifier's ability to separate positive and negative classes. A random classifier has an AUC of 0.5.

- Larger AUC values indicate better performance.  

---

### **4.2 Mean Average Precision (MAP) and Mean Reciprocal Rank (MRR)**

- **MAP**: Measures precision at each rank, weighted by relevance.  
- **MRR**: Popular in ranking tasks, MRR emphasizes the position of the **first relevant result**.

---

### **4.3 Discounted Cumulative Gain (DCG)**
Useful in search engines and recommendations, **DCG** rewards relevant documents appearing early in results:

\[
\text{DCG}_p = \sum_{i=1}^{p} \frac{\text{rel}_i}{\log_2(i + 1)}
\]

- **Normalized DCG (NDCG)** adjusts DCG scores relative to an ideal ranking for fair comparison.

---

## **Conclusion**

Selecting the right loss function and evaluation metric is pivotal in building reliable and accurate ML models. While **MSE** suits applications with high sensitivity to large errors, **Huber Loss** balances outliers. For classification, **Cross-Entropy** remains a staple, with specialized metrics like **Focal Loss** addressing class imbalances. When evaluating models, metrics like **AUC**, **MRR**, and **MAPE** provide practical insights tailored to end-use cases. By understanding their nuances, ML practitioners can make informed decisions to develop effective machine learning systems.

# Common Machine Learning Deployment Patterns: Strategies for Scaling and Reliability

Deploying machine learning models comes with unique challenges, ranging from workload balancing to managing high-dimensional embeddings and handling system bottlenecks. This blog explores some of the most prevalent deployment patterns, highlighting their architectural principles, use cases, and trade-offs.

---

## **1. Workload Balancing: Aggregator Services**
One of the most common patterns in production systems is managing workload balance during inference by distributing requests across multiple servers. This is typically achieved using an **Aggregator Service**.

### **How It Works**:
1. **Client Sends Request**: The client or upstream system sends an inference request to the aggregator service.  
2. **Load Distribution**: The aggregator splits workloads among a pool of workers.
   - Worker selection methods include **round-robin**, **workload-based selection**, or **based on request parameters**.  
3. **Response Forwarding**: Once the workers process requests, the aggregator forwards the results back to the client.

### **Use Case**:  
- Systems with heavy or non-uniform inference workloads, such as recommendation engines or fraud detection models, rely on this architecture for scalability and fault tolerance.

---

## **2. Serving Logic and Multiple Models**
Modern systems often require **customized model serving** for specific user groups or devices. This architecture is particularly useful in **ad ranking** or **personalization systems**.

### **Implementation**:
- **Routing Based on Logic**: The client request is routed to different models based on predefined conditions like the user’s device type or geographic region.
    - Example: Separate models for **iOS** and **other mobile users**.
  
### **Trade-offs**:  
1. **Advantages**:  
   - Fine-tune models for specific user cohorts, improving accuracy.  
2. **Disadvantages**:  
   - Increased complexity with multiple deployed models.  
   - Risk of insufficient training data for smaller cohorts.  

---

## **3. Serving Embeddings for High-Dimensional Features**
Many enterprises like LinkedIn deploy embedding-based architectures at scale to process user and entity representations. This enables advanced capabilities such as **recommendations**, **similarity searches**, and **semantic matching**.

### **Deployment Stages**:
1. **Offline Training**:  
   - Joins observations and features (e.g., user demographics, job listings) from a **feature marketplace**.  
   - Trains models using architectures like the **pyramid two-tower design** optimized for **high cardinality features**.

2. **Offline Serving**:  
   - Precomputed embeddings are stored in systems such as **key-value stores** or **Frame Feature Marketplaces** for offline querying.

3. **Nearline Serving**:  
   - For real-time requests (e.g., a user posting a job), embeddings are recomputed via **streaming pipelines** and stored across distributed systems like **Kafka** for real-time use.

---

## **4. Approximate Nearest Neighbor Search (ANN)**
When handling billions of high-dimensional items (e.g., embeddings of users, jobs, or products), matching similar items efficiently requires **Approximate Nearest Neighbor (ANN)** methods.

### **Popular Libraries**:
- **FAISS (Facebook AI Similarity Search)**: Optimized for fast similarity search on billions of vectors.  
- **ScaNN (Google)**: Focused on accelerating search tasks.  

### **Example Use Case**:  
- **Semantic Search** in platforms like Onebar uses **word embeddings** to match queries with contextually similar results.

---

## **5. Ad Ranking System: End-to-End Pipeline Deployment**
Ad ranking systems are a critical use case for real-time model deployment. Below is a logical deployment pattern for such systems:

### **Architecture Components**:
1. **Data Storage**:  
   - Stores ad campaign data, user information, and features that frequently update.  
   - Frequently updating features, such as number of clicks within the past 24 hours, are handled by systems like **Amazon DynamoDB** for real-time storage.

2. **Separate Retrieval and Ranking Services**:
   - **Retrieval Service**: Filters relevant ads for a query based on high-level features.
   - **Ranking Service**: Scores the retrieved ads using ML models to display the best results.

3. **Model Storage**:  
   - Stores versioned ML models (e.g., on **AWS S3**). The ranking service fetches the latest model for improved scalability and performance.

### **Why Decouple Retrieval and Ranking?**  
- **Differing Scalability Needs**: Retrieval requires broader filtering capabilities, while ranking focuses on scoring.  
- **Team Independence**: These components are often built by separate teams with specialized expertise.  

---

## **6. Handling Training-Serving Skew**
One common issue in ML systems is a mismatch between data processing in training and serving (training-serving skew).

### **Solutions**:
1. **Data Logging**: Log processed data during both training and serving to ensure consistency.  
2. **Log Rotation**: Manage large log files to avoid exhausting disk space. Kubernetes can redirect logs to containerized services, sending them to a backend pipeline for analysis.

---

## **7. Scaling Deployment with Kubernetes**
Kubernetes is widely used to scale retrieval and ranking services in modern ML systems.

### **Scaling Options**:
1. **Manual Tuning**: Operators set fixed resource levels, such as the number of pods or instances.  
2. **Autoscaling**:  
   - **Demand-Based Autoscaling**: Scales up when requests exceed thresholds and cools down when demand decreases.  
   - **Resource-Based Autoscaling**: Scales based on **CPU** or **memory utilization**, though less effective for I/O-heavy applications.

---

## **8. Real-Time Feature Updates**
Some ad-ranking features, like user activity metrics, require frequent updates to ensure model accuracy. Updating these metrics in near real-time involves:

1. **Using Frameworks**: Preprocessing steps are encapsulated in frameworks like **TensorFlow Transform**, ensuring version stability.  
2. **Graceful Shutdowns**: Services must gracefully manage state during updates or scaling to prevent data inconsistency.

---

## **Conclusion**
The deployment of machine learning systems poses distinct challenges that demand thoughtful architectural planning. Patterns such as **Aggregator Services** and **Embedding Pipelines** enable scalability, while **deployment practices in Kubernetes** ensure reliability and flexibility. Understanding these patterns allows companies to not only maximize system efficiency but also maintain the agility to adapt as their systems grow and evolve. By employing these strategies, organizations can prepare for the future while handling scale and complexity today.

# Common Components of Modern Recommendation Systems  

Recommendation systems are foundational to personalization in platforms like YouTube, Pinterest, and e-commerce sites. These systems consist of **candidate generation**, **ranking**, and **re-ranking** components, each playing a key role in narrowing down massive datasets into specific recommendations tailored to users. Here, we explore the functionalities, techniques, and trade-offs of modern recommendation system components.

---

## **1. Candidate Generation**  

The first step in a recommendation pipeline is to reduce a **large pool of candidates** (e.g., millions of items) to a **smaller subset** (hundreds or thousands). This step can leverage **content-based filtering** or **collaborative filtering**.

### **1.1 Content-Based Filtering**  
Content-based filtering recommends items similar to what a user has previously interacted with or liked, based on item attributes.

#### Example:  
- **App Recommendations**: A binary feature matrix links apps to their categories (e.g., "Education" or "Health"). Recommendations are generated by calculating similarity scores between apps using metrics like the dot product.

#### **Pros**:  
- Scales easily as it doesn’t depend on other users’ data.  
- Tailored recommendations for users with niche preferences.  

#### **Cons**:  
- Cannot introduce new interests beyond a user’s historical preferences.  
- Does not leverage collaborative data for enhanced recommendations.  

---

### **1.2 Collaborative Filtering**  
Collaborative filtering learns from the **interactions of similar users** to recommend items. This approach simultaneously considers relationships between items and users.

#### Example:  
- **Movie Recommendations**: If User A likes movies that User B also likes, movies that User B enjoyed but User A hasn’t seen are recommended to User A.  
- Achieved through **matrix factorization** to derive user and item embeddings.

#### **Trade-offs of Algorithms**:  
- **Stochastic Gradient Descent (SGD)**: Flexible for customizing loss functions but computationally expensive for sparse data.  
- **Weighted Alternating Least Squares (WALS)**: Faster convergence and easier handling of unobserved interactions.

#### **Scalability Extensions**:  
- Pinterest generates candidates based on **item co-occurrences** in user-created boards. **Online random walks** and embeddings like **Pins2Vec** further enhance candidate selection by capturing item relationships.  

---

## **2. Ranking**  

Ranking involves scoring the smaller, generated candidate pool to select a final list of items for the user. It’s applied using machine learning models that prioritize relevance based on user preferences and item attributes.

### **Ranking Approaches**:
1. **Pointwise Ranking**:  
   - Evaluates and assigns a score to each candidate independently.  
   - Example: Search engines sort results based on predicted relevance scores.

2. **Pairwise Ranking**:  
   - Directly compares two candidates, outputting a ranked order.  
   - Example: RankNet learns to indicate which result is more relevant in a pair of candidates.  

3. **Listwise Ranking**:  
   - Optimizes the order of the entire ranked list (e.g., using metrics like **nDCG**).  

---

### **Techniques in Practice**:
- **YouTube** combines multiple candidate generation algorithms, such as topic-based similarity, collaborative filtering, and embedding-based methods, before ranking videos using models like **Wide & Deep networks**.

---

## **3. Re-Ranking**  

The final stage tailors recommendations by incorporating additional constraints or rules. Re-ranking addresses practical considerations including **diversity**, **freshness**, **fairness**, and **removal of undesired content** (e.g., clickbait).

### **Techniques**:
1. **Filters**:  
   - Remove items the user explicitly dislikes or enforce exclusion criteria (e.g., removing political content).  

2. **Score Adjustments**:  
   - Boost candidates’ scores based on properties like recency, relevance, or diversity.  

3. **Promoting Freshness**:  
   - Incorporate usage data such as content age or recent user interactions.  
   - Retrain models frequently or adopt techniques like **warm-start training** to quickly incorporate new data.  

4. **Diversity**:  
   - Avoid overly similar candidates by ensuring variety in attributes like genres or themes. Diversity improves user satisfaction by exposing multifaceted recommendations.  

5. **Fairness**:  
   - Train separate models for underrepresented user groups.  
   - Regularly assess both online and offline performance metrics across demographics to mitigate unconscious data biases.  

---

## **4. Enhancing Recommendation Quality**  

Recommendation system performance may suffer from systemic issues like **position bias** or mismatched feedback in training data.

### **Position Bias**  
The likelihood of a user clicking on a result depends on its position, regardless of its relevance.  
- **Solution**:  
  - Introduce position as a feature during training to learn and counteract this bias in predictions.  
  - Use **Inverse Propensity Scoring (IPS)** to weight positions.  

---

### **Handling Bias in Relevance**  
For ad-based platforms like YouTube, click-through and engagement rates are highly influenced by surface-level features such as ad placement or trending content. Algorithms must be tuned to minimize biases by incorporating diverse signals into the model (e.g., interaction patterns, user demographics, and positional information).

---

## **5. Full Deployment in Practice**  

- **YouTube’s Retrieval Stack**: Employs custom embedding models to **capture multiple facets of similarity**, including watch behavior and video topics. Multiple candidate generation algorithms feed a ranking system that produces the final recommendations.  
- **Ad Recommendations**: Systems like wide-and-deep networks take both frequent and infrequent (dynamic) features into account for more accurate rankings.  

---

## **Conclusion**  

Modern recommendation systems are intricate pipelines that combine various ML techniques to identify, rank, and deliver personalized content to users. By implementing **candidate generation**, **robust ranking methods**, and **re-ranking strategies**, platforms can continually optimize user engagement while balancing diversity, fairness, and freshness. From YouTube’s advanced embedding-driven approaches to Pinterest’s co-occurrence mappings, these methods highlight the state of the art in creating effective and scalable recommendation systems.

# Calibration in Machine Learning: Importance, Challenges, and Techniques  

Model calibration is a critical concept in machine learning, particularly in production systems like ad click predictions or medical risk assessments. Calibration ensures that the predicted probabilities accurately represent real-world likelihoods, enabling better decision-making. This blog dives into calibration concepts, why it matters, common challenges, and practical solutions.

---

## **1. What Is Calibration?**  

Calibration measures how closely a model’s predicted probabilities align with observed outcomes.  

### **Definition**  
\[
\text{Calibration} = \frac{\text{sum(predictions)}}{\text{sum(labels)}}
\]  

In simple terms, calibration is the ratio of predicted events to actual events. For example, if a model predicts a conversion probability of 0.2 for 100 instances and 20 of them actually convert, the model is well-calibrated.  

---

## **2. Why Is Calibration Important?**  

### **Key Scenarios**  
1. **Critical Applications**:  
   - In medical diagnostics, the predicted likelihood of illness directly impacts treatment decisions. Miscalibrated predictions can lead to harmful consequences.  

2. **Debugging Confidence**:  
   - Understanding whether a model is overconfident or underconfident can help fine-tune predictions and improve reliability.  

---

## **3. Causes of Miscalibration**  

### Common Issues:  
1. **Model Generalization**:  
   - Poor performance on unseen data can skew predictions.  

2. **Nonstationarity**:  
   - User behavior or market dynamics evolve over time, leading to mismatched distributions between training and serving stages.  

3. **Selection Bias**:  
   - Resampling techniques, like oversampling or undersampling, can alter dataset distributions, affecting calibration.  

4. **Training/Serving Misalignment**:  
   - Training labels may differ from the calibration labels used during prediction evaluation.  

---

## **4. Evaluating Calibration**  

### **Using ROC-AUC Isn’t Enough**  
The Area Under the Curve (AUC) metric, though useful for evaluating classification models, doesn’t assess whether predicted probabilities match observed outcomes.  

#### **Experimental Comparison**  
Consider two models: Logistic Regression and Support Vector Machines (SVM).  
- **SVM** achieves better AUC (0.97 vs. 0.858 for logistic regression).  
- However, calibration plots reveal that logistic regression produces better-calibrated probabilities.  

---

## **5. Visualization Using Calibration Plots**  

### **What Is a Calibration Plot?**  
A calibration plot compares the mean predicted probabilities in each bin (x-axis) to the actual fraction of positive labels in those bins (y-axis).  

#### **Perfect Calibration**  
- A perfectly calibrated model’s curve aligns with the diagonal (x = y).  
- For instance, predictions close to 0.8 should correspond to an 80% likelihood of positive outcomes.  

---

### Example: Logistic Regression vs. SVM  
1. **Logistic Regression**:  
   - The calibration curve is well-aligned with the diagonal, indicating accurate probabilities.  

2. **SVM**:  
   - The curve deviates significantly:  
     - **Low Predictions**: Underconfident.  
     - **High Predictions**: Overconfident.  
   - This miscalibration means SVM probabilities should not be trusted in decision-making.  

---

## **6. Calibration Techniques**  

### **6.1 Isotonic Regression**  
A non-parametric method that adjusts predictions to minimize the squared error between predicted and actual labels:  
\[
\sum (actual_i - prediction_i)^2
\]  

- **Pros**: Flexible and can capture non-linear calibration curves.  
- **Cons**: Requires sufficient data for reliable adjustment.  

---

### **6.2 Platt’s Scaling**  
Platt’s method transforms raw scores from a model into calibrated probabilities using:  
\[
P(actual = 1 | predict) = \frac{1}{1 + e^{A \cdot predict + B}}
\]  

- **A** and **B** are learned via maximum likelihood on training data.  
- **Applications**: Commonly used to calibrate SVM outputs.  

---

### **Other Techniques**  
1. **Temperature Scaling**: Adjusts logits from the model through a scaling factor.  
2. **Calibrating Decision Trees**: Applies correction curves to tree-based models.  
3. **Calibration Curve**: A graphical tool for visualizing miscalibration over the prediction range.  

---

## **7. Nonstationarity and Its Impact**  

In dynamic environments like online platforms, distributions shift as user behavior evolves. This makes calibration a moving target.  

### **Example: LinkedIn’s Lambda Learner**  
- Combines near-time data with historical data using **Bayesian Logistic Regression**, addressing nonstationary distribution changes.  

#### **Practical Considerations**:  
- Frequent retraining is required to maintain model reliability.  
- Using adaptive models like **warm-start training** or Bayesian approaches can help counteract these effects.  

---

## **8. Exploration vs. Exploitation in Ad Click Prediction**  

Ad click prediction systems must often balance between:  
1. **Exploration**: Displaying underexplored ads to discover their performance.  
2. **Exploitation**: Prioritizing ads likely to yield higher revenue.  

### **Techniques to Address Trade-Offs**  
- **Thompson Sampling**:  
   Selects ads probabilistically based on their likelihood of yielding higher rewards, balancing exploration and exploitation dynamically.  

---

## **9. Conclusion**  

Model calibration is essential for applications where predictive probabilities guide critical decisions. Over-reliance on metrics like AUC can obscure miscalibration issues, particularly in high-stakes domains. Techniques like isotonic regression and Platt’s scaling provide effective solutions, but addressing challenges like nonstationarity and selection bias requires robust system designs, frequent retraining, and adaptive methodologies. By incorporating calibrated models into workflows, organizations can enhance the reliability, trustworthiness, and efficacy of their machine learning solutions.  