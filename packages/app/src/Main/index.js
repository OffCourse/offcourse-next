import React, { Component } from "react";
import { SearchBarContainer, NavBarContainer } from "../containers";
import { AboutView, CourseView, CollectionView, FAQView } from "../views";
import MainWrapper from "./MainWrapper";

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <NavBarContainer />
        <SearchBarContainer>
          <CollectionView />
          <CourseView />
          <AboutView />
          <FAQView />
        </SearchBarContainer>
      </MainWrapper>
    );
  }
}
