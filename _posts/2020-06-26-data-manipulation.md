---
title: Data Manipulation with Pandas for Object Tracker
tags: [Coding]
style: fill
color: danger
description: Feature Engineering of OpenCV Output with Python Pandas.
---
Together with Prof. Peter Gloor from MIT, Josephine and I work on an plant tracker. In our project __[plantions](www.plantions.github.io)__ it is the aim to read human emotions through the observation of plants. [Here](https://seduerr91.github.io/blog/object-tracker), you can find introduction to the project in its entirety. 

Please find the [Project](https://plantions.github.io/project/2020/06/25/instructions.html) and a manual on its use here. This post takes a deep dive into the data engineering part (alias Step 3: Analysis). Before that, I take the outputs from the OpenCV algorithm (based on cv2.adaptiveThreshold, cv2.morphologyEx, and cv2.findContours) to process them for further analysis. The OpenCV algorithms will be subject to a subsequent post.

This article is structured in (1) Video and (2) Audio Processing, and (3) Merging the resulting data sets. 

# (1) Video Data Processing 

```python
data = motion_array
```



After the processing of any video, I get a NumPy array named motion_array. This includes six values which are: 'ID','X','Y','W','H','Frame'. 
- ID pertains to a point that is being tracked by the OpenCV algorithm.
- The x,y values are the coordinations of the point on any frame (y pertains to the y-axis, x pertains to the x-axis).
- The w, h values refer to the width and height of a bounding rectangle. 
- Frame is the number from which the previous information was extracted. With a frame rate of 30 frames per second, you could calculate that frame 90 is coming in after 3 seconds.

As Pandas DataFrames (a high performant structured table) is very effective in terms of data manipulation it is a first task to create a Pandas DataFrame from the NumPy array 'data'. The following line of code takes the NumPy data array as an input, and transforms it into a DataFrame with the column names 'ID','X','Y','W','H', and 'Frame'.

df_video = pd.DataFrame(data=data[0:,0:], index=[i for i in range(data.shape[0])], columns=['ID','X','Y','W','H','Frame'])

Now the actual data manipulation starts. In order to get the elapsed time for any frame, the column 'Frame' needs to be divided by the 'frame_rate' (30 fps). This approach gives a very comprehensive amount of data. Imagine you have a 12 minute long video, with 20 moving points. That will leave you with _12 minutes * 60 seconds * 30 frames per second x 6 column values x 20 moving points = 2.5M_ data points. Therefore, I decided to only, every tenth millisecond. This is achieved by round the Elapsed time to one digit, and then removing all duplicates on their first occurence. For further analysis, we do not need the bounding boxes, hence, we exclude teh w, h values. In the initial process, only the Y-Values that relate to 

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

# Audio Data Processing

In order to get the audio data, the video is processed once again, to extract, and then unpack the audio data. The first of these two steps need to be in a subshell because the ffmpeg algorithm does not run in plain Python. 
Afterwards, I am taking the very useful librosa module to extract the mfccs from the audio part of the video. 

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

The next step is for preparing the merging of the audio and the video data. This is being done on the time elapsed between the two data structures. While for the video the frame rate was indicative on how much time has passed, it is a bit more complicated with the mfcc. The reason is, that they are calculated on the base of a moving window, and not as isolated data points. Hence, the window_length, the sample_rate, and the MFCCs values are the basis for the calculation. Once, the step size between the MFCCs is calculated, the elapsed time can be. 

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

Afterwards, the DataFrame consisting of the elapsed time, and the extracted MFCC features is being created. In case, there are duplicate values (the elapsed time is again calculated as tenth of seconds) only the first ocurrence is kept again.

```python
# Create the Audio Pandas DataFrame
df_audio = pd.DataFrame(data=audio_data, 
                index=[i for i in range(audio_data.shape[0])], 
                columns=['MFCC'+str(i) for i in range(audio_data.shape[1])])
df_audio_w_time = pd.concat([df_audio_time_steps, df_audio], axis=1, join='outer')
df_audio_w_time_w_o_dups = df_audio_w_time.drop_duplicates(subset='Elapsed_t', keep='first')
df_audio_w_time_w_o_dups
```

# (3) Merge Video and Audio DataFrames

As a final step, the audio dataFrame and the video dataFrame are merged both on the elapsed time. As some points may not move from one second to the next, it can be assumed that the point will be on the same position on the next frame, respectively that it has not moved before, and therefore it is assumed that the x,y - value was the same before. This is being done by the functions of backward and forward filling. 

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
This way, I am allowed to use the data visualization module [AltAir](https://altair-viz.github.io/getting_started/overview.html) as depicted in the image hereafter. 

![graph](https://i.imgur.com/3X9jQLS.png)

Following these manipulation techniques, I was able to prepare the extracted data for further processing steps. Pandas is a powerful datastructure to manipulate and engineer data quickly and efficiently. I was happy to learn about all these features in the course of the development.