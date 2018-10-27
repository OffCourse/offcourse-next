import React, { Component } from "react";
import PropTypes from "prop-types";
import { Loading } from "@offcourse/atoms";
import InfiniteScrollWrapper from "./InfiniteScrollWrapper";
import Waypoint from "react-waypoint";
import { sizes } from "@offcourse/constants";

const { NORMAL } = sizes;

export default class InfiniteScroll extends Component {
  static propTypes = {
    loadMore: PropTypes.func,
    hasMore: PropTypes.bool,
    height: PropTypes.number,
    children: PropTypes.node.isRequired
  };

  handlePositionChange = ({ currentPosition, ...rest }) => {
    const { loadMore } = this.props;
    if (currentPosition !== "outside") {
      loadMore();
    }
  };

  render() {
    const { children, hasMore, height } = this.props;
    return (
      <InfiniteScrollWrapper height={height}>
        {children}
        {hasMore && (
          <Waypoint key={children} onPositionChange={this.handlePositionChange}>
            <div>
              <Loading size={NORMAL} />
            </div>
          </Waypoint>
        )}
      </InfiniteScrollWrapper>
    );
  }
}
