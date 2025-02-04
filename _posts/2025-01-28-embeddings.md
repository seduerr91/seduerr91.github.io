---
title: Embeddings in ML Design
tags: [Coding]
style: fill
color: secondary
description: A deep dive into embeddings, from one-hot encoding to two-tower architectures, and how they power recommendation systems at major tech companies.
---


Title: Demystifying Embeddings: From One-Hot to Two-Towers

Imagine you have a big map in front of you. Cities that are similar—maybe all beach cities or all mountain towns—appear closer together on the map. Cities that differ more—like a tropical island compared to a big metropolis—lie farther apart. That “map” is your embedding space. In machine learning, embeddings are the coordinates that place “items” (words, users, stores, videos, etc.) near or far from each other based on how similar or relevant they are.

Below, we’ll walk through the key ideas behind embeddings, why they differ from older encoding methods, popular ways to train them, and how major tech companies leverage these “maps” to improve recommendation systems and user experiences.

────────────────────────────────────────────────────
1. Why Not Just Use One-Hot or Feature Hashing?
────────────────────────────────────────────────────

• One-Hot Encoding is like having an enormous “checklist” for words where each position corresponds to a specific word. If “cat” is the 37th word in your vocabulary, you set position 37 to 1 and everything else to 0.  
• Feature Hashing compresses large sets of possible features down to lower-dimensional indices, often used for text classification at scale.

However, with these methods, the semantic meaning is usually lost. One-hot places “cat” and “animal” at completely unrelated spots in space—even though they’re conceptually related. Embeddings, on the other hand, aim to place items (words, or even users) near each other if they are semantically or behaviorally similar.

Here’s a handy metaphor:  
• One-hot vectors → “Shipping containers” on a massive dock: each item is in its own big box, no sense of closeness.  
• Embeddings → “Cozy villages on a map”: items with something in common cluster in the same neighborhood.

────────────────────────────────────────────────────
2. How to Train Embeddings
────────────────────────────────────────────────────

Broadly, embeddings can be:  
1. Pre-trained (e.g., Word2Vec, GloVe).  
2. Co-trained with another task (like YouTube video retrieval).

Think of preparing for a soccer match:  
• Pre-trained Embeddings → You train with a general soccer coach ahead of time (like Word2Vec trained on a massive text corpus) and arrive with valuable skills.  
• Co-trained Embeddings → You learn on the job while playing in your local league (like training user embeddings within YouTube’s recommendation system, specifically for that dataset).

a) Word2Vec & the Power of Context  
-----------------------------------
Word2Vec aims to capture semantic meaning by looking at surrounding words (context). It comes in two main “flavors”:

1. Continuous Bag of Words (CBOW): Predict the middle word from the surrounding words. Example: “the cat on the … sat” → we try to guess “…”.  
2. Skip-Gram: Reverse it. Predict the surrounding words from the middle word.

In both cases, the idea is:  
• If two words often share the same neighbors, they end up close in the embedding space—like neighbors on your “semantic map.”

b) Co-Training with Engagement  
-------------------------------
Apps like YouTube, Instagram, and DoorDash learn embeddings tailored to user interests. By treating each user session as a “sentence,” they use a Word2Vec-like method:

• Instagram: Session sequences: user A → sees user B’s photos → sees user C’s photos. Because A visited B and C in the same session, B and C get pulled closer in the embedding space.  
• DoorDash: Session sequences: user looks at store 1 → store 2 → store 3. Similar stores appear near each other in the embedding because they tend to appear in the same user sessions.

────────────────────────────────────────────────────
3. Real-World Examples
────────────────────────────────────────────────────

a) YouTube Two-Tower Architecture  
---------------------------------
YouTube’s recommendation system uses a “two-tower” model for retrieval. Imagine two lighthouses that shine toward each other across a bay:

• Left tower: user + context features (watch history, user behavior).  
• Right tower: video features (video ID, popularity, etc.).  

They each produce an embedding, and the alignment between the two towers (often via a dot product or cosine similarity) determines which videos are “lit up” for recommendation. In practice, with thousands or millions of videos, the system uses negative sampling to make training feasible and corrects for any bias introduced by popular videos being repeatedly chosen as negatives.

b) LinkedIn’s Pyramid Architecture  
----------------------------------
LinkedIn uses a similar principle but with a distinctive “reverse pyramid” design. The hidden layers grow deeper (in the number of neurons) as the network goes on—like a pyramid flipped upside down. For the final recommendation (job–candidate match), LinkedIn uses the Hadamard product (element-wise multiplication) of the job embedding and the candidate embedding. This final product effectively captures how well each dimension of the job aligns with each dimension of the candidate.

c) Pinterest’s Visual Embedding  
-------------------------------
Pinterest trains a visual embedding by fine-tuning image-recognition models (e.g., ResNet) so that images with similar visual styles or content lie close in the embedding space. When a user searches by pin, Pinterest can surface visually similar pins much faster than if it had to compare raw images one by one.

────────────────────────────────────────────────────
4. Evaluating Embeddings
────────────────────────────────────────────────────

“How do we know our embedding is any good?”  
• Downstream Task Performance: The ultimate test is whether your search or recommendation system performs better.  
• Visualizing with t-SNE or UMAP: A technique to squish that high-dimensional “map” down to 2D or 3D. If “cats” and “dogs” cluster near each other—great. But for engagement-based embeddings (like user sessions), you might not see neat clusters.  
• Clustering or Nearest Neighbors: Group embedding vectors using k-means or find closest points with k-Nearest Neighbor. The question: do the results match your intuition and domain knowledge?

────────────────────────────────────────────────────
5. Choosing the Right Similarity Measure
────────────────────────────────────────────────────

Once you have embeddings, you still must pick how to measure “closeness.” Common choices:

• Cosine Similarity: Aligns with the angle between two vectors. Useful when you care about direction over magnitude.  
• Dot Product: Sums the products of each coordinate. Larger norms can dominate.  
• Euclidean Distance: Measures the “straight line” distance. Smaller distance means closer similarity.

A cautionary note: Dot products can overly favor items with large norms (often “popular” items). Normalizing embeddings or adjusting your scoring function can help prevent “popular items” from dominating recommendations.

────────────────────────────────────────────────────
6. Wrapping Up
────────────────────────────────────────────────────

Embeddings are like powerful maps that reduce chaos into coordinates, letting you navigate massive spaces—from words in sentences to stores in a food delivery app—by measuring similarities. They go beyond one-hot approaches by preserving semantic or behavioral closeness. Whether you train them with CBOW, Skip-Gram, or sophisticated two-tower neural networks, the fundamental goal is the same: find a useful representation of your items so that “nearby” means “related.”

As you implement embeddings, keep these questions in mind:  
• Which training strategy (pre-trained vs. co-trained) best suits my data?  
• How do I handle popular vs. rare items in negative sampling?  
• What similarity metric aligns with my user experience goals?

Just like a good travel map leads you swiftly from one city to another, quality embeddings can direct your recommendation system to serve up the right item to the right user at the right time. And in today’s data-driven tech world, a well-trained embedding is often the secret sauce behind a seamless user experience.