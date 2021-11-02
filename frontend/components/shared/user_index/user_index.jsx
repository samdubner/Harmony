import React from "react";

import UserIndexItem from "./user_index_item";

class UserIndex extends React.Component {
  render() {
    return (
      <div className="user-index">
        <div className="user-header"></div>
        <div className="users-container">
          {Object.values(this.props.users).map((user, idx) => {
            return (
              <UserIndexItem
                key={idx}
                user={user}
                currentUser={this.props.currentUser}
                createFriendRequest={this.props.createFriendRequest}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserIndex;
