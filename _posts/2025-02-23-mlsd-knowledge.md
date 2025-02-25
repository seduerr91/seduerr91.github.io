---
title: ML Software Design Knowledge
tags: [Coding]
style: fill
color: secondary
description: 
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