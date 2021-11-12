import React, { useEffect, useState } from "react";
import NewDonation from "./NewDonation";
import DonationList from "./DonationList";

function Donation({ orgs }) {
  const [donations, setDonations] = useState([]);

  // Make a GET request for all donations
  useEffect(() => {
    fetch("http://localhost:9292/donations")
      .then((resp) => resp.json())
      .then((donations) => setDonations(donations));
  }, []);

  const addNewDonation = (donation) => {
    setDonations([...donations, donation]);
  };

  function handleUpdateDonation(updatedDonation) {
    const updatedDonations = donations.map((donation) => {
      if (donation.id === updatedDonation.id) {
        return updatedDonation;
      } else {
        return donation;
      }
    });
    setDonations(updatedDonations);
  }

  const deleteDonation = (id) => {
    const updatedDonations = donations.filter((donation) => donation.id !== id);
    setDonations(updatedDonations);
  };

  return (
    <div className="App">
      <DonationList
        donations={donations}
        deleteDonation={deleteDonation}
        onUpdateDonation={handleUpdateDonation}
      />
      <NewDonation orgs={orgs} addNewDonation={addNewDonation} />
    </div>
  );
}

export default Donation;
