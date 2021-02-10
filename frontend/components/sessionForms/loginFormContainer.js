import React from "react"
import { connect } from "react-redux"
import SessionForm from "./sessionForm"

import { login, clearErrors } from "../../actions/session_actions"

const mapStateToProps = state => {
    return {
        formType: "Login",
        flavorText: "Welcome back!",
        outsideLinkText: "Need an account?",
        insideLinkText: "Register",
        linkTo: "/signup",
        errors: state.errors.session.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitForm: user => dispatch(login(user)),
        clearErrors: () => dispatch(clearErrors())
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
            clearErrors={this.props.clearErrors}
            formType={this.props.formType}
            linkTo={this.props.linkTo}
            errors={this.props.errors}
          />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)