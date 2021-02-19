import React from "react"
import { NavLink } from "react-router-dom"

class ServerIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
         let initializedServerName = this.props.server.name.split(" ")
         if (initializedServerName.length > 1) {
            initializedServerName = initializedServerName[0].charAt(0) + initializedServerName[1].charAt(0)
        } else {
            initializedServerName = initializedServerName[0].charAt(0)
        }
            
            initializedServerName = initializedServerName.toUpperCase()
        return (
            <NavLink to={`/servers/${this.props.server.id}`}>
                <div className="server-index-item">
                    <h2>{initializedServerName}</h2>
                </div>
            </NavLink>
        )
    }
}

export default ServerIndexItem;