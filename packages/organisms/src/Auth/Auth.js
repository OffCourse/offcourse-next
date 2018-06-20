import React, { Component } from "react";
import PropTypes from "prop-types";
import { curry } from "ramda";
import SignInForm from "../SignInForm";
import PasswordRetrievalForm from "../PasswordRetrievalForm";
import SignUpForm from "../SignUpForm";

const SIGNING_IN = "SIGNING_IN";
const SIGNING_UP = "SIGNING_UP";
const RETRIEVING_PASSWORD = "RETRIEVING_PASSWORD";

const formComponents = {
  RETRIEVING_PASSWORD: PasswordRetrievalForm,
  SIGNING_IN: SignInForm,
  SIGNING_UP: SignUpForm
};

class Auth extends Component {
  static propTypes = {
    defaultMode: PropTypes.oneOf([SIGNING_IN, SIGNING_UP, RETRIEVING_PASSWORD]),
    needsConfirmation: PropTypes.bool,
    errors: PropTypes.object,
    signUp: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired
  };

  static defaultProps = {
    defaultMode: SIGNING_IN,
    needsConfirmation: false,
    onCancel: () => null
  };

  state = {
    mode: this.props.defaultMode,
    userName: ""
  };

  switchTo = (newMode, { userName }) => {
    this.setState({
      mode: newMode,
      userName: newMode === SIGNING_IN ? "" : userName
    });
  };

  reset = () => {
    const { onCancel, defaultMode } = this.props;
    this.switchTo(defaultMode, { userName: "" });
    onCancel();
  };

  linkData = () => {
    const { mode } = this.state;
    const switchTo = curry(this.switchTo);

    const SignIn = {
      onClick: switchTo(SIGNING_IN),
      title: "Sign In"
    };
    const SignUp = {
      onClick: switchTo(SIGNING_UP),
      title: "Sign Up"
    };
    const RetrievePassword = {
      onClick: switchTo(RETRIEVING_PASSWORD),
      title: "Password Lost"
    };

    const modes = {
      SIGNING_IN: [SignUp, RetrievePassword],
      SIGNING_UP: [SignIn],
      RETRIEVING_PASSWORD: [SignIn]
    };

    return modes[mode];
  };

  submitHandler = () => {
    const { mode } = this.state;
    const { resetPassword, signUp, signIn } = this.props;
    const modes = {
      SIGNING_IN: signIn,
      SIGNING_UP: signUp,
      RETRIEVING_PASSWORD: resetPassword
    };

    return modes[mode];
  };

  render() {
    const { userName, mode } = this.state;
    const { needsConfirmation, errors } = this.props;
    const FormComponent = formComponents[mode];

    return (
      <FormComponent
        errors={errors}
        mode={needsConfirmation ? "confirm" : "normal"}
        userName={userName}
        links={this.linkData()}
        onCancel={this.reset}
        onSubmit={this.submitHandler()}
      />
    );
  }
}

export default Auth;
