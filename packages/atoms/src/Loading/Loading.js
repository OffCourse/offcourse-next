import React, { Component } from "react";
import PropTypes from "prop-types";
import { Avatar } from "..";
import { sizes } from "@offcourse/constants";
import { Spring, animated } from "react-spring";

const { SMALL, NORMAL, LARGE, EXTRA_LARGE } = sizes;

const animations = {
  pulse: {
    from: { opacity: 0.5, scale: 0.7 },
    to: { opacity: 1, scale: 1 },
    style: ({ opacity, scale }) => {
      return { opacity, transform: `scale(${scale})` };
    }
  },
  slide: {
    from: { opacity: 1, x: -200 },
    to: { opacity: 1, x: 200 },
    style: ({ opacity, x }) => {
      return { opacity, transform: `translate3d(${x}px, 0, 0)` };
    }
  }
};

class Loading extends Component {
  state = {
    reverse: false
  };
  render() {
    const { size, effect } = this.props;
    const { reverse } = this.state;
    const { from, to, style } = animations[effect];
    return (
      <Spring
        reset
        reverse={reverse}
        onRest={() => this.setState({ reverse: !reverse })}
        from={from}
        to={to}
      >
        {styles => (
          <div
            style={{
              margin: "1rem",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <animated.div style={style(styles)}>
              <Avatar size={size} />
            </animated.div>
          </div>
        )}
      </Spring>
    );
  }
}

Loading.propTypes = {
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE, EXTRA_LARGE]),
  effect: PropTypes.string
};

Loading.defaultProps = {
  effect: "pulse",
  size: LARGE
};

export default Loading;
