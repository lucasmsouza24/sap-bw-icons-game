import os

path ="../img"
#we shall store all the file names in this list
filelist = []

for root, dirs, files in os.walk(path):
	for file in files:
        #append the file name to the list
		filelist.append(os.path.join(root,file))

#print all the file names
print(filelist)