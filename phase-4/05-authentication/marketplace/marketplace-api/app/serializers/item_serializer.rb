class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :desc, :price, :status
  
  belongs_to :seller
  has_many :categories

  def price 
    # format the price value as $10.00
    "$#{'%.2f' % self.object.price}"
  end

  def status
    # if the item is still for sale, return 'Buy Now'
    # if not, then return sold

    if self.object.sold
      return "Sold"
    else 
      return "Buy Now"
    end
  end

end
