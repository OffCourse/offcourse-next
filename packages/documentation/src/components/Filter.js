import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { filter, map, pathEq } from "ramda";
import { Menu } from "@offcourse/molecules";

const ALL = "ALL";
export default class Filter extends Component {
  state = {
    active: ALL
  };

  static propTypes = {
    items: PropTypes.array
  };

  selectedItems() {
    const { active } = this.state;
    const { items, path } = this.props;

    switch (active) {
      case ALL:
        return items;
      default:
        return filter(pathEq(path, active), items);
    }
  }

  selectStatus = status => {
    this.setState({ active: status });
  };

  render() {
    const { categories, active, children } = this.props;

    const links = map(
      category => {
        return {
          onClick: () => this.selectStatus(category),
          title: category,
          active: category === active,
          level: 0
        };
      },
      [...categories, ALL]
    );

    return (
      <Fragment>
        <Menu
          direction="horizontal"
          justifyContent="flex-end"
          pb={6}
          links={links}
        />
        {children({ filtered: this.selectedItems() })}
      </Fragment>
    );
  }
}
