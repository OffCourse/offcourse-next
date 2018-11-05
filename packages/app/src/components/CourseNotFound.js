import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import Layout from "./ErrorLayout";
import { errors as errorTypes } from "@offcourse/constants";
import { errors } from "../content";

const { COURSE_NOT_FOUND } = errorTypes;

export default class NotFound extends Component {
  static propTypes = {
    goHome: PropTypes.func
  };

  static defaultProps = {
    goHome: identity
  };

  render() {
    const { goHome } = this.props;
    const errorType = COURSE_NOT_FOUND;
    const error = {
      errorType,
      ...errors[errorType]
    };
    const action = {
      message: "Take Me Home",
      onClick: goHome
    };
    return <Layout action={action} error={error} goHome={goHome} />;
  }
}
