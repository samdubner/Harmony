import {connect} from "react-redux"

import { deleteMessage, clearMessages } from "../../../actions/message_actions"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        users: state.entities.users,
        groups: state.entities.groups,
        channels: state.entities.channels
    }
}

const mapDispatchToProps = dispatch => {
    return {
        clearMessages: () => dispatch(clearMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)