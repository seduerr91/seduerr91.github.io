---
title: Hosting the Infilling Model (based on GPT-2) through a FastAPI on GCP
tags: [Coding]
style: fill
color: danger
description: This micro-service allows infilling multiple words into a context. Researchers from Stanford addressed this. I made their work available through an API.
---

The following snippet shows how Artificial Intelligence in the fielf of NLP trained for infilling gives different sentences for a given context. Text infilling is the task of predicting missing spans of text which are consistent with the preceding and subsequent text.

![Imgur](https://i.imgur.com/Qh0FFjN.png)

This article is based on the works of the Infilling Language Model (ILM) framework outlined in the ACL 2020 paper [Enabling language models to fill in the blanks](https://arxiv.org/abs/2005.05339) by Donahue et al. 2020. Following these instructions allows us to generate infillings into a specific context by simply adding a '_'-token. The infilling can be done with words, n-grams (multiple words), or sentences.

The corresponding Git Repository that stores this work can be found [here](https://github.com/seduerr91/ilm-api). 
The instructions for deploying this model as an API-based microservice on Google App Engine can be found below. The resulting API can be tested [here](https://ilmapi.uc.r.appspot.com/docs) and renders as depicted below.

![Imgur](https://i.imgur.com/kbHNMpM.png)

### Deploying the Infilling Model on Google Cloud Platform

1. To run this please create a new project on [Google Cloud Platform](https://cloud.google.com/). For the new project being created, give Project name, Project ID, Billing account, and click Create.
![Imgur](https://i.imgur.com/tTvOugf.png)
2. Activate the Cloud Shell in the upper right corner to execute a few lines of code to host the ILM-API.
![Imgur](https://i.imgur.com/IHxxlJu.png)
3. Next, clone the [ILM-API Repository](https://github.com/seduerr91/ilm-api) from GitHub. Type the following command in the Cloud Shell to clone the FastAPI repository on to GCP: 
    __git clone https://github.com/seduerr91/ilm-api.git__
[Optionally], you now can create a virtual environment. Find instructions [here](https://docs.python.org/3/tutorial/venv.html).
4. Install Requirements for the FastAPI and the ILM. The project related libraries are located in requirements.txt. To install all the modules in one go, run the following command:
    __pip3 install -r requirements.txt__
5. To deploy the FastAPI app on App Engine and access it via a custom domain or default your-proj-id.appspot.com, we need to create a gcloud app and deploy our app. You will be prompted to select the region. It is always a best practice to choose the region nearest to the geographical location where the consumers access this application. Doing so is expected to increase the response times from our application. In the cloud shell, type the following command to create the app:
    __gcloud app create__
6. Deploy the FastAPI app on GCP App Engine. GCP App Engine requires all the deployment configuration to be defined in a YAML file. Run the following command in Google Cloud Shell to deploy the FastAPI app to Google App Engine. You will be prompted to continue. Press Y and hit enter to proceed with the deployment.
    __gcloud app deploy app.yaml__
7. Browse the FastAPI deployed on GCP App Engine. Generally, your app is deployed on the URL that has the following format. your-project-id.appspot.com. In case you are not sure what the project id is, then type the following command to view your application in the web browser.
    __gcloud app browse__
    
#### Congratulations: You just hosted the Infilling Model (Donahue et al. 2020) based on the Deep Neural Architecture GPT-2 via FastAPI as a microservice.

### Some Remarks About the Code Files

#### Infill.py

The inference method is wrapped into the 'class Infiller()' which we need for the API in 'main.py'. This piece of code loads the data model, sets an exemplary context, appends the specific tokens to the context file, and runs the inference to generate the infilling sentences.

<script src="https://gist.github.com/seduerr91/9183c728c18461c98c2f8ab5b9517009.js"></script>

#### The main.py

We serve the uvicorn server through the main.py file with 'uvicorn main:app' and it hosts the POST APIs for the server queries.

<script src="https://gist.github.com/seduerr91/e389a2c212452f459c37346530a388b0.js"></script>

#### Requirements.txt

The requirements.txt is very brief but it installs a lot of dependencies. In this example torch (PyTorch) is being used but you can also use Tensorflow by Google if this is your preference.

<script src="https://gist.github.com/seduerr91/60ae1fdc383ece9daa5007f3a180240e.js"></script>

#### YAML Configuration to deploy FastAPI on Google App Engine
Google Cloud Platform allows App Engine to perform deployment based on a configuration defined in a YAML file. For us to host the FastAPI on Google App Engine, the YAML configuration needs to have the following configuration.

<script src="https://gist.github.com/seduerr91/2fcd135a83023cbcfefb66b373b9ec58.js"></script>

#### The Dockerfile

The Dockerfile is being executed via the app.yaml. It hosts a Python3.7 container, copies the app, installs the requirements.txt needed, and executes the main app.

<script src="https://gist.github.com/seduerr91/5cdbd83bd095a421120e06d209d7fe24.js"></script>

It takes quite some time to host the service (like 3-5 minutes).

#### Resources

- [Git Infilling by Language Modeling (ILM)](https://github.com/chrisdonahue/ilm)
- [HuggingFace Pipelines](https://huggingface.co/transformers/main_classes/pipelines.html)
- [Deploy FastAPI App on Google Cloud Platform](https://www.tutlinks.com/deploy-fastapi-app-on-google-cloud-platform/)
- [Build And Host Fast Data Science Applications Using FastAPI](https://towardsdatascience.com/build-and-host-fast-data-science-applications-using-fastapi-823be8a1d6a0)
- [Deploying Transformer Models](https://chatbotslife.com/deploying-transformer-models-1350876016f)
- [How to properly ship and deploy your machine learning model](https://towardsdatascience.com/how-to-properly-ship-and-deploy-your-machine-learning-model-8a8664b763c4)
- [Setting Up Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

#### Acknolegdements

Thanks to Javier and the team of Narrativa who suggested me to find a solution to this problem. Also a big thanks to HuggingFace, the Team from Stanford around Mr. Donahue, and WifiTribe with which I am currently living as a Digital Nomad. I am doing my research and education remotely.

#### Who am I?

I am Sebastian Duerr an NLP Deep Learning Research Scientist. In my former life, I was a manager at Austria's biggest bank. In the future, I want to work remotely whenever I want to & in the field of NLP.

Drop me a message on [LinkedIn](https://www.linkedin.com/in/sebastianduerr/) if you want to get in touch.