import posed from "react-pose";

const Fade = posed.div({
  visible: { opacity: ({ maxOpacity }) => maxOpacity },
  hidden: { opacity: ({ minOpacity }) => minOpacity }
});

Fade.defaultProps = {
  minOpacity: 0,
  maxOpacity: 1
};

export default Fade;
