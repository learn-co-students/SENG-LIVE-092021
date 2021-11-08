class Donation < ActiveRecord::Base

    belongs_to :donor # one to one relationship, this is a method that is essentially creating other methods, metaprogramming 
    # .donor getter, instance method 
    # .donor= setter 

    # how we can use is
    # first, retreive a donation record 
    # second, retreive the donor to which that donation record belongs to 

    # also, set a donor for a donation i.e: donation.donor = "Aysan"
    
    belongs_to :organization 
    # .organization => reader 
    # .organization= => setter 

    def self.pending
        # @@all.filter do |donation|
        #     donation.completed == false
        # end

        self.where(completed: false)

    end

    # def self.return_all 
    #     self.all # => Donation.all
    # end

   
end 