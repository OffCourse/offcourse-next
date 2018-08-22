import React, { Component } from "react";
import PropTypes from "prop-types";
import ItemWrapper from "./ItemWrapper";
import { Link, Label } from "..";

export default class Item extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      )
    ]).isRequired,
    is: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    gridTemplateColumns: PropTypes.string
  };

  static Link = ({ href, onClick, children }) => (
    <Link basic onClick={onClick} href={href}>
      {children}
    </Link>
  );

  static Content = ({ children }) => <Label>{children}</Label>;

  renderChildren() {
    const { href, onClick, children } = this.props;

    return href || onClick ? (
      <Item.Link onClick={onClick} href={href}>
        {children}
      </Item.Link>
    ) : (
      children
    );
  }

  render() {
    const { is, gridTemplateColumns } = this.props;
    return (
      <ItemWrapper is={is} gridTemplateColumns={gridTemplateColumns}>
        {this.renderChildren()}
      </ItemWrapper>
    );
  }
}
