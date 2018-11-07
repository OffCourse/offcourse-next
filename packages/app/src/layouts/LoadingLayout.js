import React, { memo } from "react";
import { Group, Loading } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { EXTRA_LARGE } = sizes;

const LoadingLayout = () => {
  return (
    <Group
      flexDirection={["column-reverse", "row", "row"]}
      height="calc(100vh - 2.25rem)"
      alignItems="center"
      width="100vh"
      justifyContent="center"
    >
      <Loading size={EXTRA_LARGE} />
    </Group>
  );
};

LoadingLayout.propTypes = {};

export default memo(LoadingLayout);