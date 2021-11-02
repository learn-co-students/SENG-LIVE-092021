class Pizza

    attr_accessor :name, :toppings, :desc

    def initialize(name, toppings, desc) # parameters 
        @name = name 
        @toppings = toppings 
        @desc = desc 
    end

    def details # instance method: called on an instance of the pizza class
        puts ""
        puts "Pizza Details:"
        puts self.name 
        puts self.toppings
        puts self.desc
        puts ""

        # puts @name 
        # puts @toppings 
        # puts @desc
    end
    
end