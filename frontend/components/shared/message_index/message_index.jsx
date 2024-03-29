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
    if (this.props.currentChannel) {
      this.props.getChannelMessages(this.props.currentChannel);
      this.createConsumer();
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.currentChannel == undefined &&
      Object.keys(this.props.messages).length
    ) {
      this.props.clearMessages();
    } else if (
      this.props.currentChannel != prevProps.currentChannel &&
      this.props.currentChannel
    ) {
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
    this.cable = ActionCable.createConsumer(
      `wss://${window.location.host}/cable`
    );
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

    let channel;
    let placeholder;
    if (
      this.props.currentChannel &&
      this.props.channel == "TextChannel" &&
      Object.keys(this.props.channels).includes(
        this.props.currentChannel.toString()
      )
    ) {
      channel = this.props.channels[this.props.currentChannel];
      placeholder = `Message #${channel.name}`;
    } else if (
      this.props.currentChannel &&
      Object.keys(this.props.groups).length &&
      this.props.channel == "PrivateChannel"
    ) {
      channel = this.props.groups[this.props.currentChannel];
      placeholder = `Message ${channel.name}`;
    } else {
      placeholder = `Please select a channel to send messages...`;
    }

    return (
      <div className="message-index">
        <div className="message-header">{this.props.children}</div>
        <div className="messages-container">{messages}</div>
        <div className="message-form">
          <textarea
            onKeyPress={this.checkSendMessage}
            id="message-content"
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

export default MessageIndex;
