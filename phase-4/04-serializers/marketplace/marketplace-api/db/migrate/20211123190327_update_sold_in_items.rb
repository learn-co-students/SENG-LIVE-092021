class UpdateSoldInItems < ActiveRecord::Migration[6.1]
  def change
    change_column :items, :sold, :boolean, default: false
  end
end
