class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.integer :amount 
      t.integer :date
      t.boolean :completed 
      t.integer :organization_id
      t.integer :donation_id
    end
  end
end
