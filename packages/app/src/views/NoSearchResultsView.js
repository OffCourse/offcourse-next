import React, { useContext } from "react";
import { AppStateContext } from "../contexts";
import PropTypes from "prop-types";
import { ErrorLayout } from "../layouts";
import { errors as errorTypes, overlayModes } from "@offcourse/constants";
import { errors } from "../content";

const { NO_SEARCH_RESULTS } = errorTypes;
const { CREATE_COURSE } = overlayModes;

const NotFound = ({ goHome, searchTerm }) => {
  const { overlay, auth } = useContext(AppStateContext);
  const errorType = NO_SEARCH_RESULTS;
  const { message, explanation } = errors[errorType];

  const error = {
    errorType,
    message: `${message} "${searchTerm}"`,
    explanation
  };

  const action = {
    message: "Create A Card",
    onClick: () => overlay.open({ mode: CREATE_COURSE })
  };

  return (
    <ErrorLayout
      action={auth.userName ? action : null}
      error={error}
      goHome={goHome}
    />
  );
};

NotFound.propTypes = {
  goHome: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default NotFound;
