import React, { Component } from "react";
import PropTypes from "prop-types";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const Composed = adopt({
  themeQuery: <Query query={queries.theme} />,
  switchTheme: <Mutation mutation={mutations.switchTheme} />
});

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };
  render() {
    const { children } = this.props;
    return (
      <Composed>
        {({ themeQuery, switchTheme }) => {
          const value = {
            ...themeQuery.data.theme,
            switch: switchTheme
          };
          return children(value);
        }}
      </Composed>
    );
  }
}
