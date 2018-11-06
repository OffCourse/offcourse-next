import React from "react";
import PropTypes from "prop-types";
import Layout from "./ErrorLayout";
import { Adopt } from "react-adopt";
import { errors as errorTypes, overlayModes } from "@offcourse/constants";
import { errors } from "../content";
import { OverlayProvider, AuthProvider } from "../providers";

const { NO_SEARCH_RESULTS } = errorTypes;
const { CREATE_COURSE } = overlayModes;

const mapper = {
  auth: <AuthProvider />,
  overlay: <OverlayProvider />
};

const NotFound = ({ goHome, searchTerm }) => {
  const errorType = NO_SEARCH_RESULTS;
  const { message, explanation } = errors[errorType];
  const error = {
    errorType,
    message: `${message} "${searchTerm}"`,
    explanation
  };
  return (
    <Adopt mapper={mapper}>
      {({ auth, overlay }) => {
        const createCourse = () => overlay.open({ mode: CREATE_COURSE });
        const action = {
          message: "Create A Card",
          onClick: createCourse
        };
        return (
          <Layout
            action={auth.userName ? action : null}
            error={error}
            goHome={goHome}
          />
        );
      }}
    </Adopt>
  );
};

NotFound.propTypes = {
  goHome: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

export default NotFound;
