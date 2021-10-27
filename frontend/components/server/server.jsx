import React from "react";

import ServerIndexContainer from "../shared/server_index/server_index_container"
import ChannelIndexContainer from "../channel_index/channel_index_container"
import MessageIndexContainer from "../shared/message_index/message_index_container"
import UserIndex from "../shared/user_index/user_index"

class Server extends React.Component {
    render() {
        return (
            <div className="server-container">
                <ServerIndexContainer servers={this.props.servers}/>
                <ChannelIndexContainer
                    server={this.props.servers.find(obj => obj.id == this.props.match.params.serverId)}
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout}
                />
                <MessageIndexContainer 
                    currentChannel={this.props.currentChannel}
                    channel="TextChannel"
                />
                <UserIndex
                    hasUsers={!!this.props.currentServer}
                    users={this.props.users}
                />
            </div>
        )
    }
}

export default Server