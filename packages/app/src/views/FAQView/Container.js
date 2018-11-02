import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import questions from "./questions.yaml";

const Dummy = ({ children }) => {
  return children({
    title: "Frequently Asked Questions",
    questions
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
    console.log(questions);

    const { handlers } = this.props;
    return (
      <Adopt mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
