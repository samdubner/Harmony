class Api::UserGroupsController < ApplicationController
    def create
        @user_group = UserGroup.new(user_groups_params)

        if @user_group.save
            # render :show
            render json: ["UserGroup was created"], status: 200
        else
            render json: ["An error occured"], status: 422
        end
    end

    def destroy
        @group = Group.find_by_id(params[:leaveInfo][:group_id])
        user_group = UserGroup.find_by(
            group_id: params[:leaveInfo][:group_id],
            user_id: params[:leaveInfo][:user_id]
        )

        if user_group
            user_group.delete
            render :delete
        else
            render json: {}, status: 404
        end
    end

    private

    def user_groups_params
        params.require(:join_info).permit(:user_id, :group_id)
    end
end
