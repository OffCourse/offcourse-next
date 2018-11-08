import system from "system-components";
import styled from "styled-components";

const CardWrapper = system(
  {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    bg: "grayScale.0",
    borderBottom: 2,
    borderColor: "grayScale.2"
  },
  "space",
  "opacity"
);
export default styled(CardWrapper)`
  box-sizing: border-box;
    &:hover {
        border-color: ${({ theme }) => theme.colors.primary};
    }
    section {
      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
