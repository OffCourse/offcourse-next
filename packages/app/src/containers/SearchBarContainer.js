import React, { memo } from "react";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { isEmpty } from "ramda";
import { Slide, Bar } from "@offcourse/atoms";
import { SearchBar, MessageGroup } from "@offcourse/molecules";
import { SearchbarProvider, FlashProvider } from "../providers";
import { Route } from "../components";

const Veil = ({ isActive, children, onClick }) => (
  <div onClick={onClick}>
    <div style={{ pointerEvents: isActive ? "none" : "auto" }}>{children}</div>
  </div>
);

const mapper = {
  searchbar: <SearchbarProvider />,
  flash: <FlashProvider />,
  route: <Route />
};

const navBarHeight = 2.25;

const SearchBarContainer = ({ children }) => {
  return (
    <Adopt mapper={mapper}>
      {({ searchbar, flash, route }) => {
        const { messages } = flash;
        const sliderHeight = `${navBarHeight * (messages.length || 1)}rem`;
        const isOpen = searchbar.isOpen || !isEmpty(messages);
        const { goToCollection } = route.handlers;

        const onSearchChange = ({ searchTerm }) =>
          goToCollection({ searchTerm });
        const onSearchSubmit = ({ searchTerm }) =>
          searchbar.close() && goToCollection({ searchTerm });

        return (
          <Slide
            distance={sliderHeight}
            direction="top"
            pose={isOpen ? "open" : "close"}
          >
            <Bar
              height={sliderHeight}
              alignItems="stretch"
              justifyContent="stretch"
            >
              {searchbar.isOpen ? (
                <SearchBar
                  onSearchChange={onSearchChange}
                  onSearchSubmit={onSearchSubmit}
                />
              ) : (
                <MessageGroup messages={messages} />
              )}
            </Bar>
            <Veil onClick={searchbar.close} isActive={isOpen}>
              {children}
            </Veil>
          </Slide>
        );
      }}
    </Adopt>
  );
};

SearchBarContainer.propTypes = {
  children: PropTypes.node
};

export default SearchBarContainer;
