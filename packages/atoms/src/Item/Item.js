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
    gridTemplateColumns: PropTypes.array
  };

  static Link = ({ href, children }) => (
    <Link basic href={href}>
      {children}
    </Link>
  );

  static Content = ({ children }) => <Label>{children}</Label>;

  renderChildren() {
    const { href, children } = this.props;
    return href ? <Item.Link href={href}>{children}</Item.Link> : children;
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
