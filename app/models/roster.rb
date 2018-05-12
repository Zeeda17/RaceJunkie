class Roster < ApplicationRecord
  belongs_to :user
  belongs_to :team

  validates :team_id, uniqueness: { scope: :user_id }
end
