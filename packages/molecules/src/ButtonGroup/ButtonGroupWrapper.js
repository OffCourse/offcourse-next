import system from "system-components";
import styled from "styled-components";
import { Group } from "@offcourse/atoms";

export default styled(Group.Wrapper)`
  flex-wrap: wrap;
  > button {
    margin-right: ${({ theme }) => theme.space[3]};

    &:last-child {
      margin-right: 0;
      }
    }
  }
`;
