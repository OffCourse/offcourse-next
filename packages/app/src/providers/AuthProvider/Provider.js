import React from "react";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../../components";
import { cognito } from "./adapters";
import { authModes } from "@offcourse/constants";
import { queries, mutations } from "./graphql";

const mapper = {
  authQuery: <Query query={queries.auth} />,
  signIn: <Mutation mutation={mutations.signIn} />,
  signOut: <Mutation mutation={mutations.signOut} />,
  signUp: <Mutation mutation={mutations.signUp} />,
  confirmSignUp: <Mutation mutation={mutations.confirmSignUp} />,
  resetPassword: <Mutation mutation={mutations.resetPassword} />,
  confirmNewPassword: <Mutation mutation={mutations.confirmNewPassword} />
};

const mapProps = ({
  authQuery,
  signIn,
  signOut,
  signUp,
  confirmNewPassword,
  resetPassword,
  confirmSignUp
}) => ({
  ...authQuery.data.auth,
  signIn,
  signOut,
  signUp,
  confirmNewPassword,
  resetPassword,
  confirmSignUp
});

const AuthProvider = adopt(mapper, mapProps);

AuthProvider.constants = authModes;
AuthProvider.currentUser = cognito.currentUser;

export default AuthProvider;
