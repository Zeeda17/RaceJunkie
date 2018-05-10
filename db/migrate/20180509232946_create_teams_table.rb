class CreateTeamsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :moto
      t.belongs_to :race, null: false
    end
    add_index :teams, [:name, :race_id], unique: true
  end
end
