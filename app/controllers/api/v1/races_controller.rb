class Api::V1::RacesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Race.all
  end

  def show
    render json: Race.find(params["id"])
  end

  def create
    binding.pry
    race = Race.find(params["id"])#would it be better to just use the params["id"]?
    user = current_user.id
    signUp = Registration.create!(race: race, user: current_user)
  end

  def new
    binding.pry
  end

  private

  def race_params
    params.require(:race).permit()#bla bla bla)
  end
end
