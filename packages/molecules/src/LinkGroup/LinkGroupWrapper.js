import { Group } from "@offcourse/atoms";

export default Group.extend`
  > a {
    margin-right: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "row" ? theme.space[6] : 0};
    margin-bottom: ${({ theme, flexDirection, spacing }) =>
      flexDirection === "column" ? theme.space[6] : 0};

    &:last-child {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;
