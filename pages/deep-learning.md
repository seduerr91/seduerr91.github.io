---
title: Deep Learning Terms 
tags: [Mental Castle]
style: fill
color: danger
description: Walk through home
---

- : Transfer learning: take a great model & retrain end layers to fit it to own needs
- : Overfitting: if model only recognizes only one set of data, force-fitting
- : Learning rate: how quickly params are updated
- : Tensor: matrix n * m, use torch.set_default_dtype(torch.flat64)
- : Backprop: calcs grad of a loss func wrt to all weights in NN (backward propagation of errors)
- : Gradient descent: iterative optimization algo for finding minima of loss func
- : Minibatch: random bunch of input points to update weights
- : Epoch: one complete run through all data points
- : SGD: grad descent using mini batches
- : Architecture: math function to fit paarams to (y = mx + t)
- : Loss Functions: how far/cloase predictions are to labels (mse, mae, cel)
- : Regularization: techniques to reduce overfitting (l1 lasso, l2 ridge)
- : Underfitting: too simple to explain variance, validation set is really bad
- : Tokenization: represent each word / lingu concept with one token after a text was converted
- : Numericalization: take complete list of words, uniquify them, and order due to their occurence
- : WikiText-103: 1B tokens with knowledge about the world
- : Tabular data use cases: sales forecasting, fraud detection, failure prediction, pricing
- : Super Convergence: alternating cycle use low LR & high momentum & reverse
- : Softmax: function where all activations add to 1 & >0
- : Weight decay: subtract constant wd * weights every time a batch is processed
- : Momentum: update of step is based on opposite of previous direction
- : Bias: values representing features (like personal preference)
- : Matrix Factorization: factors from latent variables
- : PCA: dimensionality reduction technique
- : Dropout: tanking out a number of activations
- : Activation function: ReLU or sigmoid
- : Code structure: data, experiments, model
- : Core training step:
- : output_batch = model(train_batch)
- : loss = loss_fn(output_batch, labels_batch)
- : optimizer.zero_grad() 	# clear prev grads
- : loss.backward() 	# calc grads wrt to inputs + params
- : optimizer.step() 		# perform updates using calc'd grads
- : Model.train(): before training, impacts: dropout and batch_norm
- : model.eval(): after training