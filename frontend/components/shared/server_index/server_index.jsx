import React from "react"
import ServerIndexItem from "./server_index_item"

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.toggleAddModal = this.toggleAddModal.bind(this)
    }

    toggleAddModal(e) {
        this.props.toggleModal()
        console.log(this.props.modalOpen)
    }

    render() {
        return (
            <div className="server-index">
                <ServerIndexItem />

                <div className="index-separator"></div>

                {this.props.servers.map(server => {
                    return (
                        <ServerIndexItem />
                    )
                })}

                <div className="add-server-index-item" onClick={this.toggleAddModal}>
                    <p>+</p>
                </div>
            </div>
        )
    }
}

export default ServerIndex;