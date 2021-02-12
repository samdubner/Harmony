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
                    <div>
                        <input type="button" onClick={this.props.logout}/>
                        <input type="button" />
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupIndex;