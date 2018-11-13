import React, { Component } from "react";
import PropTypes from "prop-types";
import { Section, Heading } from "@offcourse/atoms";
import ModalWrapper from "./Container";

const Container = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        background: "rgba(0, 0, 0, 0)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: "hidden hidden",
        pointerEvents: "auto"
      }}
    >
      {children}
    </div>
  );
};

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
      <Container>
        <ModalWrapper px={px} py={py}>
          {children}
        </ModalWrapper>
      </Container>
    );
  }
}

export default Modal;
