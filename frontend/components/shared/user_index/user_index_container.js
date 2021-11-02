import { connect } from "react-redux"

import { createFriendRequest } from "../../../actions/friend_request_actions"

import UserIndex from "./user_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        friendRequests: state.entities.friendRequests
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createFriendRequest: (requestData) => dispatch(createFriendRequest(requestData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)