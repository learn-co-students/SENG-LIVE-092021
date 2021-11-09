class Pizza
    
    @@all = [] 

    attr_accessor :name, :ingredients, :desc
    attr_reader :id

    def initialize(attributes) 
        attributes.each do |key, value| 
            if self.respond_to?("#{key}=")
                self.send("#{key}=", value)
            end 
        end
    end

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

    def update 
        sql = <<-SQL
           UPDATE pizzas SET name = ?, ingredients = ?, desc = ? WHERE id = ?
        SQL

        DB.execute(sql, self.name, self.ingredients, self.desc, self.id)
        self
    end

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

