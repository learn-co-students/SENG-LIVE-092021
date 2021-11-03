# OO Ruby pt 2

### Lecture Deliverables

- [ ] Refactor code that remembers new donation instances
    - [ ] Set a class variable `@@all` to an empty array
    - [ ] Define a `#save` method that will add the new instance to the `@@all` array and return the newly saved instance
    - [ ] Define a `#create` method that will instantiate and save a method at the same time
    - [ ] Define a method `.all` that will return the value of `@@ll`
- [ ] Refactor initialize method to use keyword arguments
- [ ] Add a new property `id` to donation instances that will increment by 1 every time a new instance is created 
- [ ] Create a class method `.find_by_id` that accepts an `id` as an argument. The method will find the instance with the given `id`. After a new instance has been created, the `id` can not change
- [ ] Define a method `.pending` that will return all donations with a completed status of false
- [ ] BONUS: create a `.complete` method that will update completed status to true if donation was made 2 days ago

### Lecture Take Aways

- Class Methods
- Class Variables
- Keyword Arguments
- Mass Assignment

#### Class Variables

- Syntax: double @ signs
- Belongs to the class itself
- if we are inside class method, can access the class variable
- if we are inside of an instance method, we can not access the class variable

```ruby
@@all = []
```

#### Class Methods

- Syntax: Method that is called upon the class itself. 

```ruby
Classname.method_name
```

#### Remembering Objects

- To save new instances of a class:

1. Create a class variable set to an empty array
2. Upon creation, add new instance to to array

```ruby
@@all = []

def initialize(parameters)
    ...
    @@all << self
end
```

#### Keyword arguments

- When using the initialize method, it is really important to maintain the order in which the arguments are defined.
- Using keyword arguments, order does not matter.
- Will also be beneficial for utilizing mass assignment

```ruby
def initialize(parameter1:, parameter2:)
    @attribute1 = parameter1
    @attribute2 = parameter2
end
```

#### Mass Assignment

- The following code takes in a hash, iterates over it and uses the `.send` method to set attributes on the new instance.

```ruby
def initialize(attributes = {})
    attributes.each do |key, value|
        self.send("#{key}=", value)
    end
end
```

#### Private Methods

- Methods that are private to a class, can not be called upon in another class
- Use keyword `private`
