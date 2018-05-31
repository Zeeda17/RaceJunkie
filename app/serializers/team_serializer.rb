class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :motto, :race_id, :formatted_users

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
end
