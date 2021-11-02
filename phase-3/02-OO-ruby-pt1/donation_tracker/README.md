# Object Orientation in Ruby pt. 1

### Lecture Deliverables

- Create and encapsulate logic for a donation class/instance

### Lecture Take aways

- Classes
- Instances
- Initialize
- Instance Variables
- Instance Methods
- Setter & Getters
- Attribute Accessors
- Self

### Object-Orientation

- Abstraction, polymorphism, inheritance and encapsulation form four of the main pillars of OOP
- What is an object? An object is a combo of data and behaviors
- In Ruby, (almost) everything is an object. Every bit of information and code can be given their own properties and actions(aka methods).

### Making Objects

#### Classes

- Outside of using prebuilt Ruby objects such as the ones listed above, we can also create our own custom ones.
- To do so, we start by building a class.
- What is a class? A class is a blueprint that defines the way that each of its products will behave as well as what data will it contain

Let's create a class for donations:

```ruby
class Donation

end
```

- What can be done with a class? We can add methods that belong to each instance of the class, methods that belong to the class as a whole as well as data that belongs to each instance or the class as a whole.
- We can also use prebuilt class methods: try `Donation.methods` to see a list of class methods already available.

#### Instances

- Once a class has been defined, we can now produce new objects or `instances` from this class.
- To create a new `instance`, `.new` will be called on the class itself

```ruby
new_donation = Donation.new
```

- Each instance is unique to another instance.
- Instances also come with their own pre-built methods, or we can define our own. Try: `new_donation.methods`

```ruby
first_donation = Donation.new
second_donation = Donation.new

first_donation == second donation
```

#### Initialize

- The initialize method will be automatically invoked in response to the `.new` method
- This is a place to set any initial data or actions upon instantiating a new object. A set of rules executed upon the creation of an instance.
- We do not have to explicility invoke initialize methods.

try:

```ruby

class Donation
    def initialize
        puts "inside initialize"
    end
end

binding.pry

 # inside the pry console run: Donation.new
 # Here we can see 'inside initialize' automatically printed upon the `.new` method invokation.

```

#### Instance variables

- The way we can attach bits of data about each instance to itself
- Instance variables are attached to the instance itself! It becomes the instances property.

```ruby
class Donation
    def initialize(organization, amount, date)
        @organization = organization
        @amount = amount
        @date = date
    end
end

donation = Donation.new('American Heart Association', 100.00, DateTime.now.strftime('%m/%d/%y'))
binding.pry

# Now try to run: donation.organization
# What was the result of this execution and why did it happen?
```

#### Instance Methods

- These are methods, or messages, that are sent to the instance the method is being called on.
- To read the values of our instances properties, we will want to create 2 particular instance methods, a setter and getter.

#### Setter and Getter methods

- Although we can instantiate a new object with some initial data through the initialize method, we need a way to read that data as well as update.
- Setter method will allow us to update the value of an instance variable/property
- Getter method will allow to read the value of an instance variable/property

To fix the error we received previously when running `donation.organization`, let's create a getter method.

```ruby

def organization
    @organization
end

```

- This method is simply returning the value of the instance variable we set on the donation instance.

Next let's create a method that would allow us to update the value of an instance variable, the setter:

```ruby

def organization=(organization)
    @organization = organization
end

```

- Here the `=` sign serves no functional purpose, it is just a convential syntax for identifying a setter method.

Let's update the organization for our donation instance

```ruby

donation.organization = "Kidney Foundation"

```

#### Attr Macros

- Writing out setter and getter methods for each attribute can potentially create a lot of lines of code.
- We can use macros!!!

```ruby
attr_accessor :organization, :amount, :date
```

- This one line of code will create both a setter and getter method for each provided argument.
