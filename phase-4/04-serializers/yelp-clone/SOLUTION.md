BusinessSerializer

```rb
class BusinessSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :location

  # include a list of reviews with just the review content 
  has_many :reviews, serializer: BusinessReviewsSerializer

  def location 
    "#{self.object.city}, #{self.object.state} #{self.object.zip_code}"
  end
end
```

ReviewSerializer

```rb
class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_date


  def post_date
    self.object.created_at.strftime("%m/%e/%Y %l:%M%p %Z")
  end 
end
```

To solve bonus, 

1. add a `belongs_to :user` inside ReviewSerializer 

```rb
class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_date

  belongs_to :user
  
  def post_date
    self.object.created_at.strftime("%m/%e/%Y %l:%M%p %Z")
  end 
end
```

2. Generate a user serializer `rails g serializer user`
3. Add the following to UserSerializer:
```rb
class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
end
```
