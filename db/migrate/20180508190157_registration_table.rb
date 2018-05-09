class RegistrationTable < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.references :user, null: false
      t.references :race, null: false
    end
  end
end
