import React, { memo } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Icon } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";
const { LARGE } = sizes;

const SearchButton = ({ onClick }) => {
  return <Icon size={LARGE} name="search" onClick={onClick} />;
};

SearchButton.propTypes = {
  onClick: PropTypes.func
};

SearchButton.defaultProps = {
  onClick: identity
};

export default memo(SearchButton);
