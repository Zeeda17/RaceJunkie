class CreateRoster < ActiveRecord::Migration[5.2]
  def change
    create_table :rosters do |t|
      t.belongs_to :user
      t.belongs_to :team
    end
  end
end
