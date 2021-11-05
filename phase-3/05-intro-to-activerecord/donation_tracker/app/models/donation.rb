class Donation < ActiveRecord::Base

    belongs_to :donor
    belongs_to :organization 

    def self.pending
        @@all.filter do |donation|
            donation.completed == false
        end
    end

   
end 