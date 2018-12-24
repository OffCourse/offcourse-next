import React, { Component } from "react";
import { Switch } from "react-router-dom";
import { Route } from "../components";
import {
  BackdropContainer,
  SideBarContainer,
  SearchBarContainer,
  NavBarContainer,
  OverlayContainer
} from "../containers";
import {
  AboutView,
  ContributeView,
  CourseView,
  CourseNotFoundView,
  CollectionView,
  FAQView
} from "../views";
import MainWrapper from "./MainWrapper";

export default class Main extends Component {
  render() {
    return (
      <MainWrapper>
        <NavBarContainer />
        <SideBarContainer />
        <SearchBarContainer>
          <Switch>
            <Route exact path="/" component={CollectionView} />
            <Route
              exact
              path="/search/:searchTerm"
              component={CollectionView}
            />
            <Route exact path="/curator/:curator" component={CollectionView} />
            <Route exact path="/tag/:tag" component={CollectionView} />
            <Route path="/curator/:curator/goal/:goal" component={CourseView} />
            <Route exact path="/about" component={AboutView} />
            <Route exact path="/faq" component={FAQView} />
            <Route exact path="/introduction" component={ContributeView} />
            <Route
              component={({ handlers }) => (
                <CourseNotFoundView goHome={handlers.goHome} />
              )}
            />
          </Switch>
        </SearchBarContainer>
        <BackdropContainer />
        <OverlayContainer />
      </MainWrapper>
    );
  }
}
