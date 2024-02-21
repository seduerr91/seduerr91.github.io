---
title: Deep Learning Terms 
tags: [Mental Castle]
style: fill
color: danger
description: My parents home.
---

- `Enter property`: Transfer learning: take a great model & retrain end layers to fit it to own needs
- `Torbogen`: Overfitting: if model only recognizes only one set of data, force-fitting
- `Stairs up`: Learning rate: how quickly params are updated
- `Door`: Tensor: matrix n * m, use torch.set_default_dtype(torch.flat64)
- `2nd Door`: Backprop: calcs grad of a loss func wrt to all weights in NN (backward propagation of errors)
- `Main arch`: Gradient descent: iterative optimization algo for finding minima of loss func
- `Toilette`: Minibatch: random bunch of input points to update weights
- `Bathroom`: Epoch: one complete run through all data points
- `Basement door`: SGD: grad descent using mini batches
- `Hallway`: Architecture: math function to fit paarams to (y = mx + t)
- `Stove`: Loss Functions: how far/cloase predictions are to labels (mse, mae, cel)
- `Oven Adjusters`: Regularization: techniques to reduce overfitting (l1 lasso, l2 ridge)
- `Under Oven Adjusters`: Underfitting: too simple to explain variance, validation set is really bad
- `Nicer Dicer`: Tokenization: represent each word / lingu concept with one token after a text was converted
- `Scale`: Numericalization: take complete list of words, uniquify them, and order due to their occurence
- `Cook book text`: WikiText-103: 1B tokens with knowledge about the world
- `Cook book ingredients`: Tabular data use cases: sales forecasting, fraud detection, failure prediction, pricing
- `Kitchenaid`: Super Convergence: alternating cycle use low LR & high momentum & reverse
- `Filter`: Softmax: function where all activations add to 1 & >0
- `Mash`: Weight decay: subtract constant wd * weights every time a batch is processed
- `Walking to living Room`: Momentum: update of step is based on opposite of previous direction
- `Mom`: Bias: values representing features (like personal preference)
- `Couch`: Matrix Factorization: factors from latent variables
- `TV`: PCA: dimensionality reduction technique
- `Photo Books`: Dropout: tanking out a number of activations
- `Light Switch`: Activation function: ReLU or sigmoid
- `Dad Computer`: Code structure: data, experiments, model
- `Window`: Core training step:
    - `Balcony`: output_batch = model(train_batch)
    - `Stefan Silo`: loss = loss_fn(output_batch, labels_batch)
    - `Street`: optimizer.zero_grad() # clear prev grads
    - `Silo`: loss.backward() # calc grads wrt to inputs + params
    - `Halle`: optimizer.step() # perform updates using calc'd grads
    - `Bed`: Model.train(): before training, impacts: dropout and batch_norm
    - `TV`: model.eval(): after training