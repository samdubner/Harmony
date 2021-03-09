class Api::ChannelsController < ApplicationController
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

        if @server
            @server.delete
            :show
        else
            render json: {}, status: 404
        end
    end

    private

    def channel_params
        params.permit(:channel).permit(:name, :server_id)
    end
end
