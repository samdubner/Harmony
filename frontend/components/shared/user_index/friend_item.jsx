import React from "react";

class FriendItem extends React.Component {
  constructor(props) {
    super(props);
    this.addToGroup = this.addToGroup.bind(this);
  }

  addToGroup() {
    this.props.addToGroup({
      user_id: this.props.friend.id,
      group_id: this.props.groupId,
    });
    this.props.closeFriendsList();
  }

  render() {
    return (
      <div className="friend-list-item">
        <div className="friend-item-info">
          <div className="friend-item-pfp" />
          <p>{this.props.friend.username}</p>
        </div>
        <div className="add-group-button" onClick={this.addToGroup}>
          <i className="fas fa-plus-square"></i>
        </div>
      </div>
    );
  }
}

export default FriendItem;
