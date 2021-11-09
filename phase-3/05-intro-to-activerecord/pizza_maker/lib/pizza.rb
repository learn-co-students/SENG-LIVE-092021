class Pizza
    
    @@all = [] 

    attr_accessor :name, :ingredients, :desc
    attr_reader :id

# Review the following questions as a group:
# What is the expected return value of 'attributes'
# Explain why we are iterating over attributes with an each method
# What is being checked on line 15, why(think about how send behaves)?
# What purpose does the send method have here?
    def initialize(attributes) 
        attributes.each do |key, value| 
            if self.respond_to?("#{key}=")
                self.send("#{key}=", value)
            end 
        end
    end

# On a higher level, explain the logic defined in save: 
# How are we able to create a variable @id and assign it to the newly created records id, but have no defined setter method for the id attribute?
#  
    def save 
        if self.id
            self.update
        else 
            sql = <<-SQL
                INSERT INTO pizzas (name, ingredients, desc) VALUES (?, ?, ?);
            SQL

            DB.execute(sql, self.name, self.ingredients, self.desc)
            @id = DB.last_insert_row_id
        end 
        self 
    end

# Write out logic that creates a new pizza instance, saves it and then change and update the description to a new value. What are the steps you would take to successfuly update the record in the database?
# Make sure to test your theories
    def update 
        sql = <<-SQL
           UPDATE pizzas SET name = ?, ingredients = ?, desc = ? WHERE id = ?
        SQL

        DB.execute(sql, self.name, self.ingredients, self.desc, self.id)
        self
    end

# What action is the SQL query passed into execute performing?
# What does array_of_hashes refer to?
# Why are we mapping over the array_of_hashes and instantiating new instances with a hash? What is value of the hash?
    def self.all 
        array_of_hashes = DB.execute("SELECT * FROM pizzas")
        array_of_hashes.map do |hash|
          self.new(hash)
        end
    end

    def self.find(name)
        self.all.find do |obj|
            obj.name == name
        end 
    end

# Explain the logic defined inside of create_table
# Why is the id column defined as PRIMARY KEY?
# Run this logic to create the pizzas table. Install SQLite extension on VSCode. Create a new pizza instance, use the SQLite extension to view the table. What do you see?
    def self.create_table 
        sql = <<-SQL
        CREATE TABLE IF NOT EXISTS pizzas (
            id INTEGER PRIMARY KEY, 
            name TEXT,
            ingredients TEXT,
            desc TEXT
        );
        SQL
        DB.execute(sql)
    end

end 

# Create a table
# Create a new instance of pizza
# Persist the new object
# Update the name to 'pineapple'
# Explain what you observed during this process

binding.pry
