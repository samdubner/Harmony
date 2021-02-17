import React from "react";

class ServerModal extends React.Component {
    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal(e) {
        if(e.target.classList[0] === "server-modal-background") {
            this.props.closeModal()
        }
    }

    render() {
        return (
            <div onClick={this.closeModal} className="server-modal-background">
                <div className="server-modal">
                    {this.props.info}
                </div>
                <div className="server-modal-footer">
                    {this.props.footer}
                </div>
            </div>
        )
    }
}

export default ServerModal;