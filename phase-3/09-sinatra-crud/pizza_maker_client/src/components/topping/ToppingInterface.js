import React, { useEffect, useState } from "react";
import NewTopping from "./NewTopping";
import ToppingList from "./ToppingList";

function Topping() {
  const [toppings, setToppings] = useState([]);

  // Make a GET request for all Toppings
  useEffect(() => {
    fetch("http://localhost:9292/toppings")
      .then((resp) => resp.json())
      .then((toppings) => setToppings(toppings));
  }, []);

  const addNewTopping = (topping) => {
    setToppings([...toppings, topping]);
  };

  function handleUpdateTopping(updatedTopping) {
    const updatedToppings = toppings.map((topping) => {
      if (topping.id === updatedTopping.id) {
        return updatedTopping;
      } else {
        return topping;
      }
    });
    setToppings(updatedToppings);
  }

  const deleteTopping = (id) => {
    const updatedToppings = toppings.filter((topping) => topping.id !== id);
    setToppings(updatedToppings);
  };

  return (
    <div className="App">
      <ToppingList
        toppings={toppings}
        deleteTopping={deleteTopping}
        onUpdateTopping={handleUpdateTopping}
      />
      <NewTopping addNewTopping={addNewTopping} />
    </div>
  );
}

export default Topping;
