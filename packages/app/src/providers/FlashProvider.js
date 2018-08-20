import React, { Component } from "react";
import PropTypes from "prop-types";
import { curry } from "ramda";
import Composer from "react-composer";
import { Query, Mutation } from "../components";
import { queries, mutations } from "../graphql";

export default class FlashProvider extends Component {
  static propTypes = {
    children: PropTypes.func
  };

  render() {
    const { children } = this.props;
    return (
      <Composer
        components={[
          <Query query={queries.messages} />,
          <Mutation mutation={mutations.addMessage} />,
          <Mutation mutation={mutations.removeMessage} />
        ]}
      >
        {([queryResult, addMessage, removeMessage]) => {
          const messages = queryResult.data.messages;
          const _push = async (variant, message) => {
            const variables = { message, variant };
            await addMessage({ variables });
            removeMessage();
          };
          const push = curry(_push);
          const value = {
            messages,
            success: push("success"),
            warning: push("warning"),
            info: push("info"),
            error: push("error")
          };
          return children(value);
        }}
      </Composer>
    );
  }
}
