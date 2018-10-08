import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "ramda";
import { mapIndexed } from "../helpers";
import { Message } from "@offcourse/atoms";
import MessageGroupWrapper from "./MessageGroupWrapper";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

export default class MessageGroup extends Component {
  static Message = Message;
  static variants = Message.variants;

  static formatMessages = (errors = [], { variant = NEGATIVE, px } = {}) => {
    return map(message => {
      return { message, variant, px };
    }, errors);
  };

  static propTypes = {
    basic: PropTypes.bool,
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE])
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    messages: [],
    errors: []
  };

  renderMessages = () => {
    const { messages, basic } = this.props;
    return mapIndexed(
      ({ message, variant, px }, index) => (
        <Message px={px} basic={basic} variant={variant} key={index}>
          {message}
        </Message>
      ),
      messages
    );
  };

  render() {
    const { messages, px, pb, children } = this.props;
    return (
      <MessageGroupWrapper px={px} pb={pb} alignItems="stretch">
        {!isEmpty(messages) && this.renderMessages()}
        {children}
      </MessageGroupWrapper>
    );
  }
}
