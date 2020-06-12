---
title: Tracking Object Movements with Machine Learning (Open CV)
tags: [Coding]
style: fill
color: light
description: Early research shows that plants respond to emotional vocal stimulus. This project employs Machine Learning techniques to display their correlations.
---
(German: Lest über den [Objekt Tracker in Deutsch](https://seduerr91.github.io/blog/object_deu).)

__Disclaimer: This is very nascent research and until now, not externally validated.__

_Summary: Plants respond to happy emotions. This article illustrates how to use Machine Learning to show this repeatedly._

'Plants respond to positive and negative emotional voices in a different way.' - Wait! What? Plants _respond_? What do they do? The later, would be my reaction when I got confronted with the research that I am presenting hereafter.

## Initial Results from Manual Object Detection

Initial research from my fellow colleague Josephine indicates that specific plants (we are conducting experiments with the mimosa, _i.e. Mimosa Pudica_, and the codario, _i.e. Codariocalyx Motorius_) raise and accelerate their leaves faster if they are exposed to different types of music (1), or vocal emotions (2).

### (1) Mimosa and Different Music Types

![Music Types](https://i.imgur.com/9cwEpuj.png)

These graphs illustrate the time our mimosa takes to respond to different auditive stimuli such as 'silence', 'metal', 'techno', 'classical', and 'yodeling' (the latter deservers credits to our mentor who is Swiss). One may notice that yodeling was considerably faster than silence. The next analysis shows whether we may attribute this to a plants happiness or sadness when being exposed to yodeling. :smile:

### (2) Codario and Different Emotions

Surprisingly enough, the following analysis indicates that the codario is actually lifting its leaves four times higher and also longer when hearing happy emotions compared to sad ones. Note: we used an [artistic data set](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5955500/) to have professionals saying the same sentences in both very positive and negative ways (you don't even know how often we had to listen to the same sentence :laughing:).

![Emotions](https://i.imgur.com/EkNwJIA.png)

The colours are different leaves of the same plant, and one may realize that the left y-axis is different for the different plants.

## Data Collection

It was quite surprising to learn that plants indirectly show you when a person speaks in a happy or sad way. Hence, we want to replicate these early results and automatize the process on the way. Therefore, we need more of the worlds most important currency of modern times: data.

### Sound File Preparations

With coding a :snake: script, we were able to create different sound files usually constructed in a way that a auditive stimulus is followed by 10s or 60s of silence, until the next comes. The emotions (positive vs. negative) would be altered to keep contingent variables like sunlight exposure, time of the day, or room temperature, constant.

Heart of the [sound file creating algorithm](https://github.com/plantions/creatingEmotionAudios):

```
while counter < (len(happy_sounds) + len(sad_sounds))/2:
    # wavset.append("extra_sounds/silence_1s.wav")
    wavset.append(happy_sounds[counter])
    wavset.append("extra_sounds/silence_60s.wav")
    wavset.append(sad_sounds[counter])
    wavset.append("extra_sounds/silence_60s.wav")
    counter += 1
wavs = [AudioSegment.from_wav(wav) for wav in wavset]
combined = wavs[0]
```

During creating these files, one would learn soo much, for instance:
- The interplay of sampling rates, computers definition of silence (it is a lot of data), and the complexity of huge data set folder structures.
- Learning about how sounds are produced. Sound as a computer uses them and what we hear is not the same. Hence, we use something called MFCCs to simulate different human organs (mainly the interplay of throat, jaw, and tongue)
- We also had to adapt the sound files to the recommendation of our mentor, and thus, learnt that our flexible sound file creation approach is much better than a manual one.

### Video Screening

Our mentor provided us with very realistic data sets by filming his plants while they were exposed to our different hour long sound files. We are super grateful for the resulting video files as they contain a lot of visual and auditive noise. This is particularly useful, because you want data sets that are realistic, and the world - as we all know - is messy and full of noises.

## Automatizing the Analysis with Machine Learning

After receiving the videos by our mentor, we researched 

### A Cloud Supercomputer, Machine Learning Tools, and Modern Coding Techniques

### Overview of Current Object Tracker

Our

0. Step:

1. Step:

2. Step:

3. Step:

4. Step:

5. Additional Features:

###

###

###

### Proper Tracking

![Proper Tracking Spots](https://i.imgur.com/FK4dQqk.png)

###
