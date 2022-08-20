import os
from PIL import Image

for file in os.listdir('original_images'):
    f_img = 'original_images/'+file
    if f_img.endswith('.jpg' or '.JPG' or '.HEIC'):
        try:
            img = Image.open(f_img)
            img = img.resize((1024, 768))
            img.save('resized/' + file)
        except: pass
