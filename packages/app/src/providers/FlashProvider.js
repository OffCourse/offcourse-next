import React from "react";
import { curry } from "ramda";
import { adopt } from "react-adopt";
import { Query, Mutation } from "../components";
import initData from "../graphql";

const { queries, mutations } = initData;

const mapper = {
  messagesQuery: <Query query={queries.messages} />,
  addMessage: <Mutation mutation={mutations.addMessage} />,
  removeMessage: <Mutation mutation={mutations.removeMessage} />
};

const mapProps = ({ messagesQuery, addMessage, removeMessage }) => {
  const messages = messagesQuery.data.messages;
  const _push = async (variant, message) => {
    const variables = { message, variant };
    await addMessage({ variables });
    removeMessage();
  };
  const push = curry(_push);
  return {
    messages,
    success: push("success"),
    warning: push("warning"),
    info: push("info"),
    error: push("error")
  };
};

export default adopt(mapper, mapProps);
