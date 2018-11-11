import React, { memo } from "react";
import PropTypes from "prop-types";
import { Slide } from "@offcourse/atoms";
import { SearchBar } from "@offcourse/molecules";

import { SearchbarProvider } from "../providers";

const Veil = memo(({ isActive, children, onClick }) => (
  <div onClick={onClick}>
    <div style={{ pointerEvents: isActive ? "none" : "auto" }}>{children}</div>
  </div>
));

const SearchBarContainer = ({ children }) => {
  return (
    <SearchbarProvider>
      {({ close, isOpen }) => {
        return (
          <Slide
            distance="2.25rem"
            direction="top"
            pose={isOpen ? "open" : "close"}
          >
            <SearchBar />
            <Veil onClick={isOpen ? close : null} isActive={isOpen}>
              {children}
            </Veil>
          </Slide>
        );
      }}
    </SearchbarProvider>
  );
};

SearchBarContainer.propTypes = {
  children: PropTypes.node
};

export default memo(SearchBarContainer);
