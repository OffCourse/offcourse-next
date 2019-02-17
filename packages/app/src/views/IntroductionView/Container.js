import React, { Component } from "react";
import { Adopt } from "react-adopt";
import View from "./View";
import { CoursesProvider } from "../../providers";
import { ContentContainer } from "../../containers";

/* eslint: disable */
const mapper = {
  collection: ({ render }) => (
    <CoursesProvider first={3} collectionName="introduction">
      {render}
    </CoursesProvider>
  ),
  content: <ContentContainer term="introduction" />
};
/* eslint: enable */

const mapProps = ({ content, collection }) => {
  return {
    content,
    courses: collection.courses
  };
};

export default class Container extends Component {
  componentDidMount() {
    document.cookie = `firstVisit=${Date.now()}`;
  }
  render() {
    const { handlers } = this.props;
    return (
      <Adopt mapper={mapper} mapProps={mapProps}>
        {props => <View handlers={handlers} {...props} />}
      </Adopt>
    );
  }
}
