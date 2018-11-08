import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { compact } from "../helpers";
import { Label, Input } from "@offcourse/atoms";
import { MessageGroup } from "..";
import InputFieldWrapper from "./InputFieldWrapper";

class InputField extends PureComponent {
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

  renderErrors() {
    const { errors } = this.props;
    const hasErrors = errors && !isEmpty(compact(errors));

    return hasErrors ? (
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
      errors,
      FieldComponent,
      unformatted,
      variant
    } = this.props;
    const hasErrors = errors && !isEmpty(compact(errors));

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
          hasErrors={hasErrors}
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

InputField.propTypes = {
  disabled: PropTypes.bool,
  unformatted: PropTypes.bool,
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  errors: PropTypes.array,
  variant: PropTypes.oneOf(["default", "textarea", "small"]),
  FieldComponent: PropTypes.func,
  children: PropTypes.node
};

InputField.defaultProps = {
  FieldComponent: Input,
  errors: []
};

export default InputField;
