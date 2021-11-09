class Donation < ActiveRecord::Base
    belongs_to :organization
    validates :amount, presence: true
    belongs_to :donor

    def self.total_donations
        self.sum(:amount)
    end

    def self.by_date(beginning_date, ending_date)
        where(date: beginning_date...ending_date)
    end

    def update_status
        self.update(completed: !self.completed)
    end

    def print_donors_name
        self.donor.name 
    end

end 

