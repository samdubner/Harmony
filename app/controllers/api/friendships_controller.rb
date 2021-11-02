class Api::FriendshipsController < ApplicationController
    def index
        user = User.find_by_id(params[:user_id])

        if user
            primary = user.primary_friends
            secondary = user.secondary_friends

            @friends = primary.concat(secondary)
            render :index
        else
            render json: ["User was not found"], statusL 404
        end
    end

    def create
        friendship = Friendship.new(friendship_params)

        if friendship.save
            @friend = friendship.primary_friend
            render :show
        else
            render json: friendship.errors.full_messages, status: 422
        end
    end

    private

    def friendship_params
        params.require(:friendship).permit(:primary_id, :secondary_id)
    end
end
