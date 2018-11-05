import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "./ErrorLayout";
import { Adopt } from "react-adopt";
import { errors as errorTypes } from "@offcourse/constants";
import { errors } from "../content";
import { OverlayProvider, AuthProvider } from "../providers";

const { NO_SEARCH_RESULTS } = errorTypes;
const { CREATE_COURSE } = OverlayProvider.constants;

const mapper = {
  auth: <AuthProvider />,
  overlay: <OverlayProvider />
};

export default class NotFound extends Component {
  static propTypes = {
    goHome: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  };

  render() {
    const { goHome, searchTerm } = this.props;
    const errorType = NO_SEARCH_RESULTS;
    console.log(errorType);
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
          const action = auth.userName
            ? {
                message: "Create A Card",
                onClick: createCourse
              }
            : null;
          return <Layout action={action} error={error} goHome={goHome} />;
        }}
      </Adopt>
    );
  }
}
