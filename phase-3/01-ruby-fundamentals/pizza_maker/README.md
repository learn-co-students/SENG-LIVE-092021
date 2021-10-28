# Lecture Exercise

For this exercise, the goal is to create an application that:

1. Greets and prompts a user to input name
2. Provides a menu selection for user to navigate through the application: the menu should provide options to either create a new pizza, or see a list of existing pizzas.
3. Program should not exit unless the user types in 'exit'
4. The application should provide a good control flow.

### Directions

1. In the terminal, run `./bin/run`
2. If the following error message is returned: `zsh: permission denied: ./bin/run`, run the following command: `chmod +x ./bin/run` 
3. Currently, the program does not provide a list for user to select from. Invoke the `menu_options` method inside of `init` to print a list of the options available to a user. 
4. After the menu is printed, control flow should be added inside of `menu_selection` to capture users selection and execute the respective behavior. Make sure to handle any invalid inputs. 
5. The program should loop so only upon the selection of 'exit' will the program end. 
