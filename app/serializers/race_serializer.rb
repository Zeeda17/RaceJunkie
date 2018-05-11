class RaceSerializer < ActiveModel::Serializer #do I need to tell this it's an API?
  attributes :id, :name, :distance, :description, :price

  has_many :teams
  # has_many :users, through: :rosters
  has_many :users, through: :teams, through: :rosters
end
