import React from "react";
import PropTypes from "prop-types";
import ItemWrapper from "./ItemWrapper";
import ItemLink from "./ItemLink";
import ItemContent from "./ItemContent";

const Item = ({ href, onClick, children, is, gridTemplateColumns }) => {
  return (
    <ItemWrapper is={is} gridTemplateColumns={gridTemplateColumns}>
      {href || onClick ? (
        <Item.Link onClick={onClick} href={href}>
          {children}
        </Item.Link>
      ) : (
        children
      )}
    </ItemWrapper>
  );
};

Item.Content = ItemContent;
Item.Link = ItemLink;

Item.propTypes = {
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

export default Item;
