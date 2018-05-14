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

User.create!(
  email: "bob@aol.com",
  password: "password",
  password_confirmation: "password",
  first_name: "Bob",
  last_name: "Builder",
  bio: "Can we do it? Yes we can!"
)

Race.create!(
  name: "Puppy Race",
  price: 45,
  distance: "5k",
  description: "Puppies everywhere. Do I really need to say more?",
  street: "4 Yawkey Way",
  city: "Boston",
  state: "MA",
  zipcode: "02215"
)

Race.create!(
  name: "Dino Race",
  price: 5,
  distance: "20k",
  description: "You may get eaten, enter at your own risk!",
  street: "600 King Philip Trail",
  city: "Baldwinville",
  state: "MA",
  zipcode: "01436"
)

Race.create!(
  name: "Dance Race",
  price: 20,
  distance: "1k",
  description: "It's not how fast you cross the finish line but how good you look doing it.",
  street: "224 Plymouth St",
  city: "Carver",
  state: "MA",
  zipcode:"02330"
)

Race.create!(
  name: "Jackson Jump",
  price: 100,
  distance: "5k",
  description: "Weirldly doesn't have any jumping.",
  street: "280 Exeter Rd",
  city: "Epping",
  state: "NH",
  zipcode: "03042"
)

Race.create!(
  name: "Ruckus Race",
  price: 45,
  distance: "3k",
  description: "Hosted by Rick Ruckus.",
  street: "93 Jolly Roger Rd",
  city: "Lempster",
  state: "NH",
  zipcode: "03605"
)

Race.create!(
  name: "Bog Iron",
  price: 50,
  distance: "0k",
  description: `Welcome to the 5th Annual Bog Iron Brewing 0.0K Road Race!!

This year's race will be held at Francis Farm, Ma on Sunday, June 3rd from noon until 5:00pm

Registration for this year's race will be $45 per person.  With registration each runner will receive: an official race t-shirt with an optional, custom team name of your choosing on the back
an official race numbered bibs
first place medals for anyone who wins
discounted pints (Bog Iron, Black Hat, 10th District, and Shoveltown pouring... so far)
live music
free barbeque (burgers, dogs, etc.)
a ton of fun
Please know that 100% of entry fees, after the purchase of the t-shirts, bibs, and medals, will be going to the Joe Andruzzi Foundation which supports families fighting cancer.

Teams can be one person... or as many as you want.  Dressing up appropriately for the day to show your runner spirit is encouraged!   Simply tell all members of your team to register under the same team name and we'll order all t-shirts appropriately.  `,
  street: "27 Francis Farm Road",
  city: "Rehoboth",
  state: "MA",
  zipcode: "02769"
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
  motto: "Bad to the Bone",
  race_id: 1
)

Team.create!(
  name: "Drooling Dawgs",
  motto: "What's up?",
  race_id: 1
)

Team.create!(
  name: "DinoRoars!",
  motto: "ROAR!",
  race_id: 2
)

Team.create!(
  name: "Race",
  motto: "Racing Dinos is our game",
  race_id: 2
)

Team.create!(
  name: "Race",
  motto: "Daning Racers",
  race_id: 3
)

Team.create!(
  name: "Dancing Daisies",
  motto: "We will blow you away",
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
  motto: "We Da Best",
  race_id: 5
)

Team.create!(
  name: "Team Rocket",
  motto: "Blasting off at the speed of light!",
  race_id: 5
)

Roster.create!(
  user_id: 1,
  team_id: 1
)

Roster.create!(
  user_id: 1,
  team_id: 3
)

Roster.create!(
  user_id: 1,
  team_id: 5
)

Roster.create!(
  user_id: 1,
  team_id: 7
)

Roster.create!(
  user_id: 1,
  team_id: 9
)

Roster.create!(
  user_id: 2,
  team_id: 2
)

Roster.create!(
  user_id: 2,
  team_id: 3
)

Roster.create!(
  user_id: 2,
  team_id: 6
)

Roster.create!(
  user_id: 2,
  team_id: 8
)

Roster.create!(
  user_id: 2,
  team_id: 10
)
