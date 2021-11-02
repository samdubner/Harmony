class Api::FriendRequestsController < ApplicationController
  def index
    user = User.find_by_id(params[:user_id])

    if user
      outbound = user.outbound_requests
      inbound = user.incoming_requests

      @requests = outbound.concat(inbound)
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

  private

  def request_params
    params.require(:friend_request).permit(:sender_id, :recipient_id)
  end
end
