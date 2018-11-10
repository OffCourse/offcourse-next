import posed from "react-pose";

const Fade = posed.div({
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
});

export default Fade;
