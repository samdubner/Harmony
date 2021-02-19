import React from "react"

class GroupIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let serverInfo;
        if (this.props.server != undefined) {
            serverInfo = (
                <>
                <h2>{this.props.server.name}</h2>
                <div className="dropdown">

                </div>
                </>
            )
        } else {
            serverInfo = null
        }
        return (
            <div className="group-index">
                <div className="server-info">
                    {serverInfo}
                </div>
                <div></div>
                <div className="user-box">
                    <div className="user-info">
                        <div className="user-pfp"></div>
                        <h3>{this.props.currentUser.username}</h3>
                    </div>
                    <div className="user-options">
                        <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
                        {/* <i className="fas fa-cog"></i> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex;