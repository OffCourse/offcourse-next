import React, { Component } from "react";
import PropTypes from "prop-types";
import { formatTitle, lowerCase } from "../helpers";
import { Group } from "..";
import { InputWrapper, OuterWrapper, TextAreaWrapper } from "./wrappers";

class Input extends Component {
  handleChange = e => {
    const { onChange } = this.props;
    const value = lowerCase(e.target.value);
    e.target.value = value;
    onChange(e);
  };
  render() {
    const {
      mb,
      pt,
      pb,
      variant,
      children,
      hasErrors,
      name,
      value,
      placeholder,
      type,
      onChange,
      onBlur
    } = this.props;

    return (
      <OuterWrapper border={hasErrors ? 2 : 0} pb={pb} pt={pt} mb={mb}>
        {variant === "textarea" ? (
          <TextAreaWrapper
            is="textarea"
            rows="4"
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
          />
        ) : (
          <InputWrapper
            name={name}
            type={type}
            value={value && formatTitle(value)}
            placeholder={formatTitle(placeholder)}
            onChange={onChange && this.handleChange}
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
  /** name of the input */
  name: PropTypes.string.isRequired,
  /** value of the input, if you set this, onChange is required*/
  value: PropTypes.string,
  /** callback that is triggered when the field changes its value */
  onChange: PropTypes.func,
  /** placeholder for absent value */
  placeholder: PropTypes.string,
  /** callback that is triggered when the field loses focus */
  onBlur: PropTypes.func,
  /** property that indicates if the field has erors */
  hasErrors: PropTypes.bool,
  /** property that changes the visual representation of the field */
  variant: PropTypes.oneOf(["default", "textarea", "small"])
};

Input.defaultProps = {
  variant: "default"
};

export default Input;
