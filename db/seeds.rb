# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User1 = Category.find_or_create_by!(name: "Sea Monsters")

User.create!(
  email: "test@fakeemail.com",
  password: "password",
  password_confirmation: "password",
  first_name: "Larry",
  last_name: "Looker",
  bio: "I founded this site as a cover for finding my ex-girlfriend. She was very hairy."
)

User.create!(
  first_name: "Evan",
  last_name: "duBois",
  password: "password",
  password_confirmation: "password",
  email: "Evan@aol.com"
)
