---
title: Reporting Human Happiness through Observing Plants
tags: [Coding]
style: fill
color: success
description: This manuscripts reports findings on human happiness through observing plants exposed to human emotion.
---

## Introduction

Plants alter their movement to positive and negative emotional auditive stimuli differently [1]. This research is using machine learning and to investigate how an individual’s behavior are driven by and influenced by her/his emotions. This research integrates first results from using plants (currently Mimosa Pudica and Codariocalyx Motorius) as bio-sensors for emotions and compare these against voice and facial emotion recognition.

In accordance with the research of Mancuso (2015) [1], and initial research from Josephine Van Delden [to insert] indicates that Mimosa Pudica and Codariocalyx Motorius raise and accelerate their leaves faster if they are exposed to different types of audio exposure, or vocal emotions. Using these fundamental hypothesis, we are automatizing the process of plant tracking to evaluate individual's happiness.

Relevant research on object detection and tracking are in which the authors [2] propose a sophisticated detection (DoH blob, extreme points, ellipse fitting and constraint) and tracking (motion prediction, feature matching, initial trajectory, and trajectory linking) method to track fish swarms. The article from [3] on fish shoals observes the kinematics of complex integrated systems by mapping the instantaneous acceleration (behavioral response) of a focal fish due to the influence of its neighbors. Thirdly, in the seminal article of [4] the authors examine flapping in spatial phases of bald ibises by using centroid analysis.

In this article, we will learn about using techniques in object detection and recognition to perform on stationary integrated systems in the form of Mimosa Pudica and Codariocalyx Motorius. Following the research invitation by [2] to replicate their approach to kinematic data from other animals and other species of fish to determine which aspects of the effective forces are universal signatures of biological groups are we are examining carnivore plants, i.e. Mimosa Pudica and Codariocalyx Motorius by following the research question:

"How can object detection and recognition patterns be leveraged to use plants (currently Mimosa Pudica and Codariocalyx Motorius) as bio-sensors for emotions?"

Next, related works in the field of object recognition and tracking, explains the methodological approach of state of the art software tools, and integrates the results the software performs.
Followed by discussion and conclusion.

## Related Works

The research of Josephine Van Delden observes that the time the Codariocalyx Motorius takes to respond to different auditive stimuli such as 'silence', 'metal', 'techno', 'classical', and 'yodeling' varies significantly with yodeling causing the plant to respond faster than without auditive stimulus (silence).In addition, additional analyses indicate that the Codariocalyx Motorius is lifting its leaves four times higher and for an extended duration when exposed to happy emotions compared to sad ones. In an experiment, the [artistic data set RAVDESS](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5955500/) in which professional speakers that repeat the same sentences in both very positive and negative tonal expressions.

In [Automatically Detect and Track Multiple Fish Swimming in Shallow Water with Frequent Occlusion](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0106506) the authors propose a sophisticated detection (DoH blob, extreme points, ellipse fitting and constraint) and tracking (motion prediction, feature matching, initial trajectory, and trajectory linking) method. For target detection method: the Determinant of Hessian (DoH) is used to detect image [blobs](https://en.wikipedia.org/wiki/Blob_detection) in scale-space. Created by convolving the image with [Gaussian kernel function](https://kite.com/python/docs/skimage.feature.blob_doh). After ellipse fitting and constraint: fit ellipse by using second-order derivative of extreme point giving a plurality of head position candidates. Therefore, used a width threshold value w. (cv2.ellipse())

Target tracking method consists of [Motion prediction](https://towardsdatascience.com/kalman-filters-a-step-by-step-implementation-guide-in-python-91e7e123b968) of fish motion as a four-dim vector (x,y, v(x), v (y)) i.e. x, y value and velocity of both moving. Then, movement is predicted by a [Kalman filter](https://de.wikipedia.org/wiki/Kalman-Filter). The inclusion of a compensation window (as only movements ±45 degrees are reasonable. Through feature matching effective features that reflect the similarity among images of the same target and dissimilarity between images of different targets are found. An active contour model is used for the extraction of fish head contours. Matching cascade via width matching, area matching and gray matching in addition to trajectory linking help to successfully move identify fish objects and tracking their movements.

In [Inferring the structure and dynamics of interactions in schooling fish](https://www.pnas.org/content/108/46/18720.short) the mapping the instantaneous acceleration (Behavioral response) of a focal fish due to the influence of its neighbors is presented. A complex biological reactions are interpreted as individual accelerations in response to fish neighbors’ positions and velocities.
Through computing the acceleration of one fish as a function of the position and velocity of its neighbor, repulsive and attractive zones are identified. When the neighboring fish is close to the focal fish, a repulsive force is exerted, pushing it away from its neighbor. When the neighboring fish is far away, an attractive force is exerted, pulling it toward its neighbor.

Also fish control motion by modulating speeds and by turning is observed. To reflect this, the authors decompose the force into two components, the component along a fish’s direction of motion (speeding up and slowing down; the “speeding force”), and the component perpendicular to its direction of motion (the “turning force”).Their analysis three shoals of fish concludes that when both neighbors are far in front of, or far behind, the focal fish (2-4 body lengths), there is a strong tendency to speed up/slow down.

In the work [Upwash exploitation and downwash avoidance by flap phasing in ibis formation flight](https://www.nature.com/articles/nature12939) individuals of northern bald ibises fly in a V flock position in aerodynamically optimum positions, in that they agree with theoretical aerodynamic predictions. Furthermore, birds show wingtip path coherence when flying in V positions, flapping spatially in phase and thus enabling upwash capture to be maximized throughout the entire flap cycle. Reduces heart rate and wing-beat frequency. Initial Data Processing: Interpolation replaced missing values in the GPS; GPS and accelerometer data were passed through a fourth-order Butterworth filter. For centroid calculus of the flock, MATLAB function ‘centroid’ was used which calculates the centroid of a polygon. The MATLAB centroid function treated each bird as a point of a polygon, and determined the centroid for each time point.

## Methodology

This Methodology is structured in three parts: sound file preparation, object recognition, and data processing.

### Sound File Preparation

Our mentor provided us with data sets by filming his plants while they were exposed to our different hour-long sound files. We are super grateful for the resulting video files as they contain a lot of visual and audio noise. This is particularly useful because you want realistic data sets, and the world - as we all know - is messy and full of noises. Hence, we have to do some significant amount of data wrangling.

### Object Detection and Tracking

#### Object Detection: Implementing the Detection class

The nature of the Kalman filter provides the main rationale for creating a Leaf class. The Kalman filter can predict the position of an object based on historical observations and can correct the prediction based on the actual data, but it can only do this for one object. As a consequence, we need one Kalman filter per object tracked.
Each Leaf object will act as a holder for a Kalman filter, a color histogram (calculated on the first detection of the object and used as a reference for the subsequent frames), and a tracking window, which will be used by the MeanShift algorithm. Furthermore, each Leaf has an ID, which we will display so that we can easily distinguish between all of the Leafs being tracked. Let's proceed sequentially through the class's implementation:

1. As arguments, the Leaf class's constructor takes an ID, an initial frame in HSV format, and an initial tracking window. Here are the declarations of the class and its constructor:

```python
import cv2
import numpy as np

# A tracked Leaf with a state including an ID, tracking window, histogram, and Kalman filter.
class Leaf():
def __init__(self, id, hsv_frame, track_window)
```

2. To begin the constructor's implementation, we define variables for the ID, the tracking window, and the MeanShift algorithm's termination criteria.

```python
self.id = id
self.track_window = track_window
self.term_crit = (cv2.TERM_CRITERIA_COUNT | cv2.TERM_CRITERIA_EPS, 10, 1)
```

3. We proceed by creating a normalized hue histogram of the region of interest in the initial HSV image:
```python
# Initialize the histogram.
x, y, w, h = track_window
roi = hsv_frame[y:y+h, x:x+w]
roi_hist = cv2.calcHist([roi], [0], None, [16], [0, 180])
self.roi_hist = cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)
```
4. Then, we initialize the Kalman filter:
```python
# Initialize the Kalman filter.
self.kalman = cv2.KalmanFilter(4,
2) self.kalman.measurementMatrix = np.array(
[[1, 0, 0, 0],
[0, 1, 0, 0]], np.float32)
self.kalman.transitionMatrix = np.array(
[[1, 0, 1, 0],
[0, 1, 0, 1],
[0, 0, 1, 0],
[0, 0, 0, 1]], np.float32)
self.kalman.processNoiseCov = np.array(
[[1, 0, 0, 0],
[0, 1, 0, 0],
[0, 0, 1, 0],
[0, 0, 0, 1]], np.float32) * 0.03
cx = x+w/2
cy = y+h/2
self.kalman.statePre = np.array([[cx], [cy], [0], [0]], np.float32)
self.kalman.statePost = np.array([[cx], [cy], [0], [0]], np.float32)
```
We are configuring the Kalman filter to predict the motion of a 2D point. As the initial point, we use the center of the initial tracking window. This concludes the implementation of the constructor.

5. The Leaf class also has an update method, which we will call once per frame. As arguments, the update method takes a BGR frame (to use when we draw a visualization of the tracking result) and an HSV version of the same frame (to use for histogram back-projection). The implementation of the update method begins with familiar code for histogram back-projection and MeanShift, as displayed in the following lines:

```python
 def update(self, frame, hsv_frame):
   back_proj = cv2.calcBackProject(
   [hsv_frame], [0], self.roi_hist, [0, 180], 1)
   ret, self.track_window = cv2.meanShift( back_proj, self.track_window, self.term_crit)
   x, y, w, h = self.track_window
   center = np.array([x+w/2, y+h/2], np.float32)
```

6. Note that we have extracted the tracking window's center coordinates because we want to perform Kalman filtering on them. We proceed to do exactly this, and then we update the tracking window so that it is centered on the corrected coordinates:

```python
  prediction = self.kalman.predict()
  estimate = self.kalman.correct(center) center_offset = estimate[:,0][:2] - center
  self.track_window = (x + int(center_offset[0]), y + int(center_offset[1]), w, h)
  x, y, w, h = self.track_window
```
7. To conclude the update method, we draw the Kalman filter's prediction as a blue circle, the corrected tracking window as a cyan rectangle, and the Leaf's ID as blue text above the rectangle:
```python
  # Draw the predicted center position as a circle.
  cv2.circle(frame, (int(prediction[0]), int(prediction[1])), 4, (255, 0, 0), -1)
  # Draw the corrected tracking window as a rectangle.
  cv2.rectangle(frame, (x,y), (x+w, y+h), (255, 255, 0), 2)
  # Draw the ID above the rectangle.
  cv2.putText(frame, 'ID: %d' % self.id, (x, y-5),
  cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 0, 0), 1, cv2.LINE_AA)
```
This is all the functionality and data that we need to associate with an individual Leaf. Next, we need to implement a program that provides the necessary video frames to create and update Leaf objects.

#### Implementing the Main function

Now that we have a Leaf class to maintain data about the tracking of each Leaf, let's implement our program's main function. We will look at the parts of the implementation sequentially:

1. We begin by loading a video file, initializing a background subtractor, and setting the background subtractor's history length (that is, the number of frames affecting the
background model)

```python
def main():
cap = cv2.VideoCapture('Leafs.avi')
# Create the KNN background subtractor.
bg_subtractor = cv2.createBackgroundSubtractorKNN()
history_length = 20 bg_subtractor.setHistory(history_length)
```

2. Then, we define morphology kernels:

```python
erode_kernel = cv2.getStructuringElement( cv2.MORPH_ELLIPSE, (3, 3))
dilate_kernel = cv2.getStructuringElement( cv2.MORPH_ELLIPSE, (8, 3))
```

3. We define a list called Leafs, which is initially empty. A little later, we will add Leaf objects to this list. We also set up a frame counter, which we will use to determine whether enough frames have elapsed to fill the background subtractor's history. Here are the relevant definitions of the variables:

```python
Leafs = []
num_history_frames_populated = 0
```
4. Now, we start a loop. At the start of each iteration, we try to read a video frame. If this fails (for instance, at the end of the video file), we exit the loop:

```python
while True:
  grabbed, frame = cap.read()
  if (grabbed is False):
    break
```

5. Proceeding with the body of the loop, we update the background subtractor based on the newly captured frame. If the background subtractor's history is not yet full, we simply continue to the next iteration of the loop. Here is the relevant code:

```python
# Apply the KNN background subtractor.
fg_mask = bg_subtractor.apply(frame)
# Let the background subtractor build up a history.
if num_history_frames_populated < history_length:
  num_history_frames_populated += 1 continue
```

6. Once the background subtractor's history is full, we do more processing on each newly captured frame. Specifically, we apply the same approach we used with background subtractors earlier in this chapter: we perform thresholding, erosion, and dilation on the foreground mask; and then we detect contours, which might be moving objects:

```python
# Create the thresholded image.
_, thresh = cv2.threshold(fg_mask, 127, 255, cv2.THRESH_BINARY)
cv2.erode(thresh, erode_kernel, thresh, iterations=2)
cv2.dilate(thresh, dilate_kernel, thresh, iterations=2)
# Detect contours in the thresholded image.
contours, hier = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
```

7. We also convert the frame to HSV format because we intend to use histograms in this format for MeanShift. The following line of code performs the conversion:

```python
hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
```
8. Once we have contours and an HSV version of the frame, we are ready to detect and track moving objects. We find and draw a bounding rectangle for each contour that is large enough to be a Leaf. Moreover, if we have not yet populated the Leafs list, we do so now by adding a new Leaf object based on each bounding rectangle (and the corresponding region of the HSV image). Here is the subloop that handles the contours in the manner we have just described:

```python
# Draw rectangles around large contours.
# Also, if no Leafs are being tracked yet, create some.
should_initialize_Leafs = len(Leafs) == 0 id = 0
for c in contours:
  if cv2.contourArea(c) > 500:
    (x, y, w, h) = cv2.boundingRect(c) cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 1)
      if should_initialize_Leafs:
        Leafs.append(Leaf(id, frame, hsv_frame, (x, y, w, h)))
        id += 1
```

9. By now, we have a list of Leafs whom we are tracking. We call each Leaf object's update method, to which we pass the original BGR frame (for use in drawing) and the HSV frame (for use in tracking with MeanShift). Remember that each Leaf object is responsible for drawing its own information (text, the tracking rectangle, and the Kalman filter's prediction). Here is the subloop that updates the Leafs list:

```python
# Update the tracking of each Leaf.
for Leaf in Leafs:
  Leaf.update(frame, hsv_frame)
```

10. Finally, we display the tracking results in a window, and we allow the user to exit the program at any time by pressing the Esc key:

```python
cv2.imshow('Leafs Tracked', frame)
k = cv2.waitKey(110) if k == 27: # Escape
  break
if __name__ == "__main__": main()
```

There you have it: MeanShift working in tandem with the Kalman filter to track moving objects. All being well, you should see tracking results visualized in the following manner:
In this cropped screenshot, the green rectangle with the thin border is the detected contour, the cyan rectangle with the thick border is the Kalman-corrected MeanShift tracking rectangle, and the blue dot is the center position predicted by the Kalman filter.

### Data Processing

#### 1. Video Processing

```python
data = motion_array
```

After the processing of any video, I get a NumPy array named motion_array. This includes six values which are: 'ID','X','Y','W','H','Frame'. The ID pertains to a point that is being tracked by the OpenCV algorithm. The x, y values are the coordinations of the point on any frame (y pertains to the y-axis, x pertains to the x-axis). The w, h values refer to the width and height of a bounding rectangle. Frame is the number from which the previous information was extracted. With a frame rate of 30 frames per second, you could calculate that frame 90 is coming in after 3 seconds.

As Pandas DataFrames (a high performant structured table) is very effective in terms of data manipulation it is a first task to create a Pandas DataFrame from the NumPy array 'data'. The following line of code takes the NumPy data array as an input, and transforms it into a DataFrame with the column names 'ID','X','Y','W','H', and 'Frame'.

```python
df_video = pd.DataFrame(data=data[0:,0:], index=[i for i in range(data.shape[0])], columns=['ID','X','Y','W','H','Frame'])
```
Now the actual data manipulation starts. In order to get the elapsed time for any frame, the column 'Frame' needs to be divided by the 'frame_rate' (30 fps). This approach gives a very comprehensive amount of data. Imagine you have a 12 minute long video, with 20 moving points. That will leave you with _12 minutes * 60 seconds * 30 frames per second x 6 column values x 20 moving points = 2.5M_ data points. Therefore, I decided to only, every tenth millisecond. This is achieved by round the Elapsed time to one digit, and then removing all duplicates on their first occurrence. For further analysis, we do not need the bounding boxes, hence, we exclude teh w, h values. In the initial process, only the Y-Values that relate to.

```python
# Calculate Elapsed Time for Frames of Video, round by 1 digit.
df_video["Elapsed"] = round(df_video["Frame"]/30, 1)
# Remove Duplicates, only keep first Occurrence
df_video_wo_dups = df_video.drop_duplicates(subset=None, keep='first', inplace=False)
# Only take first 20 Moving Points
df_video_queried = df_video_wo_dups.query('0 <= ID <= {}'.format(20))
# Take y values for any moving point to account for vertical movement.
df_video_3_cols = df_video_queried.filter(items=['ID', 'Y', 'Elapsed'])
# Outlook: Take x and y values for any moving point to account for vertical, horizontal and lateral movement.
df_video_4_cols = df_video_queried.filter(items=['ID', 'X', 'Y', 'Elapsed'])
```

The visualization tool Matplotlib inverts the y-axis which make your inital results very intersting until you figure this out. Luckily, I remembered that my colleague was telling me this. Therefore, the next step inverts the y axis.

```python
# Minding that Matplotlib inverts x/y Values
df_inverted_x_y_minus_1 = df_video_3_cols.sub([0, frame_height, 0], axis='columns')
df_inverted_x_y = df_inverted_x_y_minus_1.mul([1, -1, 1], axis='columns')
df_video = df_inverted_x_y
```
Lastly, the pivoting features of Pandas are being used to prepare the video data for a later merging with the audio data.
```python
# Use Pivot Feature of Pandas DataFrame
df_pivoted_video = pd.pivot_table(df_video, values=["Y"], index=pd.Grouper(key='Elapsed'), columns=["ID"],)
```

#### 2. Audio Processing

In order to get the audio data, the video is processed once again, to extract, and then unpack the audio data. The first of these two steps need to be in a sub shell script because the 'ffmpeg' algorithm does not run in plain Python.
Afterwards, I am taking the very useful 'librosa' module to extract 'mfccs' - a voice feature for analysis - from the audio part of the video.

```python
# Extracts Audio from Input Video
command = "ffmpeg -i {} -ab 160k -ac 2 -ar 44100 -vn {}".format(INPUT_VIDEO, OUTPUT_VIDEO_NAME_WAV)
subprocess.call(command, shell=True)

# Unpack Audio
audio_path = INPUT_VIDEO
x , sr = librosa.load(audio_path)

# Get the MFCCs (and choose the number of features to extract); manipulate Pandas DataFrame.
mfccs = librosa.feature.mfcc(x, sr=sr, n_mfcc=4)
audio_data = np.transpose(mfccs)
```

The next step is for preparing the merging of the audio and the video data. This is being done on the time elapsed between the two data structures. While for the video the frame rate was indicative on how much time has passed, it is a bit more complicated with the 'mfcc'. The reason is, that they are calculated on the base of a moving window, and not as isolated data points. Hence, the window_length, the sample_rate, and the MFCCs values are the basis for the calculation. Once, the step size between the MFCCs is calculated, the elapsed time can be.

```python
# Calculate the step length between a mfcc and the audio in seconds
window_length = 512 # default value by mfcc algorithm
length = (round((window_length/sr)*mfccs.shape[1]), 2)
step_size = length[0]/mfccs.shape[1]

# Getting Elapsed Time of Audio from Audiofile
audio_time_data = np.arange(0, (length[0]), step_size)
audio_time_data = np.round(audio_time_data, 1)

# Create a pandas DataFrame from the elapsed_time as a column calculated from the MFCCs
df_audio_time_steps = pd.DataFrame(data=audio_time_data,
                index=[i for i in range(audio_time_data.shape[0])],
                columns=['Elapsed_t'])
```

Afterwards, the DataFrame consisting of the elapsed time, and the extracted MFCC features is being created. In case, there are duplicate values (the elapsed time is again calculated as tenth of seconds) only the first occurrence is kept again.

```python
# Create the Audio Pandas DataFrame
df_audio = pd.DataFrame(data=audio_data,
                index=[i for i in range(audio_data.shape[0])],
                columns=['MFCC'+str(i) for i in range(audio_data.shape[1])])
df_audio_w_time = pd.concat([df_audio_time_steps, df_audio], axis=1, join='outer')
df_audio_w_time_w_o_dups = df_audio_w_time.drop_duplicates(subset='Elapsed_t', keep='first')
df_audio_w_time_w_o_dups
```

#### 3. Merging the Resulting Data Sets

As a final step, the audio dataFrame and the video dataFrame are merged both on the elapsed time. As some points may not move from one second to the next, it can be assumed that the point will be on the same position on the next frame, respectively that it has not moved before, and therefore it is assumed that the x, y - value was the same before. This is being done by the functions of backward and forward filling.

```python
# Merge the audio data and the video data.
df_merged = pd.merge(df_audio_w_time_w_o_dups, df_pivoted_video, how='left', left_on=['Elapsed_t'], right_on=['Elapsed'])
# backward filling (NANs filling up)
df_bf_filled = df_merged.fillna(method='bfill')
# forward filling (NANs filling down)
df_filled = df_bf_filled.fillna(method='ffill')
```
Find the resulting data structure here.
![final data](https://i.imgur.com/mJLGmpp.png)

Since the next step is visualizing the data, I used only every 20th datapoint for the visualization and the melt function to get the dataFrame from the wide data structure into the long data structure.

```python
# transform from wide to long-form data
df_filled_every_two_seconds = df_filled.iloc[::20]

df_filled_melted = df_filled_every_two_seconds.melt('Elapsed_t', var_name='Variables', value_name='Values')

alt.Chart(df_filled_melted).mark_line().encode(
  x='Elapsed_t',
  y='Values',
  color='Variables'
  ).properties(
    width=900,
    height=400,
).interactive(bind_y=False)
```

![graph](https://i.imgur.com/3X9jQLS.png)

Following these manipulation techniques, I was able to prepare the extracted data for further processing steps. Pandas is a powerful data structure to manipulate and engineer data quickly and efficiently. I was happy to learn about all these features in the course of the development.

## Results

The results reemphasize what my colleague did.

## Discussions

Obviously, there is still a lot to be done:

It was quite surprising to learn that plants move differently when a person speaks happily or sadly. Hence, we replicate these early results  with increasing amounts of data and automatize the data processing with Machine Learning techniques. Therefore, we created more of the world's most important currency of modern times: data.

## Conclusion

Now, that the data pipeline is functional and initial data analyses are operating, a tool for concluding happy or sad emotions will be added. Hereafter image depicts promising tracking spots.

## Literature

[1] Stefan Mancuso - Brilliant Green

[2] [Automatically Detect and Track Multiple Fish Swimming in Shallow Water with Frequent Occlusion](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0106506)

[3] [Inferring the structure and dynamics of interactions in schooling fish](https://www.pnas.org/content/108/46/18720.short)

[4] [Upwash exploitation and downwash avoidance by flap phasing in ibis formation flight](https://www.nature.com/articles/nature12939)

Thank you for comments and your interest!
