import React from "react"
import ServerIndexItem from "./server_index_item"
import ServerModal from "./server_modal/server_modal"

import PromptServerModal from "./server_modal/prompt_server_modal_container"

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let modal;

        // console.log(this.props.modalState)

        switch (this.props.modalState) {
            case "closed":
                modal = null;
                break;
            case "prompt":
                modal = <PromptServerModal closeModal={this.props.closeModal} /> 
                break;
            default:
                modal = null;
        }
        
        return (
            <div className="server-index">
                <ServerIndexItem />

                <div className="index-separator"></div>

                {this.props.servers.map(server => {
                    return (
                        <ServerIndexItem />
                    )
                })}

                <div className="add-server-index-item" onClick={this.props.promptModal}>
                    <p>+</p>
                </div>

                {modal}
            </div>
        )
    }
}

export default ServerIndex;