import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal"

import { setModal } from "../../../../actions/ui_actions"
import { joinServer } from "../../../../actions/user_server"
import { getUserServers } from "../../../../actions/server_actions"

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        promptModal: () => dispatch(setModal("prompt")),
        joinServer: (joinInfo) => dispatch(joinServer(joinInfo)),
        getUserServers: (user) => dispatch(getUserServers(user))
    }
}

class JoinServerModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            invite: '',
            user_id: this.props.currentUser.id
        }
        this.updateInvite = this.updateInvite.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateInvite(e) {
        this.setState({invite: e.target.value})
    }

    handleSubmit(e) {
        this.props.joinServer(this.state)
            .then(() => {
                this.props.getUserServers(this.props.currentUser)
                this.props.closeModal()
            })
    }

    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" onClick={this.props.closeModal} className="fas fa-times"></i>
                    <div className="join-info">
                        <h1>Join a server</h1>
                        <p>Enter an invite below to join an existing server!</p>
                        <label>Invite Code</label>
                        <input type="text" onChange={this.updateInvite} value={this.state.invite} />
                        <span>Invites should look like: RKCu9UXB</span>
                    </div>
                    </>
                )}
                footer={(
                    <div className="join-footer">
                        <h2 onClick={this.props.promptModal}>Back</h2>
                        <input onClick={this.handleSubmit} type="button" value="Join Server"/>
                    </div>
                )}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinServerModal)