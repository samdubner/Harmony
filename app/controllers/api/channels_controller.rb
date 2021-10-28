class Api::ChannelsController < ApplicationController
    def index 
        @channels = Server.find_by_id(params[:server_id]).channels

        if @channels 
            render :index
        else
            render json: ["Server was not found"], status: 404
        end
    end

    def create
        @channel = Channel.new(channel_params)

        if @channel.save
            render :show
        else 
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def destroy 
        @channel = Channel.find_by_id(params[:id])

        if @channel
            @channel.delete
            render :show
        else
            render json: {}, status: 404
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :server_id)
    end
end
