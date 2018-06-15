import React, { Component } from "react";
import {
  append,
  adjust,
  repeat,
  reduce,
  addIndex,
  reduceWhile,
  inc
} from "ramda";
import { MasonryWrapper, ColumnWrapper, ItemWrapper } from "./MasonryWrapper";
import PropTypes from "prop-types";

const reduceIndexed = addIndex(reduce);

export default class Masonry extends React.Component {
  static propTypes = {
    breakpoints: PropTypes.arrayOf(PropTypes.number)
  };

  static defaultProps = {
    breakpoints: []
  };

  state = { numberOfColumns: 1 };

  componentDidMount() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  }

  getColumns(containerWidth) {
    const { breakpoints } = this.props;
    return reduceWhile(
      (_, breakpoint) => breakpoint < containerWidth,
      inc,
      1,
      breakpoints
    );
  }

  onResize = () => {
    const { numberOfColumns } = this.state;
    const proposal = this.getColumns(this.masonry.offsetWidth);
    if (proposal !== numberOfColumns) {
      this.setState({ numberOfColumns: proposal });
    }
  };

  prepareGrid() {
    const { children } = this.props;
    const { numberOfColumns } = this.state;

    return reduceIndexed(
      (acc, child, index) =>
        adjust(append(child), index % numberOfColumns, acc),
      repeat([], numberOfColumns),
      children
    );
  }

  render() {
    return (
      <MasonryWrapper
        innerRef={el => {
          this.masonry = el;
        }}
      >
        {this.prepareGrid().map((col, ci) => {
          return (
            <ColumnWrapper key={ci}>
              {col.map((child, i) => {
                return <ItemWrapper key={i}>{child}</ItemWrapper>;
              })}
            </ColumnWrapper>
          );
        })}
      </MasonryWrapper>
    );
  }
}
