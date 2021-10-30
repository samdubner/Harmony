import React from "react"

import UserIndexItem from "./user_index_item"

class UserIndex extends React.Component {
    render() {
        let div;

        if (this.props.hasUsers) {
          div = (
            <div className="users-container">
              {Object.values(this.props.users).map((user, idx) => {
                return <UserIndexItem key={idx} user={user} />;
              })}
            </div>
          );
        } else {
          div = <div className="users-contianer"></div>;
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