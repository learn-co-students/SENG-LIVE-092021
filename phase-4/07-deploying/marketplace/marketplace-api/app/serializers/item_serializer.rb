class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :price, :status
  
  belongs_to :seller
  has_many :categories

  def price 
    "$#{'%.2f' % self.object.price}"
  end

  def status
    if self.object.sold
      return "Sold"
    else 
      return "Buy Now"
    end
  end

end
