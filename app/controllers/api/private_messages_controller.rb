class Api::PrivateMessagesController < ApplicationController
    def index
        @private_messages = Group.find_by_id(params[:group_id]).messages

        if @private_messages
            render :index
        else
            render json ["Group was not found"], status: 404
        end
    end

    def destroy
        @message = PrivateMessage.find_by_id(params[:id])

        if @message
            @message.delete
            render :show
        else
            render json: ["Private Message not found"], status: 404
        end
    end
end
