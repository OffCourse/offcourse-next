import React, { Component } from "react";
import { Modal } from "@offcourse/molecules";
import { Query, Mutation } from "react-apollo";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { Auth } from "@offcourse/organisms";

export default class OverlayContainer extends Component {
  render() {
    const handler = message => alert(JSON.stringify(message, null, 2));
    const nullHandler = () => null;
    return (
      <Composer
        components={[
          <Query query={queries.overlay} children={nullHandler} />,
          <Mutation mutation={mutations.closeOverlay} children={nullHandler} />
        ]}
      >
        {([queryResult, closeOverlay]) => {
          const { overlay } = queryResult.data;
          return (
            <Modal close={closeOverlay} isOpen={overlay.isOpen}>
              <Auth
                signIn={handler}
                initialUserName="yeehaa"
                onCancel={closeOverlay}
                signUp={handler}
                resetPassword={handler}
              />
            </Modal>
          );
        }}
      </Composer>
    );
  }
}
