import { connect } from "react-redux"
import ServerModal from "./server_modal"

const mapStateToProps = state => {
    return {
        invite: state.ui.server.serverInvite
        // invite: state.ui.server.serverInvite
    }
}

export default connect(mapStateToProps, null)(ServerModal)