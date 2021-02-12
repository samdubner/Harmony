import React from "react"

class GroupIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="group-index">
                <div></div>
                <div></div>
                <div className="user-box">
                    <div className="user-info">
                        <div className="user-pfp"></div>
                        <h3>{this.props.currentUser.username}</h3>
                    </div>
                    <div className="user-options">
                        <i class="fas fa-sign-out-alt" onClick={this.props.logout}></i>
                        <i class="fas fa-cog"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex;