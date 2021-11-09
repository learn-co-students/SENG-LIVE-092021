# Intro to Sinatra

### Lecture Take Aways

- Request-response cycle
- APIs
- Active Record
- Rack
- Sinatra
- Routes
- HTTP methods
- Params
- Strong params
- Dynamic Routing

### Lecture Objectives

- Explain how the web works, including request-response cycle
- Understand what an API is and its role in the way the web works
- Explain how Active Record, Rack, and Sinatra tie together
- Demonstrate the full request-response cycle using a Sinatra GET route and Postman

### Lecture Deliverables

- Implement Sinatra with the existing application domain 
- Create a Donations Controller
- Define a route that will return all donations in JSON format upon a request
- Test request and response results using Postman
- Define a route that will return one instance of donations in JSON format upon a request

### Internet Review

- What is a full stack application: a backend with a front end application, 
- What the client vs server? client => browser, its what our user sees. server is the backend 
- Explain the request/response cycle: client makes request, server processes and responds to the request 
1. user inputs a url into the browser
2. server receives it and processes it
3. a response is sent back to the client side
- What is HTTP? HyperText Tranfer Protocol: a set of rules determining how info is passed through the web
    - method 
    - headers 
    - body 
- When a request is made, what determines the path of the request? the URL 
1. http: https 
2. domain 
3. paths => end points 
4. query statement 
- Define the HTTP Verbs used to perform CRUD actions:
    - GET: retreiving existing data 
    - POST: create, sending some data to be processed and persisted 
    - PUT: update => replace the entire record with the updated version
    - PATCH: update => replace the submitted fields for an existing record
    - DELETE: delete a single record 
- What is the difference between the following status codes: 200, 300, 400, 500
    - 200: success, received 
    - 300: redirect, additional info is required
    - 400: client side error 
    - 500: server side error 
- What is an API?
    - application program interface 
    - middle man between our client and our server 

# Sinatra

### What is Sinatra? 

- A DSL used for creating simple web applications
- A framework implemented in Ruby
- Uses Rack under the hood
- A great introduction to Ruby on Rails

### How to create a Sinatra application?

- Install the Sinatra gem into application and manually setup application with necessary files and configurations  
- Or even better use the corneal gem to generate a Sinatra application, [Corneal Gem](https://github.com/thebrianemory/corneal)

### Routing in Sinatra

Create a route for the following behaviors based on the REST Conventions:
1. Read all organizations
    - '/organizations'
2. Read a single organization
    - '/organizations/:id' 
    - ':id' a dynamic route 
3. Create a new organization
4. Update an existing organization
5. Delete an existing organization 