import React from "react";
import { NavLink } from "react-router-dom";

import GroupIndexItem from "./group_index_item";
import UserPfp from "../shared/user_pfp/user_pfp";

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.promptClick = this.promptClick.bind(this);
  }

  promptClick() {
    let name = this.props.users[this.props.currentUser].username;

    let group = {
      name: `${name}'s Group`,
      owner_id: this.props.currentUser,
    };

    this.props.createGroup(group);
  }

  componentDidMount() {
    this.props.getUserGroups(this.props.currentUser);
    this.timer = setInterval(() => {
      this.props.getUserGroups(this.props.currentUser);
    }, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    let currentGroup;
    return (
      <div className="group-index">
        <div className="group-index-header"></div>
        <div className="groups-container">
          {this.props.inGroup ? (
            <NavLink to="/home">
              <div className="friend">
                <i className="fas fa-user-friends"></i>
                <p className="friends-text">Friends</p>
              </div>
            </NavLink>
          ) : (
            <div className="friend selected">
              <i className="fas fa-user-friends"></i>
              <p className="friends-text">Friends</p>
            </div>
          )}

          <div className="groups-prompt">
            <p className="prompt-title">Private Groups</p>
            <p className="prompt-button" onClick={this.promptClick}>
              +
            </p>
          </div>
          <div className="groups-list">
            {this.props.groups.map((group, idx) => {
              if (this.props.inGroup && group.id == this.props.groupId) {
                currentGroup = true;
              } else {
                currentGroup = false;
              }

              return (
                <GroupIndexItem
                  key={idx}
                  group={group}
                  currentGroup={currentGroup}
                  setCurrentGroup={this.props.setCurrentGroup}
                  getGroupInfo={this.props.getGroupInfo}
                  deleteGroup={this.props.deleteGroup}
                  history={this.props.history}
                />
              );
            })}
          </div>
        </div>

        <div className="user-box">
          <div className="user-info">
            <UserPfp user={this.props.users[this.props.currentUser]} />
            <h3>{this.props.users[this.props.currentUser].username}</h3>
          </div>
          <div className="user-options">
            <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupIndex;
