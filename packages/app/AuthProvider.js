import React, { Component } from "react";
import cognito from "./Cognito";

const SIGNED_OUT = "SIGNED_OUT";
const SIGNED_IN = "SIGNED_IN";

const defaultState = {
  authStatus: SIGNED_OUT,
  userName: "",
  accessToken: "",
  refreshToken: "",
  needsConfirmation: false,
  errors: {}
};

class AuthProvider extends Component {
  state = {
    ...defaultState
  };

  handleError = error => {
    const { errors } = this.state;
    this.setState({ errors: { ...errors, ...error } });
  };

  signIn = async authData => {
    try {
      const { userName, accessToken, refreshToken } = await cognito.signIn(
        authData
      );
      this.setState({
        authStatus: SIGNED_IN,
        userName
      });
      this.props.onSignIn({
        ...this.state
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  signUp = async authData => {
    try {
      const response = await cognito.signUp(authData);
      const { userName, password } = authData;
      this.setState({
        needsConfirmation: true,
        userName,
        password
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  confirmSignUp = async authData => {
    try {
      const response = await cognito.confirmSignUp(authData);
      const { userName, password } = this.state;
      this.signIn(authData);
    } catch (error) {
      this.handleError(error);
    }
  };

  resetPassword = async authData => {
    try {
      await cognito.resetPassword(authData);
      const { userName } = authData;
      this.setState({
        needsConfirmation: true,
        userName
      });
    } catch (error) {
      this.handleError(error);
    }
  };

  confirmNewPassword = async authData => {
    try {
      const { userName } = this.state;
      await cognito.resetPassword({ userName, ...authData });
      const { password } = authData;
      this.signIn({ userName, password });
    } catch (error) {
      this.handleError(error);
    }
  };

  signOut = async () => {
    await cognito.signOut();
    this.setState({ ...defaultState });
    const { authStatus } = this.state;
    this.props.onSignOut({ authStatus });
  };

  render() {
    const { children, ...rest } = this.props;
    const { needsConfirmation } = this.state;
    const {
      signIn,
      signOut,
      signUp,
      confirmSignUp,
      resetPassword,
      confirmNewPassword
    } = this;

    return children({
      signIn,
      signOut,
      resetPassword: needsConfirmation ? confirmNewPassword : resetPassword,
      signUp: needsConfirmation ? confirmSignUp : signUp,
      authData: this.state
    });
  }
}

AuthProvider.defaultProps = {
  onSignIn: authData => console.log(authData),
  onSignOut: authData => console.log(authData)
};

export default AuthProvider;
