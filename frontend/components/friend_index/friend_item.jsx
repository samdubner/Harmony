import React from "react";

import UserPfp from "../shared/user_pfp/user_pfp";

class FriendItem extends React.Component {
  constructor(props) {
    super(props)
    this.removeFriend = this.removeFriend.bind(this)
  }

  removeFriend() {
    this.props.deleteFriend(this.props.friend.id)
  }

  render() {
    return (
      <div className="friend-item">
        <div className="friend-info">
          <UserPfp user={this.props.friend} />
          <p className="friend-name">{this.props.friend.username}</p>
        </div>
        <div className="friend-options">
          <div className="friend-button" onClick={this.removeFriend}>
            <i className="fas fa-user-times"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default FriendItem;
