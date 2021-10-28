# Lecture Exercise

For this exercise, the goal is to create an application that:

1. Greets and prompts a user to input name
2. Provides a menu selection for user to navigate through the application: the menu should provide options to either create a new pizza, see a list of existing pizzas or exit the program.
3. The application should provide a good control flow.

### Directions

1. In the terminal, run `./bin/run`
2. If the following error message is returned: `zsh: permission denied: ./bin/run`, run the following command: `chmod +x ./bin/run` 
3. Currently, the program does not provide a list for user to select from. Practice using method invokation inside `init` to print the list of `menu_options`. 
4. Practice using control flow inside `menu_selection` to capture a users input and execute the respective behaviors based on the input. Make sure to handle any invalid inputs. 
5. The program should loop so only upon the selection of 'exit' will the program end. 
6. Practice creating a hash with the following keys: name, toppings and description in `create_pizza`. Use the variables used to store users input for the fields as the values.  
7. Practice iterating over the `PIZZAS` array to print out the attributes of each pizza hash when user selects to view a list of created pizzas. 