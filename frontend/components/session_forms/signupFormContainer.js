import React from "react";
import { connect } from "react-redux";
import SessionForm from "./sessionForm";

import { signup, clearErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Continue",
    flavorText: "Create an account",
    outsideLinkText: "",
    insideLinkText: "Already have an account?",
    linkTo: "/login",
    errors: state.errors.session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
