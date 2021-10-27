class PrivateChannel < ApplicationCable::Channel
  def subscribed
    stream_from "private_#{params[:channel_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def sendMessage(data)
    newMessage = Message.new(
      content: data['content'],
      owner_id: data['user_id'],
      group_id: data['channel_id']
    )

    if newMessage.save
      ActionCable.server.broadcast "private_#{newMessage.group_id}", message: newMessage
    end
  end
end
