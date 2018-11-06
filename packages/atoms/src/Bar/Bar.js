import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import BarWrapper from "./BarWrapper";
import { positions } from "@offcourse/constants";

const { BOTTOM, TOP } = positions;

class Bar extends PureComponent {
  render() {
    const { position, className, children, isDocked } = this.props;
    return (
      <BarWrapper
        className={className}
        top={position === TOP ? 0 : null}
        bottom={position === BOTTOM ? 0 : null}
        position={isDocked ? "fixed" : "absolute"}
      >
        {children}
      </BarWrapper>
    );
  }
}

Bar.propTypes = {
  position: PropTypes.oneOf([TOP, BOTTOM]),
  children: PropTypes.node.isRequired,
  isDocked: PropTypes.bool,
  className: PropTypes.string
};

Bar.defaultProps = {
  isDocked: true,
  position: TOP
};

export default Bar;
