 import { connect } from "react-redux"

import { createFriendRequest } from "../../../actions/friend_request_actions"
import { joinGroup } from "../../../actions/user_group_actions"

import UserIndex from "./user_index"

const mapStateToProps = state => {
    return {
        currentUser: state.session.id,
        friendRequests: state.entities.friendRequests,
        friends: state.entities.friendships
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createFriendRequest: (requestData) => dispatch(createFriendRequest(requestData)),
        addToGroup: (groupInfo) => dispatch(joinGroup(groupInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserIndex)