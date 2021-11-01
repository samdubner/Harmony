import React from "react";

class FriendIndex extends React.Component {
    constructor(props) {
        super(props);

        
    }

  render() {
    return (
      <div className="friends-index">
        <div className="friends-header">
          <i className="fas fa-user-friends"></i>
          <p className="friends-header-title">Friends</p>
          <div className="divider" />
          <div className="friends-view" id="all">
            <p>All</p>
          </div>
          <div className="friends-view" id="pending">
            <p>Pending</p>
          </div>
        </div>
        <div className="friends-container"></div>
      </div>
    );
  }
}

export default FriendIndex;
