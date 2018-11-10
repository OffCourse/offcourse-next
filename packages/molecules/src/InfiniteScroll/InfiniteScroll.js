import React, { memo } from "react";
import PropTypes from "prop-types";
import { Loading } from "..";
import InfiniteScrollWrapper from "./InfiniteScrollWrapper";
import Waypoint from "react-waypoint";
import { sizes } from "@offcourse/constants";

const { NORMAL } = sizes;

const InfiniteScroll = ({ children, loadMore, hasMore, height }) => {
  const handlePositionChange = ({ currentPosition, ...rest }) => {
    if (currentPosition !== "outside") {
      loadMore();
    }
  };

  return (
    <InfiniteScrollWrapper height={height}>
      {children}
      {hasMore && (
        <Waypoint key={children} onPositionChange={handlePositionChange}>
          <div>
            <Loading size={NORMAL} />
          </div>
        </Waypoint>
      )}
    </InfiniteScrollWrapper>
  );
};

InfiniteScroll.propTypes = {
  loadMore: PropTypes.func,
  hasMore: PropTypes.bool,
  height: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default memo(InfiniteScroll);
