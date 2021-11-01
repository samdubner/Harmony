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
end
