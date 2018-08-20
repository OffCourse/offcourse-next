import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { authModes } from "@offcourse/constants";

export default class AuthProvider extends Component {
  static constants = authModes;
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.auth} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />,
          <Mutation mutation={mutations.signUp} />,
          <Mutation mutation={mutations.confirmSignUp} />,
          <Mutation mutation={mutations.resetPassword} />,
          <Mutation mutation={mutations.confirmNewPassword} />
        ]}
      >
        {([
          authResponse,
          signIn,
          signOut,
          signUp,
          confirmSignUp,
          resetPassword,
          confirmNewPassword
        ]) => {
          const value = {
            ...authResponse.data.auth,
            signIn,
            signOut,
            signUp,
            confirmNewPassword,
            resetPassword
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
