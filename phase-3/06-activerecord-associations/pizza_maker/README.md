# Breakout Exercise:

### Domain Model:

Pizza:
    has many pizza toppings

PizzaTopping:
    belongs to a pizza
    belongs to a topping

Topping 
    has many pizza toppings

The relationship between a Pizza and Toppings is a many to many relationship. 

Before getting started on the deliverables, seed the data in the `seeds.rb` file by running `rake db:seed`

### Deliverables:

1. Define a method `Pizza#pizza_toppings` that will return all pizza toppings associated with a specific pizza record. 
2. Define a method `Pizza#toppings` that will return all toppings associated with a specific pizza record. 
3. Define a method `PizzaTopping#pizza` that will return the pizza a pizza topping belongs to.
4. Define a method `PizzaTopping#topping` that will return the topping a pizza topping belongs to.
5. Define a method `Topping#pizza_toppings` that will return all pizza toppings associated with a specific topping record
5. Define a method `Topping#pizzas` that will return all pizzas associated with a specific topping record
6. Define a method inside the Pizza class `.alpha` that will return a list of all pizzas alphabetized by the name attribute.
7. Define a method `Pizza#num_of_toppings` that will return a number of toppings that belong to the pizza. 