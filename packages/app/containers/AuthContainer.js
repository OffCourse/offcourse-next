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
} = authModes;

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Query query={queries.auth} />,
          <Mutation mutation={mutations.addMessage} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.switchOverlayMode} />,
          <Mutation mutation={mutations.signIn} />,
          <Mutation mutation={mutations.signOut} />,
          <Mutation mutation={mutations.signUp} />,
          <Mutation mutation={mutations.confirmSignUp} />,
          <Mutation mutation={mutations.resetPassword} />,
          <Mutation mutation={mutations.confirmNewPassword} />,
        ]}
      >
        {([
          queryResult,
          authResult,
          addMessage,
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
                  signIn={async (variables) => {
                    const { data } = await signIn({ variables });
                    const { authStatus } = data.signIn;
                    if (authStatus === "SIGNED_IN") {
                      await addMessage({ variables: { variant: "success", message: "you are now signed in" } });
                      await closeOverlay();
                    }
                  }}
                  resetPassword={
                    async variables => {
                      if (!needsConfirmation) {
                        await resetPassword({ variables });
                      } else {
                        const { data } = await confirmNewPassword({ variables })
                        const { authStatus } = data.confirmNewPassword;
                        if (authStatus === "SIGNED_IN") {
                          await addMessage({ variables: { variant: "success", message: "you are password is reset" } });
                          await closeOverlay();
                        }
                      }
                    }
                  }
                  signUp={
                    async variables => {
                      if (!needsConfirmation) {
                        await signUp({ variables });
                      } else {
                        const { data } = await confirmSignUp({ variables })
                        const { authStatus } = data.confirmSignUp;
                        if (authStatus === "SIGNED_IN") {
                          await addMessage({ variables: { variant: "success", message: "you are now signed up" } });
                          await closeOverlay();
                        }
                      }
                    }
                  }
                  onCancel={async () => {
                    await signOut();
                    await addMessage({ variables: { variant: "warning", message: "you are now signed out" } });
                    await closeOverlay();
                  }}
                />
              );
            case SIGNING_OUT:
              return (
                <SignOutDialog
                  onConfirm={async () => {
                    await signOut();
                    await addMessage({ variables: { variant: "warning", message: "you are now signed out" } });
                    await closeOverlay();
                  }}
                  onCancel={closeOverlay}
                />
              );
            default:
              return null;
          }
        }}
      </Composer >
    );
  }
}