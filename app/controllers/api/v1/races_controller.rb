class Api::V1::RacesController < ApplicationController
  def index
    render json: Race.all
  end

  def show
    render json: Race.find(params["id"])
  end
end
