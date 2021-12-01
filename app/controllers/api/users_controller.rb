class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            # render :show
            login(@user)
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update 
        @user = User.find_by_id(params[:id])

        if @user.update(user_params)
            render :show
        else
            render json: ["Could not find user"], status: 404
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :password, :color)
    end
end
