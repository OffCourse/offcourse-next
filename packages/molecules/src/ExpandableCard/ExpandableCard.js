import React, { Children, Component } from 'react';
import { Card, Group, Icon } from '@offcourse/atoms';
import { identity } from "ramda";
import PropTypes from 'prop-types';

export default class ExpendableCard extends Component {
  static propTypes = {
    onResize: PropTypes.func,
    defaultLevel: PropTypes.number,
    hiddenSections: PropTypes.array
  }

  static defaultProps = {
    onResize: identity,
    defaultLevel: 0,
    hiddenSections: [1, 2]
  }

  state = {
    level: this.props.defaultLevel
  }

  handleResize = () => {
    const { onResize } = this.props;
    this.setState(({ level }, { hiddenSections }) => {
      const nextLevel = (level + 1) % hiddenSections.length;
      return { level: nextLevel || 0 }
    }, onResize(this.state.level))
  }


  augmentHeader = () => {
    const { children } = this.props;
    return Children.map(children, (child, index) => {

      return index === 0 ?
        (<Group flexDirection="row" justifyContent="space-between" alignItems="center">
          {child}
          <Icon onClick={this.handleResize} name="arrowDown" color="grayScale.2" size="medium" />
        </Group>) :
        child;
    })
  }


  render() {
    return (
      <Card>
        {this.augmentHeader()}
      </Card>
    )
  }
}
