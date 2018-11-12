import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const PortalWrapper = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden hidden",
        pointerEvents: "none"
      }}
    >
      {children}
    </div>
  );
};

class Portal extends Component {
  constructor(props) {
    const { rootEl } = props;
    super(props);
    this.portalRoot = document.getElementById(rootEl);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    this.portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(<PortalWrapper>{children}</PortalWrapper>, this.el);
  }
}

Portal.defaultProps = {
  rootEl: "portal"
};

Portal.propTypes = {
  rootEl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Portal;
