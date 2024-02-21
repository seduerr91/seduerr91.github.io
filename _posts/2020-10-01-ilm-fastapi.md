---
title: Hosting your text infilling (based on GPT-2) through FastAPI on GCP
tags: [Coding]
style: fill
color: primary
description: This micro-service allows infilling multiple words into a context through AI. Researchers from Stanford addressed this. I made their work available through an API.
---

This micro-service allows infilling multiple words into a context through AI. Researchers from Stanford addressed this. I made their work available through an API.

The following article explains how to implement a NLP architecture trained for infilling. It gives different infilling recommendations for a given context.

![Imgur](https://i.imgur.com/Qh0FFjN.png)

Text infilling is the task of predicting missing spans of text which are consistent with the preceding and subsequent text. This implementation is based on the works of the Infilling Language Model (ILM) framework outlined in the ACL 2020 paper [Enabling language models to fill in the blanks](https://arxiv.org/abs/2005.05339) by Donahue et al. (2020). With this micro-service, you can generate infillings into a specific context by simply adding a '_'-token. Such an infilling can be done with words, n-grams (multiple words), or sentences.

- If you want to test the infilling model, go ahead and click [here](https://ilmapi.uc.r.appspot.com/docs). It renders as depicted below.
- A guide on how to use this service can be found [here](https://seduerr91.github.io/blog/ilmapi-instructions).
- The git repository with the source code is stored [here](https://github.com/seduerr91/ilm-api).

![Imgur](https://i.imgur.com/kbHNMpM.png)

### Deploying the Infilling Model on Google Cloud Platform

1. To deploy this micro-service by yourself please create a new project on [Google Cloud Platform](https://cloud.google.com/). For the new project to be created, you have to choose a _project name_, _project ID_, _billing account_, and, then, to click _Create_.
![Imgur](https://i.imgur.com/tTvOugf.png)
2. Next, activate Google's _Cloud Shell_ in the upper right corner of GCP to execute a few lines of code to host the ILM-API.
![Imgur](https://i.imgur.com/IHxxlJu.png)
3. Now, we clone the [ILM-API Repository](https://github.com/seduerr91/ilm-api) from GitHub. Fort that, type the following command in the Cloud Shell: 
    __git clone https://github.com/seduerr91/ilm-api.git__
4. As a next step, install the requirements. These project related libraries are located in the file _requirements.txt_. To install all these modules in one go, run the following command:
    __pip3 install -r requirements.txt__
5. To deploy the FastAPI app on App Engine and in the next step, we need to create a gcloud app and to it. (By executing the next command, you will be prompted to select a region. Simply choose the region nearest to the geographical location where your consumers access this micro-service.) In the cloud shell, type the following command to create the app:
    __gcloud app create__
6. You are almost there! Now, we deploy the FastAPI app on GCP App Engine. Therefore, run the following command in Google Cloud Shell to deploy the FastAPI app to Google App Engine. You will be prompted to continue. Press Y and hit enter to proceed with the deployment. It takes quite some time to host the service (like 3-5 minutes), once you execute: 
    __gcloud app deploy app.yaml__
7. Browse to your micro-service deployed on GCP App Engine. Generally, your app is deployed on the URL that has the following format. your-project-id.appspot.com. In case you are not sure what the project id is, then type the following command to view your application in the web browser:
    __gcloud app browse__
    
#### Congratulations: You just hosted the your own infilling micro-service based on the Deep Neural Architecture GPT-2 via FastAPI.

Next, we take a brief look at the source code, to better understand what we just did.

### Some Remarks About the Code Files

#### infill.py
The inference method is wrapped into the 'class Infiller()' which we need for the API in 'main.py'. This loads the data model, sets an exemplary context, appends the specific tokens to the context file, and, runs the inference to generate the infilling sentences.

<script src="https://gist.github.com/seduerr91/9183c728c18461c98c2f8ab5b9517009.js"></script>

#### main.py
We serve the uvicorn server through the main.py file via 'uvicorn main:app'. This hosts the POST APIs for the server queries.

<script src="https://gist.github.com/seduerr91/e389a2c212452f459c37346530a388b0.js"></script>

#### requirements.txt
The requirements.txt is very brief but it installs all required dependencies. In this example torch (PyTorch) is being used but you can also use Tensorflow if this is your preference.

<script src="https://gist.github.com/seduerr91/60ae1fdc383ece9daa5007f3a180240e.js"></script>

#### app.yaml
Google Cloud Platform allows the App Engine to perform deployment based on a configuration defined in a YAML file. For us to host the FastAPI on Google App Engine, the YAML configuration needs to have the following configuration.

<script src="https://gist.github.com/seduerr91/2fcd135a83023cbcfefb66b373b9ec58.js"></script>

#### The Dockerfile

The Dockerfile is being executed via the app.yaml. It hosts a Python3.7 container, copies the app's source code, installs the requirements needed, and executes the main app.

<script src="https://gist.github.com/seduerr91/5cdbd83bd095a421120e06d209d7fe24.js"></script>

#### Resources

This micro-service is build on the shoulders of the following giants:

- [Git Infilling by Language Modeling (ILM)](https://github.com/chrisdonahue/ilm)
- [HuggingFace Pipelines](https://huggingface.co/transformers/main_classes/pipelines.html)
- [Deploy FastAPI App on Google Cloud Platform](https://www.tutlinks.com/deploy-fastapi-app-on-google-cloud-platform/)
- [Build And Host Fast Data Science Applications Using FastAPI](https://towardsdatascience.com/build-and-host-fast-data-science-applications-using-fastapi-823be8a1d6a0)
- [Deploying Transformer Models](https://chatbotslife.com/deploying-transformer-models-1350876016f)
- [How to properly ship and deploy your machine learning model](https://towardsdatascience.com/how-to-properly-ship-and-deploy-your-machine-learning-model-8a8664b763c4)
- [Setting Up Virtual Environments](https://docs.python.org/3/tutorial/venv.html)

#### Acknolegdements

Thanks to Javier and the team of [Narrativa](narrativa.com) that asked me to host the micro-service. Also, a big thanks to [HuggingFace](huggingface.co), the Team from Stanford around Mr. Donahue. Also, thanks to [WifiTribe](wifitribe.co) with which I am currently living as a Digital Nomad. It is a very amazing bunch of people. I am doing my research and education remotely.

#### Who am I?

I am Sebastian an NLP Deep Learning Research Scientist. In my former life, I was a manager at Austria's biggest bank. In the future, I want to work remotely whenever I want to & in the field of NLP.

Drop me a message on [LinkedIn](https://www.linkedin.com/in/sebastianduerr/) if you want to get in touch or have any questions. Thank you!