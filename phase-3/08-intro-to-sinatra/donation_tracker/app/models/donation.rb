class Donation < ActiveRecord::Base

    belongs_to :donor 
    belongs_to :organization
     
    def self.pending
        self.where(completed: false)
    end
   
end 