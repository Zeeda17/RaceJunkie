class TeamsController < ApplicationController

  def show
    team = Team.find(params["id"])
    render json: team
  end
end
