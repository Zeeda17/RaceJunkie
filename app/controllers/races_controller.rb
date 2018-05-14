class RacesController < ApplicationController
  def index

  end

  def new
    @race = Race.new
  end

  def create
    @race = Race.new(race_params)
    # @race.user = current_user

    if @race.save
      flash.now[:notice] = "Race succesfully added."
      redirect_to '/'
    else
      flash[:alert] = @race.errors.full_messages.join(" // ")
      render 'new'
    end
  end

private

  def race_params
    params.require(:race).permit(:name, :distance, :price, :description, :street, :city, :state, :zipcode)
  end
end
