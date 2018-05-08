class Api::V1::RacesController < ApplicationController
  def index
    render json: Race.all
  end
end
