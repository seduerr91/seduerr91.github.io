---
title: NLG Paramters and Algorithms
tags: [Coding]
style: fill
color: secondary
description: An overview of different hyperparamters of deep neural networks for text generation.
---

Inpsired by [this article](https://towardsdatascience.com/prototyping-machine-learning-models-with-streamlit-1134c34e9620).

Bringing a Machine Learning model outside of a notebook environment and turning it into a beautiful data product used to be a lot of work. Luckily, there’s a lot of tooling being developed in this area to make prototyping easier. A while ago, I came across Streamlit, an open source Python library for building custom web apps.
It’s quick and easy to get started and took me less than 30 minutes to build an app with a pre-trained model. Since then, I have been using Streamlit for prototyping models and demonstrating their capabilities. The nice user interface is a refreshing change from using my console for predictions.
I’m going to be sharing the process in this article, using GPT-2 as an example.

## Make it run locally

### Clone the sample git

Just clone the sample git via entering the following in your terminal.

'''python
git clone https://github.com/seduerr91/gpt2-streamlit.git
'''

### Set up a virtual environment

Set up a virtual environment, start it and install all the necessary requirements with the following code.

'''python3
mkdir env
python3 -m venv env/educa
source env/educa/bin/activate
pip3 install -r requirements.txt
'''

### Load GPT-2 from Transformers

GPT-2 is a transformers model trained on a very large English corpus for the purpose of predicting the next word in a phrase. It’s recent successor, GPT-3, have shocked the world with what it is capable of doing.
Let’s begin by installing all of the Python prerequisites. This is what my requirements.txt looks like. While not referenced anywhere in the code, GPT-2 requires either TensorFlow 2.0 or PyTorch to be installed.

In this example, we are going to work out of a single Python script. Here is the class for loading GPT-2 and using it to generate text when given a starting phrase. The max_length attribute indicates the max length of the generated text.

'''python3  


import streamlit as st
from transformers import pipeline, set_seed
from transformers.pipelines import TextGenerationPipeline


class TextGenerator:
    def __init__(self):
        self.generator: TextGenerationPipeline
        self.max_length = 30
        set_seed(1)

    def load_generator(self) -> None:
        self.generator = pipeline('text-generation', model='gpt2')

    def generate_text(self, starting_text: str) -> str:
        return self.generator(starting_text,
                              max_length=self.max_length,
                              num_return_sequences=1)[0]['generated_text']

'''

### Serve the model with Streamlit

I’m going to define another function for instantiating the generator. The purpose of this function is to help with caching the load_generator method to make subsequent predictions faster.
The st.cache decorator tells Streamlit to skip execution if the function has been executed already and serve the entry point.

'''python3


@st.cache(allow_output_mutation=True)
def instantiate_generator():
    generator = TextGenerator()
    generator.load_generator()
    return generator


if __name__ == '__main__':
    st.title('GPT-2 Demo')
    starting_text = st.text_area('Let GPT-2 finish your thoughts ...')
    generator = instantiate_generator()

    if starting_text:
        response = generator.generate_text(starting_text)
        st.markdown(f'Completed phrase: {response}')    

'''

### Run it locally

To start the app, run streamlit run filepath.py. If you are using my repository, this would be streamlit run models/gpt_demo.py
The app should be automatically launched in the browser. If not, it will be at http://localhost:8501/. After the generator is loaded, predictions should be much faster!

## Run it online
