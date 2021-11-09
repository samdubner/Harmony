import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal_container"

import { createChannel } from "../../../../actions/channel_actions"

const mapStateToProps = state => {
    return {
        currentServer: state.ui.server.currentServer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createChannel: (channel) => dispatch(createChannel(channel))
    }
}

class CreateChannelModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            server_id: this.props.currentServer
        }
        this.updateName = this.updateName.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateName(e) {
        console.l
        this.setState({name: e.target.value})
    }

    handleSubmit(e) {
        this.props.createChannel(this.state)
        this.props.closeModal()
    }

    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" onClick={this.props.closeModal} className="fas fa-times"></i>
                    <div className="channel-info">
                        <h1>Create Channel</h1>
                        <p>Give your new channel a name!</p>
                        <input type="text" onChange={this.updateName} value={this.state.name}/>
                    </div>
                    </>
                )}
                footer={(
                    <div className="channel-footer">
                        <h2 onClick={this.props.closeModal}>Back</h2>
                        <input className="createButton" onClick={this.handleSubmit} type="button" value="Create"/>
                    </div>
                )}
            />
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateChannelModal)