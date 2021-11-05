def init
  puts "Welcome to the lean, mean Pizza Machine App!"
  puts "Tell us your name: "
  user = gets.strip
  puts "Awesome, #{user.capitalize}, What would you like to do?"
  menu_options
  menu_selection
  goodbye
end 

def menu_options
  puts "Enter the number of your selection, or 'exit' to leave the app."
  puts " 1. Create a new pizza!"
  puts " 2. View the list of created pizzas"
  puts "Enter 'search' to search pizza by name"
  puts " Change your mind? Type 'exit' to leave the app"
end 

def menu_selection
  input = gets.strip 

  until input == 'exit'
    if input == '1'
      pizza = create_pizza
      pizza.details
    elsif input == '2'
      pizzas
    elsif input == 'search'
      name = gets.strip 
      Pizza.find_by_name(name)
    else 
      puts "Invalid input"
    end
      input = gets.strip
  end
end 

def create_pizza
  puts "Name of pizza, get creative!:"
  name = gets.strip
  puts "List your toppings: "
  toppings = gets.strip
  puts "Describe this pizza: "
  desc = gets.strip 

  pizza = Pizza.new(name: name, toppings: toppings, desc: desc)
  pizza.save
end 

def pizzas 
  Pizza.all.each do |pizza|
    puts ""
    puts "name: #{pizza.name}"
    puts "#{pizza.toppings}"
    puts "#{pizza.desc}"
    puts ""
  end
end

def goodbye
  puts "Come back when you get hungry!!!"
end 