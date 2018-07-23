import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle } from "../helpers";
import { Label } from "..";
import MessageWrapper from "./MessageWrapper";

const background = {
  default: "grayScale.3",
  info: "primary",
  warning: "warning",
  success: "positive",
  error: "negative"
};

const textColor = {
  default: "white",
  error: "white",
  info: "white",
  warning: "text",
  success: "text"
};

class Message extends Component {
  render() {
    const { children, basic, variant } = this.props;
    const color = basic ? background[variant] : textColor[variant];
    return (
      <MessageWrapper
        px={basic ? 0 : 5}
        py={basic ? 0 : 4}
        bg={basic ? null : background[variant]}
        color={color}
      >
        {variant !== "default" && (
          <Label color={color} is="span">
            {variant}
          </Label>
        )}
        {formatTitle(children)}
      </MessageWrapper>
    );
  }
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  basic: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "error", "info", "success", "warning"])
};

Message.defaultProps = {
  variant: "default"
};

export default Message;
