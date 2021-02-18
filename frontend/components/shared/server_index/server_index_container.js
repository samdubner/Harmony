import { connect } from "react-redux"
import { setModal } from "../../../actions/ui_actions"
import { getUserServers } from "../../../actions/server_actions"
import ServerIndex from "./server_index"

const mapStateToProps = state => {
    let servers = []

    for(let server in state.entities.servers) {
        servers.push(state.entities.servers[server])
    }

    return {
        modalState: state.ui.server.modalState,
        servers,
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        promptModal: () => dispatch(setModal("prompt")),
        closeModal: () => dispatch(setModal("closed")),
        fetchServers: (user) => dispatch(getUserServers(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)