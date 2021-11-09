class Pizza < ActiveRecord::Base
    has_many :pizza_toppings 
    has_many :toppings, through: :pizza_toppings 

    def self.alpha
        order(:name)
    end

    def num_of_toppings
        self.toppings.count
    end
end