import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "ramda";
import { compact, mapIndexed } from "../helpers";
import { Message } from "@offcourse/atoms";
import MessageGroupWrapper from "./MessageGroupWrapper";

export default class MessageGroup extends Component {
  static Message = Message;

  static formatMessages = (errors = [], { variant = "error", px } = {}) => {
    return map(message => {
      return { message, variant, px };
    }, errors);
  };

  static propTypes = {
    messages: PropTypes.arrayOf(
      PropTypes.shape({
        message: PropTypes.string.isRequired,
        variant: PropTypes.oneOf([
          "default",
          "error",
          "info",
          "success",
          "warning"
        ])
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
    const { messages, errors, px, pb, children } = this.props;
    return (
      <MessageGroupWrapper px={px} pb={pb} alignItems="stretch">
        {!isEmpty(messages) && this.renderMessages()}
        {children}
      </MessageGroupWrapper>
    );
  }
}
