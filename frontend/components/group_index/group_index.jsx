import React from "react";

import GroupIndexItem from "./group_index_item";

class GroupIndex extends React.Component {
  constructor(props) {
    super(props);
    this.promptClick = this.promptClick.bind(this);
  }

  promptClick() {
    let name = this.props.users[this.props.currentUser].username

    let group = {
      name: `${name}'s Group`,
      owner_id: this.props.currentUser,
    };

    this.props.createGroup(group);
  }

  componentDidMount() {
    this.props.getUserGroups(this.props.currentUser);
  }

  render() {
    return (
      <div className="group-index">
        <div className="group-index-header"></div>
        <div className="groups-container">
          <div className="groups-prompt">
            <p className="prompt-title">Private Groups</p>
            <p className="prompt-button" onClick={this.promptClick}>
              +
            </p>
          </div>
          <div className="groups-list">
            {this.props.groups.map((group, idx) => {
              return (
                <GroupIndexItem
                  key={idx}
                  group={group}
                  setCurrentGroup={this.props.setCurrentGroup}
                  getGroupInfo={this.props.getGroupInfo}
                />
              );
            })}
          </div>
        </div>

        <div className="user-box">
          <div className="user-info">
            <div className="user-pfp"></div>
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
