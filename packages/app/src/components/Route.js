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
            goToCollection({ curator, tag }) {
              history.push(tag ? `/tag/${tag}` : `/curator/${curator}`);
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
