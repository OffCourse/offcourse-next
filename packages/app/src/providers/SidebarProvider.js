import React, { Component } from "react";
import PropTypes from "prop-types";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class SidebarProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };
  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.sidebar} />,
          <Mutation mutation={mutations.toggleSidebar} />
        ]}
      >
        {([queryResult, toggleSidebar]) => {
          const value = {
            ...queryResult.data.sidebar,
            toggle: toggleSidebar
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
