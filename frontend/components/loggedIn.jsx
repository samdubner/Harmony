import React from "react"

class LoggedIn extends React.Component {
    render() {
        return(
            <>
                <h1>Welcome, {this.props.currentUser.username}!</h1>
                <input type="button" value="Logout" onClick={this.props.logout} />
            </>
        )
    }
}

export default LoggedIn