import { connect } from "react-redux"
import { setModal } from "../../../actions/ui_actions"
import ServerIndex from "./server_index"

const mapStateToProps = state => {
    return {
        modalState: state.ui.server.modalState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        promptModal: () => dispatch(setModal("prompt")),
        closeModal: () => dispatch(setModal("closed"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)