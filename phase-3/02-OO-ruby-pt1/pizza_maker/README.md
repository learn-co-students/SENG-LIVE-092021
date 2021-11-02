# Lecture Exercise

For this exercise, the goal is to create a Pizza class

1. Create a pizza class and practice initializing new instances through binding.pry
2. Define an 'initialize' method that sets the attributes: name, ingredients and desc using instance variables. 
3. While in pry, create a new pizza instance with a name, ingredients and desc attribute. Run the `.name` method on this new instance. What is the result? Discuss why this is happening and come up with how to solve the current result.(Write out the method, without using a macro)
4. What type of method is this and why is it necessary? Now create a setter for the name attribute. 
5. Writing a setter and getter method for each attribute can create a lot of code bloat. Let's refactor these two methods using a macro method that will produce both the setter and getter methods with 1 line of code. 
