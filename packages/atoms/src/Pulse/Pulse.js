import React, { Component } from "react";
import PropTypes from "prop-types";
import posed from "react-pose";
import system from "system-components";

const PulseAnimation = posed.div({
  breathIn: { opacity: 0.5, scale: 0.7 },
  breathOut: { opacity: 1, scale: 1 }
});

const PulseWrapper = system({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

class Pulse extends Component {
  state = {
    reverse: false
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        reverse: !this.state.reverse
      });
    }, 800);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { children } = this.props;
    const { reverse } = this.state;
    return (
      <PulseWrapper
        is={PulseAnimation}
        pose={reverse ? "breathIn" : "breathOut"}
      >
        {children}
      </PulseWrapper>
    );
  }
}

Pulse.propTypes = {
  children: PropTypes.node
};

export default Pulse;
