import system from "system-components";
import styled from "styled-components";

const CardWrapper = system(
  {
    display: "block",
    width: "100%",
    bg: "grayScale.0"
  },
  "space",
  "opacity"
);
export default styled(CardWrapper)`
  box-sizing: border-box;
    &:hover {
      section:last-child {
        border-color: ${({ theme }) => theme.colors.primary};
      }
    }
    section {
      &:last-child {
        border-bottom: ${({ theme }) => theme.borders[2]};
        border-color: ${({ theme }) => theme.colors.grayScale[2]};
      }
    }
  }
`;
