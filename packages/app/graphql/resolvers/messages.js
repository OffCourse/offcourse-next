import { queries } from "..";
import { dropLast } from "ramda"

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const addMessage = (_, { variant, message }, { cache, getCacheKey }) => {
  const previous = cache.readQuery({ query: queries.messages });
  const newMessage = { __typename: "Message", variant, message }
  const messages = [newMessage, ...previous.messages]
  cache.writeData({ data: { messages } });
  return newMessage;
};

const removeMessage = async (_, __, { cache, getCacheKey }) => {
  await timeout(1500);
  const previous = cache.readQuery({ query: queries.messages });
  const messages = dropLast(1, previous.messages);
  cache.writeData({ data: { messages } });
  return null;
};

export { addMessage, removeMessage };
