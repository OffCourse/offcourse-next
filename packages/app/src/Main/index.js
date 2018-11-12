import React, { Component } from "react";
import {
  BackdropContainer,
  SideBarContainer,
  SearchBarContainer,
  NavBarContainer,
  OverlayContainer
} from "../containers";
import { AboutView, CourseView, CollectionView, FAQView } from "../views";
import MainWrapper from "./MainWrapper";

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <NavBarContainer />
        <SideBarContainer />
        <SearchBarContainer>
          <CollectionView />
          <CourseView />
          <AboutView />
          <FAQView />
        </SearchBarContainer>
        <BackdropContainer />
        <OverlayContainer />
      </MainWrapper>
    );
  }
}
