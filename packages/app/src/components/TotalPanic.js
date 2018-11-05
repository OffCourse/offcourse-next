import React, { Component } from "react";
import Layout from "./ErrorLayout";
import { Group } from "@offcourse/atoms";
import MainWrapper from "../Main/MainWrapper";
import { errors as errorTypes } from "@offcourse/constants";

import { errors } from "../content";
const { TOTAL_PANIC } = errorTypes;

export default class NotFound extends Component {
  render() {
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
          <Layout action={action} error={error} />
        </Group>
      </MainWrapper>
    );
  }
}
