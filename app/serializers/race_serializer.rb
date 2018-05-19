class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :description, :price, :street, :city, :state, :zipcode, :formatted_users, :currentUserRunning

  has_many :teams

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
    binding.pry
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
    team_array = {}
    object.teams.each do |team|
      user_obj = []
      team.users.each do |user|
        user_obj << {
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name
        }
      end
      team_array << user_obj
    end
    return team_array
  end
end
