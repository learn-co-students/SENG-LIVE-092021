ORGANIZATIONS = ["Feeding America", "American Red Cross", "American Humane"] # constant variable
DONATIONS = [] 

$test = "testing" # global variable
# 'init' is a method written as an entry way to the application. The method is being invoked in 'bin/run' which is an executable file used to initialize the entire program. Please refer to this file if you would like to learn more. 
# When the command './bin/run' is ran in the terminal, it is invoking upon this executable file and running all the code written there.
# The goal of this method is to run subsequent methods that handle different parts and responsibilities of the application in the intended order of operations. 
def init 
  greeting 
  menu_list
  menu_selection
  goodbye
end 

# Create a greeting method that will print a welcome message and prompt the user to enter name
# Grab the users input, using the gets method which will receive the input in string format.
# Store this value in a local variable 'name'
# Print out a statement that will read: "Awesome Joe, what would you like to do?" 
# `Joe` should be dynamic and return the value of the name variable so that the string prints the name a user inputs upon welcome.  

def greeting # a method 
  puts "Welcome to the Donation Tracker app! Tell us your name:" 
  name = gets.strip # local variable: local only to the scope that it has been defined within 
  puts "Awesome #{name}, what would you like to do?"
end

def menu_list 
  puts "Please select from the following options: "
  puts " Enter '1' to create a new donation!"
  puts " Enter '2' to see a list of the organizations accepting donations"
  puts " Enter 'exit' if you changed your mind and wish to leave the app"
  puts " To see the menu options again, please enter 'menu'"
end 

# menu_selection will be responsible for receiving and handling users selection after the list options have been printed while also keeping the user . 
# For a behavior like this control flow can be used to execute certain behaviors based on the selection that was made. Thinking about what we have learned in Ruby so far, how can this be written? What type of statements can be used?
# Another problem that needs to be solved is maintaining a loop in the program that will allow a user to make multiple selections without getting kicked out of the app. 
def menu_selection
  input = gets.strip
  # conditional statement: if/else statement 
  until input == 'exit'
    if input.to_i == 1 # comparison 
      donation = create_donation # return the hash of the new donation
      DONATIONS << donation
      read_donation(donation)
    elsif input.to_i == 2 
      organizations
    elsif input == 'menu'
      menu_list
    else 
      puts "Oops...looks like something went wrong. Try again!"
    end
    input = gets.strip
  end 
end
# org_list will print out a list of the available organizations a user can donate to
# Currently, all organizations are stored in an array
# Iterate over the array and print each individual organization
def organizations 
  puts "List of organizations:"

  # iterate over the organizations array, print out each element

  ORGANIZATIONS.each do |org| # .each vs .map: returns a new array, manipulate elements in an array 
    puts org
  end
end 

def create_donation 
  puts "Great, it looks like you would like to make a donation"
  puts "Please fill out the following fields:"
  puts "Organization name:"
  organization = gets.strip 
  puts "Donation amount:"
  amount = gets.strip 
  puts "Donation Date:"
  date = gets.strip

  # # Need to create a hash with the provided values user has entered
  # # Store and save the new donation to the collection of donations
  new_donation = {
    organization: organization,
    amount: amount,
    date: date,
    completed: false
  }
  # DONATIONS << new_donation
  # new_donation
end 

  # Confirmation will be a method that is invoked after a user submits a new donation. It will read and print the values that were entered by user. 
  # This method will accept an argument of the donation and read the values
  def read_donation donation # donation is a hash 
    puts "Organization: #{donation[:organization]}"
    puts "Amount: #{donation[:amount]}"
    puts "Date: #{donation[:date]}"
    puts "Completed? #{donation[:completed]}"
  end

  def goodbye
    puts "Thank you for your contributions! We hope to see you back soon"
  end
