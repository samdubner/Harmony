import React from "react";

import UserIndexItem from "./user_index_item";
import FriendItem from "./friend_item";

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.toggleFriendsList = this.toggleFriendsList.bind(this);
  }

  toggleFriendsList() {
    this.setState({ display: !this.state.display });
  }

  render() {
    return (
      <div className="user-index">
        <div className="user-header"></div>
        <div className="users-container">
          {this.state.display ? (
            <div className="friend-list">
              <div className="inner-list">
                {Object.values(this.props.friends).map((friend, idx) => {
                  return (
                    <FriendItem
                      key={idx}
                      addToGroup={this.props.addToGroup}
                      friend={friend}
                    />
                  );
                })}
              </div>
            </div>
          ) : null}
          {this.props.channelType == "group" ? (
            <div className="group-add-button" onClick={this.toggleFriendsList}>
              <div className="add-button-text">
                <p>Add Friend</p>
              </div>
            </div>
          ) : null}
          {Object.values(this.props.users).map((user, idx) => {
            return (
              <UserIndexItem
                key={idx}
                user={user}
                currentUser={this.props.currentUser}
                friendRequests={this.props.friendRequests}
                createFriendRequest={this.props.createFriendRequest}
                friends={this.props.friends}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserIndex;
