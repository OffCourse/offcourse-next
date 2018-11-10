import system from "system-components";
import styled from "styled-components";
import { affordances } from "@offcourse/constants";

const { EXPANDABLE, SELECTABLE } = affordances;
const CardWrapper = system(
  {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    bg: "grayScale.0"
  },
  "space",
  "opacity"
);

const Card = styled(CardWrapper)`
  border-bottom: ${({ theme, affordance }) => {
    return affordance === SELECTABLE ? theme.borders[2] : "none";
  }};
  border-color: ${({ theme }) => theme.colors.grayScale[2]};
  box-sizing: border-box;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  section {
    &:last-child {
      border-bottom: none;
    }
  }
`;

export default Card;
