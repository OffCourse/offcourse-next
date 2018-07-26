export default {
  root: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#f4f6f4",
    overflow: "hidden"
  },
  sidebar: {
    zIndex: 4,
    position: "absolute",
    display: "flex",
    top: 0,
    bottom: 0,
    backgroundColor: "white",
    opacity: 1,
    width: "12rem",
    transition: "transform .3s ease-out",
    WebkitTransition: "-webkit-transform .3s ease-out",
    willChange: "transform",
    overflowY: "auto"
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: "scroll",
    transition: "left .3s ease-out, right .3s ease-out"
  },
  overlay: {
    zIndex: 3,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0,
    visibility: "hidden",
    transition: "all .5s ease-in-out",
    backgroundColor: "rgba(61,61,61,0.9)"
  },
  dragHandle: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    bottom: 0
  }
};
