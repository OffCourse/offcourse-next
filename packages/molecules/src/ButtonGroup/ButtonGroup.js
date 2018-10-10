import React, { Component } from "react";
import PropTypes from "prop-types";
import { mapIndexed } from "../helpers";
import { isEmpty } from "ramda";
import { Button } from "@offcourse/atoms";
import ButtonGroupWrapper from "./ButtonGroupWrapper";
import { sizes, variants } from "@offcourse/constants";

const { SMALL, NORMAL, LARGE } = sizes;
const { DEFAULT, INFO, POSITIVE, WARNING, NEGATIVE } = variants;

export default class ButtonGroup extends Component {
  static Button = Button;

  static propTypes = {
    size: PropTypes.oneOf([SMALL, NORMAL, LARGE]),
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
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.arrayOf(PropTypes.element)
    ])
  };

  static defaultProps = {
    buttons: []
  };

  renderButtons = () => {
    const { buttons, size } = this.props;
    return mapIndexed(
      (props, index) => (
        <Button size={size} {...props} key={index}>
          {props.title}
        </Button>
      ),
      buttons
    );
  };

  render() {
    const { buttons, pt, justifyContent, children } = this.props;
    return (
      <ButtonGroupWrapper
        flexDirection="row"
        pt={pt}
        justifyContent={justifyContent}
      >
        {isEmpty(buttons) ? children : this.renderButtons()}
      </ButtonGroupWrapper>
    );
  }
}
