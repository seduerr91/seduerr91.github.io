---
title: Running FastAI2 in Google Colab
tags: [Coding]
style: fill
color: secondary
description: Installing the environment to run the FastAI2 module in Google Colaboratory.
---

## Setting up Google Colab for FastAI2 & the lessons of course-v4

1. Prerequisite is a Google Drive account. Get it here: https://www.google.com/drive/
2. Download the FastAI course-v4 repository as a .zip to your local filesystem: https://github.com/fastai/course-v4.git
3. Upload “course-v4-master” folder to your drive (this instruction works with the root-folder of your GoogleDrive).
4. In your GoogleDrive, navigate into folder "course-v4-master/nbs" and open file “01_intro.ipynb” with connected app “Google Colab”.
5. Copy the linked code in the first cell of the notebook (erase the #hide contents): https://raw.githubusercontent.com/seduerr91/fastAI_v4/master/fastAI2_colab_setup
6. Authorize Google Colab to connect to your drive by following the screen instructions
7. Click “Runtime” > “Change runtime type” > Select “GPU” as “Hardware accelerator”; Click “Save”.
8. Start with training and enjoy the new FastAI v4! (If this is not working right away, then please try "Runtime", and "Restart runtime" which should resolve issues.)

Please mind: You may need to input the first cell into all the notebooks to have access to your files.
 *** Tested on MacBook Air in Chrome Browser on March 22, 2020. ***

Thank you FastAI Team! You guys are awesome!
