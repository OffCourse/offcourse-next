import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";

const Dummy = ({ children }) => {
  return children({
    message: "Welcome to Offcourse. Wanna FAQ More...",
    explanation: "Real text coming soon..."
  });
};
/* eslint: disable */
const mapper = {
  about: <Dummy />
};
/* eslint: enable */

const mapProps = ({ about }) => ({ about });

export default class Container extends Component {
  render() {
    const { handlers } = this.props;
    return (
      <Adopt mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
