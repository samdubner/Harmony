import React from "react";

import RequestItem from "./request_item";
import FriendItem from "./friend_item";

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
    this.props.getUserRequests(this.props.currentUser)
    // this.props.fetchUserFriends()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.viewOption != this.state.viewOption) {
      let all = document.getElementById("all");
      let pending = document.getElementById("pending");

      all.classList.remove("selected-friend-view");
      pending.classList.remove("selected-friend-view");

      let viewOption = document.getElementById(this.state.viewOption)
      viewOption.classList.add("selected-friend-view")
    }
  }

  render() {
    return (
      <div className="friends-index">
        <div className="friends-header">
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
        <div className="friends-container">
          <div className="friends-list-info">
            <p className="display-type">
              {this.state.viewOption.toUpperCase()} — 0
            </p>
          </div>
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
          <RequestItem />
        </div>
      </div>
    );
  }
}

export default FriendIndex;
