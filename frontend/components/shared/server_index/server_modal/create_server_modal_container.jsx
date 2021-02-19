import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal"

import { setModal } from "../../../../actions/ui_actions"
import { createServer } from "../../../../actions/server_actions"

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        promptModal: () => dispatch(setModal("prompt")),
        createServer: (server) => dispatch(createServer(server))
    }
}

class CreateServerModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: `${this.props.currentUser.username}'s Server`,
            owner_id: this.props.currentUser.id
        }
        this.updateName = this.updateName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateName(e) {
        this.setState({name: e.target.value})
    }

    handleSubmit(e) {
        this.props.createServer(this.state)
        this.props.closeModal()
    }

    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" onClick={this.props.closeModal} className="fas fa-times"></i>
                    <div className="create-info">
                        <h1>Customize your server</h1>
                        <p>Give your server personality with a cool name!</p>
                        <label>Server Name</label>
                        <input type="text" onChange={this.updateName} value={this.state.name} />
                    </div>
                    </>
                )}
                footer={(
                    <div className="create-footer">
                        <h2 onClick={this.props.promptModal}>Back</h2>
                        <input onClick={this.handleSubmit} type="button" value="Create"/>
                    </div>
                )}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerModal)