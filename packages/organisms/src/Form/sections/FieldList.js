import React, { Component } from "react";
import PropTypes from "prop-types";
import yup from "yup";
import { compose, clone, map, values, uniq, flatten } from "ramda";
import { compact } from "../../helpers";
import { FieldArray } from "formik";
import { Section } from "@offcourse/atoms";
import { CheckpointInput, InputField, InputList } from "@offcourse/molecules";

export default class FieldList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    emptyItem: ""
  };

  formatFieldError = error => {
    return yup.object().isType(error)
      ? map(error => error.split(".")[1], values(error))
      : error;
  };

  formatFieldErrors = errors => {
    const filteredErrors = compose(
      compact,
      flatten
    )(errors);
    const formattedErrors = map(this.formatFieldError, filteredErrors);
    return compose(
      uniq,
      flatten
    )(formattedErrors);
  };

  fieldErrors = errors => {
    if (!errors) {
      return [];
    }

    return yup.string().isType(errors)
      ? [errors]
      : this.formatFieldErrors(errors);
  };

  listErrors = errors => {
    return yup.array().isType(errors) ? errors : [];
  };

  render() {
    const {
      title,
      name,
      emptyItem,
      placeholder,
      FieldComponent,
      children
    } = this.props;

    return (
      <Section>
        <FieldArray name={name}>
          {({ form, push, remove, move }) => {
            const { dirty, handleChange, values, touched, errors } = form;
            const items = values[name];
            const fieldErrors = this.fieldErrors(errors[name]);
            const listErrors = this.listErrors(errors[name]);
            return (
              <InputField errors={fieldErrors} name={name} title={title}>
                <InputList
                  arrangeable
                  title={title}
                  name={name}
                  placeholder={placeholder}
                  items={items}
                  add={() => push(clone(emptyItem))}
                  move={({ oldIndex, newIndex }) => move(oldIndex, newIndex)}
                  remove={remove}
                  errors={listErrors}
                  onChange={handleChange}
                  FieldComponent={FieldComponent}
                  onBlur={() => {}}
                />
              </InputField>
            );
          }}
        </FieldArray>
      </Section>
    );
  }
}
