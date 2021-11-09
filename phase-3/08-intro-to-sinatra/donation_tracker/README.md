# Intro to Sinatra

In this section, what we will be working on is building an API. 

### Lecture Take Aways

- Request-response cycle
- APIs
- Active Record
- Rack
- Sinatra
- Routes
- HTTP methods
- Params
- Dynamic Routing

### Lecture Objectives

- Explain how the web works, including request-response cycle
- Understand what an API is and its role in the way the web works
- Explain how Active Record, Rack, and Sinatra tie together
- Demonstrate the full request-response cycle using a Sinatra GET route and Postman

### Lecture Deliverables

- Implement Sinatra with the existing application domain 
- Create an Organizations Controller
- Define a route that will return all organizations in JSON format upon a request
- Test request and response results using Postman
- Define a route that will return one instance of organizations in JSON format upon a request

### Internet Review

- What does a full stack web application entail? 
- What the client vs server? 
- Explain the request/response cycle
- What is HTTP? 
- When a request is made, what determines the path of the request? 
- Define the common HTTP Verbs used to perform CRUD actions:
- What is the difference between the following status codes: 200, 300, 400, 500
- What is an API?

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
2. Read a single organization
3. Create a new organization
4. Update an existing organization
5. Delete an existing organization 


