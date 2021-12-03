class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :location

  # include a list of reviews with just the review content 
  has_many :reviews, serializer: BusinessReviewsSerializer

  def location 
    "#{self.object.city}, #{self.object.state} #{self.object.zip_code}"
  end
end
