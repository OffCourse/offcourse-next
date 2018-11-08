import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle, lowerCase } from "../helpers";
import { Group } from "..";
import { InputWrapper, OuterWrapper, TextAreaWrapper } from "./wrappers";

class Input extends Component {
  formatValue() {
    const { value, unformatted } = this.props;
    if (!value) {
      return value;
    }
    return unformatted ? value : formatTitle(value);
  }

  handleChange = e => {
    const { onChange } = this.props;
    const value = lowerCase(e.target.value);
    e.target.value = value;
    onChange(e);
  };

  render() {
    const {
      autoComplete,
      autoFocus,
      mb,
      pt,
      pb,
      variant,
      disabled,
      children,
      hasErrors,
      name,
      value,
      placeholder,
      unformatted,
      type,
      onChange,
      onBlur
    } = this.props;

    return (
      <OuterWrapper border={hasErrors ? 2 : 0} pb={pb} pt={pt} mb={mb}>
        {variant === "textarea" ? (
          <TextAreaWrapper
            is="textarea"
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            rows="4"
            name={name}
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <InputWrapper
            name={name}
            type={type}
            autoComplete={`${autoComplete}`}
            autoFocus={autoFocus}
            disabled={disabled}
            value={this.formatValue()}
            placeholder={formatTitle(placeholder)}
            onChange={onChange && !unformatted ? this.handleChange : onChange}
            onBlur={onBlur}
            fontSize={variant === "small" ? 1 : 3}
            lineHeight={variant === "small" ? 1 : 3}
          />
        )}

        {children && (
          <Group px={6} alignItems="flex-end">
            {children}
          </Group>
        )}
      </OuterWrapper>
    );
  }
}

Input.propTypes = {
  autoComplete: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  hasErrors: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "textarea", "small"]),
  mb: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  unformatted: PropTypes.bool,
  type: PropTypes.string
};

Input.defaultProps = {
  variant: "default"
};

export default Input;
