import {connect} from "react-redux"

import { deleteMessage } from "../../../actions/message_actions"

import MessageIndex from "./message_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        users: state.entities.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteMessage: (message) => dispatch(deleteMessage(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)