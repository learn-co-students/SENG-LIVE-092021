# Lecture 4: Serializers

### What is serialization?

"Serialization is the process of translating data structures or objects into a format that can be stored or transmitted and reconstructed later."
source: https://medium.com/@stvik2/serializing-data-in-rails-a46cb16e0c2d

### How have we been serializing up to this point?

- Using the render JSON and passing any options to the `to_json` method to customize data or include data associations.

### When to use AMS over controller serialization?

- More commonly, we want to include AMS when data structures become complex and require a lot of customization.
- Best practice for separation of concerns tells us we should always use AMS to isolate the responsibility of serialization from the controllers.

### How to use AMS

- Add gem to Gemfile:

```rb
gem 'active_model_serializers'
```

- To generate a new serializer, run serializer generator:

```rb
rails g serializer <serializer_name>
```

If convention is followed, serializers will match the respective model object.

```rb
...
render json: category
# this will invoke upon the CategorySerializer
```

To serialize a collection, the `each_serializer` method can be used to pass each instance to the serializer

```rb
def index
  categories = Category.all
  render json: categories, each_serializer: CategorySerializer
end
```

## Serializing the Marketplace app data:

### Category

- Serialize with a `name`
- Serialize with a list of `items` including: - `name`, `desc`, `price` in 2 decimal format, with a dollar sign at the beginning i.e. `$10.50` , - Define a method `#status` that will return 'sold' if self.sold returns true and 'Buy Now' if false. - Return the items `seller` with username and email included.

- What does the expected data structure look like when we visit:
  - `'/categories'`
  - `'/categories/:id'`
  - What associations will be included? What associative attributes should be included?
  - Is there a defined serializer for the association? If not let's create one
  - Does the serializer require more than one level deep association? If so, how should it be handled?

```json
{
"name": "fishing",
"items": [
  {
    "name": "fishing pole",
    "desc": "really cool fishing pole!",
    "price": "$10.00",
    "sold_status": "Buy Now",
    "seller": {
      "username": "aisayo",
      "email": "aisayo@123.com"
    }
}
```

```rb
class CategoriesController < ApplicationController

    def index
        categories = Category.all
        render json: categories, each_serializer: CategorySerializer
    end

    def show
        category = Category.find(params[:id])
        render json: category
    end
end
```

```rb
class CategorySerializer < ActiveModel::Serializer
  attributes :name
  has_many :items
end
```

### Item

    - name, desc, price in 2 decimal format, with a dollar sign at the beginning i.e. `$10.50`
    - Define a method #sold_status that will return 'sold' if self.sold is true and 'buy now' if false
    - Return the items seller with username and email included.
    - Each item should also return a list of associated categories including the name

```json
{
  "name": "fishing pole",
  "desc": "really cool fishing pole!",
  "price": "$10.00",
  "sold_status": "Buy Now",
  "seller": {
    "username": "aisayo",
    "email": "aisayo@123.com"
  },
  "categories": [
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    }
  ]
}
```

```rb
class ItemsController < ApplicationController
    def index
        items = Item.where(sold: false)
        render json: items, each_serializer: ItemSerializer
    end

    def show
        item = Item.find
        render json: item
    rescue ActiveRecord::RecordNotFound => error
      render json: error.message, status: :not_found
    end
    ...
```

```rb
class ItemSerializer < ActiveModel::Serializer
  attributes :name, :desc, :price, :sold_status

  belongs_to :seller
  has_many :categories

  def price
    "$#{'%.2f' % self.object.price}"
  end

  def sold_status
    if self.object.sold
      return "Sold"
    end
    return "Buy Now"
  end

end
```

User

Reminder that our user behaves as both a seller and buyer. We can make a request to a user and grab all items that have been purchased or sold.

- Serialize with username and email
- should return both sold_items and purchased_items
- Should return a list of all category names user has
  both sold to and purchased from separately.

we can add the following to serializer

```rb
  has_many :sold_categories, serializer: CategorySerializer
  has_many :purchased_categories, serializer: CategorySerializer
```

that will result in the following error:

```rb
undefined method `sold_categories' for #<User:0x00007faa26a81290>
```

This is because when it invokes upon this method, it will also invoke the respective association int he model and currently this association is not defined.

in model:

```rb
    has_many :sold_categories, :through => :sold_items
    has_many :purchased_categories, :through => :purchased_items
```

This will result in the error

```rb
'ActiveRecord::HasManyThroughSourceAssociationNotFoundError in UsersController#show'
'Could not find the source association(s) "sold_category" or :sold_categories in model Item. Try 'has_many :sold_categories, :through => :sold_items, :source => <name>'. Is it one of seller, buyer, category_items, or categories?'
```

fix model to:

```rb
    has_many :sold_categories, :through => :sold_items, :source => :categories
    has_many :purchased_categories, :through => :purchased_items, :source => :categories
```

```json
{
  "username": "aisayo",
  "email": "aisayo@123.com",
  "sold_items": [
    {
      "name": "fishing pole",
      "desc": "really cool fishing pole!",
      "price": "$10.00",
      "sold_status": "Buy Now"
    },
    {
      "name": "purple t",
      "desc": "get hip with this cool shirt",
      "price": "$5.00",
      "sold_status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "sold_status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "sold_status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "sold_status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "sold_status": "Buy Now"
    }
  ],
  "purchased_items": [
    {
      "name": "gold round mirror",
      "desc": "vintage mirror",
      "price": "$30.50",
      "sold_status": "Sold"
    }
  ],
  "sold_categories": [
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "womens clothing"
    },
    {
      "name": "mens clothing"
    },
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "electronics"
    },
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "electronics"
    }
  ],
  "purchased_categories": [
    {
      "name": "decor"
    },
    {
      "name": "home"
    },
    {
      "name": "living room"
    }
  ]
}
```

```rb
class UserSerializer < ActiveModel::Serializer
  attributes :username, :email

  has_many :sold_items, serializer: ItemSerializer
  has_many :purchased_items, serializer: ItemSerializer
  has_many :sold_categories, serializer: CategorySerializer
  has_many :purchased_categories, serializer: CategorySerializer
end
```

```rb
class UsersController < ApplicationController

    def index
      users = User.all
      render json: users, each_serializer: UserSerializer
    end

    def show
      user = User.find(params[:id])
      render json: user
    end
    ...
```
