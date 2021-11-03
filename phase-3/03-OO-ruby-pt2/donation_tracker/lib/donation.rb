class Donation 
    # self => will return class

    @@all = [] # class variable: 

    attr_accessor :amount, :organization, :date, :completed
    attr_reader :id
    def self.all # class method, it is called on the class itself
        # self: will return the class
        @@all 
    end

    # to invoke .all => Donation.all 

    def self.create(attributes) # self is in the scope of the class, its returning the class itself
        # donation = self.new(attributes)
        # donation.save

        self.new(attributes).save
    end

    def self.primary_key
        # build some logic 
        # if its the first element, make id = 1
        # else increment by 1 

        if @@all.empty? 
            1
        else 
            @@all[-1].id + 1
        end
    end

    def self.find_by_id(id)
        # i want to check all of the instances and find the one that matches the given id
        # mapping over @@all => return an array 
        # find, filter 
        @@all.find do |donation|
            donation.id == id
        end
    end

    def self.pending
        # return an array of all donations with a completed:false 
        @@all.filter do |donation|
            donation.completed == false
        end
    end

    def initialize(organization:, amount:, date:, completed:)
        @id = Donation.primary_key
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

    # create a save method, that saves each new instance 

    def save 
        @@all << self
        self
    end



end 


# self is going to be the class if the scope is NOT inside an instance method, or inside ANY method 