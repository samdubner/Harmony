import React from "react"
import { connect } from "react-redux"
import SessionForm from "./sessionForm"

const mapStateToProps = state => {
    return {
        // user: state.entities.user[state.session.currentUser]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const LoginForm = (props) => {
    return (
        <SessionForm />
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)