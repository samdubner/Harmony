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
    end

    private

    def user_groups_params
        params.permit(:join_info).require(:user_id, :group_id)
    end
end
