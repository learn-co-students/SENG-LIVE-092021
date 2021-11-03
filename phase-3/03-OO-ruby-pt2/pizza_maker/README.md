# Lecture Exercise

For this exercise, the goal is to complete the pizza class by adding some modifications

### Pizza Class: 
1. Refactor the initialize method to use keyword arguments. 
2. Create a class variable, @@all. We will use this variable to keep track of the number of new pizzas that are created from the Pizza class. 
3. Define a class method `.all` that is responsible for reading the class variable `@@all`.
4. Define a `#save` method that will save each new instance to the class array and return the instance.     
5. Define a method `.find_by_name` that will accept name as an argument and return a matching pizza instance.

### CLI:

1. Add a menu option for a user to search a pizza with a given name
2. Refactor all code in CLI relying on `PIZZAS` to using the `Pizza.all` method
