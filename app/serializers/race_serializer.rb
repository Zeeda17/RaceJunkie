class RaceSerializer < ActiveModel::Serializer #do I need to tell this it's an API?
  attributes :id, :name, :distance, :description, :price#, :teams#, :runners

  has_many :teams
  # def teams
  #
  # end
end
