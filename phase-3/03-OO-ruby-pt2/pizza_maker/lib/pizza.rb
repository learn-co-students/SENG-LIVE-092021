class Pizza

    attr_accessor :name, :toppings, :desc

    def initialize(name, toppings, desc) 
        @name = name 
        @toppings = toppings 
        @desc = desc 
    end

    def details 
        puts ""
        puts "Pizza Details:"
        puts self.name 
        puts self.toppings
        puts self.desc
        puts ""
    end
    
end
