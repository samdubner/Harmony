import React from "react"
import ServerIndexItem from "./server_index_item"
import ServerModal from "./server_modal"

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let modal = this.props.modalOpen ? <ServerModal toggleModal={this.props.toggleModal} /> : null ;
        return (
            <div className="server-index">
                <ServerIndexItem />

                <div className="index-separator"></div>

                {this.props.servers.map(server => {
                    return (
                        <ServerIndexItem />
                    )
                })}

                <div className="add-server-index-item" onClick={this.props.toggleModal}>
                    <p>+</p>
                </div>

                {modal}
            </div>
        )
    }
}

export default ServerIndex;