import system from "system-components";

const AvatarWrapper = system(
  {
    is: "div",
    bg: "black",
    hover: { backgroundColor: "primary" }
  },
  props => ({
    height: `${props.theme.avatar.dimensions.height * props.multiply}rem`,
    width: `${props.theme.avatar.dimensions.width * props.multiply}rem`,
    background: `url(${props.theme.avatar.svg}) no-repeat top left`,
    backgroundColor: `${props.theme.avatar.background}`,
    backgroundSize: "contain",
    boxSizing: "border-box"
  })
);

export default AvatarWrapper;
