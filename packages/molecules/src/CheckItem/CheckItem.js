import React, { Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Link, Item } from "@offcourse/atoms";

export default class CheckItem extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    onToggle: PropTypes.func.isRequired
  };

  renderChildren() {
    const { href, onClick, children } = this.props;
    return href || onClick ? (
      <Item.Link href={href} onClick={onClick}>
        {children}
      </Item.Link>
    ) : (
      <Item.Content>{children}</Item.Content>
    );
  }

  render() {
    const { is, href, children, checked, id, onToggle } = this.props;
    return (
      <Item is={is} gridTemplateColumns="2rem 1fr">
        <Checkbox
          onToggle={({ checked }) => onToggle({ id, checked })}
          checked={checked}
        />
        {this.renderChildren()}
      </Item>
    );
  }
}
