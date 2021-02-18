import React from "react"
import { NavLink } from "react-router-dom"

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <NavLink to={`/servers/${this.props.server.id}`}>
                <div className="server-index-item">
                    <h2>H</h2>
                </div>
            </NavLink>
        )
    }
}

export default ServerIndexItem;