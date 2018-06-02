import system from "system-components";

const OverlayWrapper = system({
  bg: "grayScale.4",
  display: "flex",
  position: "fixed",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}).extend`
  transition: all .5s ease-in-out;
  > * {
    opacity: ${props => (props.zIndex === 999 ? 0.9 : 0)};
    transition: all .5s ease-in-out;
  }
`;

export default OverlayWrapper;
