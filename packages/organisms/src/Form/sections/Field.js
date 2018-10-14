import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { Section } from "@offcourse/atoms";
import { InputField } from "@offcourse/molecules";

class FormField extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    unformatted: PropTypes.bool
  };

  render() {
    const {
      name,
      FieldComponent,
      autoFocus,
      autoComplete,
      unformatted,
      disabled,
      variant,
      title,
      placeholder
    } = this.props;
    return (
      <Section>
        <Field
          name={name}
          render={({ field, form }) => {
            const { errors, touched } = form;
            return (
              <InputField
                {...field}
                unformatted={unformatted}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                disabled={disabled}
                FieldComponent={FieldComponent}
                variant={variant}
                title={title}
                errors={touched[name] && errors[name] && [errors[name]]}
                placeholder={placeholder}
              />
            );
          }}
        />
      </Section>
    );
  }
}

export default FormField;
