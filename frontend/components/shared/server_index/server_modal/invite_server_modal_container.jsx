import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal"

class JoinServerModal extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" onClick={this.props.closeModal} className="fas fa-times"></i>
                    <div className="invite-info">
                        <h1>Get Server Invite Code</h1>
                        <p>Give the invite code below to your friends so they may join your server!</p>
                        <input type="text" value={this.props.invite} readOnly/>
                    </div>
                    </>
                )}
                footer={(
                    <div className="invite-footer">
                        <h2 onClick={this.props.closeModal}>Back</h2>
                    </div>
                )}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        invite: state.ui.server.serverInvite
    }
}

export default connect(mapStateToProps, null)(JoinServerModal)