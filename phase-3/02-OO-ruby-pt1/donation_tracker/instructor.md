### Remind students that what we worked on yesterday was procedural ruby

### Define object orientation
- OOP is a type of computer programming language that arose as a solution and response to bigger and more complex code. 
- Everything in Ruby is an object
- Abstraction, polymorphism, inheritance and encapsulation form four of the main pillars of OOP
- 

### Talk about benefits of OO 
    - Separation of responsibilities 
    - Helps keep code DRY

### What are classes
- A blueprint, even can think of it as a factory that produces objects in a defined way. We can give our objects and classes their own methods and properties. 
Starts with class keyword and closes with ‘end’

### What is an instance
- An instance is a new product of the class
- To create an instance, we use the .new method

### Initialize
- Initialize is a method that works automatically with the .new method. 
- It is a set of behaviors we want to occur upon the creation of a new instance
- Here we can set attributes(properties) and even add the item to a collection, .all
- When we call the .new method, arguments must match what the initialize method accepts
- Add a binding.pry to show how object will now have an instance variable

### What is an instance variable, Why use instance variables?
- Difference between local and instance variables
- They are accessible throughout the class, so we don’t need to pass the value around as arguments

### Instance methods:
- Methods that can be called on an instance of a class
- Instance behaviors
- Go to arrays class and show that every time we create a new array, we are creating a new instance that has methods available to it, like .length

### Getter and setter methods
- Allows us to set properties(attributes) on our instances
- Getter allows us to read the value, setter allows us to set the value

### Attribute accessors
- A macro: a way of automating repetitive tasks, metaprogramming
- Attr_reader, attr_writer, attr_accessor 

### Self 
- Self refers to the owner of the method being called
- Can be instance or class
