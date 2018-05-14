# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_05_14_152119) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "races", force: :cascade do |t|
    t.string "distance", null: false
    t.string "name", null: false
    t.string "description", null: false
    t.integer "price"
    t.string "street", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.string "zipcode", null: false
  end

  create_table "registrations", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "race_id", null: false
    t.index ["race_id"], name: "index_registrations_on_race_id"
    t.index ["user_id", "race_id"], name: "index_registrations_on_user_id_and_race_id", unique: true
    t.index ["user_id"], name: "index_registrations_on_user_id"
  end

  create_table "rosters", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "team_id"
    t.index ["team_id"], name: "index_rosters_on_team_id"
    t.index ["user_id", "team_id"], name: "index_rosters_on_user_id_and_team_id", unique: true
    t.index ["user_id"], name: "index_rosters_on_user_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name", null: false
    t.string "motto"
    t.bigint "race_id", null: false
    t.index ["name", "race_id"], name: "index_teams_on_name_and_race_id", unique: true
    t.index ["race_id"], name: "index_teams_on_race_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.text "bio"
    t.string "zip_code"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
