import system from "system-components";
import { Group } from "@offcourse/atoms";

export default Group.extend`
  flex-wrap: wrap;
  > button {
    margin-right: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
      }
    }
  }
`;
