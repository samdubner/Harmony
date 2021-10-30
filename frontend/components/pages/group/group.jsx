import React from "react";

import ServerIndexContainer from "../../shared/server_index/server_index_container";
import GroupIndexContainer from "../../group_index/group_index_container";
import MessageIndexContainer from "../../shared/message_index/message_index_container";
import UserIndex from "../../shared/user_index/user_index";

class Group extends React.Component {
  render() {
    let users = [];
    if(this.props.currentGroup) {
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
        <UserIndex
          hasUsers={!!this.props.currentGroup}
          users={users}
        />
      </div>
    );
  }
}

export default Group;
