---
title: Running GPT2 Inference through a Streamlit Interface on GCP
tags: [Coding]
style: fill
color: success
description: These are non-working instructions for running a Deep Neural Network on a Streamlit server.
---

Inpsired by [this article](https://towardsdatascience.com/prototyping-machine-learning-models-with-streamlit-1134c34e9620).

Bringing a Machine Learning model outside of a notebook environment and turning it into a beautiful data product used to be a lot of work. Luckily, there’s a lot of tooling being developed in this area to make prototyping easier. A while ago, I came across Streamlit, an open source Python library for building custom web apps.
It’s quick and easy to get started and took me less than 30 minutes to build an app with a pre-trained model. Since then, I have been using Streamlit for prototyping models and demonstrating their capabilities. The nice user interface is a refreshing change from using my console for predictions.
I’m going to be sharing the process in this article, using GPT-2 as an example.

## Make it run locally

### Clone the sample git

Just clone the sample git via entering the following in your terminal.

'''python3

git clone https://github.com/seduerr91/gpt2-streamlit.git

'''

### Set up a virtual environment

Set up a virtual environment, start it and install all the necessary requirements with the following code.

'''python3

mkdir env
python3 -m venv env/st
source env/st/bin/activate
pip3 install -r requirements.txt

'''

### Load GPT-2 from Transformers

Wait for all the libraries to be installed.

### Run it locally

Run via 'python3 app.py'


## Run it online
Inspired by [this article](https://towardsdatascience.com/deploy-streamlit-on-heroku-9c87798d2088.)
Write: heroku login
Next: heroku create

Then insert:

git add .
git commit -m "Enter your message here"
git push heroku master

No for web running:

heroku ps:scale web=1
