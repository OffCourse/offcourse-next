import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppStateContext } from "../contexts";
import { isEmpty } from "ramda";
import { Slide, Bar } from "@offcourse/atoms";
import { SearchBar, MessageGroup } from "@offcourse/molecules";

const Veil = ({ isActive, children, onClick }) => (
  <div onClick={onClick}>
    <div style={{ pointerEvents: isActive ? "none" : "auto" }}>{children}</div>
  </div>
);

const navBarHeight = 2.25;

const SearchBarContainer = ({ children }) => {
  const { searchbar, route, flash } = useContext(AppStateContext);
  const { messages } = flash;
  const sliderHeight = `${navBarHeight * (messages.length || 1)}rem`;
  const isOpen = searchbar.isOpen || !isEmpty(messages);
  const { goToCollection } = route.handlers;

  const onSearchChange = ({ searchTerm }) => goToCollection({ searchTerm });
  const onSearchSubmit = ({ searchTerm }) =>
    searchbar.close() && goToCollection({ searchTerm });

  return (
    <Slide
      distance={sliderHeight}
      direction="top"
      pose={isOpen ? "open" : "close"}
    >
      <Bar height={sliderHeight} alignItems="stretch" justifyContent="stretch">
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
};

SearchBarContainer.propTypes = {
  children: PropTypes.node
};

export default SearchBarContainer;
