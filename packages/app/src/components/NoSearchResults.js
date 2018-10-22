import React, { Component } from "react";
import PropTypes from "prop-types";
import Layout from "./ErrorLayout";
import { Adopt } from "react-adopt";

import { OverlayProvider, AuthProvider } from "../providers";

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
      message: `Oh No, there are no search results for "${searchTerm}"`,
      explanation:
        "We've searched far and wide, but unfortunately couldn't find what you are looking for. Please, give it another go. If you still can't find your topic on our site, why don't you create a card about it yourself."
    };
    const action = {
      message: "Create A Card"
    };
    const animation = [
      {
        from: { opacity: 0, transform: "translateY(150vh) rotate(0deg)" },
        to: { opacity: 1, transform: "translateY(-10vh) rotate(10deg)" }
      },
      {
        from: { transform: "translateY(-10vh) rotate(10deg)" },
        to: { transform: "translateY(0) rotate(0deg)" }
      },
      {
        from: { transform: "translateY(0vh) rotate(0deg)" },
        to: { transform: "translateY(-10vh) rotate(-10deg)" }
      },
      {
        from: { transform: "translateY(-10vh) rotate(-10deg)" },
        to: { transform: "translateY(0vh) rotate(0deg)" }
      }
    ];
    return (
      <Adopt mapper={mapper}>
        {({ auth, overlay }) => {
          const createCourse = () => overlay.open({ mode: CREATE_COURSE });
          const signIn = () => overlay.open({ mode: SIGNING_IN });
          const action = {
            message: auth.userName ? "Create A Card" : "Sign In",
            onClick: auth.userName ? createCourse : signIn
          };
          return (
            <Layout
              animation={animation}
              action={action}
              error={error}
              goHome={goHome}
            />
          );
        }}
      </Adopt>
    );
  }
}
