---
title: Machine Learning
tags: [Mental Castle]
style: fill
color: danger
description: Mental castle of Machine Learning inpired by the book Product Analytics as a walk through my former home in Vienna.
---

A walk through Schottenfeldgasse 55/3 in the name of Machine Learning.

## `Us` General Concepts

- `Bed Stands`: Type 1 and Type 2 error: 
- `Seb`: H0: Someone who has Covid tests positive.
- `Barry`: Recall/Type 1 error: Someone who does not have Covid tests positive (bad for the individual).
  - True Positive / True Positive + False Negative
- `Blue`: Precision/Type 2 error: Someone who has Covid tests negative (bad for everyone).
  - True Positive / True Positive + False Positive

## `My Room` Theories

- `Chair`: Behavioral Change: operant (response is affected by consequences, e.g., gamification) vs classical conditioning (response occurs to stimuli, e.g., reminders)
- `Box`: Personal Thoughts: Precontemplation > Contemplation > Preparation > Action > Maintenance (actively set goals for users and encourage them to hit the goals).
- `Blanket`: Social Imitation: Consider collaboration features.
- `Window`: Fogg Model of Change: pleasure / pain, hope / fair and social acceptance get lazy people to do things.
- `Shutters`: ABA Model of Change: people engage in behavior to (a) achieve a desired result or (b) avoid an undesired result
- `Radiator`: Randomized Variable Schedule: slot machines are addictive because the randomize administering awards
- `Laundry`: Outsized positive rewards & mitigating losses: loss aversion
- `Robe`: Path dependence for least resistance: one step leads to the next step

## `Bath room` ML Terminology

- `Bath Ward Robe`: Supervised Learning: develop predictive models based on input and output (classification and regression).
  - `Contacts`: K-Nearest Neighbors: birds of a feather will flock together.
  - `Gel`: Linear regression: identify lines that best fits data points.
  - `Lip stick`: Logistic regression: used for binary outcome, probs of accepting a friend request.
  - `Deo`: Decision trees: best of 20 questions.
  - `Perfume`: SVMs:  perceptron machine divides two dimensional space.
- `Towels`: Unsupervised Learning: group and interpret data based on input data.
  - `Small`: K-means: bucket observations in k clusters.
  - `Large`: PCA: converts correlated variables into linearly uncorrelated vectors.
- `Spanners`: Dependent & independent variables: labels & key variable of interest.
- `Pillow Cases`: Confounding variables: variables that could drive spurious correlations.
- `Blankets`: Different Test Statistics
  - `Paper rolls`: z-test / z-score: two populations, normal distribution
  - `Tissues`: t-test / t-statistic: two small samples, normal distribution
  - `Window cleaner`: Anova / f-statistic: three or more samples, normal distribution
  - `Toilet cleaner`: chi-squared test / chi-squared: two samples, any distribution
- `Sink`: Regression terms: 
  - `Silvio Brush`: Lasso (L1) Regularization: takes absolute value to avoid overfitting
  - `My brush`: Ridge (L2) Regularization: takes squared value to avoid overfitting
  - `Toothpaste`: Normalization: adjusting different scales to same scale
  - `Lights`: One-hot encoding: when we have data on more than one level (fe/male)
  - `Mirror`: Underfitting: too simple to explain variance
  - `Shower`: Overfitting: force-fitting, too good to be true

## `Silvio's office` Validation of Supervised Learning: 

- `Massive picture`: Train, test validation: Test different models on test data / val data.
- `Coffee Machine`: K-fold cross validation: Create k-folds and use these as test data.
- `3D Printer`: F1-score:  2 * 1/recall + 1/precision = (sensitivity = recall, specificity = 1-precision).
- `3D Printer Workshop`: Area under ROC: visualization of classification error 
- `Desk`: Ad-Hoc Experiments - A/B Testing:
  - `Chair`: Approach: experiment run on two groups of random users (RCT), one retrieving the treatment and one that does not.
  - `Srreen`: Premise: all conditions have to be the same for treated and control groups, except for the treatment.
  - `Silvio`: ATE (average treatment effect): what is the average difference in our chosen metric between treated and control groups.
  - `iPad`: Example: Sending out friend requests with and without a personalized message.

## `Hover` Post-Hoc Experiments - Causal Inference Techniques

- `Window`: Difference-in-Difference Modeling: find comparable counterfactual or control group to compare our treated users. (How do markets behave after airing or not airing a commercial in an area?)
- `Wine`: Placebo Testing: Test if there is no difference in two areas where there is no commercial aired.
- `Book`: Regression Discontinuity: Find comparable counterfactuals or control group members to compare treated users against.
- `Towel box`: Interrupted Time Series: 
  - `Whiteboard`: Autocorrelation: serial correlation between values of the process at different times.
  - `Wine shelve`: Stationarity: Mean and variance are constant over time.
  - `Gin & Tonic`: ARMA & ARIMA: autoregression models are linear regression models where we predict series values on the lagged value of the series itself
  - `Winter Wine w/ rum`: Seasonality Decomposition: known patterns that are repeated over fixed time intervals.
- `Light`: Statistical Matching: achieve similar distributions on observed variables for treatment and control.
- `Tado`: Propensity Matching: classification algorithm to assign a treatment score or a probability of being treated.
- `Table`: General Heuristics: Educated guessing, dosage effect measuring, placebo tests, coherence, analogy.
- `Salt`: Uplift Modeling: targeting users that will modify their behavior based on treatment
- `Pepper`: Random Forests: collection of many decision trees to identify features and make predictions 