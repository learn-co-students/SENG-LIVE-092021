class Donation 

    @@all = []

    attr_accessor :amount, :organization, :date, :completed
    attr_reader :id 

    def initialize(organization:, amount:, date:, completed:)
        @id = Donation.primary_key
        @organization = organization 
        @amount = amount 
        @date = date 
        @completed = completed 
    end

    def save 
        @@all << self 
        self
    end

    def self.all
        @@all 
    end

    def self.create(attributes)
        self.new(attributes).save
    end

    def self.primary_key 
        if @@all.empty? 
            1
        else 
            self.all[-1].id + 1
        end
    end

    def read_donation
        puts "Organization: #{@organization}"
        puts "Amount: #{@amount}"
        puts "Date: #{@date}"
        puts "Completed? #{@completed}"
    end

    def self.find_by_id(id)
        self.all.find do |donation|
            donation.id == id
        end
    end

    def self.pending 
        self.all.select do |donation|
            donation.completed == false
        end
    end

    def self.complete
        Donation.all.each do |donation|
            donation.completed = true if Date.strptime(donation.date, "%m/%d/%Y") < 2.days.ago
        end 
    end





    # Donation.create(organization: "Feeding America", amount: 100, date: DateTime.now.strftime('%m/%d/%y'), completed: false)
    # Donation.create(organization: "American Red Cross", amount: 200, date: DateTime.now.strftime('%m/%d/%y'), completed: false)

end 
