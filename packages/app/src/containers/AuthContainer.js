import React, { useContext } from "react";
import { AppStateContext } from "../contexts";
import { Auth, SignOutDialog } from "@offcourse/organisms";
import { authModes } from "@offcourse/constants";

const { SIGNING_IN, SIGNING_UP, SIGNING_OUT, RESETTING_PASSWORD } = authModes;

const AuthContainer = () => {
  const { overlay, auth, flash } = useContext(AppStateContext);
  switch (overlay.mode) {
    case SIGNING_UP:
    case SIGNING_IN:
    case RESETTING_PASSWORD:
      return (
        <Auth
          userName={auth.userName}
          onModeSwitch={variables => overlay.switchMode({ variables })}
          defaultMode={overlay.mode}
          needsConfirmation={auth.needsConfirmation}
          errors={auth.errors}
          signIn={async variables => {
            const { data } = await auth.signIn({ variables });
            const { authStatus } = data.signIn;
            if (authStatus === "SIGNED_IN") {
              await flash.success("you are now signed in");
              await overlay.close();
            }
          }}
          resetPassword={async variables => {
            if (!auth.needsConfirmation) {
              await auth.resetPassword({ variables });
            } else {
              const { data } = await auth.confirmNewPassword({
                variables
              });
              const { authStatus } = data.confirmNewPassword;
              if (authStatus === "SIGNED_IN") {
                await flash.success("you are password is reset");
                await overlay.close();
              }
            }
          }}
          signUp={async variables => {
            if (!auth.needsConfirmation) {
              await auth.signUp({ variables });
            } else {
              const { data } = await auth.confirmSignUp({ variables });
              const { authStatus } = data.confirmSignUp;
              if (authStatus === "SIGNED_IN") {
                await flash.success("you are now signed in");
                await overlay.close();
              }
            }
          }}
          onCancel={async () => {
            await auth.signOut();
            await flash.info("you are now signed out");
            await overlay.close();
          }}
        />
      );
    case SIGNING_OUT:
      return (
        <SignOutDialog
          onConfirm={async () => {
            await auth.signOut();
            await flash.info("you are now signed out");
            await overlay.close();
          }}
          onCancel={overlay.close}
        />
      );
    default:
      return null;
  }
};

export default AuthContainer;
