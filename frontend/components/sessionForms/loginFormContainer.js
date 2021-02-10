import React from "react"
import { connect } from "react-redux"
import SessionForm from "./sessionForm"

import { login } from "../../actions/session_actions"

const mapStateToProps = state => {
    return {
        formType: "Login",
        flavorText: "Welcome back!",
        outsideLinkText: "Need an account?",
        insideLinkText: "Register",
        linkTo: "/signup"
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
            <SessionForm 
                outsideLinkText={this.props.outsideLinkText}
                insideLinkText={this.props.insideLinkText}
                flavorText={this.props.flavorText}
                submitForm={this.props.submitForm}
                formType={this.props.formType}
                linkTo={this.props.linkTo}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)