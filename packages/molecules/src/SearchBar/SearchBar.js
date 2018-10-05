import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Icon, Input } from "@offcourse/atoms";
import styled from "styled-components";
import system from "system-components";

const _SearchInputWrapper = system({
  is: "form",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  maxWidth: "100vw",
  flex: 1
});

const SearchInputWrapper = styled(_SearchInputWrapper)`
  border-bottom: ${props => props.theme.borders[2]};
  border-color: ${props => props.theme.colors.grayScale[2]};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default class SearchInput extends Component {
  state = {
    searchTerm: null
  };

  handleChange = e => {
    const { onSearchChange } = this.props;
    e.preventDefault();
    this.setState({ searchTerm: e.target.value }, () =>
      onSearchChange({ searchTerm: this.state.searchTerm })
    );
  };

  handleSubmit = e => {
    const { onSearchSubmit } = this.props;
    e.preventDefault();
    onSearchSubmit({ searchTerm: this.state.searchTerm });
  };

  static propTypes = {
    isOpen: PropTypes.bool,
    onSearch: PropTypes.func,
    searchTerm: PropTypes.string
  };

  static defaultProps = {
    isOpen: false,
    onSearch: identity
  };

  static Button = ({ onClick }) => {
    return (
      <div style={{ marginRight: "1rem" }}>
        <Icon name="search" onClick={onClick} />
      </div>
    );
  };

  render() {
    const { isOpen } = this.props;
    return isOpen ? (
      <SearchInputWrapper
        onSubmit={this.handleSubmit}
        justifyContent="stretch"
        alignItems="stretch"
      >
        <Input
          name="search"
          autocomplete={false}
          autofocus={true}
          variant="small"
          onChange={this.handleChange}
          placeholder="search term"
          value={this.state.searchTerm}
        />
      </SearchInputWrapper>
    ) : null;
  }
}
