class Organization < ActiveRecord::Base
    has_many :donations 
    # has_many :donors, through: :donations

    def num_of_donations
        # return the total of number of donations made to a single organization
        self.donations.count
    end

end 