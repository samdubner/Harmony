import React from "react";

import RequestItem from "./request_item";
import FriendItem from "./friend_item";

import PersonalLinks from "../shared/personal_links/personal_links";

class FriendIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOption: "all",
    };
    this.changeViewOption = this.changeViewOption.bind(this);
  }

  changeViewOption(e) {
    this.setState({ viewOption: e.currentTarget.id });
  }

  componentDidMount() {
    let viewOption = document.getElementById(this.state.viewOption);
    viewOption.classList.add("selected-friend-view");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.viewOption != this.state.viewOption) {
      let all = document.getElementById("all");
      let pending = document.getElementById("pending");

      all.classList.remove("selected-friend-view");
      pending.classList.remove("selected-friend-view");

      let viewOption = document.getElementById(this.state.viewOption);
      viewOption.classList.add("selected-friend-view");
    }
  }

  render() {
    let entities = [];

    if (this.state.viewOption == "all") {
      entities = Object.values(this.props.friends).map((friend, idx) => {
        return (
          <FriendItem
            key={idx}
            friend={friend}
            deleteFriend={this.props.deleteFriendship}
          />
        );
      });
    } else {
      entities = Object.values(this.props.friendRequests).map((req, idx) => {
        return (
          <RequestItem
            key={idx}
            req={req}
            currentUser={this.props.currentUser}
            users={this.props.users}
            deleteReq={this.props.deleteFriendRequest}
            createFriend={this.props.createFriendship}
          />
        );
      });
    }

    return (
      <div className="friends-index">
        <div className="friends-header">
          <div className="friends-selection">
            <i className="fas fa-user-friends"></i>
            <p className="friends-header-title">Friends</p>
            <div className="divider" />
            <div
              className="friends-view"
              id="all"
              onClick={this.changeViewOption}
            >
              <p>All</p>
            </div>
            <div
              className="friends-view"
              id="pending"
              onClick={this.changeViewOption}
            >
              <p>Pending</p>
            </div>
          </div>
          <PersonalLinks />
        </div>
        <div className="friends-container">
          <div className="friends-list-info">
            <p className="display-type">
              {this.state.viewOption.toUpperCase()} — {entities.length}
            </p>
          </div>
          {entities}
        </div>
      </div>
    );
  }
}

export default FriendIndex;
