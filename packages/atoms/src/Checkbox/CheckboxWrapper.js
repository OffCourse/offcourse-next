import system from "system-components";

const OuterWrapper = system({
  size: "1.25rem",
  display: "grid",
  bg: "white",
  justifyContent: "center",
  alignItems: "center"
}).extend`
  grid-template-areas: "checkbox";

  > input[type="checkbox"] {
    display: none;
  }

  > input[type="checkbox"]:checked + label {
    display: block;
  }
`;

export default OuterWrapper;
