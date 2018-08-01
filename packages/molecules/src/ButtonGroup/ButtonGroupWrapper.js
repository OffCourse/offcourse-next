import system from "system-components";
import { Group } from "@offcourse/atoms";

export default Group.Wrapper.extend`
  flex-wrap: wrap;
  > button {
    margin-right: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
      }
    }
  }
`;
