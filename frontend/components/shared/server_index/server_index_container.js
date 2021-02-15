import { connect } from "react-redux"
import { toggleModal } from "../../../actions/ui_actions"
import ServerIndex from "./server_index"

const mapStateToProps = state => {
    return {
        modalOpen: state.ui.server.modalOpen
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: () => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)