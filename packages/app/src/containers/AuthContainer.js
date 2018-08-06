import React, { Component } from "react";
import Composer from "react-composer";
import { identity } from "ramda";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { OverlayProvider, AuthProvider, FlashProvider } from "../providers";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  RESETTING_PASSWORD,
} = AuthProvider.constants;

export default class AuthContainer extends Component {
  render() {
    return (
      <Composer
        components={[<OverlayProvider />, <AuthProvider />, <FlashProvider />]}
      >
        {([{ mode, close, switchMode },
          { constants, needsConfirmation, userName, errors, signIn, signOut, signUp, confirmSignUp, confirmNewPassword, resetPassword },
          { push }]) => {

          switch (mode) {
            case SIGNING_UP:
            case SIGNING_IN:
            case RESETTING_PASSWORD:
              return (
                <Auth
                  userName={userName}
                  onModeSwitch={variables => switchMode({ variables })}
                  defaultMode={mode}
                  needsConfirmation={needsConfirmation}
                  errors={errors}
                  signIn={async (variables) => {
                    const { data } = await signIn({ variables });
                    const { authStatus } = data.signIn;
                    if (authStatus === "SIGNED_IN") {
                      await push({ variables: { variant: "success", message: "you are now signed in" } });
                      await close();
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
                          await push({ variables: { variant: "success", message: "you are password is reset" } });
                          await close();
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
                          await push({ variables: { variant: "success", message: "you are now signed up" } });
                          await close();
                        }
                      }
                    }
                  }
                  onCancel={async () => {
                    await signOut();
                    await push({ variables: { variant: "warning", message: "you are now signed out" } });
                    await close();
                  }}
                />
              );
            case SIGNING_OUT:
              return (
                <SignOutDialog
                  onConfirm={async () => {
                    await signOut();
                    await push({ variables: { variant: "warning", message: "you are now signed out" } });
                    await close();
                  }}
                  onCancel={close}
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