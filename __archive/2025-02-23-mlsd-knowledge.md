---
title: ML Software Design Knowledge
tags: [Coding]
style: fill
color: secondary
description: Metrics, and lots of explanations.
---

## Metrics

Metrics are ways to measure how good (or bad) your model is doing. Think of them like grades on a test.

### Offline: Quickly Assess Model’s Performance

These metrics are usually computed after your model has made predictions. You collect all the predictions and the actual (true) answers, then you compute the metric values.

1. **Precision**  
   - In simple terms: "Out of all the predictions that are labeled positive, how many were actually correct?"  
   - Like: if you guess 10 toys are cars, and 8 of them really are cars, your precision is 8/10 = 0.8.  
   - Python formula:  
     ```python
     def precision(predictions, targets):
         # predictions and targets are lists (or tensors) of 0/1 (for binary classification)
         true_positives = sum(p == 1 and t == 1 for p, t in zip(predictions, targets))
         predicted_positives = sum(predictions)
         return true_positives / (predicted_positives + 1e-8)
     ```
   - In PyTorch: often you compute predictions (logits) and then compare with targets, but there's no single built-in “Precision” function; you can write your own or use libraries like `torchmetrics`.

2. **Recall**  
   - In simple terms: "Out of all the items that are truly positive, how many were guessed as positive?"  
   - Like: if there were 10 cars total, how many did you guess correctly as cars?  
   - Python formula:  
     ```python
     def recall(predictions, targets):
         true_positives = sum(p == 1 and t == 1 for p, t in zip(predictions, targets))
         actual_positives = sum(targets)
         return true_positives / (actual_positives + 1e-8)
     ```
   - In PyTorch: same as precision, you'd write your own or use `torchmetrics`.

3. **Mean Reciprocal Rank (MRR)**  
   - In search or recommendation, you show a ranked list. “Reciprocal Rank” is 1/(position of the correct answer).  
   - If the correct item is in position 1, reciprocal rank is 1/1 = 1. If it’s in position 5, reciprocal rank is 1/5 = 0.2. MRR is the average of all reciprocal ranks over a batch of queries.  
   - Python formula (example approach):  
     ```python
     def mean_reciprocal_rank(ranked_lists, true_items):
         """
         ranked_lists: list of lists, each sub-list is items in ranked order
         true_items: list of the actual item for each query
         """
         rr_sum = 0
         for rank_list, true_item in zip(ranked_lists, true_items):
             for i, item in enumerate(rank_list):
                 if item == true_item:
                     rr_sum += 1.0 / (i+1)
                     break
         return rr_sum / len(true_items)
     ```

4. **Mean Average Precision (MAP)**  
   - Looks at the average precision each time you find the right item in your ranked list, and then averages over all queries.  
   - Python formula (simplified):  
     ```python
     def average_precision(ranked_list, true_items):
         # true_items might contain multiple relevant items
         hits = 0
         sum_precision = 0
         for i, item in enumerate(ranked_list):
             if item in true_items:
                 hits += 1
                 sum_precision += hits / (i+1)
         return sum_precision / (len(true_items) + 1e-8)

     def mean_average_precision(ranked_lists, all_true_items):
         ap_sum = 0
         for rank_list, true_items in zip(ranked_lists, all_true_items):
             ap_sum += average_precision(rank_list, true_items)
         return ap_sum / len(all_true_items)
     ```

5. **F1 Score**  
   - A combined measure of Precision and Recall. Higher F1 means better balance between precision and recall.  
   - Formula is F1 = 2 * (Precision * Recall) / (Precision + Recall).  
   - Python formula:  
     ```python
     def f1_score(predictions, targets):
         p = precision(predictions, targets)
         r = recall(predictions, targets)
         return 2 * p * r / (p + r + 1e-8)
     ```

6. **Discounted Cumulative Gain (DCG) and Normalized DCG (NDCG)**  
   - Used in ranking tasks. DCG gives bigger rewards if you find important items early in the list.  
   - DCG = sum of [ (2^relevance - 1) / log2(position+1 ) ].  
   - Python-ish formula:  
     ```python
     import math

     def dcg(relevances):
         """ relevances: list of relevance scores in ranked order """
         return sum((2**rel - 1) / math.log2(i+2) for i, rel in enumerate(relevances))

     def ndcg(ranked_lists_of_relevances):
         # you'd compute a DCG for the predicted ranking
         # and a DCG for the ideal ranking, then ratio
         pass
     ```
   - In PyTorch: you often implement your own or use specialized libraries.

7. **Area Under the Curve (AUC)**  
   - Tells how well you separate positive and negative samples. 1.0 is perfect separation, 0.5 is random.  
   - Python formula (sklearn style, example as there's no direct built-in in PyTorch):  
     ```python
     from sklearn.metrics import roc_auc_score

     auc_value = roc_auc_score(true_labels, predicted_scores)
     ```
   - In PyTorch: manually or `torchmetrics.functional.auroc`.

8. **Cross Entropy**  
   - Measures how different your predicted probability is from the true label. Lower is better.  
   - Python formula (binary example):
     ```python
     import math

     def binary_cross_entropy(pred, target):
         # pred is probability (0 to 1), target is 0 or 1
         return - (target * math.log(pred+1e-8) + (1-target)*math.log(1-pred+1e-8))
     ```
   - In PyTorch: `torch.nn.CrossEntropyLoss()` for multiclass classification or `torch.nn.BCELoss()`/`torch.nn.BCEWithLogitsLoss()` for binary.

-----

### Online: Monitor Model’s Performance

These metrics come from real usage, like how people behave when they see your predictions.

1. **CTR (Click-Through Rate)**  
   - Formula: CTR = clicks / impressions.  
   - If you show ads 100 times (impressions), and get 5 clicks, CTR = 5/100 = 0.05 (5%).

2. **Conversion**  
   - Formula: Conversion = purchases / clicks.  
   - If you got 10 clicks on an ad, and 1 person bought something, conversion = 1/10 = 0.1 (10%).

3. **Bounce Rate**  
   - Formula: bounce = no purchases / clicks. (Sometimes defined as user leaves immediately)  
   - If 10 people clicked, but 4 left without doing anything (no purchase, no sign-up), bounce rate = 4/10 = 0.4.

4. **ROI (Return on Investment)**  
   - Formula: ROI = (sales - cost) / cost.  
   - If you spent $100 on marketing and you made $200 in sales, ROI = (200 - 100)/100 = 1.0 (which is 100% ROI).

5. **Engagement**  
   - Example: “session duration.” Some sites measure average time on page or how often a user interacts.  
   - Like: if the average user session is 5 minutes, you can track if it goes up or down.

-----

## Data Pipelines

A data pipeline is like a factory line where raw data (like raw materials) is processed step by step into something useful for your model.

1. **Format**  
   - **Column-based (Parquet)**: Data is stored by columns, so it’s super-fast if you only need certain columns.  
   - **Row-based (CSV)**: Data is stored row by row, making it super simple to read in order but slower to skip columns.

2. **Data Partitioning**  
   - Splitting your data by **time** (like daily or hourly). Or by **feature** (like user_id).  
   - This helps you manage big data or train models on partial data.

3. **Imbalances**  
   - Sometimes one class is way more common than another, like having 1,000 cars vs. 10 dolls.  
   - Possible fixes:  
     - Use class weights (give more importance to rare classes).  
     - Downsample (reduce the number of frequent classes).  
     - Upsample (increase the number of rare classes, e.g., by reusing them more).

4. **Labels**  
   - **Implicit**: For recommendations, if someone clicked on an item, it’s labeled as "positive" (they liked it), but that’s an assumption.  
   - **Explicit**: If someone rates something with 5 stars, that’s an explicit rating.

5. **Splitting**  
   - **Forecasting**: Must use time-based splitting (use past data to predict future).  
   - **Recommendation**: Often uses user-based splitting (train on some users, test on new or held-out users).

6. **Retraining**  
   - **Train and forget**: Train once and never update.  
   - **Periodic retraining**: Re-train the model with new data every so often (e.g., weekly).  
   - **Online learning**: The model updates with each new data point in real-time.

7. **Monitoring**  
   - **Drift detection**: If new data changes a lot from training data, your model might get worse.  
   - **Model performance**: Keep track of metrics.  
   - **Data quality**: Make sure no weird or broken data is sneaking in.

-----

## Loss Functions

Loss functions tell you how wrong your model’s predictions are, so you can adjust (learn!) to get better. Lower loss is better.

### Classification

1. **Cross-Entropy Loss**  
   - For classification, penalizes wrong probability predictions.  
   - In PyTorch: `torch.nn.CrossEntropyLoss()`.  
   - Simple Python (binary):  
     ```python
     def binary_cross_entropy(pred, target):
         return - (target * math.log(pred+1e-8) + (1-target)*math.log(1-pred+1e-8))
     ```

2. **Hinge Loss**  
   - Often used for SVMs. If you predict the correct label strongly, no penalty. If you’re wrong or not sure, big penalty.  
   - Formula for a single sample (binary): L = max(0, 1 - y * pred).  
   - No direct built-in in PyTorch, but easy to code:
     ```python
     def hinge_loss(pred, target):
         # pred is a real number, target is either -1 or +1
         return max(0, 1 - target*pred)
     ```

3. **Focal Loss**  
   - Focuses more on hard/misclassified examples. Common in object detection.  
   - One possible formula is: FL = - α * (1 - p)^γ * log(p) for the positive class.  
   - Custom in PyTorch:
     ```python
     import torch
     import torch.nn as nn

     class FocalLoss(nn.Module):
         def __init__(self, alpha=1.0, gamma=2.0):
             super(FocalLoss, self).__init__()
             self.alpha = alpha
             self.gamma = gamma

         def forward(self, inputs, targets):
             # inputs: predicted probabilities or logits
             # targets: ground-truth labels
             bce_loss = nn.BCEWithLogitsLoss(reduction='none')(inputs, targets)
             probs = torch.sigmoid(inputs)
             pt = torch.where(targets == 1, probs, 1 - probs)
             focal_weight = self.alpha * (1 - pt).pow(self.gamma)
             loss = focal_weight * bce_loss
             return loss.mean()
     ```

### Regression

1. **Mean Squared Error (MSE)**  
   - Measures the average squared difference between predicted and true values.  
   - In PyTorch: `torch.nn.MSELoss()`.  
   - Python:
     ```python
     def mse(pred, target):
         return ((pred - target)**2).mean()
     ```

2. **Mean Absolute Error (MAE)**  
   - Measures the average absolute difference.  
   - In PyTorch: `torch.nn.L1Loss()`.  
   - Python:
     ```python
     def mae(pred, target):
         return abs(pred - target).mean()
     ```

3. **Huber Loss**  
   - Less sensitive to outliers than MSE.  
   - It’s MSE when the error is small, and MAE when it’s big (with a delta parameter).  
   - No direct built-in in older PyTorch versions, but you can do:
     ```python
     import torch
     import torch.nn as nn

     huber_loss = nn.SmoothL1Loss()  # similar to Huber
     ```

4. **Quantile Loss**  
   - Used when you care about a certain percentile (like “worst-case scenario”).  
   - Simple Python (for quantile τ):
     ```python
     def quantile_loss(pred, target, tau=0.5):
         error = target - pred
         return torch.mean(torch.max(tau * error, (tau-1) * error))
     ```

### Forecasting

1. **Mean Absolute Percentage Error (MAPE)**  
   - Measures how big the error is as a percentage of the true value.  
   - Python:
     ```python
     def mape(pred, target):
         return 100.0 * torch.mean(torch.abs((target - pred) / (target + 1e-8)))
     ```

2. **Symmetric Mean Absolute Percentage Error (SMAPE)**  
   - Similar to MAPE but treats over and under predictions more fairly.  
   - Python:
     ```python
     def smape(pred, target):
         return 100.0 * torch.mean(
             2 * torch.abs(target - pred) / (torch.abs(target) + torch.abs(pred) + 1e-8)
         )
     ```

3. **Mean Squared Logarithmic Error (MSLE)**  
   - Takes the log of predicted and actual values, then does MSE.  
   - Python:
     ```python
     def msle(pred, target):
         return torch.mean((torch.log(pred + 1) - torch.log(target + 1))**2)
     ```

### Recommendation

1. **AUC Loss**  
   - Attempts to maximize the ordering of positive items over negative items.  
   - Not a standard built-in, but you might code something custom.

2. **MAP Loss**  
   - Trying to maximize Average Precision.  
   - You’d define a custom loss that tries to push relevant items up in ranking.

3. **MRR Loss**  
   - Similar idea: maximize reciprocal rank of correct items. 
   - Custom.

4. **NDCG Loss**  
   - You want the highest DCG possible. Often done with specialized ranking loss libraries.

-----

## Deployment

Once your model is good, how do you let real users use it?

1. **Load Balancer**  
   - Splits incoming traffic (requests) across many servers so you don’t overload one server.

2. **Custom Serving**  
   - You write your own service or server code to handle predictions, often to handle specific business needs.

3. **Serving Embeddings**  
   - If your model uses embeddings (like for users or items), you need to store and quickly fetch them.  
   - **Training**: Usually, you learn embeddings by joining big data tables of user/item interactions.  
   - **Storing**: Keep them in a key-value store (like a big dictionary).  
   - **Nearline Serving**: A system that fetches the embeddings quickly when needed to make a recommendation or prediction.

-----

## Recommender Systems

They try to guess which items a user might like (music, movies, news, etc.).

1. **Candidate Generation**:  
   - **Content-based filtering**: Look at item’s content (genre, description) and compare to user’s interests.  
   - **Collaborative Filtering**: Look at similar users and see what they liked.

2. **Ranking**:  
   - Combine different signals like user preferences, popularity, or learned embeddings to produce a sorted list of items.

3. **Re-ranking**:  
   - **Filtering**: Remove items user is not allowed to see or already purchased.  
   - **Boosting**: Promote certain items (maybe new releases).  
   - **Debiasing**: Avoid always recommending the same popular items if they’re not truly relevant.

-----

## Calibration

Making sure your model’s predicted probabilities are well matched to real-world chances. For example, if you say you’ll be correct 70% of the time, it really should be correct about 70% of the time. Often used with techniques like **temperature scaling** or **Platt scaling**.

-----

## Architectures

Think of different shapes of neural networks to solve tasks.

1. **Two Tower**  
   - Two separate networks (one for users, one for items) that produce embeddings, then combine them (like a dot product) for a prediction.

2. **Wide and Deep**  
   - A wide part (linear) plus a deep part (deep neural network) combined, so you get both memorization (wide) and generalization (deep).

3. **Deep and Cross**  
   - Similar idea, but you explicitly learn cross features in the network.

4. **Multitask**  
   - Train one main network to predict multiple things at the same time (e.g., rating, click, etc.), which sometimes helps it learn shared patterns.

-----

That’s it! Now you know lots about machine learning metrics, data pipelines, loss functions, and more. Keep practicing and have fun learning!

## Matrix factorization is a powerful technique used in recommendation systems for tasks like candidate generation, such as in YouTube video recommendations. Let's go step-by-step to understand what matrix factorization does, its math, and how we can implement it in code using PyTorch.

---

### ⚙️ **What is Matrix Factorization?**

Matrix Factorization is a method of breaking a large matrix into smaller matrices to understand relationships between users and items (like videos). Imagine YouTube has millions of users and videos. Each user interacts with some videos (e.g., watches or likes them). Matrix Factorization helps predict what a user may like next by learning patterns between users and videos.

Think of it like filling in a puzzle — if you know which videos a user has interacted with, you can guess which other videos they'd like based on other users' behavior.

---

### 🎨 **Simplified Idea for a 15-Year-Old**
1. Imagine you have a large sheet where each row is a user, and each column is a video.
   - If someone watches a video, you write a "1" in that spot, else it's blank (or a "0").
2. The table is mostly empty because most users don’t watch all videos.
3. Matrix Factorization splits this giant table into smaller patterns (like LEGO pieces) to guess where the blanks should go.

The goal is to learn "hidden properties" of videos and users. For example:
- **Users** might have preferences ("likes horror movies" or "likes action").
- **Videos** have traits ("is horror-themed" or "is action-packed").

Matrix Factorization matches these "preferences" to "traits" to recommend the best videos.

---

### 🧮 **The Math Behind It**

We start with a **ratings matrix**, \( R \), which is a big table where:
- \( R[i, j] \) is a score showing how much **user \( i \)** likes **video \( j \)**.
  - For YouTube, this score could depend on watch time, likes, etc.
  - If no data exists, we leave it blank (or zero).

Matrix Factorization assumes:
\[
R \approx U \cdot V^T
\]
Here:
- \( U \) is a matrix storing user preferences (size: \#Users x K).
- \( V \) is a matrix storing video traits (size: \#Videos x K).
- \( K \) is the number of "hidden factors" — e.g., genres or themes we are trying to uncover.

Our goal: Find \( U \) and \( V \) such that the product of these matrices reconstructs \( R \) as closely as possible.

---

### 🧠 **Mathematical Loss Function**
To train the model, we minimize the difference between known entries in \( R \) and their predictions from \( U \cdot V^T \):
\[
\text{Loss} = \sum_{(i, j) \in \text{observed}} \left( R[i, j] - (U[i] \cdot V[j]^T) \right)^2 + \lambda \left( ||U||^2 + ||V||^2 \right)
\]
- \( R[i, j] \) is the actual score for how much user \( i \) likes video \( j \).
- \( U[i] \cdot V[j]^T \) is our predicted score.
- \( ||U||^2 + ||V||^2 \) is regularization to prevent overfitting.

---

### 🐍 **PyTorch Implementation**

Here's an example to demonstrate simple matrix factorization using PyTorch:

```python
import torch
import torch.nn as nn
import torch.optim as optim

# Step 1: Simulate a Tiny Ratings Matrix
ratings_matrix = torch.tensor([
    [5.0, 3.0, 0.0, 1.0],  # User 1
    [4.0, 0.0, 0.0, 1.0],  # User 2
    [1.0, 1.0, 0.0, 5.0],  # User 3
    [0.0, 0.0, 5.0, 4.0],  # User 4
    [0.0, 3.0, 4.0, 5.0]   # User 5
])  # (5 users x 4 videos)

# Known positions in the matrix (non-zero elements)
mask = (ratings_matrix > 0)  # True for observed elements

# Step 2: Define Model Parameters
num_users, num_videos = ratings_matrix.shape
num_features = 3  # Number of "hidden factors" (genres/preferences)
U = torch.randn((num_users, num_features), requires_grad=True)  # User preferences
V = torch.randn((num_videos, num_features), requires_grad=True)  # Video traits

# Step 3: Training the Matrix Factorization
learning_rate = 0.01
optimizer = optim.SGD([U, V], lr=learning_rate)
loss_fn = nn.MSELoss()

num_epochs = 5000

for epoch in range(num_epochs):
    # Predict Ratings
    predicted_ratings = torch.matmul(U, V.T)  # Matrix multiplication (U * V^T)

    # Compute Loss Only for Observed Entries
    loss = loss_fn(predicted_ratings[mask], ratings_matrix[mask])
    
    # Add Regularization (optional)
    loss += 0.1 * (torch.norm(U) + torch.norm(V))

    # Backpropagation
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    # Print Loss every 500 iterations
    if epoch % 500 == 0:
        print(f"Epoch {epoch}: Loss = {loss.item()}")

# Step 4: Examine Results
print("\nOriginal Ratings Matrix:")
print(ratings_matrix)

print("\nPredicted Ratings Matrix:")
print(predicted_ratings.detach())
```

---

### 💡 **Explaining Code in Simple Terms**
1. **Ratings Matrix**: This is the table of (user, video) interactions.
2. **Two Matrices U and V**: These represent the hidden factors (preferences and traits).
3. **Predictions**: We predict how much a user likes a video by multiplying \( U \) and \( V^T \).
4. **Training Loop**: We adjust \( U \) and \( V \) repeatedly with gradient descent to minimize the prediction error.

---

### 🚀 **How Candidate Generation Works for YouTube**
In a real-world situation:
1. Use Matrix Factorization to recommend candidates (videos) for users based on their history.
2. Combine results with other methods (deep learning models, trending filters, etc.).
3. Post-process candidates by applying ranking models to personalize further.

---

### 📚 **Conclusion**
Matrix factorization is like teaching a computer to guess the interests of users based on patterns in a big table of data. By understanding hidden factors of what users like and what videos offer, recommendations become smarter — and that's the magic behind systems like YouTube's recommendations!


Let's dive into how we can process historical search queries to generate recommendations using **text embeddings** in PyTorch. I'll break this into simple explanations, reasons for using a method like Word2Vec or BERT, and show how to implement it in PyTorch.

---

### 🌟 Step 1: Why Use Text Embeddings?

- When users make search queries, they're providing invaluable information about their preferences. A search query like "thriller movies" or "funny cat videos" gives us an idea of what they'd like to watch.
- Computers can't directly understand words as we do, so we need to convert text into **numerical representations** (something computers understand).
- **Text embeddings** represent words (like "cat" or "movie") or sentences as vectors in a high-dimensional space. Words with similar meanings (e.g., "dog" and "puppy") will end up near each other in this space.
- These embeddings are used to **learn patterns and relationships** between queries, videos, or even other users with similar behaviors.

---

### 🌎 Types of Text Embeddings

1. **Word2Vec/GloVe**: These map words to vectors by finding patterns in large amounts of text (e.g., "man" and "woman" have similar relations to "king" and "queen"). They're lightweight and great for simpler tasks.

   - Example: "cat" → [1.2, -0.3, 0.8, ...]

2. **BERT (Transformer-based Models)**: These use much more complex models to understand the context of words within a sentence. For example, the word "bank" will mean "riverbank" in "I went to the bank of the river" and "financial institution" in "I deposited money at the bank." This is great for cases where meaning depends on context, but it's heavier to run.

   - Example: "I ate an apple" → [3.1, -0.2, 1.5, ...]

---

### 🚀 Step 2: What Should I Use? (Simple vs. Powerful)

1. If historical queries are **single words** or short/simple queries, use **Word2Vec/GloVe** embeddings.
   - Pretrained GloVe embeddings are faster and lighter to use.

2. If you need to understand the **context** of a query or the queries are complex/full sentences, use **BERT** or other transformer-based models.
   - Transformers like BERT may better capture the complex semantics of rich sentences but are computationally expensive.

---

### 🚧 Step 3: Implementation in PyTorch

We'll first implement text embeddings with pretrained **GloVe** (lightweight) and then with **BERT** (context-aware).

---

#### 🛠 Option 1: Using Pre-trained GloVe Embeddings in PyTorch

##### Why GloVe?
- GloVe embeddings are already trained on large datasets (like Wikipedia).
- Each word gets a representation (vector), and these embeddings are fast to compute.

Here’s how you can use it:

```python
import torch
import numpy as np

# Step 1: Load Pre-trained GloVe embeddings
# Download 'glove.6B.100d.txt' from GloVe (100-dimensional embeddings)
# File contains word and its vector representation
glove_path = "glove.6B.100d.txt"  # Path to the GloVe file
embedding_dim = 100  # Dimensionality of embeddings
word_to_vector = {}

with open(glove_path, 'r', encoding='utf-8') as f:
    for line in f:
        values = line.split()
        word = values[0]
        vector = np.array(values[1:], dtype='float32')
        word_to_vector[word] = vector

# Step 2: Tokenize a Query and Convert to Embedding
def get_embedding(sentence, word_to_vector):
    words = sentence.lower().split()  # Simple tokenization
    embeddings = [word_to_vector[word] for word in words if word in word_to_vector]
    
    if len(embeddings) > 0:
        return np.mean(embeddings, axis=0)  # Average the embeddings for all words in the sentence
    else:
        return np.zeros(embedding_dim)  # If no match, return empty vector

query = "funny cat videos"
query_embedding = get_embedding(query, word_to_vector)

# Step 3: Convert to Tensor for PyTorch
query_embedding_tensor = torch.tensor(query_embedding)
print(query_embedding_tensor)
```

In this example:
- We leverage GloVe to get word embeddings.
- For a query like "funny cat videos," we first find embeddings for each word, then average them to represent the entire query.

---

#### 🛠 Option 2: Using BERT for Embedding Historical Queries

##### Why BERT?
- BERT is context-aware and works well with sentence-level queries.
- It captures the meaning of words better, accounting for surrounding text.

Using `transformers` library by Hugging Face for BERT embeddings:

```python
from transformers import BertTokenizer, BertModel
import torch

# Step 1: Load Pretrained BERT Model and Tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
model = BertModel.from_pretrained('bert-base-uncased')

# Step 2: Tokenize the Query
query = "funny cat videos"  # Example query
tokens = tokenizer(query, return_tensors="pt", padding=True, truncation=True)

# Step 3: Pass Tokens through BERT Model
with torch.no_grad():  # No need to train
    output = model(**tokens)

# Step 4: Extract Sentence Embedding
# Use the [CLS] token's embedding as the full-query representation
query_embedding = output.last_hidden_state[:, 0, :]  # Shape: [Batch_size, Hidden_dim]
print(query_embedding.shape)  # E.g., (1, 768) for 'bert-base-uncased'
```

In this example:
- `"funny cat videos"` becomes a contextual vector of size 768.
- BERT comprehends that "cat videos" relates to animals, while "funny" adds personality.

---

### Why Would You Use GloVe vs. BERT?

| **GloVe**                              | **BERT**                                 |
|----------------------------------------|------------------------------------------|
| Lightweight and fast                   | Computationally expensive (slower)       |
| Works well for simple problems         | Handles sentences with complex context   |
| Pretrained embeddings are static       | Dynamically generates embeddings for context |
| Doesn’t differentiate word context     | Differentiates meanings in different contexts |

---

### 🚀 Step 4: How This Fits into YouTube Search Queries and Recommendations

1. **Convert Users' Queries**: Convert historical search queries into embeddings.
   - If using GloVe, average embeddings of all the words in the query.
   - If using BERT, directly generate the context-aware embedding for the whole query.

2. **Match Queries to Video Metadata**: YouTube videos have titles, tags, and descriptions that can also be converted into embeddings (GloVe/BERT).
   - Compute similarity between query and video embeddings (e.g., cosine similarity).
   - Recommend videos that are most similar to the query.

3. **Use in Candidate Generation**: Combine the embeddings from historical queries with other features (video-watch history, collaborative filtering, etc.) for generating final recommendations.

---

### Final Takeaway

- Use **GloVe embeddings** when you need a simple, fast solution and your text data is relatively small or straightforward.
- Use **BERT embeddings** when your queries or video data have significant context, or the meanings of words depend on the situation.

By converting text to embeddings, you unlock the power of **semantic understanding** — making recommendations smarter, more relevant, and user-friendly.

Using a **Bayesian Logistic Regression** model to account for changes in user behavior is motivated by the need for flexibility, uncertainty modeling, and adaptability in dynamic environments, such as predicting user behavior in recommendation systems. Let me break this down in simple terms:

---

### 🧠 **What is Bayesian Logistic Regression?**

- **Logistic Regression** is a machine learning model that predicts probabilities for a binary outcome (e.g., "Will a user click on a video or not?").
  - It estimates probabilities using a sigmoid function and learns weights for features.
  
- **Bayesian Logistic Regression** puts a **probability distribution** over the weights of the model instead of fixed values.
  - This means instead of saying, *"The weight \(w = 1.3\),"* we say, *"There's an \(80\%\) probability that \(w\) is in a certain range"*.
  - By doing this, we can model **uncertainty** in the predictions and account for the variability in the data.

Using a **Bayesian framework** allows us to create predictions that adapt to changes over time and provide more calibrated uncertainties about the output probabilities.

---

### 🌟 **Why Does User Behavior Change?**
When you're trying to model user behavior (e.g., watch, click, like), it's natural that user preferences are not fixed forever. For example:
1. **Dynamic Interests**: A user might move from watching gaming videos to cooking tutorials over a few weeks.
2. **Seasonality**: Interests might fluctuate due to seasons (e.g., holiday shopping, summer vacation).
3. **Trending Content**: Users are influenced by trends (e.g., viral videos or memes).
4. **Sparsity/Noise**: Sometimes, the data has a lot of missing or uncertain trends, and we don't always have enough information about newer users or interests.

Traditional logistic regression assumes user behavior stays **static**, which makes it less responsive to shifts in preferences. By contrast, **Bayesian Logistic Regression** can better handle this variability by explicitly modeling the uncertainty and dynamically updating as we observe more data.

---

### 🚀 **How Bayesian Logistic Regression Handles Change**

Here’s what makes a Bayesian approach well-suited for modeling user behavior:

#### 1. **Uncertainty Modeling**
- A Bayesian model doesn’t produce fixed coefficients (weights); instead, it provides a **posterior distribution** over the weights. This accounts for the idea that we are uncertain about the exact weights of features influencing user behavior.
- For example:
  - For a user who usually watches cooking videos, the weight for "cooking" might have high confidence.
  - For a new category that suddenly becomes relevant (e.g., sports), the model will assign broader uncertainty to those weights and adjust as more data is observed.

#### 2. **Adaptability to New Data Over Time**
- In a Bayesian framework, when new user data comes in, we can **update our beliefs** (posterior distribution) instead of retraining the model from scratch.
- Example: If we notice that a user with a strong interest in "action movies" starts watching "romance movies," the model can reassess the weights dynamically using new evidence.

#### 3. **Regularization and Avoiding Overfitting**
- Logistic regression often requires **regularization** to prevent overfitting (assigning extreme weights to low-confidence features). Bayesian regression naturally applies this through the **prior** distribution:
  - If we don’t know much about the user, the prior assumes "neutral" behavior.
  - Over time, the data shifts the model from the prior belief to more confident estimates.

#### 4. **Handling Sparsity and Small Data**
- Sparse data is a frequent issue in recommendation systems, especially for new users (“cold start”) or categories (“long-tail” items). Bayesian updates allow the model to make **initial guesses** using prior knowledge and refine predictions as new data emerges.

#### 5. **Exploration vs Exploitation**
- Bayesian models explicitly calculate uncertainty in their predictions, which can guide decisions for minimizing **risk**.
- Example: If two videos are equally likely to interest a user statistically, we can choose the one with less uncertainty for a more confident recommendation.

---

### 📚 Simplifying the Bayesian Process for User Behavior

1. **Priors**: Define our prior knowledge before observing user data.
   - Example: If most users tend to watch cooking or gaming tutorials, assign prior weights favoring those categories.

2. **Likelihood**: Observe data about the user's behavior (e.g., clicks, watch time, searches).
   - Example: Record that a user has clicked on "sports" videos 3 times and "action" videos twice.

3. **Posterior Update**: Combine the prior and the new evidence to update our **"beliefs"** about what the user will do next.
   - Example: Shift the weight from generic content toward sports videos as we see more clicks on those.

---

### 🔧 **Example: Bayesian Logistic Regression for User Modeling**

Here’s a simplified PyTorch-like implementation to capture the core ideas of Bayesian Logistic Regression:

```python
import torch
import pyro
import pyro.distributions as dist
from pyro.infer import SVI, Trace_ELBO
from pyro.optim import Adam

# Example Features: [Likes Action, Likes Comedy, Likes Drama]
# Example Labels: [1 = Watch Video, 0 = Skip Video]

# Step 1: Define the Bayesian Model
def bayesian_logistic_regression(features, labels=None):
    weights = pyro.sample("weights", dist.Normal(0., 1.).expand([features.shape[1]]).to_event(1))  # Prior
    bias = pyro.sample("bias", dist.Normal(0., 1.))  # Prior for bias

    logits = (features @ weights) + bias
    probs = torch.sigmoid(logits)

    if labels is not None:
        with pyro.plate("data", len(features)):  # Plate for batch processing
            pyro.sample("obs", dist.Bernoulli(probs), obs=labels)  # Likelihood
    return probs

# Step 2: Prepare Example Features and Labels (Simulated)
features = torch.tensor([
    [1, 0, 0],  # User likes Action
    [0, 1, 0],  # User likes Comedy
], dtype=torch.float32)
labels = torch.tensor([1, 0], dtype=torch.float32)

# Step 3: Define Guide (Variational Distribution for Weights)
def guide(features, labels=None):
    weight_mean = pyro.param("weight_mean", torch.zeros(features.shape[1]))
    weight_std = pyro.param("weight_std", torch.ones(features.shape[1]), constraint=dist.constraints.positive)
    bias_mean = pyro.param("bias_mean", torch.tensor(0.))
    bias_std = pyro.param("bias_std", torch.tensor(1.), constraint=dist.constraints.positive)

    pyro.sample("weights", dist.Normal(weight_mean, weight_std).to_event(1))
    pyro.sample("bias", dist.Normal(bias_mean, bias_std))

# Step 4: Optimization and Training
optimizer = Adam({"lr": 0.01})
svi = SVI(bayesian_logistic_regression, guide, optimizer, loss=Trace_ELBO())

for epoch in range(1000):  # Training loop
    loss = svi.step(features, labels)
    if epoch % 100 == 0:
        print(f"Epoch {epoch}, Loss: {loss}")

# Step 5: Examine Results
for name, value in pyro.get_param_store().items():
    print(f"{name}: {value}")
```

---

### 🛠 Key Benefits of Using Bayesian Logistic Regression:
1. Handles **shifting user preferences** dynamically by updating distributions.
2. Provides **uncertainty estimates**, which are critical for robust recommendations.
3. Adapts quickly to new trends or new users with little data.
4. Offers principled regularization through priors, avoiding overconfidence in sparse settings.

---

Using Bayesian Logistic Regression allows us to build a more flexible, adaptive, and interpretable approach to modeling user behavior, particularly in environments where preferences evolve (like recommendation systems).


Evaluating a machine learning model's performance is essential to ensure it's making accurate predictions. For a binary classification task, such as predicting whether a user will engage with content (e.g., click/watch a video or not), **offline metrics** like **Normalized Cross Entropy**, **AUC (Area Under the Curve)**, and **LogLoss** are widely used to measure how well a model performs.

Here’s what these metrics are and how you calculate them in practice, including specific scenarios involving probabilistic predictions.

---

### 🌱 **Key Offline Metrics:**

#### 1. **LogLoss (Logarithmic Loss)**

- **LogLoss** measures the uncertainty of predictions. A smaller LogLoss indicates better predictions because the predicted probabilities align closely with the actual outcomes.
- It penalizes incorrect predictions more when the model is confident about the wrong answer (i.e., when the probability is very close to 0 or 1 but the prediction is incorrect).

**Formula:**

\[
\text{LogLoss} = -\frac{1}{N} \sum_{i=1}^{N} \Big( y_i \cdot \log(p_i) + (1 - y_i) \cdot \log(1 - p_i) \Big)
\]

Where:
- \( N \): Total number of samples
- \( y_i \): True label for the \(i\)-th sample (\(1\) or \(0\))
- \( p_i \): Predicted probability for \(y_i=1\)

**Implementation in PyTorch:**

```python
import torch
import torch.nn.functional as F

def log_loss(y_true, y_pred):
    # y_true: Ground truth labels (e.g., torch.tensor([1, 0, 1], dtype=torch.float32))
    # y_pred: Predicted probabilities (e.g., torch.tensor([0.85, 0.1, 0.65]))
    epsilon = 1e-15  # To avoid log(0)
    y_pred = torch.clamp(y_pred, epsilon, 1 - epsilon)  # Clip values to prevent log(0)
    loss = - (y_true * torch.log(y_pred) + (1 - y_true) * torch.log(1 - y_pred))
    return torch.mean(loss)  # Average Log Loss
```

---

#### 2. **AUC (Area Under the Curve)**

- **AUC** (specifically AUC-ROC, Area Under the Receiver Operating Characteristic Curve) evaluates the model's ability to distinguish between positive (\(y_i=1\)) and negative (\(y_i=0\)) classes.
  - It assesses whether the model assigns higher probabilities to positive samples compared to negative samples.
- Perfect AUC = **1**, Random guessing AUC = **0.5**.

**Steps to Compute AUC:**
1. Sort predictions and true labels by the predicted probabilities.
2. Compute **True Positive Rate (TPR)** and **False Positive Rate (FPR)** at different classification thresholds.
3. Plot the ROC curve using TPR vs FPR and use numerical integration (e.g., trapezoidal rule) to calculate the area under the ROC curve.

**Implementation in Python:**
You can use the `scikit-learn` library to calculate AUC efficiently.

```python
from sklearn.metrics import roc_auc_score

def calculate_auc(y_true, y_pred):
    # y_true: Ground truth labels (e.g., [1, 0, 1])
    # y_pred: Predicted probabilities (e.g., [0.85, 0.1, 0.65])
    return roc_auc_score(y_true, y_pred)
```

Under the hood, this function computes the TPR and FPR across all thresholds and integrates the ROC curve.

---

#### 3. **Normalized Cross Entropy (NCE)**

- Also called **log-loss normalization**, it compares your model's performance against a simplistic baseline (e.g., guessing based on the mean of the labels).
- NCE quantifies how much better your model is compared to guessing probabilities naively.

**Formula:**
\[
NCE = 1 - \frac{\text{LogLoss (Model)}}{\text{LogLoss (Baseline)}}
\]

Where:
- **Model LogLoss**: Log loss of your machine learning model.
- **Baseline LogLoss**: Log loss when predicting the constant probability \( p = \frac{\text{Positive Samples (y=1)}}{\text{Total Samples}} \).

Steps:
1. Calculate **baseline probability**, \( p = \frac{\sum_{i=1}^N y_i}{N} \).
2. Compute the LogLoss using this constant probability for all predictions.
3. Measure how much improvement your model makes compared to guessing \(p\) for every sample.

**Implementation in Python:**

```python
def normalized_cross_entropy(y_true, y_pred):
    # Calculate model LogLoss
    model_logloss = log_loss(y_true, y_pred)
    
    # Calculate Baseline LogLoss
    baseline_prob = torch.mean(y_true)  # P(y=1) in the data
    baseline_pred = torch.full_like(y_true, baseline_prob)  # Everyone gets the same prediction
    baseline_logloss = log_loss(y_true, baseline_pred)
    
    # Calculate Normalized Cross Entropy
    return 1 - (model_logloss / baseline_logloss)
```

---

### 🌟 **How These Metrics Work in Practice**

- **LogLoss**: Focuses on the accuracy of predicted probabilities. This is important because in modern recommendation systems, even small differences in predicted probabilities can impact ranking performance.
- **AUC**: Often used when the distribution of positive and negative classes is imbalanced (e.g., only a small percentage of users click on videos). It measures how well the model separates the classes.
- **NCE**: Helps interpret relative model performance compared to a baseline, making it clear how much better your model performs than a simple constant-probability estimator.

---

### 📚 **Example Scenario**

#### Suppose:
- You predict whether a user clicks on a video (\(y=1\)) or not (\(y=0\)).
- Your model outputs predicted probabilities, e.g., \(y_{\text{pred}} = [0.9, 0.4, 0.2, 0.7]\).
- True labels (\(y_{\text{true}}\)): \( [1, 0, 0, 1]\).

#### Steps to Compute Offline Metrics:
1. **LogLoss**:
   Use the formula above:
   \[
   \text{Loss} = -\frac{1}{4} \sum_{i=1}^4 y_i \log(p_i) + (1 - y_i) \log(1 - p_i).
   \]

2. **AUC** (via `roc_auc_score`):
   - Determine the rankings of predictions.
   - Compare how well the model places true positives with higher probabilities than true negatives.

3. **NCE**:
   Compute and compare the LogLoss of your predictions to a constant baseline predictor.

---

### 🛠 **Practical Considerations**
1. **Highly Imbalanced Data**:
   - If most cases are negative (e.g., 99% of predictions are \(y=0\)), metrics like AUC and LogLoss are preferred because they account for imbalance and probabilistic thresholds.

2. **Uncertainty in Probabilities**:
   - LogLoss penalizes overconfident, incorrect predictions harshly, which is why it’s commonly used when optimizing probabilistic models.

3. **Relating to Prediction Tasks**:
   - If you're ranking content (like videos), LogLoss may be more interpretable since it's directly tied to probability calibration.
   - AUC is critical when you care primarily about ranking (positive examples above negative examples).

---

### 🎯 **Conclusion**
By using **LogLoss**, **AUC**, and **NCE**, you can comprehensively evaluate your model:
- **LogLoss**: Measures how well-calibrated your probabilistic predictions are.
- **AUC**: Evaluates how well you separate "positive" from "negative" outcomes.
- **NCE**: Normalizes your model's performance against a simple baseline, providing a meaningful benchmark.

These metrics allow you to evaluate and refine recommendation systems used in dynamic user-centric environments like YouTube or e-commerce platforms.