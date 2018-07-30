import React, { Children, Component } from 'react';
import { Card, Group, Icon } from '@offcourse/atoms';
import { identity, contains, isNil } from "ramda";
import PropTypes from 'prop-types';

export default class ExpendableCard extends Component {
  static propTypes = {
    onResize: PropTypes.func,
    initialLevel: PropTypes.number,
    layout: PropTypes.array
  }

  static defaultProps = {
    onResize: identity,
    layout: []
  }

  state = {
    level: isNil(this.props.initialLevel)
      ? this.props.layout.length - 1
      : this.props.initialLevel
  }

  handleResize = () => {
    const { onResize, layout } = this.props;
    this.setState(({ level }, { layout }) => {
      const nextLevel = (level + 1) % layout.length;
      return { level: nextLevel || 0 }
    }, () => onResize(this.state.level))
  }

  augmentSections = () => {
    const { children, layout } = this.props;

    if (layout.length === 0) return children;

    const { level } = this.state;
    const iconName = level === layout.length - 1 ? "arrowUp" : "arrowDown";

    return Children.map(children, (child, index) => {
      if (!child) return null;

      const { section } = child.props;
      const isVisible = contains(section, layout[level]);

      if (!isVisible) return null;

      return index === 0 ?
        (<Group flexDirection="row" justifyContent="space-between" alignItems="center">
          <Group flex={7}>{child}</Group>
          <Group flex={1} flexDirection="row" justifyContent="flex-end">
            <Icon onClick={this.handleResize} name={iconName} color="grayScale.2" size="medium" />
          </Group>
        </Group>) :
        child;
    })
  }


  render() {
    return (
      <Card>
        {this.augmentSections()}
      </Card>
    )
  }
}
