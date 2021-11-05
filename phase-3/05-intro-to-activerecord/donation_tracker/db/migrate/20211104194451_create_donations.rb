class CreateDonations < ActiveRecord::Migration[6.1]
  def change
    create_table :donations do |t|
      t.float :amount
      t.datetime :date 
      t.boolean :completed, :default => false
      t.belongs_to :organization 
      t.belongs_to :donor 
    end
  end
end
