require 'pry'

class Pizza 
    attr_accessor :name, :ingredients, :desc 

    def initialize(name, ingredients, desc) # .new
        self.name = name
        self.ingredients = ingredients
        self.desc = desc
    end 

end 

