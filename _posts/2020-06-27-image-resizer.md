---
title: Resizing Images
tags: [Coding]
style: fill
color: success
description: How to resize all images within one folder.
---
I need to equally size all images within a folder for my weekend project on a new web page.
For that, you firstly need to import PIL, os and sys. PIL is the :snake: image library, and os and sys are needed for navigating the file system of your operating system.

```python
from PIL import Image
import os, sys
```

Afterwards, you define the input and output folder. The input folder contains all images in high resolution as shot by my different iPhones of the past years. Additionally, you are defining a temporary variable _dirs_ for saving paths.

```python
path = "input/"
output = "output/"
dirs = os.listdir(path)
```
The function _resize()_ iterates over all files in the directory. If a _.DS_Store_ is recognized (it is a MacOS specific file) then the algorithm just continues, with taking an image, resizing it, and saving it.  Resizing is done by the function _thumbnail()_ which takes a tuple. The function creates thumbnails of all JPEG images in the input directory preserving aspect ratios with 1080,1080 max resolution.

```python
def resize():
    for file in dirs:
        if file == '.DS_Store':
             continue
        if os.path.isfile(path+item):
            im = Image.open(path+item)
            f, e = os.path.splitext(path+item)
            im.thumbnail((1080,1080), Image.ANTIALIAS)
            im.save(output+item)
resize()
print('done')
```

This way, you do not need to manually manipulate images in your file system. 
