import os
from PIL import Image
countries = []
for file in os.listdir('resized'):
    countries.append(file.partition(".")[0])
    # print(f'![image](../assets/countries/resized/{file})\n')

print(sorted(countries))
print(len(countries))
