import React, { Component } from "react";
import { createPortal } from "react-dom";

class Portal extends Component {
  constructor(props) {
    const { rootEl } = props;
    super(props);
    this.portalRoot = document.getElementById(rootEl);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    this.portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return createPortal(children, this.el);
  }
}

Portal.defaultProps = {
  rootEl: "portal"
};

export default Portal;
