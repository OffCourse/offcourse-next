import system from "system-components";
import styled from "styled-components";

const OuterWrapper = system({
  size: "1.25rem",
  display: "grid",
  bg: "white",
  justifyContent: "center",
  alignItems: "center"
});

export default styled(OuterWrapper)`
  user-select: none;

  grid-template-areas: "checkbox";

  > input[type="checkbox"] {
    display: none;
  }

  > input[type="checkbox"]:checked + label {
    display: block;
  }
`;
