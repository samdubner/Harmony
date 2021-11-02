import React from "react";

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let requestData = {
      sender_id: this.props.currentUser,
      recipient_id: this.props.user.id,
    };
    this.props.createFriendRequest(requestData);
  }

  render() {
    let hasReq = Object.values(this.props.friendRequests).some(
      (request) =>
        request.sender_id == this.props.user.id ||
        request.recipient_id == this.props.user.id
    );

    let classes = "user-actions";
    if (this.props.user.id == this.props.currentUser || hasReq) {
      classes = "user-actions hidden";
    }

    return (
      <div className="user-container">
        <div className="user-info">
          <div className="user-pfp"></div>
          <h1>{this.props.user.username}</h1>
        </div>
        <div className={classes} onClick={this.handleClick}>
          <i className="fas fa-user-plus"></i>
        </div>
      </div>
    );
  }
}

export default UserIndexItem;
