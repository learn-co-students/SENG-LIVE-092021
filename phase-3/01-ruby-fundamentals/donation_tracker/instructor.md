Run `./bin/run` and point out the following error:

```rb
undefined local variable or method `greeting' for main:Object (NameError)
```

Discuss how greeting is being invoked in `init` but is not defined. Need to define the method:

This is an opportunity to discuss:

- puts
- local variables
- strings
- string interpolation

```rb
def greeting
  puts "Welcome to Donation Tracker"
  puts "Please enter your name:"
  name = gets.strip
  puts "Awesome #{name}, what would you like to do?"
end
```

Next we need to complete menu_selection which is a method that is going to handle the users menu selection by capturing users input, then perform different behaviors based on the input.

Ask students what type of statements can be used to achieve this feature?

- conditional

```rb
def menu_selection
  input = gets.strip
    if input == '1'
      create_donation
    elsif input == '2'
      organizations
    elsif input == 'menu'
      menu_list
    else
      puts "Looks like something went wrong, please try again: "
    end
end
```
The current problem being faced now is if a user selects to create a new donation, the create_donation method is not complete. 

This will be a great opportunity to discuss creating hashes, and adding new elements to an array. 

```rb
def create_donation 
  puts "Great, it looks like you would like to make a donation"
  puts "Please fill out the following fields:"
  puts "Organization name:"
  organization = gets.strip 
  puts "Donation amount:"
  amount = gets.strip 
  puts "Donation Date:"
  date = gets.strip
  completed = false
  
  new_donation = {
    organization: organization,
    amount: amount,
    date: date,
    completed: completed
  }
end 
```

Place a binding.pry in menu_selection to show return value of create_donation.
Ask students what they suggest would be best practice to capture this return value and save to the PIZZAS collection.

```rb
donation = create_donation
DONATIONS << donation 
read_donation donation
```
Now ask students how to access values in the donation hash being passed to read_donation

- bracket notation