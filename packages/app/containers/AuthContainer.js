import React, { Component } from "react";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { identity } from "ramda";
import { Query, Mutation } from "../components";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { authModes } from "../constants";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  SIGNED_OUT,
  SIGNED_IN
} = authModes;

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Query query={queries.auth} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />
        ]}
      >
        {([queryResult, authResult, closeOverlay, signIn, signOut]) => {
          const { mode } = queryResult.data.overlay;
          const { errors } = authResult.data.auth;
          switch (mode) {
            case SIGNING_UP:
            case SIGNING_IN:
              return (
                <Auth
                  signIn={async variables => {
                    const { data } = await signIn({ variables });
                    data.signIn.authStatus === SIGNED_IN && closeOverlay();
                  }}
                  defaultMode={queryResult.data.overlay.mode}
                  errors={errors}
                  onCancel={async () => {
                    const { data } = await signOut();
                    data.signOut.authStatus === SIGNED_OUT && closeOverlay();
                  }}
                  signUp={identity}
                  resetPassword={identity}
                />
              );
            case SIGNING_OUT:
              return (
                <SignOutDialog
                  onConfirm={async () => {
                    await signOut();
                    closeOverlay();
                  }}
                  onCancel={closeOverlay}
                />
              );
            default:
              return null;
          }
        }}
      </Composer>
    );
  }
}
