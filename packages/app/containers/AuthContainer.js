import React, { Component } from "react";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { identity } from "ramda";
import { Query, Mutation } from "../components";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { authModes } from "@offcourse/constants";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  RESETTING_PASSWORD,
  SIGNED_OUT,
  SIGNED_IN
} = authModes;

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    console.log(mutations.resetPassword);
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Query query={queries.auth} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.switchOverlayMode} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />,
          <Mutation mutation={mutations.resetPassword} />
        ]}
      >
        {([
          queryResult,
          authResult,
          closeOverlay,
          switchOverlayMode,
          signIn,
          signOut,
          resetPassword
        ]) => {
          console.log(queryResult);
          const { userName, mode } = queryResult.data.overlay;
          const { needsConfirmation, errors } = authResult.data.auth;
          switch (mode) {
            case SIGNING_UP:
            case SIGNING_IN:
            case RESETTING_PASSWORD:
              return (
                <Auth
                  userName={userName}
                  onModeSwitch={variables => switchOverlayMode({ variables })}
                  defaultMode={queryResult.data.overlay.mode}
                  needsConfirmation={needsConfirmation}
                  errors={errors}
                  signIn={async variables => {
                    const { data } = await signIn({ variables });
                    data.signIn.authStatus === SIGNED_IN && closeOverlay();
                  }}
                  resetPassword={async variables => {
                    const { userName } = variables;
                    if (needsConfirmation) {
                      console.log(variables);
                    } else {
                      const { data } = await resetPassword({ variables });
                      console.log(data.resetPassword.authStatus);
                      switchOverlayMode({ variables });
                    }
                  }}
                  onCancel={async () => {
                    const { data } = await signOut();
                    data.signOut.authStatus === SIGNED_OUT && closeOverlay();
                  }}
                  signUp={identity}
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
