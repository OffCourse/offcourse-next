import React from "react";
import PropTypes from "prop-types";
import { Link } from "@offcourse/atoms";

const Breadcrumb = ({ onClick, text }) => {
  return (
    <Link
      key={text}
      onClick={onClick}
      fontFamily="base"
      basic
    >{`< ${text}`}</Link>
  );
};

Breadcrumb.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Breadcrumb;
