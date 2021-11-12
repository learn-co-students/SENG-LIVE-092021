class CreatePizzaToppings < ActiveRecord::Migration[6.1]
  def change
    create_table :pizza_toppings do |t|
      t.integer :pizza_id
      t.integer :topping_id 

      # t.belongs_to :pizza 
      # t.belongs_to :topping
    end
  end
end


# migrations are not concerned with establishing relationships. 
# ONLY should be concerned with establishing foreign key columns in the child table 

# pizza_topping.pizza 