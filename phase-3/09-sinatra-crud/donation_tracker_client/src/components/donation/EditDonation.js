import React, { useState } from "react";

function EditDonation({ donation, onUpdateDonation }) {
  const { id, amount, date } = donation;

  const [updatedAmount, setUpdatedAmount] = useState(amount);
  const [updatedDate, setUpdatedDate] = useState(date);
  function handleEditForm(e) {
    e.preventDefault();

    // Make a PATCH fetch request to update a single donation
    fetch(`http://localhost:9292/donations/${id}/edit`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: updatedAmount, date: updatedDate }),
    })
      .then((resp) => resp.json())
      .then((updatedDonation) => onUpdateDonation(updatedDonation));
  }

  return (
    <form onSubmit={handleEditForm}>
      <input
        id="amount"
        type="text"
        name="amount"
        value={updatedAmount}
        onChange={(e) => setUpdatedAmount(e.target.value)}
      />
      <label htmlFor="date">Date:</label>
      <input
        id="date"
        type="date"
        name="date"
        value={updatedDate}
        onChange={(e) => setUpdatedDate(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditDonation;
