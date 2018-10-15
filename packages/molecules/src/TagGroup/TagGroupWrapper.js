import system from "system-components";
import styled from "styled-components";

const TagGroupWrapper = system(
  {
    display: "flex",
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    px: 0,
    pb: 0,
    pt: 0
  },
  "alignSelf",
  "justifyContent"
);

export default styled(TagGroupWrapper)`
  margin-bottom: ${({ theme }) => `-${theme.space[3]}}`};
  div {
    margin-left: ${({ theme, justifyContent }) =>
      justifyContent === "flex-end" ? theme.space[3] : 0};
    margin-right: ${({ theme, justifyContent }) =>
      justifyContent === "flex-end" ? 0 : theme.space[3]};
    margin-bottom: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
    }
  }
`;
