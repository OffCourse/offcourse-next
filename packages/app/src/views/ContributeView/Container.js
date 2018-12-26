import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import { ContentContainer } from "../../containers";

/* eslint: disable */
const mapper = {
  contribute: <ContentContainer term="contribute" />
};
/* eslint: enable */

const mapProps = ({ contribute }) => ({ contribute });

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
