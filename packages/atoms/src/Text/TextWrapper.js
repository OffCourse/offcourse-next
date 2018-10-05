import system from "system-components";
import styled from "styled-components";

const TextWrapper = system({
  is: "p",
  m: 0,
  p: 0,
  fontSize: 1,
  lineHeight: 1
});

export default styled(TextWrapper)`
  word-break: break-word;
`;
