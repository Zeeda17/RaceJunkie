class Api::V1::TeamsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    team = Team.find(params["id"])
    render json: team
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

  def update
    binding.pry
    editRoster = Roster.find_by(team_id: params["old_race_id"], user: current_user)
    editRoster.race_id = params["new_race_id"]
  end
end
