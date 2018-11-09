import React, { Component, Children } from "react";
import { map } from "ramda";
import PropTypes from "prop-types";
import { Group } from "@offcourse/atoms";
import { Stat } from "..";
import { directions } from "@offcourse/constants";

const { HORIZONTAL, VERTICAL } = directions;

class StatGroup extends Component {
  renderStats() {
    const { inverse, direction, stats } = this.props;
    return map(
      ({ iconName, label }) => (
        <Stat
          key={label}
          inverse={inverse}
          direction={direction}
          iconName={iconName}
          label={label}
        />
      ),
      stats
    );
  }

  renderChildren() {
    const { direction, inverse, children } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { inverse, direction });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <Group flexDirection="row" section="time">
        {children ? this.renderChildren() : this.renderStats()}
      </Group>
    );
  }
}

StatGroup.Stat = Stat;
StatGroup.propTypes = {
  inverse: PropTypes.bool,
  direction: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  )
};

StatGroup.defaultProps = {
  inverse: false,
  direction: VERTICAL
};

export default StatGroup;
