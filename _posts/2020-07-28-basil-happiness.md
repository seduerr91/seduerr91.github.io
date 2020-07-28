---
title: Check your basil, check your happiness
tags: [Coding]
style: fill
color: success
description: Exploring Human Emotions through Bio Sensors.
---

This article introduces...
- findings my experiences with different object detection and tracking tools
- with a focus on PlantCV's capabilities,
- lists the new videos I created for further analysis, and
- introduces to my concept for the next steps.

### Object detection and tracking tools

Algorithm name | plantCV | MeanShift & Kalman | GoodFeaturesToTrack
---|---|---|---
Use Case|Designed for detecting plants and their pieces.|For moving objects such as cars or human faces.|For recognizing edges. Not for entire object detection.
Result link|n/a|[Link](https://youtu.be/jEMJBbI2GJI)|[Link](https://youtu.be/A84SOP-tgoY)

Conclusion:
- GoodFeaturesToTrack by far the best to spot results and to track movement on an stationary camera.
- PlantCV allows to determine specific plant related features.

### Introduction to PlantCV

[PlantCVs](https://plantcv.readthedocs.io/en) allows to detect plants and a lot of features of them:

Given this bare plant, I detected the plant properties and the structure of the plant.

#### Bare Plant
![Bare plant](https://i.imgur.com/RTiwZrK.jpg)
#### Bare Properties
![Plant Properties](https://i.imgur.com/WEXUOST.png)
#### Bare Structure
![Plant internal structure](https://i.imgur.com/rTEXjEP.png)

PlantCV also allows to determine the branch points or the leaf path lenghts.
#### Branch Points
! Branch Points
#### Leaf Path Lengths
! LENGTH

Additionally, you can detect the leaf color patterns, potentially inferencing a plants' health.
#### Health of Plants
![Health of plants](https://i.imgur.com/2USSkdS.png)
#### Health of Plants Analyzed
![Health of plants analyzed](https://i.imgur.com/ex6Tdz2.png)

### Videos for Further Research Setups

In order to conduct further analysis, I made videos with two different basils. One was old and already close to his end of life, while the other one was a *bio* basil, freshly bought. I did two rounds with more leaves and with less leaves on the basils for tracking purposes. Find the videos behind the the links in the table.

#### Healthy Basil
!
#### Unhealthy Basil
!

The following table introduces the basil videos.

Video|Link
---|---
Healthy basil, many leaves|[here]()
Unhealthy basil, many leaves|[here]()
Healthy basil, few leaves|[here]()
Unhealthy basil, few leaves|[here]()

### Project concept 'Show me your basil'

In order to further develop plant happiness project, I drafted a research [concept](https://drive.google.com/file/d/1FjNXeMPaLJNyggLKS7OI0_XcHgBqT_vz/view?usp=sharing) for the next upcoming months.
