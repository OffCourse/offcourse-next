import React from "react";
import { ErrorLayout } from "../layouts";
import { Group } from "@offcourse/atoms";
import MainWrapper from "../Main/MainWrapper";
import { errors as errorTypes } from "@offcourse/constants";
import { errors } from "../content";
const { TOTAL_PANIC } = errorTypes;

const NotFound = () => {
  const errorType = TOTAL_PANIC;
  const error = {
    errorType,
    ...errors[errorType]
  };
  const action = {
    message: "Take Me Home",
    onClick: () => location.assign("/")
  };
  return (
    <MainWrapper pt={0}>
      <Group
        flexDirection={["column", "row", "row"]}
        alignSelf="center"
        overflow={["hidden scroll", "hidden visible", "hidden hidden"]}
        bg="grayScale.1"
      >
        <ErrorLayout action={action} error={error} />
      </Group>
    </MainWrapper>
  );
};

export default NotFound;
