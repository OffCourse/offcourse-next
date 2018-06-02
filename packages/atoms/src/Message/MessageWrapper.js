import system from "system-components";

const MessageWrapper = system(
  {
    display: "flex",
    flex: 1,
    px: 0,
    py: 0
  },
  "color",
  props => ({
    fontFamily: props.theme.fonts.base,
    userSelect: "none"
  })
).extend`
  span::after {
    content: ": ";
    white-space: pre;
  }
`;

export default MessageWrapper;
