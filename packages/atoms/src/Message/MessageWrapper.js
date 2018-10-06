import system from "system-components";
import styled from "styled-components";
import { variant } from "styled-system";

const messageStyle = variant({
  key: "signalColorCombos"
});
const basicMessageStyle = variant({
  key: "signalColors"
});

const MessageWrapper = system(
  {
    display: "flex",
    flex: 1,
    px: 0,
    py: 0,
    fontFamily: "base"
  },
  props => ({
    userSelect: "none"
  })
);

export const BasicMessageWrapper = styled(MessageWrapper)`
  ${basicMessageStyle};
  span::after {
    content: ": ";
    white-space: pre;
  }
`;

export default styled(MessageWrapper)`
  ${messageStyle};
  span::after {
    content: ": ";
    white-space: pre;
  }
`;
