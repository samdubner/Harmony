import React from "react"

import ServerIndexContainer from "../shared/server_index/server_index_container";
import GroupIndexContainer from "../shared/group_index/group_index_container";
import MessageIndex from "../shared/message_index/message_index";

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
                    <h2>This is your home!</h2>
                    <h5>Select a Server or Group to get started!</h5>
                </div>
                {/* <MessageIndex /> */}
                {/* <h1>Welcome, {this.props.currentUser.username}!</h1> */}
                {/* <input type="button" value="Logout" onClick={this.props.logout} /> */}
            </div>
        )
    }
}

export default Home