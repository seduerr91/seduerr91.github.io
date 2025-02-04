---
title: ML Engineering Architectures
tags: [Coding]
style: fill
color: secondary
description: Wide and Deep, Two Tower, and more.
---

## Summary

- Two-Tower architecture is suitable for semantic search and question answering tasks.
- DCNv2 is a powerful architecture for CTR and conversion rate prediction tasks.
- Multitask architecture is suitable for joint modeling of multiple related tasks.
- Wide and Deep architecture is well-suited for recommendation systems and personalized ranking tasks.

## Architectures

Here are some specific use cases within big tech companies for feeds, rental listings, or restaurants (Yelp), and the architectures that might be suitable for each:

## Two-Tower Architecture:
- *Use cases:*
    - Semantic search for rental listings (e.g., Airbnb, Zillow)
    - Question answering for restaurant queries (e.g., "What restaurants near me serve vegan food?")
    - Product search for e-commerce feeds (e.g., Amazon)
- *Why:* Two-Tower architecture is well-suited for semantic search and question answering tasks, where the goal is to match user queries with relevant items (e.g., rental listings, restaurants, products).

## DCNv2 (Deep & Cross Network version 2):
- *Use cases:*
    - Click-through rate (CTR) prediction for feed ads (e.g., Facebook, Instagram)
    - Conversion rate prediction for rental listings (e.g., booking probability)
    - Rating prediction for restaurants (e.g., Yelp)
- *Why:* DCNv2 is a powerful architecture for CTR and conversion rate prediction tasks, where the goal is to model complex interactions between user features and item features.

## Multitask Architecture:
- *Use cases:*
    - Joint modeling of user behavior and item attributes for feed ranking (e.g., Twitter, TikTok)
    - Simultaneous prediction of CTR, conversion rate, and rating for rental listings or restaurants
    - Multi-objective optimization for feed ads, balancing CTR, conversion rate, and revenue
- *Why:* Multitask architecture is suitable for scenarios where multiple related tasks need to be learned simultaneously, sharing representations and improving overall performance.

## Wide and Deep Architecture:
- *Use cases:*
    - Recommendation systems for feeds (e.g., YouTube, Netflix)
    - Personalized ranking for rental listings or restaurants
    - Predicting user engagement (e.g., likes, comments, shares) for feed items
- *Why:* Wide and Deep architecture is well-suited for recommendation systems and personalized ranking tasks, where the goal is to model both low- and high-order interactions between user features and item features.

## Wide And Deep Architecture

Below is a self-contained Jupyter notebook example that demonstrates how to implement the Wide and Deep architecture in PyTorch. It includes:

• A synthetic dataset creation step (mimicking a scenario similar to recommending apps to users).  
• A “wide” component: linear layer(s) acting on (one-hot/continuous) features.  
• A “deep” component: embedding layers for categorical features and subsequent fully connected layers.  
• A combined output from both components, followed by training and evaluation.  

You can copy-paste this into a Jupyter notebook cell and run it step by step.

--------------------------------------------------------------------------------
## Wide and Deep with PyTorch
--------------------------------------------------------------------------------

```python
# --------------------------------------------------------------------------------
# CELL 1: Imports
# --------------------------------------------------------------------------------
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
import matplotlib.pyplot as plt

# For reproducibility
torch.manual_seed(42)
np.random.seed(42)
```

```python
# --------------------------------------------------------------------------------
# CELL 2: Synthetic Data Generation
# --------------------------------------------------------------------------------

"""
We will create a simple synthetic dataset to simulate a scenario of "users" and "apps".
We'll assume we want to predict whether a user will install a recommended app or not.

Features:
    - user_id (categorical)
    - user_age (continuous)
    - user_location (categorical)
    - impression_app_id (categorical): the app being recommended
    - user_installed_apps (categorical, multiple apps): We won't deal directly with multiple apps here,
      but we incorporate some basic representation in the wide part.

Target:
    - label: 1 if the user installed the recommended app, 0 otherwise

We will create:
    - 1,000 users
    - 50 apps
    - 10 user_locations
    - A random continuous variable: user_age
    - We'll generate 10,000 data points total
"""

num_users = 1000
num_apps = 50
num_locations = 10

# Number of generated samples
num_samples = 10000

user_ids = np.random.randint(0, num_users, size=num_samples)
user_ages = np.random.randint(10, 70, size=num_samples)  # let's pretend age range is 10 to 70
user_locations = np.random.randint(0, num_locations, size=num_samples)
impression_app_ids = np.random.randint(0, num_apps, size=num_samples)

# Let's define a (very) simple rule for the label:
# We'll say users have some "preferred app" patterns, e.g. if user_id mod 10 == app_id mod 10,
# then there's a higher chance of installation. Also older users might behave differently.
# We'll inject some randomness. In practice, you might have a more sophisticated generation approach.

labels = []
for i in range(num_samples):
    u = user_ids[i]
    a = impression_app_ids[i]
    age = user_ages[i]
    # Make up a probability
    # If user mod 10 == app mod 10, user is 3x more likely to install
    base_prob = 0.1
    if (u % 10) == (a % 10):
        base_prob += 0.3
    # Let's say older users are slightly less likely
    if age > 50:
        base_prob -= 0.05

    # Bound probability between 0 and 1
    base_prob = np.clip(base_prob, 0, 1)
    install = np.random.rand() < base_prob
    labels.append(int(install))

labels = np.array(labels)

# Create a pandas DataFrame for convenience
df = pd.DataFrame({
    "user_id": user_ids,
    "user_age": user_ages,
    "user_location": user_locations,
    "impression_app_id": impression_app_ids,
    "label": labels
})

print(df.head())
print("\nData shape:", df.shape)
```

```python
# --------------------------------------------------------------------------------
# CELL 3: Train-Test Split & Feature Encoding
# --------------------------------------------------------------------------------

"""
We need to split our data into train/test sets and then encode features suitably for the Wide and Deep parts.

Wide part: 
    - We can use one-hot representations (or continuous values) for user_location, impression_app_id.
    - We'll keep user_age as is (continuous).

Deep part:
    - We will use embedding layers for user_id, user_location, impression_app_id.

Note: In a real-world scenario with multiple categorical columns and large cardinalities, 
we might rely on more advanced pipelines. This snippet is simplified for illustration.
"""

train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)

# We will create label encoders / or map directly the categories
# But here we already have user_id, app_id, location_id as integer IDs from 0..n
# So we can just keep them as is for embeddings (since they are integer-coded).

# For the wide part, let's do a one-hot-encoding for user_location and impression_app_id.
# We also keep user_age as a continuous feature in the wide part.

# Let's define the "vocab sizes" for embeddings
user_id_vocab_size = num_users    # from synthetic data generation
app_id_vocab_size = num_apps
location_id_vocab_size = num_locations

# Example: we can define a function that converts each row into wide and deep inputs
from sklearn.preprocessing import OneHotEncoder

# We'll create a OneHotEncoder for user_location and impression_app_id for the wide part
enc = OneHotEncoder(sparse=False, handle_unknown='ignore')

enc.fit(train_df[["user_location", "impression_app_id"]])

# Now we can define a PyTorch Dataset
class WideDeepDataset(Dataset):
    def __init__(self, df, encoder):
        self.df = df.reset_index(drop=True)
        self.encoder = encoder

        # Separate out columns
        self.user_ids = torch.tensor(self.df["user_id"].values, dtype=torch.long)
        self.user_ages = torch.tensor(self.df["user_age"].values, dtype=torch.float)
        self.user_locations = torch.tensor(self.df["user_location"].values, dtype=torch.long)
        self.impression_app_ids = torch.tensor(self.df["impression_app_id"].values, dtype=torch.long)
        
        # Encode location and app_id as one-hot for the wide part
        wide_input = self.encoder.transform(self.df[["user_location", "impression_app_id"]])
        self.wide_input = torch.tensor(wide_input, dtype=torch.float)
        
        self.labels = torch.tensor(self.df["label"].values, dtype=torch.float)

    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        return {
            "user_id": self.user_ids[idx],
            "user_age": self.user_ages[idx],
            "user_location": self.user_locations[idx],
            "impression_app_id": self.impression_app_ids[idx],
            "wide": self.wide_input[idx],
            "label": self.labels[idx]
        }

train_dataset = WideDeepDataset(train_df, enc)
test_dataset = WideDeepDataset(test_df, enc)

batch_size = 32
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

print("Number of training samples:", len(train_dataset))
print("Number of testing samples:", len(test_dataset))
```

```python
# --------------------------------------------------------------------------------
# CELL 4: Define the Wide and Deep Model in PyTorch
# --------------------------------------------------------------------------------

"""
Wide and Deep model:
    - Wide part: linear layer on top of wide_input (which is one-hot plus continuous).
      However, in this example, we integrated continuous user_age in the deep part 
      (just to keep it simpler, you could also incorporate user_age in wide part).

    - Deep part: embedding(user_id), embedding(impression_app_id), embedding(user_location),
      plus some hidden layers.

    - The outputs from the wide and deep parts are combined (summed or concatenated then fed to final layer).
      Google’s paper sums wide and deep. Here, we’ll show a concatenation approach, then feed to final linear.

We have two approaches:
    1) Summation approach:
        final_output = wide_output + deep_output
    2) Concatenation approach:
        final_output = final_layer( concat(wide_output, deep_output) )

To keep it simple, we’ll do Summation approach:
    final_score = wide_out + deep_out
    final_prob = sigmoid(final_score)

We will do a binary classification (install or not).
"""

class WideAndDeep(nn.Module):
    def __init__(self, 
                 wide_input_dim,  # dimension of the one-hot vector for wide part
                 user_id_vocab_size,
                 app_id_vocab_size,
                 location_id_vocab_size,
                 embed_dim=8,
                 hidden_layers=[32, 16],
                 output_dim=1):
        super(WideAndDeep, self).__init__()
        
        # ---------------------------
        # Wide Part
        # ---------------------------
        self.wide_layer = nn.Linear(wide_input_dim, output_dim)
        
        # ---------------------------
        # Deep Part
        # ---------------------------
        # Embeddings
        self.user_embed = nn.Embedding(user_id_vocab_size, embed_dim)
        self.app_embed = nn.Embedding(app_id_vocab_size, embed_dim)
        self.location_embed = nn.Embedding(location_id_vocab_size, embed_dim)
        
        # We will also feed user_age as another input to the deep side
        # We'll have total_len = user_embed_dim + app_embed_dim + location_embed_dim + 1(age)
        deep_input_dim = embed_dim + embed_dim + embed_dim + 1  # user_age dimension = 1

        # Define MLP for deep part
        layers = []
        input_dim = deep_input_dim
        for h in hidden_layers:
            layers.append(nn.Linear(input_dim, h))
            layers.append(nn.ReLU())
            input_dim = h
        
        self.deep_mlp = nn.Sequential(*layers)
        
        # Final layer of deep part
        self.deep_output_layer = nn.Linear(input_dim, output_dim)
        
        # We will combine wide_output + deep_output with a summation approach
        # Then pass through a sigmoid for binary classification
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, wide_input, user_id, user_age, user_location, impression_app_id):
        # Wide forward
        wide_out = self.wide_layer(wide_input)  # shape: (batch_size, output_dim)
        
        # Deep forward
        embed_user = self.user_embed(user_id)               # shape: (batch_size, embed_dim)
        embed_location = self.location_embed(user_location) # shape: (batch_size, embed_dim)
        embed_app = self.app_embed(impression_app_id)       # shape: (batch_size, embed_dim)
        
        # Concatenate embeddings + user_age
        deep_input = torch.cat([
            embed_user, 
            embed_location, 
            embed_app, 
            user_age.unsqueeze(-1)  # shape: (batch_size,1)
        ], dim=-1)                 # shape: (batch_size, 3*embed_dim+1)
        
        deep_x = self.deep_mlp(deep_input)                  # shape: (batch_size, hidden_layers[-1])
        deep_out = self.deep_output_layer(deep_x)           # shape: (batch_size, output_dim)
        
        # Combine wide & deep
        out = wide_out + deep_out
        out = self.sigmoid(out)  # shape: (batch_size, 1)
        
        return out
```

```python
# --------------------------------------------------------------------------------
# CELL 5: Initialize Model, Loss, Optimizer
# --------------------------------------------------------------------------------

# The wide_input_dim is the dimension of the one-hot vectors for [user_location, impression_app_id].
# We can retrieve this from the encoder:
wide_input_dim = train_dataset.wide_input.shape[1]

model = WideAndDeep(
    wide_input_dim=wide_input_dim,
    user_id_vocab_size=user_id_vocab_size,
    app_id_vocab_size=app_id_vocab_size,
    location_id_vocab_size=location_id_vocab_size,
    embed_dim=8,
    hidden_layers=[32, 16],
    output_dim=1
)

# Define loss & optimizer
criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

# If you have a GPU, you can do:
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
print("Using device:", device)
```

```python
# --------------------------------------------------------------------------------
# CELL 6: Training Loop
# --------------------------------------------------------------------------------

epochs = 5
train_losses = []

model.train()
for epoch in range(epochs):
    epoch_loss = 0.0
    for batch in train_loader:
        # Move data to device
        wide_input = batch["wide"].to(device)
        user_id = batch["user_id"].to(device)
        user_age = batch["user_age"].to(device)
        user_location = batch["user_location"].to(device)
        impression_app_id = batch["impression_app_id"].to(device)
        labels = batch["label"].to(device).unsqueeze(1)  # shape: (batch_size, 1)
        
        # Forward pass
        preds = model(wide_input, user_id, user_age, user_location, impression_app_id)
        
        loss = criterion(preds, labels)
        epoch_loss += loss.item()
        
        # Backward and optimize
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
    
    epoch_loss /= len(train_loader)
    train_losses.append(epoch_loss)
    print(f"Epoch [{epoch+1}/{epochs}], Loss: {epoch_loss:.4f}")

# Plot the training loss
plt.plot(train_losses, label="Training Loss")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.legend()
plt.show()
```

```python
# --------------------------------------------------------------------------------
# CELL 7: Evaluation on Test Set
# --------------------------------------------------------------------------------

model.eval()
all_preds = []
all_labels = []

with torch.no_grad():
    for batch in test_loader:
        wide_input = batch["wide"].to(device)
        user_id = batch["user_id"].to(device)
        user_age = batch["user_age"].to(device)
        user_location = batch["user_location"].to(device)
        impression_app_id = batch["impression_app_id"].to(device)
        labels = batch["label"].to(device).unsqueeze(1)

        preds = model(wide_input, user_id, user_age, user_location, impression_app_id)
        all_preds.append(preds.cpu().numpy())
        all_labels.append(labels.cpu().numpy())

all_preds = np.vstack(all_preds)
all_labels = np.vstack(all_labels)

# Round predictions
pred_labels = (all_preds >= 0.5).astype(int)

accuracy = (pred_labels == all_labels).mean()
print(f"Test Accuracy: {accuracy * 100:.2f}%")
```

--------------------------------------------------------------------------------
## Explanation of Key Components
--------------------------------------------------------------------------------

1) Data Generation:  
   - We created synthetic user IDs, app IDs, locations, and a simplistic rule-based label generation.  
   - In practice, you would replace this step with your real dataset.  

2) Wide Part:  
   - One-hot encodes the categorical features (user_location, impression_app_id).  
   - A linear layer (wide_layer) takes these vectors to produce a logit.  

3) Deep Part:  
   - Uses embedding layers for user_id, user_location, impression_app_id.  
   - Includes a continuous feature (user_age) concatenated with the embeddings.  
   - Passes them through a small MLP to produce another logit.  

4) Combination:  
   - Summation of outputs from wide_out and deep_out.  
   - Apply a sigmoid to get a probability for binary classification (installed or not installed).  

5) Training & Evaluation:  
   - We use binary cross-entropy (BCELoss) for classification.  
   - Monitor training loss.  
   - Measure test accuracy at the end.  

With this example, you can see how “memorization” can be captured by the wide part (e.g., frequent co-occurrences among features via one-hot vectors) and “generalization” can be captured by the deep part (e.g., embeddings that can generalize across similar users and apps). The final output is a combination of the two “views” of the data.  

This completes a concise illustration of Wide & Deep architecture with PyTorch. Adjust hyperparameters, model complexity, or embedding sizes as appropriate for your real-world data.  

## Two Tower Architecture

Below is a self-contained Jupyter notebook example that demonstrates how to implement a Two-Tower Retrieval Model (sometimes referred to as a “dual-encoder”) in PyTorch. It includes:

• A synthetic dataset creation step (mimicking a scenario similar to YouTube’s “Watch Next” recommendation).  
• A “User (Query) Tower,” which encodes user and context features into an embedding.  
• An “Item Tower,” which encodes item features (e.g., video metadata) into an embedding.  
• A dot-product scoring function between user and item embeddings, to predict whether the user would watch the video (positive) or not (negative).  
• A training loop that optimizes this retrieval objective.  
• A simple evaluation.  

You can copy-paste this into a Jupyter notebook cell and run it step by step.

--------------------------------------------------------------------------------
# Two-Tower Retrieval Model with PyTorch
--------------------------------------------------------------------------------
```python
--------------------------------------------------------------------------------
## CELL 1: Imports
--------------------------------------------------------------------------------
In [ ]:
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
import matplotlib.pyplot as plt

## For reproducibility
torch.manual_seed(42)
np.random.seed(42)
```
```python
--------------------------------------------------------------------------------
## CELL 2: Synthetic Data Generation
--------------------------------------------------------------------------------
In [ ]:
"""
We'll create a synthetic dataset loosely inspired by a "YouTube Watch Next" scenario. 

We have:
    - user_id (categorical, e.g., 1000 users)
    - context features: time_of_day (morning, afternoon, evening, night => 4 discrete values)
                       device_type (mobile, desktop, tv => 3 discrete values)
    - item_id (categorical, e.g., 200 videos)

We want a training signal: 
   label = 1 if user actually watched the video next, 0 otherwise.

For negative samples, we randomly pair user/context with some items the user *didn't* watch. 
For positive samples, we pair user/context with the item they *did* watch.

We'll produce a balanced dataset of positives and negatives for simplicity. 
In real scenarios, you might do other forms of sampling.
"""

num_users = 1000
num_items = 200
num_samples = 8000  # total interactions (positive + negative)

## user_id
user_ids = np.random.randint(0, num_users, size=num_samples)

## context: time_of_day (0..3), device_type (0..2)
time_of_day = np.random.randint(0, 4, size=num_samples)    # 4 possible times
device_type = np.random.randint(0, 3, size=num_samples)    # 3 possible device types

## For positives, let's pick item_id that "aligns" with user pattern
## For negatives, randomly pick from the rest.
## We'll create 50% positives, 50% negatives. 
## For demonstration, let's define an "alignment" condition: if user_id mod 5 == item_id mod 5, there's a good chance user watches.

labels = np.zeros(num_samples, dtype=np.int32)
item_ids = np.zeros(num_samples, dtype=np.int32)

for i in range(num_samples):
    if i < num_samples // 2:
        # Positive case
        u = user_ids[i]
        # pick an item that "aligns" with user
        possible_items = [x for x in range(num_items) if x % 5 == u % 5]
        if len(possible_items) == 0:
            # fallback
            item_id = np.random.randint(0, num_items)
        else:
            item_id = np.random.choice(possible_items)
        item_ids[i] = item_id
        labels[i] = 1
    else:
        # Negative case
        u = user_ids[i]
        # pick an item that doesn't align
        possible_items = [x for x in range(num_items) if x % 5 != u % 5]
        if len(possible_items) == 0:
            # fallback
            item_id = np.random.randint(0, num_items)
        else:
            item_id = np.random.choice(possible_items)
        item_ids[i] = item_id
        labels[i] = 0

df = pd.DataFrame({
    "user_id": user_ids,
    "time_of_day": time_of_day,
    "device_type": device_type,
    "item_id": item_ids,
    "label": labels
})

print(df.head())
print("\nData shape:", df.shape)
```
```python
--------------------------------------------------------------------------------
## CELL 3: Train-Test Split & Dataset Class
--------------------------------------------------------------------------------
In [ ]:
train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)

train_df = train_df.reset_index(drop=True)
test_df = test_df.reset_index(drop=True)

print(f"Train samples: {len(train_df)}, Test samples: {len(test_df)}")

class TwoTowerDataset(Dataset):
    def __init__(self, df):
        self.df = df

        # Convert to PyTorch tensors
        self.user_ids = torch.tensor(df["user_id"].values, dtype=torch.long)
        self.time_of_day = torch.tensor(df["time_of_day"].values, dtype=torch.long)
        self.device_type = torch.tensor(df["device_type"].values, dtype=torch.long)
        self.item_ids = torch.tensor(df["item_id"].values, dtype=torch.long)
        self.labels = torch.tensor(df["label"].values, dtype=torch.float)
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        return {
            "user_id": self.user_ids[idx],
            "time_of_day": self.time_of_day[idx],
            "device_type": self.device_type[idx],
            "item_id": self.item_ids[idx],
            "label": self.labels[idx]
        }

train_dataset = TwoTowerDataset(train_df)
test_dataset = TwoTowerDataset(test_df)

batch_size = 64
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)
```
```python
--------------------------------------------------------------------------------
## CELL 4: Two-Tower Model Definition
--------------------------------------------------------------------------------
In [ ]:
"""
We create a model with two separate "towers":

User Tower / Query Tower:
    - Takes user_id, time_of_day, device_type and produces an embedding vector.

Item Tower:
    - Takes item_id and produces an embedding vector.

Scoring function = dot product of (user tower output, item tower output).

We then apply a sigmoid to interpret that as P(label=1). 
We train with a BCE loss to distinguish positive from negative interactions.
"""

class UserTower(nn.Module):
    def __init__(self, 
                 user_id_vocab_size,
                 time_of_day_vocab_size,
                 device_type_vocab_size,
                 embed_dim):
        super(UserTower, self).__init__()
        # Embeddings for each categorical feature
        self.user_embed = nn.Embedding(user_id_vocab_size, embed_dim)
        self.time_embed = nn.Embedding(time_of_day_vocab_size, embed_dim)
        self.device_embed = nn.Embedding(device_type_vocab_size, embed_dim)
        
        # We combine these embeddings (by sum or average or a small MLP)
        # Here, let's do a simple concatenation and then MLP.
        input_dim = embed_dim * 3  # because we have 3 embeddings
        hidden_dim = 64
        self.mlp = nn.Sequential(
            nn.Linear(input_dim, hidden_dim),
            nn.ReLU(),
            nn.Linear(hidden_dim, embed_dim)  # final embedding dimension
        )

    def forward(self, user_id, time_of_day, device_type):
        ue = self.user_embed(user_id)
        te = self.time_embed(time_of_day)
        de = self.device_embed(device_type)
        
        x = torch.cat([ue, te, de], dim=-1)  # (batch_size, 3*embed_dim)
        out = self.mlp(x)                   # (batch_size, embed_dim)
        return out

class ItemTower(nn.Module):
    def __init__(self, 
                 item_id_vocab_size,
                 embed_dim):
        super(ItemTower, self).__init__()
        self.item_embed = nn.Embedding(item_id_vocab_size, embed_dim)
        # Optionally add more layers or attributes for items
        # For simplicity, let's just do a direct embedding
    def forward(self, item_id):
        return self.item_embed(item_id)  # (batch_size, embed_dim)

class TwoTowerModel(nn.Module):
    def __init__(self,
                 user_id_vocab_size,
                 time_of_day_vocab_size,
                 device_type_vocab_size,
                 item_id_vocab_size,
                 embed_dim=16):
        super(TwoTowerModel, self).__init__()
        # Instantiate the two towers
        self.user_tower = UserTower(user_id_vocab_size,
                                    time_of_day_vocab_size,
                                    device_type_vocab_size,
                                    embed_dim)
        
        self.item_tower = ItemTower(item_id_vocab_size, embed_dim)
        
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, user_id, time_of_day, device_type, item_id):
        user_embedding = self.user_tower(user_id, time_of_day, device_type)   # (batch_size, embed_dim)
        item_embedding = self.item_tower(item_id)                             # (batch_size, embed_dim)
        
        # Dot product
        scores = (user_embedding * item_embedding).sum(dim=-1)  # (batch_size)
        
        # Sigmoid to get probability
        probs = self.sigmoid(scores)
        return probs  # (batch_size)
```
```python
--------------------------------------------------------------------------------
## CELL 5: Initialize Model, Loss, Optimizer
--------------------------------------------------------------------------------
In [ ]:
"""
Now we instantiate the model and set up for training.
We need to specify vocab sizes:
"""
user_id_vocab_size = num_users
time_of_day_vocab_size = 4   # 4 possible times
device_type_vocab_size = 3   # 3 possible devices
item_id_vocab_size = num_items
embed_dim = 16

model = TwoTowerModel(user_id_vocab_size,
                      time_of_day_vocab_size,
                      device_type_vocab_size,
                      item_id_vocab_size,
                      embed_dim=embed_dim)

criterion = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=1e-3)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)
print("Using device:", device)
```
```python
--------------------------------------------------------------------------------
## CELL 6: Training Loop
--------------------------------------------------------------------------------
In [ ]:
epochs = 5
train_losses = []

model.train()
for epoch in range(epochs):
    epoch_loss = 0.0
    for batch in train_loader:
        user_id = batch["user_id"].to(device)
        time_of_day = batch["time_of_day"].to(device)
        device_type = batch["device_type"].to(device)
        item_id = batch["item_id"].to(device)
        labels = batch["label"].to(device)
        
        # Forward
        preds = model(user_id, time_of_day, device_type, item_id)
        loss = criterion(preds, labels)
        
        # Backprop
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        
        epoch_loss += loss.item()
    
    epoch_loss /= len(train_loader)
    train_losses.append(epoch_loss)
    print(f"Epoch [{epoch+1}/{epochs}], Loss: {epoch_loss:.4f}")

plt.plot(train_losses, label="Training Loss")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.legend()
plt.show()
```
```python
--------------------------------------------------------------------------------
## CELL 7: Evaluation on Test Set
--------------------------------------------------------------------------------
In [ ]:
model.eval()
test_preds = []
test_labels = []

with torch.no_grad():
    for batch in test_loader:
        user_id = batch["user_id"].to(device)
        time_of_day = batch["time_of_day"].to(device)
        device_type = batch["device_type"].to(device)
        item_id = batch["item_id"].to(device)
        labels = batch["label"].to(device)
        
        preds = model(user_id, time_of_day, device_type, item_id)
        
        test_preds.append(preds.cpu().numpy())
        test_labels.append(labels.cpu().numpy())

test_preds = np.concatenate(test_preds, axis=0)
test_labels = np.concatenate(test_labels, axis=0)

## Convert probabilities to binary predictions
pred_labels = (test_preds >= 0.5).astype(int)
accuracy = (pred_labels == test_labels).mean()
print(f"Test Accuracy: {accuracy * 100:.2f}%")
```
--------------------------------------------------------------------------------
## Explanation of Key Components
--------------------------------------------------------------------------------

1) Data Generation:  
   • Synthetic “Watch Next” dataset with user_id, time_of_day, device_type, item_id, and a binary label.  
   • We create positive samples (label=1) for (user, item) pairs that “match” a simple alignment rule.  
   • Create negative samples (label=0) for everything else.  

2) Two Towers:  
   • User Tower (a.k.a. Query Tower) encodes (user_id, time_of_day, device_type) → user embedding.  
   • Item Tower encodes item_id → item embedding.  

3) Scoring:  
   • Dot product of user embedding and item embedding.  
   • Sigmoid to turn that score into a probability (did the user watch next?).  

4) Loss & Training:  
   • Binary cross-entropy (BCELoss) for classification: distinguish positive from negative samples.  
   • In practice, you might do other negative sampling strategies or sample many negatives for each positive.  

5) Inference/Evaluation:  
   • Accuracy is computed as the fraction of correct predictions on the test set.  

This architecture is common when building large-scale retrieval systems—once trained, you can compute embeddings for users (queries) and items, then use a similarity search (e.g., approximate nearest neighbor) to retrieve top items for a user.

# Deep Cross Network

Below is a self-contained Jupyter notebook example that demonstrates how to implement DCN v2 (Deep & Cross Network v2) in PyTorch with a toy multi-task setup reminiscent of YouTube’s “Watch Next” ranking. The example:

• Creates a synthetic dataset with user/context/item features.  
• Has two tasks: (1) Binary classification (whether user watched), and (2) Regression (e.g., watch time).  
• Uses two cross-layers in a stacked fashion (which often works well in practice).  
• Employs a low-rank cross-layer decomposition (rank = input_size/4 as suggested).  
• Combines cross-network output with a standard feed-forward “deep” network, then projects into multi-task heads.  

You can copy-paste and run it in a Jupyter notebook cell. Enjoy experimenting!
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 1: Imports
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
import matplotlib.pyplot as plt

## For reproducibility
torch.manual_seed(42)
np.random.seed(42)
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 2: Synthetic Data Generation
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
We'll synthesize a dataset mimicking a YouTube watch-next scenario with multi-task labels:
   - Label 1: did the user watch the suggested video or not (binary classification)
   - Label 2: watch time in seconds (regression)

Features:
   - user_id (categorical)
   - time_of_day (categorical, e.g., 4: morning, afternoon, evening, night)
   - device_type (categorical, e.g., 3: mobile, desktop, tablet)
   - item_id (categorical)
   
We create ~10,000 rows with half "positive" watch events and half "negative" events.
For positives, watch_time is a random positive integer from 1 to 600. 
For negatives, watch_time is often 0 (or near 0).
"""

num_users = 1000
num_items = 300
num_samples = 10000

user_ids = np.random.randint(0, num_users, size=num_samples)
time_of_day = np.random.randint(0, 4, size=num_samples)    # 0..3
device_type = np.random.randint(0, 3, size=num_samples)    # 0..2
item_ids = np.random.randint(0, num_items, size=num_samples)

## Let's define label1 = did_watch (binary), label2 = watch_time
## We'll do 50% positives/50% negatives. For positives, watch_time in [1..600].
## For negatives, watch_time is mostly 0.

label_watch = np.zeros(num_samples, dtype=int)
label_time = np.zeros(num_samples, dtype=float)

for i in range(num_samples):
    if i < num_samples // 2:
        # Positive
        label_watch[i] = 1
        label_time[i] = np.random.randint(1, 600)
    else:
        # Negative
        label_watch[i] = 0
        # Possibly some small watch time
        label_time[i] = np.random.choice([0, 5, 10, 20], p=[0.7, 0.1, 0.1, 0.1])

df = pd.DataFrame({
    "user_id": user_ids,
    "time_of_day": time_of_day,
    "device_type": device_type,
    "item_id": item_ids,
    "did_watch": label_watch,
    "watch_time": label_time
})

print(df.head())
print("Data shape:", df.shape)
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 3: Train-Test Split & PyTorch Dataset
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)

train_df = train_df.reset_index(drop=True)
test_df = test_df.reset_index(drop=True)

class DCNv2Dataset(Dataset):
    def __init__(self, data_df):
        super().__init__()
        self.df = data_df
        
        # Convert to tensors
        self.user_ids = torch.tensor(self.df["user_id"].values, dtype=torch.long)
        self.time_of_day = torch.tensor(self.df["time_of_day"].values, dtype=torch.long)
        self.device_type = torch.tensor(self.df["device_type"].values, dtype=torch.long)
        self.item_ids = torch.tensor(self.df["item_id"].values, dtype=torch.long)
        self.did_watch = torch.tensor(self.df["did_watch"].values, dtype=torch.float)
        self.watch_time = torch.tensor(self.df["watch_time"].values, dtype=torch.float)
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        return {
            "user_id": self.user_ids[idx],
            "time_of_day": self.time_of_day[idx],
            "device_type": self.device_type[idx],
            "item_id": self.item_ids[idx],
            "label_watch": self.did_watch[idx],
            "label_time": self.watch_time[idx]
        }

train_dataset = DCNv2Dataset(train_df)
test_dataset = DCNv2Dataset(test_df)

batch_size = 64
train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=batch_size, shuffle=False)

print(f"Training samples: {len(train_dataset)}, Testing samples: {len(test_dataset)}")
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 4: Define a Simple Embedding Layer for Categorical Features
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
We’ll define a small function that:
  - Takes user_id, time_of_day, device_type, item_id
  - Embeds them (via nn.Embedding)
  - Concatenates into a single vector of dimension total_embed_dim
That will be used as the input to the DCN v2.

Then DCN v2 will build cross-layers on top of that input, followed by a deep MLP, 
and finally multi-task output heads for:
  - watch probability (binary classification)
  - watch time (regression)
"""

class FeatureEmbedding(nn.Module):
    def __init__(
        self,
        user_vocab_size,
        time_vocab_size,
        device_vocab_size,
        item_vocab_size,
        embed_dim=8
    ):
        super().__init__()
        self.user_embed = nn.Embedding(user_vocab_size, embed_dim)
        self.time_embed = nn.Embedding(time_vocab_size, embed_dim)
        self.device_embed = nn.Embedding(device_vocab_size, embed_dim)
        self.item_embed = nn.Embedding(item_vocab_size, embed_dim)
        
    def forward(self, user_id, time_id, device_id, item_id):
        ue = self.user_embed(user_id)      # (batch_size, embed_dim)
        te = self.time_embed(time_id)      # (batch_size, embed_dim)
        de = self.device_embed(device_id)  # (batch_size, embed_dim)
        ie = self.item_embed(item_id)      # (batch_size, embed_dim)
        
        # Concatenate
        x = torch.cat([ue, te, de, ie], dim=-1)
        return x

```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 5: Implement CrossNetworkV2 (Stacked Cross Layers) with Low-Rank
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
Reference: DCN v2 (https://arxiv.org/pdf/2008.13535.pdf)
Cross layer formula (vectorized):
  x_{l+1} = x_0 * (x_l^T * W_l) + b_l + x_l

In DCN v2 "low-rank" version, W_l is decomposed as U_l * V_l (rank-r).
Hence:
  x_{l+1} = x_0 * (x_l^T * U_l * V_l) + b_l + x_l

We stack multiple cross layers. 
We'll do 2 cross layers, as recommended in the question statement. 
We'll keep rank = input_dim//4. 
"""

class CrossNetworkV2(nn.Module):
    def __init__(self, input_dim, num_layers=2, low_rank_dim=None):
        super().__init__()
        self.num_layers = num_layers
        if low_rank_dim is None:
            # default: rank = input_dim//4
            low_rank_dim = max(1, input_dim // 4)
        
        # For each layer l, define:
        #   U_l: (input_dim, low_rank_dim)
        #   V_l: (low_rank_dim, input_dim)
        #   b_l: (input_dim,)
        self.U_list = nn.ParameterList()
        self.V_list = nn.ParameterList()
        self.bias_list = nn.ParameterList()
        
        for _ in range(num_layers):
            U = nn.Parameter(torch.randn(input_dim, low_rank_dim) * 0.01)
            V = nn.Parameter(torch.randn(low_rank_dim, input_dim) * 0.01)
            b = nn.Parameter(torch.zeros(input_dim))
            
            self.U_list.append(U)
            self.V_list.append(V)
            self.bias_list.append(b)

    def forward(self, x0):
        # x0 is the original input
        x = x0
        for l in range(self.num_layers):
            # x_l shape: (batch_size, d)
            # x0 shape: (batch_size, d)
            # U_l shape: (d, r)
            # V_l shape: (r, d)
            # b_l shape: (d,)
            x_l = x
            U_l = self.U_list[l]
            V_l = self.V_list[l]
            b_l = self.bias_list[l]
            
            # cross = x0 * (x_l * U_l * V_l) => 
            # But we must do: (x_l @ U_l) => (batch_size, r)
            # then => (batch_size, r) @ V_l => (batch_size, d)
            # multiply by x0 elementwise => (batch_size, d)
            cross_term = (x_l @ U_l) @ V_l  # shape: (batch_size, d)
            cross_term = x0 * cross_term   # elementwise multiply
            
            x = cross_term + b_l + x_l     # shape: (batch_size, d)
        return x
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 6: Combine DCN v2 with a Deep MLP and Multi-Task Heads
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
We'll define a DCNv2Model that:

1) Embeds the input features into an initial vector (FeatureEmbedding).
2) Passes that embedding through cross-network (2 cross layers).
3) Also passes that embedding (or the cross output) into a deep MLP (stacked-based approach).
   - We add the cross output and original input (stacked approach from the paper) 
   - Then feed into hidden layers
4) Multi-task heads: 
   - Task 1: watch classification (binary)
   - Task 2: watch time regression

We combine the losses (BCE + MSE).
"""

class DCNv2Model(nn.Module):
    def __init__(
        self,
        user_vocab_size,
        time_vocab_size,
        device_vocab_size,
        item_vocab_size,
        embed_dim=8,
        cross_num_layers=2,
        dnn_hidden_units=[64, 32],
    ):
        super().__init__()
        
        # 1) Embedding
        self.embedding = FeatureEmbedding(
            user_vocab_size,
            time_vocab_size,
            device_vocab_size,
            item_vocab_size,
            embed_dim=embed_dim
        )
        
        # The dimension of the concatenated embedding: 4 * embed_dim
        self.input_dim = 4 * embed_dim
        
        # 2) Cross Network V2
        self.cross_net = CrossNetworkV2(
            input_dim=self.input_dim,
            num_layers=cross_num_layers,
            low_rank_dim=self.input_dim // 4  # as suggested
        )
        
        # 3) Deep Network
        #    We'll do a "stacked" approach from DCN v2: 
        #    x -> cross_net_output, then concat [cross_out, x] -> MLP
        layers = []
        dnn_input_dim = self.input_dim + self.input_dim  # cross_out + original input
        for h in dnn_hidden_units:
            layers.append(nn.Linear(dnn_input_dim, h))
            layers.append(nn.ReLU())
            dnn_input_dim = h
        self.dnn = nn.Sequential(*layers)
        
        # 4) Multi-task heads
        #    (a) watch classification: single logit => apply sigmoid externally
        self.watch_head = nn.Linear(dnn_input_dim, 1)
        #    (b) watch time regression: single value
        self.time_head = nn.Linear(dnn_input_dim, 1)
        
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, user_id, time_of_day, device_type, item_id):
        # Embedding
        x = self.embedding(user_id, time_of_day, device_type, item_id)  # shape: (batch_size, input_dim)
        
        # Cross Net
        cross_out = self.cross_net(x)  # shape: (batch_size, input_dim)
        
        # Stacked approach: concat cross_out + original x => feed MLP
        deep_in = torch.cat([cross_out, x], dim=-1)  # shape: (batch_size, 2*input_dim)
        deep_out = self.dnn(deep_in)                # shape: (batch_size, last_hidden_unit)
        
        # Multi-task heads
        watch_logit = self.watch_head(deep_out)   # (batch_size, 1)
        watch_prob = self.sigmoid(watch_logit)    # classification probability
        
        watch_time = self.time_head(deep_out)     # (batch_size, 1) regression output
        
        return watch_prob, watch_time
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 7: Training DCN v2 (Multi-Task)
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
We'll train for multiple epochs, computing:
  - BCE loss for "did_watch"
  - MSE loss for "watch_time"
We combine these two losses (just a simple sum or weigh them).
"""

## Instantiate model
user_vocab_size = 1000  # from data
time_vocab_size = 4
device_vocab_size = 3
item_vocab_size = 300

model = DCNv2Model(
    user_vocab_size=user_vocab_size,
    time_vocab_size=time_vocab_size,
    device_vocab_size=device_vocab_size,
    item_vocab_size=item_vocab_size,
    embed_dim=8,
    cross_num_layers=2,  # recommended
    dnn_hidden_units=[64, 32]
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

## Optimizer
optimizer = optim.Adam(model.parameters(), lr=1e-3)

## Losses
bce_loss_fn = nn.BCELoss()
mse_loss_fn = nn.MSELoss()

epochs = 5
train_losses = []

for epoch in range(epochs):
    model.train()
    total_loss = 0.0
    
    for batch in train_loader:
        user_id = batch["user_id"].to(device)
        tod = batch["time_of_day"].to(device)
        dev = batch["device_type"].to(device)
        item_id = batch["item_id"].to(device)
        label_watch = batch["label_watch"].to(device)
        label_time = batch["label_time"].to(device)
        
        optimizer.zero_grad()
        
        watch_prob, watch_time_pred = model(user_id, tod, dev, item_id)
        
        # watch_prob shape: (batch_size, 1)
        # watch_time_pred shape: (batch_size, 1)
        # label_watch shape: (batch_size)
        # label_time shape: (batch_size)
        
        # Flatten watch_prob, watch_time_pred for convenience
        watch_prob = watch_prob.view(-1)
        watch_time_pred = watch_time_pred.view(-1)
        
        loss_bce = bce_loss_fn(watch_prob, label_watch)
        loss_mse = mse_loss_fn(watch_time_pred, label_time)
        
        # Combine
        # In practice, you might experiment with weighting these two losses.
        loss = loss_bce + 0.001 * loss_mse  # e.g. smaller weight on MSE for demonstration
        
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
    
    avg_loss = total_loss / len(train_loader)
    train_losses.append(avg_loss)
    print(f"Epoch [{epoch+1}/{epochs}] - Loss: {avg_loss:.4f}")

## Plot training loss
plt.plot(train_losses, label="Training Loss")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.legend()
plt.show()
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 8: Evaluation
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
from sklearn.metrics import roc_auc_score

model.eval()
watch_probs_all = []
watch_labels_all = []
time_preds_all = []
time_labels_all = []

with torch.no_grad():
    for batch in test_loader:
        user_id = batch["user_id"].to(device)
        tod = batch["time_of_day"].to(device)
        dev = batch["device_type"].to(device)
        item_id = batch["item_id"].to(device)
        label_watch = batch["label_watch"].to(device)
        label_time = batch["label_time"].to(device)
        
        watch_prob, watch_time_pred = model(user_id, tod, dev, item_id)
        
        watch_probs_all.append(watch_prob.view(-1).cpu().numpy())
        watch_labels_all.append(label_watch.cpu().numpy())
        
        time_preds_all.append(watch_time_pred.view(-1).cpu().numpy())
        time_labels_all.append(label_time.cpu().numpy())

watch_probs_all = np.concatenate(watch_probs_all)
watch_labels_all = np.concatenate(watch_labels_all)
time_preds_all = np.concatenate(time_preds_all)
time_labels_all = np.concatenate(time_labels_all)

## Compute AUC for classification
auc = roc_auc_score(watch_labels_all, watch_probs_all)
print(f"Classification AUC: {auc:.4f}")

## Compute MSE for watch_time
mse = np.mean((time_preds_all - time_labels_all)**2)
print(f"Watch Time MSE: {mse:.2f}")
```
---
Explanation
---

1) Data:  
   • We simulate user/context/item features and two tasks: (a) watch or not, (b) total watch time.  

2) Feature Embedding:  
   • We embed each categorical feature (user, time_of_day, device_type, item) and concatenate into a dense input vector.  

3) DCN v2 Cross Layers:  
   • We define two cross-layers in a stacked manner.  
   • Each cross layer performs x_{l+1} = x_0 * (x_l^T * U_l * V_l) + b_l + x_l.  
   • Low-rank factorization: W_l = U_l × V_l reduces parameter size and can help training stability.  

4) Deep Network:  
   • The cross output is concatenated with the original input (stacked-based approach from DCN v2).  
   • This goes through a feed-forward MLP.  

5) Multi-Task Heads:  
   • We have one head for binary classification (watch or not) and another for regression (watch time).  

6) Loss:  
   • We combine BCE (classification) and MSE (regression). In real systems, weight them suitably or use other strategies (e.g., uncertainty weighting).  

7) Metrics:  
   • We measure classification AUC and watch-time MSE on the test set.  

In production, DCN v2 has shown improvements in AUCLoss (1 – AUC), with even a 0.1% improvement being significant in large-scale recommendation systems. The cross layers automatically learn intricate feature interactions, often outperforming straightforward deep (MLP) models or manually engineered cross features.  

# Multitask Learning

Below is a self-contained PyTorch example demonstrating a multi-task learning architecture with two classification outputs: p(like) and p(comment). We then show how one might “blend” or combine these two probabilities for ranking, inspired by the approach Instagram has used—mapping probabilities to a well-behaved distribution (like a Gaussian) before combining them. We will:

• Create a synthetic dataset for user–item interactions with two boolean labels: like_label and comment_label.  
• Build a multi-task model that outputs p(like) and p(comment).  
• Train with separate binary cross-entropy losses for each task.  
• Demonstrate a ranking phase that blends p(like) and p(comment) into a single “score.”  
• Illustrate how to map probabilities to a Gaussian distribution (via an inverse CDF, also known as the probit function) for more stable blending across different content types (photo vs. video).  

```python
────────────────────────────────────────────────────────────────────────────────────
CELL 1: Imports
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from torch.utils.data import Dataset, DataLoader
import matplotlib.pyplot as plt
import math
from scipy.special import erfinv  # For inverse error function, used in probit

## For reproducibility
torch.manual_seed(42)
np.random.seed(42)
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 2: Synthetic Data Generation
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
"""
We'll create a small synthetic dataset for demonstration. Each row represents a user-item interaction.  
Features:  
  - user_id (categorical)  
  - item_id (categorical)  
  - item_type (binary or categorical: 0 => photo, 1 => video)  
  - context_feature (like time_of_day or something else)  

Targets (multi-task):  
  - like_label (did the user like the item?)  
  - comment_label (did the user comment on the item?)  

We’ll assume photos are more likely to receive likes, but less likely to receive comments (for example).  
Videos are slightly less likely to get likes but more likely to get comments.  
Of course, all of this is purely illustrative.
"""

num_users = 500
num_items = 200
num_samples = 3000

user_ids = np.random.randint(0, num_users, size=num_samples)
item_ids = np.random.randint(0, num_items, size=num_samples)
item_type = np.random.randint(0, 2, size=num_samples)  # 0 => photo, 1 => video
context_feature = np.random.randint(0, 4, size=num_samples)  # e.g. 4 discrete contexts

## Probability model for synthetic data
like_probs = []
comment_probs = []
for i in range(num_samples):
    # Base probability
    base_like = 0.3
    base_comment = 0.1

    # If item is a photo
    if item_type[i] == 0:
        # higher like probability, lower comment probability
        base_like += 0.2  # more likely to get likes
        base_comment += 0.05
    else:
        # item is a video
        base_like += 0.1
        base_comment += 0.15  # more likely to get comments
    
    # Some random user effect
    if user_ids[i] % 10 == 0:
        base_like += 0.05
        base_comment += 0.03

    # Some random context effect
    if context_feature[i] == 1:
        base_like += 0.03
    elif context_feature[i] == 2:
        base_comment += 0.02
    
    like_probs.append(min(max(base_like, 0.0), 1.0))
    comment_probs.append(min(max(base_comment, 0.0), 1.0))

like_probs = np.array(like_probs)
comment_probs = np.array(comment_probs)

like_labels = (np.random.rand(num_samples) < like_probs).astype(int)
comment_labels = (np.random.rand(num_samples) < comment_probs).astype(int)

df = pd.DataFrame({
    "user_id": user_ids,
    "item_id": item_ids,
    "item_type": item_type,
    "context_feature": context_feature,
    "like_label": like_labels,
    "comment_label": comment_labels
})

print(df.head())
print("Data shape:", df.shape)
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 3: Dataset and DataLoaders
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)
train_df = train_df.reset_index(drop=True)
test_df = test_df.reset_index(drop=True)

class MultiTaskDataset(Dataset):
    def __init__(self, data_df):
        super().__init__()
        self.df = data_df
        
        self.user_ids = torch.tensor(self.df["user_id"].values, dtype=torch.long)
        self.item_ids = torch.tensor(self.df["item_id"].values, dtype=torch.long)
        self.item_type = torch.tensor(self.df["item_type"].values, dtype=torch.long)
        self.context_feature = torch.tensor(self.df["context_feature"].values, dtype=torch.long)
        self.like_labels = torch.tensor(self.df["like_label"].values, dtype=torch.float)
        self.comment_labels = torch.tensor(self.df["comment_label"].values, dtype=torch.float)
    
    def __len__(self):
        return len(self.df)
    
    def __getitem__(self, idx):
        return {
            "user_id": self.user_ids[idx],
            "item_id": self.item_ids[idx],
            "item_type": self.item_type[idx],
            "context_feature": self.context_feature[idx],
            "like_label": self.like_labels[idx],
            "comment_label": self.comment_labels[idx]
        }

train_dataset = MultiTaskDataset(train_df)
test_dataset = MultiTaskDataset(test_df)

train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
test_loader = DataLoader(test_dataset, batch_size=64, shuffle=False)

print(f"Training samples: {len(train_dataset)}, Testing samples: {len(test_dataset)}")
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 4: Define an Embedding Module for Inputs
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
class FeatureEmbedder(nn.Module):
    """
    Simple embedding approach:
      - user_id -> embed
      - item_id -> embed
      - item_type -> embed
      - context_feature -> embed
    Then concatenate these embeddings into a single vector.
    """
    def __init__(self,
                 num_users,
                 num_items,
                 num_item_types=2,
                 num_contexts=4,
                 embed_dim=8):
        super().__init__()
        
        self.user_embed = nn.Embedding(num_users, embed_dim)
        self.item_embed = nn.Embedding(num_items, embed_dim)
        self.type_embed = nn.Embedding(num_item_types, embed_dim)
        self.context_embed = nn.Embedding(num_contexts, embed_dim)
        
        # We will init embeddings with small random values
        # for demonstration (default PyTorch init is typically fine).
        
    def forward(self, user_id, item_id, item_type, context_feature):
        ue = self.user_embed(user_id)            # (batch_size, embed_dim)
        ie = self.item_embed(item_id)
        te = self.type_embed(item_type)
        ce = self.context_embed(context_feature)
        
        x = torch.cat([ue, ie, te, ce], dim=-1)  # shape: (batch_size, 4*embed_dim)
        return x
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 5: Define Multi-Task Model
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
class MultiTaskModel(nn.Module):
    """
    A simple multi-task model that:
      1) Embeds the categorical features into a single dense vector
      2) Passes through a small MLP
      3) Outputs two heads:
         - (a) p(like)
         - (b) p(comment)
    Both are treated as binary classification => each is a logit => apply sigmoid.
    """
    def __init__(self,
                 num_users,
                 num_items,
                 num_item_types=2,
                 num_contexts=4,
                 embed_dim=8,
                 hidden_units=[32, 16]):
        super().__init__()
        self.embedder = FeatureEmbedder(num_users, num_items, num_item_types, num_contexts, embed_dim)
        
        input_dim = 4 * embed_dim  # from the concatenation
        layers = []
        for h in hidden_units:
            layers.append(nn.Linear(input_dim, h))
            layers.append(nn.ReLU())
            input_dim = h
        self.mlp = nn.Sequential(*layers)
        
        # Two separate heads for p(like) and p(comment)
        self.like_head = nn.Linear(input_dim, 1)
        self.comment_head = nn.Linear(input_dim, 1)
        
        self.sigmoid = nn.Sigmoid()
    
    def forward(self, user_id, item_id, item_type, context_feature):
        x = self.embedder(user_id, item_id, item_type, context_feature)
        x = self.mlp(x)
        
        like_logit = self.like_head(x)       # (batch_size, 1)
        comment_logit = self.comment_head(x) # (batch_size, 1)
        
        p_like = self.sigmoid(like_logit)         # => p(like)
        p_comment = self.sigmoid(comment_logit)   # => p(comment)
        return p_like, p_comment
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 6: Training Loop
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
## Instantiate model
num_users_ = 500
num_items_ = 200
num_item_types_ = 2
num_contexts_ = 4

model = MultiTaskModel(
    num_users=num_users_,
    num_items=num_items_,
    num_item_types=num_item_types_,
    num_contexts=num_contexts_,
    embed_dim=8,
    hidden_units=[32, 16]
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model.to(device)

optimizer = optim.Adam(model.parameters(), lr=1e-3)
bce_loss_fn = nn.BCELoss()

epochs = 5
train_losses = []

for epoch in range(epochs):
    model.train()
    total_loss = 0.0
    
    for batch in train_loader:
        user_id = batch["user_id"].to(device)
        item_id = batch["item_id"].to(device)
        itype = batch["item_type"].to(device)
        context = batch["context_feature"].to(device)
        like_label = batch["like_label"].to(device)
        comment_label = batch["comment_label"].to(device)
        
        optimizer.zero_grad()
        
        p_like, p_comment = model(user_id, item_id, itype, context)
        
        p_like = p_like.view(-1)       # (batch_size)
        p_comment = p_comment.view(-1) # (batch_size)
        
        loss_like = bce_loss_fn(p_like, like_label)
        loss_comment = bce_loss_fn(p_comment, comment_label)
        
        # Combine the two task losses. You may tune weighting if needed.
        loss = loss_like + loss_comment
        
        loss.backward()
        optimizer.step()
        
        total_loss += loss.item()
    
    avg_loss = total_loss / len(train_loader)
    train_losses.append(avg_loss)
    print(f"Epoch [{epoch+1}/{epochs}] - Loss: {avg_loss:.4f}")

plt.plot(train_losses, label="Training Loss")
plt.xlabel("Epoch")
plt.ylabel("Loss")
plt.legend()
plt.show()
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 7: Evaluation + “Blending” for Ranking
────────────────────────────────────────────────────────────────────────────────────
In [ ]:
model.eval()

pred_likes = []
pred_comments = []
true_likes = []
true_comments = []
items = []
types = []

with torch.no_grad():
    for batch in test_loader:
        user_id = batch["user_id"].to(device)
        item_id = batch["item_id"].to(device)
        itype = batch["item_type"].to(device)
        context = batch["context_feature"].to(device)
        like_label = batch["like_label"].to(device)
        comment_label = batch["comment_label"].to(device)
        
        p_like, p_comment = model(user_id, item_id, itype, context)
        
        pred_likes.extend(p_like.view(-1).cpu().numpy())
        pred_comments.extend(p_comment.view(-1).cpu().numpy())
        true_likes.extend(like_label.cpu().numpy())
        true_comments.extend(comment_label.cpu().numpy())
        items.extend(item_id.cpu().numpy())
        types.extend(itype.cpu().numpy())

pred_likes = np.array(pred_likes)
pred_comments = np.array(pred_comments)
true_likes = np.array(true_likes)
true_comments = np.array(true_comments)
items = np.array(items)
types = np.array(types)

## 1) Basic example: rank based on some weighted combination
##    For instance, rank_score = α * p(like) + β * p(comment)
##    Let's do an example with α=1, β=1 => rank_score = p(like) + p(comment).

alpha = 1.0
beta = 1.0
rank_score_simple = alpha * pred_likes + beta * pred_comments

## 2) More advanced: "blend" by mapping probabilities to a Gaussian distribution
##    e.g., Instagram approach: score = α * probit(p(like)) + β * probit(p(comment))
##    probit(p) = sqrt(2)*erfinv(2p-1)  (inverse of the normal CDF)

def probit(p):
    # Clip to avoid numerical issues
    p = np.clip(p, 1e-7, 1-1e-7)
    return math.sqrt(2) * erfinv(2*p - 1)

rank_score_probit = alpha * np.array([probit(p) for p in pred_likes]) \
                   + beta * np.array([probit(p) for p in pred_comments])

## For demonstration, let's show how these scores differ by item_type
score_df = pd.DataFrame({
    "item_id": items,
    "item_type": types,
    "p_like": pred_likes,
    "p_comment": pred_comments,
    "rank_score_simple": rank_score_simple,
    "rank_score_probit": rank_score_probit
})

print(score_df.head(10))

## You might then group by item_type and examine distributions, or
## sort by rank_score_probit to get top items for a user.
```
```python
────────────────────────────────────────────────────────────────────────────────────
CELL 8: “Lessons Learned” Example Explanation
────────────────────────────────────────────────────────────────────────────────────

"""
In the code above, we showed how to:

1) Build a multi-task model that predicts:
   - Probability of a "like"
   - Probability of a "comment"

2) Train with two binary cross-entropy losses and sum them (you could also weight them).

3) Generate two probabilities in inference: p(like) and p(comment).

4) Blend them into a single ranking score:
   - A simple approach: rank_score = α * p(like) + β * p(comment).
   - However, different content types (photos vs. videos) might have different distributions
     for likes and comments, making it unfair to compare them directly.

5) Map probabilities to a well-behaved distribution (like a Gaussian) first:
   - rank_score = α * probit(p(like)) + β * probit(p(comment))
   - probit is the inverse of the standard normal CDF (logistic -> normal).
   - This can reduce skew or differences in distributions and make the scores more comparable.

6) “Lessons Learned at Instagram”:
   - They noticed that videos and photos have different typical engagement patterns,
     so they transform these probabilities into a comparable scale.
   - This helps them “blend” different content types in the same ranking surface.

In practice, you can:

• Tune α, β, or more advanced weighting strategies.  
• Use percentile-based scaling or other transformations to unify distributions.  
• Use additional tasks (e.g., share, save, etc.) in a multi-task architecture.  
• Evaluate performance with user-level metrics or business KPIs.
```
Happy experimenting with multi-task learning and blended ranking!