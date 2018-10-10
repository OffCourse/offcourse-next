import React, { Component } from "react";
import {
  append,
  adjust,
  repeat,
  reduce,
  identity,
  addIndex,
  reduceWhile,
  inc
} from "ramda";
import { MasonryWrapper, ColumnWrapper, ItemWrapper } from "./MasonryWrapper";
import PropTypes from "prop-types";

const reduceIndexed = addIndex(reduce);

export default class Masonry extends Component {
  static propTypes = {
    breakpoints: PropTypes.arrayOf(PropTypes.number),
    onResize: PropTypes.func,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    breakpoints: [],
    onResize: identity
  };

  state = { numberOfColumns: 1 };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
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

  handleResize = () => {
    if (!this.masonry) return null;
    const { onResize } = this.props;
    const { offsetWidth } = this.masonry;
    const proposal = this.getColumns(offsetWidth);
    window.requestAnimationFrame(() => {
      this.setState(
        () => {
          return { numberOfColumns: proposal };
        },
        () => {
          return onResize({ width: offsetWidth, numberOfColumns: proposal });
        }
      );
    });
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
        ref={el => {
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
