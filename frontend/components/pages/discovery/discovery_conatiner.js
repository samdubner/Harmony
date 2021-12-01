import { connect } from "react-redux"

import { getAllServers } from "../../../actions/server_actions"
import { joinServer } from "../../../actions/user_server_actions"

import Discovery from "./discovery"

const mapStateToProps = (state) => {

    return {
        userServers: state.entities.servers,
        servers: state.entities.allServers,
        currentUser: state.session.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllServers: (servers) => dispatch(getAllServers(servers)),
        joinServer: (joinInfo) => dispatch(joinServer(joinInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discovery)

