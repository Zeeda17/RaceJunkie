class Api::V1::TeamsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Race.find(params["id"]).teams
  end
end
