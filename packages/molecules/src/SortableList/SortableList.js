import React, { Children, Component } from "react";
import PropTypes from "prop-types";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { move } from "../helpers";
import { List as SimpleList } from "..";

const SortableItem = SortableElement(({ children }) => children);
const List = SortableContainer(SimpleList);

class SortableList extends Component {
  static propTypes = {};
  static Item = SimpleList.Item;
  static move = move;

  renderItems() {
    const { children } = this.props;
    return Children.map(children, (child, index) => {
      return <SortableItem index={index}>{child}</SortableItem>;
    });
  }

  render() {
    const { children, direction, onSort } = this.props;
    return (
      <List
        pressDelay={200}
        direction={direction}
        axis={direction === "horizontal" ? "x" : "y"}
        lockAxis={direction === "horizontal" ? "x" : "y"}
        onSortEnd={onSort}
      >
        {this.renderItems()}
      </List>
    );
  }
}

export default SortableList;
