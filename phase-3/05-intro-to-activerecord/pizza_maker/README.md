For this exercise:

Before beginning the following exercise, the Active Record configurations have been set up for this project already, however the application is missing a vital piece that will connect a class to the Active Record methods. Make sure to add this piece before moving on. 

1. Create a new migration that will set up the Pizza table.
2. A pizza has a name, ingredients and description. Name and ingredients should be strings while description should be text to allow for more characters.
3. Make sure to run the migrations and confirm that the table has been created. Hint: the schema file is a great resource for investigating database structures
4. Create a seeds file and add some new pizza's. Don't forget to seed your data.
5. Run `rake console` and query the pizza's table to return the following:
    - All records from the pizzas table
    - Pizza with the id 3 
    - Return a pizza record using an existing pizza name attribute