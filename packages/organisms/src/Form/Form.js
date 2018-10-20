import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import Shell from "./Shell";
import { Field, FieldList } from "./sections";
import { sizes, variants } from "@offcourse/constants";
import * as yup from "yup";
import trim from "voca/trim";
import { map } from "ramda";

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const formatValues = values => {
  return map(value => {
    return yup.array().isType(value) || yup.object().isType(value)
      ? formatValues(value)
      : trim(value);
  }, values);
};

export default class Form extends Component {
  static Field = Field;
  static FieldList = FieldList;
  static yup = yup;

  static propTypes = {
    /** model for the form */
    Model: PropTypes.func,
    /** predefined values for the form */
    values: PropTypes.object,
    /** title of the form */
    title: PropTypes.string.isRequired,
    /** object with external errors */
    errors: PropTypes.object,
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    ),
    buttons: PropTypes.objectOf(
      PropTypes.shape({
        href: PropTypes.string,
        type: PropTypes.string,
        size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
        onClick: PropTypes.func,
        title: PropTypes.string,
        variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE])
      })
    ),
    mode: PropTypes.string,
    cancelTitle: PropTypes.string,
    submitTitle: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  };

  static defaultProps = {
    mode: "normal",
    values: {}
  };

  renderElements(props) {
    const { children, title, ...rest } = this.props;
    return Children.map(children, (child, i) => {
      if (i === 0) {
        return (
          child &&
          React.cloneElement(child, { ...rest, ...props, autoFocus: true })
        );
      }
      return child && React.cloneElement(child, { ...rest, ...props });
    });
  }
  handleSubmit = (values, formikBag) => {
    const { onSubmit } = this.props;
    return onSubmit(formatValues(values), formikBag);
  };

  render() {
    const {
      values,
      Model,
      title,
      errors,
      links,
      mode,
      buttons,
      onCancel
    } = this.props;

    return (
      <Formik
        validationSchema={Model.schemata[mode]}
        initialValues={new Model(values)}
        onSubmit={this.handleSubmit}
      >
        {props => {
          return (
            <Shell
              externalErrors={errors}
              links={links}
              mode={mode}
              onCancel={onCancel}
              buttons={buttons}
              title={title}
              {...props}
            >
              {this.renderElements(props)}
            </Shell>
          );
        }}
      </Formik>
    );
  }
}
