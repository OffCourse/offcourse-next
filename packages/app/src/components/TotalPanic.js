import React, { Component } from "react";
import Layout from "./ErrorLayout";
import { Group } from "@offcourse/atoms";
import MainWrapper from "../Main/MainWrapper";

export default class NotFound extends Component {
  render() {
    const error = {
      errorType: "genericError",
      message: "Oops!",
      explanation:
        "Currently, this page doesn't seem to exist (yet). Please check whether you have entered the correct URL in the text field of your browser. If that doesn't work, you can use the button below to go back to the home page."
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
