class Donation

    @@all = [] 

    attr_accessor :amount, :organization, :date, :completed
    attr_reader :id

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
            @@all[-1].id + 1
        end
    end

    def self.find_by_id(id)
        @@all.find do |donation|
            donation.id == id
        end
    end

    def self.pending
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

    def save 
        @@all << self
        self
    end



end 