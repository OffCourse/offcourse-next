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
    const { title, disabled, name } = this.props;
    return title ? (
      <Label
        color={disabled ? "grayScale.2" : "black"}
        pb={4}
        px={6}
        htmlFor={name}
      >
        {title}
      </Label>
    ) : null;
  }

  hasErrors() {
    const { errors } = this.props;
    return errors && !isEmpty(compact(errors));
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
      autoFocus,
      autoComplete,
      disabled,
      value,
      onChange,
      onBlur,
      children,
      FieldComponent,
      unformatted,
      variant
    } = this.props;

    return (
      children || (
        <FieldComponent
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          unformatted={unformatted}
          mb={3}
          hasErrors={this.hasErrors()}
          variant={variant}
        />
      )
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
