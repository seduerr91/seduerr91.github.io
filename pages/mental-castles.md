---
name: Mental Castles
tools: [Brain]
image: /
description: These are my mental castles.
---

## Machine Learning
Type 1 and Type 2 error:
H0: Someone who has Covid tests positive.
Type 1 error: Someone who has Covid tests negative (really bad).
Type 2 error: Someone who does not have Covid tests positive (bad for the individual).

Theories:
Behavioral Change: operant (response is affected by consequences, e.g., gamification) vs classical conditioning (response occurs to stimuli, e.g., reminders)
Personal Thoughts: Precontemplation > Contemplation > Preparation > Action > Maintenance (actively set goals for users and encourage them to hit the goals).
Social Imitation: Consider collaboration features.
Fogg Model of Change: pleasure / pain, hope / fair and social acceptance get lazy people to do things.
ABA Model of Change: people engage in behavior to (a) achieve a desired result or (b) avoid an undesired result
 Randomized Variable Schedule: slot machines are addictive because the randomize administering awards
Outsized positive rewards & mitigating losses: loss aversion
Path dependence for least resistance: one step leads to the next step

ML Terminology:
Supervised Learning: develop predictive models based on input and output (classification and regression).
K-Nearest Neighbors: birds of a feather will flock together.
Linear regression: identify lines that best fits data points.
Logistic regression: used for binary outcome, probs of accepting a friend request.
Decision trees: best of 20 questions.
SVMs:  perceptron machine divides two dimensional space.
Unsupervised Learning: group and interpret data based on input data.
K-means: bucket observations in k clusters.
PCA: converts correlated variables into linearly uncorrelated vectors.
Dependent & independent variables: labels & key variable of interest.
Confounding variables: variables that could drive spurious correlations.
Different Test Statistics:
z-test / z-score: two populations, normal distribution
t-test / t-statistic: two small samples, normal distribution
anova / f-statistic: three or more samples, normal distribution
chi-squared test / chi-squared: two samples, any distribution
Regression terms:
Lasso (L1) Regularization: takes absolute value to avoid overfitting
Ridge (L2) Regularization: takes squared value to avoid overfitting
Normalization: adjusting different scales to same scale
One-hot encoding: when we have data on more than one level (fe/male)
Underfitting: too simple to explain variance
Overfitting: forcefitting, too good to be true

Validation of Supervised Learning:
Train, test validation: Test different models on test data / val data.
K-fold cross validation: Create k-folds and use these as test data.
Precision: How relevant are classifications? (type 1).
Recall: How many relevant choices are selected? (type 2).
F1-score:  2 * 1/recall + 1/precision.
Area under ROC: visualization of classification error (sensitivity = recall, specificity = 1-precision).

Ad-Hoc Experiments - A/B Testing:
Approach: experiment run on two groups of randomized users (RCT), one retrieving the treatment and one that does not.
Premise: all conditions have to be the same for treated and control groups, except for the treatment.
ATE (average treatment effect): what is the average difference in our chosen metric between treated and control groups.
Example A/B Tests:
Sending out friend requests with and without a personalized message
Sending personalized messages (a) commonality of job or (b) compliment on publication.

Post-Hoc Experiments - Causal Inference Techniques:
Difference-in-Difference Modeling: find comparable counterfactual or control group to compare our treated users. (How do markets behave after airing or not airing a commercial in an area?)
Placebo Testing: Test if there is no difference in two areas where there is no commercial aired.
Regression Discontinuity: Find comparable counterfactuals or control group members to compare treated users against.
Interrupted Time Series:
Autocorrelation: serial correlation between values of the process at different times.
Stationarity: Mean and variance are constant over time.
ARMA & ARIMA: autoregression models are linear regression models where we predict series values on the lagged value of the series itself
Seasonality Decomposition: known patterns that are repeated over fixed time intervals.
Statistical Matching: achieve similar distributions on observed variables for treatment and control.
Propensity Matching: classification algorithm to assign a treatment score or a probability of being treated.
General Heuristics: Educated guessing, dosage effect measuring, placebo tests.
Hill's Causality Conditions:
Strength of effect: 200x chances of lung cancer for smoker
Consistency: different place and groups get lung cancer
Specificity: smoking in countries without smoking restrictions
Temporality: reverse causality? laws > less smoking vs the other way round
Dosage effect: higher prices, less smokers?
Plausibility: is it common sense?
Coherence: does entire theory mesh
Analogy: similar phenomena have similar situations?
Uplift Modeling: targeting users that will modify their behavior based on treatment
Random Forests: collection of many decision trees to identify features and make predictions
PySpark Key Terms

RDD (resilient distributed data set): each record is an independent entity/object | row-wise
Data frame (DF): perform transformations on columns | column-wise

Spark:
analytics factory that gains capacity by scaling horizontally
executors perform the work, that are instructed by a master
when receiving the driver programme, the cluster manager plans the capacity
runs on lazy evaluation: Spark only works when it needs to report results .show()

PySpark
elements = spark.read.csv( "./data/elements/Periodic_Table_Of_Elements.csv", header=True, inferSchema=True,)
elements.where(F.col("phase") == "liq").groupby("period").count().show()
In SQL
SELECT
period, count(*)
FROM elements
WHERE phase = 'liq'
GROUP BY period;

Continue:
Window Functions
RDD example
Inner workings of PySpark (one example)
Object Oriented Programming

"Can you give us an example of object oriented programming?"

There are many different ways to answer this question, but one example of object oriented programming is using classes and objects to model real world entities. For example, you could create a class for a car and then create individual objects that represent specific cars. The class would define the properties and behavior of a car, and the objects would represent specific instances of those cars.

"What is your favorite object-oriented programming pattern and why?"

There is no definitive answer to this question as it depends on the programmer's preferences and the specific project requirements. However, some popular object-oriented programming patterns include Model View Controller (MVC), Model View ViewModel (MVVM), and Observer. These patterns can help to promote code reuse, maintainability, and extensibility.

"Can you give an example of the singleton object oriented pattern?"

The Singleton pattern is a creational design pattern that restricts the instantiation of a class to one object. This is useful when only a single instance of an object is needed throughout the lifetime of an application.


## Deep Learning

## Clean Code

## Cracking the Coding Interview

## Regex
