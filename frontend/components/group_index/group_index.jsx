import React from "react";

class GroupIndex extends React.Component {
    render() {
        return (
            <div className="group-index">
                <div className="group-index-header">

                </div>
                <div className="groups-container">

                </div>
                <div className="user-box">
                    <div className="user-info">
                        <div className="user-pfp"></div>
                        <h3>{this.props.currentUser.username}</h3>
                    </div>
                    <div className="user-options">
                        <i className="fas fa-sign-out-alt" onClick={this.props.logout}></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex;