import {connect} from "react-redux"

import { deleteMessage, clearMessages } from "../../../actions/message_actions"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: (message) => dispatch(deleteMessage(message)),
        clearMessages: () => dispatch(clearMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)