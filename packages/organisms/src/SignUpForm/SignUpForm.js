import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { PasswordInput } from "@offcourse/molecules";
import { Form } from "..";
import Model from "./SignUpModel";

class SignUpForm extends Component {
  static propTypes = {
    /** callback that triggers when the form is submitted */
    onSubmit: PropTypes.func.isRequired,
    /** callback that triggers when the form is cancelled */
    onCancel: PropTypes.func,
    /** optional initial username */
    userName: PropTypes.string,
    /** object with external errors */
    errors: PropTypes.shape({
      userName: PropTypes.string,
      email: PropTypes.string,
      confirmationCode: PropTypes.string,
      password: PropTypes.string
    }),
    /** flag that indicates confirmMode */
    mode: PropTypes.oneOf(["confirm", "normal"]),
    /** object that defines the links to other forms */
    links: PropTypes.arrayOf(
      PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
      })
    )
  };

  render() {
    const { mode, userName, onSubmit, links, errors, onCancel } = this.props;

    return (
      <Form
        Model={Model}
        values={new Model({ userName })}
        mode={mode}
        errors={errors}
        title="Sign Up"
        onSubmit={onSubmit}
        onCancel={onCancel}
        setSubmitting={mode !== "confirm"}
      >
        <Form.Field
          unformatted
          title="User Name"
          disabled={mode === "confirm"}
          name="userName"
          placeholder="User Name"
        />

        {mode !== "confirm" && (
          <Form.Field
            unformatted
            title="Email"
            type="email"
            name="email"
            placeholder="Email Address"
          />
        )}

        {mode !== "confirm" && (
          <Form.Field
            unformatted
            title="Password"
            FieldComponent={PasswordInput}
            name="password"
            placeholder="Password"
          />
        )}

        {mode === "confirm" && (
          <Form.Field
            unformatted
            title="Confirmation Code"
            name="confirmationCode"
            placeholder="Confirmation Code"
          />
        )}
      </Form>
    );
  }
}

export default SignUpForm;
