class UniqueRegistration < ActiveRecord::Migration[5.2]
  def change
    add_index :registrations, [:users_id, :races_id], unique: true
  end
end
