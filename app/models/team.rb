class Team < ApplicationRecord
  validates :name, presence: true

  belongs_to :race

  has_many :rosters
  has_many :users, through: :rosters
end
