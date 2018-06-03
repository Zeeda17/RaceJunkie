class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :motto, :race_id, :formatted_users, :currentUserRunning, :raceName

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

  def raceName
    Team.find(object.id).race.name
  end
end
