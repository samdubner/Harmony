import React from "react"

class GroupIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

        this.setCurrentChannel = this.setCurrentChannel.bind(this)
    }

    setCurrentChannel() {
        this.props.setCurrentChannel(this.props.id)
    }

    render() {
        return (
            <div className="channel" onClick={this.setCurrentChannel}>
                <h1 className="text-indicator">#</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }

}

export default GroupIndexItem