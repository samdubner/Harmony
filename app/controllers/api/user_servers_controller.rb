class Api::UserServersController < ApplicationController
    def create
        user_id = params[:join_info][:user_id]
        invite = params[:join_info][:invite]

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
        @server = Server.find_by_id(params[:leaveInfo][:server_id])
        user_server = UserServer.find_by(
            server_id: params[:leaveInfo][:server_id],
            user_id: params[:leaveInfo][:user_id]
        )
        
        if user_server
            user_server.delete
            render :delete
        else
            render json: {}, status: 404
        end
    end
end
