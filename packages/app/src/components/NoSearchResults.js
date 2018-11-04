import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "./ErrorLayout";
import { Adopt } from "react-adopt";
import { errors } from "@offcourse/constants";
import { OverlayProvider, AuthProvider } from "../providers";

const { NO_SEARCH_RESULTS } = errors;
const { SIGNING_IN, SIGNING_OUT, CREATE_COURSE } = OverlayProvider.constants;

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
    const error = {
      errorType: NO_SEARCH_RESULTS,
      message: `Oh No, there are no search results for "${searchTerm}"`,
      explanation:
        "We've searched far and wide, but unfortunately couldn't find what you are looking for. Please, give it another go. If you still can't find your topic on our site, why don't you create a card about it yourself."
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
