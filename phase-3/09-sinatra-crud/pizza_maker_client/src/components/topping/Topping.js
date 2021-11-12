import React, { useState } from "react";
import EditTopping from "./EditTopping";

function Topping({ topping, deleteTopping, onUpdateTopping }) {
  const { id, name } = topping;
  const [isEditing, setIsEditing] = useState(false);

  const handleToppingUpdate = (updatedTopping) => {
    setIsEditing(false);
    onUpdateTopping(updatedTopping);
  };


  // Making a DELETE fetch request to delete a single topping
  const handleDelete = () => {
    deleteTopping(id);
    fetch(`http://localhost:9292/toppings/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      {isEditing ? (
        <EditTopping
          topping={topping}
          onUpdateTopping={handleToppingUpdate}
        />
      ) : (
        <li style={{ listStyleType: "none" }}>
          <p>
            - {name}
            <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
              Edit
            </button>
            <button onClick={handleDelete}>Delete</button>
          </p>
        </li>
      )}
    </div>
  );
}

export default Topping;
