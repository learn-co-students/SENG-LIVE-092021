# Lecture 5 Exercise

For this exercise, add the following features to the Yelp clone:

[ ] Signup
[ ] Login
[ ] Authentication
[ ] Logout

### What dependencies do we need to add to support authentication? HINT: What Ruby gem will allow us to salt and store safe passwords?

### Configurations that are necessary to gain access to sessions and cookies:

Inside `config/application.rb`

```rb
config.middleware.use ActionDispatch::Cookies
config.middleware.use ActionDispatch::Session::CookieStore

# Use SameSite=Strict for all cookies to help protect against CSRF
config.action_dispatch.cookies_same_site_protection = :strict
```

We'll also need to include the middleware within the `ApplicationController`

```rb
class ApplicationController < ActionController::API
  include ActionController::Cookies
  # ...
end
```

### Database

We need a `password_digest` column in our `users` table to store our users' encrypted passwords.

```bash
rails g migration AddPasswordDigestToUsers password_digest
```

```bash
rails db:migrate
```

### Models

- We need to add the `has_secure_password` macro to the model to implement the `authenticate` and `password=` methods used in login & signup actions respectively

5. Make sure that a `UserSerializer` exists. NOTE: Do not serialize a user password.

### Adding a signup feature

- What route needs to be added to `config/routes.rb`?
- What controller action is responsible for handling a signup?
- What type of HTTP verb will be used for this request?
- What is the controller action's responsibility and how to handle the incoming request? The logic defined here should handle a successful and unsuccessful signup. Don't forget to log the user in, what piece of code is essential for this?

### Adding a login feature

- What route needs to be added to `config/routes.rb`?
- What controller action is responsible for handling a login?
- What type of HTTP verb will be used for this request?
- What is the controller action's responsibility and how to handle the incoming request? The logic defined here should handle a successful and unsuccessful login.
- Don't forget to log the user in, what piece of code is essential for this?

### Adding an authentication method that will prove if a current user exists or not

- What route needs to be added to `config/routes.rb`?
- What controller action is responsible for handling this request?
- What type of HTTP verb will be used?
- What is the controller action's responsibility and how to handle the incoming request? For this action, what is going to be checked to determine if a user has already logged in and been authenticated? What special method exists to set our logged in user?
- NOTE: Update the `current_user` method so that it makes use of the `user_id` stored in the session cookie sent from the browser.

### Adding a logout feature

- What route needs to be added to `config/routes.rb`?
- What controller action is responsible for handling the logout request?
- What type of HTTP verb will be used?
- What is the controller action's responsibility and how to handle the incoming request? Will there be a return value?
- How is logging a user out handled?

# Lecture 6 Exercise

- Add a private method called `is_authenticated` to `ApplicationController` that will return a message saying `"Please log in to access"` with a status of unauthorized unless there is an existing `current_user`.
- Make a `before_action` call to `:is_authenticated` in the `ReviewsController` so that a user can not access this interface unless logged in.
- Add a private method `set_review` to the `ReviewsController` and refactor repetitive code inside controller.

```rb
  def set_review
    @review = Review.find(params[:id])
  end
```

- Add a `before_action` for `:set_review` to the `ReviewsController` below `:is_authenticated` that will run only before the `:show, :update, :destroy` actions

- Add a private method `is_authorized` to the `ReviewsController`. In it, check if the current user is an admin. If they're not, render an error message indicating `"you don't have permission to perform that action"` as JSON with a `403` (forbidden) status code.
- Add a `before_action` for `is_authorized` to the `ReviewsController` that will only run before `:update` and `:destroy`.
