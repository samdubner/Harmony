class Api::FriendRequestsController < ApplicationController
  def index
    user = User.find_by_id(params[:user_id])

    if user
      outbound = user.outbound_requests
      inbound = user.incoming_requests

      request_list = [].concat(outbound).concat(inbound)

      @requests = request_list
      render :index
    else
      render json: ["User was not found"], status: 404
    end
  end

  def create
    @request = FriendRequest.new(request_params)

    if @request.save
      render :show
    else
      render json: @request.errors.full_messages, status: 422
    end
  end

  def destroy 
    @request = FriendRequest.find_by_id(params[:id])

    if @request
      @request.delete
      render :show
    else
      render json: ["Friend request couldn't be found"], status: 404
    end
  end

  private

  def request_params
    params.require(:friend_request).permit(:sender_id, :recipient_id)
  end
end
