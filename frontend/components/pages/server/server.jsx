import React from "react";

import ServerIndexContainer from "../../shared/server_index/server_index_container";
import ChannelIndexContainer from "../../channel_index/channel_index_container";
import MessageIndexContainer from "../../shared/message_index/message_index_container";
import UserIndex from "../../shared/user_index/user_index";

class Server extends React.Component {
  componentDidMount() {
    this.props.getServerChannels({ id: this.props.match.params.serverId });
    this.props.serverInfo({ id: this.props.match.params.serverId });
    this.props.setCurrentServer({ id: this.props.match.params.serverId });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentServer != this.props.currentServer) {
      this.props.getServerChannels({ id: this.props.match.params.serverId });
    }
  }

  render() {
    let channelName = null;
    if (this.props.currentChannel) {
      channelName = (
        <>
          <h1>#</h1>
          <p>{this.props.channels[this.props.currentChannel].name}</p>
        </>
      );
    }

    let users = []
    if (this.props.currentServer) {
      for (let server of this.props.servers) {
        if (server.id == this.props.currentServer) {
          users = server.users
          break
        }
      }
    }

    return (
      <div className="server-container">
        <ServerIndexContainer servers={this.props.servers} />
        <ChannelIndexContainer
          server={this.props.servers.find(
            (obj) => obj.id == this.props.match.params.serverId
          )}
          currentUser={this.props.currentUser}
          logout={this.props.logout}
        />
        <MessageIndexContainer
          currentChannel={this.props.currentChannel}
          getChannelMessages={this.props.getChannelMessages}
          channel="TextChannel"
          messages={this.props.messages}
          receiveMessage={this.props.receiveMessage}
        >
          {channelName}
        </MessageIndexContainer>
        <UserIndex
          users={users}
        />
      </div>
    );
  }
}

export default Server;
