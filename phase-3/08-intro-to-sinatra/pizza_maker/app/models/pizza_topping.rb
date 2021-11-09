class PizzaTopping < ActiveRecord::Base
    
    belongs_to :pizza # => .pizza  
    belongs_to :topping 
end