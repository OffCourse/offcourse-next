import React, { Component } from "react";
import PropTypes from "prop-types";
import FormWrapper from "./FormWrapper";
import { map, mapObjIndexed, values } from "ramda";
import { Section, Heading } from "@offcourse/atoms";
import { MessageGroup, ButtonGroup, LinkGroup } from "@offcourse/molecules";
import { directions, variants } from "@offcourse/constants";

const { POSITIVE } = variants;
const { VERTICAL } = directions;

const formatMessages = MessageGroup.formatMessages;

class Shell extends Component {
  state = {};

  static getDerivedStateFromProps(
    { setErrors, mode, setSubmitting, externalErrors },
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
    const { isSubmitting, isValid, buttons } = this.props;
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
        variant: POSITIVE,
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
    const messages = errors.general
      ? formatMessages([errors.general], { px: 8 })
      : [];
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
      <LinkGroup px={8} pt={6} direction={VERTICAL} links={this.linkData()} />
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

Shell.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  errors: PropTypes.shape({
    general: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  }),
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired
    })
  ),
  isSubmitting: PropTypes.bool,
  isValid: PropTypes.bool,
  buttons: PropTypes.object,
  handleSubmit: PropTypes.func,
  resetForm: PropTypes.func,
  onCancel: PropTypes.func
};

Shell.defaultProps = {
  onCancel: () => null,
  mode: "normal",
  buttons: {}
};
export default Shell;
