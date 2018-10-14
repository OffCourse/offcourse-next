import React, { Component } from "react";
import PropTypes from "prop-types";
import { object, string, array } from "yup";
import {
  zipWith,
  merge,
  compose,
  clone,
  map,
  values,
  uniq,
  flatten
} from "ramda";
import { compact } from "../../helpers";
import { FieldArray } from "formik";
import { Section } from "@offcourse/atoms";
import { CheckpointInput, InputField, InputList } from "@offcourse/molecules";

const formatFieldError = ({ touched, error }) => {
  return touched && error && error.split(".")[1];
};

const formatFieldsError = errorData => {
  return object().isType(errorData)
    ? map(formatFieldError, values(errorData))
    : error;
};

const handleFieldErrors = errors => {
  const filteredErrors = compose(
    compact,
    flatten
  )(errors);
  const formattedErrors = map(
    compose(
      compact,
      formatFieldsError
    ),
    filteredErrors
  );
  return compose(
    uniq,
    flatten
  )(formattedErrors);
};

const test = (touched, errors) => {
  if (!touched || !errors) {
    return null;
  }
  const { task: tt, resourceUrl: tr } = touched;
  const { task: et, resourceUrl: er } = errors;
  return {
    task: { error: et, touched: tt },
    resourceUrl: { error: er, touched: tr }
  };
};

const createFieldErrors = (errors, touched) => {
  if (!errors || !touched) {
    return [];
  }
  const touchedErrors = zipWith(test, touched, errors);
  return string().isType(errors) ? [errors] : handleFieldErrors(touchedErrors);
};

const createListFeedback = (errors, touched) => {
  return {
    errors: array().isType(errors) ? errors : [],
    touched: array().isType(touched) ? touched : []
  };
};

export default class FieldList extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    emptyItem: ""
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
            const {
              setFieldTouched,
              handleChange,
              values,
              touched,
              errors
            } = form;
            const items = values[name];
            const fieldErrors = createFieldErrors(errors[name], touched[name]);
            const {
              errors: listErrors,
              touched: listTouched
            } = createListFeedback(errors[name], touched[name]);
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
                  touched={listTouched}
                  onChange={handleChange}
                  FieldComponent={FieldComponent}
                  onBlur={setFieldTouched}
                />
              </InputField>
            );
          }}
        </FieldArray>
      </Section>
    );
  }
}
