import React from "react";
import Donation from "./Donation";

function DonationList({ donations, deleteDonation, onUpdateDonation }) {
  return (
    <div>
      <h3>Your Donations:</h3>
      {donations.map((donation) => (
        <Donation
          key={donation.id}
          donation={donation}
          deleteDonation={deleteDonation}
          onUpdateDonation={onUpdateDonation}
        />
      ))}
    </div>
  );
}

export default DonationList;
