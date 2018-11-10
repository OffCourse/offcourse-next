import styled from "styled-components";
import { Section } from "@offcourse/atoms";

const CuratorWrapper = styled(Section).attrs({
  display: "grid",
  p: 6
})`
  color: "black";
  grid-template-columns: 4rem 1fr;
  p {
    user-select: none;
    line-height: 1rem;
  }
`;

export default CuratorWrapper;
