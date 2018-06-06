class Api::V1::RegistrationsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Registration.all
  end

  def show
    render json: Race.find(params["id"]).users
  end

  def create
    binding.pry
    if Roster.find_by(team_id: params["race_id"], user: current_user)
      binding.pry
      editRoster = Roster.find_by(team_id: params["race_id"], user: current_user)
      editRoster.team_id = params["joinTeam"]
      editRoster.save!
    else
      Registration.create!(race_id: params["race_id"], user: current_user)
      if !params["joinTeam"].nil?
        Roster.create!(user: current_user, team_id: params["joinTeam"])
      end
    end

    render json: Race.find(params['race_id'])
  end

  private

  def registration_params
    params.require(:registration).permit(:users_id, :races_id)
  end
end
