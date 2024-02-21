---
title: Tracking Object Movements with Machine Learning (Open CV)
tags: [Coding]
style: fill
color: primary
description: Plants respond to happy emotions. This article illustrates how to use Machine Learning to show this repeatedly.
---
__Note: This is very nascent research and until now, not externally validated.__

'Plants respond to positive and negative emotional voices differently.' - Wait! What? Plants _respond_? What do they do? The later would be my reaction when I got confronted with the research that I am presenting hereafter.

## Exemplary object tracking of a flying Paprika

<iframe width="560" height="315" src="https://www.youtube.com/embed/Za6oUCQ0QVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Initial Results from Manual Object Detection

Initial research from my colleague Josephine indicates that specific plants (we are conducting experiments with the mimosa, _i.e. Mimosa Pudica_, and the codario, _i.e. Codariocalyx Motorius_) raise and accelerate their leaves faster if they are exposed to different types of music (1), or vocal emotions (2):

(1) Codario and Different Music Types

![Music Types](https://i.imgur.com/9cwEpuj.png)

These graphs illustrate the time the codario takes to respond to different auditive stimuli such as 'silence', 'metal', 'techno', 'classical', and 'yodeling' (the latter deserves credits to our [mentor](https://cci.mit.edu/pgloor/) who is Swiss). One may notice that yodeling was considerably faster than silence. The next analysis shows whether we may attribute this to a plant's happiness or sadness when being exposed to yodeling. :smile:

(2) Codario and Different Emotions

Surprisingly enough, the following analysis indicates that the codario is actually lifting its leaves four times higher and also longer when hearing happy emotions compared to sad ones. For this experiment, we use an [artistic data set](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5955500/) with professionals that repeat the same sentences in both very positive and negative ways (you don't even want to know how often we had to listen to the same sentence :laughing:).

![Emotions](https://i.imgur.com/EkNwJIA.png)
*The colors are different leaves of the same plant, and one may realize that the left y-axis is different for the different plants.*

## Data Collection

It was quite surprising to learn that plants move differently when a person speaks happily or sadly. Hence, we replicate these early results  with increasing amounts of data and automatize the data processing with Machine Learning techniques. Therefore, we created more of the world's most important currency of modern times: data.

### Sound File Preparations

With coding a :snake: script, we were able to create different sound files usually constructed in a way that an auditive stimulus is followed by 10s or 60s of silence until the next comes. The emotions (positive vs. negative) would be altered to keep contingent variables like sunlight exposure, time of the day, or room temperature, constant.

Exemplary part snippet of the [sound file creating algorithm](https://github.com/plantions/creatingEmotionAudios):

```
while counter < (len(happy_sounds) + len(sad_sounds))/2:
    wavset.append(happy_sounds[counter])
    wavset.append("extra_sounds/silence_60s.wav")
    wavset.append(sad_sounds[counter])
    wavset.append("extra_sounds/silence_60s.wav")
    counter += 1
wavs = [AudioSegment.from_wav(wav) for wav in wavset]
combined = wavs[0]
```

During creating these audio files, I learned:
- The interplay of sampling rates, a computer's definition of silence (it is a lot of data), and the complexity of huge data set folder structures.
- How sound waves are being received by human: Sound the way a computer uses them and what we hear is quite different. Hence, we use something called [MFCCs](https://towardsdatascience.com/extract-features-of-music-75a3f9bc265d) to simulate different human organs (mainly the interplay of throat, jaw, and tongue) for analysis.
- We also had to adapt the sound files to the recommendation of our mentor, and thus, learned that our flexible sound file creation approach is much better than a manual one.

### Video Screening

Our mentor provided us with data sets by filming his plants while they were exposed to our different hour-long sound files. We are super grateful for the resulting video files as they contain a lot of visual and audio noise. This is particularly useful because you want realistic data sets, and the world - as we all know - is messy and full of noises. Hence, we have to do a significant amount of data wrangling.

## My Quest: Automatizing 'Happiness Analysis with Machine Learning'

We evaluated different Machine Learning tools (dlib, OpenCV, sci-kit image), and the whole process of moving image _aka video_ analysis to get indirect emotions out of the plants.

### A Cloud Supercomputer, Machine Learning Tools, and Modern Coding Techniques

Next, we set up a cloud-based infrastructure to __not__ torture our little MacBooks. This cloud service is named Google Colab and ensures we have a lot of processing power (e.g., 26 GBs of RAM) to process our videos fast. This is how the development infrastructure looks like:

![Google Colab Overview](https://i.imgur.com/mWm041e.png)

The current version of the object tracker is introduced hereafter with which we can track many regions of interest at the same time producing comprehensive amounts of data. Please find an example hereafter:

![Loads of Tracking Points](https://i.imgur.com/fe5HRlD.png)

### Overview of Current Object Tracker

The [current object tracker tool](https://github.com/plantions/video-edge-extractor/blob/master/Emotion_Tracker.ipynb) consists of five data processing steps. These are uploading a video, choosing hyperparameters for different videos (still kind of an iterative approach), processing and showing the video, the actual data analysis respectively manipulation, and as an output an interactive visualization of the movement. In the following, a brief overview of what is happening in each step, and what I learned when developing it is presented. Please find a video hereafter, of an early version of the object tracker deployed on the mimosa to get an idea about what is happening:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/xgAhZQMkE7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

#### 0. Step: Upload Video

![Upload Feature](https://i.imgur.com/6VB4WCP.png)

What is going on?

- A simple upload feature to upload any video to the Google Colab environment.
- In the background, all necessary tools (':snake: libraries') are being preloaded.
- Some constants are assigned.

What did I learn?

- Importing comprehensive video files (through mounting Google Drive for big files).
- Uploading short video files (through interactive upload features).
- To clean up old files that are created during video processing to save space.

#### 1. Step: Choose Hyperparameters

![Hyperparams](https://i.imgur.com/3dJPV0O.png)

What is going on?

- The interactive front-end form takes your inputs of different parameters that are needed for different videos settings.
- The classes for object tracking are initialized. They are constructed to track a region of interest (x, y coordinates).
- The updating class for any additional frame is initialized (using on the x, y - coordinates).

What did I learn?

- How [Dilation and Erosion](https://docs.opencv.org/2.4/doc/tutorials/imgproc/erosion_dilatation/erosion_dilatation.html) work.
- What [Mask Thresholding](https://docs.opencv.org/3.4/d7/d4d/tutorial_py_thresholding.html) does.
- The [Contour Feature](https://docs.opencv.org/trunk/dd/d49/tutorial_py_contour_features.html) and its usage.

#### 2. Step: Process & Regard the Video

![Video Processing](https://i.imgur.com/VhWumNT.png)

What is going on?

- Every image (30 frames per second, 720 for 12 mintues) is grabbed and analyzed with the parameters set in step 1.
- The data export (x, y coordinates, width and height of the enclosing box, and the ID) are extracted and saved during the processing of the video.
- The resulting video is converted so that it can be viewed right in the Jupyter notebook.

What did I learn?

- Video processing with Machine Learning library OpenCV4. I have never used that one before and it was kind of the start of the project. It works very well and is a super powerful tool. I had to work through a book to grasp the fundamentals and necessary advanced concepts.
- Data extraction can be very difficult and confusing. Fundamentals of coding language Python were needed. Thank you Paul Steppacher for helping me.
- Different video codecs like MPEG, MP4, etc. are not the same, nor do they work alike. Conversions are crucial and a very iterative process.

#### 3. Step: Analysis

![Data Analysis](https://i.imgur.com/mJLGmpp.png)

What is going on?

- Processing of the data points that were extracted from the video in step 2.
- Extracting of the audio file and creating features that can be used for audio analysis.
- Interventions to sync the audio and video data points.

What did I learn?

- Creating and manipulating :panda_face: DataFrames including techniques such as: pivoting, duplicates removal, querying, filtering, inversion, etc.
- Audio file processing: sub-processing in a shell in a Jupyter notebook, extracting sample rates, and MFCC features.
- Merging different :panda_face: Dataframes using primary keys and 'outer/inner' join distinctions.

[Data manipulation and analysis with :panda_face:](https://pandas.pydata.org/pandas-docs/stable/user_guide/visualization.html)

#### 4. Step: Interactive Visualization

![Altair](https://i.imgur.com/3X9jQLS.png)

What is going on?

- Resulting data points are melted into a long data structure to fit the graphical API Altair.
- The limit of 5000 data points is fully utilized to visualize the movement of the object and accompanying sounds.

What did I learn?

- [Plotting with Altair](https://altair-viz.github.io/getting_started/overview.html).
- Wide vs. Long data formats and how to get back and forth.
- Why Matplotlib and Jupyter Interact were fighting each other.

#### 5. Additional Features

![Additional Features](https://i.imgur.com/3WNYImh.png)

For developing and testing purposes, I incorporated additional functionality which I will not dive into in a deeper manner as of now. These encompass:
- A data export feature: 'Export to Excel'.
- A feature to visualize correlations: 'Interactive Scatter Plots'. The interactive scatter plot is still in development.
- A video duration measurement feature for cross-checking purposes: 'Check for Movie Duration'.
- A feature for retrieving the 'frames per second' value of a given movie: 'Getting FPS of Video'.

### Next Steps

Now, that the data pipeline is functional and initial data analyses are operating, a tool for concluding happy or sad emotions will be added. Hereafter image depicts promising tracking spots.

![Proper Tracking Spots](https://i.imgur.com/FK4dQqk.png)

Thank you for comments and your interest!
