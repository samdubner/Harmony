import {connect} from "react-redux"

import { getChannelMessages, receiveMessage, deleteMessage } from "../../../actions/message_actions"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentChannel: state.ui.server.currentChannel,
        currentUser: state.session.id,
        messages: state.entities.messages,
        users: state.entities.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        getChannelMessages: (channel) => dispatch(getChannelMessages(channel)),
        deleteMessage: (message) => dispatch(deleteMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)