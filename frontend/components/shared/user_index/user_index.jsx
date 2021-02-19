import React from "react"

import UserIndexItem from "./user_index_item"

class UserIndex extends React.Component {
    render() {
        console.log(this.props)

        let div;

        if(this.props.server != undefined && this.props.server.user_ids != undefined) {
            div = (
                <div className="users-container">
                    {this.props.server.user_ids.map(user => {
                        return (
                            <UserIndexItem key={user} user={this.props.users[user]}/>
                        )
                    })}
                </div>
            )
        } else {
            div = <div className="users-contianer"></div>
        }

        return (
            <div className="user-index">
                <div className="user-header">

                </div>
                {div}
            </div>
        )
    }
}

export default UserIndex;