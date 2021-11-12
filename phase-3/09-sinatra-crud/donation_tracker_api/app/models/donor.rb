class Donor < ActiveRecord::Base
    has_many :donations 
    has_many :organizations, through: :donations 
end