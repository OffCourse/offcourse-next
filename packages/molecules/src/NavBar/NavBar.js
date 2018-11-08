import React, { Fragment, memo } from "react";
import PropTypes from "prop-types";
import { Logo } from "@offcourse/atoms";
import { Menu, SearchBar, IconGroup } from "..";
import { identity } from "ramda";
import NavBarWrapper from "./NavBarWrapper";

const Icons = ({ onMenuButtonClick, onSearchButtonClick }) => {
  return (
    <Fragment>
      <SearchBar.Button onClick={onSearchButtonClick} />
      <Menu.Button onClick={onMenuButtonClick} />
    </Fragment>
  );
};

const NavBar = ({ onLogoClick, onMenuButtonClick, onSearchButtonClick }) => (
  <NavBarWrapper>
    <Logo onClick={onLogoClick} />
    <IconGroup justifyContent="flex-end">
      <Icons
        onMenuButtonClick={onMenuButtonClick}
        onSearchButtonClick={onSearchButtonClick}
      />
    </IconGroup>
  </NavBarWrapper>
);

NavBar.propTypes = {
  onLogoClick: PropTypes.func,
  onMenuButtonClick: PropTypes.func,
  onSearchButtonClick: PropTypes.func
};

NavBar.defaultProps = {
  onLogoClick: identity,
  onMenuClick: identity,
  onSearchButtonClick: identity
};

export default memo(NavBar);
