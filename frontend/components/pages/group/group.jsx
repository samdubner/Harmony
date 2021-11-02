import React from "react";

import ServerIndexContainer from "../../shared/server_index/server_index_container";
import GroupIndexContainer from "../../group_index/group_index_container";
import MessageIndexContainer from "../../shared/message_index/message_index_container";
import UserIndexContainer from "../../shared/user_index/user_index_container";

class Group extends React.Component {

  componentDidMount() {
    this.props.setCurrentGroup({id: this.props.match.params.groupId});
    this.props.getGroupInfo({id: this.props.match.params.groupId});
  }

  render() {
    let users = [];
    if(this.props.currentGroup && Object.keys(this.props.groups).length) {
      let group = this.props.groups[this.props.currentGroup]
      for (let user of Object.values(group.users)) {
        users.push(user)
      }
    }

    return (
      <div className="group-container">
        <ServerIndexContainer servers={this.props.servers} />
        <GroupIndexContainer
          currentUser={this.props.currentUser}
          logout={this.props.logout}
        />
        <MessageIndexContainer
          currentChannel={this.props.currentGroup}
          getChannelMessages={this.props.getChannelMessages}
          channel="PrivateChannel"
          messages={this.props.messages}
          receiveMessage={this.props.receiveMessage}
        >
            
        </MessageIndexContainer>
        <UserIndexContainer
          users={users}
        />
      </div>
    );
  }
}

export default Group;
