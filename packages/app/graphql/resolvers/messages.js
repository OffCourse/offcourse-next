import { queries } from "..";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const addMessage = (_, { variant, message }, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.messages });
  const newMessage = { __typename: "Message", variant, message }
  const messages = [...previous.messages, newMessage]
  cache.writeData({ data: { messages } });
  return newMessage;
};

const removeMessage = (_, __, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.messages });
  const [___, ...messages] = previous.messages;
  cache.writeData({ data: { messages } });
  return null;
};

export { addMessage, removeMessage };
