---
title: Running FastAI2 in Google Colab
tags: [Coding]
style: fill
color: danger
description: Installing the environment to Run the FastAI2 Python module on Google Colaboratory.
---

## Setting up Google Colab for FastAI2 & the lessons of course-v4

Complexity: low +.

Duration: 2 minutes (4 min if you need a Google Drive Account).

Follow these eight steps to, get FastAI2 running.

1. Prerequisite is a Google Drive account. [Get it here](https://www.google.com/drive/).
2. Download the FastAI course-v4 repository as a [.zip](https://github.com/fastai/course-v4/archive/master.zip) to your local filesystem.
3. Upload the unzipped package “course-v4-master” folder to your Google Drive (this instruction works with the root-folder).
4. In your Google Drive, navigate into the folder "course-v4-master/nbs" and open the file “01_intro.ipynb” with the connected app “Google Colab”. Delete the content of the first cell in the notebook.
5. Copy the following [code](https://raw.githubusercontent.com/seduerr91/fastAI_v4/master/fastAI2_colab_setup) into the first cell of the Colab notebook "01_intro.ipynb".
6. Authorize Google Colab to connect to your Google Drive by following the Screen instructions.
7. Click “Runtime” > “Change runtime type” > Select “GPU” as “Hardware accelerator”; Click “Save”.
8. Start with Deep Learning Training and Enjoy the new FastAI2!

(If this is not working right away, then please try "Runtime", and "Restart runtime" which should resolve issues.)

Please mind: You may need to input the first cell into all the notebooks to have access to your files.

*** Tested on MacBook Air in Chrome Browser on July 03, 2020. ***

Credits to the FastAI Team! You guys are awesome!
