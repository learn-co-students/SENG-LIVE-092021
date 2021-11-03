class Donation 

    attr_accessor :amount, :organization, :date, :completed

    def initialize(organization, amount, date, completed)
        @organization = organization 
        @amount = amount 
        @date = date 
        @completed = completed 
    end

    def read_donation
        puts "Organization: #{@organization}"
        puts "Amount: #{@amount}"
        puts "Date: #{@date}"
        puts "Completed? #{@completed}"
    end

end 
