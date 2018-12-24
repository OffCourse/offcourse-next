import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import { introduction } from "../../content";

const Dummy = ({ children }) => {
  return children(introduction);
};
/* eslint: disable */
const mapper = {
  introduction: <Dummy />
};
/* eslint: enable */

const mapProps = ({ introduction }) => ({ introduction });

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
