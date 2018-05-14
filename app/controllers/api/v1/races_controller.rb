class Api::V1::RacesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Race.all
  end

  def show
    render json: Race.find(params["id"])
  end

  private

  def race_params
    params.require(:race).permit()#bla bla bla)
  end
end
