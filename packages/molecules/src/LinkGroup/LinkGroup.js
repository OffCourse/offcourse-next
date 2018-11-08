import React from "react";
import PropTypes from "prop-types";
import { isEmpty } from "ramda";
import { mapIndexed } from "../helpers";
import { Link } from "@offcourse/atoms";
import LinkGroupWrapper from "./LinkGroupWrapper";
import { directions } from "@offcourse/constants";

const { HORIZONTAL, VERTICAL } = directions;

const LinkGroup = ({
  display,
  links,
  px,
  pt,
  pb,
  children,
  direction,
  justifyContent,
  alignItems
}) => {
  const LinkElems = mapIndexed(
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

  return (
    <LinkGroupWrapper
      display={display}
      px={px}
      pt={pt}
      pb={pb}
      flexDirection={direction === HORIZONTAL ? "row" : "column"}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {isEmpty(links) ? children : LinkElems}
    </LinkGroupWrapper>
  );
};

LinkGroup.Link = Link;

LinkGroup.propTypes = {
  display: PropTypes.string,
  px: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  direction: PropTypes.oneOf([HORIZONTAL, VERTICAL]),
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

LinkGroup.defaultProps = {
  links: [],
  direction: HORIZONTAL,
  alignItems: "flex-start"
};

export default LinkGroup;
