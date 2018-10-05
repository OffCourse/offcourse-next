import system from "system-components";
import styled from "styled-components";

const CuratorWrapper = system({
  display: "grid",
  color: "black"
});

export default styled(CuratorWrapper)`
  grid-template-columns: 4rem 1fr;
  p {
    user-select: none;
    line-height: 1rem;
  }
`;
