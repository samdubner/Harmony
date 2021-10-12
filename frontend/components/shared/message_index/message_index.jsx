import React from "react"

import MessageItem from "./message_item"

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillReceiveProps(newProps) {
    //     console.log(this.props.currentChannel)
    //     console.log(newProps)
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.currentChannel)
    }

    // componentDidMount() {
    //     console.log(this.props.currentChannel)
    // }

    render() {
        return (
            <div className="message-index">
                <div className="message-header">

                </div>
                <div>

                </div>
                <div className="message-area">
                    <input type="text" />
                </div>
            </div>
        )
    }
}

export default MessageIndex;