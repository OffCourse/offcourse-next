import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Heading, Overlay } from "@offcourse/atoms";
import Container from "./Container";

class Modal extends Component {
  static Heading = props => (
    <Section py={6} px={6}>
      <Heading {...props} />
    </Section>
  );

  static Section = Section;

  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func
  };

  render() {
    const { isOpen, px, py, children, close } = this.props;
    return (
      <Overlay close={close} isOpen={isOpen}>
        <Container px={px} py={py}>
          {children}
        </Container>
      </Overlay>
    );
  }
}

export default Modal;
