class RaceSerializer < ActiveModel::Serializer
  attributes :id, :name, :distance, :description, :price, :formatted_users

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
end
