import React, { useState } from "react";

function EditTopping({ topping, onUpdateTopping }) {
  const { id, name } = topping;

  const [updatedName, setUpdatedName] = useState(name);
  function handleEditForm(e) {
    e.preventDefault();

    // Make a PATCH fetch request to update a single topping
    fetch(`http://localhost:9292/toppings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: updatedName }),
    })
      .then((resp) => resp.json())
      .then((updatedTopping) => onUpdateTopping(updatedTopping));
  }

  return (
    <form onSubmit={handleEditForm}>
      <input
        id="name"
        type="text"
        name="name"
        value={updatedName}
        onChange={(e) => setUpdatedName(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditTopping;
