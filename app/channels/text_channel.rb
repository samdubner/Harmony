class TextChannel < ApplicationCable::Channel
  def subscribed
    stream_from "channel_#{params[:channel_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def sendMessage(data)
    newMessage = Message.new(
      content: data['content'],
      owner_id: data['user_id'],
      channel_id: data['channel_id']
    )

    if newMessage.save
      ActionCable.server.broadcast "channel_#{newMessage.channel_id}", message: data['content']
    end
  end

end
