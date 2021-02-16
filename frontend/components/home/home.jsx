import React from "react"
import ServerIndexContainer from "../shared/server_index/server_index_container";
import GroupIndex from "../shared/group_index/group_index";
import MessageIndex from "../shared/message_index/message_index";

class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <ServerIndexContainer servers={this.props.servers}/>
                <GroupIndex 
                    currentUser={this.props.currentUser} 
                    logout={this.props.logout}
                />
                <MessageIndex />
                {/* <h1>Welcome, {this.props.currentUser.username}!</h1> */}
                {/* <input type="button" value="Logout" onClick={this.props.logout} /> */}
            </div>
        )
    }
}

export default Home