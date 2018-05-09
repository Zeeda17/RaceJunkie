class Registration < ApplicationRecord
  belongs_to :user
  belongs_to :race

  validates :race_id, uniqueness: { scope: :user_id }
end
