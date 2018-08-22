import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";
import { overlayModes } from "@offcourse/constants";

export default class OverlayProvider extends Component {
  static constants = overlayModes;
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.overlay} />,
          <Mutation mutation={mutations.openOverlay} />,
          <Mutation mutation={mutations.closeOverlay} />,
          <Mutation mutation={mutations.switchOverlayMode} />
        ]}
      >
        {([queryResult, openOverlay, closeOverlay, switchOverlayMode]) => {
          const open = variables => openOverlay({ variables });
          const value = {
            ...queryResult.data.overlay,
            open,
            close: closeOverlay,
            switchMode: switchOverlayMode
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
