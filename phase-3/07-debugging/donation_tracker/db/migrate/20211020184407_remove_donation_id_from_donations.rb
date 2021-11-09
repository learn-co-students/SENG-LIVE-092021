class RemoveDonationIdFromDonations < ActiveRecord::Migration[6.1]
  def change
    remove_column :donations, :donation_id
  end
end
