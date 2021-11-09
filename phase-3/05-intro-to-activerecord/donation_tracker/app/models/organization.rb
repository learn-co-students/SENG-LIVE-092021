class Organization

    attr_accessor :name
    attr_reader :id
    
    def initialize(attributes) 
        attributes.each do |key, value| 
            if self.respond_to?("#{key.to_s}=")
                self.send("#{key.to_s}=", value)
            end 
        end
    end

    def save 
        if self.id
            self.update
        else 
            sql = <<-SQL
                INSERT INTO organizations (name) VALUES (?, ?);
            SQL

            DB.execute(sql, self.name)
            @id = DB.last_insert_row_id
        end 
        self 
    end

    def update 
        sql = <<-SQL
           UPDATE organizations SET name = ? WHERE id = ?
        SQL

        DB.execute(sql, self.name, self.id)
        self
    end

    def self.all 
        array_of_hashes = DB.execute("SELECT * FROM organizations")
        array_of_hashes.collect do |hash|
          self.new(hash)
        end
    end

    def self.create_table 
        sql = <<-SQL
        CREATE TABLE IF NOT EXISTS organizations (
            id INTEGER PRIMARY KEY, 
            name TEXT
        );
        SQL
        DB.execute(sql)
    end 

end 