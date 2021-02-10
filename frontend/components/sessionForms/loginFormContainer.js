import React from "react"
import { connect } from "react-redux"
import SessionForm from "./sessionForm"

import { login } from "../../actions/session_actions"

const mapStateToProps = state => {
    return {
        // user: state.entities.user[state.session.currentUser]
        formType: "Login",
        flavorText: "Welcome back!"
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: user => dispatch(login(user))
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <SessionForm flavorText={this.props.flavorText} submitForm={this.props.submitForm} formType={this.props.formType}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)