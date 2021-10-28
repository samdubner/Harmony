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
    end
end
