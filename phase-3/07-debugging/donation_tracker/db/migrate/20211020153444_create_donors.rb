class CreateDonors < ActiveRecord::Migration[6.1]
  def change
    create_table :donors do |t|
      t.string :name
    end
  end
end
