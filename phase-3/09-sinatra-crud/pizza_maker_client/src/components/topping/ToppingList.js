import React from "react";
import Topping from "./Topping";

function ToppingList({ toppings, deleteTopping, onUpdateTopping }) {
  return (
    <div>
      <h3>Toppings:</h3>
      {toppings.map((topping) => (
        <Topping
          key={topping.id}
          topping={topping}
          deleteTopping={deleteTopping}
          onUpdateTopping={onUpdateTopping}
        />
      ))}
    </div>
  );
}

export default ToppingList;
