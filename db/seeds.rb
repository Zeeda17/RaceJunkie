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

Race.create!(
  name: "Puppy Race",
  price: 45,
  distance: "5k",
  description: "Puppies everywhere. Do I really need to say more?"
)

Race.create!(
  name: "Dino Race",
  price: 5,
  distance: "20k",
  description: "You may get eaten, enter at your own risk!"
)

Race.create!(
  name: "Dance Race",
  price: 20,
  distance: "1k",
  description: "It's not how fast you cross the finish line but how good you look doing it."
)

Race.create!(
  name: "Jackson Jump",
  price: 100,
  distance: "5k",
  description: "Weirldly doesn't have any jumping."
)

Race.create!(
  name: "Ruckus Race",
  price: 45,
  distance: "3k",
  description: "Hosted by Rick Ruckus."
)

Registration.create!(
  user_id: 1,
  race_id: 1
)

Registration.create!(
  user_id: 1,
  race_id: 2
)

Registration.create!(
  user_id: 2,
  race_id: 3
)

Registration.create!(
  user_id: 2,
  race_id: 4
)

Registration.create!(
  user_id: 1,
  race_id: 5
)

Team.create!(
  name: "Puppy Punks",
  moto: "Bad to the Bone",
  race_id: 1
)

Team.create!(
  name: "Drooling Dawgs",
  moto: "What's up?",
  race_id: 1
)

Team.create!(
  name: "DinoRoars!",
  moto: "ROAR!",
  race_id: 2
)

Team.create!(
  name: "Race",
  moto: "Racing Dinos is our game",
  race_id: 2
)

Team.create!(
  name: "Race",
  moto: "Daning Racers",
  race_id: 3
)

Team.create!(
  name: "Dancing Daisies",
  moto: "We will blow you away",
  race_id: 3
)

Team.create!(
  name: "Easy as 123",
  race_id: 4
)

Team.create!(
  name: "Want you back",
  race_id: 4
)

Team.create!(
  name: "Ruckus Racers",
  moto: "We Da Best",
  race_id: 5
)

Team.create!(
  name: "Team Rocket",
  moto: "Blasting off at the speed of light!",
  race_id: 5
)
