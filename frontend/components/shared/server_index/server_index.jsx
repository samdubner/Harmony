import React from "react"
import ServerIndexItem from "./server_index_item"
import {NavLink} from "react-router-dom"

import PromptServerModal from "./server_modal/prompt_server_modal_container"
import CreateServerModal from "./server_modal/create_server_modal_container"
import JoinServerModal from "./server_modal/join_server-modal_container"
import InviteServerModal from "./server_modal/invite_server_modal_container"
import CreateChannelModal from "./server_modal/create_channel_modal_container"

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
        this.setServerHome = this.setServerHome.bind(this)
    }

    setServerHome() {
        this.props.setCurrentServer({id: null})
    }

    componentDidMount() {
        this.props.fetchServers(this.props.currentUser)
    }

    render() {
        let modal;

        switch (this.props.modalState) {
            case "closed":
                modal = null;
                break;
            case "prompt":
                modal = <PromptServerModal closeModal={this.props.closeModal} /> 
                break;
            case "join":
                modal = <JoinServerModal closeModal={this.props.closeModal} />
                break;
            case "create":
                modal = <CreateServerModal closeModal={this.props.closeModal} />
                break;
            case "invite":
                modal = <InviteServerModal closeModal={this.props.closeModal} invite={this.props.invite}/>
                break;
            case "createChannel":
                modal = <CreateChannelModal closeModal={this.props.closeModal} />
                break;
            default:
                modal = null;
        }

        return (
            <div className="server-index">
                <NavLink to="/home" onClick={this.setServerHome}>
                    <div className="server-index-item">
                        <h2>H</h2>
                    </div>
                </NavLink>

                <div className="index-separator"></div>

                {this.props.servers.map(server => {
                    return (
                        <ServerIndexItem 
                            key={server.id} 
                            server={server} 
                            serverInfo={this.props.serverInfo}
                            setCurrentServer={this.props.setCurrentServer}
                            getServerChannels={this.props.getServerChannels}
                            currentServer={this.props.currentServer}
                        />
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