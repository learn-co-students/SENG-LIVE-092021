# Lecture 2 exercise

Refer to this doc for validations: [Active Record Validations](https://guides.rubyonrails.org/active_record_validations.html)


1. Add the following validations to the models:

- A business must be created with a unique name.
- A user must be created with a unique username and email.
- A review must be created with content.

```rb
class Business < ApplicationRecord
    has_many :reviews 
    has_many :users, through: :reviews

    validates :name, presence: true, uniqueness: true
end
```

```rb
class User < ApplicationRecord
    has_many :reviews 
    has_many :businesses, through: :reviews

    validates :username, :email, presence: true, uniqueness: true
end
```

```rb
class Review < ApplicationRecord
  belongs_to :user
  belongs_to :business

  validates :content, presence: true
end
```

2. Before moving on, configure application with the following steps:

```rb
inside config/initializers/wrap_parameters.rb

ActiveSupport.on_load(:action_controller) do
  wrap_parameters format: []
end
```

This will ensure that parameters do not get returned nested under the resource key.

```rb
class ApplicationController < ActionController::API


private

    def current_user
        User.last
    end

end
```
3. Define a route and controller method that will create a new business. Reminder to handle valid or invalid data. 

inside `config/routes.rb`

```rb
  resources :businesses, only: [:index, :show, :create]
```

inside `BusinessController`

```rb
    def create
        business = Business.create(business_params)
        render json: business, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end


    private 

    def business_params
        params.permit(:name, :category, :city, :state, :zip_code)
    end
```

4. Define a route and controller method that will create a new user. Reminder to handle valid or invalid data.

inside `config/routes.rb`

```rb
  resources :users, only: [:create]
```

```rb
    def create
        user = User.create(user_params)
        render json: user, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end

    private

    def user_params 
        params.permit(:username, :email)
    end
```

5. Define a route and controller method that will create a new review. 
    - When a new review is created, the foreign key for a user and business must be present due to the requirements enforced on a `belongs_to` association. 
    - For this we can use the currently logged in user by invoking on the `current_user` method: `current_user.reviews.create(...)` Think about how a `business_id` could be provided. Get creative, there are a few ways to handle this. 
    - Reminder to handle valid or invalid data.

inside `config/routes.rb`

```rb
    resources :reviews, only: [:create]
```

```rb
    def create
        review = current_user.reviews.create(review_params, business_id: Business.first)
        render json: review, status: :created 
    rescue ActiveRecord::RecordInvalid => invalid
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity    
    end


    private 

    def review_params
        params.permit(:content)
    end
```

6. Run `rails s` and test the following data in Postman:

Make a POST request to `localhost:3000/users`
```rb 
User.create(username: "bobiscool", email: "test@123.com")
```

- What is the result? This should render an unprocessible entity status code
- Add a `byebug` to create action in UsersController
```rb
def create
    user = User.create(...)
    byebug
    ...
end
```
- Make Postman request again, test errors in byebug console: `user.errors.full_messages`
- What does the error say? The error reflects that the data is not unique due to the username already existing. How can this be fixed? Provide a unique username
- Make the required updates in Postman and send another request that will create a successful response.