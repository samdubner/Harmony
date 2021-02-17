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
                    <h1>asdfasdfasd</h1>
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