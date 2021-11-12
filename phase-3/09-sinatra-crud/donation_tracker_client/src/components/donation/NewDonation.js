import React, { useState } from "react";

function NewDonation({ orgs, addNewDonation }) {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [donor, setDonor] = useState("");
  const [organization, setOrganization] = useState("");

  const newOrg = {
    amount,
    date,
    donor,
    organization_id: organization,
    completed: false,
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newOrg),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to create a new donation
    fetch("http://localhost:9292/donations", configObj)
      .then((resp) => resp.json())
      .then((donation) => {
        addNewDonation(donation);
      });
  };

  return (
    <div>
      <h3>Create a new donation:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="text"
          placeholder="$"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          name="amount"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>
          Organization:
          <select
            placeholder="Select a brand"
            onChange={(e) => setOrganization(e.target.value)}
          >
            <option value="none">Select an org:</option>
            {orgs.map((org) => (
              <option key={org.id} value={org.id}>
                {org.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default NewDonation;
