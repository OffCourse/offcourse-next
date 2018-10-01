import React, { Component } from "react";
import PropTypes from "prop-types";
import { identity } from "ramda";
import { Group, Icon, Input } from "@offcourse/atoms";

const SearchInputWrapper = Group.Wrapper.extend`
  border-bottom: ${props => props.theme.borders[2]};
  border-color: ${props => props.theme.colors.grayScale[2]};

  &:hover {
      border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export default class SearchInput extends Component {
  static propTypes = {};
  static Button = ({ onClick }) => {
    return (
      <div style={{ marginRight: "1rem" }}>
        <Icon name="search" onClick={onClick} />
      </div>
    );
  };

  render() {
    return (
      <SearchInputWrapper justifyContent="stretch" alignItems="stretch">
        <Input
          name="search"
          variant="small"
          onChange={identity}
          placeholder="search term"
        />
      </SearchInputWrapper>
    );
  }
}
