class Api::UserServersController < ApplicationController
    def create
        user_id = params[:join_info][:user_id]
        invite = params[:join_info][:invite]
        # debugger

        @user_server = UserServer.new(
            user_id: user_id,
            server_id: Server.find_by(invite: invite).id
        )

        if @user_server.save
            render :show
        else
            render json: ["Invalid invite code"], status: 422
        end
    end

    def destroy

    end
end
