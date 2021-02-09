class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
        else
            render json: ["Invalid Credentials"], status: 404
        end
    end

    def destroy
        if current_user == nil
            render :destroy, status: 404
        else 
            logout
            render :destroy, status: 200
        end
    end
end
