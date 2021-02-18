import React from "react"
import { connect } from "react-redux"

import ServerModal from "./server_modal"

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

class PromptServerModal extends React.Component {
    render() {
        return (
            <ServerModal 
                closeModal={this.props.closeModal}
                info={(
                    <>
                    <i id="close" class="fas fa-times"></i>
                    <div className="prompt-info">
                        <h1>Create a server</h1>
                        <p>Your server is a place for you and your friends to talk</p>
                        <div className="server-modal-button">
                            <h2>Create My Own</h2>
                            <i class="fas fa-chevron-right"></i>
                        </div>
                    </div>
                    </>a
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