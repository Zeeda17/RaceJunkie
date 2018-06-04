class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :bio, :created_at, :user_races

  def user_races
    output = []

    object.teams.each do |team|
      race_holder = {
        id: team.race_id,
        name: team.race.name,
        team: team.name,
        team_id: team.id
      }
      output << race_holder
    end

    object.races.each do |race|
      unique_race = true

      output.each do |event|
        if event[:id] == race.id
          unique_race = false
        end
      end

      if unique_race
        output << {
          id: race.id,
          name: race.name,
          team: nil,
          team_id: nil
        }
      end
    end

    return output
  end
end
