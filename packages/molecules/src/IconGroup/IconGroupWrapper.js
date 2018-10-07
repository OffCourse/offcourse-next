import { Group } from "@offcourse/atoms";
import styled from "styled-components";
const { HORIZONTAL, VERTICAL } = Group.directions;

const IconGroupWrapper = styled(Group.Wrapper)`
  > a,
  button {
    margin-right: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "row" ? theme.space[4] : 0};
    margin-bottom: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "column" ? theme.space[1] : 0};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

IconGroupWrapper.styleProps = {
  [HORIZONTAL]: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  [VERTICAL]: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default IconGroupWrapper;
