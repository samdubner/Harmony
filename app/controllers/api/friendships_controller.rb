class Api::FriendshipsController < ApplicationController
    def index
        user = User.find_by_id(params[:user_id])

        if user
            @friends = user.friends
            # for friend in user.primary_friends do
            #     @friends.push(friend)
            # end
            # for friend in user.secondary_friends do
            #     @friends.push(friend)
            # end
            # @friends.push(user.primary_friends)
            # @friends.push(user.secondary_friends)
            render :index
        else
            render json: ["User was not found"], status: 404
        end
    end

    def create
        primary_friendship = Friendship.new({
            primary_id: params[:friendship][:primary_id],
            secondary_id: params[:friendship][:secondary_id]
        })

        secondary_friendship = Friendship.new({
            primary_id: params[:friendship][:secondary_id],
            secondary_id: params[:friendship][:primary_id]
        })

        if primary_friendship.save && secondary_friendship.save
            @friend = User.find_by_id(params[:friendship][:primary_id])
            render :show
        else
            puts primary_friendship.errors.full_messages
            puts secondary_friendship.errors.full_messages
            render json: ["there was an error creating this friendship"], status: 422
        end
    end
end
