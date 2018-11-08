import React, { Component, Children } from "react";
import PropTypes from "prop-types";
import { Item } from "@offcourse/atoms";
import ListWrapper from "./ListWrapper";

class List extends Component {
  renderChildren() {
    const { children } = this.props;
    return Children.map(children, child => {
      return React.cloneElement(child, { is: "li", flex: 1 });
    });
  }

  render() {
    const { direction, spacing } = this.props;

    return (
      <ListWrapper
        flexDirection={direction === "horizontal" ? "row" : "column"}
        direction={direction || "vertical"}
        spacing={spacing || "normal"}
      >
        {this.renderChildren()}
      </ListWrapper>
    );
  }
}

List.Item = Item;
List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]).isRequired
};

export default List;
