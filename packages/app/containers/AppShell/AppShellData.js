import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import Composer from "react-composer";
import { queries, mutations } from "../../graphql";

export default class AppShellData extends Component {
  render() {
    const { children } = this.props;
    const { toggleSidebar, openOverlay, switchTheme } = mutations;
    const nullHandler = () => null;
    return (
      <Composer
        components={[
          <Query query={queries.appState} children={nullHandler} />,
          <Mutation mutation={toggleSidebar} children={nullHandler} />,
          <Mutation mutation={openOverlay} children={nullHandler} />,
          <Mutation
            mutation={switchTheme}
            refetchQueries={[{ query: queries.appState }]}
            children={nullHandler}
          />
        ]}
      >
        {([results, toggleSidebar, openOverlay, switchTheme]) => {
          const { sidebar, theme } = results.data;
          return children({
            sidebar,
            switchTheme: switchTheme,
            toggleSidebar,
            openOverlay
          });
        }}
      </Composer>
    );
  }
}
