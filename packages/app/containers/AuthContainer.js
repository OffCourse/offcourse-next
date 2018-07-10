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
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Query query={queries.auth} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.switchOverlayMode} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />,
          <Mutation mutation={mutations.signUp} />,
          <Mutation mutation={mutations.confirmSignUp} />,
          <Mutation mutation={mutations.resetPassword} />,
          <Mutation mutation={mutations.confirmNewPassword} />
        ]}
      >
        {([
          queryResult,
          authResult,
          closeOverlay,
          switchOverlayMode,
          signIn,
          signOut,
          signUp,
          confirmSignUp,
          resetPassword,
          confirmNewPassword
        ]) => {
          const { mode } = queryResult.data.overlay;
          const { needsConfirmation, userName, errors } = authResult.data.auth;
          console.log(authResult.data.auth);
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
                    if (!needsConfirmation) {
                      const { data } = await resetPassword({ variables });
                      const { authStatus } = data.resetPassword;
                      await switchOverlayMode({
                        variables: { mode: authStatus }
                      });
                    } else {
                      const { data } = await confirmNewPassword({ variables });
                      data.confirmNewPassword.authStatus === SIGNED_IN &&
                        closeOverlay();
                    }
                  }}
                  signUp={async variables => {
                    if (!needsConfirmation) {
                      const { data } = await signUp({ variables });
                      const { authStatus } = data.signUp;
                      await switchOverlayMode({
                        variables: { mode: authStatus }
                      });
                    } else {
                      const { data } = await confirmSignUp({ variables });
                      console.log(data);
                      data.confirmSignUp.authStatus === SIGNED_IN &&
                        closeOverlay();
                    }
                  }}
                  onCancel={async () => {
                    const { data } = await signOut();
                    data.signOut.authStatus === SIGNED_OUT && closeOverlay();
                  }}
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
