import React from "react";

class MessageItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.author.username);
    return (
      <div className="message-item">
        <div className="message-pfp" />
        <div className="message-details">
          <div className="message-info">
            <p>{this.props.author.username}</p>
          </div>
          <div className="message-content">
            <p>{this.props.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MessageItem;
