import React from "react";
import posed from "react-pose";

const getDistance = ({ distance }) => `${distance}`;
const getNegativeDistance = ({ distance }) => `-${distance}`;

const TopAnimation = posed.div({
  close: { y: getNegativeDistance, opacity: 1 },
  open: { y: 0, opacity: 1 }
});

const BottomAnimation = posed.div({
  close: { y: getDistance, opacity: 0 },
  open: { y: 0, opacity: 1 }
});

const LeftAnimation = posed.div({
  close: { x: getNegativeDistance, opacity: 0 },
  open: { x: 0, opacity: 1 }
});

const RightAnimation = posed.div({
  close: {
    x: getDistance,
    opacity: 1
  },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 100 }
  }
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
  direction: "top",
  distance: "100%"
};

export default SlideAnimation;
