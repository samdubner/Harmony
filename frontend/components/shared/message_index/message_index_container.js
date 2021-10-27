import {connect} from "react-redux"

import {receiveMessage, deleteMessage } from "../../../actions/message_actions"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        messages: state.entities.messages,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveMessage: (message) => dispatch(receiveMessage(message)),
        deleteMessage: (message) => dispatch(deleteMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)