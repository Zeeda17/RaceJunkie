require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    first_name 'Bob'
    last_name 'Builder'
    password 'password'
    password_confirmation 'password'
  end
end
