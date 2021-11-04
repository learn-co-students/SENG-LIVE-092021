# Breakout Exercise:

Currently, we are building an application called Pizza Maker that will allow a user to select toppings and customize the pizza they would like to order. 
Our program will provide a list of available toppings users can select from. Once a selection has been made, the topping becomes a pizza topping that is individually associated with the pizza being created. This benefits our program by allowing the list of toppings to be a stand alone component of the application, while also helping avoid topping duplications as well. 

For this domain, we have 3 models that we will be working with: 
- Pizza
    - Has many pizza toppings and has many toppings through pizza toppings
    - Pizza Table needs the following columns: name as a string, and desc as text. 
- PizzaTopping
    - When a customer selects an individual topping for their own pizza order, the topping becomes a pizza topping that is associated with the pizza being currently built.
    - PizzaTopping is a join table
    - a pizza topping belongs to a pizza and belongs to a topping 
- Topping
    - has many pizza toppings and has many pizzas through toppings 
    - Topping table needs a name column as a string 

    With your group, discuss how the tables for each of these models should look like, taking into consideration the columns required for the object attributes and relationships(foreign keys). Once you have mapped it out, create a migration for each of the models and write the logic for inside the migration file for each respective table. 

    As a reminder, to create a new migration that will establish a table, run the command `rake db:create_migration NAME=` the argument for the `NAME` should follow the convention of `create_tablename`


    This will create a migration file that will be responsible for defining the structure of the table. Inside the migration file, determine the types of the columns and their names following the example below:

```rb
def change
    create_table :donations do |t|
      t.integer :amount 
      t.integer :date
      t.boolean :completed 
    end
end

```