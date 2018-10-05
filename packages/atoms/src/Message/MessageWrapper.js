import system from "system-components";
import styled from "styled-components";

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
);

export default styled(MessageWrapper)`
  span::after {
    content: ": ";
    white-space: pre;
  }
`;
