import os
from PIL import Image
counter = 0 
for file in os.listdir('resized'):
    counter += 1
    print(f'### {counter}. {file.partition(".")[0]}')
    print(f'![image](../assets/countries/resized/{file})\n')
