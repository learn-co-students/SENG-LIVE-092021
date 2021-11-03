PIZZAS = [] 
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
  puts " Change your mind? Type 'exit' to leave the app"
end 

def menu_selection
  selection = gets.strip
  until selection == 'exit'
    if selection == '1'
      create_pizza
    elsif selection == '2'
      created_pizzas
    else 
      puts "Invalid option. Try again: "
    end 
    menu_options
    selection = gets.strip
  end 
end 

def create_pizza
  puts "Name of pizza, get creative!:"
  name = gets.strip
  puts "List your toppings: "
  toppings = gets.strip
  puts "Describe this pizza: "
  desc = gets.strip 
  pizza = {
    name: name,
    toppings: toppings,
    desc: desc
  }

  pizza_confirmation(pizza) 
  PIZZAS << pizza 
  pizza 
end 

def pizza_confirmation(pizza)
  puts "The pizza you created is:"
  puts "Name: #{pizza[:name]}"
  puts "Toppings: #{pizza[:toppings]}"
  puts "Desc: #{pizza[:desc]}"
end 

def created_pizzas
  PIZZAS.each do |pizza| 
    puts "Name: #{pizza[:name]}"
    puts "Toppings: #{pizza[:toppings]}"
    puts "Desc: #{pizza[:desc]}"
  end 
end 

def goodbye
  puts "Come back when you get hungry!!!"
end 