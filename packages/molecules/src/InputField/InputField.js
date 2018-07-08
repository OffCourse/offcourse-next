import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { compact, formatTitle } from "../helpers";
import { Label, Input } from "@offcourse/atoms";
import { MessageGroup } from "..";
import InputFieldWrapper from "./InputFieldWrapper";

export default class InputField extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    touched: PropTypes.array,
    errors: PropTypes.array,
    variant: PropTypes.oneOf(["default", "textarea", "small"]),
    FieldComponent: PropTypes.func
  };

  static defaultProps = {
    FieldComponent: Input,
    errors: [],
    touched: []
  };

  renderLabel() {
    const { title, name } = this.props;
    return title ? (
      <Label pb={4} px={6} htmlFor={name}>
        {title}
      </Label>
    ) : null;
  }

  hasErrors() {
    const { errors } = this.props;
    return !isEmpty(compact(errors));
  }

  renderErrors() {
    const { errors } = this.props;

    return this.hasErrors() ? (
      <MessageGroup
        px={6}
        pb={6}
        basic
        messages={MessageGroup.formatMessages(errors)}
      />
    ) : null;
  }

  renderChildren() {
    const {
      name,
      placeholder,
      value,
      onChange,
      onBlur,
      children,
      FieldComponent,
      variant
    } = this.props;

    return children ? (
      children
    ) : (
      <FieldComponent
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        mb={3}
        hasErrors={this.hasErrors()}
        variant={variant}
      />
    );
  }

  render() {
    return (
      <InputFieldWrapper>
        {this.renderLabel()}
        {this.renderErrors()}
        {this.renderChildren()}
      </InputFieldWrapper>
    );
  }
}
