class Pizza < ActiveRecord::Base
    has_many :pizza_ingredients
    has_many :ingredients, through: :pizza_ingredients


    # def print_ingredients
    #     self.pizza_ingredients.each do |p|
    #         Need to print the name of each ingredient. This is a great opportunity to place a binding.pry here
    #         Invoke 'p' to identify how to return the name value of each ingredient. Test this out in pry
    #     end
    # end
end 

