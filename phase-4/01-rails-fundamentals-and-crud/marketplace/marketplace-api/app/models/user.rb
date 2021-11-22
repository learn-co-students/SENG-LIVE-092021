class User < ApplicationRecord

    # related to items: in 2 ways, sold_items, purchased items 
    # has_many items 

    has_many :purchased_items, class_name: "Item", foreign_key: 'buyer_id'
    has_many :sold_items, class_name: "Item", foreign_key: 'seller_id'
end
