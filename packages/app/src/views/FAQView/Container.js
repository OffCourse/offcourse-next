import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import { faq } from "../../content";

const Dummy = ({ children }) => {
  return children(faq);
};
/* eslint: disable */
const mapper = {
  faq: <Dummy />
};
/* eslint: enable */

const mapProps = ({ faq }) => ({ faq });

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
