class Api::V1::TeamsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    teams = Race.find(params["id"]).teams.users
    render json: teams
  end

  def create
    Registration.create!(race_id: params["race_id"], user: current_user)
    newTeam = Team.create!(
      name: params["newTeamName"],
      motto: params["newTeamMotto"],
      race_id: params["race_id"]
    )

    Roster.create!(user: current_user, team: newTeam)
  end
end
