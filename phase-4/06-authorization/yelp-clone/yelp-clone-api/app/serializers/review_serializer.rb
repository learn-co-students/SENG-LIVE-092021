class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_date

  belongs_to :user
  
  def post_date
    self.object.created_at.strftime("%m/%e/%Y %l:%M%p %Z")
  end 
end
