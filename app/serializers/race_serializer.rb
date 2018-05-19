class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :description, :price, :street, :city, :state, :zipcode, :currentUserRunning, :users_in_team

  # has_many :teams

  def formatted_users
    user_array = []
    object.users.each do |user|
      user_array << {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name
      }
    end
    return user_array
  end

  def currentUserRunning
    if current_user.nil?
      return false
    end

    formatted_users.each do |user|
      if current_user.id == user[:id]
        return true
      end
    end
    return false
  end

  def users_in_team
    output = []
    runner_holder = []
    object.teams.each do |team|
      team_holder = {
        id: team.id,
        name: team.name,
        motto: team.motto
      }
      team.users.each do |runner|
        runner_holder << {
          id: runner.id,
          first_name: runner.first_name,
          last_name: runner.last_name
        }

      end
      team_holder.merge!(runners: runner_holder)
      output << team_holder
    end

    return output
  end
end
