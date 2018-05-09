class Api::V1::RacesController < ApplicationController
  def index
    render json: Race.all
  end

  def show
    render json: Race.find(params["id"])
  end

  def create
    race = Race.find(params["id"])

    signUp = Registration.create!(races_id: race, users_id: current_user.id)
    binding.pry
  end

  def new
    binding.pry
  end
end
