import React from "react";

class FriendItem extends React.Component {
  render() {
    return (
      <div className="friend-item">
        <div className="friend-pfp" />
        <p className="friend-name">{this.props.friend.username}</p>
      </div>
    );
  }
}

export default FriendItem