import React, { useState } from "react";

function NewTopping({ addNewTopping }) {
  const [name, setName] = useState("");

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new topping
    fetch("http://localhost:9292/toppings", configObj)
      .then((resp) => resp.json())
      .then((topping) => {
        addNewTopping(topping);
      });
  };

  return (
    <div>
      <h3>Add a new topping:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewTopping;
