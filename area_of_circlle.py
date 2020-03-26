#python program to calculate the area of a circle

import math
radius = int(input("insert radius of a circle: "))
area= radius*radius*math.pi

print("the area of the circle is",round(area,2),"m2")