

from tkinter import *


root = Tk()			


root.geometry('100x100')


btn = Button(root, text = 'Click me !', bd = '5',
						command = root.destroy)


btn.pack(side = 'top')

root.mainloop()


from tkinter.ttk import *
 

root1 = Tk()
 
          
root1.geometry('100x100')    
 
btn = Button(root1, text = 'Click me !',
                command = root.destroy)
 

btn.pack(side = 'top')    
 
root1.mainloop()
