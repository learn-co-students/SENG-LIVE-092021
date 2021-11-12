# Creating an API pt 2 w/ CRUD

### Deliverables

Build out the following routes to handle the necessary CRUD actions:

- `POST /toppings`: 
    - Add a binding.pry to this route and use Postman to create a new topping with a name 
    - In the Pry session, check the `params` hash for the key/value pairs that were submitted and practice accessing the values. 
    - Create a new topping from the params, and return the newly created topping as JSON
- `PATCH /toppings/:id`:
    - Add a binding.pry to this route 
    - In a seperate terminal, cd into the `pizza_maker_client` directory and run `npm start`
    - Click on the edit button for an topping, make an update, and save. This should invoke a pry session in the terminal that Sinatra server is running. 
    - Check the params hash to confirm that updated value is received. 
    - Find the topping given the id value in the params hash 
    - Update the name of the topping using params
    - Return the updated topping as JSON
- `DELETE /toppings/:id`:
    - Find the topping given the id value in the params hash  
    - Delete the topping from the database
    - Test the delete button, inspect the Sinatra terminal to confirm record is deleted