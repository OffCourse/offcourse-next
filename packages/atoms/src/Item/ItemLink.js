import React, { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "..";

const ItemLink = ({ href, onClick, children }) => (
  <Link basic onClick={onClick} href={href}>
    {children}
  </Link>
);

ItemLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    )
  ]).isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(ItemLink);
