import React, { memo } from "react";
import { Group } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { EXTRA_LARGE } = sizes;

const LoadingLayout = () => {
  return (
    <Group
      flexDirection={["column-reverse", "row", "row"]}
      height="calc(100vh - 2.25rem)"
      alignItems="center"
      width="100vw"
      justifyContent="center"
    >
      <Loading size={EXTRA_LARGE} />
    </Group>
  );
};

LoadingLayout.propTypes = {};

export default memo(LoadingLayout);
