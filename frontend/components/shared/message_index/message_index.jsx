import React from "react";

import MessageItem from "./message_item";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props);
    this.createConsumer = this.createConsumer.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.checkSendMessage = this.checkSendMessage.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
  }

  componentDidMount() {
    if (this.props.currentChannel)
      this.props.getChannelMessages(this.props.currentChannel);
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentChannel == undefined &&
      Object.keys(this.props.messages).length
    ) {
      this.props.clearMessages();
    } else if (this.props.currentChannel != prevProps.currentChannel) {
      this.props.getChannelMessages(this.props.currentChannel);
      this.createConsumer();
    }
    this.scrollToBottom();
  }

  scrollToBottom() {
    var messagesContainer =
      document.getElementsByClassName("messages-container")[0];
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  createConsumer() {
    //change to work for heroku when hosting
    this.cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    this.channel = this.cable.subscriptions.create(
      {
        channel: this.props.channel,
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
          id={message.id}
          key={key}
          deleteMessage={this.props.deleteMessage}
          currentUser={this.props.currentUser}
        />
      );
    }

    let channelName = this.props.children;

    return (
      <div className="message-index">
        <div className="message-header">{channelName}</div>
        <div className="messages-container">{messages}</div>
        <div className="message-form">
          <textarea
            onKeyPress={this.checkSendMessage}
            id="message-content"
            placeholder="test"
          />
        </div>
      </div>
    );
  }
}

export default MessageIndex;
