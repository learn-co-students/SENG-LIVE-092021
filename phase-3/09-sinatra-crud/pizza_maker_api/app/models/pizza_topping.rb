class PizzaTopping < ActiveRecord::Base
    
    belongs_to :pizza 
    belongs_to :topping 
end