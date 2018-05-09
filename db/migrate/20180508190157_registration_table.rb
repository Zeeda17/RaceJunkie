class RegistrationTable < ActiveRecord::Migration[5.2]
  def change
    create_table :registrations do |t|
      t.belongs_to :users, null: false
      t.belongs_to :races, null: false
    end
  end
end
