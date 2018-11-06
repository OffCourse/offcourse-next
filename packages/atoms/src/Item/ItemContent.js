import React, { memo } from "react";
import PropTypes from "prop-types";
import { Label } from "..";

const ItemContent = ({ children }) => <Label>{children}</Label>;

ItemContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ]).isRequired
};

export default memo(ItemContent);
