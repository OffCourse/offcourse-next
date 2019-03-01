import React from "react";
import { Switch } from "react-router-dom";
import { ErrorBoundary, Route } from "../components";
import { useGlobalEvents } from "../hooks";
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
  IntroductionView,
  CourseView,
  CourseNotFoundView,
  CollectionView,
  TotalPanicView,
  FAQView
} from "../views";
import MainWrapper from "./MainWrapper";

const Main = () => {
  useGlobalEvents();
  return (
    <MainWrapper>
      <NavBarContainer />
      <SideBarContainer />
      <SearchBarContainer>
        <ErrorBoundary componentToRender={TotalPanicView}>
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
            <Route exact path="/contribute" component={ContributeView} />
            <Route exact path="/introduction" component={IntroductionView} />
            <Route
              component={({ handlers }) => (
                <CourseNotFoundView goHome={handlers.goHome} />
              )}
            />
          </Switch>
        </ErrorBoundary>
      </SearchBarContainer>
      <BackdropContainer />
      <OverlayContainer />
    </MainWrapper>
  );
};

export default Main;
