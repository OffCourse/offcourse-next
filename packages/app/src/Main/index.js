import React, { Component } from "react";
import { AboutView, CourseView, CollectionView, FAQView } from "../views";
import MainWrapper from "./MainWrapper";

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <CollectionView />
        <CourseView />
        <AboutView />
        <FAQView />
      </MainWrapper>
    );
  }
}
