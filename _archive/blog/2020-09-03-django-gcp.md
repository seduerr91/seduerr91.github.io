---
title: Hosting a Django Project on Google Cloud Platform
tags: [Coding]
style: fill
color: primary
description: An instruction on how to host Django Projects on Google Cloud Platform.
---

Following this [instructions](https://cloud.google.com/python/django/appengine#cloud-console).

Based on this [medium article](https://medium.com/@ahmed.dys99/deploying-django-application-on-google-cloud-platform-8eca8f82e7f6)

### First create a virtual machine instance

-  Create a new project or use an existing one.
- Now you are ready to create a virtual machine instance. Go to the VM Instance Page and click Create Instance.
- Enter whatever name you want to give your instance in the Name field. We will keep the Region, Zone, and Machine Configuration to default for now.

![image](https://miro.medium.com/max/1102/1*qsBbHPVWAbNoCGhKSuajQw.png)

- Now select a Boot disk. For this article, we will be using Ubuntu.
- Use ubuntu version 20.04 since the 19.04 is not available anymore.

![image2](https://miro.medium.com/max/1015/1*0WETN4Vqsr8Vc3jkPAMmjw.png)

- Under Firewall, allow https and https traffic and finally click Create.

![image3](https://miro.medium.com/max/956/1*VJmYXbQZRskn7esDhCEtBw.png)

### Installing necessary packages

- Once you’ve created the instance, open the secure shell by clicking on the button labeled SSH.

![image4](https://miro.medium.com/max/1260/1*u-y9f34AVr_pcRhPWNHK8g.png)

- Now we need to install some packages. We are using Python 3 for this article. To do so run the following commands on the shell and answer the questions if prompted.

'''Python
sudo apt-get update
sudo apt-get install python3-pip
'''

### Pushing code to Github

- Navigate to your project’s settings.py file and add the external IP of your VM instance to your allowed hosts.

![image5](https://miro.medium.com/max/1260/1*OG64jLZo25pSntNRgUUB4g.png)

'''python3
ALLOWED_HOSTS = ['35.226.121.118']
'''

- Navigate to your project in the local terminal and run the following command to create a text file of all the python packages used in the project. Copied it out of terminal after using this code line:

'''python3
python venv/Path_to/bin/pip freeze -l
'''

- Create a Github repository and run the following commands to push your code to the repository. __Make sure your project was running locally.__

### Cloning the project for the Virtual Machine Instance

We have pushed our Django project from the local storage to our Github repository. We will now clone the code from the Github Repository to our Virtual Machine Instance.

- Navigate back to your instance’s secure shell by clicking the SSH button and clone the project by running the following git command with your repo’s URL.

'''python3
git clone <copied link.git>
'''

- Run the command ls to view the directory that the project cloned to and then cd to change to that directory.
- Now install python packages by running the following command

'''python3
sudo pip3 install -r requirements.txt
'''

- Finally, you can run your server on the instance by running the following command. Nohup makes sure the page keeps on running after you closed the remote ssh terminal.

'''python3
nohup sudo python3 manage.py runserver 0.0.0.0:80
'''

Congratulations! You successfully deployed your Django project on Google Cloud Platform.
For now, your site is accessible via Http on your external IP address such as http://<external ip from gcp.>

Please note that this is just one of the several ways to deploy your Django application on Google Cloud.

Date: Successfully deployed on 03. September 2020.
