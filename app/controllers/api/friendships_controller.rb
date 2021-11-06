class Api::FriendshipsController < ApplicationController
    def index
        user = User.find_by_id(params[:user_id])

        if user
            @friends = user.friends
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
            render json: ["there was an error creating this friendship"], status: 422
        end
    end

    def destroy
        primary_friendship = Friendship.where(primary_id: current_user.id, secondary_id: params[:id]).first()
        secondary_friendship = Friendship.where(secondary_id: current_user.id, primary_id: params[:id]).first()

        if primary_friendship && secondary_friendship
            primary_friendship.delete
            secondary_friendship.delete

            @friend = User.find_by_id(params[:id])
            render :show
        else
            render json: {}, status: 404
        end 
    end
end
