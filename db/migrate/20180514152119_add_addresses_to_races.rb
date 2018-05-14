class AddAddressesToRaces < ActiveRecord::Migration[5.2]
  def change
    add_column :races, :street, :string, null: false
    add_column :races, :city, :string, null: false
    add_column :races, :state, :string, null: false, :length => 2
    add_column :races, :zipcode, :string, null: false, :length => 5
  end
end
