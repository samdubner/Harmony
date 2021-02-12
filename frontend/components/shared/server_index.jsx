import React from "react"
import ServerIndexItem from "./server_index_item"

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="server-index">
                <ServerIndexItem />

                <div className="index-separator"></div>

                <ServerIndexItem />
                <ServerIndexItem />
            </div>
        )
    }
}

export default ServerIndex;