import React from "react";
import posed from "react-pose";

const TopAnimation = posed.div({
  close: { y: "-100%", opacity: 0 },
  open: { y: 0, opacity: 1 }
});

const BottomAnimation = posed.div({
  close: { y: "200%", opacity: 0 },
  open: { y: 0, opacity: 1 }
});

const LeftAnimation = posed.div({
  close: { x: "-100%", opacity: 0 },
  open: { x: 0, opacity: 1 }
});

const RightAnimation = posed.div({
  close: { x: "200%", opacity: 0 },
  open: { x: 0, opacity: 1 }
});

const animations = {
  left: LeftAnimation,
  right: RightAnimation,
  top: TopAnimation,
  bottom: BottomAnimation
};
const SlideAnimation = ({ direction, ...props }) => {
  const Animation = animations[direction];
  return <Animation {...props} />;
};

SlideAnimation.defaultProps = {
  direction: "top"
};

export default SlideAnimation;
