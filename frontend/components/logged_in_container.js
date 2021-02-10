import {connect} from "react-redux"
import {logout} from "../actions/session_actions"
import LoggedIn from "./loggedIn"

const mapStateToProps = (state) => {
    // debugger
    // debugger
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn)