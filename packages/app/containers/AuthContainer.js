import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { queries, mutations } from "../graphql";
import { identity } from "ramda";
import { Query, Mutation } from "react-apollo";
import { Auth } from "@offcourse/organisms";

export default class AuthContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <Composer
        components={[
          <Query query={queries.overlay} children={identity} />,
          <Mutation mutation={mutations.closeOverlay} children={identity} />,
          <Mutation mutation={mutations.signIn} children={identity} />
        ]}
      >
        {([queryResult, closeOverlay, signIn]) => {
          return (
            <Auth
              signIn={async () => (await signIn()) && closeOverlay()}
              defaultMode={queryResult.data.overlay.mode}
              onCancel={closeOverlay}
              signUp={identity}
              resetPassword={identity}
            />
          );
        }}
      </Composer>
    );
  }
}
