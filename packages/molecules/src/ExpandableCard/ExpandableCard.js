import React, { Children, cloneElement, Component } from "react";
import { Card, Section, Icon } from "@offcourse/atoms";
import { identity, contains, isNil, omit } from "ramda";
import PropTypes from "prop-types";
import { sizes } from "@offcourse/constants";

const { NORMAL } = sizes;

class ExpendableCard extends Component {
  state = {
    level: isNil(this.props.initialLevel)
      ? this.props.layout.length - 1
      : this.props.initialLevel
  };

  handleResize = () => {
    const { onResize } = this.props;
    this.setState(
      ({ level }, { layout }) => {
        const nextLevel = (level + 1) % layout.length;
        return { level: nextLevel || 0 };
      },
      () => onResize(this.state.level)
    );
  };

  renderElem = (child, index) => {
    const { layout } = this.props;
    const { level } = this.state;
    const iconName = level === layout.length - 1 ? "arrowUp" : "arrowDown";

    const icon = (
      <Icon
        onClick={this.handleResize}
        name={iconName}
        color="grayScale.2"
        size={NORMAL}
      />
    );

    return cloneElement(child, {
      icon: index === 0 ? icon : null,
      ...child.props
    });
  };

  augmentSections = () => {
    const { expandable, children, layout } = this.props;

    if (!expandable) {
      return children;
    }
    return Children.map(children, (child, index) => {
      if (!child) return null;
      const { section } = child.props;
      const { level } = this.state;
      const isVisible = layout[level] && contains(section, layout[level]);
      return isVisible && this.renderElem(child, index);
    });
  };

  render() {
    const rest = omit(
      ["initialLevel", "layout", "children", "onResize", "expandable"],
      this.props
    );
    return <Card {...rest}>{this.augmentSections()}</Card>;
  }
}

ExpendableCard.Section = Section;

ExpendableCard.propTypes = {
  onResize: PropTypes.func,
  initialLevel: PropTypes.number,
  layout: PropTypes.array,
  expandable: PropTypes.bool
};

ExpendableCard.defaultProps = {
  onResize: identity,
  expandable: true,
  inactive: false,
  layout: []
};

export default ExpendableCard;
