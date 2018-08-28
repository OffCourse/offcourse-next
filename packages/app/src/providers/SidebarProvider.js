import React, { Component } from "react";
import PropTypes from "prop-types";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

const Composed = adopt({
  sidebarQuery: <Query query={queries.sidebar} />,
  toggleSidebar: <Mutation mutation={mutations.toggleSidebar} />
});

export default class SidebarProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { children } = this.props;
    return (
      <Composed>
        {({ sidebarQuery, toggleSidebar }) => {
          const value = {
            ...sidebarQuery.data.sidebar,
            toggle: toggleSidebar
          };
          return children(value);
        }}
      </Composed>
    );
  }
}
