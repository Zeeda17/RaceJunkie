class UniqueRegistration < ActiveRecord::Migration[5.2]
  def change
    add_index :registrations, [:user_id, :race_id], unique: true
  end
end
