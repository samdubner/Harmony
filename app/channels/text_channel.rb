class TextChannel < ApplicationCable::Channel
  def subscribed
    stream_from params[:room_id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def send
    Message.create()
  end
end
