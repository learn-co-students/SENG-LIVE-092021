# Lecture 1 Exercise Solution:

1. Create a Rails application named 'yelp-clone':
   run:

```rb
rails new yelp-clone-api --api --minimal --skip-javascript -T
```

2. Configure CORS

- Navigate to `config/initializers/cors.rb` and comment out lines 8-16
- Change `origins` to `'*'`

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

- In gemfile, comment back in `gem 'rack-cors'` and run `bundle update`

3. Use Rails to create the migrations for User, Review, Business that reflects the domain model:

```rb
rails g resource review content:text user:belongs_to business:belongs_to
```

```rb
rails g resource business name category city state zip_code:integer
```

```rb
rails g resource user username email
```

4. In the models, add associations to reflect relationships between the data:

```rb
class Business < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews
end
```

```rb
class Review < ApplicationRecord
  belongs_to :user
  belongs_to :business
end
```

```rb
class User < ApplicationRecord
    has_many :reviews
    has_many :businesses, through: :reviews
end
```

5. Add the following seed data to `db/seeds.rb`:

```rb
bob = User.create(username: "bobiscool", email: "bobiscool@123.com")
sam = User.create(username: "samiam", email: "samiam@123.com")

starbucks = Business.create(name: "Starbucks", category: "cafe", city: "north pole", state: "california", zip_code: 100099)
mcdonalds = Business.create(name: "McDonalds", category: "fast-food", city: "south pole", state: "california", zip_code: 100099)
dennys = Business.create(name: "Dennys", category: "diner", city: "los angeles", state: "california", zip_code: 100099)
```

7. Create an index route and controller method for businesses:

Add to `config/routes.rb`:

```rb
  resources :businesses, only: [:index]
```

In BusinessesController:

```rb
    def index
        businesses = Business.all
        render json: businesses
    end
```

8. Create a show route and controller method for businesses:

Add to `config/routes.rb`:

```rb
  resources :businesses, only: [:index, :show]
```

In BusinessesController:

```rb
    def show
        business = Business.find_by_id(params[:id])
        if business
            render json: business
        else
            render json: {error: "Business does not exist"}, status_code: :not_found
        end
    end
```
