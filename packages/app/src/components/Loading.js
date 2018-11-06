import React, { memo } from "react";
import { Group, Loading as L } from "@offcourse/atoms";
import { sizes } from "@offcourse/constants";

const { EXTRA_LARGE } = sizes;

const Loading = () => {
  return (
    <Group
      flexDirection={["column-reverse", "row", "row"]}
      height="calc(100vh - 2.25rem)"
      alignItems="center"
      width="100vh"
      justifyContent="center"
    >
      <L size={EXTRA_LARGE} />
    </Group>
  );
};

Loading.propTypes = {};

export default memo(Loading);
