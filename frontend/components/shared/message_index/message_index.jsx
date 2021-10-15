import React from "react";

import MessageItem from "./message_item";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.createConsumer = this.createConsumer.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.checkSendMessage = this.checkSendMessage.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.currentChannel != prevProps.currentChannel) {
      this.createConsumer();
    }
  }

  createConsumer() {
    this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    this.channel = this.cable.subscriptions.create(
      {
        channel: "TextChannel",
        channel_id: `${this.props.currentChannel}`,
      },
      {
        connected: () => {},
        received: (data) => {
          this.props.receiveMessage(data.message);
        },
        sendMessage: function (userId, channelId, messageContent) {
          this.perform("sendMessage", {
            user_id: userId,
            content: messageContent,
            channel_id: channelId,
          });
        },
      }
    );
  }

  sendMessage(messageContent) {
    this.channel.sendMessage(
      this.props.currentUser,
      this.props.currentChannel,
      messageContent
    );
  }

  checkSendMessage(e) {
    if (!e.shiftKey && e.key == "Enter") {
      e.preventDefault();
      let messageContent = e.target.value.trim();
      e.target.value = "";
      this.sendMessage(messageContent);
    }
  }

  render() {
    let messages = [];
    for (let [key, message] of Object.entries(this.props.messages)) {
      messages.push(
        <MessageItem
          author={this.props.users[message.author]}
          content={message.content}
          key={key}

        />
      );
    }

    return (
      <div className="message-index">
        <div className="message-header"></div>
        <div className="messages-container">{messages}</div>
        <div className="message-area">
          <textarea onKeyPress={this.checkSendMessage} id="message-content" />
        </div>
      </div>
    );
  }
}

export default MessageIndex;
