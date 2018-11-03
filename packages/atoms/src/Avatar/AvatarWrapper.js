import system from "system-components";

const AvatarWrapper = system(
  {
    is: "div",
    bg: "black",
    hover: { backgroundColor: "primary" }
  },
  props => ({
    height: `${props.theme.avatars[props.variant].dimensions.height *
      props.multiply}rem`,
    width: `${props.theme.avatars[props.variant].dimensions.width *
      props.multiply}rem`,
    background: `url(${
      props.theme.avatars[props.variant].svg
    }) no-repeat top left`,
    backgroundColor: `${props.theme.avatars[props.variant].background}`,
    backgroundSize: "contain",
    boxSizing: "border-box"
  })
);

export default AvatarWrapper;
