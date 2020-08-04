---
title: The Transformer review
tags: [Coding]
style: fill
color: warning
description: Summary of the Illustrated Transformer by J. Alammar.
---

The article [The Illustrated Transformer](http://jalammar.github.io/illustrated-transformer/) by J. Alammar is a must read on deep learning in the field of natural language processing (NLP). Also, this was recommended in one of the expert interview that I [conducted](https://seduerr91.github.io/blog/experts). This article will close with a brief summary of the [contemporary literature review from Thomas Wolf](https://www.youtube.com/watch?v=G5lmya6eKtc&feature=youtu.be) of Huggingface.co.

### Review of Attention

- Attention is a concept that helped improve the performance of neural machine translation applications. An [attention model](https://jalammar.github.io/visualizing-neural-machine-translation-mechanics-of-seq2seq-models-with-attention/) differs from a classic sequence-to-sequence model in two main ways:
  - First, the encoder passes a lot more data to the decoder. Instead of passing the last hidden state of the encoding stage, the encoder passes all the hidden states to the decoder.
  - Second, an attention decoder does an extra step before producing its output. In order to focus on the parts of the input that are relevant to this decoding time step.
- The transformer is a model that uses attention to boost the speed with which these models can be trained.

#### A High-Level Look

- The transformer consists of an __encoding component__, a __decoding component__, and connections between them.
- The encoding component os a stack of encoders, the decoding component is a stack of decoders of the same number.
- The __encoders__ are all identical in structure (but do not share weights). Each consists of a 'Feed Forward Neural Network' (ffn) and a 'Self-Attention' (sa) layer.
- The encoder's __input__ first flows through a self-attention layer - which helps the encoder to look at other words in the input sentence as it encodes a specific word.
- The encoder's __outputs__ of the 'Self-Attention' layer are feed to the 'Feed Forward Neural Network'. The exact same ffn is independently applied to each position.
- The __decoder__ has also the ffn and the sa layer but in between there is an 'Encoder-Decoder Attention' layer. This layer helps the decoder focus on relevant parts of the input sentence.

#### Bringing Tensors into the Picture

- The various vectors/tensors flow between these components to turn the input of a trained model into an output. This begins with turning each input word into a vector using an embedding algorithm.
- The embedding happens only in the first (bottom-most) encoder. The abstraction that is common to all encoders is that they receive a list of vectors each of the size 512. The size of the list is a hyperparameter, i.e. the length of the longest sentence in the training dataset.
  - in the bottom encoder that is the word embeddings.
  - in other encoders it is the output of the previous encoder.
- After embedding the words in the input sequence, each of them flows through each of the two layers of the encoder. Each word in each position flows through its own path in the encoder. There are dependencies between these paths in the sa layer. The ffn layer does not have these dependencies which is why they various paths can be executed in parallel.

![encoder](http://jalammar.github.io/images/t/encoder_with_tensors_2.png)

#### Self-Attention at a High Level

![attention](http://jalammar.github.io/images/t/transformer_self-attention_visualization.png)

- ”The animal didn't cross the street because it was too tired”. What does 'it' in the sentence refer to? The street or the animal?
- When the model is processing the word “it”, self-attention allows it to associate “it” with “animal”. As the model processes each word (each position in the input sequence), self attention allows it to look at other positions in the input sequence for clues that can help lead to a better encoding for this word.

#### Self-Attention in Detail

-
-
-
-

### FastAI notes on NLP

-
-
-
-


### Hugging Face current trends overview

-
-
-
-
-
-
-
-
-
-

### End
