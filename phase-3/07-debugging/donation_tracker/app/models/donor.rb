class Donor < ActiveRecord::Base
    has_many :donations
end