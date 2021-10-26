import React from "react"

import ServerIndexContainer from "../shared/server_index/server_index_container";
import GroupIndexContainer from "../group_index/group_index_container"

class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <ServerIndexContainer servers={this.props.servers}/>
                <GroupIndexContainer 
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout}
                />
                <div className="home-instructions">
                    <h2>Welcome Back, {this.props.currentUser.username}</h2>
                    <h5>Select a Server or Group to get started!</h5>
                </div>
            </div>
        )
    }
}

export default Home