import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route as RRoute } from "react-router-dom";

export default class Route extends Component {
  static propTypes = {
    component: PropTypes.func,
    children: PropTypes.func
  };

  render() {
    const { component: ComponentToRender, children, ...rest } = this.props;
    return (
      <RRoute
        {...rest}
        render={({ history, ...props }) => {
          const handlers = {
            goHome() {
              history.push("/");
            },
            goToCollection({ curator, tag, searchTerm }) {
              if (tag) {
                history.push(`/tag/${tag}`);
              }
              if (curator) {
                history.push(`/curator/${curator}`);
              }
              if (searchTerm) {
                history.push(`/search/${searchTerm}`);
              }
              if (curator || tag | searchTerm) {
                history.push("/");
              }
            },
            goToCourse({ curator, goal }) {
              history.push(`/curator/${curator}/goal/${goal}`);
            },
            goToCheckpoint({ curator, goal, task }) {
              history.push(`/curator/${curator}/goal/${goal}/task/${task}`);
            }
          };

          return children ? (
            children({ ...props, handlers })
          ) : (
            <ComponentToRender {...props} handlers={handlers} />
          );
        }}
      />
    );
  }
}
