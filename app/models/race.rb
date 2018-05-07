class Race < ApplicationRecord
  validates :distance, presence: true
  validates :name, presence: true
  validates :description, presence: true
end
