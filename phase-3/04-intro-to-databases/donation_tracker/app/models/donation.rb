class Donation < ActiveRecord::Base 

    def self.pending
        @@all.filter do |donation|
            donation.completed == false
        end
    end

   
end 