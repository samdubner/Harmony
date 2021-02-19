import React from "react"

class UserIndexItem extends React.Component {
    render() {
        return (
            <div className="user-container">
                <div></div>
                <h1>{this.props.user.username}</h1>
            </div>
        )
    }
}

export default UserIndexItem;