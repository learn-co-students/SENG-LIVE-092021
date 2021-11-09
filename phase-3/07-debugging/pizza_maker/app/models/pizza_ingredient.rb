class PizzaIngredient < ActiveRecord::Base
    belongs_to :ingredient 
    belongs_to :pizza
end 