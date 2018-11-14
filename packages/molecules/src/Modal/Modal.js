import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Heading } from "@offcourse/atoms";
import system from "system-components";

const ModalWrapper = system({
  display: "block",
  bg: "white",
  fontSize: 1,
  minWidth: "18rem",
  maxWidth: "40rem",
  width: "40rem",
  flex: 1,
  px: 0,
  py: 0,
  mx: 6,
  mt: 8,
  mb: 0,
  opacity: 1,
  overflow: ["hidden scroll", "hidden scroll", "hidden scroll"]
});

const Container = system({
  position: "absolute",
  background: "rgba(0, 0, 0, 0)",
  display: "flex",
  alignItems: ["center", "center", "center"],
  justifyContent: "center",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: ["hidden scroll", "hidden scroll", "hidden scroll"]
});

class Modal extends Component {
  static Section = Section;

  static Heading = props => (
    <Section py={6} px={6}>
      <Heading {...props} />
    </Section>
  );
  static propTypes = {
    isOpen: PropTypes.bool
  };

  render() {
    const { px, py, children } = this.props;
    return (
      <Container css={{ pointerEvents: "auto" }}>
        <ModalWrapper px={px} py={py}>
          {children}
        </ModalWrapper>
      </Container>
    );
  }
}

export default Modal;
