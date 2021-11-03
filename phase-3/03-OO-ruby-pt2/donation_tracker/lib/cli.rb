ORGANIZATIONS = ["Feeding America", "American Red Cross", "American Humane"]

def init 
  greeting 
  menu_list
  menu_selection
  goodbye
end 

def greeting 
  puts "Welcome to the Donation Tracker app! What would you like to do:"
end

def menu_list 
  puts "Please select from the following options: "
  puts " Enter '1' to create a new donation!"
  puts " Enter '2' to see a list of the organizations accepting donations"
  puts " Enter 'exit' if you changed your mind and wish to leave the app"
  puts " Enter 'search' to search by id"
  puts " To see the menu options again, please enter 'menu'"
end 

def menu_selection
  input = gets.strip
  until input == 'exit'
    if input.to_i == 1  
      donation = create_donation 
      donation.read_donation 
    elsif input.to_i == 2 
      organizations
    elsif input == 'menu'
      menu_list
    elsif input == 'search'
      find_donation_by_id
    elsif input == 'pry'
      binding.pry
    else 
      puts "Oops...looks like something went wrong. Try again!"
    end
    input = gets.strip
  end 
end

def organizations 
  puts "List of organizations:"
  ORGANIZATIONS.each do |org| 
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
  date = DateTime.now.strftime('%m/%d/%y')
  completed = false

  Donation.create(
    completed: completed,
    organization: organization, 
    date: date, 
    amount: amount, 
  )
end 

def find_donation_by_id
  puts "Enter an id number:"
  id = gets.strip.to_i
  donation = Donation.find_by_id(id)
  donation.read_donation
end


  def goodbye
    puts "Thank you for your contributions! We hope to see you back soon"
  end