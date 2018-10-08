import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import MessageWrapper, { BasicMessageWrapper } from "./MessageWrapper";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

class Message extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    basic: PropTypes.bool,
    variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE])
  };

  static defaultProps = {
    variant: DEFAULT
  };

  render() {
    const { children, basic, variant } = this.props;
    return basic ? (
      <BasicMessageWrapper variant={variant}>
        {formatTitle(children)}
      </BasicMessageWrapper>
    ) : (
      <MessageWrapper px={5} py={4} variant={variant}>
        {formatTitle(children)}
      </MessageWrapper>
    );
  }
}

export default Message;
