import { connect } from "react-redux"

import { updateColor } from "../../../actions/session_actions"

import ColorModal from "./color_modal"

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
        users: state.entities.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateColor: (userInfo) => dispatch(updateColor(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorModal)