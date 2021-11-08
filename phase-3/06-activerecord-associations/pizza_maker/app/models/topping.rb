class Topping < ActiveRecord::Base
    has_many :pizza_toppings 
    has_many :pizzas, through: :pizza_toppings 
end