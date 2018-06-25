import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { identity } from "ramda";
import { Query, Mutation } from "react-apollo";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { overlayModes } from "../constants";

const { SIGNING_IN, SIGNING_UP, SIGNING_OUT } = overlayModes;

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Composer
        components={[
          <Query query={queries.overlay} children={identity} />,
          <Mutation mutation={mutations.closeOverlay} children={identity} />,
          <Mutation mutation={mutations.signIn} children={identity} />,
          <Mutation mutation={mutations.signOut} children={identity} />
        ]}
      >
        {([queryResult, closeOverlay, signIn, signOut]) => {
          const { mode } = queryResult.data.overlay;
          switch (mode) {
            case SIGNING_UP:
            case SIGNING_IN:
              return (
                <Auth
                  signIn={async ({ userName }) =>
                    (await signIn({ userName })) && closeOverlay()
                  }
                  defaultMode={queryResult.data.overlay.mode}
                  onCancel={closeOverlay}
                  signUp={identity}
                  resetPassword={identity}
                />
              );
            case SIGNING_OUT:
              return (
                <SignOutDialog
                  onConfirm={async () => (await signOut()) && closeOverlay()}
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
