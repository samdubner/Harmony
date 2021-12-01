    import { connect } from "react-redux"

import { updateColor } from "../../../actions/session_actions"
import { setColorModal } from "../../../actions/ui_actions"

import ColorModal from "./color_modal"

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.id,
        users: state.entities.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateColor: (userInfo) => dispatch(updateColor(userInfo)),
        closeColorModal: () => dispatch(setColorModal(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ColorModal)