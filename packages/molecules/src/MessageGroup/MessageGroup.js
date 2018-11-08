import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "ramda";
import { mapIndexed } from "../helpers";
import { Message } from "@offcourse/atoms";
import MessageGroupWrapper from "./MessageGroupWrapper";
import { variants } from "@offcourse/constants";

const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const formatMessages = (errors = [], { variant = NEGATIVE, px } = {}) => {
  return map(message => {
    return { message, variant, px };
  }, errors);
};

class MessageGroup extends Component {
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

MessageGroup.Message = Message;
MessageGroup.formatMessages = formatMessages;

MessageGroup.propTypes = {
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

MessageGroup.defaultProps = {
  messages: [],
  errors: []
};

export default MessageGroup;
