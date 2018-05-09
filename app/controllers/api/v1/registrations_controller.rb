class Api::V1::RegistrationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Registration.all
  end

  def show
    render json: Race.find(params["id"]).users
  end

  def create
    race = Race.find(params["id"])#would it be better to just use the params["id"]?
    user = current_user.id
    signUp = Registration.create!(race: race, user: current_user)
    # binding.pry
  end

  def new
    binding.pry
  end

  private

  def registration_params
    params.require(:registration).permit(:users_id, :races_id)
  end
end
