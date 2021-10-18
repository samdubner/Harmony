import React from "react";

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeMessage = this.removeMessage.bind(this)
  }

  removeMessage() {
    this.props.deleteMessage(this.props.id)
  }

  render() {
    return (
      <div className="message-item">
        <div className="message-info">
          <div className="message-pfp" />
          <div className="message-details">
            <div className="message-author">
              <p>{this.props.author.username}</p>
            </div>
            <div className="message-content">
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
        <div className="message-options" onClick={this.removeMessage}>
          <i className="channel-delete fas fa-trash-alt"></i>
        </div>
      </div>
    );
  }
}

export default MessageItem;
