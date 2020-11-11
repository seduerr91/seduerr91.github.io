---
title: OpenCV Code from Object Tracker
tags: [Coding]
style: fill
color: warning
description: Pure barely annotated code from the Object Tracker project.
---

# Step 1: Choose Hyper-Parameters

```python

#@title # Step 1: Choose Hyperparameters

class Leaf():
def __init__(self, id, hsv_frame, track_window):
    self.id = id
    self.track_window = track_window
    self.term_crit = (cv2.TERM_CRITERIA_COUNT | cv2.TERM_CRITERIA_EPS, 10, 1)
    # Initialize the histogram.
    self.x, self.y, self.w, self.h = track_window
    roi = hsv_frame[y:y+h, x:x+w]
    roi_hist = cv2.calcHist([roi], [0], None, [16], [0, 180])
    self.roi_hist = cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)
    # Initialize the Kalman filter
    self.kalman = cv2.KalmanFilter(4, 2)
    self.kalman.measurementMatrix = np.array(
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
    self.kalman.statePre = np.array(
        [[cx], [cy], [0], [0]], np.float32)
    self.kalman.statePost = np.array(
        [[cx], [cy], [0], [0]], np.float32)

def get_plant_values(self):
    return np.array([ self.id, self.x, self.y, self.w, self.h ])

def update(self, frame, hsv_frame):
    back_proj = cv2.calcBackProject([hsv_frame], [0], self.roi_hist, [0, 180], 1)
    ret, self.track_window = cv2.meanShift(back_proj, self.track_window, self.term_crit)
    x, y, w, h = self.track_window
    center = np.array([x+w/2, y+h/2], np.float32)
    prediction = self.kalman.predict()
    estimate = self.kalman.correct(center)
    center_offset = estimate[:,0][:2] - center
    self.track_window = (x + int(center_offset[0]), y + int(center_offset[1]), w, h)
    x, y, w, h = self.track_window
    # Draw the predicted center position as a blue circle.
    cv2.circle(frame, (int(prediction[0]), int(prediction[1])),
               4, (255, 0, 0), -1)
    # Draw the corrected tracking window as a cyan rectangle.
    cv2.rectangle(frame, (x,y), (x+w, y+h), (255, 255, 0), 2)
    # Draw the ID above the rectangle in blue text.
    cv2.putText(frame, 'ID: %d' % self.id, (x, y-5), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 0, 0), 1, cv2.LINE_AA)
```

# Step 2: Video Processing

```python

cap = cv2.VideoCapture(INPUT_VIDEO)

# Create the KNN background subtractor.
bg_subtractor = cv2.createBackgroundSubtractorKNN()
history_length = 20
bg_subtractor.setHistory(history_length)
erode_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (ERODE_1, ERODE_2))
dilate_kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (DILATE_1, DILATE_2))
leafs = []
num_history_frames_populated = 0

fourcc = cv2.VideoWriter_fourcc('M','P','E','G')
out = cv2.VideoWriter(OUTPUT_VIDEO_NAME_MPEG, fourcc, FRAMES_PER_SECOND, (frame_width, frame_height))

grabbed_frames = 0

while True:
    grabbed, frame = cap.read()
    grabbed_frames += 1
    if (grabbed is False):
        break
    no_of_frame = no_of_frame + 1
    # Apply the KNN background subtractor.
    fg_mask = bg_subtractor.apply(frame)

    # Let the background subtractor build up a history.
    if num_history_frames_populated < history_length:
        num_history_frames_populated += 1
        continue

    # Create the thresholded image.
    # MASK-Threshold
    thresh = cv2.adaptiveThreshold(fg_mask, 120, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY, 11, 2)
    cv2.morphologyEx(thresh, cv2.MORPH_OPEN, erode_kernel)
    cv2.morphologyEx(thresh, cv2.MORPH_CLOSE, erode_kernel)

    # Detect contours in the thresholded image.
    contours, hier = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_TC89_KCOS)
    hsv_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

    # Draw green rectangles around large contours.
    # Also, if no leafs are being tracked yet, create some.
    should_initialize_leafs = len(leafs) == 0
    id = 0
    for c in contours:
        if cv2.contourArea(c) > CONTOUR_AREA:
            (x, y, w, h) = cv2.boundingRect(c)
            cv2.rectangle(frame, (x, y), (x+w, y+h),
                            (0, 255, 0), 1)
            if should_initialize_leafs:
                leafs.append(Leaf(id, hsv_frame, (x, y, w, h)))
        frame_no_and_values = np.array([ id, x, y, w, h ])
        a = np.append(frame_no_and_values, [no_of_frame])
        arr.append(a)
        id += 1

    # Update the tracking of each leaf.
    for leaf in leafs:
        leaf.update(frame, hsv_frame)
        frame_no_and_values = np.array([ id, x, y, w, h ])
        a = np.append(frame_no_and_values, [no_of_frame])
        arr.append(a)
    out.write(frame)
cap.release()
out.release()
cv2.destroyAllWindows()
```
