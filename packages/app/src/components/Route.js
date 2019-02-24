import React from "react";
import { debounce } from "debounce";
import PropTypes from "prop-types";
import { map } from "ramda";
import { Route as RRoute } from "react-router-dom";

const goToCollection = debounce((history, qs) => {
  const { curator, tag, searchTerm } = map(encodeURIComponent, qs);
  if (tag) {
    history.push(`/tag/${tag}`);
  }
  if (curator) {
    history.push(`/curator/${curator}`);
  }
  if (searchTerm) {
    history.push(`/search/${searchTerm}`);
  }
  if (!curator && !tag && !searchTerm) {
    history.push("/");
  }
}, 300);

const Route = ({
  component: ComponentToRender,
  children,
  componentProps,
  ...rest
}) => {
  return (
    <RRoute
      {...rest}
      render={({ history, match: rawMatch, ...props }) => {
        const params = map(decodeURIComponent, rawMatch.params);
        const match = { ...rawMatch, params };

        const handlers = {
          goHome() {
            history.push("/");
          },
          goToAbout() {
            history.push("/about");
          },
          goToFAQ() {
            history.push("/faq");
          },
          goToCollection(qs) {
            goToCollection(history, qs);
          },
          goToCourse(qs) {
            const { curator, goal } = map(encodeURIComponent, qs);
            history.push(`/curator/${curator}/goal/${goal}`);
          },
          goToCheckpoint(qs) {
            const { curator, goal, task } = map(encodeURIComponent, qs);
            history.push(`/curator/${curator}/goal/${goal}/task/${task}`);
          }
        };
        return children ? (
          children({ ...props, match, handlers })
        ) : (
          <ComponentToRender
            {...componentProps}
            {...props}
            match={match}
            handlers={handlers}
          />
        );
      }}
    />
  );
};

Route.propTypes = {
  component: PropTypes.func,
  children: PropTypes.func
};

export default Route;
