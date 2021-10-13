import React from "react"

import MessageItem from "./message_item"

class MessageIndex extends React.Component {
    constructor(props) {
        super(props)
        this.createConsumer = this.createConsumer.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
    }

    // componentWillReceiveProps(newProps) {
    //     console.log(this.props.currentChannel)
    //     console.log(newProps)
    // }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.currentChannel)
        this.createConsumer()
    }

    createConsumer() {
        this.cable = ActionCable.createConsumer("ws://localhost:3000/cable")
        this.channel = this.cable.subscriptions.create({
            channel: "TextChannel",
            channel_id: `${this.props.currentChannel}`
        }, {
            connected: () => {},
            received: (data) => {
                console.log(data)
            },
            sendMessage: function(userId, messageContent, channelId) {
                this.perform("sendMessage", {
                    user_id: userId,
                    content: messageContent,
                    channel_id: channelId
                })
            }
        })
    }

    sendMessage() {
        this.channel.sendMessage(1, "hello world :)", 1)
    }

    render() {
        return (
            <div className="message-index">
                <div className="message-header">

                </div>
                    <button onClick={this.sendMessage}/>
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