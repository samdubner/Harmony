class Api::GroupsController < ApplicationController
  def index
    @groups = User.find_by_id(params[:user_id]).joined_groups

    render :index
  end

  def show
    @group = Group.find_by_id(params[:id])

    if @group
      render :show
    else
      render json: ["Group was not found"], status: 404
    end
  end

  def create
    @group = Group.new(group_params)

    if @group.save
      UserGroup.create(
        group_id: @group.id,
        user_id: @group.owner_id
      )
    
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def destroy
    @group = Group.find_by_id(params[:id])

    if @group
      @group.delete
      render :show
    else 
      render json: ["Group not found"], status: 404
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, :owner_id)
  end
end
