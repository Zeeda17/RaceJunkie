class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :created_at, :user_races

  def user_races
    output = []
    object.races.each do |race|
      # binding.pry
      race_holder = {
        id: race.id,
        name: race.name
      }
      output << race_holder
    end
    output << object.teams
    return output
  end
end
