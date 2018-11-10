import React, { Children, cloneElement, Component } from "react";
import { Card, Section } from "@offcourse/atoms";
import { identity, isEmpty, contains, isNil, omit } from "ramda";
import PropTypes from "prop-types";
import { variants, affordances } from "@offcourse/constants";

const { ACTIVE, INACTIVE } = variants;
const {
  NONE,
  SELECTABLE,
  CHECKABLE,
  CLOSEABLE,
  EXPANDABLE,
  SHRINKABLE
} = affordances;

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
    const { layout, onIconClick, affordance, variant } = this.props;
    const { level } = this.state;

    if (index === 0 && affordance === EXPANDABLE) {
      return cloneElement(child, {
        ...child.props,
        variant,
        onIconClick: this.handleResize,
        affordance: level === layout.length - 1 ? SHRINKABLE : EXPANDABLE
      });
    }

    if (index === 0) {
      return cloneElement(child, {
        ...child.props,
        variant,
        onIconClick,
        affordance
      });
    }
    return child;
  };

  augmentSections = () => {
    const { variant, children, layout } = this.props;

    if (variant === INACTIVE) {
      return Children.map(children, (child, index) => {
        if (!child || index !== 0) return null;
        return this.renderElem(child, index);
      });
    }

    return Children.map(children, (child, index) => {
      if (!child) return null;
      const { section } = child.props;
      const { level } = this.state;
      const isVisible = layout[level] && contains(section, layout[level]);
      return (isEmpty(layout) || isVisible) && this.renderElem(child, index);
    });
  };

  render() {
    const { affordance } = this.props;
    const rest = omit(
      ["initialLevel", "layout", "children", "onResize", "onIconClick"],
      this.props
    );
    return (
      <Card
        {...rest}
        affordance={affordance === EXPANDABLE ? SELECTABLE : affordance}
      >
        {this.augmentSections()}
      </Card>
    );
  }
}

ExpendableCard.Section = Section;

ExpendableCard.propTypes = {
  onResize: PropTypes.func,
  initialLevel: PropTypes.number,
  layout: PropTypes.array,
  variant: PropTypes.oneOf([ACTIVE, INACTIVE]),
  affordance: PropTypes.oneOf([
    NONE,
    CHECKABLE,
    CLOSEABLE,
    SELECTABLE,
    EXPANDABLE,
    SHRINKABLE
  ])
};

ExpendableCard.defaultProps = {
  onResize: identity,
  affordance: EXPANDABLE,
  layout: []
};

export default ExpendableCard;
