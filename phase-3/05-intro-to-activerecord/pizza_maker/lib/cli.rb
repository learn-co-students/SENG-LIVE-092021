PIZZA = [] # why are we doing this?

def init
  puts "Welcome to the lean, mean Pizza Machine App!"
  puts "Tell us your name: "
  user = gets.strip
  puts "Awesome, #{user.capitalize}, What would you like to do?"
  menu
  menu_selection
  goodbye
end 

def menu
  puts "Enter the number of your selection, or 'exit' to leave the app."
  menu_options
end 

def menu_options
  puts " 1. Create a new pizza!"
  puts " 2. View the list of created pizzas"
  puts " Change your mind? Type 'exit' to leave the app"
end 

def menu_selection
  # Need to add some control flow based on users menu selection
  while selection != 'exit'
    if selection == "1"
      puts "user selected 1"
      create_pizza
    elsif selection == "2"

    end 
  end 
end 

def create_pizza
  puts "Name of pizza, get creative!:"
  name = gets.strip
  puts "List your toppings: "
  toppings = gets.strip
  puts "Describe this pizza: "
  desc = gets.strip 

  # need to return a pizza hash
end 

# Currently there is not a method to print the list of created pizzas. In order to complete this:
# 1. Think about a way to store and save the pizzas a user creates
# 2. How can this collection be used to print a list of all of the stored pizzas

def goodbye
  puts "Come back when you get hungry!!!"
end 