import React from "react";
import { connect } from "react-redux";
import SessionForm from "./sessionForm";

import { signup } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Continue",
    flavorText: "Create an account",
    outsideLinkText: "null",
    insideLinkText: "Already have an account?",
    linkTo: "/login"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm: (user) => dispatch(signup(user)),
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
        formType={this.props.formType}
        linkTo={this.props.linkTo}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
