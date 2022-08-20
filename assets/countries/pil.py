import os
from PIL import Image

for file in os.listdir('resized'):
    print(f'### {file.partition(".")[0]}')
    print(f'![image](../assets/countries/resized/{file})\n')
