import React from "react"

import ServerIndexContainer from "../../shared/server_index/server_index_container";
import GroupIndexContainer from "../../group_index/group_index_container"
import FriendIndexContainer from "../../friend_index/friend_index_container"

class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <ServerIndexContainer servers={this.props.servers}/>
                <GroupIndexContainer 
                    inGroup={false}
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout}
                />
                <FriendIndexContainer />
            </div>
        )
    }
}

export default Home