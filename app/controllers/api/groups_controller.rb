class Api::GroupsController < ApplicationController
  def index
    @groups = User.find_by_id(params[:user_id]).joined_groups

    render :index
  end

  def show
    
  end

  def create
  end

  def destroy
  end
end
