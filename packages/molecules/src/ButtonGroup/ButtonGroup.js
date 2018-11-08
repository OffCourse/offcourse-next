import React from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../helpers";
import { isEmpty } from "ramda";
import { Button } from "@offcourse/atoms";
import ButtonGroupWrapper from "./ButtonGroupWrapper";
import { sizes, variants } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

const ButtonGroup = ({ buttons, size, pt, justifyContent, children }) => {
  const renderButtons = () => {
    return mapIndexed(
      ({ title, ...rest }, index) => (
        <Button size={size} {...rest} key={index}>
          {title}
        </Button>
      ),
      buttons
    );
  };
  return (
    <ButtonGroupWrapper
      flexDirection="row"
      pt={pt}
      justifyContent={justifyContent}
    >
      {isEmpty(buttons) ? children : renderButtons()}
    </ButtonGroupWrapper>
  );
};

ButtonGroup.Button = Button;

ButtonGroup.propTypes = {
  size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
  pt: PropTypes.number,
  justifyContent: PropTypes.string,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.oneOf([DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE]),
      href: PropTypes.string,
      onClick: PropTypes.func,
      type: PropTypes.oneOf(["button", "submit"]),
      disabled: PropTypes.bool
    })
  ),
  children: PropTypes.node
};

ButtonGroup.defaultProps = {
  buttons: []
};

export default ButtonGroup;
