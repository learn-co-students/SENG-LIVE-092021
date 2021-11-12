import React, { useState } from "react";
import EditDonation from "./EditDonation";

function Donation({ donation, deleteDonation, onUpdateDonation }) {
  const { id, amount, date } = donation;
  const [isEditing, setIsEditing] = useState(false);

  const handleDonationUpdate = (updatedDonation) => {
    setIsEditing(false);
    onUpdateDonation(updatedDonation);
  };


  // Making a DELETE fetch request to delete a single donation
  const handleDelete = () => {
    deleteDonation(id);
    fetch(`http://localhost:9292/donations/${id}`, {
      method: "DELETE",
    });
  };

  const formatDate = (string) => {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toUTCString('en-US', options);
  }

  return (
    <div>
      {isEditing ? (
        <EditDonation
          donation={donation}
          onUpdateDonation={handleDonationUpdate}
        />
      ) : (
        <li style={{ listStyleType: "none" }}>
          <p>
            Amount: {amount} - Date: {formatDate(date)}
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

export default Donation;
