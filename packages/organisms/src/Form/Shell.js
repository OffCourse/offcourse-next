import React, { Children, Fragment, Component } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import { map, mapObjIndexed, values } from "ramda";
import { Section, Heading } from "@offcourse/atoms";
import { MessageGroup, ButtonGroup, LinkGroup } from "@offcourse/molecules";

const Button = ButtonGroup.Button;
const formatMessages = MessageGroup.formatMessages;

class Shell extends Component {
  state = {};
  static defaultProps = {
    onCancel: () => null,
    mode: "normal",
    buttons: {}
  };

  static getDerivedStateFromProps(
    { setErrors, mode, setSubmitting, errors, externalErrors },
    { previousErrors, previousMode }
  ) {
    if (externalErrors !== previousErrors) {
      setErrors(externalErrors);
      setSubmitting(false);
    }

    if (mode !== previousMode) {
      setSubmitting(false);
    }

    return {
      previousErrors: externalErrors,
      previousMode: mode
    };
  }

  handleCancel = () => {
    const { resetForm, onCancel } = this.props;
    resetForm();
    onCancel();
  };

  buttonData() {
    const { dirty, isSubmitting, isValid, buttons } = this.props;
    const { cancel, submit, ...rest } = buttons;

    const others = mapObjIndexed((obj, key) => {
      return {
        ...obj,
        disabled: isSubmitting
      };
    }, rest);

    return values({
      cancel: {
        title: "Cancel",
        onClick: this.handleCancel,
        disabled: isSubmitting,
        ...cancel
      },
      submit: {
        title: "Submit",
        variant: "positive",
        type: "submit",
        disabled: !isValid || isSubmitting,
        ...submit
      },
      ...others
    });
  }

  linkData() {
    const { links, values } = this.props;
    return map(({ onClick, title }) => {
      return { onClick: () => onClick(values), title };
    }, links);
  }

  renderErrors() {
    const { errors } = this.props;
    const messages =
      errors.general && formatMessages([errors.general], { px: 8 });
    return <MessageGroup messages={messages} />;
  }

  renderHeader() {
    const { title } = this.props;
    return (
      <Section py={6} px={8}>
        <Heading>{title}</Heading>
      </Section>
    );
  }

  renderLinks() {
    return (
      <LinkGroup px={8} pt={6} direction="vertical" links={this.linkData()} />
    );
  }

  renderButtons() {
    return (
      <Section
        py={7}
        display="flex"
        flexDirection="column"
        alignItems="flex-end"
      >
        <ButtonGroup buttons={this.buttonData()} />
      </Section>
    );
  }

  render() {
    const { children, links, handleSubmit } = this.props;
    return (
      <FormWrapper onSubmit={handleSubmit}>
        {this.renderErrors()}
        {this.renderHeader()}
        {children}
        {links && this.renderLinks()}
        {this.renderButtons()}
      </FormWrapper>
    );
  }
}

export default Shell;
