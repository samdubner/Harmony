import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal"

import { setModal } from "../../../../actions/ui_actions"

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        joinModal: () => dispatch(setModal("join")),
        createModal: () => dispatch(setModal("create"))
    }
}

class PromptServerModal extends React.Component {
    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" onClick={this.props.closeModal} className="fas fa-times"></i>
                    <div className="prompt-info">
                        <h1>Create a server</h1>
                        <p>Your server is a place for you and your friends to talk</p>
                        <div onClick={this.props.createModal} className="server-modal-button">
                            <div>
                                <i className="fas fa-plus-circle"></i>
                                <h2>Create My Own</h2>
                            </div>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    </>
                )}
                footer={(
                    <div className="prompt-footer">
                        <h2>Have an invite already?</h2>
                        <input type="button" value="Join a server"/>
                    </div>
                )}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromptServerModal)