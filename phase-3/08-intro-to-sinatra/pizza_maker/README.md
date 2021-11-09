# Creating an API

### Objectives: 

- Handle multiple GET requests in a controller
- Use the params hash to look up data with Active Record
- Send a JSON response using data from an Active Record model
- Use the #to_json method to serialize JSON data

### Instructions:

- Start by running the server with `rake server`. 
- In the browser, visit: `http://localhost:9292/toppings`. 
- Discuss with your group what the result in the browser indicates and how to resolve.
- Create a ToppingsController
- Define a route `/toppings` using a `get` http verb that will return a JSON response of all topping records
- Test this out in Postman and the browser to confirm behavior is as expected
- Create a route that will process an incoming request like `/toppings/3` and return a response of Topping with id 3 in JSON. 