import React from "react";

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeMessage = this.removeMessage.bind(this);
  }

  removeMessage() {
    this.props.deleteMessage(this.props.id);
  }

  render() {
    return (
      <div className="message-item">
        <div className="message-info">
          <div
            className="message-pfp"
            style={{ backgroundColor: this.props.author.color }}
          />
          <div className="message-details">
            <div className="message-author">
              <p>{this.props.author.username}</p>
            </div>
            <div className="message-content">
              <p>{this.props.content}</p>
            </div>
          </div>
        </div>
        {this.props.author.id == this.props.currentUser ? (
          <div className="message-options" onClick={this.removeMessage}>
            <i className="fas fa-trash-alt"></i>
          </div>
        ) : null}
      </div>
    );
  }
}

export default MessageItem;
