import React, { Component } from "react";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { identity } from "ramda";
import { Query, Mutation } from "../components";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { overlayModes } from "../constants";

const { SIGNING_IN, SIGNING_UP, SIGNING_OUT } = overlayModes;

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />
        ]}
      >
        {([queryResult, closeOverlay, signIn, signOut]) => {
          const { mode } = queryResult.data.overlay;
          switch (mode) {
            case SIGNING_UP:
            case SIGNING_IN:
              return (
                <Auth
                  signIn={async ({ userName }) => {
                    await signIn({ variables: { userName } });
                    closeOverlay();
                  }}
                  defaultMode={queryResult.data.overlay.mode}
                  onCancel={closeOverlay}
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
