class CreateRacesTable < ActiveRecord::Migration[5.2]
  def change
    create_table :races do |t|
      t.string :distance, null: false
      t.string :name, null: false
      t.string :description, null: false
      t.integer :price
    end
  end
end
