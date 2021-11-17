# Welcome to phase 4!

### Phase Objectives

- Create RESTful APIs
- Validate data
- Share data between a frontend JavaScript application and a backend API application
- Build authentication into APIs
- Deploy backend applications

### What is Rails?

- A web application framework: provides the foundational base for every application, removing configuration and setup repetition. Allowing developers to focus on the integral portions of building the application.
- Do more with less code.
- Written in Ruby programming language
- A gem: needs to be installed in order to have accessibility to Rails tools.
- Implements the MVC framework to help clarify code separation and organization
- 2 major principles to follow:
  - Convention over configuration: Rails is opinionated. This can help Free up a developers dedication to making decisions about folder structure, file and variable namings, routing.
  - DRY: Don't Repeat Yourself: Makes code more maintainable and less buggy

### Sinatra vs Rails

<p align="center">
    <img src="./public/sinatravsrails.png" width="450" height="300">
</p>

# App Design:

### Marketplace

We will be building a Marketplace application that will allow a user to list a categorized item for sale. We will keep track of the items a user has sold, as well as items users have purchased. Items can be filtered by categories. The categories items belong to will also be listed on the item's post.

### Domain Model

<p align="center">
    <img src="./public/domainmodel.png" width="450" height="300">
</p>

#### User

A user can be a seller or buyer

- attributes:
  - email:string, username:string
- associations:
  - Seller has many items as sold_items
  - Buyer has many items as purchased_items

#### Item

- attributes:
  - name:string, price:float, desc:text, sold:boolean
  <details>
  <summary>What attributes are missing and why?</summary>
      seller_id, buyer_id
  </details>
- associations:
  - has many category_items
  - has many categories, through category_items
  - belongs to a user as seller
  - belongs to a user as buyer

#### Category

- attributes:
  - name:string
- associations:
  - has many category_items
  - has many items, through category_items

#### CategoryItem

- attributes:
  <details>
  <summary>What attributes will this model need?</summary>
      category_id, item_id
  </details>
- associations:
  - belongs to a category
  - belongs to an item

### Lecture Deliverables:

1. [ ] [Create a Rails application named 'marketplace-api'](#pt1)
2. [ ] [Configure CORS](#pt2)
3. [ ] [Use Rails to generate models: User, Item, Category, CategoryItem](#pt3)
4. [ ] Create migrations for the following tables: users, items, categories, category_items
5. [ ] Add associations to models
6. [ ] Create some seed data in the `db/seeds.rb`
7. [ ] Define an index action for each resource
8. [ ] Define a show action for each resource

### Create a Rails application named 'marketplace-api'

<div id='pt1'></div>

- Run the following command:

```rb
rails new marketplace-api --api --minimal --skip-javascript -T
```

- `cd` into `marketplace-api`

### Configure CORS<a name="pt2"></a>

<div id='pt2'></div>

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

### Use Rails to generate models: User, Item, Category, CategoryItem

<div id='pt3'></div>

### Rails Generators: [Cheatsheet](https://shannoncrabill.com/blog/ruby-on-rails-singular-or-plural-generator-cheat-sheet/)

<details>
  <summary>rails g controller </summary>
    <p> - Creates controller in app/controllers</p>
    <p> - Creates a route in config/routes if actions are provided as arguments <strong>NOTE:</strong> these routes are not useful, will not follow REST convention </p>
</details>

<details>
  <summary>rails g model</summary>
    <p> - Creates a model file in app/models</p>
    <p> - Creates a migration file in db/migrate, will include columns and types if provided as argument</p>
</details>

<details>
  <summary>rails g migration</summary>
    <p> - Creates a migration file in db/migrate</p>
    <p> - Will include columns and types if provided as argument</p>
</details>
  
<details>
  <summary>rails g resource</summary>
    <p> - Creates a migration file in db/migrate</p>
    <p> - Creates a model file in app/models</p>
    <p> - Creates controller in app/controllers</p>
    <p> - Creates a route in config/routes if actions are provided as arguments <strong>NOTE:</strong> these routes are not useful, will not follow REST convention</p>
</details>
    
```rb
rails g resource user username email
```

```rb
rails g resource item name desc:text price:float sold:boolean seller:belongs_to buyer:belongs_to
```

```rb
rails g resource category name
```

```rb
rails g resource category_item category:belongs_to item:belongs_to
```
