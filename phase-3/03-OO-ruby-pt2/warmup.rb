# Review the following code
# 'Self' is referenced in a few different places.
# Fill in the blanks
require 'pry'
class Email 
    puts "#{self} will return Email class" # because this is within the scope of the Email class

    attr_accessor :sender, :receiver, :subject, :body

    def initialize(sender, receiver, subject, body)
        self.sender = sender
        self.receiver = receiver
        self.subject = subject
        self.body = body
        puts "#{self} will return a specific instance"
    end 

    def print_signature 
        puts "Sincerely, #{self.sender}"
        puts "#{self} will return a specific instance"
    end 

end 

email = Email.new("Hathor", "Abby", "Self is cool", "Learning self today")

binding.pry

