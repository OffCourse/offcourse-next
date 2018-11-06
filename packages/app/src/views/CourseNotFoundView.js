import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { errors as errorTypes } from "@offcourse/constants";
import { errors } from "../content";
import { ErrorLayout } from "../layouts";

const { COURSE_NOT_FOUND } = errorTypes;

const NotFound = ({ goHome }) => {
  const errorType = COURSE_NOT_FOUND;
  const error = {
    errorType,
    ...errors[errorType]
  };
  const action = {
    message: "Take Me Home",
    onClick: goHome
  };
  return <ErrorLayout action={action} error={error} goHome={goHome} />;
};

NotFound.propTypes = {
  goHome: PropTypes.func
};

NotFound.defaultProps = {
  goHome: identity
};

export default memo(NotFound);
