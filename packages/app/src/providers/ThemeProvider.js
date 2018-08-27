import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class ThemeProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };
  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.theme} />,
          <Mutation mutation={mutations.switchTheme} />
        ]}
      >
        {([queryResult, switchTheme]) => {
          const value = {
            ...queryResult.data.theme,
            switch: switchTheme
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
