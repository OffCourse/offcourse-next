import system from "system-components";
import styled from "styled-components";

const BaseWrapper = system(
  {
    is: "input",
    bg: "grayScale.1",
    color: "black",
    p: 0,
    px: 6,
    m: 0,
    border: 0,
    fontSize: 1,
    lineHeight: 1,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
    fontFamily: "bold"
  },
  props => ({
    boxSizing: "border-box",
    color: `${
      props.disabled ? props.theme.colors.disabled : props.theme.colors.black
    }`
  })
);

export default styled(BaseWrapper)`
  ::placeholder {
    color: ${({ theme }) => theme.colors.grayScale[3]};
  }

  ::selection {
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  &:focus {
    outline: none;
  }
`;
