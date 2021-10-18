class Api::MessagesController < ApplicationController
  def index
    @messages = Channel.find_by_id(params[:channel_id]).messages

    if @messages
      render :index
    else
      render json: ["Channel was not found"], status: 404
    end
  end

  def destroy
    @message = Message.find_by_id(params[:id])

    if @message
      @message.delete
      render :show
    else
      render json: {}, status: 404
    end
  end
end
