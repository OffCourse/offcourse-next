import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Icon, Input } from "@offcourse/atoms";
import SearchBarWrapper from "./SearchBarWrapper";

export default class SearchInput extends Component {
  static Wrapper = SearchBarWrapper;
  state = {
    searchTerm: ""
  };

  static propTypes = {
    onSearchChange: PropTypes.func,
    onSearchSubmit: PropTypes.func
  };
  static defaultProps = {
    onSearchChange: identity,
    onSearchSubmit: identity
  };

  static Button = ({ onClick }) => {
    return <Icon name="search" onClick={onClick} />;
  };

  handleChange = e => {
    e.preventDefault();
    const { onSearchChange } = this.props;
    this.setState({ searchTerm: e.target.value }, () =>
      onSearchChange({ searchTerm: this.state.searchTerm })
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSearchSubmit } = this.props;
    onSearchSubmit({ searchTerm: this.state.searchTerm });
  };

  render() {
    const { isOpen } = this.props;
    return (
      <SearchBarWrapper
        display={isOpen ? "flex" : "none"}
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
      </SearchBarWrapper>
    );
  }
}
