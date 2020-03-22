#python program to convert user input to binary output

user_input= int(input("insert number to convert : "))

value =[ ]
while user_input != 0:
  temp=user_input//2 
  remainder =user_input%2
  user_input =temp
  value.append(remainder)
print("the binary is")
for x in value:
	print (x,end ="")