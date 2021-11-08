class Donor < ActiveRecord::Base
    has_many :donations # one to many 
    # .donations => return an array of all donations that belong to a particular donor 
    # .donation<< => allows to add a new donation to the donors donations collection 
    
    has_many :organizations, through: :donations # many to many relationship
    # .organizations => all orgs our donor has donated to 
    # .organizations<< => add a new org to our donors orgs collection
end