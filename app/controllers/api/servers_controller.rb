class Api::ServersController < ApplicationController
    def index
        @servers = User.find_by_id(params[:user_id]).joined_servers
        render :index
    end

    def show
        @server = Server.find_by_id(params[:id])

        if @server
            render :show
        else
            render json: ["Server does not exist"], status: 404
        end
    end

    def create
        @server = Server.new(server_params)

        if @server.save
            UserServer.create(
                server_id: @server.id,
                user_id: @server.owner_id
            )
            Channel.create(
                server_id: @server.id,
                name: "general"
            )
            render :show
        else
            render json: @server.errors.full_messages, status: 422
        end
    end

    def update
        @server = Server.find_by_id(params[:id])

        if @server.update(server_params)
            render :show
        else
            render json: ["Invalid parameters"], status: 422
        end
    end

    def destroy
        @server = Server.find_by_id(params[:id])

        if @server
            @server.delete
            render :show
        else
            render json: {}, status: 404
        end
    end

    private

    def server_params
        params.require(:server).permit(:name, :owner_id)
    end
end
