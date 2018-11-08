import React, { memo } from "react";
import PropTypes from "prop-types";
import { Checkbox, Item } from "@offcourse/atoms";

const CheckItem = ({ is, href, onClick, children, checked, id, onToggle }) => (
  <Item is={is} gridTemplateColumns="2rem 1fr">
    <Checkbox
      onToggle={({ checked }) => onToggle({ id, checked })}
      checked={checked}
    />
    {href || onClick ? (
      <Item.Link href={href} onClick={onClick}>
        {children}
      </Item.Link>
    ) : (
      <Item.Content>{children}</Item.Content>
    )}
  </Item>
);

CheckItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  is: PropTypes.func,
  checked: PropTypes.bool,
  onToggle: PropTypes.func.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

export default memo(CheckItem);
