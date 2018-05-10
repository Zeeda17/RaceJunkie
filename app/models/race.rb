class Race < ApplicationRecord
  validates :distance, presence: true
  validates :name, presence: true
  validates :description, presence: true

  has_many :teams
  has_many :registrations
  has_many :users, through: :registrations
end
