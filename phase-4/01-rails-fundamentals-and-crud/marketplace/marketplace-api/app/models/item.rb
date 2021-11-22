class Item < ApplicationRecord

  # users table, we are aliasing our users table into 2 types: seller and buyer
  belongs_to :seller, class_name: "User", foreign_key: "seller_id"
  belongs_to :buyer, class_name: "User", foreign_key: "buyer_id", optional: true 
  has_many :category_items 
  has_many :categories, through: :category_items 
end
