class Donor < ActiveRecord::Base

    # association macro: metaprogramming => a method that produces another method
    has_many :donations 

    # .donations => getter method 
    # .donations<< 
    has_many :organizations, through: :donations 
end