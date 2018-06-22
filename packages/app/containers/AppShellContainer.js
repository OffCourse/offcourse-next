import React, { Component } from "react";
import { AppShell } from "@offcourse/organisms";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";

const GET_SIDEBAR = gql`
  {
    sidebar @client {
      isOpen
    }
  }
`;

const TOGGLE_SIDEBAR = gql`
  mutation ToggleSidebar {
    toggleSidebar @client
  }
`;

export default class AppShellContainer extends Component {
  goToHome = () => {
    Router.push("/");
  };

  render() {
    const { children, links } = this.props;
    return (
      <Query query={GET_SIDEBAR} variables={{}}>
        {({ data }) => {
          const { sidebar } = data;
          return (
            <Mutation mutation={TOGGLE_SIDEBAR}>
              {toggleSidebar => (
                <AppShell
                  position="fixed"
                  onLogoClick={this.goToHome}
                  toggleSidebar={toggleSidebar}
                  isSidebarOpen={sidebar.isOpen}
                  links={links}
                >
                  {children}
                </AppShell>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}
