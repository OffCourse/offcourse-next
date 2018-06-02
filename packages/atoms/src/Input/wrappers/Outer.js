import system from "system-components";

const OuterWrapper = system({
  display: "flex",
  flex: 1,
  alignItems: "center",
  pb: 4,
  pt: 4,
  m: 0,
  border: 0,
  borderColor: "negative",
  bg: "grayScale.1"
}).extend`
  box-sizing: "border-box";
  grid-template-areas: "input";
  .icons, button {
    padding: 0;
    background-color: rgba(255, 255, 255, 0);
    color: ${({ theme }) => theme.colors.grayScale[2]};
    grid-area: input;
    justify-self: end;
    z-index: 1;
  }
`;

export default OuterWrapper;
