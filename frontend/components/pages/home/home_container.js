import { connect } from "react-redux"
import { logout } from "../../../actions/session_actions"
import Home from "./home"

const mapStateToProps = (state) => {
    let servers = []

    for(let server in state.entities.servers) {
        servers.push(state.entities.servers[server])
    }

    return {
        currentUser: state.entities.users[state.session.id],
        servers
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)