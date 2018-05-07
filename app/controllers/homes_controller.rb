class HomesController < ApplicationController
  def index
    @users = User.all
    @races = Race.all
  end
end
