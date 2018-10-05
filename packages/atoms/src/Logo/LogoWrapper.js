import system from "system-components";
import styled from "styled-components";

const LogoWrapper = system(
  {
    is: "div",
    bg: "black",
    hover: { backgroundColor: "primary" }
  },
  props => ({
    height: `${props.theme.logo.dimensions.height * props.multiply}rem`,
    width: `${props.theme.logo.dimensions.width * props.multiply}rem`,
    background: `url(${props.theme.logo.svg}) no-repeat top left`,
    backgroundColor: `${props.theme.logo.background}`,
    backgroundSize: "contain",
    boxSizing: "border-box"
  })
);

export default styled(LogoWrapper)`
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
