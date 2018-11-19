import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Input } from "@offcourse/atoms";
import SearchBarWrapper from "./SearchBarWrapper";
import SearchButton from "./SearchButton";
class SearchBar extends PureComponent {
  state = {
    searchTerm: ""
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
    return (
      <SearchBarWrapper onSubmit={this.handleSubmit}>
        <Input
          name="search"
          autoComplete={false}
          autoFocus={true}
          variant="small"
          onChange={this.handleChange}
          placeholder="What Do You Want To Learn Today?"
          value={this.state.searchTerm}
        />
      </SearchBarWrapper>
    );
  }
}

SearchBar.Button = SearchButton;
SearchBar.propTypes = {
  onSearchChange: PropTypes.func,
  onSearchSubmit: PropTypes.func
};

SearchBar.defaultProps = {
  onSearchChange: identity,
  onSearchSubmit: identity
};

export default SearchBar;
