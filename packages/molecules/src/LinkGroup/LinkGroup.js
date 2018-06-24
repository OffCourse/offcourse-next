import React, { Component } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { mapIndexed } from "../helpers";
import { Link } from "@offcourse/atoms";
import LinkGroupWrapper from "./LinkGroupWrapper";

export default class LinkGroup extends Component {
  static Link = Link;

  static propTypes = {
    direction: PropTypes.oneOf(["horizontal", "vertical"]),
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        href: PropTypes.string,
        onClick: PropTypes.func
      })
    ),
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    links: [],
    direction: "horizontal",
    alignItems: "flex-start"
  };

  renderLinks = () => {
    const { links } = this.props;
    return mapIndexed(
      ({ title, disabled, active, href, onClick }, index) => (
        <Link
          active={active}
          disabled={disabled}
          key={index}
          href={href}
          onClick={onClick}
        >
          {title}
        </Link>
      ),
      links
    );
  };

  render() {
    const {
      display,
      links,
      px,
      pt,
      pb,
      children,
      direction,
      justifyContent,
      alignItems
    } = this.props;
    return (
      <LinkGroupWrapper
        display={display}
        px={px}
        pt={pt}
        pb={pb}
        flexDirection={direction === "horizontal" ? "row" : "column"}
        justifyContent={justifyContent}
        alignItems={alignItems}
      >
        {isEmpty(links) ? children : this.renderLinks()}
      </LinkGroupWrapper>
    );
  }
}
