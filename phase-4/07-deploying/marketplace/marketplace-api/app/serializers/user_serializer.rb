class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :is_permitted 

  has_many :purchased_items 
  has_many :sold_items 

  has_many :purchased_categories 
  has_many :sold_categories

  def is_permitted
    current_user.admin? || @item.seller == current_user if @item
  end
end
