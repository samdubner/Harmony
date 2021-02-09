class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login(@user)
        else
            render json: ["No matching credentials were found in the DB"], status: 404
        end
    end

    def destroy
        logout(@user)
    end
end
